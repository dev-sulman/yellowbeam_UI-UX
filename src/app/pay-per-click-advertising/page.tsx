
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Phone, Mail, MapPin, Check, MousePointer, Target, TrendingUp, CircleDollarSign } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ContactForm } from '@/components/contact-form';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import PricingToggle from '@/components/pricing-toggle';

const services = [
    { title: 'Campaign Strategy', description: 'Developing a targeted PPC strategy to reach your ideal customers and maximize ROI.', icon: <Target /> },
    { title: 'Ad Copy & Design', description: 'Crafting compelling ad copy and visuals that convert clicks into customers.', icon: <MousePointer /> },
    { title: 'Bid Management', description: 'Optimizing bidding strategies to ensure you get the most value for your ad spend.', icon: <CircleDollarSign /> },
    { title: 'Performance Tracking', description: 'Monitoring campaign performance and providing detailed reports to track your success.', icon: <TrendingUp /> },
];

const teamMembers = [
    {
        name: 'Olivia Martinez',
        role: 'PPC Specialist at AdVantage',
        avatar: 'https://cdn.dribbble.com/users/67904/avatars/normal/8bfc719620ca441a8fdb8b09703d8d54.jpg?1580744539/100x100.png',
        'data-ai-hint': 'professional headshot',
        testimonial: 'SulzaX managed our PPC campaigns and delivered a 200% increase in conversions. Their expertise is unmatched.'
    },
    {
        name: 'Ben Carter',
        role: 'Marketing Director at MarketPro',
        avatar: 'https://cdn.dribbble.com/users/1838892/avatars/normal/912baaa701a230c1b31db1eb0dc1def8.png?1736360469/100x100.png',
        'data-ai-hint': 'professional headshot',
        testimonial: 'The team at SulzaX is incredibly data-driven and transparent. They have significantly improved our ad performance.'
    },
];

const whyChooseUsPoints = [
    { title: 'Certified PPC Experts', description: 'Our team is certified in Google Ads and other major advertising platforms.' },
    { title: 'Data-Driven Approach', description: 'We use data and analytics to make informed decisions and optimize your campaigns.' },
    { title: 'Transparent Reporting', description: 'We provide clear, detailed reports on your campaign performance and ROI.' },
]

const values = [
    { title: 'ROI Focus', description: 'Our primary goal is to maximize your return on investment by driving high-quality traffic and conversions.' },
    { title: 'Continuous Optimization', description: 'We constantly monitor and optimize your campaigns to ensure they are performing at their best.' },
    { title: 'Audience Targeting', description: 'We use advanced targeting techniques to reach the right audience at the right time.' },
    { title: 'Strategic Partnership', description: 'We work closely with you to understand your business goals and align our PPC strategy accordingly.' }
];

const pricingTiers = {
    monthly: [
        {
            name: 'Basic',
            price: '$599.00',
            period: '/ per month',
            features: [
                'Up to $2,500 Ad Spend',
                '1 Platform (Google or Meta)',
                'Keyword Research',
                'Campaign Setup',
                'Ad Copywriting',
                'Monthly Reporting'
            ],
            buttonText: 'Choose Plan',
            popular: false,
        },
        {
            name: 'Pro',
            price: '$1499.00',
            period: '/ per month',
            features: [
                'Up to $10,000 Ad Spend',
                '2 Platforms (Google & Meta)',
                'Advanced Strategy',
                'A/B Testing',
                'Conversion Tracking',
                'Weekly Reporting'
            ],
            buttonText: 'Choose Plan',
            popular: true,
        }
    ],
    yearly: [
        {
            name: 'Basic',
            price: '$6469.20',
            period: '/ per year',
            features: [
                'Up to $2,500 Ad Spend',
                '1 Platform (Google or Meta)',
                'Keyword Research',
                'Campaign Setup',
                'Ad Copywriting',
                'Monthly Reporting'
            ],
            buttonText: 'Choose Plan',
            popular: false,
        },
        {
            name: 'Pro',
            price: '$16189.20',
            period: '/ per year',
            features: [
                'Up to $10,000 Ad Spend',
                '2 Platforms (Google & Meta)',
                'Advanced Strategy',
                'A/B Testing',
                'Conversion Tracking',
                'Weekly Reporting'
            ],
            buttonText: 'Choose Plan',
            popular: true,
        }
    ]
};

const supportFeatures = [
    "Dedicated Account Manager",
    "Monthly Strategy Calls",
    "Custom Performance Dashboard"
];

