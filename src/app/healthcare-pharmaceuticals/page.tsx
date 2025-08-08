
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
    { title: 'EHR/EMR Systems', description: 'Development and integration of Electronic Health/Medical Record systems.' },
    { title: 'Telemedicine Platforms', description: 'Secure and HIPAA-compliant platforms for remote patient care.' },
    { title: 'Pharmaceutical Software', description: 'Custom software for drug discovery, clinical trials, and supply chain management.' },
    { title: 'Healthcare Analytics', description: 'Data analytics solutions to improve patient outcomes and operational efficiency.' },
];

const teamMembers = [
    {
        name: 'Dr. Emily Carter',
        role: 'Chief Medical Officer, HealthForward',
        avatar: 'https://placehold.co/100x100.png',
        dataAiHint: 'professional headshot',
        testimonial: 'SulzaX developed a telemedicine platform that has been a game-changer for our practice.'
    },
    {
        name: 'David Chen',
        role: 'Director of Pharmacy, WellRx',
        avatar: 'https://placehold.co/100x100.png',
        dataAiHint: 'professional headshot',
        testimonial: 'Their custom software has streamlined our inventory management and improved our efficiency.'
    },
];

const whyChooseUsPoints = [
    { title: 'Industry Compliance', description: 'Expertise in HIPAA, FDA, and other healthcare regulations.' },
    { title: 'Patient-Centric Design', description: 'We design solutions with the patient experience in mind.' },
    { title: 'Data Security', description: 'Robust security measures to protect sensitive patient data.' },
]

const values = [
    { title: 'Patient Privacy', description: 'We are committed to protecting patient privacy and ensuring compliance with all healthcare regulations.' },
    { title: 'Innovation in Care', description: 'We leverage technology to create innovative solutions that improve patient care and outcomes.' },
    { title: 'Reliability', description: 'We build reliable and robust systems that healthcare professionals can depend on.' },
    { title: 'Collaboration', description: 'We work in close partnership with healthcare providers to understand their needs and deliver effective solutions.' }
];

const pricingTiers = {
    monthly: [
        {
            name: 'Practice Essentials',
            price: '$499.00',
            period: '/ per month',
            features: [
                'HIPAA-Compliant Hosting',
                'Basic EMR Integration',
                'Telemedicine (up to 10 users)',
                'Technical Support (8x5)',
                'Monthly Security Scans'
            ],
            buttonText: 'Choose Plan',
            popular: false,
        },
        {
            name: 'Clinical Suite',
            price: '$1299.00',
            period: '/ per month',
            features: [
                'Advanced EMR/EHR System',
                'Full Telemedicine Platform',
                'Healthcare Analytics Dashboard',
                '24/7 Technical Support',
                'Quarterly Compliance Audits'
            ],
            buttonText: 'Choose Plan',
            popular: true,
        }
    ],
    yearly: [
        {
            name: 'Practice Essentials',
            price: '$5389.20',
            period: '/ per year',
            features: [
                'HIPAA-Compliant Hosting',
                'Basic EMR Integration',
                'Telemedicine (up to 10 users)',
                'Technical Support (8x5)',
                'Monthly Security Scans'
            ],
            buttonText: 'Choose Plan',
            popular: false,
        },
        {
            name: 'Clinical Suite',
            price: '$14029.20',
            period: '/ per year',
            features: [
                'Advanced EMR/EHR System',
                'Full Telemedicine Platform',
                'Healthcare Analytics Dashboard',
                '24/7 Technical Support',
                'Quarterly Compliance Audits'
            ],
            buttonText: 'Choose Plan',
            popular: true,
        }
    ]
};

const supportFeatures = [
    "Dedicated Healthcare IT Specialist",
    "24/7 Priority Support",
    "Regular System Updates"
];

