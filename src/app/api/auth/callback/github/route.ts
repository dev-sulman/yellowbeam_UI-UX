
import { adminAuth } from '@/lib/firebase-admin';
import { createSessionCookie } from '@/app/actions/auth';
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams;
    const code = searchParams.get('code');
    const state = searchParams.get('state');
    const storedState = cookies().get('oauth_state')?.value;

    if (!code || !state || state !== storedState) {
        return NextResponse.redirect(new URL('/login?error=state_mismatch', req.url));
    }

    cookies().delete('oauth_state');

    try {
        // Exchange authorization code for access token
        const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                code,
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_CLIENT_SECRET,
            }),
        });

        const tokens = await tokenResponse.json();

        if (tokens.error) {
            console.error('GitHub token exchange error:', tokens.error_description);
            return NextResponse.redirect(new URL('/login?error=token_exchange_failed', req.url));
        }

        const accessToken = tokens.access_token;

        // Get user profile from GitHub
        const userResponse = await fetch('https://api.github.com/user', {
            headers: {
                Authorization: `token ${accessToken}`,
            },
        });
        const githubUser = await userResponse.json();

        // Get user's primary email
        const emailResponse = await fetch('https://api.github.com/user/emails', {
            headers: {
                Authorization: `token ${accessToken}`,
            },
        });
        const emails = await emailResponse.json();
        const primaryEmail = emails.find((email: any) => email.primary && email.verified)?.email;
        
        if (!primaryEmail) {
             return NextResponse.redirect(new URL('/login?error=email_not_verified', req.url));
        }

        const uid = `github:${githubUser.id}`;
        
        // Create or update user in Firebase
        try {
            await adminAuth.updateUser(uid, {
                email: primaryEmail,
                displayName: githubUser.name,
                photoURL: githubUser.avatar_url,
            });
        } catch (error: any) {
            if (error.code === 'auth/user-not-found') {
                await adminAuth.createUser({
                    uid: uid,
                    email: primaryEmail,
                    displayName: githubUser.name,
                    photoURL: githubUser.avatar_url,
                });
            } else {
                throw error;
            }
        }
        
        // Create custom token for session cookie
        const idToken = await adminAuth.createCustomToken(uid);
        await createSessionCookie(idToken);

        return NextResponse.redirect(new URL('/', req.url));

    } catch (error: any) {
        console.error('GitHub callback error:', error);
        return NextResponse.redirect(new URL('/login?error=authentication_failed', req.url));
    }
}
