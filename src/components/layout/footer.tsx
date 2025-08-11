

import Link from 'next/link';
import { Twitter, Linkedin, Facebook, Send, Mail, Youtube, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const SulzaXLogo = () => (
    <svg width="240" height="64" viewBox="0 0 1200 320" xmlns="http://www.w3.org/2000/svg">
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
        <linearGradient id="gWordFooter" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#000000"/>
          <stop offset="1" stopColor="#333333"/>
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
            <text x="120" y="148"
            textAnchor="middle"
            fontFamily="Outfit, Poppins, Montserrat, Segoe UI, Arial, sans-serif"
            fontSize="132"
            fontWeight="900"
            fill="url(#gSilver)"
            letterSpacing="0.5">S</text>
        </g>
      </g>
       <text x="300" y="175"
            fontFamily="Outfit, Poppins, Montserrat, Segoe UI, Arial, sans-serif"
            fontSize="120" fontWeight="800"
            fill="url(#gWordFooter)" letterSpacing="-1">
        Sulza<tspan fill="url(#gBlue)">X</tspan>
      </text>
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
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 text-xs flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center items-center">
          
          <div className="space-y-3">
             <Link href="/" className="flex flex-col items-center space-y-2">
                <SulzaXLogo />
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
                <Link href="https://www.facebook.com/profile.php?id=100089670823732" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-gray-300 hover:bg-black hover:border-black hover:text-white transition-colors"><Facebook className="h-5 w-5" /></Link>
                <Link href="https://www.linkedin.com/in/sulman-bashir-313a45332" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-gray-300 hover:bg-black hover:border-black hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></Link>
                <Link href="https://x.com/sulmanmehar007" aria-label="Twitter" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-gray-300 hover:bg-black hover:border-black hover:text-white transition-colors"><Twitter className="h-5 w-5" /></Link>
                <Link href="https://www.instagram.com/sulmanbashirgujrat777?utm_source=qr" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-gray-300 hover:bg-black hover:border-black hover:text-white transition-colors"><Instagram className="h-5 w-5" /></Link>
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
