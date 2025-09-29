import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import {
  ArrowRight,
  Landmark,
  Rocket,
  BriefcaseMedical,
  Plane,
  Building2,
  Wrench,
  School,
} from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const industries = [
  { name: 'Finance & Banking', icon: <Landmark />, href: '/finance-banking' },
  {
    name: 'Information Technology & Telecommunications',
    icon: <Rocket />,
    href: '/it-telecom',
  },
  {
    name: 'Healthcare & Pharmaceuticals',
    icon: <BriefcaseMedical />,
    href: '/healthcare-pharmaceuticals',
  },
  {
    name: 'Transportation & Logistics',
    icon: <Plane />,
    href: '/transportation-logistics',
  },
  { name: 'Real Estate', icon: <Building2 />, href: '/real-estate' },
  {
    name: 'Manufacturing & Industry 4.0',
    icon: <Wrench />,
    href: '/manufacturing-industry',
  },
  {
    name: 'Education & Training',
    icon: <School />,
    href: '/education-training',
  },
];

export default function IndustriesSection() {
  return (
    <section
      id="industries"
      className="w-full pt-16 md:pt-24 pb-16 md:pb-24 lg:pb-32 relative bg-black"
      style={{
        backgroundImage: `
            linear-gradient(to right, rgba(75, 85, 99, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(75, 85, 99, 0.4) 1px, transparent 1px)
          `,
        backgroundSize: '40px 40px',
      }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div className="space-y-4">
            <Badge
              variant="outline"
              className="bg-accent/10 text-accent font-semibold border-accent/20"
            >
              INDUSTRIES
            </Badge>
            <h2 className="text-3xl font-normal tracking-tighter sm:text-4xl text-white">
              We Help Power Industries Of All Kinds To <br /> Boost ROI And Find
              New Clients
            </h2>
          </div>
          <Link
            href="/services"
            className="text-sm font-semibold text-white hover:underline mt-4 md:mt-0"
          >
            View All Industries{' '}
            <ArrowRight className="inline-block ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {industries.map((industry) => (
            <Link
              href={industry.href}
              key={industry.name}
              className="group flex items-center gap-4 p-4 rounded-lg bg-gray-900/50 text-white hover:bg-gray-800 transition-all duration-300 ease-in-out hover:translate-x-1 border border-gray-700 hover:border-gray-600"
            >
              <div className="text-white transition-colors duration-300">
                {React.cloneElement(industry.icon, { className: 'w-6 h-6' })}
              </div>
              <span className="font-semibold text-base">{industry.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
