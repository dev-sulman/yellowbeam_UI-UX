'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'USA Best Car Shipping',
    category: 'Website',
    featuredImage: '/usabestcarshipping.jpg',
    description:
      'A dedicated website for auto transport services in the USA, offering professional vehicle shipping...',
    'data-ai-hint': 'logistics website',
  },
  {
    title: 'Reilu Kuljetus Customer App',
    category: 'Mobile Application',
    featuredImage: '/noor.png',
    description:
      'A mobile application for food delivery services in Finland, allowing users to browse menus, place...',
    'data-ai-hint': 'mobile app logistics',
  },
  {
    title: 'Reilu-Kuljetus',
    category: 'Website',
    featuredImage: '/reilu.jpg',
    description:
      'A food delivery website in Finland, providing an easy-to-use platform for customers to order...',
    'data-ai-hint': 'food delivery website',
  },
  {
    title: 'Noor Care NGO Platform',
    category: 'Web Development',
    featuredImage: '/original-189293cabe56b4411fde1a306b8b9d9b.webp',
    description:
      'Secure donation processing system to help the NGO increase online contributions.',
    'data-ai-hint': 'charity website',
  },
];

export default function LatestProjectsSection() {
  return (
    <section id="latest-projects" className="w-full bg-white relative">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 lg:py-32">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-semibold">
              EACH PROJECT IS A NEW CHALLENGE
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground">
              Latest Projects
            </h2>
          </div>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
            Case studies that showcase the agency's approach, process, and
            results for specific clients.
          </p>
        </div>
        <div className="mt-12">
          <Carousel opts={{ align: 'start', loop: true }}>
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full overflow-hidden group bg-card border-border">
                    <Image
                      src={project.featuredImage}
                      alt={project.title}
                      width={600}
                      height={400}
                      data-ai-hint={project['data-ai-hint']}
                      className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <CardContent className="p-6">
                      <Badge variant="secondary" className="mb-2">
                        {project.category}
                      </Badge>
                      <h3 className="text-xl font-bold mb-2 text-foreground">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {project.description}
                      </p>
                      <Link
                        href="/portfolio"
                        className="text-sm font-semibold text-accent hover:underline"
                        aria-label={`View project: ${project.title}`}
                      >
                        View Project{' '}
                        <ArrowRight className="inline-block ml-1 h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-[-1rem] md:left-[-2rem]" />
            <CarouselNext className="right-[-1rem] md:right-[-2rem]" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
