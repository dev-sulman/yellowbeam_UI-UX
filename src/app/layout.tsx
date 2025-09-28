
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
       <body className={cn("font-body bg-background text-foreground antialiased min-h-screen flex flex-col", fontHeadline.variable, fontBody.variable)}>
        <div className="flex-grow">
          <div className="p-2">
            <div className="mx-auto max-w-screen-2xl">
              <Header />
              <main>{children}</main>
            </div>
          </div>
        </div>
        <div className="w-full">
            <div className="p-2 pt-0">
                 <div className="mx-auto max-w-screen-2xl">
                    <Footer />
                </div>
            </div>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
