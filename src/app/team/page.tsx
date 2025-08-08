import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Linkedin, Twitter } from "lucide-react";

const teamMembers = [
  {
    name: 'John Doe',
    role: 'CEO & Founder',
    image: 'https://placehold.co/400x400.png',
    dataAiHint: 'professional headshot',
    social: {
      linkedin: '#',
      twitter: '#',
    },
    bio: 'John has over 20 years of experience in the IT industry, leading teams to deliver innovative solutions.'
  },
  {
    name: 'Jane Smith',
    role: 'Chief Technology Officer',
    image: 'https://placehold.co/400x400.png',
    dataAiHint: 'professional headshot',
    social: {
      linkedin: '#',
      twitter: '#',
    },
    bio: 'Jane is a technology visionary with a passion for building scalable and robust software architectures.'
  },
  {
    name: 'Peter Jones',
    role: 'Lead Developer',
    image: 'https://placehold.co/400x400.png',
    dataAiHint: 'professional headshot',
    social: {
      linkedin: '#',
      twitter: '#',
    },
    bio: 'Peter is a full-stack expert with a knack for solving complex problems and mentoring junior developers.'
  },
    {
    name: 'Emily White',
    role: 'Project Manager',
    image: 'https://placehold.co/400x400.png',
    dataAiHint: 'professional headshot',
    social: {
      linkedin: '#',
      twitter: '#',
    },
    bio: 'Emily ensures that all projects are delivered on time and within budget, exceeding client expectations.'
  },
    {
    name: 'Michael Brown',
    role: 'UI/UX Design Lead',
    image: 'https://placehold.co/400x400.png',
    dataAiHint: 'professional headshot',
    social: {
      linkedin: '#',
      twitter: '#',
    },
    bio: 'Michael crafts beautiful and intuitive user experiences that delight users and drive engagement.'
  },
    {
    name: 'Sarah Green',
    role: 'Marketing Director',
    image: 'https://placehold.co/400x400.png',
    dataAiHint: 'professional headshot',
    social: {
      linkedin: '#',
      twitter: '#',
    },
    bio: 'Sarah is a marketing guru who helps connect our brand with businesses in need of digital transformation.'
  },
];

export default function TeamPage() {
  return (
    <div className="py-12 md:py-24">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Meet Our Team</h1>
        <p className="mt-4 max-w-2xl text-xl text-muted-foreground">
          The passionate experts behind our success. We are a group of dedicated professionals committed to excellence.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member) => (
          <Card key={member.name} className="overflow-hidden text-center group hover:shadow-xl transition-shadow duration-300">
            <div className="relative bg-secondary/50">
              <Image
                src={member.image}
                alt={member.name}
                width={400}
                height={400}
                data-ai-hint={member.dataAiHint}
                className="mx-auto"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-accent font-semibold text-sm mb-3">{member.role}</p>
              <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
              <div className="flex justify-center gap-4">
                <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
