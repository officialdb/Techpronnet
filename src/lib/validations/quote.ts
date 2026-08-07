import { z } from 'zod';

const allowedDomains = [
  'software', 'security', 'solar', 'networking',
  'it-support', 'tracking', 'street-power'
] as const;

export const quoteSchema = z.object({
  // Step 1
  domain: z.enum(allowedDomains),
  
  // Step 2
  requirements: z.array(z.string()).min(1, 'Please select at least one requirement'),
  customNotes: z.string().max(2000).optional().or(z.literal('')),
  budgetRange: z.string().min(1, 'Please select a budget range'),
  urgency: z.string().min(1, 'Please select a timeline'),
  
  // Step 3
  name: z.string().min(2, 'Name must be at least 2 characters').max(150),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(7, 'Phone number must be at least 7 digits').max(30),
  company: z.string().max(200).optional().or(z.literal('')),
  address: z.string().max(500).optional().or(z.literal('')),
});

export type QuoteInput = z.infer<typeof quoteSchema>;
