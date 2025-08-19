
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Phone, Mail, MapPin, Check, Search, FileText, Link2, Cog } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ContactForm } from '@/components/contact-form';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import PricingToggle from '@/components/pricing-toggle';

const services = [
    { title: 'Keyword Research', description: 'Identifying high-value keywords to target for optimal traffic and conversions.', icon: <Search /> },
    { title: 'On-Page SEO', description: 'Optimizing content and HTML source code for search engine visibility.', icon: <FileText /> },
    { title: 'Link Building', description: 'Acquiring high-quality backlinks to improve your site\'s authority.', icon: <Link2 /> },
    { title: 'Technical SEO', description: 'Improving technical aspects of your website to help search engines crawl and index your site more effectively.', icon: <Cog /> },
];

const teamMembers = [
    {
        name: 'Rachel Adams',
        role: 'SEO Strategist at RankPro',
        avatar: 'https://cdn.dribbble.com/users/124059/avatars/small/d3ea2de59812eb0062ed2258fccd71d6.jpg?1501076695/100x100.png',
        dataAiHint: 'professional headshot',
        testimonial: 'SulzaX boosted our organic traffic by 150% in just six months. Their SEO expertise is second to none.'
    },
    {
        name: 'Tom Harris',
        role: 'Marketing Manager at E-Com Giant',
        avatar: 'https://cdn.dribbble.com/users/8427991/avatars/normal/2d630ea0fd16c841881d23386c4fa850.jpg?1625395574/100x100.png',
        dataAiHint: 'professional headshot',
        testimonial: 'The team at SulzaX is data-driven and transparent. We always know how our campaigns are performing.'
    },
];

const whyChooseUsPoints = [
    { title: 'Proven Results', description: 'We have a track record of delivering significant improvements in search rankings and organic traffic.' },
    { title: 'Data-Driven Strategy', description: 'Our strategies are based on in-depth analysis and industry best practices.' },
    { title: 'Transparent Reporting', description: 'We provide regular, easy-to-understand reports on your SEO performance.' },
]

const values = [
    { title: 'Long-Term Growth', description: 'We focus on sustainable, long-term SEO strategies that deliver lasting results, not just quick wins.' },
    { title: 'Algorithm Adaptability', description: 'We stay on top of the latest search engine algorithm changes to ensure your website remains compliant and competitive.' },
    { title: 'Holistic Approach', description: 'We combine technical SEO, content strategy, and link building to create a comprehensive SEO plan that works.' },
    { title: 'Measurable ROI', description: 'Our primary goal is to deliver a clear and measurable return on your investment through increased visibility and conversions.' }
];

const pricingTiers = {
    monthly: [
        {
            name: 'Local SEO',
            price: '$699.00',
            period: '/ per month',
            features: [
                'Google My Business Optimization',
                'Local Keyword Targeting',
                'Citation Building',
                'Monthly Reporting',
                'On-Page SEO',
                'Email Support'
            ],
            buttonText: 'Choose Plan',
            popular: false,
        },
        {
            name: 'National SEO',
            price: '$1799.00',
            period: '/ per month',
            features: [
                'Comprehensive Keyword Research',
                'Content Strategy',
                'High-Quality Link Building',
                'Technical SEO Audit',
                'Advanced Reporting',
                'Priority Support'
            ],
            buttonText: 'Choose Plan',
            popular: true,
        }
    ],
    yearly: [
        {
            name: 'Local SEO',
            price: '$7549.20',
            period: '/ per year',
            features: [
                'Google My Business Optimization',
                'Local Keyword Targeting',
                'Citation Building',
                'Monthly Reporting',
                'On-Page SEO',
                'Email Support'
            ],
            buttonText: 'Choose Plan',
            popular: false,
        },
        {
            name: 'National SEO',
            price: '$19429.20',
            period: '/ per year',
            features: [
                'Comprehensive Keyword Research',
                'Content Strategy',
                'High-Quality Link Building',
                'Technical SEO Audit',
                'Advanced Reporting',
                'Priority Support'
            ],
            buttonText: 'Choose Plan',
            popular: true,
        }
    ]
};

