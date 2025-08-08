'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Image from "next/image";

const projects = [
  {
    title: 'USA Best Car Shipping',
    client: 'USA Best Car Shipping',
    category: ['Web Development', 'Lead Generation'],
    technologies: ['React', 'WordPress', 'PHP'],
    industry: 'Logistics',
    year: '2023',
    featuredImage: 'https://placehold.co/600x400.png',
    description: 'Modern website to handle 500+ daily quote requests with a custom quote calculator.',
    results: '240% increase in lead conversion.',
    dataAiHint: 'logistics website'
  },
  {
    title: 'Reilu Kuljetus Mobile App',
    client: 'Reilu Kuljetus',
    category: ['Mobile Solutions', 'Real-Time Tracking'],
    technologies: ['Flutter', 'Firebase', 'Dart'],
    industry: 'Logistics',
    year: '2022',
    featuredImage: 'https://placehold.co/600x400.png',
    description: 'Real-time tracking for logistics company, improving customer service and operational efficiency.',
    results: 'Reduced customer support calls by 65%.',
    dataAiHint: 'mobile app logistics'
  },
  {
    title: 'Noor Care NGO Platform',
    client: 'Noor Care NGO',
    category: ['Web Development', 'Non-Profit'],
    technologies: ['React', 'Node.js', 'Stripe'],
    industry: 'Non-Profit',
    year: '2023',
    featuredImage: 'https://placehold.co/600x400.png',
    description: 'Secure donation processing system to help the NGO increase online contributions.',
    results: '300% increase in online donations.',
    dataAiHint: 'charity website'
  },
  {
    title: 'Fintech Analytics Dashboard',
    client: 'SecureBank',
    category: ['Enterprise Applications', 'Data Visualization'],
    technologies: ['Vue', '.NET', 'PostgreSQL'],
    industry: 'Finance',
    year: '2021',
    featuredImage: 'https://placehold.co/600x400.png',
    description: 'A comprehensive analytics dashboard for fraud detection and financial transaction monitoring.',
    results: '50% faster fraud detection.',
    dataAiHint: 'finance dashboard'
  },
  {
    title: 'Telemedicine Platform',
    client: 'HealthBridge',
    category: ['Web Development', 'Healthcare'],
    technologies: ['React', 'Python', 'AWS'],
    industry: 'Healthcare',
    year: '2024',
    featuredImage: 'https://placehold.co/600x400.png',
    description: 'HIPAA-compliant telemedicine platform connecting patients with doctors remotely.',
    results: 'Served over 10,000 virtual consultations in the first 6 months.',
    dataAiHint: 'telemedicine app'
  },
];

const allIndustries = [...new Set(projects.map(p => p.industry))];
const allTechnologies = [...new Set(projects.flatMap(p => p.technologies))];

export default function PortfolioPage() {
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
    <div className="py-12 md:py-24">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight font-headline sm:text-5xl md:text-6xl">Our Work</h1>
        <p className="mt-4 max-w-2xl text-xl text-muted-foreground">
          Explore our portfolio of successful projects across various industries and technologies.
        </p>
      </div>

      <Card className="p-6 mb-12">
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
            <div className="overflow-hidden">
                <Image
                    src={project.featuredImage}
                    alt={project.title}
                    width={600}
                    height={400}
                    data-ai-hint={project.dataAiHint}
                    className="group-hover:scale-105 transition-transform duration-500 object-cover"
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
  );
}
