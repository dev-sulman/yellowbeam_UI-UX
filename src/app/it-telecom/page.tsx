
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Award, Star, Phone, Mail, MapPin, Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ContactForm } from '@/components/contact-form';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import PricingToggle from '@/components/pricing-toggle';

const services = [
    { title: 'Network Infrastructure', description: 'Design, implementation, and management of robust network infrastructures.' },
    { title: 'Cloud Services', description: 'Scalable cloud solutions, including IaaS, PaaS, and SaaS.' },
    { title: 'Cybersecurity', description: 'Comprehensive security services to protect your digital assets.' },
    { title: 'Unified Communications', description: 'VoIP, video conferencing, and other collaboration tools.' },
];

const teamMembers = [
    {
        name: 'John Doe',
        role: 'CEO, Tech Innovators',
        avatar: 'https://cdn.dribbble.com/users/548346/avatars/small/7b8a65eab045803973443c5bdf60d41d.jpg?1742477133/100x100.png',
        'data-ai-hint': 'professional headshot',
        testimonial: 'SulzaX transformed our IT infrastructure, enabling us to scale our services seamlessly.'
    },
    {
        name: 'Jane Smith',
        role: 'Director of Operations, ConnectAll',
        avatar: 'https://cdn.dribbble.com/users/3010014/avatars/small/ee9bf3ee3447b4ad6fa8f5e4ea79ec27.jpg?1750833183/100x100.png',
        'data-ai-hint': 'professional headshot',
        testimonial: 'Their cybersecurity solutions have been instrumental in protecting our sensitive data.'
    },
];

const whyChooseUsPoints = [
    { title: 'Expert Technicians', description: 'Our team is composed of certified IT and telecom professionals.' },
    { title: 'Innovative Solutions', description: 'We leverage the latest technologies to provide cutting-edge solutions.' },
    { title: 'Reliable Support', description: '24/7 support to ensure your systems are always up and running.' },
]

const values = [
    { title: 'Reliability', description: 'We are committed to providing reliable and resilient IT and telecommunications solutions that our clients can depend on.' },
    { title: 'Innovation', description: 'We continuously explore and implement innovative technologies to keep our clients ahead of the curve.' },
    { title: 'Security', description: 'We prioritize the security of our clients\' data and communications, implementing robust measures to protect against threats.' },
    { title: 'Customer Success', description: 'Your success is our success. We are dedicated to providing solutions and support that help your business thrive.' }
];

const pricingTiers = {
    monthly: [
        {
            name: 'Essential IT',
            price: '$249.00',
            period: '/ per month',
            features: [
                'Managed Network Services',
                'Basic Cybersecurity Suite',
                'Cloud Backup Solutions',
                'Help Desk Support (8x5)',
                'Monthly Health Reports'
            ],
            buttonText: 'Choose Plan',
            popular: false,
        },
        {
            name: 'Advanced IT',
            price: '$599.00',
            period: '/ per month',
            features: [
                'Advanced Network Management',
                'Comprehensive Cybersecurity',
                'Cloud Infrastructure Management',
                '24/7 Help Desk Support',
                'Quarterly Strategy Reviews'
            ],
            buttonText: 'Choose Plan',
            popular: true,
        }
    ],
    yearly: [
        {
            name: 'Essential IT',
            price: '$2689.20',
            period: '/ per year',
            features: [
                'Managed Network Services',
                'Basic Cybersecurity Suite',
                'Cloud Backup Solutions',
                'Help Desk Support (8x5)',
                'Monthly Health Reports'
            ],
            buttonText: 'Choose Plan',
            popular: false,
        },
        {
            name: 'Advanced IT',
            price: '$6469.20',
            period: '/ per year',
            features: [
                'Advanced Network Management',
                'Comprehensive Cybersecurity',
                'Cloud Infrastructure Management',
                '24/7 Help Desk Support',
                'Quarterly Strategy Reviews'
            ],
            buttonText: 'Choose Plan',
            popular: true,
        }
    ]
};

const supportFeatures = [
    "Dedicated Account Manager",
    "Proactive Monitoring",
    "Strategic IT Consulting"
];

