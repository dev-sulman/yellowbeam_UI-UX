
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Award, Star, Phone, Mail, MapPin, Check, Code, Server, Cog, ShieldCheck, Database, SlidersHorizontal, Layers, GitBranch } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ContactForm } from '@/components/contact-form';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const services = [
    { title: 'Enterprise Software', description: 'Scalable and robust software for large organizations.', icon: <Server /> },
    { title: 'Custom Applications', description: 'Tailor-made applications to meet your specific business needs.', icon: <Code /> },
    { title: 'API Development', description: 'Secure and reliable APIs to connect your systems and services.', icon: <GitBranch /> },
    { title: 'System Integration', description: 'Seamlessly connect your disparate software systems.', icon: <Layers /> },
];



const whyChooseUsPoints = [
    { title: 'Scalable Architecture', description: 'We design software that grows with your business.' },
    { title: 'Rigorous Testing', description: 'Our comprehensive QA process ensures a bug-free, reliable product.' },
    { title: 'Transparent Process', description: 'We keep you in the loop with regular updates and clear communication.' },
]

const values = [
    { title: 'Engineering Excellence', description: 'We are committed to writing clean, efficient, and maintainable code, following the best practices in software engineering to deliver high-quality solutions.' },
    { title: 'Scalability & Performance', description: 'We build software that is not only powerful today but is also architected to scale and perform under pressure as your business grows.' },
    { title: 'Agile Partnership', description: 'We work as an extension of your team, using agile methodologies to adapt to changing requirements and deliver value iteratively.' },
    { title: 'Long-term Support', description: 'Our relationship doesn’t end at launch. We provide ongoing maintenance and support to ensure your software remains secure, updated, and effective.' }
];

const pricingTiers = {
    monthly: [
        {
            name: 'Project-Based',
            price: 'Custom',
            period: '',
            features: [
                'Fixed Scope & Timeline',
                'Dedicated Project Manager',
                'Ideal for Specific Projects',
                'Full Cycle Development',
                'UI/UX Design Included',
                'Post-launch Support'
            ],
            buttonText: 'Get a Quote',
            popular: false,
        },
        {
            name: 'Dedicated Team',
            price: 'Contact Us',
            period: '/ month',
            features: [
                'Flexible Scope',
                'Full-time Developers',
                'Ideal for Long-term Needs',
                'Agile & Iterative Process',
                'Direct Team Communication',
                'Scalable Team Size'
            ],
            buttonText: 'Contact Us',
            popular: true,
        }
    ],
    yearly: [
         {
            name: 'Project-Based',
            price: 'Custom',
            period: '',
            features: [
                'Fixed Scope & Timeline',
                'Dedicated Project Manager',
                'Ideal for Specific Projects',
                'Full Cycle Development',
                'UI/UX Design Included',
                'Post-launch Support'
            ],
            buttonText: 'Get a Quote',
            popular: false,
        },
        {
            name: 'Dedicated Team',
            price: 'Contact Us',
            period: '/ year (discounted)',
            features: [
                'Flexible Scope',
                'Full-time Developers',
                'Ideal for Long-term Needs',
                'Agile & Iterative Process',
                'Direct Team Communication',
                'Scalable Team Size'
            ],
            buttonText: 'Contact Us',
            popular: true,
        }
    ]
};

const supportFeatures = [
    "Agile Methodologies",
    "Transparent Reporting",
    "Dedicated Support"
];

export default function SoftwareDevelopmentPage() {
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
                    <h1 className="text-4xl md:text-6xl font-bold text-primary">Software Development</h1>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">Custom software development and integration services to meet specific business needs.</p>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-20 md:py-24">
                 <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary">Building the Backbone of Your Business</h2>
                            <div className="flex items-center gap-4">
                                <Image src="/one.jpg" alt="John Smith" width={80} height={80} className="rounded-full" data-ai-hint="professional headshot" />
                                <div>
                                    <p className="font-semibold">John Smith, Head of Software, SulzaX</p>
                                    <p className="text-muted-foreground">"We build the reliable software that powers your success."</p>
                                </div>
                            </div>
                            <p className="text-muted-foreground">We design and develop custom software solutions that are scalable, secure, and tailored to the unique demands of your business. Let us build the tools you need to thrive.</p>
                            <Button asChild>
                                <Link href="/about">About Us</Link>
                            </Button>
                        </div>
                        <div>
                            <Image src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgwfHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHx8MA%3D%3D/600x400.png" alt="Software architecture diagram" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="software architecture diagram" />
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Services Section */}
            <section className="py-20 md:py-24 bg-secondary/30">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Software Services</h2>
                        <p className="mt-2 text-muted-foreground">From enterprise systems to custom applications.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map(service => (
                            <Card key={service.title} className="text-center p-6">
                                <div className="flex justify-center mb-4">{service.icon}</div>
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
                             <Image src="https://cdn.dribbble.com/userupload/3072765/file/original-663c73b5a971cbb2a978fe10f03085d2.png?format=webp&resize=400x300&vertical=center/600x400.png" alt="Developers collaborating" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="team developers meeting" />
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary">Your Partner in Digital Transformation</h2>
                            <p className="text-muted-foreground">At SulzaX, we are more than just coders. We are architects of digital solutions, dedicated to helping your business leverage technology for growth and efficiency.</p>
                            <div className="flex gap-8">
                                <div>
                                    <p className="text-4xl font-bold text-accent">1M+</p>
                                    <p className="text-muted-foreground">Lines of Code Written</p>
                                </div>
                                <div>
                                    <p className="text-4xl font-bold text-accent">500+</p>
                                    <p className="text-muted-foreground">Successful Deployments</p>
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
                            <h2 className="text-3xl md:text-4xl font-bold text-primary">Why Trust SulzaX With Your Software?</h2>
                             <p className="text-muted-foreground">We combine deep technical expertise with a commitment to understanding your business, ensuring we deliver software that truly works for you.</p>
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
                            <Image src="https://plus.unsplash.com/premium_photo-1683134150358-2cb9a4de1c57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzI2fHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHx8MA%3D%3D/600x400.png" alt="Secure data center" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="data center security" />
                        </div>
                    </div>
                </div>
            </section>

             {/* Values Section */}
            <section className="py-20 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Software Development Principles</h2>
                        <p className="mt-2 text-muted-foreground">The values that drive our engineering culture.</p>
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

         

  

            {/* Pricing Section */}
            <section className="py-20 md:py-24 bg-secondary/30">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-bold text-black">Flexible Engagement Models</h2>
                            <p className="text-black">We offer flexible engagement models to suit your project needs, from fixed-scope projects to dedicated development teams.</p>
                            <div className="flex items-center gap-4">
                                <span className={cn('font-medium', !isYearly ? 'text-[#2D4FE1]' : 'text-black')}>Monthly</span>
                                <Switch checked={isYearly} onCheckedChange={setIsYearly} aria-label="billing cycle toggle" />
                                <span className={cn('font-medium', isYearly ? 'text-[#2D4FE1]' : 'text-black')}>Yearly</span>
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
                                            <span className={cn('text-4xl font-bold', tier.popular ? 'text-black' : 'text-[#2D4FE1]')}>{tier.price}</span>
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
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Free Consultation - Discuss Your Software Project</h2>
                                <p className="mt-4 max-w-2xl text-muted-foreground">
                                    Let's talk about your software needs. Our experts will help you scope your project and provide a clear path forward.
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
