'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const ZeoFixLogo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
        <path d="M7.152 16.278C5.68 15.402 4.5 13.848 4.5 12C4.5 9.24 6.74 7 9.5 7h5c2.76 0 5 2.24 5 5 0 2.4-1.743 4.416-4 4.899"/>
        <path d="M16.848 7.722C18.32 8.598 19.5 10.152 19.5 12c0 2.76-2.24 5-5 5h-5c-2.76 0-5-2.24-5-5 0-.4.053-.79.152-1.166"/>
    </svg>
);


const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Case Studies' },
  { href: '/team', label: 'Our Team'},
  { href: '/blog', label: 'Blog' },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <ZeoFixLogo />
          <span className="font-bold sm:inline-block font-headline text-lg text-primary">
            SulzaX
          </span>
        </Link>
        
        <div className="flex flex-1 items-center justify-end space-x-2">
           <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'transition-colors hover:text-accent',
                  pathname === link.href ? 'text-primary font-semibold' : 'text-muted-foreground'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <Link href="/" className="mr-6 flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                  <ZeoFixLogo />
                  <span className="font-bold font-headline text-primary">SulzaX</span>
                </Link>
                <div className="grid gap-2 py-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        'flex w-full items-center py-2 text-lg font-semibold',
                        pathname === link.href ? 'text-accent' : 'text-muted-foreground'
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Button asChild className="font-semibold mt-4 bg-accent hover:bg-accent/90 text-accent-foreground" onClick={() => setIsOpen(false)}>
                    <Link href="/contact">Get Free Consultation</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          
          <div className="hidden md:flex items-center space-x-4 pl-4">
            <Button asChild className="font-semibold bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/contact">Get Free Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
