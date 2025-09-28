
import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("font-body bg-background text-foreground antialiased flex flex-col min-h-screen items-center", fontHeadline.variable, fontBody.variable)}>
        <div className="flex-grow w-full">
        <Header />
        <main>{children}</main>
        </div>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