const supportFeatures = [
    "Dedicated SEO Specialist",
    "Monthly Strategy Calls",
    "Custom Performance Dashboard"
];

export default function SeoPage() {
    return (
        <div className="bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 bg-secondary/30">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-primary">Search Engine Optimization</h1>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">Enhancing your website's visibility on search engines to attract organic traffic and improve search rankings.</p>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-20 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary">Climb the Ranks, Drive Results</h2>
                            <div className="flex items-center gap-4">
                                <Image src="/one.jpg" alt="Kevin Miller" width={80} height={80} className="rounded-full" data-ai-hint="professional headshot" />
                                <div>
                                    <p className="font-semibold">Kevin Miller, Head of SEO, SulzaX</p>
                                    <p className="text-muted-foreground">"The best place to hide a dead body is page 2 of Google."</p>
                                </div>
                            </div>
                            <p className="text-muted-foreground">We help businesses increase their online visibility and attract more customers through strategic, data-driven SEO. Our goal is to get you to the top of the search results and keep you there.</p>
                            <Button asChild>
                                <Link href="/about">About Us</Link>
                            </Button>
                        </div>
                        <div>
                            <Image src="https://cdn.dribbble.com/userupload/20273635/file/still-caf209c1fdf122cf3591e4cbb9dab159.gif?format=webp&resize=400x300&vertical=center/600x400.png" alt="SEO strategy session" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="seo strategy meeting" />
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Services Section */}
            <section className="py-20 md:py-24 bg-secondary/30">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Our SEO Services</h2>
                        <p className="mt-2 text-muted-foreground">A full suite of SEO services to boost your online presence.</p>
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
                             <Image src="https://cdn.dribbble.com/userupload/11499931/file/original-34de557127600deac97fdb3a8cfd3c43.png?format=webp&resize=400x300&vertical=center/600x400.png" alt="Analyst reviewing SEO data" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="seo data analysis" />
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary">Your Partner in Organic Growth</h2>
                            <p className="text-muted-foreground">At SulzaX, we are obsessed with search engines. We live and breathe SEO, constantly adapting our strategies to stay ahead of the curve and deliver sustainable growth for our clients.</p>
                            <div className="flex gap-8">
                                <div>
                                    <p className="text-4xl font-bold text-accent">500%</p>
                                    <p className="text-muted-foreground">Average ROI for Clients</p>
                                </div>
                                <div>
                                    <p className="text-4xl font-bold text-accent">Top 3</p>
                                    <p className="text-muted-foreground">Rankings for 80% of Keywords</p>
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
                            <h2 className="text-3xl md:text-4xl font-bold text-primary">Why Choose SulzaX for SEO?</h2>
                             <p className="text-muted-foreground">We are more than just an agency; we are your strategic partner in achieving digital dominance.</p>
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
                            <Image src="https://cdn.dribbble.com/userupload/17348003/file/original-c13f570ca5a2631dcdaab42cfc7c887b.png?format=webp&resize=400x300&vertical=center/600x400.png" alt="Graph showing upward trend" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="growth chart" />
                        </div>
                    </div>
                </div>
            </section>

             {/* Values Section */}
            <section className="py-20 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Our SEO Philosophy</h2>
                        <p className="mt-2 text-muted-foreground">The principles that guide our approach to search engine optimization.</p>
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
                    <PricingToggle tiers={pricingTiers} supportFeatures={supportFeatures}>
                         <h2 className="text-4xl md:text-5xl font-bold text-black">Ready to Dominate the SERPs?</h2>
                         <p className="text-black">Choose an SEO package that aligns with your business goals. We have options for businesses of all sizes.</p>
                    </PricingToggle>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 md:py-24">
                 <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="flex flex-col space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Free Consultation - Get Your SEO Audit</h2>
                                <p className="mt-4 max-w-2xl text-muted-foreground">
                                    Let's analyze your website and uncover opportunities for growth. Our experts will provide a free SEO audit and a clear strategy to improve your rankings.
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

    