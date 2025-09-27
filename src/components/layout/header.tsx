
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Menu, ChevronDown, X, Code, Smartphone, PenSquare, Palette, AppWindow, Search, Megaphone, Target, MessageCircle, ArrowRight, User, Briefcase, Users, Cloud, Shield, BarChart, Lightbulb, ClipboardList, GitBranch, MessageSquare, UserCheck, Phone, Mail, Facebook, Linkedin, Twitter, Youtube, Instagram } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ScrollArea } from '@/components/ui/scroll-area';
import Image from 'next/image';
import { Input } from '@/components/ui/input';

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
  { href: '/about', label: 'About Us' },
  { href: '/portfolio', label: 'Project' },
  { href: '#', label: 'Clients' },
  { href: '/blog', label: 'Blog' },
];

const mobileNavLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About Us' },
  { href: '/portfolio', label: 'Project' },
  { href: '#', label: 'Clients' },
  { href: '/blog', label: 'Blog' },
];


export default function Header() {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const CollapsibleNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    return (
        <SheetClose asChild>
            <Link
                href={href}
                className="block py-2 text-sm font-normal text-muted-foreground hover:text-accent"
                onClick={() => setIsSheetOpen(false)}
            >
                {children}
            </Link>
        </SheetClose>
    );
};


  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md animate-fade-in-down">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <SulzaXLogo />
        </Link>

        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
                 <Link
                    key={link.label}
                    href={link.href || '#'}
                    className={cn(
                    'relative transition-colors text-sm font-medium text-foreground group',
                    pathname === link.href ? 'text-accent' : 'hover:text-foreground/80'
                    )}
                >
                    {link.label}
                    <span className={cn(
                    'absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full',
                        pathname === link.href ? 'w-full' : ''
                    )}></span>
                </Link>
              )
            )}
        </nav>

        <div className="flex items-center gap-4">
           <a href="tel:+12013740018" className="hidden sm:flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent">
                <div className="w-8 h-8 rounded-full bg-secondary/70 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-accent"/>
                </div>
                <span>+1 (201) 374-0018</span>
           </a>
          <Button asChild>
            <Link href="/contact">Contact</Link>
          </Button>
          <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground hover:bg-secondary">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background p-0 w-[85vw] sm:w-[400px] flex flex-col">
                <SheetHeader className="flex flex-row items-center justify-between p-4 border-b">
                   <SheetTitle>Menu</SheetTitle>
                    <SheetClose asChild>
                        <Button variant="ghost" size="icon" className="text-foreground hover:bg-secondary focus-visible:ring-0 focus-visible:ring-offset-0">
                            <X className="h-5 w-5" />
                            <span className="sr-only">Close</span>
                        </Button>
                    </SheetClose>
                </SheetHeader>
                
                <ScrollArea className="flex-grow px-4">
                    <div className="grid gap-2 py-2">
                        {mobileNavLinks.map((link) => (
                             <SheetClose asChild key={link.href}>
                               <Link href={link.href} className="block py-3 text-md font-semibold text-foreground hover:text-accent hover:bg-secondary/50 rounded-md px-3">
                                {link.label}
                               </Link>
                             </SheetClose>
                        ))}
                    </div>
                </ScrollArea>
                <div className="p-4 border-t mt-auto">
                    <SheetClose asChild>
                       <Link href="/login" className="flex items-center justify-center w-full py-3 text-md font-semibold text-foreground hover:bg-secondary rounded-lg transition-colors">
                           Login/Register
                       </Link>
                    </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
