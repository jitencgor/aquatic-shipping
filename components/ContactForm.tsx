"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { leadSchema, type LeadFormData } from "@/lib/schemas";

const SERVICE_OPTIONS = [
  "Customs Clearance (Import)",
  "Customs Clearance (Export)",
  "Inland Freight Forwarding",
  "Inland Transportation",
  "Warehousing",
  "Cargo Insurance",
  "Palletization",
  "Fumigation",
  "Packaging & Labeling",
  "RFID Seal",
  "Other / General Inquiry",
];

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
  });

  const onSubmit = async (data: LeadFormData) => {
    setStatus("submitting");
    try {
      await addDoc(collection(db, "leads"), {
        ...data,
        createdAt: serverTimestamp(),
        status: "new",
      });

      setStatus("success");
      reset();

      // Optional: redirect to WhatsApp after 2s
      setTimeout(() => {
        const msg = encodeURIComponent(
          `Hi, I'm ${data.name}. I submitted a quote request for ${data.service}. ${data.message}`
        );
        window.open(`https://wa.me/919099904497?text=${msg}`, "_blank");
      }, 2000);
    } catch (err) {
      console.error("Lead submission error:", err);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-green-800 mb-2">Request Submitted!</h3>
        <p className="text-green-700 text-sm">
          Thank you! We&apos;ll contact you within 24 hours. Redirecting you to WhatsApp…
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      {/* Name + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            {...register("name")}
            type="text"
            placeholder="Devang Mota"
            className={`input-field ${errors.name ? "border-red-400 focus:ring-red-400" : ""}`}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            {...register("phone")}
            type="tel"
            placeholder="+91 90999 04497"
            className={`input-field ${errors.phone ? "border-red-400 focus:ring-red-400" : ""}`}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          {...register("email")}
          type="email"
          placeholder="devang@aquaticshipping.in"
          className={`input-field ${errors.email ? "border-red-400 focus:ring-red-400" : ""}`}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Service */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Service Required <span className="text-red-500">*</span>
        </label>
        <select
          {...register("service")}
          className={`input-field ${errors.service ? "border-red-400 focus:ring-red-400" : ""}`}
        >
          <option value="">Select a service…</option>
          {SERVICE_OPTIONS.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        {errors.service && (
          <p className="mt-1 text-xs text-red-500">{errors.service.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          {...register("message")}
          rows={4}
          placeholder="Tell us about your shipment requirements, cargo type, origin/destination, etc."
          className={`input-field resize-none ${errors.message ? "border-red-400 focus:ring-red-400" : ""}`}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
        )}
      </div>

      {/* Submit */}
      {status === "error" && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg p-3">
          Something went wrong. Please try again or call us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {status === "submitting" ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Submitting…
          </>
        ) : (
          <>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            Request a Free Quote
          </>
        )}
      </button>

      <p className="text-xs text-gray-400 text-center">
        By submitting, you agree to be contacted by our team. We respect your privacy.
      </p>
    </form>
  );
}
