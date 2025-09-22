'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Twitter, Linkedin, Facebook, Send, Mail, Youtube, Instagram, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const SulzaXLogo = () => (
    <svg width="180" height="48" viewBox="0 0 1200 320" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gBlue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#05D1FF"/>
          <stop offset="1" stopColor="#0B52FF"/>
        </linearGradient>
        <linearGradient id="gWordFooter" x1="0" y1="0" x2="0" y2="1">
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
      <g transform="translate(60,30) scale(0.8)">
        <g filter="url(#softShadow)">
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
      </g>
       <text x="300" y="175"
            fontFamily="Outfit, Poppins, Montserrat, Segoe UI, Arial, sans-serif"
            fontSize="140" fontWeight="800"
            fill="url(#gWordFooter)" letterSpacing="-1">
        Sulza<tspan fill="url(#gBlue)">X</tspan>
      </text>
    </svg>
);

const AnimatedLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="relative text-foreground after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-foreground after:transition-all after:duration-300 hover:after:w-full">
    {children}
  </Link>
);

export default function Footer() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

  return (
    <footer className="w-full bg-white text-foreground border-t animate-fade-in-up relative">
      <div className="container mx-auto py-12 px-5" suppressHydrationWarning>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="space-y-4">
             <Link href="/" className="flex items-center space-y-2 mb-4">
                <SulzaXLogo />
              </Link>
            <p className="text-muted-foreground max-w-sm text-sm">
                Welcome to SulzaX! We provide diverse IT solutions with a team of experts. From IT management to cloud solutions, we have you covered.
            </p>
            <div className="text-sm text-muted-foreground">
                <p>Mon - Fri: 9:00 - 19:00</p>
                <p>Closed on Weekends</p>
            </div>
          </div>
          
          <div className="md:flex md:justify-around col-span-1 lg:col-span-2">
            <div className='mb-8 md:mb-0'>
                <h4 className="font-semibold mb-4 text-md text-foreground">Company</h4>
                <ul className="space-y-3 text-sm">
                  <li><AnimatedLink href="/about">About Us</AnimatedLink></li>
                  <li><AnimatedLink href="/team">Our Team</AnimatedLink></li>
                  <li><AnimatedLink href="/services">Services</AnimatedLink></li>
                  <li><AnimatedLink href="/portfolio">Case Studies</AnimatedLink></li>
                   <li><AnimatedLink href="/blog">Blog</AnimatedLink></li>
                  <li><AnimatedLink href="/contact">Contact</AnimatedLink></li>
                </ul>
            </div>

            <div>
                <h4 className="font-semibold mb-4 text-md text-foreground">Solutions</h4>
                 <ul className="space-y-3 text-sm">
                    <li><AnimatedLink href="/web-development">Web Development</AnimatedLink></li>
                    <li><AnimatedLink href="/mobile-development">Mobile Development</AnimatedLink></li>
                    <li><AnimatedLink href="/software-development">Software Development</AnimatedLink></li>
                    <li><AnimatedLink href="/graphic-design">Graphic Design</AnimatedLink></li>
                    <li><AnimatedLink href="/ui-ux-development">UI/UX Development</AnimatedLink></li>
                    <li><AnimatedLink href="/search-engine-optimization">Search Engine Optimization</AnimatedLink></li>
                </ul>
            </div>
          </div>
          
          <div className="space-y-4">
             <h4 className="font-semibold text-md text-foreground mb-4">Newsletter</h4>
                <div className="relative w-full max-w-sm items-center group">
                    <Mail className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input 
                        type="email" 
                        placeholder="Your email address" 
                        className="bg-transparent border-0 border-b border-border rounded-none text-foreground placeholder:text-muted-foreground focus:ring-0 focus:border-foreground focus-visible:ring-0 focus-visible:ring-offset-0 pl-8 pr-10 h-10 text-sm" 
                    />
                    <Button type="submit" size="icon" className="absolute right-0 top-1/2 -translate-y-1/2 bg-transparent hover:bg-transparent text-muted-foreground hover:text-foreground h-8 w-8">
                        <Send className="h-5 w-5" />
                    </Button>
                </div>
             <div className="flex space-x-2 pt-2">
                <Link href="https://www.facebook.com/profile.php?id=100089670823732" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-border text-muted-foreground hover:bg-foreground hover:border-foreground hover:text-white transition-colors"><Facebook className="h-5 w-5" /></Link>
                <Link href="https://www.linkedin.com/in/sulman-bashir-313a45332" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-border text-muted-foreground hover:bg-foreground hover:border-foreground hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></Link>
                <Link href="https://x.com/sulmanmehar007" aria-label="Twitter" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-border text-muted-foreground hover:bg-foreground hover:border-foreground hover:text-white transition-colors"><Twitter className="h-5 w-5" /></Link>
                <Link href="https://www.instagram.com/sulmanbashirgujrat777?utm_source=qr" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-border text-muted-foreground hover:bg-foreground hover:border-foreground hover:text-white transition-colors"><Instagram className="h-5 w-5" /></Link>
                <Link href="#" aria-label="YouTube" className="p-2 rounded-full border border-border text-muted-foreground hover:bg-foreground hover:border-foreground hover:text-white transition-colors"><Youtube className="h-5 w-5" /></Link>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between text-sm text-muted-foreground">
            <p className="mb-4 sm:mb-0">© 2024 SulzaX Digital Hub. All Rights Reserved.</p>
            <div className="flex gap-6">
                <AnimatedLink href="#">Terms Of Services</AnimatedLink>
                <AnimatedLink href="#">Privacy Policy</AnimatedLink>
                <AnimatedLink href="#">Cookie Policy</AnimatedLink>
            </div>
        </div>
      </div>
      {isVisible && (
        <Button 
            onClick={scrollToTop} 
            className="fixed bottom-8 right-5 h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm shadow-lg hover:bg-accent hover:text-accent-foreground border text-foreground"
            variant="outline"
            size="icon"
        >
            <ChevronUp className="h-6 w-6" />
        </Button>
      )}
    </footer>
  );
}
