
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Phone, Mail, MapPin, Check, Edit3, MessageSquare, BarChart, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ContactForm } from '@/components/contact-form';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import PricingToggle from '@/components/pricing-toggle';

const services = [
    { title: 'Content Strategy', description: 'Developing a roadmap for creating, publishing, and governing content.', icon: <FileText /> },
    { title: 'Content Creation', description: 'Producing high-quality blog posts, articles, videos, and infographics.', icon: <Edit3 /> },
    { title: 'Content Distribution', description: 'Promoting your content across various channels to maximize reach and engagement.', icon: <MessageSquare /> },
    { title: 'Performance Analytics', description: 'Tracking content performance and providing insights to optimize your strategy.', icon: <BarChart /> },
];

const teamMembers = [
    {
        name: 'Leaya Joe Dim',
        role: 'Content Director at StoryWeaver',
        avatar: 'https://cdn.dribbble.com/users/1060791/avatars/small/50def45ede08e05fdf8cd296cb8ca00f.jpg?1751645722/100x100.png',
        'data-ai-hint': 'professional headshot',
        testimonial: 'SulzaX helped us build a content engine that drives a significant portion of our inbound leads. Their strategic approach is fantastic.'
    },
    {
        name: 'Michael Rodriguez',
        role: 'Founder of GrowthHub',
        avatar: 'https://cdn.dribbble.com/users/1875202/avatars/small/3fa4f6ce6a13fae77537a58a92a5f471.jpg?1662610708/100x100.png',
        'data-ai-hint': 'professional headshot',
        testimonial: 'The content created by SulzaX is always top-notch. They are masters at storytelling and understand our audience perfectly.'
    },
];

const whyChooseUsPoints = [
    { title: 'Expert Storytellers', description: 'Our team consists of skilled writers, editors, and strategists who know how to tell a compelling story.' },
    { title: 'Audience-First Approach', description: 'We create content that educates, entertains, and solves problems for your target audience.' },
    { title: 'SEO-Informed Content', description: 'Our content is optimized for search engines to attract organic traffic and improve your rankings.' },
]

const values = [
    { title: 'Value Creation', description: 'We believe in creating content that provides real value to your audience, building trust and establishing your brand as an authority.' },
    { title: 'Brand Storytelling', description: 'We focus on telling your brand\'s unique story in a way that is authentic, engaging, and memorable.' },
    { title: 'Consistency', description: 'We help you maintain a consistent publishing schedule to keep your audience engaged and your brand top-of-mind.' },
    { title: 'Data-Driven Improvement', description: 'We use analytics to measure what resonates with your audience and continuously refine your content strategy.' }
];

const pricingTiers = {
    monthly: [
        {
            name: 'Blog Starter',
            price: '$799.00',
            period: '/ per month',
            features: [
                '4 Blog Posts (up to 1,500 words)',
                'Topic Ideation & Keyword Research',
                'Stock Imagery',
                'Social Media Snippets',
                'Basic SEO Optimization',
                'Monthly Report'
            ],
            buttonText: 'Choose Plan',
            popular: false,
        },
        {
            name: 'Content Engine',
            price: '$2199.00',
            period: '/ per month',
            features: [
                '8 Content Pieces (Blogs, Articles)',
                'Full Content Strategy',
                'Custom Graphics',
                'Content Distribution Plan',
                'Advanced SEO & Link Building',
                'Priority Support'
            ],
            buttonText: 'Choose Plan',
            popular: true,
        }
    ],
    yearly: [
        {
            name: 'Blog Starter',
            price: '$8629.20',
            period: '/ per year',
            features: [
                '4 Blog Posts (up to 1,500 words)',
                'Topic Ideation & Keyword Research',
                'Stock Imagery',
                'Social Media Snippets',
                'Basic SEO Optimization',
                'Monthly Report'
            ],
            buttonText: 'Choose Plan',
            popular: false,
        },
        {
            name: 'Content Engine',
            price: '$23749.20',
            period: '/ per year',
            features: [
                '8 Content Pieces (Blogs, Articles)',
                'Full Content Strategy',
                'Custom Graphics',
                'Content Distribution Plan',
                'Advanced SEO & Link Building',
                'Priority Support'
            ],
            buttonText: 'Choose Plan',
            popular: true,
        }
    ]
};

