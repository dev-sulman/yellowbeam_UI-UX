
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from '@/components/ui/sheet';
import { Menu, ChevronDown, Phone, Briefcase, Code, Smartphone, Palette, AppWindow, Search, Megaphone, Target, MessageCircle } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ScrollArea } from '@/components/ui/scroll-area';
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
          fill="white">S</text>
      </g>
      <text x="350" y="175"
            fontFamily="Outfit, Poppins, Montserrat, Segoe UI, Arial, sans-serif"
            fontSize="140" fontWeight="800"
            fill="white" letterSpacing="-1">
        Sulza<tspan fill="url(#gBlue)">X</tspan>
      </text>
    </svg>
);

const serviceCategories = {
    development: [
        { href: '/web-development', label: 'Web Development', icon: <Code /> },
        { href: '/mobile-development', label: 'Mobile Development', icon: <Smartphone /> },
        { href: '/software-development', label: 'Software Development', icon: <Briefcase /> },
    ],
    design: [
        { href: '/graphic-design', label: 'Graphic Design', icon: <Palette /> },
        { href: '/ui-ux-development', label: 'UI/UX Development', icon: <AppWindow />, isNew: true },
    ],
    marketing: [
        { href: '/search-engine-optimization', label: 'SEO', icon: <Search /> },
        { href: '/social-media-marketing', label: 'Social Media Marketing', icon: <Megaphone /> },
        { href: '/pay-per-click-advertising', label: 'PPC Advertising', icon: <Target /> },
        { href: '/content-marketing', label: 'Content Marketing', icon: <MessageCircle /> },
    ]
}

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services', isMega: true },
  { href: '/about', label: 'About Us' },
  { href: '/portfolio', label: 'Project' },
  { href: '/contact', label: 'Clients' },
  { href: '/blog', label: 'Blog' },
];

