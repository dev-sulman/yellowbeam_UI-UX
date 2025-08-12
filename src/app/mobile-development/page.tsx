
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Award, Star, Phone, Mail, MapPin, Check, Smartphone, AppWindow, Cpu, ShieldCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ContactForm } from '@/components/contact-form';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const services = [
    { title: 'iOS & Android Apps', description: 'Native apps for the best performance and user experience.', icon: <Smartphone/> },
    { title: 'Cross-Platform Development', description: 'Flutter & React Native for cost-effective solutions.', icon: <AppWindow/> },
    { title: 'App Maintenance & Support', description: 'Ongoing support to keep your app up-to-date.', icon: <Cpu/> },
    { title: 'App Security', description: 'Robust security features to protect user data.', icon: <ShieldCheck/> },
];

const teamMembers = [
    {
        name: 'Samantha Ray',
        role: 'Lead Mobile Developer',
        avatar: 'one.jpg',
        dataAiHint: 'professional headshot',
        testimonial: 'SulzaX developed a world-class mobile app for our startup. Their expertise in mobile technology is unmatched.'
    },
    {
        name: 'leaa joe',
        role: 'Project Manager at Appify',
        avatar: '/three.jpg',
        dataAiHint: 'professional headshot',
        testimonial: 'The mobile development process was smooth and transparent. The team at SulzaX is a pleasure to work with.'
    },
];

const whyChooseUsPoints = [
    { title: 'Expert Mobile Developers', description: 'Our team has a proven track record of building successful mobile apps.' },
    { title: 'User-Centric Design', description: 'We focus on creating intuitive and engaging user experiences.' },
    { title: 'Agile & Collaborative', description: 'We work closely with you at every stage of the development process.' },
]

const values = [
    { title: 'Innovation', description: 'We are passionate about leveraging the latest mobile technologies to create innovative solutions that drive business value and delight users.' },
    { title: 'Performance', description: 'We build high-performing, scalable, and reliable mobile applications that provide a seamless user experience across all devices.' },
    { title: 'Collaboration', description: 'We believe in a collaborative partnership with our clients, working together to turn their vision into a successful mobile application.' },
    { title: 'Security', description: 'We prioritize the security of your application and user data, implementing robust security measures to protect against threats.' }
];

const pricingTiers = {
    monthly: [
        {
            name: 'Starter',
            price: '$999.00',
            period: '/ per month',
            features: [
                '1 Platform (iOS or Android)',
                'UI/UX Design',
                'Basic Backend',
                'App Store Submission',
                'Monthly Maintenance',
                'Email Support'
            ],
            buttonText: 'Choose Plan',
            popular: false,
        },
        {
            name: 'Business',
            price: '$2499.00',
            period: '/ per month',
            features: [
                '2 Platforms (iOS & Android)',
                'Advanced UI/UX Design',
                'Custom Backend',
                'API Integration',
                'Weekly Maintenance',
                'Priority Support'
            ],
            buttonText: 'Choose Plan',
            popular: true,
        }
    ],
    yearly: [
        {
            name: 'Starter',
            price: '$10789.20',
            period: '/ per year',
            features: [
                '1Platform (iOS or Android)',
                'UI/UX Design',
                'Basic Backend',
                'App Store Submission',
                'Monthly Maintenance',
                'Email Support'
            ],
            buttonText: 'Choose Plan',
            popular: false,
        },
        {
            name: 'Business',
            price: '$26989.20',
            period: '/ per year',
            features: [
                '2 Platforms (iOS & Android)',
                'Advanced UI/UX Design',
                'Custom Backend',
                'API Integration',
                'Weekly Maintenance',
                'Priority Support'
            ],
            buttonText: 'Choose Plan',
            popular: true,
        }
    ]
};

const supportFeatures = [
    "Dedicated Project Manager",
    "Agile Development",
    "Transparent Communication"
];

export default function MobileDevelopmentPage() {
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
                    <h1 className="text-4xl md:text-6xl font-bold text-primary">Mobile Development</h1>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">Strategic guidance on IT strategy, digital transformation, software implementation, and project management for mobile.</p>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-20 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary">Bringing Your Ideas to Life on Mobile</h2>
                            <div className="flex items-center gap-4">
                                <Image src="/four.jpg" alt="Jane Doe" width={80} height={80} className="rounded-full" data-ai-hint="professional headshot" />
                                <div>
                                    <p className="font-semibold">Amna, Head of Mobile, SulzaX</p>
                                    <p className="text-muted-foreground">"Let's build the next big app together!"</p>
                                </div>
                            </div>
                            <p className="text-muted-foreground">We specialize in creating intuitive, high-performance mobile applications for iOS and Android. From concept to launch, we are your trusted partner in mobile innovation.</p>
                            <Button asChild>
                                <Link href="/about">About Us</Link>
                            </Button>
                        </div>
                        <div>
                            <Image src="https://cdn.dribbble.com/userupload/43607251/file/still-7820cced9b273aef48e1a863d9198bba.png?format=webp&resize=400x300&vertical=center/600x400.png" alt="Mobile app development discussion" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="mobile app meeting" />
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Services Section */}
            <section className="py-20 md:py-24 bg-secondary/30">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Mobile Services</h2>
                        <p className="mt-2 text-muted-foreground">End-to-end mobile application development services.</p>
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
                             <Image src="https://cdn.dribbble.com/userupload/32675075/file/original-9cb113b6307cdbf5668caabe2b379dfc.png?format=webp&resize=400x300&vertical=center/600x400.png" alt="Team working on mobile app" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="team mobile app" />
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary">Your Partner in Mobile Innovation</h2>
                            <p className="text-muted-foreground">At SulzaX, we don't just build apps. We build experiences. We are a team of passionate developers and designers dedicated to pushing the boundaries of mobile technology.</p>
                            <div className="flex gap-8">
                                <div>
                                    <p className="text-4xl font-bold text-accent">50+</p>
                                    <p className="text-muted-foreground">Apps Delivered</p>
                                </div>
                                <div>
                                    <p className="text-4xl font-bold text-accent">5M+</p>
                                    <p className="text-muted-foreground">Users Served</p>
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
                            <h2 className="text-3xl md:text-4xl font-bold text-primary">Why Build Your App With SulzaX?</h2>
                             <p className="text-muted-foreground">We combine technical expertise with a creative vision to deliver mobile applications that stand out in a crowded market.</p>
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
                            <Image src="https://cdn.dribbble.com/userupload/43687882/file/original-d8c5452dd57d254a1fae5bf3e82af3a2.png?format=webp&resize=400x300&vertical=center/600x400.png" alt="Mobile app UI design" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="mobile app design" />
                        </div>
                    </div>
                </div>
            </section>

             {/* Values Section */}
            <section className="py-20 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Core Values</h2>
                        <p className="mt-2 text-muted-foreground">The principles that guide our mobile development process.</p>
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
                            <h2 className="text-4xl md:text-5xl font-bold text-black">Ready to Build Your App?</h2>
                            <p className="text-black">Choose a plan that fits your mobile development needs. We offer flexible pricing for startups and enterprises.</p>
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
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Free Consultation - Discover Mobile Solutions</h2>
                                <p className="mt-4 max-w-2xl text-muted-foreground">
                                    Let's discuss your mobile app idea. Our experts will provide tailored recommendations to help you succeed.
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

    