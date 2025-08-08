import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Briefcase, Users, BarChart2, CheckCircle, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';

const features = [
  {
    icon: <Briefcase className="w-8 h-8 text-accent" />,
    title: '20 Years Industry Experience',
    description: 'Leverage our two decades of expertise to build robust and scalable solutions.',
  },
  {
    icon: <Users className="w-8 h-8 text-accent" />,
    title: 'Certified Development Team',
    description: 'Our team consists of certified professionals dedicated to quality and excellence.',
  },
  {
    icon: <BarChart2 className="w-8 h-8 text-accent" />,
    title: 'Agile Development Process',
    description: 'We use agile methodologies to deliver your project on time and within budget.',
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-accent" />,
    title: '24/7 Support Availability',
    description: 'Our support team is available around the clock to assist you with any issues.',
  },
];

const clientLogos = [
  { src: 'https://placehold.co/150x60.png', alt: 'Client A', hint: 'company logo' },
  { src: 'https://placehold.co/150x60.png', alt: 'Client B', hint: 'company logo' },
  { src: 'https://placehold.co/150x60.png', alt: 'Client C', hint: 'company logo' },
  { src: 'https://placehold.co/150x60.png', alt: 'Client D', hint: 'company logo' },
  { src: 'https://placehold.co/150x60.png', alt: 'Client E', hint: 'company logo' },
];

const consultationPoints = [
    "Confirmation of appointment details",
    "Research and preparation by the IT services company",
    "Consultation to discuss technology solutions",
    "Needs assessment for tailored solutions",
    "Presentation of proposed solutions",
    "Project execution and ongoing support",
    "Follow-up to evaluate effectiveness and satisfaction",
];


export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="w-full py-20 md:py-32 lg:py-40 xl:py-56 bg-secondary/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter text-primary sm:text-5xl xl:text-7xl/none">
                  Transform Your Business with Custom IT Solutions
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Enterprise-grade technology tailored for growing businesses. We deliver comprehensive digital solutions to help you succeed.
                </p>
              </div>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Button asChild size="lg" className="font-semibold bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/contact">Get Free Consultation <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="font-semibold border-primary text-primary hover:bg-primary/5">
                  <Link href="/portfolio">View Case Studies</Link>
                </Button>
              </div>
            </div>
            <Image
              src="https://placehold.co/800x600.png"
              width="800"
              height="600"
              alt="Hero"
              data-ai-hint="team meeting office"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
            />
          </div>
        </div>
      </section>

      <section id="trust" className="py-16 md:py-24 bg-background">
        <div className="container">
          <h3 className="text-center text-lg font-semibold text-muted-foreground tracking-wider mb-10">
            TRUSTED BY 1800+ BUSINESSES WORLDWIDE
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-20">
            {clientLogos.map((logo, index) => (
              <Image key={index} src={logo.src} alt={logo.alt} data-ai-hint={logo.hint} width={130} height={50} className="opacity-50 hover:opacity-100 transition-opacity" />
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="w-full py-16 md:py-24 lg:py-32 bg-secondary/50">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
             <div className="space-y-6">
              <div className="inline-block rounded-lg bg-accent/10 text-accent px-3 py-1 text-sm font-bold">Why Choose Us</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Your Partner in Digital Transformation
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                At SulzaX, we combine cutting-edge technology with deep industry knowledge to deliver solutions that drive growth and efficiency. Our focus is on building long-term partnerships.
              </p>
            </div>
            <div className="grid gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-background transition-colors">
                  <div className="p-3 rounded-full bg-accent/10">{feature.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section id="consultation" className="w-full py-16 md:py-24 lg:py-32" style={{ background: 'linear-gradient(to right, #464F62, #7F5D5D)' }}>
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col text-white space-y-8">
                <div>
                    <div className="inline-block rounded-md bg-accent text-accent-foreground px-4 py-1 text-sm font-semibold mb-4">CONTACT US</div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Free Consultation - Discover IT Solutions For Your Business</h2>
                    <p className="mt-4 max-w-2xl text-gray-300">
                        Unlock the full potential of your business with our free consultation. Our expert team will assess your IT needs, recommend tailored solutions, and chart a path to success. Book your consultation now and take the first step towards empowering your business with cutting-edge technology.
                    </p>
                </div>
                <ul className="space-y-4">
                    {consultationPoints.map((point, index) => (
                        <li key={index} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-accent" />
                            <span className="text-gray-300">{point}</span>
                        </li>
                    ))}
                </ul>
                <div className="border-t border-gray-500 pt-8 space-y-6">
                     <div className="flex items-center gap-4">
                        <Mail className="w-6 h-6 text-accent" />
                        <a href="mailto:contact@zeofix.com" className="text-lg text-gray-300 hover:text-accent transition-colors">contact@zeofix.com</a>
                    </div>
                    <div className="flex items-center gap-4">
                        <Phone className="w-6 h-6 text-accent" />
                        <a href="tel:+12013740018" className="text-lg text-gray-300 hover:text-accent transition-colors">+1 (201) 374-0018</a>
                    </div>
                    <div className="flex items-center gap-4">
                        <MapPin className="w-6 h-6 text-accent" />
                        <div>
                            <p className="text-lg text-gray-300">5 South Forge Lane Cherry Hill, NJ 08002</p>
                            <a href="#" className="text-sm text-accent hover:underline">Open map</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-2xl mx-auto">
              <ContactForm cardTitle="Schedule A Free Consultation" cardDescription="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
