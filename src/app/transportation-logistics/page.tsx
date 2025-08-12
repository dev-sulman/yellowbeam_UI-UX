
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Award, Star, Phone, Mail, MapPin, Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ContactForm } from '@/components/contact-form';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const services = [
    { title: 'Fleet Management Systems', description: 'Custom software for tracking, managing, and optimizing your vehicle fleet.' },
    { title: 'Supply Chain Solutions', description: 'End-to-end software for managing your supply chain, from procurement to delivery.' },
    { title: 'Logistics Planning & Optimization', description: 'AI-powered tools for route planning, load optimization, and real-time tracking.' },
    { title: 'Warehouse Management', description: 'Systems for inventory management, order fulfillment, and warehouse automation.' },
];

const teamMembers = [
    {
        name: 'Michael Johnson',
        role: 'Logistics Director, ShipFast',
        avatar: 'https://placehold.co/100x100.png',
        dataAiHint: 'professional headshot',
        testimonial: 'SulzaX developed a fleet management system that has revolutionized our operations.'
    },
    {
        name: 'Sarah Lee',
        role: 'Supply Chain Manager, Global Goods',
        avatar: 'https://placehold.co/100x100.png',
        dataAiHint: 'professional headshot',
        testimonial: 'Their supply chain software has given us unprecedented visibility and control.'
    },
];

const whyChooseUsPoints = [
    { title: 'Industry Expertise', description: 'Deep understanding of the challenges and opportunities in the logistics sector.' },
    { title: 'Scalable Solutions', description: 'We build systems that can grow and adapt with your business.' },
    { title: 'Real-Time Data', description: 'Our solutions provide real-time data and analytics for informed decision-making.' },
]

const values = [
    { title: 'Efficiency', description: 'We are focused on creating solutions that streamline operations, reduce costs, and improve efficiency.' },
    { title: 'Visibility', description: 'We believe in providing complete visibility across the supply chain to enable better planning and execution.' },
    { title: 'Reliability', description: 'We build robust and reliable systems that our clients can depend on for their critical operations.' },
    { title: 'Partnership', description: 'We work as a strategic partner to help our clients navigate the complexities of logistics and transportation.' }
];

const pricingTiers = {
    monthly: [
        {
            name: 'Logistics Starter',
            price: '$399.00',
            period: '/ per month',
            features: [
                'Basic Fleet Tracking',
                'Simple Inventory Management',
                'Standard Reporting',
                'Email Support'
            ],
            buttonText: 'Choose Plan',
            popular: false,
        },
        {
            name: 'Supply Chain Pro',
            price: '$999.00',
            period: '/ per month',
            features: [
                'Advanced Fleet Management',
                'Full Warehouse Management System',
                'AI-Powered Route Optimization',
                'Priority Support'
            ],
            buttonText: 'Choose Plan',
            popular: true,
        }
    ],
    yearly: [
        {
            name: 'Logistics Starter',
            price: '$4309.20',
            period: '/ per year',
            features: [
                'Basic Fleet Tracking',
                'Simple Inventory Management',
                'Standard Reporting',
                'Email Support'
            ],
            buttonText: 'Choose Plan',
            popular: false,
        },
        {
            name: 'Supply Chain Pro',
            price: '$10789.20',
            period: '/ per year',
            features: [
                'Advanced Fleet Management',
                'Full Warehouse Management System',
                'AI-Powered Route Optimization',
                'Priority Support'
            ],
            buttonText: 'Choose Plan',
            popular: true,
        }
    ]
};

const supportFeatures = [
    "Dedicated Logistics Tech Expert",
    "24/7 Operations Support",
    "Integration with Existing Systems"
];

