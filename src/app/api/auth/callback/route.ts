
import { adminAuth } from '@/lib/firebase-admin';
import { createSessionCookie } from '@/app/actions/auth';
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams;
    const code = searchParams.get('code');
    const state = searchParams.get('state');
    const storedState = cookies().get('oauth_state')?.value;
    
    const url = new URL(req.url)
    const redirectUri = `${url.protocol}//${url.host}/api/auth/callback`;

    if (!code || !state || state !== storedState) {
        return NextResponse.redirect(new URL('/login?error=state_mismatch', req.url));
    }

    cookies().delete('oauth_state');

    try {
        // Exchange authorization code for tokens
        const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                code,
                client_id: "425569249415-p5f1d4vs3j51eovngkh5qrj22frgrs59.apps.googleusercontent.com",
                client_secret: process.env.GOOGLE_CLIENT_SECRET, // You need to set this in your environment variables
                redirect_uri: redirectUri,
                grant_type: 'authorization_code',
            }),
        });

        const tokens = await tokenResponse.json();

        if (tokens.error) {
            console.error('Token exchange error:', tokens.error_description);
            return NextResponse.redirect(new URL('/login?error=token_exchange_failed', req.url));
        }

        const idToken = tokens.id_token;
        await createSessionCookie(idToken);

        return NextResponse.redirect(new URL('/', req.url));

    } catch (error: any) {
        console.error('Callback error:', error);
        return NextResponse.redirect(new URL('/login?error=authentication_failed', req.url));
    }
}

