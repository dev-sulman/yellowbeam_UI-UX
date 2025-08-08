import { Mail, Phone, MapPin } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight font-headline sm:text-5xl md:text-6xl">Contact Us</h1>
        <p className="mt-4 max-w-2xl text-xl text-muted-foreground">
          Have a project in mind or just want to say hello? We'd love to hear from you.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
            <h2 className="text-3xl font-bold font-headline">Get in Touch</h2>
            <p className="text-muted-foreground">
                Fill out the form and our team will get back to you within 24 hours.
            </p>
            <div className="space-y-4">
                <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-primary" />
                    <a href="mailto:contact@sulzax.com" className="text-lg hover:text-primary transition-colors">contact@sulzax.com</a>
                </div>
                <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-primary" />
                    <a href="tel:+1234567890" className="text-lg hover:text-primary transition-colors">+1 (234) 567-890</a>
                </div>
                <div className="flex items-center gap-4">
                    <MapPin className="w-6 h-6 text-primary" />
                    <p className="text-lg">123 Tech Avenue, Silicon Valley, CA</p>
                </div>
            </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
