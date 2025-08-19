
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Phone, Mail, MapPin, Check, Layers, PencilRuler, Search, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ContactForm } from '@/components/contact-form';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import PricingToggle from '@/components/pricing-toggle';

const services = [
    { title: 'User Research & Analysis', description: 'Understanding user behaviors, needs, and motivations through various research methods.', icon: <Users /> },
    { title: 'Wireframing & Prototyping', description: 'Creating detailed wireframes and interactive prototypes to visualize the user flow.', icon: <PencilRuler /> },
    { title: 'Interaction Design', description: 'Designing intuitive and engaging interfaces that are easy to navigate.', icon: <Layers /> },
    { title: 'Usability Testing', description: 'Testing designs with real users to identify and fix usability issues.', icon: <Search /> },
];

const teamMembers = [
    {
        name: 'Sophia Alvarez',
        role: 'UX Lead at Innovate.io',
        avatar: '/one.jpg',
        dataAiHint: 'professional headshot',
        testimonial: 'SulzaX completely redesigned our app\'s user experience, and the results have been phenomenal. User engagement is up 50%!'
    },
    {
        name: 'James O\'Connor',
        role: 'Product Manager at TechFlow',
        avatar: 'two.jpg',
        dataAiHint: 'professional headshot',
        testimonial: 'The UI/UX team at SulzaX is incredibly talented. They delivered a beautiful and intuitive design that our users love.'
    },
];

const whyChooseUsPoints = [
    { title: 'Data-Driven Design', description: 'Our design decisions are backed by user research and data analysis.' },
    { title: 'User-Centric Philosophy', description: 'We place the user at the center of our design process to create truly delightful experiences.' },
    { title: 'Collaborative & Iterative', description: 'We work closely with your team, iterating on designs based on feedback and testing.' },
]

const values = [
    { title: 'Empathy', description: 'We strive to deeply understand your users\' needs and challenges to create solutions that genuinely help them.' },
    { title: 'Clarity & Simplicity', description: 'We believe that the best designs are simple, intuitive, and easy to use. We focus on creating clean interfaces that eliminate confusion.' },
    { title: 'Innovation', description: 'We are always exploring new design patterns and technologies to create modern and engaging user experiences.' },
    { title: 'Impact', description: 'Our goal is to create designs that not only look good but also drive business results and improve user satisfaction.' }
];

const pricingTiers = {
    monthly: [
        {
            name: 'UX Audit',
            price: '$1500.00',
            period: '',
            features: [
                'Comprehensive UX Review',
                'Heuristic Evaluation',
                'User Flow Analysis',
                'Actionable Recommendations',
                'Competitor Analysis',
                'Final Report'
            ],
            buttonText: 'Get Started',
            popular: false,
        },
        {
            name: 'Full UX/UI Design',
            price: '$4500.00',
            period: '/ per month',
            features: [
                'User Research & Personas',
                'Wireframing & Prototyping',
                'Full UI Design System',
                'Interaction Design',
                'Usability Testing',
                'Dedicated Designer'
            ],
            buttonText: 'Choose Plan',
            popular: true,
        }
    ],
    yearly: [
        {
            name: 'UX Audit',
            price: '$1500.00',
            period: '',
            features: [
                'Comprehensive UX Review',
                'Heuristic Evaluation',
                'User Flow Analysis',
                'Actionable Recommendations',
                'Competitor Analysis',
                'Final Report'
            ],
            buttonText: 'Get Started',
            popular: false,
        },
        {
            name: 'Full UX/UI Design',
            price: '$48600.00',
            period: '/ per year',
            features: [
                'User Research & Personas',
                'Wireframing & Prototyping',
                'Full UI Design System',
                'Interaction Design',
                'Usability Testing',
                'Dedicated Designer'
            ],
            buttonText: 'Choose Plan',
            popular: true,
        }
    ]
};

const supportFeatures = [
    "Dedicated UX Strategist",
    "Agile Design Sprints",
    "Continuous Feedback Loop"
];

