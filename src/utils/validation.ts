import { z } from 'zod';

// Casino validation schema
export const casinoSchema = z.object({
  name: z.string().min(2).max(100),
  rating: z.number().min(0).max(5),
  bonus: z.string().min(1),
  image: z.string().url(),
  features: z.array(z.string()),
  affiliateLink: z.string().url()
});

// User input validation schemas
export const contactFormSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(1000)
});

export const newsletterSchema = z.object({
  email: z.string().email()
});

export const searchSchema = z.object({
  query: z.string().min(1).max(100)
});

// Validation helper function
export function validateData<T>(schema: z.ZodSchema<T>, data: unknown): { success: true; data: T } | { success: false; error: string } {
  try {
    const validData = schema.parse(data);
    return { success: true, data: validData };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.errors[0].message };
    }
    return { success: false, error: 'Validation failed' };
  }
}