
'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Image from "next/image";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio | SulzaX IT Services',
  description: 'Explore our portfolio of successful projects, showcasing our expertise in web development, mobile solutions, and custom applications across various industries.',
};

const projects = [
  {
    title: 'USA Best Car Shipping',
    client: 'USA Best Car Shipping',
    category: ['Web Development', 'Lead Generation'],
    technologies: ['React', 'WordPress', 'PHP'],
    industry: 'Logistics',
    year: '2023',
    featuredImage: '/aim.png',
    description: 'Modern website to handle 500+ daily quote requests with a custom quote calculator.',
    results: '240% increase in lead conversion.',
    'data-ai-hint': 'logistics website'
  },
  {
    title: 'Mobile Development Project',
    client: 'Mobile Client',
    category: ['Mobile Solutions'],
    technologies: ['Flutter', 'Firebase'],
    industry: 'Technology',
    year: '2023',
    featuredImage: '/noor.png',
    description: 'Cross-platform mobile application development.',
    results: '65% faster performance than native apps',
    'data-ai-hint': 'mobile app'
  },
  {
    title: 'Custom Application',
    client: 'Enterprise Client',
    category: ['Web Development'],
    technologies: ['React', 'Node.js'],
    industry: 'Business',
    year: '2023',
    featuredImage: '/noor.png',
    description: 'Custom business application with advanced features.',
    results: '300% workflow improvement',
    'data-ai-hint': 'business app'
  },
  {
    title: 'Education Platform',
    client: 'MDU University',
    category: ['Web Development', 'Education'],
    technologies: ['React', 'Python'],
    industry: 'Education',
    year: '2023',
    featuredImage: '/noor.png',
    description: 'Online learning platform for university students.',
    results: '150% increase in student engagement',
    'data-ai-hint': 'education platform'
  },
  {
    title: 'Healthcare Solution',
    client: 'HealthCare Inc',
    category: ['Web Development', 'Healthcare'],
    technologies: ['React', 'AWS'],
    industry: 'Healthcare',
    year: '2023',
    featuredImage: '/noor.png',
    description: 'HIPAA-compliant healthcare management system.',
    results: '10,000+ patient records managed',
    'data-ai-hint': 'healthcare system'
  },
];

const allIndustries = [...new Set(projects.map(p => p.industry))];
const allTechnologies = [...new Set(projects.flatMap(p => p.technologies))];

const PortfolioPage = () => {
  const [filters, setFilters] = useState({
    industry: 'all',
    technology: 'all'
  });

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const industryMatch = filters.industry === 'all' || project.industry === filters.industry;
      const technologyMatch = filters.technology === 'all' || project.technologies.includes(filters.technology);
      return industryMatch && technologyMatch;
    });
  }, [filters]);

  const handleFilterChange = (filterName: 'industry' | 'technology') => (value: string) => {
    setFilters(prev => ({ ...prev, [filterName]: value }));
  };

  return (
    <div className="bg-background text-foreground">
      <section className="w-full py-20 md:py-24 bg-gradient-to-r from-[#0f172a] to-[#334155] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Our Work</h1>
            <p className="mt-4 max-w-2xl text-xl text-gray-300">
              Explore our portfolio of successful projects across various industries and technologies.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
            <Card className="p-6 mb-12 bg-secondary/30">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <h3 className="md:col-span-1 text-lg font-semibold">Filter Projects</h3>
                    <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Select onValueChange={handleFilterChange('industry')} defaultValue="all">
                            <SelectTrigger><SelectValue placeholder="Filter by industry" /></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Industries</SelectItem>
                                {allIndustries.map(industry => <SelectItem key={industry} value={industry}>{industry}</SelectItem>)}
                            </SelectContent>
                        </Select>
                        <Select onValueChange={handleFilterChange('technology')} defaultValue="all">
                            <SelectTrigger><SelectValue placeholder="Filter by technology" /></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Technologies</SelectItem>
                                {allTechnologies.map(tech => <SelectItem key={tech} value={tech}>{tech}</SelectItem>)}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </Card>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredProjects.length > 0 ? filteredProjects.map((project) => (
                <Card key={project.title} className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                    <div className="overflow-hidden h-[250px] relative">
                        <Image
                            src={project.featuredImage}
                            alt={project.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            quality={85}
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    <CardContent className="p-6">
                    <h3 className="text-xl font-bold font-headline mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                    <div className="mb-4">
                        <p className="font-semibold text-sm">Result: <span className="font-normal text-muted-foreground">{project.results}</span></p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map(tech => <Badge key={tech} variant="secondary">{tech}</Badge>)}
                    </div>
                    </CardContent>
                </Card>
                )) : (
                    <p className="md:col-span-3 text-center text-muted-foreground">No projects match the selected filters.</p>
                )}
            </div>
        </div>
      </section>
    </div>
  );
}

export default PortfolioPage;
