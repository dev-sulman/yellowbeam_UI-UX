
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ScrollArea } from '@/components/ui/scroll-area';

const SulzaXLogo = () => (
    <svg width="180" height="48" viewBox="0 0 1200 320" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gBlue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#05D1FF"/>
          <stop offset="1" stopColor="#0B52FF"/>
        </linearGradient>
        <linearGradient id="gSilver" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFFFFF"/>
          <stop offset="0.45" stopColor="#E9F0FA"/>
          <stop offset="1" stopColor="#A9B7CB"/>
        </linearGradient>
        <linearGradient id="gWord" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="hsl(var(--foreground))"/>
          <stop offset="1" stopColor="hsl(var(--foreground))"/>
        </linearGradient>
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
          <feOffset dx="0" dy="2" result="offsetblur"/>
          <feMerge>
            <feMergeNode/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <g transform="translate(60,30)" filter="url(#softShadow)">
        <circle cx="120" cy="130" r="92" fill="none" stroke="url(#gBlue)" strokeWidth="18"/>
        <circle cx="120" cy="130" r="70" fill="none" stroke="url(#gBlue)" strokeWidth="6" opacity="0.9"/>
        <g stroke="url(#gBlue)" strokeWidth="8" strokeLinecap="round" fill="url(#gBlue)">
          <line x1="160" y1="80" x2="194" y2="50"/>
          <circle cx="194" cy="50" r="7"/>
          <line x1="170" y1="100" x2="220" y2="84"/>
          <circle cx="220" cy="84" r="7"/>
        </g>
        <text x="120" y="151"
          textAnchor="middle"
          fontFamily="Outfit, Poppins, Montserrat, Segoe UI, Arial, sans-serif"
          fontSize="132"
          fontWeight="900"
          fill="black"
          letterSpacing="0.5">S</text>
      </g>
      <text x="350" y="175"
            fontFamily="Outfit, Poppins, Montserrat, Segoe UI, Arial, sans-serif"
            fontSize="140" fontWeight="800"
            fill="url(#gWord)" letterSpacing="-1">
        Sulza<tspan fill="url(#gBlue)">X</tspan>
      </text>
    </svg>
);


const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About Us' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
      href={href}
      className={cn(
        'relative transition-colors text-sm font-medium text-foreground group',
        pathname === href ? 'text-accent' : 'hover:text-foreground/80'
      )}
    >
      {children}
      <span className={cn(
        'absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full',
        pathname === href ? 'w-full' : ''
      )}></span>
    </Link>
  );

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md animate-fade-in-down transition-shadow',
        isScrolled ? 'shadow-md' : 'shadow-none'
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <SulzaXLogo />
        </Link>

        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button asChild>
            <Link href="/login">Login</Link>
          </Button>
          <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsSheetOpen(false)}
                      className={cn(
                        'block px-2 py-1 text-lg',
                        pathname === link.href ? 'text-accent' : 'text-foreground'
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
