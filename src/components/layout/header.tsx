
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Menu, Phone, ChevronDown, X, Code, Smartphone, PenSquare, Palette, AppWindow, Search, Megaphone, Target, MessageCircle, ArrowRight } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ScrollArea } from '@/components/ui/scroll-area';
import Image from 'next/image';
import { UserNav } from '@/components/user-nav';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ModeToggle } from '@/components/mode-toggle';

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

const serviceLinks = {
    "Development & Design": [
      { href: '/web-development', label: 'Web Development', description: 'Crafting responsive and robust websites.', icon: <Code className="w-5 h-5"/> },
      { href: '/mobile-development', label: 'Mobile Development', description: 'Building intuitive apps for iOS and Android.', icon: <Smartphone className="w-5 h-5"/> },
      { href: '/software-development', label: 'Software Development', description: 'Custom solutions for your business needs.', icon: <PenSquare className="w-5 h-5"/> },
      { href: '/graphic-design', label: 'Graphic Design', description: 'Creating stunning visuals for your brand.', icon: <Palette className="w-5 h-5"/> },
      { href: '/ui-ux-development', label: 'UI/UX Development', description: 'Designing user-centric digital experiences.', icon: <AppWindow className="w-5 h-5"/> },
    ],
    "Marketing & Strategy": [
      { href: '/search-engine-optimization', label: 'SEO', description: 'Boosting your visibility on search engines.', icon: <Search className="w-5 h-5"/> },
      { href: '/social-media-marketing', label: 'Social Media Marketing', description: 'Engaging your audience on social platforms.', icon: <Megaphone className="w-5 h-5"/> },
      { href: '/pay-per-click-advertising', label: 'PPC Advertising', description: 'Driving targeted traffic with paid ads.', icon: <Target className="w-5 h-5"/> },
      { href: '/content-marketing', label: 'Content Marketing', description: 'Creating valuable content to attract users.', icon: <MessageCircle className="w-5 h-5"/> },
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

interface HeaderProps {
    user: { name?: string | null, email?: string | null, picture?: string | null } | null
}

const BurgerMenu = ({ checked, onChange }: { checked: boolean, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) => (
    <label className="burger" htmlFor="burger-toggle">
        <input type="checkbox" id="burger-toggle" checked={checked} onChange={onChange} />
        <span></span>
        <span></span>
        <span></span>
    </label>
);

export default function Header({ user }: HeaderProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const getInitials = (name?: string | null) => {
    if (!name) return 'U';
    const names = name.split(' ');
    if (names.length > 1) {
      return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  const NavLink = ({ href, children, className }: { href: string; children: React.ReactNode, className?: string }) => {
    const isActive = pathname === href;
    return (
        <SheetClose asChild>
            <Link
                href={href}
                className={cn(
                    'block py-2 text-sm font-normal relative text-foreground',
                    'hover:text-accent',
                    isActive ? 'text-accent' : '',
                    className
                )}
            >
                {children}
            </Link>
        </SheetClose>
    );
  };

  const CollapsibleNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const isActive = pathname === href;
    return (
        <SheetClose asChild>
            <Link
                href={href}
                className={cn(
                    'block py-2 text-sm font-normal relative text-foreground',
                    'hover:text-accent',
                    isActive ? 'text-accent' : ''
                )}
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
                           <div className="col-span-8 grid grid-cols-2 gap-x-8 gap-y-4">
                               {Object.entries(serviceLinks).map(([category, links], catIndex) => (
                                    <div key={category}>
                                        <h3 className="font-bold text-md text-foreground mb-4">{category}</h3>
                                        <ul className="space-y-3">
                                            {links.map((subLink, index) => (
                                                <li key={subLink.href} className="opacity-0 animate-fade-slide-up" style={{ animationDelay: `${(catIndex * links.length + index) * 50}ms` }}>
                                                    <Link href={subLink.href} className="flex items-start gap-4 text-sm text-gray-600 hover:text-accent group/item p-2 rounded-lg transition-colors hover:bg-secondary/50">
                                                       <div className="p-2 bg-secondary rounded-lg group-hover/item:bg-accent/10 transition-colors">
                                                         {React.cloneElement(subLink.icon, { className: 'w-5 h-5 text-accent' })}
                                                       </div>
                                                       <div>
                                                           <p className="font-semibold text-foreground">{subLink.label}</p>
                                                           <p className="text-xs text-muted-foreground">{subLink.description}</p>
                                                       </div>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                               ))}
                           </div>
                           <div className="col-span-4 bg-secondary/70 rounded-lg p-6 flex flex-col justify-center items-center text-center">
                               <Image src="/main.jpeg" alt="Web Development Spotlight" width={400} height={250} className="rounded-md mb-4" data-ai-hint="web development" />
                               <h4 className="font-bold text-lg text-primary mb-2">Web Development Services</h4>
                               <p className="text-sm text-muted-foreground mb-4">
                                   Let us build a stunning, high-performance website that drives growth and engages your customers.
                               </p>
                               <Button asChild size="sm" className="font-semibold bg-accent hover:bg-accent/90 text-accent-foreground">
                                   <Link href="/web-development">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                               </Button>
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
          <ModeToggle />
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground hover:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0">
                    <BurgerMenu checked={isMobileMenuOpen} onChange={(e) => setIsMobileMenuOpen(e.target.checked)} />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background p-0 w-[80vw] sm:w-[350px]">
                <SheetHeader className="flex flex-row items-center justify-between p-4 border-b">
                   <SheetTitle>Menu</SheetTitle>
                    <SheetClose asChild>
                        <Button variant="ghost" size="icon" className="text-foreground hover:bg-secondary focus-visible:ring-0 focus-visible:ring-offset-0">
                            <X className="h-5 w-5" />
                            <span className="sr-only">Close</span>
                        </Button>
                    </SheetClose>
                </SheetHeader>
                <ScrollArea className="flex-grow px-6">
                    <div className="grid gap-2 py-6">
                        {navLinks.map((link) => {
                             if (link.label === 'Services') {
                                return (
                                    <Collapsible key={link.label}>
                                        <CollapsibleTrigger className="flex w-full items-center justify-between gap-1 py-2 text-sm text-foreground group">
                                            <span>{link.label}</span>
                                            <ChevronDown className="h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                                        </CollapsibleTrigger>
                                        <CollapsibleContent>
                                            <div className="grid gap-1 pl-4 pt-2">
                                                {Object.entries(serviceLinks).map(([category, links]) => (
                                                  <div key={category} className="mb-2">
                                                    <h4 className="font-semibold text-sm text-muted-foreground mb-1">{category}</h4>
                                                     {links.map(subLink => (
                                                        <CollapsibleNavLink key={subLink.href} href={subLink.href}>
                                                            {subLink.label}
                                                        </CollapsibleNavLink>
                                                     ))}
                                                  </div>
                                                ))}
                                            </div>
                                        </CollapsibleContent>
                                    </Collapsible>
                                )
                             }

                            return (
                                <NavLink key={link.href} href={link.href!} className="text-foreground">
                                    {link.label}
                                </NavLink>
                            )
                        })}
                    </div>
                </ScrollArea>
                <div className="p-6 border-t">
                  {user ? (
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                           <Avatar>
                              <AvatarImage src={user.picture ?? ''} alt={user.name ?? 'User'} />
                              <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
                           </Avatar>
                           <div>
                              <p className="text-sm font-medium">{user.name}</p>
                              <p className="text-xs text-muted-foreground">{user.email}</p>
                           </div>
                        </div>
                         <SheetClose asChild>
                            <Button asChild className="w-full font-semibold bg-destructive hover:bg-destructive/90 text-destructive-foreground">
                                <Link href="#" onClick={async () => {
                                  await fetch('/api/logout', { method: 'POST' });
                                  window.location.href = '/';
                                }}>Logout</Link>
                            </Button>
                         </SheetClose>
                      </div>
                  ) : (
                    <>
                      <SheetClose asChild>
                          <Button asChild className="w-full font-semibold bg-accent hover:bg-accent/90 text-accent-foreground mb-2">
                              <Link href="/login">Login</Link>
                          </Button>
                      </SheetClose>
                      <SheetClose asChild>
                           <Button asChild variant="outline" className="w-full">
                              <Link href="/signup">Sign Up</Link>
                          </Button>
                      </SheetClose>
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
            {user ? (
                <UserNav user={user} />
            ) : (
                <div className="hidden md:flex items-center space-x-4">
                    <Button asChild variant="ghost" size="sm">
                        <Link href="/login">Login</Link>
                    </Button>
                    <Button asChild size="sm">
                        <Link href="/signup">Sign Up</Link>
                    </Button>
                </div>
            )}
        </div>
      </div>
    </header>
  );
}
