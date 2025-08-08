
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Award, Star, Phone, Mail, MapPin, Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ContactForm } from '@/components/contact-form';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';

const services = [
    { title: 'Portfolio Optimization', description: 'Optimizing investment portfolios and assets.' },
    { title: 'Financial Planning', description: 'Building stable financial plans for the future.' },
    { title: 'Insurance Solutions', description: 'Ensuring financial security through suitable insurance.' },
    { title: 'Wealth Management', description: 'Expert guidance to grow and protect your wealth.' },
];

const teamMembers = [
    {
        name: 'Alexander Ball',
        role: 'CEO Digital Avitex',
        avatar: 'https://placehold.co/100x100.png',
        dataAiHint: 'professional headshot',
        testimonial: 'SulzaX exceeded our expectations with their cloud computing solutions. Highly recommended!'
    },
    {
        name: 'Izabel Watt',
        role: 'UI UX Design TechX',
        avatar: 'https://placehold.co/100x100.png',
        dataAiHint: 'professional headshot',
        testimonial: 'As our CTO, Sarah is the visionary leader responsible for shaping our technology strategy.'
    },
    {
        name: 'Tony Adams',
        role: 'Service Dev HiveLab',
        avatar: 'https://placehold.co/100x100.png',
        dataAiHint: 'professional headshot',
        testimonial: 'At the forefront of our software development projects is Michael. His coding prowess and problem-solving skills are unmatched.'
    },
     {
        name: 'Malika Kenny',
        role: 'UI Dev TechOne',
        avatar: 'https://placehold.co/100x100.png',
        dataAiHint: 'professional headshot',
        testimonial: 'David is the friendly face behind our exceptional customer service. With a warm and approachable demeanor, he ensures every client feels valued.'
    },
];

const whyChooseUsPoints = [
    { title: 'Efficient Technical Support', description: 'Quick and effective resolution of technical issues.' },
    { title: 'Enhanced Productivity', description: 'Time saved through prompt guidance.' },
    { title: 'Minimized Incidents', description: 'Consistent support to minimize disruptions.' },
]

const values = [
    { title: 'Customer Centricity', description: 'Our clients are our priority. We listen to their needs, understand their challenges, and work tirelessly to deliver IT solutions that meet and exceed their expectations. Their success is our success.' },
    { title: 'Quality Assurance', description: 'We have a relentless commitment to quality. We set high standards and rigorously test and monitor our IT services to ensure they meet those standards. Quality is non-negotiable.' },
    { title: 'Client Focus', description: 'Our clients are the center of our IT universe. We listen to their needs, provide tailored solutions, and stand by them every step of the way. Their success is our success, excellence, integrity.' },
    { title: 'Integrity Always', description: 'Integrity is the foundation of trust. We operate with complete transparency, ensuring the highest ethical standards in all our IT operations. Our clients rely on us for honesty and fairness.' }
];

const pricingTiers = {
    monthly: [
        {
            name: 'Gold',
            price: '$149.00',
            period: '/ per month',
            features: [
                '60 keywords',
                '6,000 monthly website visitors',
                '8 blogs / month',
                '10 quality backlinks / month',
                'Dedicated expert team',
                'Monitoring & reporting'
            ],
            buttonText: 'Choose Plan',
            popular: false,
            buttonVariant: 'default'
        },
        {
            name: 'Platinum',
            price: '$379.00',
            period: '/ per month',
            features: [
                '150 keywords',
                '20,000 monthly website visitors',
                '15 blogs / month',
                '20 quality backlinks / month',
                'Dedicated expert team',
                'Monitoring & reporting'
            ],
            buttonText: 'Choose Plan',
            popular: true,
            buttonVariant: 'outline'
        }
    ],
    yearly: [
        {
            name: 'Gold',
            price: '$1609.20',
            period: '/ per year',
            features: [
                '60 keywords',
                '6,000 monthly website visitors',
                '8 blogs / month',
                '10 quality backlinks / month',
                'Dedicated expert team',
                'Monitoring & reporting'
            ],
            buttonText: 'Choose Plan',
            popular: false,
            buttonVariant: 'default'
        },
        {
            name: 'Platinum',
            price: '$4093.20',
            period: '/ per year',
            features: [
                '150 keywords',
                '20,000 monthly website visitors',
                '15 blogs / month',
                '20 quality backlinks / month',
                'Dedicated expert team',
                'Monitoring & reporting'
            ],
            buttonText: 'Choose Plan',
            popular: true,
            buttonVariant: 'outline'
        }
    ]
};

const supportFeatures = [
    "24/7 Support",
    "Professional Expertise",
    "Time And Resource Savings"
];

