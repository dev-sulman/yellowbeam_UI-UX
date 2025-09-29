import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const aboutStats = [
  { value: '20', label: 'Years experiences' },
  { value: '1.8k', label: 'Happy customers' },
  { value: '460', label: 'Project completed' },
  { value: '15', label: 'Awards achievement' },
];

export default function AboutSection() {
  return (
    <section id="about-us" className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="rounded-xl p-6 md:space-y-0 md:p-8 lg:p-12 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6">
              <Badge className="bg-accent text-accent-foreground">
                ABOUT US
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                We Solve Technology Challenges.
              </h2>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg md:text-xl font-semibold text-white">
                Your IT Services Partner!
              </h3>
              <p className="text-gray-300">
                We offer customized IT solutions, from managed services to cloud
                computing and cybersecurity. Empower your business with our
                expertise for growth and efficiency.
              </p>
              <Link
                href="/contact"
                className="font-semibold text-white hover:underline"
              >
                Join us today!
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-4 text-white">
              {aboutStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-3xl md:text-4xl font-bold">{stat.value}</p>
                  <p className="text-xs md:text-sm text-gray-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
