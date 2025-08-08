
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Briefcase, Users, BarChart2, CheckCircle, ArrowRight, Mail, Phone, MapPin, Landmark, Rocket, BriefcaseMedical, Plane, Building2, Wrench, School, Code, Smartphone, Database, PenTool, TrendingUp, Search, MessageCircle, Megaphone, Pointer, Globe, Palette, Target, BarChart3, Bot, ShoppingCart, CircleDollarSign, Tv, LayoutTemplate, PenSquare, AppWindow, BrainCircuit, ShieldCheck, GaugeCircle } from 'lucide-react';
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
    featuredImage: 'https://placehold.co/600x400.png',
    description: 'A dedicated website for auto transport services in the USA, offering professional vehicle shipping...',
    dataAiHint: 'logistics website'
  },
  {
    title: 'Reilu Kuljetus Customer App',
    category: 'Mobile Application',
    featuredImage: 'https://placehold.co/600x400.png',
    description: 'A mobile application for food delivery services in Finland, allowing users to browse menus, place...',
    dataAiHint: 'mobile app logistics'
  },
  {
    title: 'Reilu-Kuljetus',
    category: 'Website',
    featuredImage: 'https://placehold.co/600x400.png',
    description: 'A food delivery website in Finland, providing an easy-to-use platform for customers to order...',
    dataAiHint: 'food delivery website'
  },
    {
    title: 'Noor Care NGO Platform',
    category: 'Web Development',
    featuredImage: 'https://placehold.co/600x400.png',
    description: 'Secure donation processing system to help the NGO increase online contributions.',
    dataAiHint: 'charity website'
  },
];

const industries = [
  { name: "Finance & Banking", icon: <Landmark className="w-5 h-5" />, href: "/finance-banking" },
  { name: "Information Technology & Telecommunications", icon: <Rocket className="w-5 h-5" />, href: "/it-telecom" },
  { name: "Healthcare & Pharmaceuticals", icon: <BriefcaseMedical className="w-5 h-5" />, href: "/healthcare" },
  { name: "Transportation & Logistics", icon: <Plane className="w-5 h-5" />, href: "/logistics" },
  { name: "Real Estate", icon: <Building2 className="w-5 h-5" />, href: "/real-estate" },
  { name: "Manufacturing & Industry 4.0", icon: <Wrench className="w-5 h-5" />, href: "/manufacturing" },
  { name: "Education & Training", icon: <School className="w-5 h-5" />, href: "/education" },
];

const services = [
  {
    icon: <Code className="w-8 h-8 text-accent" />,
    title: 'Web Development',
    description: 'Your website is a tool that should be used in order to draw traffic, convert traffic into customers, and maintain the relationship you have with your customers.',
  },
  {
    icon: <Smartphone className="w-8 h-8 text-accent" />,
    title: 'Mobile Development',
    description: 'Strategic guidance on IT strategy, digital transformation, software implementation, and project management.',
  },
  {
    icon: <PenSquare className="w-8 h-8 text-accent" />,
    title: 'Software Development',
    description: 'Custom software development and integration services to meet specific business needs.',
  },
  {
    icon: <Palette className="w-8 h-8 text-accent" />,
    title: 'Graphic Design',
    description: 'We work with your company to make sure your brand is positioned as a central signature with a consistent identity displayed across multiple media channels and applications.',
  },
  {
    icon: <AppWindow className="w-8 h-8 text-accent" />,
    title: 'UI/UX Development',
    description: "Enhancing your website's visibility on search engines to attract organic traffic and improve search rankings.",
  },
  {
    icon: <Search className="w-8 h-8 text-accent" />,
    title: 'Search Engine Optimization',
    description: "Enhancing your website's visibility on search engines to attract organic traffic and improve search rankings.",
  },
  {
    icon: <Megaphone className="w-8 h-8 text-accent" />,
    title: 'Social Media Marketing',
    description: 'Creating and managing engaging social media campaigns to connect with your audience, increase brand awareness.',
  },
  {
    icon: <Target className="w-8 h-8 text-accent" />,
    title: 'Pay-Per-Click Advertising',
    description: 'Running targeted advertising campaigns on platforms like Google Ads to drive immediate traffic and conversions.',
  },
  {
    icon: <MessageCircle className="w-8 h-8 text-accent" />,
    title: 'Content Marketing',
    description: 'Creating valuable and relevant content to attract and engage your target audience, building trust and authority.',
  },
];