export default function PayPerClickPage() {
    return (
        <div className="bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 bg-secondary/30">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-primary">Pay-Per-Click Advertising</h1>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">Running targeted advertising campaigns on platforms like Google Ads to drive immediate traffic and conversions.</p>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-20 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary">Immediate Traffic, Measurable Results</h2>
                            <div className="flex items-center gap-4">
                                <Image src="https://cdn.dribbble.com/users/1838892/avatars/normal/912baaa701a230c1b31db1eb0dc1def8.png?1736360469/80x80.png" alt="Daniel Kim" width={80} height={80} className="rounded-full" data-ai-hint="professional headshot" />
                                <div>
                                    <p className="font-semibold">Daniel Kim, Head of PPC, SulzaX</p>
                                    <p className="text-muted-foreground">"Why wait for customers to find you? Let's go find them."</p>
                                </div>
                            </div>
                            <p className="text-muted-foreground">We specialize in creating and managing high-performing PPC campaigns that drive targeted traffic and generate leads. Our data-driven approach ensures your ad spend is working for you.</p>
                            <Button asChild>
                                <Link href="/about">About Us</Link>
                            </Button>
                        </div>
                        <div>
                            <Image src="/peerTopeer.jpg" alt="PPC dashboard with graphs" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="ppc dashboard charts" />
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Services Section */}
            <section className="py-20 md:py-24 bg-secondary/30">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Our PPC Services</h2>
                        <p className="mt-2 text-muted-foreground">A full-funnel approach to pay-per-click advertising.</p>
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
            <section className="py-20 md:py-24">
                 <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <Image src="https://cdn.dribbble.com/userupload/41540515/file/original-f0be57d00ce9d717e29c3f30ccf2e9f3.png?resize=1024x768&vertical=center/600x400.png" alt="Team analyzing ad performance" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="team analyzing charts" />
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary">Your Partner in Paid Advertising</h2>
                            <p className="text-muted-foreground">At SulzaX, we are passionate about driving measurable results through paid advertising. We combine strategic thinking with technical expertise to create campaigns that deliver a high return on investment.</p>
                            <div className="flex gap-8">
                                <div>
                                    <p className="text-4xl font-bold text-accent">3X</p>
                                    <p className="text-muted-foreground">Average Client ROAS</p>
                                </div>
                                <div>
                                    <p className="text-4xl font-bold text-accent">$10M+</p>
                                    <p className="text-muted-foreground">Ad Spend Managed</p>
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
                            <h2 className="text-3xl md:text-4xl font-bold text-primary">Why Choose SulzaX for PPC?</h2>
                            <p className="text-muted-foreground">We are more than just a PPC agency; we are your strategic partner in growth, dedicated to maximizing your return on ad spend.</p>
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
                            <Image src="https://cdn.dribbble.com/userupload/41579529/file/original-28d4243a138f960e6f3b19ad36441763.png?resize=1024x768&vertical=center/600x400.png" alt="Conversion funnel diagram" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="conversion funnel" />
                        </div>
                    </div>
                </div>
            </section>

             {/* Values Section */}
            <section className="py-20 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Our PPC Principles</h2>
                        <p className="mt-2 text-muted-foreground">The core beliefs that guide our advertising strategies.</p>
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
                     <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">Award-Winning PPC Management</h2>
                     <div className="flex justify-center items-center flex-wrap gap-8">
                        {[...Array(2)].map((_, i) => (
                             <Image key={i} src="https://yt3.ggpht.com/S2aJEeWAA2lKELqq676C8KIFfYXi5ePh4zBaO_KAnBAm0fvwg-fg5dh5hhNeiZzJtueNx8iTDA=s48-c-k-c0x00ffffff-no-rj/120x120.png" alt="Award for PPC" width={120} height={120} data-ai-hint="ppc award trophy" />
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
                        <h2 className="text-4xl md:text-5xl font-bold text-black">Ready to Drive Growth?</h2>
                        <p className="text-black">Choose a PPC management package that fits your budget and goals. We offer transparent pricing for businesses of all sizes.</p>
                    </PricingToggle>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 md:py-24">
                 <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="flex flex-col space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Free Consultation - Get Your PPC Audit</h2>
                                <p className="mt-4 max-w-2xl text-muted-foreground">
                                    Let's review your current ad accounts and uncover opportunities for improvement. Our experts will provide a free audit and a clear strategy to boost your ROI.
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
