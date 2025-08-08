import Link from 'next/link';
import { Mountain, Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
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
                <Link href="#"><Twitter className="h-6 w-6 text-primary-foreground/80 hover:text-accent transition-colors" /></Link>
                <Link href="#"><Linkedin className="h-6 w-6 text-primary-foreground/80 hover:text-accent transition-colors" /></Link>
                <Link href="#"><Facebook className="h-6 w-6 text-primary-foreground/80 hover:text-accent transition-colors" /></Link>
                <Link href="#"><Instagram className="h-6 w-6 text-primary-foreground/80 hover:text-accent transition-colors" /></Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-lg">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-primary-foreground/80 hover:text-accent transition-colors">Custom Software Dev</Link></li>
              <li><Link href="/services" className="text-primary-foreground/80 hover:text-accent transition-colors">Web Development</Link></li>
              <li><Link href="/services" className="text-primary-foreground/80 hover:text-accent transition-colors">Mobile Solutions</Link></li>
              <li><Link href="/services" className="text-primary-foreground/80 hover:text-accent transition-colors">Cloud Solutions</Link></li>
              <li><Link href="/services" className="text-primary-foreground/80 hover:text-accent transition-colors">IT Consulting</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Company</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/portfolio" className="text-primary-foreground/80 hover:text-accent transition-colors">Portfolio</Link></li>
              <li><Link href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors">Contact</Link></li>
              <li><Link href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
             <h4 className="font-semibold text-lg">Stay Updated</h4>
             <p className="text-primary-foreground/80">Subscribe to our newsletter for the latest tech news and insights.</p>
             <div className="flex w-full max-w-sm items-center space-x-2">
                <Input type="email" placeholder="Email" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:bg-primary-foreground/20" />
                <Button type="submit" className="bg-accent hover:bg-accent/90 text-accent-foreground">Subscribe</Button>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row items-center justify-between text-sm text-primary-foreground/60">
            <p>© {new Date().getFullYear()} SulzaX Digital Hub. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
                <Link href="#" className="hover:text-accent transition-colors">Privacy Policy</Link>
                <Link href="#" className="hover:text-accent transition-colors">Terms of Service</Link>
            </div>
        </div>
      </div>
    </footer>
  );
}
