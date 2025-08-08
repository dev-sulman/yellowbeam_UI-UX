
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Briefcase, Users, BarChart2, CheckCircle, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

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

const projects = [
  {
    title: 'USA Best Car Shipping',
    category: 'Website',
    featuredImage: '/USA-Best-Car-Shipping.png',
    description: 'A dedicated website for auto transport services in the USA, offering professional vehicle shipping...',
    dataAiHint: 'logistics website'
  },
  {
    title: 'Reilu Kuljetus Customer App',
    category: 'Mobile Application',
    featuredImage: '/Reilu-Kuljetus-Customer-App.png',
    description: 'A mobile application for food delivery services in Finland, allowing users to browse menus, place...',
    dataAiHint: 'mobile app logistics'
  },
  {
    title: 'Reilu Kuljetus',
    category: 'Website',
    featuredImage: '/Reilu-Kuljetus.png',
    description: 'A food delivery website in Finland, providing an easy-to-use platform for customers to order...',
    dataAiHint: 'food delivery website'
  },
    {
    title: 'Noor Care NGO Platform',
    category: 'Web Development',
    featuredImage: '/Noor-Care-NGO-Platform.png',
    description: 'Secure donation processing system to help the NGO increase online contributions.',
    dataAiHint: 'charity website'
  },
];

const ZeoFixLogo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
        <path d="M7.152 16.278C5.68 15.402 4.5 13.848 4.5 12C4.5 9.24 6.74 7 9.5 7h5c2.76 0 5 2.24 5 5 0 2.4-1.743 4.416-4 4.899"/>
        <path d="M16.848 7.722C18.32 8.598 19.5 10.152 19.5 12c0 2.76-2.24 5-5 5h-5c-2.76 0-5-2.24-5-5 0-.4.053-.79.152-1.166"/>
    </svg>
);


const MarqueeItem = ({ text }: { text: string }) => (
    <div className="flex items-center space-x-4">
        <span className="text-xl font-semibold">{text}</span>
        <ZeoFixLogo />
    </div>
);


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

      <section id="latest-projects" className="w-full py-16 md:py-24 lg:py-32 bg-secondary/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-accent/10 text-accent px-3 py-1 text-sm font-semibold">
                EACH PROJECT IS A NEW CHALLENGE
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Latest Projects</h2>
            </div>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Case studies that showcase the agency's approach, process, and results for specific clients.
            </p>
          </div>
          <div className="mt-12">
            <Carousel opts={{ align: "start", loop: true }}>
              <CarouselContent>
                {projects.map((project, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="h-full overflow-hidden group">
                      <Image
                        src={project.featuredImage}
                        alt={project.title}
                        width={600}
                        height={400}
                        data-ai-hint={project.dataAiHint}
                        className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <CardContent className="p-6">
                        <Badge variant="outline" className="mb-2">{project.category}</Badge>
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                        <Link href="/portfolio" className="text-sm font-semibold text-accent hover:underline">
                          Learn more <ArrowRight className="inline-block ml-1 h-4 w-4" />
                        </Link>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-[-1rem] md:left-[-2rem]" />
              <CarouselNext className="right-[-1rem] md:right-[-2rem]" />
            </Carousel>
          </div>
        </div>
      </section>
      
        <div className="bg-[#2D4FE1] text-white h-[80px] flex items-center overflow-hidden">
            <div className="animate-marquee whitespace-nowrap flex space-x-8">
                <MarqueeItem text="EXPERIENCE SEAMLESS IT SOLUTIONS" />
                <MarqueeItem text="REQUEST IT CONSULTATION" />
                <MarqueeItem text="EXPERIENCE SEAMLESS IT SOLUTIONS" />
                <MarqueeItem text="REQUEST IT CONSULTATION" />
                <MarqueeItem text="EXPERIENCE SEAMLESS IT SOLUTIONS" />
                <MarqueeItem text="REQUEST IT CONSULTATION" />
                <MarqueeItem text="EXPERIENCE SEAMLESS IT SOLUTIONS" />
                <MarqueeItem text="REQUEST IT CONSULTATION" />
            </div>
        </div>
      <section id="consultation" className="w-full py-16 md:py-24 lg:py-32" style={{ background: 'linear-gradient(to right, #464F62, #7F5D5D)' }}>
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col text-white space-y-8">
                <div>
                    
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Free Consultation - Discover IT Solutions For Your Business</h2>
                    <p className="mt-4 max-w-2xl text-gray-300">
                        Unlock the full potential of your business with our free consultation. Our expert team will assess your IT needs, recommend tailored solutions, and chart a path to success. Book your consultation now and take the first step towards empowering your business with cutting-edge technology.
                    </p>
                </div>
                <ul className="space-y-4">
                    {consultationPoints.map((point, index) => (
                        <li key={index} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-white" />
                            <span className="text-gray-300">{point}</span>
                        </li>
                    ))}
                </ul>
                <div className="border-t border-gray-500 pt-8 space-y-6">
                     <div className="flex items-center gap-4">
                        <Mail className="w-6 h-6 text-white" />
                        <a href="mailto:contact@zeofix.com" className="text-lg text-gray-300 hover:text-white transition-colors">contact@zeofix.com</a>
                    </div>
                    <div className="flex items-center gap-4">
                        <Phone className="w-6 h-6 text-white" />
                        <a href="tel:+12013740018" className="text-lg text-gray-300 hover:text-white transition-colors">+1 (201) 374-0018</a>
                    </div>
                    <div className="flex items-center gap-4">
                        <MapPin className="w-6 h-6 text-white" />
                        <div>
                            <p className="text-lg text-gray-300">5 South Forge Lane Cherry Hill, NJ 08002</p>
                            <a href="#" className="text-sm text-white hover:underline">Open map</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-md mx-auto">
              <ContactForm cardTitle="Schedule A Free Consultation" cardDescription="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

    