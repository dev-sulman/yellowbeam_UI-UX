import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Linkedin, Twitter } from "lucide-react";

const teamMembers = [
  {
    name: 'John Doe',
    role: 'CEO & Founder',
    image: 'https://picsum.photos/seed/team1/400/400',
    'data-ai-hint': 'professional headshot',
    social: {
      linkedin: '#',
      twitter: '#',
    },
    bio: 'John has over 20 years of experience in the IT industry, leading teams to deliver innovative solutions.'
  },
  {
    name: 'Jane Smith',
    role: 'Chief Technology Officer',
    image: 'https://picsum.photos/seed/team2/400/400',
    'data-ai-hint': 'professional headshot',
    social: {
      linkedin: '#',
      twitter: '#',
    },
    bio: 'Jane is a technology visionary with a passion for building scalable and robust software architectures.'
  },
  {
    name: 'Peter Jones',
    role: 'Lead Developer',
    image: 'https://picsum.photos/seed/team3/400/400',
    'data-ai-hint': 'professional headshot',
    social: {
      linkedin: '#',
      twitter: '#',
    },
    bio: 'Peter is a full-stack expert with a knack for solving complex problems and mentoring junior developers.'
  },
    {
    name: 'Emily White',
    role: 'Project Manager',
    image: 'https://picsum.photos/seed/team4/400/400',
    'data-ai-hint': 'professional headshot',
    social: {
      linkedin: '#',
      twitter: '#',
    },
    bio: 'Emily ensures that all projects are delivered on time and within budget, exceeding client expectations.'
  },
    {
    name: 'Michael Brown',
    role: 'UI/UX Design Lead',
    image: 'https://picsum.photos/seed/team5/400/400',
    'data-ai-hint': 'professional headshot',
    social: {
      linkedin: '#',
      twitter: '#',
    },
    bio: 'Michael crafts beautiful and intuitive user experiences that delight users and drive engagement.'
  },
    {
    name: 'Sarah Green',
    role: 'Marketing Director',
    image: 'https://picsum.photos/seed/team6/400/400',
    'data-ai-hint': 'professional headshot',
    social: {
      linkedin: '#',
      twitter: '#',
    },
    bio: 'Sarah is a marketing guru who helps connect our brand with businesses in need of digital transformation.'
  },
];

export default function TeamPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="w-full py-20 md:py-24 bg-gradient-to-r from-[#0f172a] to-[#334155] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Meet Our Team</h1>
            <p className="mt-4 max-w-2xl text-xl text-gray-300">
              The passionate experts behind our success. We are a group of dedicated professionals committed to excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <Card key={member.name} className="overflow-hidden text-center group hover:shadow-xl transition-shadow duration-300">
                <div className="relative bg-gradient-to-r from-slate-500 to-slate-400">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={400}
                    data-ai-hint={member['data-ai-hint']}
                    className="mx-auto mix-blend-luminosity"
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
      </section>
    </div>
  );
}
