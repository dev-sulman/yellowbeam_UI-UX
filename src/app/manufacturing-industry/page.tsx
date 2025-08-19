
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
    { title: 'IoT & Smart Factory Solutions', description: 'Implementing IoT devices and sensors to monitor and control manufacturing processes.' },
    { title: 'ERP Systems for Manufacturing', description: 'Custom ERP solutions for managing production, inventory, and supply chain.' },
    { title: 'Robotics & Automation', description: 'Integrating robotics and automation to improve efficiency and reduce costs.' },
    { title: 'Predictive Maintenance', description: 'Using AI and machine learning to predict equipment failure and schedule maintenance.' },
];

const teamMembers = [
    {
        name: 'David Rodriguez',
        role: 'Plant Manager, Precision Parts Inc.',
        avatar: 'https://placehold.co/100x100.png',
        dataAiHint: 'professional headshot',
        testimonial: 'SulzaX\'s smart factory solutions have increased our production efficiency by 40%.'
    },
    {
        name: 'Jessica Chen',
        role: 'Operations Director, BuildRight',
        avatar: 'https://placehold.co/100x100.png',
        dataAiHint: 'professional headshot',
        testimonial: 'Their predictive maintenance system has saved us from costly downtime and repairs.'
    },
];

const whyChooseUsPoints = [
    { title: 'Deep Industry Knowledge', description: 'We understand the unique challenges of the manufacturing sector.' },
    { title: 'Focus on ROI', description: 'Our solutions are designed to deliver a clear and measurable return on investment.' },
    { title: 'Cutting-Edge Technology', description: 'We leverage the latest in IoT, AI, and robotics to deliver a competitive advantage.' },
]

const values = [
    { title: 'Efficiency & Productivity', description: 'Our primary goal is to help our clients improve their manufacturing efficiency and productivity.' },
    { title: 'Quality & Precision', description: 'We are committed to delivering high-quality solutions that support precision manufacturing.' },
    { title: 'Safety & Security', description: 'We prioritize the safety of workers and the security of data in all our solutions.' },
    { title: 'Innovation', description: 'We are dedicated to bringing the latest technological innovations to the factory floor.' }
];

const pricingTiers = {
    monthly: [
        {
            name: 'Smart Factory Starter',
            price: '$799.00',
            period: '/ per month',
            features: [
                'Basic IoT Monitoring',
                'Production Dashboard',
                'Standard Reporting',
                'Email Support'
            ],
            buttonText: 'Choose Plan',
            popular: false,
        },
        {
            name: 'Industry 4.0 Pro',
            price: '$2499.00',
            period: '/ per month',
            features: [
                'Advanced IoT & Automation',
                'Custom Manufacturing ERP',
                'Predictive Maintenance',
                'Priority Support'
            ],
            buttonText: 'Choose Plan',
            popular: true,
        }
    ],
    yearly: [
        {
            name: 'Smart Factory Starter',
            price: '$8629.20',
            period: '/ per year',
            features: [
                'Basic IoT Monitoring',
                'Production Dashboard',
                'Standard Reporting',
                'Email Support'
            ],
            buttonText: 'Choose Plan',
            popular: false,
        },
        {
            name: 'Industry 4.0 Pro',
            price: '$26989.20',
            period: '/ per year',
            features: [
                'Advanced IoT & Automation',
                'Custom Manufacturing ERP',
                'Predictive Maintenance',
                'Priority Support'
            ],
            buttonText: 'Choose Plan',
            popular: true,
        }
    ]
};

const supportFeatures = [
    "Dedicated Manufacturing Tech Specialist",
    "24/7 Production Support",
    "On-site Implementation & Training"
];

export default function ManufacturingPage() {
    return (
        <div className="bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 bg-secondary/30">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-primary">Manufacturing & Industry 4.0</h1>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">Bringing the digital revolution to the factory floor with smart manufacturing and Industry 4.0 solutions.</p>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-20 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary">Building the Factory of the Future</h2>
                            <div className="flex items-center gap-4">
                                <Image src="https://placehold.co/80x80.png" alt="Kevin Anderson" width={80} height={80} className="rounded-full" data-ai-hint="professional headshot" />
                                <div>
                                    <p className="font-semibold">Kevin Anderson, Head of Industry 4.0, SulzaX</p>
                                    <p className="text-muted-foreground">"Automation and data are the keys to competitive manufacturing."</p>
                                </div>
                            </div>
                            <p className="text-muted-foreground">We provide advanced technology solutions for the manufacturing sector, including IoT, robotics, and AI, to help you build a smarter, more efficient, and more competitive operation.</p>
                            <Button asChild>
                                <Link href="/about">About Us</Link>
                            </Button>
                        </div>
                        <div>
                            <Image src="https://placehold.co/600x400.png" alt="Automated factory with robots" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="smart factory robotics" />
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Services Section */}
            <section className="py-20 md:py-24 bg-secondary/30">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Manufacturing & Industry 4.0 Services</h2>
                        <p className="mt-2 text-muted-foreground">Solutions to digitize and optimize your manufacturing processes.</p>
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
                            <Image src="https://placehold.co/600x400.png" alt="Engineer working with a robotic arm" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="engineer robotic arm" />
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary">Your Partner in Smart Manufacturing</h2>
                            <p className="text-muted-foreground">At SulzaX, we are passionate about helping manufacturers embrace the future. We combine our technical expertise with a deep understanding of the industry to deliver solutions that drive real results.</p>
                            <div className="flex gap-8">
                                <div>
                                    <p className="text-4xl font-bold text-accent">25%</p>
                                    <p className="text-muted-foreground">Average Increase in OEE</p>
                                </div>
                                <div>
                                    <p className="text-4xl font-bold text-accent">50+</p>
                                    <p className="text-muted-foreground">Factories Modernized</p>
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
                            <h2 className="text-3xl md:text-4xl font-bold text-primary">Why SulzaX for Smart Manufacturing?</h2>
                            <p className="text-muted-foreground">We deliver ROI-focused solutions using cutting-edge technology and deep industry expertise.</p>
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
                            <Image src="https://placehold.co/600x400.png" alt="Data visualization of factory output" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="factory data charts" />
                        </div>
                    </div>
                </div>
            </section>

             {/* Values Section */}
            <section className="py-20 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Core Values</h2>
                        <p className="mt-2 text-muted-foreground">The principles that guide our approach to Industry 4.0.</p>
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

             {/* Awards Section */}
            <section className="py-20 md:py-24 bg-secondary/30">
                <div className="container mx-auto px-4 md:px-6 text-center">
                     <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">Award-Winning Smart Factory Solutions</h2>
                     <div className="flex justify-center items-center flex-wrap gap-8">
                        {[...Array(3)].map((_, i) => (
                             <Image key={i} src="https://placehold.co/120x120.png" alt="Award for manufacturing tech" width={120} height={120} data-ai-hint="award trophy" />
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
                                <Image src={member.avatar} alt={member.name} width={80} height={80} className="rounded-full" data-ai-hint={member.dataAiHint} />
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
                        <h2 className="text-4xl md:text-5xl font-bold text-black">Industry 4.0 Solution Plans</h2>
                        <p className="text-black">Choose a plan that fits your manufacturing needs. We offer scalable solutions to bring your factory into the digital age.</p>
                    </PricingToggle>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="flex flex-col space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Free Consultation - Build Your Smart Factory</h2>
                                <p className="mt-4 max-w-2xl text-muted-foreground">
                                    Let's discuss how our Industry 4.0 solutions can transform your manufacturing operations. Schedule a free consultation with our experts.
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

    