import Link from 'next/link';
import { Mountain, Twitter, Linkedin, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div className="space-y-6">
             <Link href="/" className="flex items-center space-x-2">
                <Mountain className="h-8 w-8 text-accent" />
                <span className="text-2xl font-bold">
                  SulzaX
                </span>
              </Link>
            <p className="text-primary-foreground/80 max-w-sm">
                SulzaX is a leading IT services company dedicated to providing innovative technology solutions that drive business growth and efficiency.
            </p>
             <div className="flex space-x-4">
                <Link href="#" aria-label="Twitter"><Twitter className="h-6 w-6 text-primary-foreground/80 hover:text-accent transition-colors" /></Link>
                <Link href="#" aria-label="LinkedIn"><Linkedin className="h-6 w-6 text-primary-foreground/80 hover:text-accent transition-colors" /></Link>
                <Link href="#" aria-label="Facebook"><Facebook className="h-6 w-6 text-primary-foreground/80 hover:text-accent transition-colors" /></Link>
                <Link href="#" aria-label="Instagram"><Instagram className="h-6 w-6 text-primary-foreground/80 hover:text-accent transition-colors" /></Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-lg text-primary-foreground">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-primary-foreground/80 hover:text-accent transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="text-primary-foreground/80 hover:text-accent transition-colors">Portfolio</Link></li>
              <li><Link href="/blog" className="text-primary-foreground/80 hover:text-accent transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg text-primary-foreground">Contact Us</h4>
             <ul className="space-y-4 text-primary-foreground/80">
                <li className="flex items-start gap-3">
                    <Mail className="h-5 w-5 mt-1 text-accent flex-shrink-0" />
                    <a href="mailto:contact@sulzax.com" className="hover:text-accent transition-colors">contact@sulzax.com</a>
                </li>
                 <li className="flex items-start gap-3">
                    <Phone className="h-5 w-5 mt-1 text-accent flex-shrink-0" />
                    <a href="tel:+1234567890" className="hover:text-accent transition-colors">+1 (234) 567-890</a>
                </li>
                 <li className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 mt-1 text-accent flex-shrink-0" />
                    <span>123 Tech Avenue, Silicon Valley, CA, 94000</span>
                </li>
            </ul>
          </div>
          
          <div className="space-y-4">
             <h4 className="font-semibold text-lg text-primary-foreground">Newsletter</h4>
             <p className="text-primary-foreground/80">Subscribe to our newsletter for the latest tech news and insights.</p>
             <div className="flex w-full max-w-sm items-center space-x-2">
                <Input type="email" placeholder="Enter your email" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:bg-primary-foreground/20" />
                <Button type="submit" className="bg-accent hover:bg-accent/90 text-accent-foreground">Subscribe</Button>
            </div>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/20 flex flex-col sm:flex-row items-center justify-between text-sm text-primary-foreground/60">
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