export default function ItTelecomPage() {
    return (
        <div className="bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 bg-secondary/30">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-primary">Information Technology & Telecommunications</h1>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">Providing robust IT and telecommunications solutions to keep your business connected and secure.</p>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-20 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary">Connecting Your World, Securely</h2>
                            <div className="flex items-center gap-4">
                                <Image src="https://cdn.dribbble.com/users/24315059/avatars/normal/d82993b8353d9961adb5c4ab048740d9.jpg?1753347901/80x80.png" alt="Mike Ross" width={80} height={80} className="rounded-full" data-ai-hint="professional headshot" />
                                <div>
                                    <p className="font-semibold">Mike Ross, Head of IT & Telecom, SulzaX</p>
                                    <p className="text-muted-foreground">"Building the infrastructure for tomorrow's innovations."</p>
                                </div>
                            </div>
                            <p className="text-muted-foreground">We provide end-to-end IT and telecommunications services, from network infrastructure to cloud solutions and cybersecurity. Let us handle your technology so you can focus on your business.</p>
                            <Button asChild>
                                <Link href="/about">About Us</Link>
                            </Button>
                        </div>
                        <div>
                            <Image src="https://cdn.dribbble.com/userupload/44222219/file/original-892ec14136b3033e2e2554a463499c51.png?resize=1024x790&vertical=center/600x400.png" alt="Data center" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="data center server room" />
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Services Section */}
            <section className="py-20 md:py-24 bg-secondary/30">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Our IT & Telecom Services</h2>
                        <p className="mt-2 text-muted-foreground">Comprehensive solutions to meet your technology needs.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map(service => (
                            <Card key={service.title} className="text-center p-6">
                                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                                <CardDescription>{service.description}</CardDescription>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Us Snippet */}
            <section className="py-20 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <Image src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI5fHx8ZW58MHx8fHx8/600x400.png" alt="Team managing network" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="network management team" />
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary">Your Partner in Technology</h2>
                            <p className="text-muted-foreground">At SulzaX, we are committed to providing state-of-the-art IT and telecommunications solutions that drive business growth and efficiency. We are your trusted partner in the digital age.</p>
                            <div className="flex gap-8">
                                <div>
                                    <p className="text-4xl font-bold text-accent">99.9%</p>
                                    <p className="text-muted-foreground">Network Uptime</p>
                                </div>
                                <div>
                                    <p className="text-4xl font-bold text-accent">100+</p>
                                    <p className="text-muted-foreground">Businesses Served</p>
                                </div>
                            </div>
                            <Button asChild variant="outline">
                                <Link href="/team">Meet our team</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 md:py-24 bg-secondary/30">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary">Why Choose SulzaX?</h2>
                            <p className="text-muted-foreground">We provide reliable, innovative, and secure technology solutions tailored to your business needs.</p>
                            <div className="space-y-4">
                                {whyChooseUsPoints.map(point => (
                                    <div key={point.title} className="flex items-start gap-4">
                                        <CheckCircle className="w-6 h-6 text-accent mt-1" />
                                        <div>
                                            <h3 className="font-semibold text-lg">{point.title}</h3>
                                            <p className="text-muted-foreground">{point.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <Image src="https://plus.unsplash.com/premium_photo-1678565879444-f87c8bd9f241?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdlYiUyMGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D/60&ixlib=rb-4./600x400.png" alt="Cybersecurity shield" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="cybersecurity abstract" />
                        </div>
                    </div>
                </div>
            </section>

             {/* Values Section */}
            <section className="py-20 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Core Values</h2>
                        <p className="mt-2 text-muted-foreground">The principles that guide our work and our commitment to you.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {values.map(value => (
                            <Card key={value.title} className="p-6">
                                <CardTitle className="text-xl mb-2">{value.title}</CardTitle>
                                <CardDescription>{value.description}</CardDescription>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

        

             {/* Testimonials Section */}
            <section className="py-20 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-8">
                        {teamMembers.map((member) => (
                            <Card key={member.name} className="p-6 flex items-start gap-4">
                                <Image src={member.avatar} alt={member.name} width={80} height={80} className="rounded-full" data-ai-hint={member['data-ai-hint']} />
                                <div>
                                    <p className="text-muted-foreground">"{member.testimonial}"</p>
                                    <p className="font-bold mt-4">{member.name}</p>
                                    <p className="text-sm text-muted-foreground">{member.role}</p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-20 md:py-24 bg-secondary/30">
                <div className="container mx-auto px-4 md:px-6">
                    <PricingToggle tiers={pricingTiers} supportFeatures={supportFeatures}>
                        <h2 className="text-4xl md:text-5xl font-bold text-black">Flexible IT & Telecom Plans</h2>
                        <p className="text-black">Choose a plan that fits your business needs. We offer scalable solutions for businesses of all sizes.</p>
                    </PricingToggle>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="flex flex-col space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Free Consultation - Optimize Your Technology</h2>
                                <p className="mt-4 max-w-2xl text-muted-foreground">
                                    Let's discuss how we can help you leverage technology to meet your business goals. Schedule a free consultation with our experts today.
                                </p>
                            </div>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <Mail className="w-6 h-6 text-accent" />
                                    <a href="mailto:contact@sulzax.com" className="text-lg hover:text-accent transition-colors">contact@sulzax.com</a>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Phone className="w-6 h-6 text-accent" />
                                    <a href="tel:+12013740018" className="text-lg hover:text-accent transition-colors">+1 (201) 374-0018</a>
                                </div>
                                <div className="flex items-center gap-4">
                                    <MapPin className="w-6 h-6 text-accent" />
                                    <div>
                                        <p className="text-lg">5 South Forge Lane Cherry Hill, NJ 08002</p>
                                        <a href="#" className="text-sm text-accent hover:underline">Open map</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full max-w-md mx-auto">
                        <ContactForm cardTitle="Schedule A Free Consultation" cardDescription="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

    
