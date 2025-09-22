
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

const serviceLinks = {
    "IT Services": [
      { href: '/it-telecom', label: 'Managed IT Services', icon: <Briefcase /> },
      { href: '/it-telecom', label: 'IT Consulting', icon: <Users /> },
      { href: '/it-telecom', label: 'Cloud Computing', icon: <Cloud /> },
      { href: '/it-telecom', label: 'Cybersecurity Solutions', icon: <Shield /> },
      { href: '/it-telecom', label: 'Data Analytics', icon: <BarChart /> },
      { href: '/software-development', label: 'Software Development', icon: <Code /> },
    ],
    "Digital Agency": [
      { href: '/web-development', label: 'Business Strategy Analysis', icon: <Lightbulb /> },
      { href: '/mobile-development', label: 'Project Management', icon: <ClipboardList /> },
      { href: '/software-development', label: 'Operational Optimization', icon: <GitBranch /> },
      { href: '/graphic-design', label: 'Digital Consulting', icon: <MessageSquare /> },
      { href: '/ui-ux-development', label: 'Marketing Strategy', icon: <Target /> },
      { href: '/search-engine-optimization', label: 'Leadership Development', icon: <UserCheck /> },
    ]
};

const navLinks = [
  { href: '/', label: 'Home' },
  {
    label: 'Services',
    href: '/services',
  },
  {
    label: 'About Us',
    href: '/about',
  },
  { href: '/portfolio', label: 'Project' },
  {
    label: 'Clients',
    href: '#',
  },
  { href: '/blog', label: 'Blog' },
];

const mobileNavLinks = {
    "Home": [{ href: '/', label: 'Homepage' }],
    "Services": serviceLinks["IT Services"].concat(serviceLinks["Digital Agency"]),
    "About Us": [
        { href: '/about', label: 'Our Story' },
        { href: '/team', label: 'Meet the Team' },
    ],
    "Project": [{ href: '/portfolio', label: 'View Our Work' }],
    "Clients": [{ href: '/#testimonials', label: 'Testimonials' }],
    "Blog": [{ href: '/blog', label: 'Latest Articles' }],
};


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
            {navLinks.map((link) => {
              if (link.label === 'Services') {
                return (
                  <div key={link.label} className="group relative">
                     <Link
                        href={link.href || '#'}
                        className={cn(
                        'relative transition-colors text-sm font-medium text-foreground group flex items-center gap-1',
                        pathname.startsWith('/services') ? 'text-accent' : 'hover:text-foreground/80'
                        )}
                    >
                        {link.label}
                        <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                    </Link>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-screen max-w-5xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform-gpu group-hover:translate-y-0 translate-y-[-10px]">
                        <div className="bg-background rounded-xl shadow-xl p-8 grid grid-cols-12 gap-8 border">
                           <div className="col-span-8 grid grid-cols-1 gap-y-6">
                               {Object.entries(serviceLinks).map(([category, links]) => (
                                    <div key={category}>
                                        <h3 className="font-bold text-md text-foreground mb-4">{category}</h3>
                                        <ul className="grid grid-cols-3 gap-x-8 gap-y-4">
                                            {links.map((subLink) => (
                                                <li key={subLink.href + subLink.label}>
                                                    <Link href={subLink.href} className="flex items-center gap-3 text-sm text-gray-600 hover:text-accent group/item p-2 rounded-lg transition-colors hover:bg-secondary/50">
                                                       <div className="text-accent">
                                                         {React.cloneElement(subLink.icon, { className: 'w-5 h-5' })}
                                                       </div>
                                                       <p className="font-semibold text-foreground">{subLink.label}</p>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                               ))}
                           </div>
                           <div className="col-span-4 bg-secondary/70 rounded-lg p-6 flex flex-col justify-between">
                                <div className='text-center'>
                                   <h4 className="font-bold text-lg text-primary mb-2">Explore All Services</h4>
                                   <p className="text-sm text-muted-foreground mb-4">
                                       Unlocking the Full Spectrum of IT Solutions and Business Consulting for your needs.
                                   </p>
                                   <Button asChild size="sm" className="font-semibold bg-accent hover:bg-accent/90 text-accent-foreground w-full">
                                       <Link href="/services">Explore Now</Link>
                                   </Button>
                                </div>
                                <div className="border-t pt-4 mt-4 space-y-3 text-sm">
                                    <Link href="mailto:sulzax0@gmail.com" className="flex items-center gap-3 hover:text-accent">
                                        <Mail className="w-4 h-4" />
                                        <span>sulzax0@gmail.com</span>
                                    </Link>
                                    <Link href="tel:03045865181" className="flex items-center gap-3 hover:text-accent">
                                        <Phone className="w-4 h-4" />
                                        <span>03045865181</span>
                                    </Link>
                                    <div className="flex space-x-2 pt-2 justify-center">
                                        <Link href="https://www.facebook.com/profile.php?id=100089670823732" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-background/50 hover:bg-accent hover:text-white transition-colors"><Facebook className="h-4 w-4" /></Link>
                                        <Link href="https://www.linkedin.com/in/sulman-bashir-313a45332" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-background/50 hover:bg-accent hover:text-white transition-colors"><Linkedin className="h-4 w-4" /></Link>
                                        <Link href="https://x.com/sulmanmehar007" aria-label="Twitter" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-background/50 hover:bg-accent hover:text-white transition-colors"><Twitter className="h-4 w-4" /></Link>
                                        <Link href="#" aria-label="YouTube" className="p-2 rounded-full bg-background/50 hover:bg-accent hover:text-white transition-colors"><Youtube className="h-4 w-4" /></Link>
                                        <Link href="https://www.instagram.com/sulmanbashirgujrat777?utm_source=qr" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-background/50 hover:bg-accent hover:text-white transition-colors"><Instagram className="h-4 w-4" /></Link>
                                    </div>
                                </div>
                           </div>
                        </div>
                    </div>
                  </div>
                )
              }

              return (
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
            })}
        </nav>

        <div className="flex items-center gap-2">
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
                <div className="p-4">
                    <div className="relative">
                        <Input placeholder="What are you looking for?" className="pl-10"/>
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    </div>
                </div>
                <ScrollArea className="flex-grow px-4">
                    <div className="grid gap-2 py-2">
                        {Object.entries(mobileNavLinks).map(([label, links]) => (
                             <Collapsible key={label}>
                                <CollapsibleTrigger className="flex w-full items-center justify-between py-3 text-md font-semibold text-foreground group">
                                    <span>{label}</span>
                                    <ChevronDown className="h-5 w-5 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                                </CollapsibleTrigger>
                                <CollapsibleContent>
                                    <div className="grid gap-1 pl-4 py-2 border-l ml-2">
                                        {links.map(subLink => (
                                            <CollapsibleNavLink key={subLink.href + subLink.label} href={subLink.href}>
                                                {subLink.label}
                                            </CollapsibleNavLink>
                                        ))}
                                    </div>
                                </CollapsibleContent>
                            </Collapsible>
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
