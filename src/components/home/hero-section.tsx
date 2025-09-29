import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="w-full relative bg-gradient-to-r from-[#0f172a] to-[#334155]">
      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-8 md:pt-16 lg:pt-24 pb-8 md:pb-16 lg:pb-24">
        <div className="grid gap-6 md:grid-cols-5 md:gap-12 items-center">
          <div className="md:col-span-3 flex flex-col justify-center space-y-4 text-center md:text-left">
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter text-white">
                Transform Your Business with Custom IT Solutions
              </h1>
              <p className="max-w-[600px] text-gray-300 text-sm sm:text-base md:text-lg mx-auto md:mx-0">
                At SulzaX, we create high-quality, custom websites that are both
                visually appealing and functional. We also integrate SEO to
                boost your site's visibility and help attract the right
                audience, driving business growth.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center md:justify-start">
              <Button asChild size="lg">
                <Link href="/contact">Free Assessment</Link>
              </Button>
            </div>
          </div>
          <div className="md:col-span-2">
            <Image
                src="/main.jpeg"
                width="950"
                height="250"
                alt="Hero"
                data-ai-hint="team meeting office"
                className="mx-auto aspect-video w-full overflow-hidden rounded-xl object-cover"
                priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
