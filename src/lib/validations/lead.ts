import { z } from 'zod';

export const leadSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(150),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(7, 'Phone number must be at least 7 digits').max(30),
  company: z.string().max(200).optional().or(z.literal('')),
  source: z.string().max(100).optional().or(z.literal('')),
  notes: z.string().max(2000).optional().or(z.literal('')),
});

export type LeadInput = z.infer<typeof leadSchema>;
