import Link from 'next/link';
import { Twitter, Linkedin, Facebook, Instagram, Youtube, Send, Mail, PowerOff, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const ZeoFixLogo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black mx-auto">
        <path d="M7.152 16.278C5.68 15.402 4.5 13.848 4.5 12C4.5 9.24 6.74 7 9.5 7h5c2.76 0 5 2.24 5 5 0 2.4-1.743 4.416-4 4.899"/>
        <path d="M16.848 7.722C18.32 8.598 19.5 10.152 19.5 12c0 2.76-2.24 5-5 5h-5c-2.76 0-5-2.24-5-5 0-.4.053-.79.152-1.166"/>
    </svg>
);


export default function Footer() {
  return (
    <footer className="bg-white text-black border-t border-gray-200">
      <div className="container py-16 md:py-20 text-xs">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          
          <div className="space-y-4">
             <Link href="/" className="flex flex-col items-center space-y-2">
                <ZeoFixLogo />
                <span className="text-xl font-bold">
                  SulzaX
                </span>
              </Link>
            <p className="text-gray-600 max-w-sm mx-auto">
                Welcome to SulzaX! We provide diverse IT solutions with a team of experts. From IT management to cloud solutions, we have you covered.
            </p>
             <div className="space-y-2 text-gray-600">
                <p className="flex items-center justify-center gap-2"><Clock className="w-4 h-4 text-black" /> Mon - Fri: 9:00 - 19:00</p>
                <p className="flex items-center justify-center gap-2"><PowerOff className="w-4 h-4 text-black" /> Closed on Weekends</p>
             </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-sm text-black">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-600 hover:text-gray-400 transition-all duration-300 border-b-2 border-transparent hover:border-black pb-1">About Us</Link></li>
              <li><Link href="/team" className="text-gray-600 hover:text-gray-400 transition-all duration-300 border-b-2 border-transparent hover:border-black pb-1">Our Team</Link></li>
              <li><Link href="/services" className="text-gray-600 hover:text-gray-400 transition-all duration-300 border-b-2 border-transparent hover:border-black pb-1">Services</Link></li>
              <li><Link href="/portfolio" className="text-gray-600 hover:text-gray-400 transition-all duration-300 border-b-2 border-transparent hover:border-black pb-1">Case Studies</Link></li>
              <li><Link href="/blog" className="text-gray-600 hover:text-gray-400 transition-all duration-300 border-b-2 border-transparent hover:border-black pb-1">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-gray-400 transition-all duration-300 border-b-2 border-transparent hover:border-black pb-1">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm text-black">Solutions</h4>
             <ul className="space-y-3">
                <li><Link href="/services#web-development" className="text-gray-600 hover:text-gray-400 transition-all duration-300 border-b-2 border-transparent hover:border-black pb-1">Web Development</Link></li>
                <li><Link href="/services#mobile-development" className="text-gray-600 hover:text-gray-400 transition-all duration-300 border-b-2 border-transparent hover:border-black pb-1">Mobile Development</Link></li>
                <li><Link href="/services#software-development" className="text-gray-600 hover:text-gray-400 transition-all duration-300 border-b-2 border-transparent hover:border-black pb-1">Software Development</Link></li>
                <li><Link href="/services#ui-ux" className="text-gray-600 hover:text-gray-400 transition-all duration-300 border-b-2 border-transparent hover:border-black pb-1">UI/UX Development</Link></li>
                <li><Link href="/services#seo" className="text-gray-600 hover:text-gray-400 transition-all duration-300 border-b-2 border-transparent hover:border-black pb-1">Search Engine Optimization</Link></li>
            </ul>
          </div>
          
          <div className="space-y-5">
             <h4 className="font-semibold text-sm text-black mb-4">Newsletter</h4>
             <div className="relative w-full max-w-sm items-center mx-auto">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input type="email" placeholder="Your email address" className="bg-gray-100 border-gray-300 text-black placeholder:text-gray-500 focus:bg-white pl-10 pr-10 h-10 text-xs" />
                <Button type="submit" size="icon" className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-transparent hover:bg-gray-200 text-black h-7 w-7">
                    <Send className="h-4 w-4" />
                </Button>
            </div>
             <div className="flex space-x-3 justify-center">
                <Link href="#" aria-label="Facebook" className="p-2 rounded-full border border-gray-300 hover:bg-black hover:border-black hover:text-white transition-colors"><Facebook className="h-4 w-4" /></Link>
                <Link href="#" aria-label="LinkedIn" className="p-2 rounded-full border border-gray-300 hover:bg-black hover:border-black hover:text-white transition-colors"><Linkedin className="h-4 w-4" /></Link>
                <Link href="#" aria-label="Twitter" className="p-2 rounded-full border border-gray-300 hover:bg-black hover:border-black hover:text-white transition-colors"><Twitter className="h-4 w-4" /></Link>
                <Link href="#" aria-label="YouTube" className="p-2 rounded-full border border-gray-300 hover:bg-black hover:border-black hover:text-white transition-colors"><Youtube className="h-4 w-4" /></Link>
                <Link href="#" aria-label="Instagram" className="p-2 rounded-full border border-gray-300 hover:bg-black hover:border-black hover:text-white transition-colors"><Instagram className="h-4 w-4" /></Link>
            </div>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between text-[10px] text-gray-500">
            <p>© {new Date().getFullYear()} SulzaX Digital Hub. All Rights Reserved.</p>
            <div className="flex gap-4 mt-4 sm:mt-0">
                <Link href="#" className="hover:text-black transition-colors">Privacy Policy</Link>
                <Link href="#" className="hover:text-black transition-colors">Terms of Service</Link>
            </div>
        </div>
      </div>
    </footer>
  );
}
