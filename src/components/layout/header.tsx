
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Menu, ChevronDown, X, Code, Smartphone, PenSquare, Palette, AppWindow, Search, Megaphone, Target, MessageCircle, ArrowRight, User, Briefcase, Users, Cloud, Shield, BarChart, Lightbulb, ClipboardList, GitBranch, MessageSquare as MessageSquareIcon, UserCheck, Phone, Mail, Facebook, Linkedin, Twitter, Youtube, Instagram } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ScrollArea } from '@/components/ui/scroll-area';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

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
  it: [
    { href: "/web-development", label: "Web Development", icon: <Code /> },
    { href: "/mobile-development", label: "Mobile Development", icon: <Smartphone /> },
    { href: "/software-development", label: "Software Development", icon: <PenSquare /> },
    { href: "/cloud-computing", label: "Cloud Computing", icon: <Cloud />, isNew: true },
    { href: "/cyber-security", label: "Cybersecurity Solutions", icon: <Shield /> },
  ],
  agency: [
    { href: "/graphic-design", label: "Graphic Design", icon: <Palette /> },
    { href: "/ui-ux-development", label: "UI/UX Development", icon: <AppWindow /> },
    { href: "/search-engine-optimization", label: "SEO", icon: <Search /> },
    { href: "/social-media-marketing", label: "Social Media Marketing", icon: <Megaphone /> },
    { href: "/pay-per-click-advertising", label: "Pay-Per-Click Advertising", icon: <Target /> },
    { href: "/content-marketing", label: "Content Marketing", icon: <MessageCircle /> },
  ],
};

const otherLinks = [
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

  const ServiceMegaMenu = () => (
    <div className="group">
        <button className={cn(
          'relative transition-colors text-sm font-medium text-foreground group flex items-center gap-1',
          pathname.startsWith('/services') || 
          Object.values(serviceLinks).flat().some(l => l.href === pathname)
            ? 'text-accent' : 'hover:text-foreground/80'
        )}>
            Services <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
            <span className={cn(
                'absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full',
                pathname.startsWith('/services') || Object.values(serviceLinks).flat().some(l => l.href === pathname) ? 'w-full' : ''
            )}></span>
        </button>

        <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-lg border-t-2 border-accent transition-all duration-300 ease-out transform opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto">
            <div className="container mx-auto grid grid-cols-3 gap-8 py-8 px-8">
                <div className="col-span-2 grid grid-cols-2 gap-x-8 gap-y-6">
                    <div>
                        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">IT Services</h3>
                        <div className="grid grid-cols-1 gap-y-4">
                            {serviceLinks.it.map((link) => (
                                <Link key={link.href} href={link.href} className="flex items-center gap-3 group/item">
                                    <div className="p-2 bg-secondary/70 rounded-md text-accent group-hover/item:bg-accent group-hover/item:text-white transition-colors">{React.cloneElement(link.icon, { className: 'w-5 h-5' })}</div>
                                    <span className="font-semibold text-foreground">{link.label}</span>
                                    {link.isNew && <Badge variant="secondary" className="text-xs">New</Badge>}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Digital Agency</h3>
                        <div className="grid grid-cols-1 gap-y-4">
                             {serviceLinks.agency.map((link) => (
                                <Link key={link.href} href={link.href} className="flex items-center gap-3 group/item">
                                    <div className="p-2 bg-secondary/70 rounded-md text-accent group-hover/item:bg-accent group-hover/item:text-white transition-colors">{React.cloneElement(link.icon, { className: 'w-5 h-5' })}</div>
                                    <span className="font-semibold text-foreground">{link.label}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="bg-secondary rounded-lg p-6 flex flex-col justify-between">
                    <div>
                        <h4 className="font-bold text-lg text-primary">Explore All Services</h4>
                        <p className="text-sm text-muted-foreground mt-1 mb-4">Get a comprehensive overview of how our IT and Digital Agency services can elevate your business.</p>
                        <Button asChild variant="outline" className="bg-white border-border">
                            <Link href="/services">View All Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
                        </Button>
                    </div>
                    <div className="border-t pt-4 mt-4">
                        <p className="text-sm font-semibold text-muted-foreground mb-2">Or get in touch:</p>
                        <div className="space-y-2">
                             <a href="mailto:sulzax0@gmail.com" className="flex items-center gap-2 text-sm text-foreground hover:text-accent"><Mail className="w-4 h-4"/> sulzax0@gmail.com</a>
                             <a href="tel:+12013740018" className="flex items-center gap-2 text-sm text-foreground hover:text-accent"><Phone className="w-4 h-4"/> +1 (201) 374-0018</a>
                        </div>
                         <div className="flex space-x-2 pt-4">
                            <Link href="https://www.facebook.com/profile.php?id=100089670823732" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border text-muted-foreground hover:bg-foreground hover:text-white transition-colors"><Facebook className="h-4 w-4" /></Link>
                            <Link href="https://www.linkedin.com/in/sulman-bashir-313a45332" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border text-muted-foreground hover:bg-foreground hover:text-white transition-colors"><Linkedin className="h-4 w-4" /></Link>
                            <Link href="https://x.com/sulmanmehar007" aria-label="Twitter" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border text-muted-foreground hover:bg-foreground hover:text-white transition-colors"><Twitter className="h-4 w-4" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );

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
            <NavLink href="/">Home</NavLink>
            <ServiceMegaMenu />
            {otherLinks.map(link => <NavLink key={link.href} href={link.href}>{link.label}</NavLink>)}
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
                        <SheetClose asChild>
                           <Link href="/" className="block py-3 text-md font-semibold text-foreground hover:text-accent hover:bg-secondary/50 rounded-md px-3">
                           Home
                           </Link>
                        </SheetClose>

                        <Collapsible>
                            <CollapsibleTrigger className="flex w-full items-center justify-between py-3 text-md font-semibold text-foreground hover:text-accent hover:bg-secondary/50 rounded-md px-3">
                                Services
                                <ChevronDown className="h-5 w-5 transition-transform duration-300 [&[data-state=open]]:-rotate-180" />
                            </CollapsibleTrigger>
                            <CollapsibleContent className="pl-6">
                                <div className="py-2">
                                <h3 className="text-sm font-semibold text-muted-foreground mb-2">IT Services</h3>
                                {serviceLinks.it.map((link) => (
                                    <CollapsibleNavLink key={link.href} href={link.href}>{link.label}</CollapsibleNavLink>
                                ))}
                                </div>
                                <div className="py-2">
                                <h3 className="text-sm font-semibold text-muted-foreground mb-2">Digital Agency</h3>
                                 {serviceLinks.agency.map((link) => (
                                    <CollapsibleNavLink key={link.href} href={link.href}>{link.label}</CollapsibleNavLink>
                                ))}
                                </div>
                            </CollapsibleContent>
                        </Collapsible>
                        
                        {otherLinks.map((link) => (
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

    