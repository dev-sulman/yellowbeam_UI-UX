
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Phone, Mail, MapPin, Check, ThumbsUp, Users, BarChart, FileSignature } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ContactForm } from '@/components/contact-form';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const services = [
    { title: 'Content Creation', description: 'Creating engaging and shareable content tailored to each social media platform.', icon: <FileSignature /> },
    { title: 'Community Management', description: 'Building and nurturing an engaged community of followers and brand advocates.', icon: <Users /> },
    { title: 'Campaign Strategy', description: 'Developing and executing strategic social media campaigns to meet your business goals.', icon: <ThumbsUp /> },
    { title: 'Analytics & Reporting', description: 'Tracking key metrics and providing detailed reports to measure the impact of your social media efforts.', icon: <BarChart /> },
];

const teamMembers = [
    {
        name: 'Megan Harris',
        role: 'Social Media Manager at ConnectSphere',
        avatar: 'https://placehold.co/100x100.png',
        dataAiHint: 'professional headshot',
        testimonial: 'SulzaX took our social media presence to the next level. Our engagement and follower growth have been incredible.'
    },
    {
        name: 'Jason Chen',
        role: 'Founder of StyleSavvy',
        avatar: 'https://placehold.co/100x100.png',
        dataAiHint: 'professional headshot',
        testimonial: 'The team at SulzaX is creative, strategic, and always on top of the latest trends. They are a true partner in our success.'
    },
];

const whyChooseUsPoints = [
    { title: 'Expert Social Media Strategists', description: 'Our team lives and breathes social media, staying ahead of trends to keep your brand relevant.' },
    { title: 'Creative Content Production', description: 'We create high-quality, engaging content that stops the scroll and gets people talking.' },
    { title: 'Community-Focused Approach', description: 'We focus on building genuine connections and fostering a loyal community around your brand.' },
]

const values = [
    { title: 'Authenticity', description: 'We believe in creating authentic content and interactions that build trust and resonate with your audience.' },
    { title: 'Engagement', description: 'Our goal is to spark conversations and build a vibrant community around your brand through meaningful engagement.' },
    { title: 'Creativity', description: 'We push creative boundaries to develop unique and memorable social media campaigns that stand out from the noise.' },
    { title: 'Data-Informed Strategy', description: 'We use analytics to understand what works, refining our strategy to deliver the best possible results for your business.' }
];

const pricingTiers = {
    monthly: [
        {
            name: 'Growth',
            price: '$899.00',
            period: '/ per month',
            features: [
                '2 Social Platforms',
                '12 Posts per Month',
                'Content Creation',
                'Community Engagement',
                'Monthly Analytics Report',
                'Email Support'
            ],
            buttonText: 'Choose Plan',
            popular: false,
        },
        {
            name: 'Scale',
            price: '$1999.00',
            period: '/ per month',
            features: [
                '4 Social Platforms',
                '20 Posts per Month',
                'Advanced Content (Video/Stories)',
                'Full Community Management',
                'Paid Ad Campaign Mgmt (up to $1k)',
                'Priority Support'
            ],
            buttonText: 'Choose Plan',
            popular: true,
        }
    ],
    yearly: [
        {
            name: 'Growth',
            price: '$9709.20',
            period: '/ per year',
            features: [
                '2 Social Platforms',
                '12 Posts per Month',
                'Content Creation',
                'Community Engagement',
                'Monthly Analytics Report',
                'Email Support'
            ],
            buttonText: 'Choose Plan',
            popular: false,
        },
        {
            name: 'Scale',
            price: '$21589.20',
            period: '/ per year',
            features: [
                '4 Social Platforms',
                '20 Posts per Month',
                'Advanced Content (Video/Stories)',
                'Full Community Management',
                'Paid Ad Campaign Mgmt (up to $1k)',
                'Priority Support'
            ],
            buttonText: 'Choose Plan',
            popular: true,
        }
    ]
};

