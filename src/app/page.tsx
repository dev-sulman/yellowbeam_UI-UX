
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Briefcase, Users, BarChart2, CheckCircle, ArrowRight, Mail, Phone, MapPin, Landmark, Rocket, BriefcaseMedical, Plane, Building2, Wrench, School, Code, Smartphone, Database, PenTool, TrendingUp, Search, MessageCircle, Megaphone, Pointer, Globe, Palette, Target, BarChart3, Bot, ShoppingCart, CircleDollarSign, Tv, LayoutTemplate, PenSquare, AppWindow, BrainCircuit, ShieldCheck, GaugeCircle } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { cn } from '@/lib/utils';
import AiSolutionAdvisor from '@/components/ai-solution-advisor';

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
    featuredImage: '/usabestcarshipping.jpg',
    description: 'A dedicated website for auto transport services in the USA, offering professional vehicle shipping...',
    'data-ai-hint': 'logistics website'
  },
  {
    title: 'Reilu Kuljetus Customer App',
    category: 'Mobile Application',
    featuredImage: '/noor.png',
    description: 'A mobile application for food delivery services in Finland, allowing users to browse menus, place...',
    'data-ai-hint': 'mobile app logistics'
  },
  {
    title: 'Reilu-Kuljetus',
    category: 'Website',
    featuredImage: '/reilu.jpg',
    description: 'A food delivery website in Finland, providing an easy-to-use platform for customers to order...',
    'data-ai-hint': 'food delivery website'
  },
  {
    title: 'Noor Care NGO Platform',
    category: 'Web Development',
    featuredImage: '/original-189293cabe56b4411fde1a306b8b9d9b.webp',
    description: 'Secure donation processing system to help the NGO increase online contributions.',
    'data-ai-hint': 'charity website'
  },
];

const industries = [
  { name: "Finance & Banking", icon: <Landmark />, href: "/finance-banking" },
  { name: "Information Technology & Telecommunications", icon: <Rocket />, href: "/it-telecom" },
  { name: "Healthcare & Pharmaceuticals", icon: <BriefcaseMedical />, href: "/healthcare-pharmaceuticals" },
  { name: "Transportation & Logistics", icon: <Plane />, href: "/transportation-logistics" },
  { name: "Real Estate", icon: <Building2 />, href: "/real-estate" },
  { name: "Manufacturing & Industry 4.0", icon: <Wrench />, href: "/manufacturing-industry" },
  { name: "Education & Training", icon: <School />, href: "/education-training" },
];

