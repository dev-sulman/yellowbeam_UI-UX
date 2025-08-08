'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Phone } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const ZeoFixLogo = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.9999 0L24.7999 12.8L19.1999 18.4L11.9999 25.6L0 13.6C0 13.6 5.59999 8 11.9999 0Z" fill="#2D4FE1"/>
        <path d="M19.2 18.4L24.8 12.8L32 20C32 20 26.4 25.6 20 32L12 25.6L19.2 18.4Z" fill="#2D4FE1"/>
    </svg>
);


const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About Us' },
  { href: '/portfolio', label: 'Project' },
  { href: '/team', label: 'Clients'},
  { href: '/blog', label: 'Blog' },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <ZeoFixLogo />
          <span className="font-bold sm:inline-block font-headline text-2xl text-primary">
            ZeoFix
          </span>
        </Link>
        
        <div className="flex flex-1 items-center justify-end space-x-2">
           <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'transition-colors hover:text-accent pb-1',
                  pathname === link.href ? 'text-accent border-b-2 border-accent' : 'text-muted-foreground'
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
                  <span className="font-bold font-headline text-primary">ZeoFix</span>
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
                    <Link href="/contact">Contact</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          
          <div className="hidden md:flex items-center space-x-4 pl-8">
            <a href="tel:+12013740018" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-accent">
                <Phone className="w-5 h-5 text-accent" />
                +1(201) 374-0018
            </a>
            <Button asChild className="font-semibold bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-6">
              <Link href="/contact">Contact</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
