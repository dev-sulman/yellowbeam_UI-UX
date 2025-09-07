
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const teamMembers = [
  {
    name: 'Sulman',
    role: 'CEO & Founder',
    image: '/sulmansmallimage.jpeg',
    'data-ai-hint': 'professional headshot',
  },
  {
    name: 'Sehar',
    role: 'Chief Technology Officer',
    image: '/seharsmallimage.jpg',
    'data-ai-hint': 'professional headshot',
  },
  {
    name: 'Leeia',
    role: 'Lead Developer',
    image: '/three.jpg',
    'data-ai-hint': 'professional headshot',
  },
];

const values = [
    { title: 'Customer Centricity', description: 'Our clients are our priority. We listen to their needs, understand their challenges, and work tirelessly to deliver IT solutions that meet and exceed their expectations. Their success is our success.' },
    { title: 'Quality Assurance', description: 'We have a relentless commitment to quality. We set high standards and rigorously test and monitor our IT services to ensure they meet those standards. Quality is non-negotiable.' },
    { title: 'Integrity Always', description: 'Integrity is the foundation of trust. We operate with complete transparency, ensuring the highest ethical standards in all our IT operations. Our clients rely on us for honesty and fairness.' },
    { title: 'Innovation', description: 'We continuously explore and implement innovative technologies to keep our clients ahead of the curve and provide cutting-edge solutions that drive business growth.'},
];

export default function AboutUsPage() {
    return (
        <div className="bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative w-full py-20 md:py-32 bg-secondary/30">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-primary">About SulzaX</h1>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">We are a passionate team of innovators and problem-solvers dedicated to delivering top-tier IT solutions that empower businesses to thrive in the digital age.</p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="w-full py-20 md:py-24">
                <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Mission & Vision</h2>
                        <p className="text-muted-foreground text-lg">Our mission is to be the leading provider of innovative IT solutions, helping businesses of all sizes to leverage technology for growth, efficiency, and success. We envision a world where technology is a seamless and powerful enabler for every organization.</p>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <CheckCircle className="w-8 h-8 text-accent mt-1" />
                                <div>
                                    <h3 className="font-semibold text-lg">Client Success</h3>
                                    <p className="text-muted-foreground">We are committed to the success of our clients, providing tailored solutions and unwavering support.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <CheckCircle className="w-8 h-8 text-accent mt-1" />
                                <div>
                                    <h3 className="font-semibold text-lg">Technological Excellence</h3>
                                    <p className="text-muted-foreground">We pursue excellence in everything we do, from software development to customer service.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Image src="/noor.png" alt="Team working collaboratively" width={600} height={450} className="rounded-lg shadow-lg" data-ai-hint="teamwork collaboration office" />
                    </div>
                </div>
            </section>

             {/* Values Section */}
            <section className="w-full py-20 md:py-24 bg-secondary/30">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Core Values</h2>
                        <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">The principles that guide our work, our relationships, and our commitment to excellence.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map(value => (
                            <Card key={value.title} className="p-6 text-center">
                                <CardTitle className="text-xl mb-2">{value.title}</CardTitle>
                                <CardDescription>{value.description}</CardDescription>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section Snippet */}
            <section className="w-full py-20 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Meet Our Leadership</h2>
                        <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">A glimpse of the brilliant minds leading SulzaX forward. Our full team is a powerhouse of talent and dedication.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {teamMembers.map(member => (
                            <Card key={member.name} className="text-center p-6 border-0 shadow-none">
                                <Image src={member.image} alt={member.name} width={150} height={150} data-ai-hint={member['data-ai-hint']} className="rounded-full mx-auto mb-4" />
                                <h3 className="font-bold text-lg">{member.name}</h3>
                                <p className="text-accent">{member.role}</p>
                            </Card>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Button asChild size="lg">
                            <Link href="/team">View Our Entire Team</Link>
                        </Button>
                    </div>
                </div>
            </section>

             {/* CTA Section */}
            <section className="w-full py-20 md:py-24 bg-secondary/30">
                <div className="container mx-auto px-4 md:px-6 text-center">
                     <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Ready to Start Your Project?</h2>
                     <p className="text-muted-foreground max-w-2xl mx-auto mb-8">Let's build something amazing together. Contact us today for a free consultation and let's discuss how we can help you achieve your business goals.</p>
                     <Button asChild size="lg">
                        <Link href="/contact">Get in Touch</Link>
                    </Button>
                </div>
            </section>
        </div>
    )
}
