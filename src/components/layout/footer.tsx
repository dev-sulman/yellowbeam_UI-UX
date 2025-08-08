import Link from 'next/link';
import { Twitter, Linkedin, Facebook, Instagram, Youtube, Send, Mail, Phone, Clock, PowerOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const ZeoFixLogo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
        <path d="M7.152 16.278C5.68 15.402 4.5 13.848 4.5 12C4.5 9.24 6.74 7 9.5 7h5c2.76 0 5 2.24 5 5 0 2.4-1.743 4.416-4 4.899"/>
        <path d="M16.848 7.722C18.32 8.598 19.5 10.152 19.5 12c0 2.76-2.24 5-5 5h-5c-2.76 0-5-2.24-5-5 0-.4.053-.79.152-1.166"/>
    </svg>
);


export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary-foreground/10">
      <div className="container py-16 md:py-20 text-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div className="space-y-6">
             <Link href="/" className="flex items-center space-x-2">
                <ZeoFixLogo />
                <span className="text-2xl font-bold">
                  SulzaX
                </span>
              </Link>
            <p className="text-primary-foreground/70 max-w-sm">
                Welcome to SulzaX! We provide diverse IT solutions with a team of experts. From IT management to cloud solutions, we have you covered.
            </p>
             <div className="space-y-2 text-primary-foreground/70">
                <p className="flex items-center gap-2"><Clock className="w-4 h-4 text-accent" /> Mon - Fri: 9:00 - 19:00</p>
                <p className="flex items-center gap-2"><PowerOff className="w-4 h-4 text-accent" /> Closed on Weekends</p>
             </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-base text-primary-foreground">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-primary-foreground/70 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/team" className="text-primary-foreground/70 hover:text-accent transition-colors">Our Team</Link></li>
              <li><Link href="/services" className="text-primary-foreground/70 hover:text-accent transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="text-primary-foreground/70 hover:text-accent transition-colors">Case Studies</Link></li>
              <li><Link href="/blog" className="text-primary-foreground/70 hover:text-accent transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-primary-foreground/70 hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-base text-primary-foreground">Solutions</h4>
             <ul className="space-y-3">
                <li><Link href="/services#web-development" className="text-primary-foreground/70 hover:text-accent transition-colors">Web Development</Link></li>
                <li><Link href="/services#mobile-development" className="text-primary-foreground/70 hover:text-accent transition-colors">Mobile Development</Link></li>
                <li><Link href="/services#software-development" className="text-primary-foreground/70 hover:text-accent transition-colors">Software Development</Link></li>
                <li><Link href="/services#ui-ux" className="text-primary-foreground/70 hover:text-accent transition-colors">UI/UX Development</Link></li>
                <li><Link href="/services#seo" className="text-primary-foreground/70 hover:text-accent transition-colors">Search Engine Optimization</Link></li>
            </ul>
          </div>
          
          <div className="space-y-5">
             <h4 className="font-semibold text-base text-primary-foreground">Newsletter</h4>
             <div className="relative w-full max-w-sm items-center">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary-foreground/50" />
                <Input type="email" placeholder="Your email address" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:bg-primary-foreground/20 pl-10 pr-10 h-12" />
                <Button type="submit" size="icon" className="absolute right-2 top-1/2 -translate-y-1/2 bg-transparent hover:bg-accent/20 text-accent h-8 w-8">
                    <Send className="h-5 w-5" />
                </Button>
            </div>
             <div className="flex space-x-3">
                <Link href="#" aria-label="Facebook" className="p-2 rounded-full border border-primary-foreground/20 hover:bg-accent hover:border-accent transition-colors"><Facebook className="h-5 w-5 text-primary-foreground/80" /></Link>
                <Link href="#" aria-label="LinkedIn" className="p-2 rounded-full border border-primary-foreground/20 hover:bg-accent hover:border-accent transition-colors"><Linkedin className="h-5 w-5 text-primary-foreground/80" /></Link>
                <Link href="#" aria-label="Twitter" className="p-2 rounded-full border border-primary-foreground/20 hover:bg-accent hover:border-accent transition-colors"><Twitter className="h-5 w-5 text-primary-foreground/80" /></Link>
                <Link href="#" aria-label="YouTube" className="p-2 rounded-full border border-primary-foreground/20 hover:bg-accent hover:border-accent transition-colors"><Youtube className="h-5 w-5 text-primary-foreground/80" /></Link>
                <Link href="#" aria-label="Instagram" className="p-2 rounded-full border border-primary-foreground/20 hover:bg-accent hover:border-accent transition-colors"><Instagram className="h-5 w-5 text-primary-foreground/80" /></Link>
            </div>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between text-xs text-primary-foreground/50">
            <p>© {new Date().getFullYear()} SulzaX Digital Hub. All Rights Reserved.</p>
            <div className="flex gap-4 mt-4 sm:mt-0">
                <Link href="#" className="hover:text-accent transition-colors">Privacy Policy</Link>
                <Link href="#" className="hover:text-accent transition-colors">Terms of Service</Link>
            </div>
        </div>
      </div>
    </footer>
  );
}
