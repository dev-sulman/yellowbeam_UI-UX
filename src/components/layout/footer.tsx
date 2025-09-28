
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Twitter, Linkedin, Facebook, Send, Mail, Youtube, Instagram, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';

const SulzaXLogo = () => (
    <Image src="/Sulzax.svg" alt="SulzaX Logo" width={180} height={48} />
);

const AnimatedLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="relative text-gray-300 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full hover:text-white">
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
    <footer className="w-full bg-gradient-to-r from-[#0f172a] to-[#334155] text-white border-t border-transparent animate-fade-in-up relative rounded-b-xl">
      <div className="container mx-auto py-12 px-5" suppressHydrationWarning={true}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="space-y-4">
             <Link href="/" className="flex items-center space-y-2 mb-4">
                <SulzaXLogo />
              </Link>
            <p className="text-gray-300 max-w-sm text-sm">
                Welcome to SulzaX! We provide diverse IT solutions with a team of experts. From IT management to cloud solutions, we have you covered.
            </p>
            <div className="text-sm text-gray-300">
                <p>Mon - Fri: 9:00 - 19:00</p>
                <p>Closed on Weekends</p>
            </div>
          </div>
          
          <div className="md:flex md:justify-around col-span-1 lg:col-span-2">
            <div className='mb-8 md:mb-0'>
                <h4 className="font-semibold mb-4 text-md text-white">Company</h4>
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
                <h4 className="font-semibold mb-4 text-md text-white">Solutions</h4>
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
             <h4 className="font-semibold text-md text-white mb-4">Newsletter</h4>
                <div className="relative w-full max-w-sm items-center group">
                    <Mail className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-300" />
                    <Input 
                        type="email" 
                        placeholder="Your email address" 
                        className="bg-transparent border-0 border-b border-gray-500 rounded-none text-white placeholder:text-gray-400 focus:ring-0 focus:border-white focus-visible:ring-0 focus-visible:ring-offset-0 pl-8 pr-10 h-10 text-sm" 
                    />
                    <Button type="submit" size="icon" className="absolute right-0 top-1/2 -translate-y-1/2 bg-transparent hover:bg-transparent text-gray-300 hover:text-white h-8 w-8">
                        <Send className="h-5 w-5" />
                    </Button>
                </div>
             <div className="flex space-x-2 pt-2">
                <Link href="https://www.facebook.com/profile.php?id=100089670823732" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-gray-500 text-gray-300 hover:bg-white hover:border-white hover:text-gray-800 transition-colors"><Facebook className="h-5 w-5" /></Link>
                <Link href="https://www.linkedin.com/in/sulman-bashir-313a45332" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-gray-500 text-gray-300 hover:bg-white hover:border-white hover:text-gray-800 transition-colors"><Linkedin className="h-5 w-5" /></Link>
                <Link href="https://x.com/sulmanmehar007" aria-label="Twitter" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-gray-500 text-gray-300 hover:bg-white hover:border-white hover:text-gray-800 transition-colors"><Twitter className="h-5 w-5" /></Link>
                <Link href="https://www.instagram.com/sulmanbashirgujrat777?utm_source=qr" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-gray-500 text-gray-300 hover:bg-white hover:border-white hover:text-gray-800 transition-colors"><Instagram className="h-5 w-5" /></Link>
                <Link href="#" aria-label="YouTube" className="p-2 rounded-full border border-gray-500 text-gray-300 hover:bg-white hover:border-white hover:text-gray-800 transition-colors"><Youtube className="h-5 w-5" /></Link>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-400">
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
            className="fixed bottom-8 right-5 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm shadow-lg hover:bg-slate-950 hover:text-white border text-foreground"
            variant="outline"
            size="icon"
        >
            <ChevronUp className="h-4 w-4" />
        </Button>
      )}
    </footer>
  );
}
