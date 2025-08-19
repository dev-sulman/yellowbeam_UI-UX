
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

    const authUrl = await adminAuth.createCustomToken("some_user_id_for_redirect")
        .then(() => {
            const authProvider = new GoogleAuthProvider();
            // In a real app, you would use a more robust state management
            // For now, redirecting is handled on the client
            return `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${process.env.GOOGLE_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/callback&scope=openid%20profile%20email&state=${state}`;
        })
        .catch(error => {
            console.error("Error creating custom token:", error);
            return "/login?error=true";
        });
        
    const googleClientId = "425569249415-p5f1d4vs3j51eovngkh5qrj22frgrs59.apps.googleusercontent.com";
    const redirectUri = `${process.env.NEXT_PUBLIC_BASE_URL || 'https://' + req.headers.get('host')}/api/auth/callback`;

    const url = new URL('https://accounts.google.com/o/oauth2/v2/auth');
    url.searchParams.set('response_type', 'code');
    url.searchParams.set('client_id', googleClientId);
    url.searchParams.set('redirect_uri', redirectUri);
    url.searchParams.set('scope', 'openid profile email');
    url.searchParams.set('state', state);
    url.searchParams.set('prompt', 'select_account');

    return NextResponse.redirect(url);
}
