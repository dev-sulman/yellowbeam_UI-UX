
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, Phone, ChevronDown, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ScrollArea } from '@/components/ui/scroll-area';

const SulzaXLogo = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.9999 0L24.7999 12.8L19.1999 18.4L11.9999 25.6L0 13.6C0 13.6 5.59999 8 11.9999 0Z" fill="#2D4FE1"/>
        <path d="M19.2 18.4L24.8 12.8L32 20C32 20 26.4 25.6 20 32L12 25.6L19.2 18.4Z" fill="#2D4FE1"/>
    </svg>
);

const navLinks = [
  { href: '/', label: 'Home' },
  { 
    label: 'Services', 
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
    subLinks: [
        { href: '/about', label: 'About SulzaX' },
        { href: '/team', label: 'Our Team' },
    ]
  },
  { href: '/portfolio', label: 'Project' },
  { 
    label: 'Clients',
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
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  const NavLink = ({ href, children, active, closeSheet }: { href: string; children: React.ReactNode, active: boolean, closeSheet: () => void; }) => (
    <Link
        href={href}
        onClick={closeSheet}
        className={cn(
            'flex w-full items-center py-2 text-lg font-normal relative group/link',
             active ? 'text-accent' : 'text-black'
        )}
    >
        <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-black to-black group-hover/link:animate-shimmer group-hover/link:bg-[linear-gradient(110deg,black,45%,white,55%,black)] group-hover/link:bg-[length:250%_100%]">
            {children}
        </span>
    </Link>
  );

  const closeSheet = () => setIsOpen(false);

  if (!isMounted) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <SulzaXLogo />
          <span className="font-bold sm:inline-block font-headline text-2xl text-primary">
            SulzaX
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
        {navLinks.map((link) => (
             link.subLinks ? (
                <div key={link.label} className="group relative">
                    <span className={cn('relative transition-colors text-lg font-bold text-black group flex items-center gap-1 cursor-pointer')}>
                       {link.label}
                       <ChevronDown className="h-5 w-5 transition-transform duration-300 group-hover:rotate-180" />
                    </span>
                    <div className="absolute top-full left-0 mt-2 w-56 bg-card rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible">
                        <div className="py-2">
                            {link.subLinks.map(subLink => (
                                <Link
                                    key={subLink.href}
                                    href={subLink.href}
                                    className={cn(
                                        'block px-4 py-2 text-base hover:bg-secondary/50',
                                        pathname === subLink.href ? 'text-accent' : 'text-black/80'
                                    )}
                                >
                                    {subLink.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <Link
                    key={link.href}
                    href={link.href!}
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
            )
        ))}
        </nav>
        
        <div className="flex items-center gap-4">
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="group hover:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0">
                  <Menu className="h-5 w-5 transition-transform duration-300 group-hover:rotate-90" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-card p-0">
                <div className="flex h-full flex-col">
                    <div className="flex items-center justify-between border-b p-6">
                        <Link href="/" className="flex items-center space-x-2" onClick={closeSheet}>
                            <SulzaXLogo />
                            <span className="font-bold font-headline text-primary">SulzaX</span>
                        </Link>
                        <SheetClose className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-0 focus:ring-offset-0">
                            <X className="h-5 w-5" />
                            <span className="sr-only">Close</span>
                        </SheetClose>
                    </div>
                    <ScrollArea className="flex-grow px-6">
                        <div className="grid gap-2 py-6">
                            {navLinks.map((link) => (
                                link.subLinks ? (
                                <Collapsible key={link.label}>
                                    <CollapsibleTrigger className="flex w-full items-center justify-between gap-1 py-2 text-lg text-black group">
                                        <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-black to-black group-hover/link:animate-shimmer group-hover/link:bg-[linear-gradient(110deg,black,45%,white,55%,black)] group-hover/link:bg-[length:250%_100%]">
                                            {link.label}
                                        </span>
                                        <ChevronDown className="h-5 w-5 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <div className="grid gap-2 pl-4 pt-2">
                                            {link.subLinks.map(subLink => (
                                                <NavLink key={subLink.href} href={subLink.href} active={pathname === subLink.href} closeSheet={closeSheet}>
                                                    {subLink.label}
                                                </NavLink>
                                            ))}
                                        </div>
                                    </CollapsibleContent>
                                </Collapsible>
                                ) : (
                                <NavLink key={link.href} href={link.href!} active={pathname === link.href} closeSheet={closeSheet}>
                                    {link.label}
                                </NavLink>
                                )
                            ))}
                        </div>
                    </ScrollArea>
                    <div className="p-6 border-t">
                        <Button asChild className="w-full font-semibold bg-accent hover:bg-accent/90 text-accent-foreground" onClick={closeSheet}>
                            <Link href="/contact">Contact</Link>
                        </Button>
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
    </header>
  );
}
