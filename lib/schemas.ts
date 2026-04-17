import { z } from "zod";

export const leadSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name too long"),
  phone: z
    .string()
    .regex(/^[+]?[\d\s\-()]{8,15}$/, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email address"),
  service: z.string().min(1, "Please select a service"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message too long"),
});

export type LeadFormData = z.infer<typeof leadSchema>;
