
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

// This route starts the GitHub sign-in process
export async function GET(req: NextRequest) {
    const state = Math.random().toString(36).substring(2);
    cookies().set('oauth_state', state, { httpOnly: true, maxAge: 60 * 10, path: '/' });
        
    const githubClientId = process.env.GITHUB_CLIENT_ID;
    const redirectUri = `${process.env.NEXT_PUBLIC_BASE_URL || 'https://' + req.headers.get('host')}/api/auth/callback/github`;

    if (!githubClientId) {
      console.error("GITHUB_CLIENT_ID is not set in environment variables");
      return NextResponse.redirect(new URL('/login?error=configuration_error', req.url));
    }

    const url = new URL('https://github.com/login/oauth/authorize');
    url.searchParams.set('client_id', githubClientId);
    url.searchParams.set('redirect_uri', redirectUri);
    url.searchParams.set('scope', 'user:email');
    url.searchParams.set('state', state);

    return NextResponse.redirect(url);
}
