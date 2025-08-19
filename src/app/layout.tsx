
import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { cookies } from 'next/headers';
import { adminAuth } from '@/lib/firebase-admin';
import type { User } from 'firebase-admin/auth';
import { Poppins, Open_Sans } from 'next/font/google';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'SulzaX Digital Hub',
  description: 'Transform Your Business with Custom IT Solutions',
};

const fontHeadline = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-headline',
  weight: ['400', '500', '600', '700'],
});

const fontBody = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  weight: ['300', '400', '600'],
});

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
      <body className={cn("font-body bg-background text-foreground antialiased flex flex-col min-h-screen", fontHeadline.variable, fontBody.variable)} suppressHydrationWarning>
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