const ServiceMegaMenu = () => {
    const pathname = usePathname();
    return (
        <div className="grid grid-cols-3 gap-6 p-6 w-full">
            <div className="col-span-2 grid grid-cols-3 gap-6">
                <div>
                    <h4 className="font-semibold text-sm mb-3 text-muted-foreground px-2">Development</h4>
                    <div className="flex flex-col gap-1">
                        {serviceCategories.development.map(link => (
                            <Link key={link.href} href={link.href} className="group/item flex items-center gap-3 p-2 rounded-md hover:bg-secondary/70 transition-colors">
                                <div className="p-2 bg-secondary/70 rounded-md text-accent group-hover/item:bg-accent group-hover/item:text-white transition-colors">{React.cloneElement(link.icon, { className: 'w-5 h-5' })}</div>
                                <span className="font-semibold text-foreground">{link.label}</span>
                            </Link>
                        ))}
                    </div>
                </div>
                <div>
                    <h4 className="font-semibold text-sm mb-3 text-muted-foreground px-2">Design</h4>
                     <div className="flex flex-col gap-1">
                        {serviceCategories.design.map(link => (
                            <Link key={link.href} href={link.href} className="group/item flex items-center gap-3 p-2 rounded-md hover:bg-secondary/70 transition-colors">
                                <div className="p-2 bg-secondary/70 rounded-md text-accent group-hover/item:bg-accent group-hover/item:text-white transition-colors">{React.cloneElement(link.icon, { className: 'w-5 h-5' })}</div>
                                <span className="font-semibold text-foreground">{link.label}</span>
                                {link.isNew && <Badge variant="secondary" className="text-xs">New</Badge>}
                            </Link>
                        ))}
                    </div>
                </div>
                <div>
                    <h4 className="font-semibold text-sm mb-3 text-muted-foreground px-2">Marketing</h4>
                    <div className="flex flex-col gap-1">
                        {serviceCategories.marketing.map(link => (
                            <Link key={link.href} href={link.href} className="group/item flex items-center gap-3 p-2 rounded-md hover:bg-secondary/70 transition-colors">
                                <div className="p-2 bg-secondary/70 rounded-md text-accent group-hover/item:bg-accent group-hover/item:text-white transition-colors">{React.cloneElement(link.icon, { className: 'w-5 h-5' })}</div>
                                <span className="font-semibold text-foreground">{link.label}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <div className="bg-secondary/70 rounded-lg p-6 flex flex-col justify-center items-center text-center">
                 <h4 className="font-bold text-lg text-primary mb-2">Need a Custom Solution?</h4>
                 <p className="text-sm text-muted-foreground mb-4">Let's build something amazing together. Contact us for a free consultation.</p>
                 <Button asChild>
                    <Link href="/contact">Get a Quote</Link>
                 </Button>
            </div>
        </div>
    )
};


export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 10);
      
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        // Scrolling down
        setIsHeaderVisible(false);
      } else {
        // Scrolling up
        setIsHeaderVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const NavLink = ({ href, children, isMega }: { href: string; children: React.ReactNode; isMega?: boolean }) => {
    const isActive = pathname === href;
    const linkClasses = cn(
      'relative transition-colors text-sm font-medium text-white group flex items-center gap-1',
      isActive ? 'text-accent' : 'hover:text-white/80'
    );

    if (isMega) {
      return (
        <div className="group/mega">
            <span className={linkClasses}>
              {children}
              <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover/mega:rotate-180" />
            </span>
            <div className="absolute top-full left-0 right-0 bg-background border-t border-b shadow-lg opacity-0 pointer-events-none group-hover/mega:opacity-100 group-hover/mega:pointer-events-auto transition-opacity duration-300">
                <div className="container mx-auto">
                    <ServiceMegaMenu />
                </div>
            </div>
        </div>
      );
    }
    
    return (
      <Link href={href} className={linkClasses}>
        {children}
        <span className={cn(
          'absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full',
          isActive ? 'w-full' : ''
        )}></span>
      </Link>
    );
  };

  const MobileNavLink = ({ href, label, children }: { href: string; label: string; children?: React.ReactNode }) => {
    const isParentActive = pathname.startsWith(href);

    if (children) {
        return (
            <Collapsible>
                <CollapsibleTrigger className="flex justify-between items-center w-full px-2 py-2 text-lg font-semibold">
                    {label}
                    <ChevronDown className="w-5 h-5" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                    <div className="pl-6 flex flex-col gap-2 py-2">
                        {children}
                    </div>
                </CollapsibleContent>
            </Collapsible>
        )
    }

    return (
        <Link
            href={href}
            onClick={() => setIsSheetOpen(false)}
            className={cn(
                'block px-2 py-2 text-lg font-semibold',
                pathname === href ? 'text-accent' : 'text-foreground'
            )}
        >
            {label}
        </Link>
    );
};

const MobileServiceLinks = () => (
    <>
        <h4 className="font-bold text-muted-foreground text-base mb-2 mt-3">Development</h4>
        {serviceCategories.development.map(link => <MobileNavLink key={link.href} href={link.href} label={link.label} />)}
        <h4 className="font-bold text-muted-foreground text-base mb-2 mt-3">Design</h4>
        {serviceCategories.design.map(link => <MobileNavLink key={link.href} href={link.href} label={link.label} />)}
        <h4 className="font-bold text-muted-foreground text-base mb-2 mt-3">Marketing</h4>
        {serviceCategories.marketing.map(link => <MobileNavLink key={link.href} href={link.href} label={link.label} />)}
    </>
);


  return (
    <header
      className={cn(
        'sticky top-2 z-50 w-full border-b bg-gradient-to-r from-[#0f172a] to-[#334155] border-transparent transition-all duration-300 rounded-t-xl',
        isScrolled ? 'shadow-md' : 'shadow-none',
        isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <SulzaXLogo />
        </Link>

        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 h-full">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href} isMega={link.isMega}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-3">
                <div className="p-2.5 bg-white/10 rounded-full text-white">
                    <Phone className="w-5 h-5"/>
                </div>
                <div>
                    <p className="text-xs text-gray-300">Call us for a quote</p>
                    <a href="tel:+12013740018" className="font-semibold text-sm text-white hover:text-accent transition-colors">+1 (201) 374-0018</a>
                </div>
            </div>
            
             <Button asChild variant="secondary">
                <Link href="/contact" className='shine-button-2'>Contact</Link>
            </Button>

          <div className="lg:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-white">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
                <SheetClose asChild>
                  <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                </SheetClose>
                 <ScrollArea className="h-full">
                    <nav className="flex flex-col gap-1 p-6">
                        {navLinks.map((link) => (
                             <MobileNavLink key={link.href} href={link.href} label={link.label}>
                                {link.isMega ? <MobileServiceLinks /> : undefined}
                             </MobileNavLink>
                        ))}
                    </nav>
                 </ScrollArea>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