const supportFeatures = [
    "Dedicated Social Media Manager",
    "Monthly Content Calendar",
    "Real-time Performance Dashboard"
];

export default function SocialMediaMarketingPage() {
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
                    <h1 className="text-4xl md:text-6xl font-bold text-primary">Social Media Marketing</h1>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">Creating and managing engaging social media campaigns to connect with your audience and increase brand awareness.</p>
                </div>
            </section>

            {/* Intro Section */}
            <section className="container py-20 md:py-24">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Connect, Engage, and Grow Your Brand</h2>
                        <div className="flex items-center gap-4">
                            <Image src="https://placehold.co/80x80.png" alt="Chloe Davis" width={80} height={80} className="rounded-full" data-ai-hint="professional headshot" />
                            <div>
                                <p className="font-semibold">Chloe Davis, Head of Social Media, SulzaX</p>
                                <p className="text-muted-foreground">"Let's build a community, not just a following."</p>
                            </div>
                        </div>
                        <p className="text-muted-foreground">We craft compelling social media strategies that foster community, drive engagement, and build brand loyalty. From content creation to campaign management, we're your partner in social success.</p>
                        <Button asChild>
                            <Link href="/about">About Us</Link>
                        </Button>
                    </div>
                    <div>
                        <Image src="https://placehold.co/600x400.png" alt="Social media feed on a phone" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="social media phone" />
                    </div>
                </div>
            </section>
            
            {/* Services Section */}
            <section className="py-20 md:py-24 bg-secondary/30">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Social Media Services</h2>
                        <p className="mt-2 text-muted-foreground">A comprehensive approach to building your brand on social media.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map(service => (
                            <Card key={service.title} className="text-center p-6">
                                <div className="flex justify-center mb-4 text-accent">{service.icon}</div>
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
                         <Image src="https://placehold.co/600x400.png" alt="Team brainstorming social media ideas" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="team brainstorming social media" />
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Your Partner in Social Growth</h2>
                        <p className="text-muted-foreground">At SulzaX, we are passionate about the power of social media to connect people and build brands. We combine creative storytelling with data-driven strategy to help you achieve your goals.</p>
                        <div className="flex gap-8">
                            <div>
                                <p className="text-4xl font-bold text-accent">10M+</p>
                                <p className="text-muted-foreground">Impressions Generated</p>
                            </div>
                            <div>
                                <p className="text-4xl font-bold text-accent">500K+</p>
                                <p className="text-muted-foreground">Engaged Followers</p>
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
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Why Choose SulzaX for Social Media?</h2>
                         <p className="text-muted-foreground">We are more than just a marketing agency; we are your strategic partner in building a strong, authentic brand presence online.</p>
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
                        <Image src="https://placehold.co/600x400.png" alt="Social media analytics dashboard" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="social media dashboard" />
                    </div>
                </div>
            </section>

             {/* Values Section */}
            <section className="container py-20 md:py-24">
                <div>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Social Media Principles</h2>
                        <p className="mt-2 text-muted-foreground">The core beliefs that guide our social media strategies.</p>
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
                     <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">Award-Winning Social Campaigns</h2>
                     <div className="flex justify-center items-center flex-wrap gap-8">
                        {[...Array(3)].map((_, i) => (
                             <Image key={i} src="https://placehold.co/120x120.png" alt="Award for social media" width={120} height={120} data-ai-hint="social media award" />
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
                            <h2 className="text-4xl md:text-5xl font-bold text-black">Ready to Grow Your Social Presence?</h2>
                            <p className="text-black">Choose a social media package that fits your goals. We offer flexible options for businesses of all sizes.</p>
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
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Free Consultation - Boost Your Social Strategy</h2>
                                <p className="mt-4 max-w-2xl text-muted-foreground">
                                    Let's chat about your social media goals. Our experts will provide a free analysis and a clear strategy to help you succeed online.
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
