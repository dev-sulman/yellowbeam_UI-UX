
import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { cookies } from 'next/headers';
import { adminAuth } from '@/lib/firebase-admin';
import type { User } from 'firebase-admin/auth';

export const metadata: Metadata = {
  title: 'SulzaX Digital Hub',
  description: 'Transform Your Business with Custom IT Solutions',
};

async function getUser(): Promise<User | null> {
  try {
    const session = cookies().get('session')?.value || '';
    if (!session) return null;
    const decodedClaims = await adminAuth.verifySessionCookie(session, true);
    return decodedClaims;
  } catch (error) {
    console.log('Error verifying session cookie:', error);
    return null;
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getUser();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body bg-background text-foreground antialiased flex flex-col min-h-screen" suppressHydrationWarning>
        <div className="flex-grow w-full">
          <Header user={user ? { name: user.name, email: user.email, picture: user.picture } : null} />
          <main>{children}</main>
        </div>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
