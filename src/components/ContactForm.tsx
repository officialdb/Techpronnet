"use client";

import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { SERVICE_OPTIONS } from "@/lib/validations";
import { submitContactInquiry, ContactActionResult } from "@/app/actions/contact";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    service: "",
    details: "",
  });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverResult, setServerResult] = useState<ContactActionResult | null>(null);

  // Listen to service selection events from the services section and URL query params
  useEffect(() => {
    // Check URL query param on mount
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const serviceParam = urlParams.get("service");
      if (serviceParam) {
        setFormData((prev) => ({ ...prev, service: serviceParam }));
        setFieldErrors((prev) => {
          const next = { ...prev };
          delete next.service;
          return next;
        });
      }
    }

    const handleServiceSelect = (e: Event) => {
      const customEvent = e as CustomEvent<{ service: string }>;
      if (customEvent.detail?.service) {
        setFormData((prev) => ({ ...prev, service: customEvent.detail.service }));
        setFieldErrors((prev) => {
          const next = { ...prev };
          delete next.service;
          return next;
        });
      }
    };

    window.addEventListener("select-service", handleServiceSelect);
    return () => {
      window.removeEventListener("select-service", handleServiceSelect);
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear inline error when typing
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerResult(null);
    setFieldErrors({});
    setIsSubmitting(true);

    try {
      // Validate exclusively on the server side per architectural specification
      const result = await submitContactInquiry(null, formData);
      setServerResult(result);

      if (result.success) {
        // Reset form on success
        setFormData({
          name: "",
          business: "",
          email: "",
          phone: "",
          service: "",
          details: "",
        });
      } else if (result.errors) {
        const errors: Record<string, string> = {};
        for (const [key, val] of Object.entries(result.errors)) {
          if (val && val[0]) errors[key] = val[0];
        }
        setFieldErrors(errors);
      }
    } catch (err) {
      console.error("Submission failed:", err);
      setServerResult({
        success: false,
        message: "A network error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setServerResult(null);
    setFieldErrors({});
  };

  if (serverResult?.success) {
    return (
      <div className="bg-white border border-line p-6 sm:p-12 text-center animate-in fade-in duration-300">
        <div className="size-14 sm:size-16 bg-sage text-navy rounded-full flex items-center justify-center mx-auto mb-5 sm:mb-6">
          <CheckCircle2 className="size-8 sm:size-9" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-ink mb-2">
          Enquiry Received
        </h3>
        <p className="text-muted text-sm sm:text-base max-w-md mx-auto mb-6 leading-relaxed">
          {serverResult.message}
        </p>

        {serverResult.referenceId && (
          <div className="bg-sand border border-line px-4 py-2.5 sm:py-3 inline-block mb-6 sm:mb-8 text-xs font-mono text-ink">
            Reference Code:{" "}
            <span className="font-bold text-navy">{serverResult.referenceId}</span>
          </div>
        )}

        <div>
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center justify-center gap-2 bg-ink text-white px-6 py-3.5 text-sm font-medium hover:bg-navy transition-colors cursor-pointer w-full sm:w-auto"
          >
            Submit Another Project Enquiry
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white border border-line p-5 sm:p-9 space-y-5 sm:space-y-6 shadow-xs"
    >
      {/* Global Server Error Banner */}
      {serverResult && !serverResult.success && (
        <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-none flex items-start gap-3 text-sm">
          <AlertCircle className="size-5 text-red-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold">Unable to submit enquiry</p>
            <p className="mt-0.5 text-red-700">{serverResult.message}</p>
          </div>
        </div>
      )}

      {/* Name and Business */}
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
        <div>
          <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-ink mb-1.5 sm:mb-2">
            Your name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full name"
            aria-invalid={!!fieldErrors.name}
            aria-describedby={fieldErrors.name ? "name-error" : undefined}
            className={`w-full rounded-xl bg-[#FAF9F6] border ${
              fieldErrors.name ? "border-red-400" : "border-[#E5E7EB]"
            } px-4 py-3.5 text-sm text-[#181B1E] placeholder:text-muted/60 focus:border-[#8EDE35] focus:outline-none focus:ring-2 focus:ring-[#8EDE35]/25 transition-all`}
          />
          {fieldErrors.name && (
            <p id="name-error" className="mt-1.5 text-xs text-red-600">
              {fieldErrors.name}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="business"
            className="block text-xs sm:text-sm font-medium text-ink mb-1.5 sm:mb-2"
          >
            Business name
          </label>
          <input
            id="business"
            name="business"
            type="text"
            autoComplete="organization"
            value={formData.business}
            onChange={handleChange}
            placeholder="Your company"
            aria-invalid={!!fieldErrors.business}
            aria-describedby={fieldErrors.business ? "business-error" : undefined}
            className={`w-full rounded-xl bg-[#FAF9F6] border ${
              fieldErrors.business ? "border-red-400" : "border-[#E5E7EB]"
            } px-4 py-3.5 text-sm text-[#181B1E] placeholder:text-muted/60 focus:border-[#8EDE35] focus:outline-none focus:ring-2 focus:ring-[#8EDE35]/25 transition-all`}
          />
          {fieldErrors.business && (
            <p id="business-error" className="mt-1.5 text-xs text-red-600">
              {fieldErrors.business}
            </p>
          )}
        </div>
      </div>

      {/* Email and Phone */}
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
        <div>
          <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-ink mb-1.5 sm:mb-2">
            Email address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@company.com"
            aria-invalid={!!fieldErrors.email}
            aria-describedby={fieldErrors.email ? "email-error" : undefined}
            className={`w-full rounded-xl bg-[#FAF9F6] border ${
              fieldErrors.email ? "border-red-400" : "border-[#E5E7EB]"
            } px-4 py-3.5 text-sm text-[#181B1E] placeholder:text-muted/60 focus:border-[#8EDE35] focus:outline-none focus:ring-2 focus:ring-[#8EDE35]/25 transition-all`}
          />
          {fieldErrors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-red-600">
              {fieldErrors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-ink mb-1.5 sm:mb-2">
            Phone / WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your contact number"
            aria-invalid={!!fieldErrors.phone}
            aria-describedby={fieldErrors.phone ? "phone-error" : undefined}
            className={`w-full rounded-xl bg-[#FAF9F6] border ${
              fieldErrors.phone ? "border-red-400" : "border-[#E5E7EB]"
            } px-4 py-3.5 text-sm text-[#181B1E] placeholder:text-muted/60 focus:border-[#8EDE35] focus:outline-none focus:ring-2 focus:ring-[#8EDE35]/25 transition-all`}
          />
          {fieldErrors.phone && (
            <p id="phone-error" className="mt-1.5 text-xs text-red-600">
              {fieldErrors.phone}
            </p>
          )}
        </div>
      </div>

      {/* Service Choice */}
      <div>
        <label htmlFor="service" className="block text-xs sm:text-sm font-medium text-ink mb-1.5 sm:mb-2">
          What do you need? <span className="text-red-500">*</span>
        </label>
        <select
          id="service"
          name="service"
          required
          value={formData.service}
          onChange={handleChange}
          aria-invalid={!!fieldErrors.service}
          aria-describedby={fieldErrors.service ? "service-error" : undefined}
          className={`w-full rounded-xl bg-[#FAF9F6] border ${
            fieldErrors.service ? "border-red-400" : "border-[#E5E7EB]"
          } px-4 py-3.5 text-sm text-[#181B1E] focus:border-[#8EDE35] focus:outline-none focus:ring-2 focus:ring-[#8EDE35]/25 transition-all`}
        >
          <option value="" disabled>
            Select a service
          </option>
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        {fieldErrors.service && (
          <p id="service-error" className="mt-1.5 text-xs text-red-600">
            {fieldErrors.service}
          </p>
        )}
      </div>

      {/* Project Details */}
      <div>
        <label htmlFor="details" className="block text-xs sm:text-sm font-medium text-ink mb-1.5 sm:mb-2">
          Tell us about your project <span className="text-red-500">*</span>
        </label>
        <textarea
          id="details"
          name="details"
          required
          rows={4}
          value={formData.details}
          onChange={handleChange}
          placeholder="What would you like to build, improve or automate?"
          aria-invalid={!!fieldErrors.details}
          aria-describedby={fieldErrors.details ? "details-error" : undefined}
          className={`w-full resize-y rounded-xl bg-[#FAF9F6] border ${
            fieldErrors.details ? "border-red-400" : "border-[#E5E7EB]"
          } px-4 py-3.5 text-sm text-[#181B1E] placeholder:text-muted/60 focus:border-[#8EDE35] focus:outline-none focus:ring-2 focus:ring-[#8EDE35]/25 transition-all`}
        />
        {fieldErrors.details && (
          <p id="details-error" className="mt-1.5 text-xs text-red-600">
            {fieldErrors.details}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#8EDE35] text-[#181B1E] px-9 py-4 text-sm font-bold rounded-xl hover:bg-[#7ECC28] disabled:opacity-75 disabled:cursor-not-allowed transition-colors cursor-pointer shadow-sm"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Sending Project Enquiry...</span>
            </>
          ) : (
            <>
              <span>Send Project Enquiry</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>

      <p className="text-xs text-muted leading-5">
        Your information will be safely used to respond to your project enquiry.
      </p>
    </form>
  );
}
