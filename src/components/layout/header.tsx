
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from '@/components/ui/sheet';
import { Menu, ChevronDown, Phone, Briefcase, Code, Smartphone, Palette, AppWindow, Search, Megaphone, Target, MessageCircle, Mail, Youtube, Instagram, Twitter, Linkedin, Facebook, Settings, Users, Cloud, ShieldCheck, BrainCircuit, Bot, ShoppingCart, BarChart } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { Input } from '@/components/ui/input';


interface ServiceSubItem {
  href: string;
  label: string;
}

interface ServiceCategory {
  href: string;
  label: string;
  icon: React.ReactElement;
  subItems?: ServiceSubItem[];
}

const serviceCategories: ServiceCategory[] = [
  { href: '/software-development', label: 'Software Development', icon: <Code /> },
  { href: '/web-development', label: 'Web Development', icon: <AppWindow /> },
  { href: '/mobile-development', label: 'App Development', icon: <Smartphone /> },
  {
    href: '/services',
    label: 'Digital Marketing',
    icon: <Megaphone />,
    subItems: [
      { href: '/content-marketing', label: 'Content Marketing' },
      { href: '/search-engine-optimization', label: 'Search Engine Optimization' }
    ]
  },
  { href: '/ui-ux-development', label: 'UX/UI Design', icon: <Palette /> },
  { href: '/software-quality-assurance', label: 'Software Quality Assurance', icon: <ShieldCheck /> },
];

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services', isMega: true },
  { href: '/about', label: 'About Us' },
  { href: '/portfolio', label: 'Project' },
  { href: '/contact', label: 'Clients' },
  { href: '/blog', label: 'Blog' },
];

const ServiceDropdownContent = () => {
  return (
    <div className="p-4 w-[320px]">
      <div className="space-y-1">
        {serviceCategories.map(link => (
          <div key={link.label} className="group/item-container">
            <Link
              href={link.href}
              className="group/item flex items-center justify-between p-2 rounded-lg hover:bg-white/10 transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <div className="text-accent bg-white/5 p-1.5 rounded-md group-hover/item:bg-accent group-hover/item:text-white transition-colors">
                  {React.cloneElement(link.icon, { className: 'w-4 h-4' })}
                </div>
                <span className="font-medium text-sm text-gray-200 group-hover/item:text-white transition-colors">{link.label}</span>
              </div>
              {link.subItems && <ChevronDown className="w-4 h-4 text-gray-400 group-hover/item:rotate-[-90deg] transition-transform" />}
            </Link>

            {link.subItems && (
              <div className="hidden group-hover/item-container:block pl-11 pr-2 pb-2 space-y-1">
                {link.subItems.map(subItem => (
                  <Link
                    key={subItem.label}
                    href={subItem.href}
                    className="block py-1 text-xs text-gray-400 hover:text-accent transition-colors"
                  >
                    {subItem.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-white/10">
        <Button asChild size="sm" className="w-full h-9 bg-accent hover:bg-accent/90">
          <Link href="/services">View All Services</Link>
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
      'transition-colors text-sm font-medium text-white group flex items-center gap-1',
      isActive ? 'text-accent' : 'hover:text-white/80'
    );

    if (isMega) {
      return (
        <div className="group/mega h-full flex items-center relative">
          <span className={cn(linkClasses, 'cursor-pointer')}>
            {children}
            <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover/mega:rotate-180" />
          </span>
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 border shadow-2xl opacity-0 pointer-events-none group-hover/mega:opacity-100 group-hover/mega:pointer-events-auto transition-all duration-300 transform-gpu translate-y-4 group-hover/mega:translate-y-0 z-[60] rounded-xl overflow-hidden"
            style={{
              background: "rgba(3, 27, 51, 0.98)",
              backdropFilter: 'blur(16px)',
              borderColor: 'rgba(254, 76, 28, 0.2)'
            }}
          >
            <ServiceDropdownContent />
          </div>
        </div>
      );
    }

    return (
      <Link href={href} className={cn(linkClasses, "relative h-full flex items-center")}>
        {children}
        <span className={cn(
          'absolute bottom-5 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full',
          isActive ? 'w-full' : ''
        )}></span>
      </Link>
    );
  };

  const allServiceLinks = serviceCategories.flatMap((cat: ServiceCategory) => [
    { href: cat.href, label: cat.label },
    ...(cat.subItems || [])
  ]);

  const filteredNavLinks = navLinks.filter(link => {
    if (searchTerm.trim() === '') return true;
    if (link.label.toLowerCase().includes(searchTerm.toLowerCase())) return true;
    if (link.isMega) {
      return allServiceLinks.some(subLink => subLink.label.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    return false;
  });

  const filteredServiceLinks = allServiceLinks.filter(link =>
    link.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const MobileServiceLinks = () => {
    const filteredServices = serviceCategories.filter(l =>
      searchTerm.trim() === '' ||
      l.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (l.subItems && l.subItems.some(si => si.label.toLowerCase().includes(searchTerm.toLowerCase())))
    );

    if (filteredServices.length === 0 && searchTerm.trim() !== '') {
      return null;
    }

    return (
      <div className="flex flex-col gap-1">
        {filteredServices.map(link => (
          <div key={link.label}>
            <MobileNavLink href={link.href} label={link.label} isSubmenu={true}>
              {link.subItems && link.subItems.map(sub => (
                <MobileNavLink key={sub.label} href={sub.href} label={sub.label} isSubmenu={true} />
              ))}
            </MobileNavLink>
          </div>
        ))}
      </div>
    )
  };

  const MobileNavLink = ({ href, label, children, isSubmenu = false }: { href: string; label: string; children?: React.ReactNode; isSubmenu?: boolean }) => {
    if (children) {
      return (
        <Collapsible>
          <CollapsibleTrigger className="flex justify-between items-center w-full px-2 py-2 text-sm font-normal text-white">
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
          'block px-2 py-2 font-normal',
          isSubmenu ? 'text-xs' : 'text-sm',
          pathname === href ? 'text-accent' : 'text-white'
        )}
      >
        {label}
      </Link>
    );
  };


  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b bg-[#0360AA]/90 backdrop-blur-md border-white/10 transition-all duration-300',
        isScrolled ? 'shadow-lg border-primary/40 bg-[#0360AA]/95' : 'shadow-none',
        isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2 bg-white/90 rounded-full p-2">
          <Image src="/logo.png" alt="Logo" width={150} height={150} />
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
              <Phone className="w-5 h-5" />
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
              <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0 bg-[#031b33] border-l border-white/10">
                <SheetTitle className="sr-only">Main menu</SheetTitle>
                <div className="h-full w-full">
                  <ScrollArea className="h-full">
                    <div className="p-6">
                      <div className="relative mb-6">
                        <Input
                          placeholder="What are you looking for?"
                          className="pr-10 h-11 bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:ring-accent"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      </div>
                      <nav className="flex flex-col gap-1">
                        {filteredNavLinks.map((link) => (
                          <MobileNavLink key={link.label} href={link.href} label={link.label}>
                            {link.isMega ? <MobileServiceLinks /> : undefined}
                          </MobileNavLink>
                        ))}
                        {searchTerm && filteredNavLinks.length === 0 && <p className="p-2 text-muted-foreground text-sm">No results found.</p>}
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
