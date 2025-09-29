import AiSolutionAdvisor from '@/components/ai-solution-advisor';
import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';

export default function AiAdvisorSection() {
  return (
    <section
      id="ai-advisor"
      className="w-full py-16 md:py-24 lg:py-32 relative bg-black"
      style={{
        backgroundImage: `
            linear-gradient(to right, rgba(75, 85, 99, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(75, 85, 99, 0.4) 1px, transparent 1px)
          `,
        backgroundSize: '40px 40px',
      }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge
              variant="outline"
              className="bg-accent/10 text-accent font-semibold border-accent/20"
            >
              AI-POWERED
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Get Instant IT Solution Recommendations
            </h2>
            <p className="text-gray-300 max-w-lg">
              Not sure where to start? Our AI-powered Solution Advisor can help.
              Describe your business needs, and our AI will provide tailored IT
              solution recommendations, complete with estimated budgets and
              benefits, based on our extensive project portfolio.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-gray-300">
                  Personalized recommendations
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-gray-300">Budget estimations</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-gray-300">
                  Based on successful projects
                </span>
              </li>
            </ul>
          </div>
          <AiSolutionAdvisor />
        </div>
      </div>
    </section>
  );
}
