import { Mail, Phone, MapPin } from 'lucide-react';
import { ContactForm } from '@/app/actions/contact';

export default function ContactPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="py-20 md:py-32 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Contact Us</h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
              Have a project in mind or just want to say hello? We'd love to hear from you.
            </p>
          </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
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
                              <a href="mailto:sulzax0@gmail.com" className="text-lg text-muted-foreground hover:text-accent transition-colors">sulzax0@gmail.com</a>
                          </div>
                      </div>
                      <div className="flex items-center gap-4">
                          <div className="p-3 bg-accent/10 rounded-full">
                              <Phone className="w-6 h-6 text-accent" />
                          </div>
                          <div>
                              <h3 className="font-semibold">Phone</h3>
                              <a href="tel:03045865181" className="text-lg text-muted-foreground hover:text-accent transition-colors">03045865181</a>
                          </div>
                      </div>
                      <div className="flex items-center gap-4">
                          <div className="p-3 bg-accent/10 rounded-full">
                              <MapPin className="w-6 h-6 text-accent" />
                          </div>
                          <div>
                              <h3 className="font-semibold">Office</h3>
                              <p className="text-lg text-muted-foreground">5 South Forge Lane, Cherry Hill, NJ 08002</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="w-full max-w-md mx-auto">
                <ContactForm cardTitle="Send us a Message" cardDescription="We are here to help and answer any question you might have." />
              </div>
            </div>
        </div>
      </section>
    </div>
  );
}
