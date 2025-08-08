import { Button } from '@/components/ui/button';
import Link from 'next/link';
import AiSolutionAdvisor from '@/components/ai-solution-advisor';
import Image from 'next/image';
import { Briefcase, Users, BarChart2, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: <Briefcase className="w-8 h-8 text-primary" />,
    title: '20 Years Industry Experience',
    description: 'Leverage our two decades of expertise to build robust and scalable solutions.',
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: 'Certified Development Team',
    description: 'Our team consists of certified professionals dedicated to quality and excellence.',
  },
  {
    icon: <BarChart2 className="w-8 h-8 text-primary" />,
    title: 'Agile Development Process',
    description: 'We use agile methodologies to deliver your project on time and within budget.',
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-primary" />,
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

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline text-primary">
                  Transform Your Business with Custom IT Solutions
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Enterprise-grade technology tailored for growing businesses. We deliver comprehensive digital solutions to help you succeed.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="font-semibold">
                  <Link href="/contact">Get Free Consultation</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="font-semibold">
                  <Link href="/portfolio">View Case Studies</Link>
                </Button>
              </div>
            </div>
            <Image
              src="https://placehold.co/600x400.png"
              width="600"
              height="400"
              alt="Hero"
              data-ai-hint="team meeting"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>

      <section id="trust" className="py-12 md:py-24">
        <div className="container">
          <h3 className="text-center text-lg font-semibold text-muted-foreground tracking-wider mb-8">
            TRUSTED BY 1800+ BUSINESSES WORLDWIDE
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {clientLogos.map((logo, index) => (
              <Image key={index} src={logo.src} alt={logo.alt} data-ai-hint={logo.hint} width={120} height={40} className="opacity-60 hover:opacity-100 transition-opacity" />
            ))}
          </div>
        </div>
      </section>

      <section id="ai-advisor" className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-semibold">AI-Powered Solutions</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Find Your Perfect IT Solution</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Describe your business needs, and our AI Solution Advisor will analyze your requirements and recommend tailored IT solutions from our extensive portfolio, complete with estimated budgets.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-4xl mt-12">
            <AiSolutionAdvisor />
          </div>
        </div>
      </section>
      
      <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm font-semibold">Why Choose Us</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                Your Partner in Digital Transformation
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                At SulzaX, we combine cutting-edge technology with deep industry knowledge to deliver solutions that drive growth and efficiency.
              </p>
            </div>
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  {feature.icon}
                  <div>
                    <h3 className="text-lg font-bold font-headline">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
