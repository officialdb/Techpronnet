"use server";

import { getDbClient } from "@/lib/db";
import { contactSchema, ContactFormData } from "@/lib/validations";

export interface ContactActionResult {
  success: boolean;
  message: string;
  referenceId?: string;
  errors?: Record<string, string[]>;
}

export async function submitContactInquiry(
  prevState: ContactActionResult | null,
  formData: FormData | ContactFormData
): Promise<ContactActionResult> {
  try {
    // Normalize data from either FormData or plain object
    let rawData: Record<string, unknown>;
    if (formData instanceof FormData) {
      rawData = {
        name: formData.get("name"),
        business: formData.get("business"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        service: formData.get("service"),
        details: formData.get("details"),
      };
    } else {
      rawData = formData;
    }

    // Validate using Zod schema
    const validationResult = contactSchema.safeParse(rawData);
    if (!validationResult.success) {
      const flattened = validationResult.error.flatten();
      return {
        success: false,
        message: "Please check the form for errors.",
        errors: flattened.fieldErrors,
      };
    }

    const { name, business, email, phone, service, details } = validationResult.data;

    const sql = getDbClient();

    // Insert into contact_inquiries table in Neon Postgres
    const result = await sql`
      INSERT INTO contact_inquiries (
        name,
        business,
        email,
        phone,
        service,
        details,
        status,
        created_at,
        updated_at
      ) VALUES (
        ${name},
        ${business || null},
        ${email},
        ${phone || null},
        ${service},
        ${details},
        'NEW',
        NOW(),
        NOW()
      )
      RETURNING id, created_at;
    `;

    const insertedId = result[0]?.id;
    const referenceCode = `TPN-${new Date().getFullYear()}${String(new Date().getMonth() + 1).padStart(2, "0")}-${String(insertedId).padStart(4, "0")}`;

    // Also mirror to existing leads table if present, ensuring complete backwards compatibility
    try {
      await sql`
        INSERT INTO leads (
          name,
          email,
          phone,
          company,
          source,
          status,
          notes,
          created_at,
          updated_at
        ) VALUES (
          ${name},
          ${email},
          ${phone || "Not provided"},
          ${business || null},
          ${'Web Inquiry (' + service + ')'},
          'NEW',
          ${'Ref: ' + referenceCode + ' | Service: ' + service + ' | Details: ' + details},
          NOW(),
          NOW()
        );
      `;
    } catch (leadsErr) {
      // Non-blocking fallback if leads table has custom triggers or constraints
      console.warn("Optional leads sync skipped:", leadsErr);
    }

    return {
      success: true,
      message: "Thank you for reaching out! We have received your enquiry and our team will get in touch with you shortly.",
      referenceId: referenceCode,
    };
  } catch (error) {
    console.error("Error submitting contact inquiry to Neon:", error);
    return {
      success: false,
      message: "An unexpected error occurred while sending your enquiry. Please try again.",
    };
  }
}
