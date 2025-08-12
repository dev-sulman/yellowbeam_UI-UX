
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
    { title: 'Property Management Software', description: 'Comprehensive software for managing properties, tenants, and finances.' },
    { title: 'Real Estate CRM', description: 'CRM solutions tailored for real estate agents and brokers to manage leads and clients.' },
    { title: 'Virtual Tour Technology', description: 'Immersive 3D and virtual reality tours for property listings.' },
    { title: 'Real Estate Analytics', description: 'Data analytics platforms to identify market trends and investment opportunities.' },
];

const teamMembers = [
    {
        name: 'Susan Williams',
        role: 'Broker/Owner, Prestige Properties',
        avatar: 'https://placehold.co/100x100.png',
        dataAiHint: 'professional headshot',
        testimonial: 'SulzaX built a property management system that has saved us countless hours and improved our tenant satisfaction.'
    },
    {
        name: 'Tom Wilson',
        role: 'Lead Agent, The Realty Group',
        avatar: 'https://placehold.co/100x100.png',
        dataAiHint: 'professional headshot',
        testimonial: 'Their real estate CRM is a must-have for any serious agent. It has transformed the way I manage my business.'
    },
];

const whyChooseUsPoints = [
    { title: 'Industry-Specific Solutions', description: 'We build technology solutions specifically for the real estate market.' },
    { title: 'User-Friendly Interfaces', description: 'Our software is designed to be intuitive and easy to use for agents and clients.' },
    { title: 'Scalable Platforms', description: 'Our solutions are built to scale with your real estate business as it grows.' },
]

const values = [
    { title: 'Agent Empowerment', description: 'We are committed to building tools that empower real estate agents to be more productive and successful.' },
    { title: 'Client Experience', description: 'We focus on creating technology that enhances the client experience, from property search to closing.' },
    { title: 'Data-Driven Insights', description: 'We leverage data to provide valuable insights that help our clients make smarter real estate decisions.' },
    { title: 'Innovation', description: 'We are constantly innovating to bring the latest technology, like VR and AI, to the real estate industry.' }
];

const pricingTiers = {
    monthly: [
        {
            name: 'Agent Pro',
            price: '$99.00',
            period: '/ per month',
            features: [
                'Real Estate CRM',
                'Lead Management',
                'Basic Website',
                'Email Marketing',
                'Standard Support'
            ],
            buttonText: 'Choose Plan',
            popular: false,
        },
        {
            name: 'Brokerage Suite',
            price: '$499.00',
            period: '/ per month',
            features: [
                'Advanced CRM for Teams',
                'Property Management System',
                'Virtual Tour Integration',
                'Advanced Analytics',
                'Priority Support'
            ],
            buttonText: 'Choose Plan',
            popular: true,
        }
    ],
    yearly: [
        {
            name: 'Agent Pro',
            price: '$1069.20',
            period: '/ per year',
            features: [
                'Real Estate CRM',
                'Lead Management',
                'Basic Website',
                'Email Marketing',
                'Standard Support'
            ],
            buttonText: 'Choose Plan',
            popular: false,
        },
        {
            name: 'Brokerage Suite',
            price: '$5389.20',
            period: '/ per year',
            features: [
                'Advanced CRM for Teams',
                'Property Management System',
                'Virtual Tour Integration',
                'Advanced Analytics',
                'Priority Support'
            ],
            buttonText: 'Choose Plan',
            popular: true,
        }
    ]
};

const supportFeatures = [
    "Dedicated Real Estate Tech Consultant",
    "24/7 Agent & Broker Support",
    "Data Migration Assistance"
];

export default function RealEstatePage() {
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
                    <h1 className="text-4xl md:text-6xl font-bold text-primary">Real Estate</h1>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">Empowering real estate professionals with cutting-edge technology, from property management software to virtual tour solutions.</p>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-20 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary">The Future of Real Estate is Digital</h2>
                            <div className="flex items-center gap-4">
                                <Image src="https://placehold.co/80x80.png" alt="Laura Garcia" width={80} height={80} className="rounded-full" data-ai-hint="professional headshot" />
                                <div>
                                    <p className="font-semibold">Laura Garcia, Head of Real Estate Tech, SulzaX</p>
                                    <p className="text-muted-foreground">"Transforming properties into digital experiences."</p>
                                </div>
                            </div>
                            <p className="text-muted-foreground">We provide innovative IT solutions for the real estate industry, helping agents, brokers, and property managers streamline their operations, engage clients, and close more deals.</p>
                            <Button asChild>
                                <Link href="/about">About Us</Link>
                            </Button>
                        </div>
                        <div>
                            <Image src="https://placehold.co/600x400.png" alt="Modern house with a 'For Sale' sign" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="house for sale" />
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Services Section */}
            <section className="py-20 md:py-24 bg-secondary/30">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Real Estate Technology Services</h2>
                        <p className="mt-2 text-muted-foreground">Solutions to modernize your real estate business.</p>
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
                            <Image src="https://placehold.co/600x400.png" alt="Real estate agent showing a house" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="real estate agent" />
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary">Your Partner in PropTech</h2>
                            <p className="text-muted-foreground">At SulzaX, we are passionate about the intersection of real estate and technology. We build tools that make the process of buying, selling, and managing properties easier and more efficient for everyone.</p>
                            <div className="flex gap-8">
                                <div>
                                    <p className="text-4xl font-bold text-accent">1,000+</p>
                                    <p className="text-muted-foreground">Agents Empowered</p>
                                </div>
                                <div>
                                    <p className="text-4xl font-bold text-accent">$1B+</p>
                                    <p className="text-muted-foreground">In Transactions Supported</p>
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
                            <h2 className="text-3xl md:text-4xl font-bold text-primary">Why SulzaX for Real Estate Tech?</h2>
                            <p className="text-muted-foreground">We provide user-friendly, scalable solutions designed with a deep understanding of the real estate market.</p>
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
                            <Image src="https://placehold.co/600x400.png" alt="Virtual tour of a property on a tablet" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="virtual tour tablet" />
                        </div>
                    </div>
                </div>
            </section>

             {/* Values Section */}
            <section className="py-20 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Core Values</h2>
                        <p className="mt-2 text-muted-foreground">The principles that guide our real estate technology solutions.</p>
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
                     <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">Award-Winning PropTech Solutions</h2>
                     <div className="flex justify-center items-center flex-wrap gap-8">
                        {[...Array(4)].map((_, i) => (
                             <Image key={i} src="https://placehold.co/120x120.png" alt="Award for real estate tech" width={120} height={120} data-ai-hint="award trophy" />
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
                            <h2 className="text-4xl md:text-5xl font-bold text-black">Real Estate Technology Plans</h2>
                            <p className="text-black">Choose a plan that fits your agency's needs. We offer scalable solutions for individual agents and large brokerages.</p>
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
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Free Consultation - Discover Real Estate Tech</h2>
                                <p className="mt-4 max-w-2xl text-muted-foreground">
                                    Let's discuss how our technology can help you sell more properties and manage your business more efficiently.
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
