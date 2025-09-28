
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from '@/components/ui/sheet';
import { Menu, ChevronDown, Phone, Briefcase, Code, Smartphone, Palette, AppWindow, Search, Megaphone, Target, MessageCircle, Mail, Youtube, Instagram, Twitter, Linkedin, Facebook, Settings, BarChart, Cloud, ShieldCheck, BrainCircuit, Bot, ShoppingCart, Users } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { Input } from '@/components/ui/input';


const SulzaXLogo = () => (
    <Image src="/Sulzax.svg" alt="SulzaX Logo" width={180} height={48} />
);

const serviceCategories = {
    itServices: [
        { href: '/services', label: 'Managed IT Services', icon: <Settings /> },
        { href: '/it-telecom', label: 'IT Consulting', icon: <Users /> },
        { href: '/services', label: 'Cloud Computing', icon: <Cloud /> },
        { href: '/services', label: 'Cybersecurity Solutions', icon: <ShieldCheck /> },
        { href: '/services', label: 'Data Analytics', icon: <BarChart /> },
        { href: '/software-development', label: 'Software Development', icon: <Code /> },
    ],
    digitalAgency: [
        { href: '/services', label: 'Business Strategy Analysis', icon: <BrainCircuit /> },
        { href: '/services', label: 'Project Management', icon: <Briefcase /> },
        { href: '/services', label: 'Operational Optimization', icon: <Bot /> },
        { href: '/services', label: 'Digital Consulting', icon: <AppWindow /> },
        { href: '/social-media-marketing', label: 'Marketing Strategy', icon: <Megaphone /> },
        { href: '/services', label: 'Leadership Development', icon: <Users /> },
    ],
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
        { href: '/ecommerce', label: 'E-commerce', icon: <ShoppingCart /> },
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
    return (
        <div className="grid grid-cols-3 gap-6 p-6 w-full">
            <div className="col-span-2 grid grid-cols-2 gap-x-6 gap-y-8">
                <div>
                    <h4 className="font-semibold text-lg mb-4 text-foreground px-2">IT Services</h4>
                    <div className="grid grid-cols-2 gap-4">
                        {serviceCategories.itServices.map(link => (
                            <Link key={link.href} href={link.href} className="group/item flex items-center gap-3 p-2 rounded-md hover:bg-secondary/70 transition-colors">
                                <div className="text-accent">{React.cloneElement(link.icon, { className: 'w-5 h-5' })}</div>
                                <span className="font-medium text-sm text-foreground">{link.label}</span>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="col-start-1">
                    <h4 className="font-semibold text-lg mb-4 text-foreground px-2">Digital Agency</h4>
                     <div className="grid grid-cols-2 gap-4">
                        {serviceCategories.digitalAgency.map(link => (
                            <Link key={link.href} href={link.href} className="group/item flex items-center gap-3 p-2 rounded-md hover:bg-secondary/70 transition-colors">
                                <div className="text-accent">{React.cloneElement(link.icon, { className: 'w-5 h-5' })}</div>
                                <span className="font-medium text-sm text-foreground">{link.label}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <div className="bg-secondary/30 rounded-lg p-6 flex flex-col justify-between">
                <div>
                     <h4 className="font-bold text-lg text-primary mb-2">Explore All Services</h4>
                     <p className="text-sm text-muted-foreground mb-4">Unlocking the Full Spectrum of IT Solutions and Business Consulting for your needs</p>
                     <Button asChild>
                        <Link href="/services">Explore Now</Link>
                     </Button>
                </div>
                 <div className="mt-6 pt-6 border-t">
                    <a href="mailto:contact@zeofix.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-3">
                        <Mail className="w-4 h-4"/>
                        contact@zeofix.com
                    </a>
                     <a href="tel:+12013740018" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-4">
                        <Phone className="w-4 h-4"/>
                        +1 (201) 374-0018
                    </a>
                    <div className="flex space-x-2">
                        <Link href="#" aria-label="Facebook" className="p-2 rounded-full bg-white text-muted-foreground hover:bg-accent/10 hover:text-accent transition-colors"><Facebook className="h-4 w-4" /></Link>
                        <Link href="#" aria-label="LinkedIn" className="p-2 rounded-full bg-white text-muted-foreground hover:bg-accent/10 hover:text-accent transition-colors"><Linkedin className="h-4 w-4" /></Link>
                        <Link href="#" aria-label="Twitter" className="p-2 rounded-full bg-white text-muted-foreground hover:bg-accent/10 hover:text-accent transition-colors"><Twitter className="h-4 w-4" /></Link>
                        <Link href="#" aria-label="Instagram" className="p-2 rounded-full bg-white text-muted-foreground hover:bg-accent/10 hover:text-accent transition-colors"><Instagram className="h-4 w-4" /></Link>
                        <Link href="#" aria-label="YouTube" className="p-2 rounded-full bg-white text-muted-foreground hover:bg-accent/10 hover:text-accent transition-colors"><Youtube className="h-4 w-4" /></Link>
                    </div>
                 </div>
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
  const [searchTerm, setSearchTerm] = useState('');

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
        <div className="group/mega h-full flex items-center">
            <span className={linkClasses}>
              {children}
              <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover/mega:rotate-180" />
            </span>
            <div className="absolute top-full left-0 right-0 bg-background border-t border-b shadow-lg opacity-0 pointer-events-none group-hover/mega:opacity-100 group-hover/mega:pointer-events-auto transition-opacity duration-300 transform-gpu translate-y-2 group-hover/mega:translate-y-0">
                <div className="container mx-auto">
                    <ServiceMegaMenu />
                </div>
            </div>
        </div>
      );
    }
    
    return (
      <Link href={href} className={cn(linkClasses, "h-full flex items-center")}>
        {children}
        <span className={cn(
          'absolute -bottom-px left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full',
          isActive ? 'w-full' : ''
        )}></span>
      </Link>
    );
  };

  const allServiceLinks = Object.values(serviceCategories).flat();

  const filteredNavLinks = navLinks.filter(link => 
    link.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredServiceLinks = allServiceLinks.filter(link => 
    link.label.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const MobileServiceLinks = () => {
    const itServiceLinks = serviceCategories.itServices.filter(l => l.label.toLowerCase().includes(searchTerm.toLowerCase()));
    const agencyLinks = serviceCategories.digitalAgency.filter(l => l.label.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const hasResults = itServiceLinks.length > 0 || agencyLinks.length > 0;

    if (searchTerm && !hasResults) {
      return null;
    }

    return (
      <>
        {itServiceLinks.length > 0 && <h4 className="font-semibold text-muted-foreground text-sm mb-2 mt-3 px-2">IT Services</h4>}
        {itServiceLinks.map(link => <MobileNavLink key={link.href} href={link.href} label={link.label} />)}
        
        {agencyLinks.length > 0 && <h4 className="font-semibold text-muted-foreground text-sm mb-2 mt-3 px-2">Digital Agency</h4>}
        {agencyLinks.map(link => <MobileNavLink key={link.href} href={link.href} label={link.label} />)}
      </>
    )
  };

  const MobileNavLink = ({ href, label, children }: { href: string; label: string; children?: React.ReactNode }) => {
    if (children) {
        return (
            <Collapsible>
                <CollapsibleTrigger className="flex justify-between items-center w-full px-2 py-2 text-base font-normal text-black">
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
                'block px-2 py-2 text-base font-normal',
                pathname === href ? 'text-accent' : 'text-black'
            )}
        >
            {label}
        </Link>
    );
};


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
              <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0 bg-white border-l-0" showCloseButton={false}>
                 <div className="h-full w-full">
                    <ScrollArea className="h-full">
                        <div className="p-6">
                            <div className="relative mb-6">
                                <Input 
                                    placeholder="What are you looking for?" 
                                    className="pr-10 h-11 bg-slate-100 border-slate-200 text-black placeholder:text-slate-500 focus:ring-accent"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            </div>
                             <nav className="flex flex-col gap-1">
                                {filteredNavLinks.map((link) => (
                                    <MobileNavLink key={link.href} href={link.href} label={link.label}>
                                        {link.isMega ? <MobileServiceLinks /> : undefined}
                                    </MobileNavLink>
                                ))}
                                {searchTerm && filteredNavLinks.length === 0 && <p className="p-2 text-muted-foreground">No results found.</p>}
                            </nav>
                        </div>
                    </ScrollArea>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
