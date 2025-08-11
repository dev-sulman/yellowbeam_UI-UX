
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Menu, Phone, ChevronDown, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ScrollArea } from '@/components/ui/scroll-area';

const SulzaXLogo = () => (
    <svg width="120" height="32" viewBox="0 0 1200 320" xmlns="http://www.w3.org/2000/svg">
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
          <stop offset="0" stopColor="#FFFFFF"/>
          <stop offset="1" stopColor="#CFE0FF"/>
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
        <text x="120" y="148"
          textAnchor="middle"
          fontFamily="Outfit, Poppins, Montserrat, Segoe UI, Arial, sans-serif"
          fontSize="132"
          fontWeight="900"
          fill="url(#gSilver)"
          letterSpacing="0.5">S</text>
      </g>
      <text x="350" y="175"
            fontFamily="Outfit, Poppins, Montserrat, Segoe UI, Arial, sans-serif"
            fontSize="120" fontWeight="800"
            fill="url(#gWord)" letterSpacing="-1">
        Sulza<tspan fill="url(#gBlue)">X</tspan>
      </text>
    </svg>
);

const navLinks = [
  { href: '/', label: 'Home' },
  { 
    label: 'Services', 
    href: '/services',
    subLinks: [
      { href: '/web-development', label: 'Web Development' },
      { href: '/mobile-development', label: 'Mobile Development' },
      { href: '/software-development', label: 'Software Development' },
      { href: '/graphic-design', label: 'Graphic Design' },
      { href: '/ui-ux-development', label: 'UI/UX Development' },
      { href: '/search-engine-optimization', label: 'SEO' },
      { href: '/social-media-marketing', label: 'Social Media Marketing' },
      { href: '/pay-per-click-advertising', label: 'PPC Advertising' },
      { href: '/content-marketing', label: 'Content Marketing' },
    ]
  },
  { 
    label: 'About Us',
    href: '/about',
    subLinks: [
        { href: '/about', label: 'About SulzaX' },
        { href: '/team', label: 'Our Team' },
    ]
  },
  { href: '/portfolio', label: 'Project' },
  { 
    label: 'Clients',
    href: '#', 
    subLinks: [
        { href: '/finance-banking', label: 'Finance & Banking' },
        { href: '/it-telecom', label: 'IT & Telecom' },
        { href: '/healthcare-pharmaceuticals', label: 'Healthcare & Pharma' },
        { href: '/transportation-logistics', label: 'Transportation & Logistics' },
        { href: '/real-estate', label: 'Real Estate' },
        { href: '/manufacturing-industry', label: 'Manufacturing & Industry 4.0' },
        { href: '/education-training', label: 'Education & Training' },
    ]
  },
  { href: '/blog', label: 'Blog' },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  if (!isMounted) {
    return null;
  }

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        onClick={() => setIsMobileMenuOpen(false)}
        className={cn(
            'block py-2 text-lg font-normal',
             isActive ? 'text-accent' : 'text-black hover:text-accent'
        )}
      >
        {children}
      </Link>
    );
  };
  
  const CollapsibleNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const isActive = pathname === href;
    return (
        <SheetClose asChild>
            <Link
                href={href}
                className={cn(
                    'block py-2 text-lg font-normal',
                    isActive ? 'text-accent' : 'text-black hover:text-accent'
                )}
            >
                {children}
            </Link>
        </SheetClose>
    );
};


  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <SulzaXLogo />
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
                <Link
                    key={link.label}
                    href={link.href || '#'}
                    className={cn(
                    'relative transition-colors text-lg font-bold text-black group',
                    pathname === link.href ? 'text-accent' : ''
                    )}
                >
                    {link.label}
                    <span className={cn(
                    'absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full',
                        pathname === link.href ? 'w-full' : ''
                    )}></span>
                </Link>
            ))}
        </nav>
        
        <div className="flex items-center gap-4">
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="group hover:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0">
                  <Menu className="h-5 w-5 transition-transform duration-300 group-hover:rotate-90" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-card p-0 w-[80vw] sm:w-[350px]">
                <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  A list of navigation links for the SulzaX website.
                </SheetDescription>
                <div className="flex h-full flex-col">
                    <div className="flex items-center justify-between border-b p-6">
                        <SheetClose asChild>
                            <Link href="/" className="flex items-center space-x-2">
                                <SulzaXLogo />
                            </Link>
                        </SheetClose>
                    </div>
                    <ScrollArea className="flex-grow px-6">
                        <div className="grid gap-2 py-6">
                            {navLinks.map((link) => (
                                link.subLinks ? (
                                <Collapsible key={link.label}>
                                    <CollapsibleTrigger className="flex w-full items-center justify-between gap-1 py-2 text-lg text-black group">
                                        <span>{link.label}</span>
                                        <ChevronDown className="h-5 w-5 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <div className="grid gap-2 pl-4 pt-2">
                                            {link.subLinks.map(subLink => (
                                                <CollapsibleNavLink key={subLink.href} href={subLink.href}>
                                                    {subLink.label}
                                                </CollapsibleNavLink>
                                            ))}
                                        </div>
                                    </CollapsibleContent>
                                </Collapsible>
                                ) : (
                                <NavLink key={link.href} href={link.href!}>
                                    {link.label}
                                </NavLink>
                                )
                            ))}
                        </div>
                    </ScrollArea>
                    <div className="p-6 border-t">
                        <SheetClose asChild>
                            <Button asChild className="w-full font-semibold bg-accent hover:bg-accent/90 text-accent-foreground">
                                <Link href="/contact">Contact</Link>
                            </Button>
                        </SheetClose>
                    </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+12013740018" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-accent">
                <Phone className="w-5 h-5 text-accent" />
                +1(201) 374-0018
            </a>
            <Button asChild className="font-semibold bg-accent hover:bg-accent/90 text-accent-foreground rounded-[5px] px-6">
              <Link href="/contact">Contact</Link>
            </Button>
            </div>
        </div>
      </div>
    </header>
  );
}
