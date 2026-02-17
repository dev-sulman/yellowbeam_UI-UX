import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';

export default function AiAdvisorSection() {
  return (
    <section
      id="ai-advisor"
      className="w-full py-16 md:py-24 lg:py-32 relative bg-black"
      style={{
        backgroundImage: `
            linear-gradient(to right, rgba(3, 96, 170, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(3, 96, 170, 0.15) 1px, transparent 1px)
          `,
        backgroundSize: '40px 40px',
      }}
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge
              variant="outline"
              className="bg-accent/10 text-accent font-semibold border-accent/20 px-4 py-1 rounded-full text-xs uppercase tracking-widest"
            >
              NEED A CONSULTATION?
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Get A Free <span className="text-accent underline decoration-accent/30 underline-offset-8">IT Solution</span> Consultation
            </h2>
            <p className="text-gray-400 max-w-lg text-lg">
              Not sure where to start? Our experts can help.
              Describe your business needs, and we will provide tailored IT
              solution recommendations, complete with estimated budgets and
              benefits.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="bg-accent/20 p-1 rounded-full">
                  <CheckCircle className="w-5 h-5 text-accent" />
                </div>
                <span className="text-gray-300">Personalized recommendations</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-accent/20 p-1 rounded-full">
                  <CheckCircle className="w-5 h-5 text-accent" />
                </div>
                <span className="text-gray-300">Budget estimations</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-accent/20 p-1 rounded-full">
                  <CheckCircle className="w-5 h-5 text-accent" />
                </div>
                <span className="text-gray-300">Targeted growth strategy</span>
              </li>
            </ul>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-xl h-14 px-8 shadow-[0_0_15px_rgba(254,76,28,0.2)]">
              <Link href="/contact">Get a Free Quote</Link>
            </Button>
          </div>
          <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 p-10 rounded-2xl text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[60px] rounded-full group-hover:bg-primary/30 transition-all"></div>
            <h3 className="text-3xl font-bold text-white mb-6 relative z-10">Start Your Project</h3>
            <p className="text-gray-400 mb-8 max-w-sm mx-auto relative z-10">Let's discuss your project and find the best solution for your business specifically.</p>
            <Button asChild size="lg" variant="outline" className="border-white/20 hover:bg-white/5 rounded-xl h-14 px-8 relative z-10">
              <Link href="/contact" className="flex items-center gap-2">Get In Touch <ArrowRight className="w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