const expertisePoints = [
  {
    icon: <BrainCircuit className="w-10 h-10 text-accent" />,
    title: "Expertise",
    description: "Access to specialized knowledge and technology expertise for effective IT solutions."
  },
  {
    icon: <CircleDollarSign className="w-10 h-10 text-accent" />,
    title: "Cost Savings",
    description: "Avoiding expenses associated with maintaining an in-house IT department."
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-accent" />,
    title: "Enhanced Security",
    description: "Robust measures to protect against cyber threats and ensure data security."
  },
  {
    icon: <GaugeCircle className="w-10 h-10 text-accent" />,
    title: "Increased Efficiency",
    description: "Streamlined operations, automation, and proactive monitoring for improved productivity."
  }
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
      <section className="w-full bg-secondary/50 py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center space-y-6 max-w-[272px]">
              <div className="space-y-4">
                <h1 className="text-3xl font-normal tracking-tighter text-primary sm:text-4xl xl:text-5xl/none">
                  IT services for small to mid-Sized companies
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
              src="https://placehold.co/1000x800.png"
              width="1000"
              height="800"
              alt="Hero"
              data-ai-hint="team meeting office"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
            />
          </div>
        </div>
      </section>

       <section id="about-us" className="w-full py-16 md:py-24 mb-[5px]">
        <div className="container px-4 md:px-6">
          <div className="rounded-xl p-8 md:p-12" style={{ background: 'linear-gradient(to right, #464F62, #7F5D5D)' }}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-white space-y-8">
                    <Badge className="bg-accent text-accent-foreground">ABOUT US</Badge>
                    <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">We Solve Technology Challenges.</h2>
                </div>
                <div className="text-gray-200 space-y-6">
                    <h3 className="text-xl font-semibold text-white">Your IT Services Partner!</h3>
                    <p>We offer customized IT solutions, from managed services to cloud computing and cybersecurity. Empower your business with our expertise for growth and efficiency.</p>
                    <Link href="/contact" className="font-semibold text-white hover:underline">Join us today!</Link>
                </div>
            </div>
            <div className="border-t border-gray-400/50 mt-8 lg:mt-12 pt-8 pb-4">
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
                        <div className="flex items-center gap-4">
                            <div className="w-px h-12 bg-gray-400/50"></div>
                            <div>
                                <p className="text-4xl font-bold">20</p>
                                <p className="text-sm text-gray-300">Years experiences</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                             <div className="w-px h-12 bg-gray-400/50"></div>
                            <div>
                                <p className="text-4xl font-bold">1.8k</p>
                                <p className="text-sm text-gray-300">Happy customers</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                             <div className="w-px h-12 bg-gray-400/50"></div>
                            <div>
                                <p className="text-4xl font-bold">460</p>
                                <p className="text-sm text-gray-300">Project completed</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                             <div className="w-px h-12 bg-gray-400/50"></div>
                            <div>
                                <p className="text-4xl font-bold">15</p>
                                <p className="text-sm text-gray-300">Awards achievement</p>
                            </div>
                        </div>
                    </div>
            </div>
          </div>
        </div>
      </section>

      <section id="expertise" className="w-full py-16 md:py-24 lg:py-32 bg-secondary/30">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertisePoints.map((point, index) => (
              <Card key={index} className="bg-transparent shadow-none border-none text-center">
                <div className="flex justify-center items-center mb-4">
                    {point.icon}
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">{point.title}</h3>
                <p className="text-muted-foreground">{point.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

       <section id="services-grid" className="w-full py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge variant="outline" className="border-accent/20 text-accent font-semibold mb-4">We are a team of humans</Badge>
            <h2 className="text-3xl font-normal tracking-tighter sm:text-4xl text-black">
              Our Services for Growing Your Business
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white shadow-lg rounded-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-center items-center mb-4">
                  <div className="p-3 bg-secondary/50 rounded-full">
                    {service.icon}
                  </div>
                </div>
                <h3 className="group text-xl font-normal text-black mb-2 relative inline-block">
                  {service.title}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="industries" className="w-full pt-16 md:pt-24 pb-16 md:pb-24 lg:pb-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div className="space-y-4">
              <Badge variant="outline" className="bg-secondary text-accent font-semibold border-accent/20">INDUSTRIES</Badge>
              <h2 className="text-3xl font-normal tracking-tighter sm:text-4xl text-black">
                We Help Power Industries Of All Kinds To <br /> Boost ROI And Find New Clients
              </h2>
            </div>
            <Link href="/services" className="text-sm font-semibold text-black hover:underline mt-4 md:mt-0">
              View All Industries <ArrowRight className="inline-block ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industries.map((industry, index) => (
              <Link href={industry.href} key={index} className="group">
                <Card className="bg-secondary/30 hover:bg-[#2D4FE1] text-black hover:text-white transition-all duration-300 shadow-sm hover:shadow-md border-0">
                  <CardContent className="p-4 flex items-center gap-4">
                    {industry.icon}
                    <h3 className="text-lg font-normal text-black group-hover:text-white transition-transform duration-300 group-hover:translate-x-1">{industry.name}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="latest-projects" className="w-full bg-secondary/50">
        <div className="container px-4 md:px-6 py-16 md:py-24 lg:py-32">
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
                        src="https://placehold.co/600x400.png"
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
                        <a href="mailto:contact@sulzax.com" className="text-lg text-gray-300 hover:text-white transition-colors">contact@sulzax.com</a>
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
