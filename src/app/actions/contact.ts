'use server';

import { z } from 'zod';
import { adminDb } from '@/lib/firebase-admin';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  company: z.string().optional(),
  service: z.string({ required_error: 'Please select a service.' }),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
  phone: z.string().optional(),
  websiteUrl: z.string().url('Please enter a valid URL.').optional().or(z.literal('')),
});

export async function handleContactForm(data: unknown) {
  const parsed = formSchema.safeParse(data);

  if (!parsed.success) {
    const errorMessages = parsed.error.errors.map(e => e.message).join(', ');
    return { success: false, error: `Invalid data: ${errorMessages}` };
  }

  const formData = parsed.data;

  try {
    const submissionRef = adminDb.collection('contactSubmissions').doc();
    await submissionRef.set({
      ...formData,
      submittedAt: new Date(),
    });

    console.log('New contact form submission saved to Firestore:', submissionRef.id);
    
    return { success: true };

  } catch (error) {
    console.error('Error saving to Firestore:', error);
    return { success: false, error: 'Could not save your message. Please try again later.' };
  }
}
