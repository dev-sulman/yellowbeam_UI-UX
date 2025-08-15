
'use server';

import { auth } from '@/lib/firebase-admin';
import { cookies } from 'next/headers';

export async function createSessionCookie(idToken: string) {
  const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5 days
  const sessionCookie = await auth.createSessionCookie(idToken, { expiresIn });
  cookies().set('session', sessionCookie, {
    maxAge: expiresIn,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  });
}

export async function clearSessionCookie() {
  cookies().delete('session');
}