const services = [
  {
    icon: <Code className="w-8 h-8 text-accent" />,
    title: 'Web Development',
    description: 'Your website is a tool that should be used in order to draw traffic, convert traffic into customers, and maintain the relationship you have with your customers.',
    href: '/web-development',
  },
  {
    icon: <Smartphone className="w-8 h-8 text-accent" />,
    title: 'Mobile Development',
    description: 'Strategic guidance on IT strategy, digital transformation, software implementation, and project management for mobile.',
    href: '/mobile-development',
  },
  {
    icon: <PenSquare className="w-8 h-8 text-accent" />,
    title: 'Software Development',
    description: 'Custom software development and integration services to meet specific business needs.',
    href: '/software-development',
  },
  {
    icon: <Palette className="w-8 h-8 text-accent" />,
    title: 'Graphic Design',
    description: 'We work with your company to make sure your brand is positioned as a central signature with a consistent identity displayed across multiple media channels and applications.',
    href: '/graphic-design',
  },
  {
    icon: <AppWindow className="w-8 h-8 text-accent" />,
    title: 'UI/UX Development',
    description: "Enhancing your website's visibility on search engines to attract organic traffic and improve search rankings.",
    href: '/ui-ux-development',
  },
  {
    icon: <Search className="w-8 h-8 text-accent" />,
    title: 'Search Engine Optimization',
    description: "Enhancing your website's visibility on search engines to attract organic traffic and improve search rankings.",
    href: '/search-engine-optimization',
  },
  {
    icon: <Megaphone className="w-8 h-8 text-accent" />,
    title: 'Social Media Marketing',
    description: 'Creating and managing engaging social media campaigns to connect with your audience, increase brand awareness.',
    href: '/social-media-marketing',
  },
  {
    icon: <Target className="w-8 h-8 text-accent" />,
    title: 'Pay-Per-Click Advertising',
    description: 'Running targeted advertising campaigns on platforms like Google Ads to drive immediate traffic and conversions.',
    href: '/pay-per-click-advertising',
  },
  {
    icon: <MessageCircle className="w-8 h-8 text-accent" />,
    title: 'Content Marketing',
    description: 'Creating valuable and relevant content to attract and engage your target audience, building trust and authority.',
    href: '/content-marketing',
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


const SulzaXLogo = () => (
    <svg width="120" height="32" viewBox="0 0 1200 320" xmlns="http://www.w3.org/2000/svg" className="text-white">
      <defs>
        <linearGradient id="gBlue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#05D1FF"/>
          <stop offset="1" stopColor="#0B52FF"/>
        </linearGradient>
        <linearGradient id="gSilver" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFFFFF"/>
          <stop offset="0.45" stopColor="#E9F0FA"/>
          <stop offset="1" stopColor="#A9B7CB"/>
        </linearGradient>
        <linearGradient id="gWordFooter" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFFFFF"/>
          <stop offset="1" stopColor="#FFFFFF"/>
        </linearGradient>
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
          <feOffset dx="0" dy="2" result="offsetblur"/>
          <feMerge>
            <feMergeNode/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <g transform="translate(60,30) scale(0.8)">
        <g filter="url(#softShadow)">
            <circle cx="120" cy="130" r="92" fill="none" stroke="url(#gBlue)" strokeWidth="18"/>
            <circle cx="120" cy="130" r="70" fill="none" stroke="url(#gBlue)" strokeWidth="6" opacity="0.9"/>
            <g stroke="url(#gBlue)" strokeWidth="8" strokeLinecap="round" fill="url(#gBlue)">
            <line x1="160" y1="80" x2="194" y2="50"/>
            <circle cx="194" cy="50" r="7"/>
            <line x1="170" y1="100" x2="220" y2="84"/>
            <circle cx="220" cy="84" r="7"/>
            </g>
            <text x="120" y="151"
            textAnchor="middle"
            fontFamily="Outfit, Poppins, Montserrat, Segoe UI, Arial, sans-serif"
            fontSize="132"
            fontWeight="900"
            fill="black"
            letterSpacing="0.5">S</text>
        </g>
      </g>
       <text x="300" y="175"
            fontFamily="Outfit, Poppins, Montserrat, Segoe UI, Arial, sans-serif"
            fontSize="140" fontWeight="800"
            fill="url(#gWordFooter)" letterSpacing="-1">
        Sulza<tspan fill="url(#gBlue)">X</tspan>
      </text>
    </svg>
);


const MarqueeItem = ({ text }: { text: string }) => (
  <div className="flex items-center space-x-4">
    <span className="text-xl font-semibold">{text}</span>
    <SulzaXLogo />
  </div>
);


export default function Home() {
  const marqueeContent = Array(2).fill([
    { text: "EXPERIENCE SEAMLESS IT SOLUTIONS" },
    { text: "REQUEST IT CONSULTATION" }
  ]).flat();

  return (
    <div className="font-body text-base">
      <section className="w-full pt-16 md:pt-24 lg:pt-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter text-primary sm:text-5xl xl:text-6xl/none">
                  Transform Your Business with Custom IT Solutions
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  At SulzaX, we create high-quality, custom websites that are both visually appealing and functional. We also integrate SEO to boost your site's visibility and help attract the right audience, driving business growth.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                 <Button asChild size="lg">
                  <Link href="/contact">Free Assessment</Link>
                </Button>
              </div>
            </div>
            <Image
              src="/main.jpeg"
              width="550"
              height="550"
              alt="Hero"
              data-ai-hint="team meeting office"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            />
          </div>
        </div>
      </section>

      <section id="about-us" className="w-full py-16 md:py-24 mb-[5px]">
        <div className="container mx-auto px-4 md:px-6">
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
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertisePoints.map((point, index) => (
              <Card key={index} className="bg-transparent shadow-none border-none text-center">
                <div className="flex justify-center items-center mb-4">
                  {point.icon}
                </div>
                <h3 className="text-xl font-semibold text-black dark:text-white mb-2">{point.title}</h3>
                <p className="text-muted-foreground">{point.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services-grid" className="w-full py-16 md:py-24 lg:py-32 bg-white dark:bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge variant="outline" className="border-accent/20 text-accent font-semibold mb-4">We are a team of humans</Badge>
            <h2 className="text-3xl font-normal tracking-tighter sm:text-4xl text-black dark:text-white">
              Our Services for Growing Your Business
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link key={index} href={service.href || '#'} className="group">
                <Card className="bg-white dark:bg-card shadow-lg rounded-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="flex justify-center items-center mb-4">
                    <div className="p-3 bg-secondary/50 rounded-full">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-normal text-black dark:text-white mb-2 relative inline-block">
                    {service.title}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="industries" className="w-full pt-16 md:pt-24 pb-16 md:pb-24 lg:pb-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div className="space-y-4">
              <Badge variant="outline" className="bg-secondary text-accent font-semibold border-accent/20">INDUSTRIES</Badge>
              <h2 className="text-3xl font-normal tracking-tighter sm:text-4xl text-black dark:text-white">
                We Help Power Industries Of All Kinds To <br /> Boost ROI And Find New Clients
              </h2>
            </div>
            <Link href="/services" className="text-sm font-semibold text-black dark:text-white hover:underline mt-4 md:mt-0">
              View All Industries <ArrowRight className="inline-block ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {industries.map((industry) => (
                <Link 
                    href={industry.href} 
                    key={industry.name} 
                    className="group flex items-center gap-4 p-4 rounded-lg bg-secondary/50 text-foreground hover:bg-[#2D4FE1] hover:text-white transition-all duration-300 ease-in-out hover:translate-x-1"
                >
                    <div className="text-accent group-hover:text-white transition-colors duration-300">
                        {React.cloneElement(industry.icon, { className: 'w-6 h-6' })}
                    </div>
                    <span className="font-semibold text-base">{industry.name}</span>
                </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="latest-projects" className="w-full bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 lg:py-32">
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
                        data-ai-hint={project['data-ai-hint']}
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

      <section id="ai-advisor" className="w-full py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <Badge variant="outline" className="bg-secondary text-accent font-semibold border-accent/20">AI-POWERED</Badge>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get Instant IT Solution Recommendations</h2>
                    <p className="text-muted-foreground max-w-lg">
                        Not sure where to start? Our AI-powered Solution Advisor can help. Describe your business needs, and our AI will provide tailored IT solution recommendations, complete with estimated budgets and benefits, based on our extensive project portfolio.
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-accent" />
                            <span>Personalized recommendations</span>
                        </li>
                         <li className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-accent" />
                            <span>Budget estimations</span>
                        </li>
                         <li className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-accent" />
                            <span>Based on successful projects</span>
                        </li>
                    </ul>
                </div>
                <AiSolutionAdvisor />
            </div>
        </div>
      </section>


      <div className="bg-primary text-white h-[80px] flex items-center overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap space-x-8">
            {marqueeContent.map((item, index) => <MarqueeItem key={index} text={item.text} />)}
        </div>
      </div>
      <section id="consultation" className="w-full py-16 md:py-24 lg:py-32" style={{ background: 'linear-gradient(to right, #464F62, #7F5D5D)' }}>
        <div className="container mx-auto px-4 md:px-6">
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
                  <a href="mailto:sulzax0@gmail.com" className="text-lg text-gray-300 hover:text-white transition-colors">sulzax0@gmail.com</a>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-white" />
                  <a href="tel:03045865181" className="text-lg text-gray-300 hover:text-white transition-colors">03045865181</a>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-white" />
                  <div>
                    <p className="text-lg text-gray-300">Sector 3 khairan Cantt</p>
                    <a href="https://maps.app.goo.gl/tsc8z3Tdy2kMg4ve7"  target='_blank' className="text-sm text-white hover:underline">Open map</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full max-w-md mx-auto">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
