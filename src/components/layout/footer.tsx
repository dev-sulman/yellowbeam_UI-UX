

import Link from 'next/link';
import { Twitter, Linkedin, Facebook, Send, Mail, Youtube, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const SulzaXLogo = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.9999 0L24.7999 12.8L19.1999 18.4L11.9999 25.6L0 13.6C0 13.6 5.59999 8 11.9999 0Z" fill="black"/>
        <path d="M19.2 18.4L24.8 12.8L32 20C32 20 26.4 25.6 20 32L12 25.6L19.2 18.4Z" fill="black"/>
    </svg>
);

const AnimatedLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="relative text-black after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
    {children}
  </Link>
);

export default function Footer() {
  return (
    <footer className="w-full bg-white text-black border-t border-gray-200">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 text-xs flex flex-col justify-center max-h-[250px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center items-center">
          
          <div className="space-y-3">
             <Link href="/" className="flex flex-col items-center space-y-2">
                <SulzaXLogo />
                <span className="text-lg font-bold">
                  SulzaX
                </span>
              </Link>
            <p className="text-black max-w-sm mx-auto">
                Welcome to SulzaX! We provide diverse IT solutions with a team of experts.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 text-sm text-black">Company</h4>
            <ul className="space-y-2">
              <li><AnimatedLink href="/about">About Us</AnimatedLink></li>
              <li><AnimatedLink href="/team">Our Team</AnimatedLink></li>
              <li><AnimatedLink href="/services">Services</AnimatedLink></li>
              <li><AnimatedLink href="/portfolio">Case Studies</AnimatedLink></li>
              <li><AnimatedLink href="/contact">Contact</AnimatedLink></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-sm text-black">Solutions</h4>
             <ul className="space-y-2">
                <li><Link href="/web-development" className="relative text-black after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">Web Development</Link></li>
                <li><Link href="/mobile-development" className="relative text-black after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">Mobile Development</Link></li>
                <li><AnimatedLink href="/services#software-development">Software Development</AnimatedLink></li>
                <li><AnimatedLink href="/services#ui-ux">UI/UX Development</AnimatedLink></li>
                <li><AnimatedLink href="/services#seo">Search Engine Optimization</AnimatedLink></li>
            </ul>
          </div>
          
          <div className="space-y-4">
             <h4 className="font-semibold text-sm text-black mb-3">Newsletter</h4>
                <div className="relative w-full max-w-sm items-center mx-auto group">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input 
                        type="email" 
                        placeholder="Your email address" 
                        className="bg-transparent border-0 border-b-2 border-gray-300 rounded-none text-black placeholder:text-gray-500 focus:ring-0 focus:border-black focus-visible:ring-0 focus-visible:ring-offset-0 pl-10 pr-10 h-9 text-xs transition-all duration-300" 
                    />
                     <span className="absolute bottom-0 left-0 h-0.5 bg-black w-0 group-focus-within:w-full transition-all duration-300"></span>
                    <Button type="submit" size="icon" className="absolute right-1 top-1/2 -translate-y-1/2 bg-transparent hover:bg-transparent text-black h-7 w-7">
                        <Send className="h-4 w-4" />
                    </Button>
                </div>
             <div className="flex space-x-3 justify-center">
                <Link href="#" aria-label="Facebook" className="p-2 rounded-full border border-gray-300 hover:bg-black hover:border-black hover:text-white transition-colors"><Facebook className="h-5 w-5" /></Link>
                <Link href="#" aria-label="LinkedIn" className="p-2 rounded-full border border-gray-300 hover:bg-black hover:border-black hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></Link>
                <Link href="#" aria-label="Twitter" className="p-2 rounded-full border border-gray-300 hover:bg-black hover:border-black hover:text-white transition-colors"><Twitter className="h-5 w-5" /></Link>
                <Link href="#" aria-label="Instagram" className="p-2 rounded-full border border-gray-300 hover:bg-black hover:border-black hover:text-white transition-colors"><Instagram className="h-5 w-5" /></Link>
                <Link href="#" aria-label="YouTube" className="p-2 rounded-full border border-gray-300 hover:bg-black hover:border-black hover:text-white transition-colors"><Youtube className="h-5 w-5" /></Link>
            </div>
          </div>

        </div>

        <div className="mt-8 pt-4 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between text-[11px] text-muted-foreground">
            <p>© {new Date().getFullYear()} SulzaX Digital Hub. All Rights Reserved.</p>
            <div className="flex gap-4 mt-4 sm:mt-0">
                <AnimatedLink href="#">Privacy Policy</AnimatedLink>
                <AnimatedLink href="#">Terms of Service</AnimatedLink>
            </div>
        </div>
      </div>
    </footer>
  );
}