export default function LogisticsPage() {
    const [isYearly, setIsYearly] = useState(false);
    const plans = isYearly ? pricingTiers.yearly : pricingTiers.monthly;
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) {
        return null;
    }

    return (
        <div className="bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 bg-secondary/30">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-primary">Transportation & Logistics</h1>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">Driving efficiency and visibility in your supply chain with our advanced logistics and transportation IT solutions.</p>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-20 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary">Optimizing Your Supply Chain</h2>
                            <div className="flex items-center gap-4">
                                <Image src="https://placehold.co/80x80.png" alt="Robert Brown" width={80} height={80} className="rounded-full" data-ai-hint="professional headshot" />
                                <div>
                                    <p className="font-semibold">Robert Brown, Head of Logistics Tech, SulzaX</p>
                                    <p className="text-muted-foreground">"Delivering the future of logistics, today."</p>
                                </div>
                            </div>
                            <p className="text-muted-foreground">We provide comprehensive IT solutions for the transportation and logistics industry, from fleet management to supply chain optimization. Let us help you move your business forward.</p>
                            <Button asChild>
                                <Link href="/about">About Us</Link>
                            </Button>
                        </div>
                        <div>
                            <Image src="https://placehold.co/600x400.png" alt="Cargo ship and trucks" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="logistics transport" />
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Services Section */}
            <section className="py-20 md:py-24 bg-secondary/30">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Logistics & Transportation Services</h2>
                        <p className="mt-2 text-muted-foreground">End-to-end solutions for a smarter supply chain.</p>
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
                            <Image src="https://placehold.co/600x400.png" alt="Warehouse with workers" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="warehouse logistics" />
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary">Your Partner in Logistics Innovation</h2>
                            <p className="text-muted-foreground">At SulzaX, we are passionate about solving the complex challenges of the logistics industry. We build technology that delivers efficiency, visibility, and a competitive edge.</p>
                            <div className="flex gap-8">
                                <div>
                                    <p className="text-4xl font-bold text-accent">30%</p>
                                    <p className="text-muted-foreground">Average Reduction in Fuel Costs</p>
                                </div>
                                <div>
                                    <p className="text-4xl font-bold text-accent">50+</p>
                                    <p className="text-muted-foreground">Logistics Companies Served</p>
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
                            <h2 className="text-3xl md:text-4xl font-bold text-primary">Why SulzaX for Logistics Tech?</h2>
                            <p className="text-muted-foreground">We provide scalable, data-driven solutions with a deep understanding of the logistics industry.</p>
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
                            <Image src="https://placehold.co/600x400.png" alt="Analytics dashboard for logistics" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="logistics dashboard" />
                        </div>
                    </div>
                </div>
            </section>

             {/* Values Section */}
            <section className="py-20 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Core Values</h2>
                        <p className="mt-2 text-muted-foreground">The principles that drive our logistics technology solutions.</p>
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
                     <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">Award-Winning Logistics Solutions</h2>
                     <div className="flex justify-center items-center flex-wrap gap-8">
                        {[...Array(3)].map((_, i) => (
                             <Image key={i} src="https://placehold.co/120x120.png" alt="Award for logistics" width={120} height={120} data-ai-hint="award trophy" />
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
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-bold text-black">Logistics Solution Plans</h2>
                            <p className="text-black">Choose a plan that fits your logistics and supply chain needs. We offer scalable solutions for businesses of all sizes.</p>
                            <div className="flex items-center gap-4">
                                <span className={cn('font-medium', !isYearly ? 'text-[#2D4FE1]' : 'text-black')}>Pay Monthly</span>
                                <Switch checked={isYearly} onCheckedChange={setIsYearly} aria-label="billing cycle toggle" />
                                <span className={cn('font-medium', isYearly ? 'text-[#2D4FE1]' : 'text-black')}>Pay Yearly (Save 10%)</span>
                            </div>
                            <ul className="space-y-3 pt-4">
                                {supportFeatures.map(feature => (
                                    <li key={feature} className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-[#2D4FE1]" />
                                        <span className="text-black">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-col md:flex-row gap-8">
                             {plans.map(tier => (
                                <Card key={tier.name} className={`w-full flex flex-col relative shadow-none border-0 ${tier.popular ? 'bg-card' : 'bg-transparent'}`}>
                                    {tier.popular && <Badge className="absolute -top-3 right-4 bg-accent text-accent-foreground">POPULAR</Badge>}
                                    <CardHeader className="text-center">
                                        <CardTitle className="text-2xl text-black">{tier.name}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-grow space-y-6">
                                        <div className="text-center">
                                            <span className={cn('text-5xl font-bold', tier.popular ? 'text-black' : 'text-[#2D4FE1]')}>{tier.price.split('.')[0]}.</span>
                                            <span className={cn('text-3xl font-bold', tier.popular ? 'text-black' : 'text-[#2D4FE1]')}>{tier.price.split('.')[1]}</span>
                                            <span className="text-black">{tier.period}</span>
                                        </div>
                                        <ul className="space-y-3">
                                            {tier.features.map(feature => (
                                                <li key={feature} className="flex items-center gap-3">
                                                    <Check className="w-5 h-5 text-[#2D4FE1]" />
                                                    <span className="text-black">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                    <div className="p-6">
                                      {tier.popular ? (
                                         <Button className="w-full bg-transparent border border-black text-black hover:bg-[#2D4FE1] hover:text-white hover:border-transparent">{tier.buttonText}</Button>
                                      ) : (
                                          <Button className="w-full bg-[#2D4FE1] hover:bg-[#2139a6] text-white">{tier.buttonText}</Button>
                                      )}
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="flex flex-col space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Free Consultation - Optimize Your Supply Chain</h2>
                                <p className="mt-4 max-w-2xl text-muted-foreground">
                                    Let's discuss how our technology can improve your logistics and transportation operations. Schedule a free consultation with our experts.
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