export default function UiUxDevelopmentPage() {
    return (
        <div className="bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 bg-secondary/30">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-primary">UI/UX Development</h1>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">Enhancing your website's visibility on search engines to attract organic traffic and improve search rankings.</p>
                </div>
            </section>

            {/* Intro Section */}
            <section className="w-full py-20 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary">Designing Experiences Users Love</h2>
                            <div className="flex items-center gap-4">
                                <Image src="/three.jpg" alt="Alex Wright" width={80} height={80} className="rounded-full" data-ai-hint="professional headshot" />
                                <div>
                                    <p className="font-semibold">Alex Wright, Head of UX, SulzaX</p>
                                    <p className="text-muted-foreground">"Design is not just what it looks like; it's how it works."</p>
                                </div>
                            </div>
                            <p className="text-muted-foreground">We are a team of designers and researchers passionate about creating intuitive, beautiful, and effective digital products. We put your users at the heart of everything we do.</p>
                            <Button asChild>
                                <Link href="/about">About Us</Link>
                            </Button>
                        </div>
                        <div>
                            <Image src="https://plus.unsplash.com/premium_photo-1690303193725-e3a9c08cfca4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQzfHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHx8MA%3D%3D" alt="UI/UX design workshop" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="design workshop" />
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Services Section */}
            <section className="py-20 md:py-24 bg-secondary/30">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Our UI/UX Services</h2>
                        <p className="mt-2 text-muted-foreground">A complete suite of services to design and validate your product.</p>
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
            <section className="w-full py-20 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                             <Image src="/blog12.jpeg" alt="Designer sketching wireframes" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="designer sketching wireframe" />
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary">Your Partner in Product Design</h2>
                            <p className="text-muted-foreground">At SulzaX, we don't just create pretty interfaces. We solve complex problems through user-centered design, ensuring your product is both beautiful and functional.</p>
                            <div className="flex gap-8">
                                <div>
                                    <p className="text-4xl font-bold text-accent">150+</p>
                                    <p className="text-muted-foreground">Products Designed</p>
                                </div>
                                <div>
                                    <p className="text-4xl font-bold text-accent">95%</p>
                                    <p className="text-muted-foreground">User Satisfaction Rate</p>
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
                            <h2 className="text-3xl md:text-4xl font-bold text-primary">Why Choose SulzaX for UI/UX?</h2>
                             <p className="text-muted-foreground">We blend creativity, psychology, and technology to build digital experiences that drive engagement and business growth.</p>
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
                            <Image src="/mobile14.webp" alt="A/B testing results on a screen" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="ab testing chart" />
                        </div>
                    </div>
                </div>
            </section>

             {/* Values Section */}
            <section className="w-full py-20 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Design Principles</h2>
                        <p className="mt-2 text-muted-foreground">The foundation of our approach to creating exceptional user experiences.</p>
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
                     <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">Recognized for UX Excellence</h2>
                     <div className="flex justify-center items-center flex-wrap gap-8">
                        {[...Array(3)].map((_, i) => (
                             <Image key={i} src="/blog8.jpeg/120x120.png" alt="Award for UX design" width={120} height={120} data-ai-hint="design award trophy" />
                        ))}
                     </div>
                </div>
            </section>

             {/* Testimonials Section */}
            <section className="w-full py-20 md:py-24">
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
                         <h2 className="text-4xl md:text-5xl font-bold text-black">Ready to Build a Better Product?</h2>
                         <p className="text-black">Choose a design package that suits your needs. We provide flexible options for businesses at any stage.</p>
                    </PricingToggle>
                </div>
            </section>

            {/* Contact Section */}
            <section className="w-full py-20 md:py-24">
                 <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="flex flex-col space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Free Consultation - Discuss Your UX Needs</h2>
                                <p className="mt-4 max-w-2xl text-muted-foreground">
                                    Let's talk about how we can improve your product's user experience. Our experts will provide a free analysis and tailored recommendations.
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
