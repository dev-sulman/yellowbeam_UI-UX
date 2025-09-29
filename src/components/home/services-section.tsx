import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    icon: (
      <Image src="/icons/coding.png" alt="Web Development" width={42} height={42} />
    ),
    title: 'Web Development',
    description:
      'Your website is a tool that should be used in order to draw traffic, convert traffic into customers, and maintain the relationship you have with your customers.',
    href: '/web-development',
  },
  {
    icon: (
      <Image
        src="/icons/Mobile.png"
        alt="Mobile Development"
        width={42}
        height={42}
      />
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
      "Enhancing your website's visibility on search engines to attract organic traffic and improve search rankings.",
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
      className="w-full py-16 md:py-24 lg:py-32 bg-slate-400"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <Badge
            variant="outline"
            className="border-white/20 text-white font-semibold mb-4"
          >
            We are a team of humans
          </Badge>
          <h2 className="text-3xl font-normal tracking-tighter sm:text-4xl text-white">
            Our Services for Growing Your Business
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link key={index} href={service.href || '#'} className="group">
              <Card
                className={cn(
                  'shadow-lg rounded-lg p-6 md:p-8 text-center hover:shadow-xl transition-shadow duration-300 h-full',
                  'bg-slate-500/50 text-white border-slate-500'
                )}
              >
                <div className="flex justify-center items-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-normal mb-2 relative inline-block">
                  {service.title}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full bg-white"></span>
                </h3>
                <p className="text-slate-200">{service.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