export default function HealthcarePage() {
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
                <div className="container text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-primary">Healthcare & Pharmaceuticals</h1>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">Providing specialized IT solutions for the healthcare and pharmaceutical industries, ensuring compliance, security, and innovation.</p>
                </div>
            </section>

            {/* Intro Section */}
            <section className="container py-20 md:py-24">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Innovating for Better Health Outcomes</h2>
                        <div className="flex items-center gap-4">
                            <Image src="https://placehold.co/80x80.png" alt="Dr. Sarah Johnson" width={80} height={80} className="rounded-full" data-ai-hint="professional headshot doctor" />
                            <div>
                                <p className="font-semibold">Dr. Sarah Johnson, Chief Innovation Officer, SulzaX Health</p>
                                <p className="text-muted-foreground">"Technology has the power to transform healthcare."</p>
                            </div>
                        </div>
                        <p className="text-muted-foreground">We are dedicated to developing cutting-edge IT solutions for the healthcare and pharmaceutical sectors. From telemedicine platforms to EMR systems, we build technology that improves lives.</p>
                        <Button asChild>
                            <Link href="/about">About Us</Link>
                        </Button>
                    </div>
                    <div>
                        <Image src="https://placehold.co/600x400.png" alt="Doctor using a tablet" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="doctor tablet healthcare" />
                    </div>
                </div>
            </section>
            
            {/* Services Section */}
            <section className="py-20 md:py-24 bg-secondary/30">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Healthcare & Pharma Services</h2>
                        <p className="mt-2 text-muted-foreground">Compliant and innovative solutions for the health sector.</p>
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
            <section className="container py-20 md:py-24">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                         <Image src="https://placehold.co/600x400.png" alt="Scientist in a lab" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="pharmaceutical lab scientist" />
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Your Partner in HealthTech</h2>
                        <p className="text-muted-foreground">At SulzaX, we combine deep industry knowledge with technical expertise to deliver solutions that meet the unique challenges of the healthcare and pharmaceutical industries.</p>
                        <div className="flex gap-8">
                            <div>
                                <p className="text-4xl font-bold text-accent">100%</p>
                                <p className="text-muted-foreground">HIPAA Compliance</p>
                            </div>
                            <div>
                                <p className="text-4xl font-bold text-accent">50+</p>
                                <p className="text-muted-foreground">Health Systems Deployed</p>
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
                <div className="container grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Why Choose SulzaX for HealthTech?</h2>
                         <p className="text-muted-foreground">We provide secure, compliant, and innovative technology solutions tailored to the needs of the healthcare and pharmaceutical industries.</p>
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
                        <Image src="https://placehold.co/600x400.png" alt="Secure data server for healthcare" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="secure data healthcare" />
                    </div>
                </div>
            </section>

             {/* Values Section */}
            <section className="container py-20 md:py-24">
                <div>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Core Values</h2>
                        <p className="mt-2 text-muted-foreground">The principles that guide our work in the health sector.</p>
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
                <div className="container text-center">
                     <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">Recognized for HealthTech Innovation</h2>
                     <div className="flex justify-center items-center flex-wrap gap-8">
                        {[...Array(3)].map((_, i) => (
                             <Image key={i} src="https://placehold.co/120x120.png" alt="Award for HealthTech" width={120} height={120} data-ai-hint="award trophy" />
                        ))}
                     </div>
                </div>
            </section>

             {/* Testimonials Section */}
            <section className="container py-20 md:py-24">
                <div>
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
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-bold text-black">HealthTech Solution Plans</h2>
                            <p className="text-black">Choose a plan that fits your practice or organization's needs. We offer scalable solutions for the healthcare industry.</p>
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
            <section className="container py-20 md:py-24">
                 <div className="px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="flex flex-col space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Free Consultation - Discover HealthTech Solutions</h2>
                                <p className="mt-4 max-w-2xl text-muted-foreground">
                                    Let's discuss how our technology solutions can improve your practice or pharmaceutical operations. Schedule a free, no-obligation consultation today.
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
