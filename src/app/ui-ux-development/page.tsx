
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Phone, Mail, MapPin, Check, Layers, PencilRuler, Search, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ContactForm } from '@/components/contact-form';
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
        'data-ai-hint': 'professional headshot',
        testimonial: 'SulzaX completely redesigned our app\'s user experience, and the results have been phenomenal. User engagement is up 50%!'
    },
    {
        name: 'James O\'Connor',
        role: 'Product Manager at TechFlow',
        avatar: '/two.jpg',
        'data-ai-hint': 'professional headshot',
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
            period: '/month',
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
            period: '/year',
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
            <section className="relative py-20 md:py-32 bg-gradient-to-r from-[#0f172a] to-[#334155] text-white">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold">UI/UX Development</h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                        Creating intuitive, beautiful digital experiences that users love and that drive business results.
                    </p>
                    <Button asChild className="mt-8">
                        <Link href="#contact">Start Your Project</Link>
                    </Button>
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
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg transform rotate-2"></div>
                            <Image
                                src="/about.png"
                                alt="UI/UX design workshop"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg relative z-10"
                                data-ai-hint="design workshop"
                            />
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
                            <Card key={service.title} className="text-center p-6 hover:shadow-lg transition-all duration-300">
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
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg transform -rotate-2"></div>
                            <Image src="/blog12.jpeg" alt="Designer sketching wireframes" width={600} height={400} className="rounded-lg shadow-lg relative z-10" data-ai-hint="designer sketching wireframe" />
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
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg transform rotate-2"></div>
                            <Image src="/mobile14.webp" alt="A/B testing results on a screen" width={600} height={400} className="rounded-lg shadow-lg relative z-10" data-ai-hint="ab testing chart" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="w-full py-20 md:py-24 bg-gradient-to-r from-slate-500 to-slate-400 text-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold">Our Design Principles</h2>
                        <p className="mt-2 text-slate-200">The foundation of our approach to creating exceptional user experiences.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {values.map(value => (
                            <Card key={value.title} className="p-6 bg-white/10 border-white/20 text-white">
                                <CardTitle className="text-xl mb-2">{value.title}</CardTitle>
                                <CardDescription className="text-gray-300">{value.description}</CardDescription>
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
                            <div key={i} className="bg-white p-6 rounded-lg shadow-md w-40 h-40 flex items-center justify-center">
                                <span className="text-2xl font-bold text-accent">Award {i + 1}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="w-full py-20 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-8">
                        {teamMembers.map((member) => (
                            <Card key={member.name} className="p-6 flex items-start gap-4 hover:shadow-lg transition-all duration-300">
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
            <section className="py-20 md:py-24 bg-gradient-to-r from-[#0f172a] to-[#334155] text-white">
                <div className="container mx-auto px-4 md:px-6">
                    <PricingToggle tiers={pricingTiers} supportFeatures={supportFeatures}>
                        <h2 className="text-4xl md:text-5xl font-bold">Ready to Build a Better Product?</h2>
                        <p className="text-gray-300 mt-2 max-w-2xl mx-auto">Choose a design package that suits your needs. We provide flexible options for businesses at any stage.</p>
                    </PricingToggle>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="w-full py-20 md:py-24 bg-gradient-to-r from-[#d1d5db] via-[#6b7280] to-[#374151]">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="flex flex-col space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-800">Free Consultation - Discuss Your UX Needs</h2>
                                <p className="mt-4 max-w-2xl text-gray-700">
                                    Let's talk about how we can improve your product's user experience. Our experts will provide a free analysis and tailored recommendations.
                                </p>
                            </div>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <Mail className="w-6 h-6 text-gray-800" />
                                    <a href="mailto:sulzax0@gmail.com" className="text-lg text-gray-700 hover:text-gray-800 transition-colors">sulzax0@gmail.com</a>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Phone className="w-6 h-6 text-gray-800" />
                                    <a href="tel:03045865181" className="text-lg text-gray-700 hover:text-gray-800 transition-colors">03045865181</a>
                                </div>
                                <div className="flex items-center gap-4">
                                    <MapPin className="w-6 h-6 text-gray-800" />
                                    <div>
                                        <p className="text-lg text-gray-700">5 South Forge Lane Cherry Hill, NJ 08002</p>
                                        <a href="#" className="text-sm text-gray-800 hover:underline">Open map</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full max-w-md mx-auto">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

