import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    icon: (
      <Image src="/icons/coding.png" alt="Web Development" width={48} height={48} className="brightness-110" />
    ),
    title: 'Web Development',
    description:
      'Your website is a tool that should be used in order to draw traffic, convert traffic into customers, and maintain the relationship you have with your customers.',
    href: '/web-development',
  },
  {
    icon: (
      <Image src="/icons/Mobile.png" alt="Mobile Development" width={48} height={48} className="brightness-110" />
    ),
    title: 'Mobile Development',
    description:
      'Strategic guidance on IT strategy, digital transformation, software implementation, and project management for mobile.',
    href: '/mobile-development',
  },
  {
    icon: (
      <Image
        src="/icons/SoftwareDevelopment.png"
        alt="Software Development"
        width={42}
        height={42}
      />
    ),
    title: 'Software Development',
    description:
      'Custom software development and integration services to meet specific business needs.',
    href: '/software-development',
  },
  {
    icon: (
      <Image
        src="/icons/GraphicDesign.png"
        alt="Graphic Design"
        width={42}
        height={42}
      />
    ),
    title: 'Graphic Design',
    description:
      'We work with your company to make sure your brand is positioned as a central signature with a consistent identity displayed across multiple media channels and applications.',
    href: '/graphic-design',
  },
  {
    icon: (
      <Image
        src="/icons/UIUXDevelopment.png"
        alt="UI/UX Development"
        width={42}
        height={42}
      />
    ),
    title: 'UI/UX Development',
    description:
      "Crafting intuitive and engaging user experiences through meticulous research, wireframing, and pixel-perfect design.",
    href: '/ui-ux-development',
  },
  {
    icon: (
      <Image
        src="/icons/SearchEngineOptimization.png"
        alt="Search Engine Optimization"
        width={42}
        height={42}
      />
    ),
    title: 'Search Engine Optimization',
    description:
      "Enhancing your website's visibility on search engines to attract organic traffic and improve search rankings.",
    href: '/search-engine-optimization',
  },
  {
    icon: (
      <Image
        src="/icons/SocialMediaMarketing.png"
        alt="Social Media Marketing"
        width={42}
        height={42}
      />
    ),
    title: 'Social Media Marketing',
    description:
      'Creating and managing engaging social media campaigns to connect with your audience, increase brand awareness.',
    href: '/social-media-marketing',
  },
  {
    icon: (
      <Image
        src="/icons/Pay-Per-Click.png"
        alt="Pay-Per-Click Advertising"
        width={42}
        height={42}
      />
    ),
    title: 'Pay-Per-Click Advertising',
    description:
      'Running targeted advertising campaigns on platforms like Google Ads to drive immediate traffic and conversions.',
    href: '/pay-per-click-advertising',
  },
  {
    icon: (
      <Image
        src="/icons/ContentWriting.png"
        alt="Content Marketing"
        width={42}
        height={42}
      />
    ),
    title: 'Content Marketing',
    description:
      'Creating valuable and relevant content to attract and engage your target audience, building trust and authority.',
    href: '/content-marketing',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services-grid"
      className="w-full py-20 md:py-32 relative overflow-hidden bg-[#023055]/5"
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/15 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/15 blur-[120px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <Badge
            variant="outline"
            className="border-accent/30  text-accent bg-accent/5 px-4 py-1 rounded-full text-sm font-medium mb-6 uppercase tracking-wider"
          >
            Our Expertise
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black mb-6">
            Innovative <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary animate-gradient">Solutions</span> for Growth
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We combine human creativity with cutting-edge technology to deliver digital experiences that transform businesses and delight users.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Link key={index} href={service.href || '#'} className="group block h-full">
              <div className="relative h-full">
                <div className="absolute inset-0.5 bg-black/60 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-sm"></div>
                <Card
                  className={cn(
                    'relative flex flex-col  h-full p-8 md:p-10 transition-all duration-300 rounded-2xl overflow-hidden',
                    'bg-white/[0.04] backdrop-blur-xl border-black group-hover:bg-[#023055] group-hover:border-accent/30'
                  )}
                >
                  <div className="mb-8 p-4 w-fit rounded-2xl bg-white/[0.05] border  group-hover:scale-110 transition-transform duration-500 shadow-xl">
                    <div className="relative z-10">
                      {service.icon}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
                    {service.description}
                  </p>

                  <div className="flex items-center text-accent font-semibold text-sm">
                    EXPLORE SERVICE
                    <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </Card>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
