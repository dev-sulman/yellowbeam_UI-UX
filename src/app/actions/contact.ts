'use server';

import { z } from 'zod';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  company: z.string().optional(),
  service: z.string({ required_error: 'Please select a service.' }),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
  websiteUrl: z.string().url('Please enter a valid URL.').optional().or(z.literal('')),
});

export async function handleContactForm(data: unknown) {
  const parsed = formSchema.safeParse(data);

  if (!parsed.success) {
    return { success: false, error: 'Invalid data provided.' };
  }

  const formData = parsed.data;

  // Here you would typically save the data to a database like Firebase Firestore,
  // and send notifications (e.g., via email or to Slack).
  console.log('New contact form submission:', formData);

  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // For now, we just log it and return success.
  return { success: true };
}