const supportFeatures = [
    "Dedicated Content Strategist",
    "Monthly Editorial Calendar",
    "Quarterly Performance Reviews"
];

export default function ContentMarketingPage() {
    return (
        <div className="bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 bg-secondary/30">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-primary">Content Marketing</h1>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">Creating valuable, relevant content to attract and engage your target audience, building trust and authority.</p>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-20 md:py-24">
                 <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary">Telling Stories That Build Your Brand</h2>
                            <div className="flex items-center gap-4">
                                <Image src="https://cdn.dribbble.com/users/13403869/avatars/small/004611033d8fad528199766d6682c7ab.png?1738226292/80x80.png" alt="Anna Kim" width={80} height={80} className="rounded-full" data-ai-hint="professional headshot" />
                                <div>
                                    <p className="font-semibold">Anna Kim, Head of Content, SulzaX</p>
                                    <p className="text-muted-foreground">"Great content is the best sales tool in the world."</p>
                                </div>
                            </div>
                            <p className="text-muted-foreground">We help you connect with your audience on a deeper level through strategic content that informs, entertains, and inspires. Let us help you tell your story and grow your business.</p>
                            <Button asChild>
                                <Link href="/about">About Us</Link>
                            </Button>
                        </div>
                        <div>
                            <Image src="https://cdn.dribbble.com/userupload/24264265/file/original-79947327f2a1120710d41a63aab8b016.jpg?resize=1024x768&vertical=center/600x400.png" alt="Person writing in a notebook" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="writing content" />
                        </div>
                    </div>
                 </div>
            </section>
            
            {/* Services Section */}
            <section className="py-20 md:py-24 bg-secondary/30">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Content Marketing Services</h2>
                        <p className="mt-2 text-muted-foreground">From strategy and creation to distribution and analytics.</p>
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
                            <Image src="https://cdn.dribbble.com/userupload/24264266/file/original-63a57827f3004ed99d38944628b23c42.jpg?resize=1024x768&vertical=center/600x400.png" alt="Team reviewing content on a screen" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="team reviewing content" />
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary">Your Partner in Brand Storytelling</h2>
                            <p className="text-muted-foreground">At SulzaX, we are passionate about the power of content. We combine creativity with data to create content strategies that build brands and drive results.</p>
                            <div className="flex gap-8">
                                <div>
                                    <p className="text-4xl font-bold text-accent">200%</p>
                                    <p className="text-muted-foreground">Average Organic Traffic Growth</p>
                                </div>
                                <div>
                                    <p className="text-4xl font-bold text-accent">1,000+</p>
                                    <p className="text-muted-foreground">Pieces of Content Published</p>
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
                            <h2 className="text-3xl md:text-4xl font-bold text-primary">Why Choose SulzaX for Content?</h2>
                            <p className="text-muted-foreground">We are more than just a content farm; we are your strategic partner in building a powerful brand narrative.</p>
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
                            <Image src="https://cdn.dribbble.com/userupload/24264270/file/original-605ae9adeda8995c51ab0563d8097690.jpg?resize=1024x768&vertical=center/600x400.png" alt="Library of books" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="library books" />
                        </div>
                    </div>
                </div>
            </section>

             {/* Values Section */}
            <section className="py-20 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Content Principles</h2>
                        <p className="mt-2 text-muted-foreground">The core beliefs that guide our content creation process.</p>
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
                        <h2 className="text-4xl md:text-5xl font-bold text-black">Ready to Build Your Audience?</h2>
                        <p className="text-black">Choose a content marketing package that fits your goals. We offer flexible options for businesses of all sizes.</p>
                    </PricingToggle>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 md:py-24">
                 <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="flex flex-col space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Free Consultation - Plan Your Content Strategy</h2>
                                <p className="mt-4 max-w-2xl text-muted-foreground">
                                    Let's discuss how content can help you achieve your business goals. Our experts will provide a free consultation and a roadmap for success.
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
    
