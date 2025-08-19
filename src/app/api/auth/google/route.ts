
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import { adminAuth } from '@/lib/firebase-admin';
import { auth } from '@/lib/firebase';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

const provider = new GoogleAuthProvider();

// This route starts the Google sign-in process
export async function GET(req: NextRequest) {
    // In a real application, you might generate a state parameter for CSRF protection
    const state = Math.random().toString(36).substring(2);
    cookies().set('oauth_state', state, { httpOnly: true, maxAge: 60 * 10, path: '/' });
        
    const googleClientId = process.env.GOOGLE_CLIENT_ID;
    const redirectUri = `${process.env.NEXT_PUBLIC_BASE_URL || 'https://' + req.headers.get('host')}/api/auth/callback`;

    if (!googleClientId) {
      console.error("GOOGLE_CLIENT_ID is not set in environment variables");
      return NextResponse.redirect(new URL('/login?error=configuration_error', req.url));
    }

    const url = new URL('https://accounts.google.com/o/oauth2/v2/auth');
    url.searchParams.set('response_type', 'code');
    url.searchParams.set('client_id', googleClientId);
    url.searchParams.set('redirect_uri', redirectUri);
    url.searchParams.set('scope', 'openid profile email');
    url.searchParams.set('state', state);
    url.searchParams.set('prompt', 'select_account');

    return NextResponse.redirect(url);
}