export default function FinanceBankingPage() {
    const [isYearly, setIsYearly] = useState(false);
    const plans = isYearly ? pricingTiers.yearly : pricingTiers.monthly;

    return (
        <div className="bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 bg-secondary/30">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-primary">Finance &amp; Banking</h1>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">Outsourcing IT management and maintenance, including network monitoring, data backup, cybersecurity, and help desk support.</p>
                </div>
            </section>

            {/* History Section */}
            <section className="py-20 md:py-24">
                <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">100 Years Of History Serving The Poconos Region</h2>
                        <div className="flex items-center gap-4">
                            <Image src="https://placehold.co/80x80.png" alt="Tony Nguyen" width={80} height={80} className="rounded-full" data-ai-hint="professional headshot" />
                            <div>
                                <p className="font-semibold">Tony Nguyen, CEO, SulzaX</p>
                                <p className="text-muted-foreground">"Unlock your financial potential today!"</p>
                            </div>
                        </div>
                        <p className="text-muted-foreground">Supported by experienced financial experts, we focus on optimizing investment portfolios and assets, building stable financial plans, and ensuring financial security through suitable insurance.</p>
                        <Button asChild>
                            <Link href="/about">About Us</Link>
                        </Button>
                    </div>
                    <div>
                        <Image src="https://placehold.co/600x400.png" alt="Financial discussion" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="finance meeting" />
                    </div>
                </div>
            </section>
            
            {/* Services Section */}
            <section className="py-20 md:py-24 bg-secondary/30">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Services</h2>
                        <p className="mt-2 text-muted-foreground">Trusted by specialists all around the world</p>
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
                <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                         <Image src="https://placehold.co/600x400.png" alt="Team working" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="team collaboration" />
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Simplify Tech Challenges with Our Responsive Help Desk Team</h2>
                        <p className="text-muted-foreground">Welcome to SulzaX, your trusted companion in the realm of IT services. We take pride in being a dedicated partner, committed to delivering state-of-the-art solutions that propel the future of your business.</p>
                        <div className="flex gap-8">
                            <div>
                                <p className="text-4xl font-bold text-accent">20</p>
                                <p className="text-muted-foreground">Years experience</p>
                            </div>
                            <div>
                                <p className="text-4xl font-bold text-accent">1.8k</p>
                                <p className="text-muted-foreground">Happy customers</p>
                            </div>
                        </div>
                        <Button asChild variant="outline">
                            <Link href="/team">Meet our team</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 md:py-24 bg-secondary/30">
                <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Elevate Productivity with Our Expert Help Desk Services</h2>
                         <p className="text-muted-foreground">Welcome to SulzaX, your trusted companion in the realm of IT services. We are committed to delivering state-of-the-art solutions.</p>
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
                        <Image src="https://placehold.co/600x400.png" alt="Productivity" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="office productivity" />
                    </div>
                </div>
            </section>

             {/* Values Section */}
            <section className="py-20 md:py-24">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Journey Through Time</h2>
                        <p className="mt-2 text-muted-foreground">Discover exceptional experiences through testimonials from our satisfied customers.</p>
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
                <div className="container mx-auto text-center">
                     <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">Outstanding Customer Service Recognition</h2>
                     <div className="flex justify-center items-center flex-wrap gap-8">
                        {[...Array(5)].map((_, i) => (
                             <Image key={i} src="https://placehold.co/120x120.png" alt="Award" width={120} height={120} data-ai-hint="award trophy" />
                        ))}
                     </div>
                </div>
            </section>

             {/* Testimonials Section */}
            <section className="py-20 md:py-24">
                <div className="container mx-auto">
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
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-bold text-primary">Reach Out For Support!</h2>
                            <p className="text-muted-foreground">A comprehensive solution for your technical support needs. With this package, you'll experience dedicated assistance from our professional technical experts.</p>
                            <div className="flex items-center gap-4">
                                <span className={`font-medium ${!isYearly ? 'text-accent' : 'text-muted-foreground'}`}>Pay Monthly</span>
                                <Switch checked={isYearly} onCheckedChange={setIsYearly} aria-label="billing cycle toggle" />
                                <span className={`font-medium ${isYearly ? 'text-accent' : 'text-muted-foreground'}`}>Pay Yearly (Save 10%)</span>
                            </div>
                            <ul className="space-y-3 pt-4">
                                {supportFeatures.map(feature => (
                                    <li key={feature} className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-accent" />
                                        <span className="text-muted-foreground">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-col md:flex-row gap-8">
                             {plans.map(tier => (
                                <Card key={tier.name} className={`w-full flex flex-col relative ${tier.popular ? 'border-accent shadow-accent/20' : 'border-border'}`}>
                                    {tier.popular && <Badge className="absolute -top-3 right-4 bg-accent text-accent-foreground">SAVE 25%</Badge>}
                                    <CardHeader className="text-center">
                                        <CardTitle className="text-2xl text-primary">{tier.name}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-grow space-y-6">
                                        <div className="text-center">
                                            <span className="text-5xl font-bold text-primary">{tier.price.split('.')[0]}.</span>
                                            <span className="text-3xl font-bold text-primary">{tier.price.split('.')[1]}</span>
                                            <span className="text-muted-foreground">{tier.period}</span>
                                        </div>
                                        <ul className="space-y-3">
                                            {tier.features.map(feature => (
                                                <li key={feature} className="flex items-center gap-3">
                                                    <Check className="w-5 h-5 text-accent" />
                                                    <span className="text-muted-foreground">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                    <div className="p-6">
                                        <Button className="w-full" variant={tier.buttonVariant as 'default' | 'outline'}>{tier.buttonText}</Button>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 md:py-24">
                 <div className="container px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="flex flex-col space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Free Consultation - Discover IT Solutions</h2>
                                <p className="mt-4 max-w-2xl text-muted-foreground">
                                    Unlock the full potential of your business with our free consultation. Our expert team will assess your IT needs, recommend tailored solutions, and chart a path to success.
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
