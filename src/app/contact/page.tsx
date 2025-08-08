import { Mail, Phone, MapPin } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Contact Us</h1>
        <p className="mt-4 max-w-2xl text-xl text-muted-foreground">
          Have a project in mind or just want to say hello? We'd love to hear from you.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-8 bg-secondary/50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-primary">Get in Touch</h2>
            <p className="text-muted-foreground">
                Fill out the form and our team will get back to you within 24 hours. You can also reach us through the channels below.
            </p>
            <div className="space-y-6">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-accent/10 rounded-full">
                        <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                        <h3 className="font-semibold">Email</h3>
                        <a href="mailto:contact@sulzax.com" className="text-lg text-muted-foreground hover:text-accent transition-colors">contact@sulzax.com</a>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                     <div className="p-3 bg-accent/10 rounded-full">
                        <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                        <h3 className="font-semibold">Phone</h3>
                        <a href="tel:+1234567890" className="text-lg text-muted-foreground hover:text-accent transition-colors">+1 (234) 567-890</a>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                     <div className="p-3 bg-accent/10 rounded-full">
                        <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                        <h3 className="font-semibold">Office</h3>
                        <p className="text-lg text-muted-foreground">123 Tech Avenue, Silicon Valley, CA, 94000</p>
                    </div>
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
