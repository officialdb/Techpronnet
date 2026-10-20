import { z } from "zod";

export const SERVICE_OPTIONS = [
  "Website or web portal",
  "Mobile application",
  "Custom business software",
  "Workflow automation",
  "API or software integration",
  "Maintenance and support",
  "Other project",
] as const;

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Please provide your full name (at least 2 characters)." })
    .max(100, { message: "Name must be under 100 characters." }),
  business: z
    .string()
    .trim()
    .max(120, { message: "Business name must be under 120 characters." })
    .optional()
    .or(z.literal("")),
  email: z
    .string()
    .trim()
    .email({ message: "Please provide a valid email address." })
    .max(255, { message: "Email is too long." }),
  phone: z
    .string()
    .trim()
    .max(50, { message: "Phone number must be under 50 characters." })
    .optional()
    .or(z.literal("")),
  service: z
    .string({
      error: "Please select the service you are interested in.",
    })
    .min(1, { message: "Please select a service." }),
  details: z
    .string()
    .trim()
    .min(10, { message: "Please share a brief summary of your project (at least 10 characters)." })
    .max(2000, { message: "Project details must be under 2000 characters." }),
});

export type ContactFormData = z.infer<typeof contactSchema>;
