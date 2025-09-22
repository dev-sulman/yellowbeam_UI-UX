import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Youtube, Instagram } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: 'https://www.facebook.com/profile.php?id=100089670823732', 'aria-label': 'Facebook' },
    { icon: <Linkedin className="h-5 w-5" />, href: 'https://www.linkedin.com/in/sulman-bashir-313a45332', 'aria-label': 'LinkedIn' },
    { icon: <Twitter className="h-5 w-5" />, href: 'https://x.com/sulmanmehar007', 'aria-label': 'Twitter' },
    { icon: <Youtube className="h-5 w-5" />, href: '#', 'aria-label': 'YouTube' },
    { icon: <Instagram className="h-5 w-5" />, href: 'https://www.instagram.com/sulmanbashirgujrat777?utm_source=qr', 'aria-label': 'Instagram' },
]

export default function ContactPage() {
  return (
    <div className="bg-secondary/30 min-h-[calc(100vh-8rem)] flex items-center justify-center py-20 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
                <Badge className="bg-accent/10 text-accent border-accent/20">CONTACT US</Badge>
                <h1 className="text-5xl md:text-6xl font-bold text-primary tracking-tight">We'd Love To Help</h1>
                <p className="text-muted-foreground text-lg max-w-lg">
                    Enabled a startup to launch a successful mobile app by providing end-to-end development, leading to high downloads and recognition.
                </p>
                <div className="flex space-x-4">
                    {socialLinks.map(social => (
                        <Link key={social['aria-label']} href={social.href} aria-label={social['aria-label']} target="_blank" rel="noopener noreferrer" className="p-3 bg-background rounded-full text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors shadow-sm">
                            {social.icon}
                        </Link>
                    ))}
                </div>
                <div className="space-y-6 pt-6 border-t">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-accent rounded-full">
                            <Phone className="w-6 h-6 text-accent-foreground" />
                        </div>
                        <a href="tel:03045865181" className="text-lg text-foreground hover:text-accent transition-colors">03045865181</a>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-accent rounded-full">
                            <Mail className="w-6 h-6 text-accent-foreground" />
                        </div>
                        <a href="mailto:sulzax0@gmail.com" className="text-lg text-foreground hover:text-accent transition-colors">sulzax0@gmail.com</a>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-accent rounded-full">
                            <MapPin className="w-6 h-6 text-accent-foreground" />
                        </div>
                        <p className="text-lg text-foreground">5 South Forge Lane, Cherry Hill, NJ 08002</p>
                    </div>
                </div>
            </div>
            <div className="w-full">
              <ContactForm />
            </div>
        </div>
      </div>
    </div>
  );
}
