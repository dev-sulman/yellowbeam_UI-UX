import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Phone, Mail, MapPin, Check, Palette, Brush, Layers, PenTool } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ContactForm } from '@/components/contact-form';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import PricingToggle from '@/components/pricing-toggle';

const services = [
    { title: 'Logo & Brand Identity', description: 'Creating memorable logos and complete brand guidelines.', icon: <Palette /> },
    { title: 'Marketing Materials', description: 'Designing stunning brochures, flyers, and digital ads.', icon: <Brush /> },
    { title: 'UI/UX Design', description: 'Crafting intuitive and beautiful user interfaces for web and mobile.', icon: <Layers /> },
    { title: 'Illustration & Icons', description: 'Custom illustrations and icon sets to make your brand unique.', icon: <PenTool /> },
];

const teamMembers = [
    {
        name: 'Emily Carter',
        role: 'Lead Designer at CreativeWorks',
        avatar: '/one.jpg',
        dataAiHint: 'professional headshot',
        testimonial: 'SulzaX transformed our brand identity. Their design sense is impeccable and they are a joy to work with.'
    },
    {
        name: 'David Lee',
        role: 'Marketing Director at Visionary Inc.',
        avatar: '/four.jpg',
        dataAiHint: 'professional headshot',
        testimonial: 'The marketing materials designed by SulzaX have significantly boosted our campaigns. Absolutely brilliant work.'
    },
];

const whyChooseUsPoints = [
    { title: 'Creative & Talented Designers', description: 'Our team is composed of passionate and innovative design professionals.' },
    { title: 'Collaborative Design Process', description: 'We work closely with you to bring your vision to life.' },
    { title: 'Attention to Detail', description: 'We are meticulous about every pixel, ensuring a polished final product.' },
]

const values = [
    { title: 'Creativity', description: 'We thrive on creative challenges, pushing the boundaries of design to deliver unique and impactful visuals that tell your story.' },
    { title: 'Brand Consistency', description: 'We ensure that every design element is consistent with your brand identity, strengthening your market presence and recognition.' },
    { title: 'User-Centered Approach', description: 'Our designs are not just visually appealing, but also intuitive and user-friendly, ensuring a positive experience for your audience.' },
    { title: 'Quality Craftsmanship', description: 'We are dedicated to delivering the highest quality design work, paying close attention to every detail from concept to completion.' }
];

const pricingTiers = {
    monthly: [
        {
            name: 'Essential',
            price: '$799.00',
            period: '/ per month',
            features: [
                'Logo Design',
                'Business Card Design',
                'Social Media Kit',
                '2 Revisions',
                'Stock Photos Included',
                'Email Support'
            ],
            buttonText: 'Choose Plan',
            popular: false,
        },
        {
            name: 'Pro',
            price: '$1999.00',
            period: '/ per month',
            features: [
                'Full Brand Identity',
                'Marketing Materials',
                'UI/UX for 1 Page',
                'Unlimited Revisions',
                'Custom Illustrations',
                'Priority Support'
            ],
            buttonText: 'Choose Plan',
            popular: true,
        }
    ],
    yearly: [
        {
            name: 'Essential',
            price: '$8629.20',
            period: '/ per year',
            features: [
                'Logo Design',
                'Business Card Design',
                'Social Media Kit',
                '2 Revisions',
                'Stock Photos Included',
                'Email Support'
            ],
            buttonText: 'Choose Plan',
            popular: false,
        },
        {
            name: 'Pro',
            price: '$21589.20',
            period: '/ per year',
            features: [
                'Full Brand Identity',
                'Marketing Materials',
                'UI/UX for 1 Page',
                'Unlimited Revisions',
                'Custom Illustrations',
                'Priority Support'
            ],
            buttonText: 'Choose Plan',
            popular: true,
        }
    ]
};

const supportFeatures = [
    "Dedicated Design Lead",
    "Agile & Iterative Design",
    "Transparent Feedback Process"
];

export default function GraphicDesignPage() {
    return (
        <div className="bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 bg-secondary/30">
                <div className="container text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-primary">Graphic Design</h1>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">We work with your company to make sure your brand is positioned as a central signature with a consistent identity displayed across multiple media channels and applications.</p>
                </div>
            </section>

            {/* Intro Section */}
            <section className="container py-20 md:py-24">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Crafting Visual Stories That Connect</h2>
                        <div className="flex items-center gap-4">
                            <Image src="/two.jpg" alt="Laura Chen" width={80} height={80} className="rounded-full" dataAiHint="professional headshot" />
                            <div>
                                <p className="font-semibold">Laura Chen, Head of Design, SulzaX</p>
                                <p className="text-muted-foreground">"Good design is good business."</p>
                            </div>
                        </div>
                        <p className="text-muted-foreground">We are a team of passionate designers who believe in the power of visual communication. We create compelling designs that captivate audiences and elevate brands.</p>
                        <Button asChild>
                            <Link href="/about">About Us</Link>
                        </Button>
                    </div>
                    <div>
                        <Image 
                            src="https://plus.unsplash.com/premium_photo-1720032305135-a87c5e0888b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ3fHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHx8MA%3D%3D" 
                            alt="Design team collaborating" 
                            width={600} 
                            height={400} 
                            className="rounded-lg shadow-lg" 
                            dataAiHint="design team meeting" 
                        />
                    </div>
                </div>
            </section>
            
            {/* Services Section */}
            <section className="py-20 md:py-24 bg-secondary/30">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Design Services</h2>
                        <p className="mt-2 text-muted-foreground">Comprehensive design solutions to meet your brand's needs.</p>
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
                         <Image 
                            src="https://plus.unsplash.com/premium_photo-1688704908992-7429b43db20d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgzfHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHx8MA%3D%3D" 
                            alt="Designer at work" 
                            width={600} 
                            height={400} 
                            className="rounded-lg shadow-lg" 
                            dataAiHint="designer working computer" 
                         />
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Your Creative Partner</h2>
                        <p className="text-muted-foreground">At SulzaX, we blend artistry with strategy. We are dedicated to creating designs that not only look good but also achieve business objectives and resonate with your target audience.</p>
                        <div className="flex gap-8">
                            <div>
                                <p className="text-4xl font-bold text-accent">300+</p>
                                <p className="text-muted-foreground">Brands Transformed</p>
                            </div>
                            <div>
                                <p className="text-4xl font-bold text-accent">1000+</p>
                                <p className="text-muted-foreground">Projects Completed</p>
                            </div>
                        </div>
                        <Button asChild variant="outline">
                            <Link href="/team">Meet our team</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section - ERROR FIXED HERE */}
            <section className="py-20 md:py-24 bg-secondary/30">
                <div className="container grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Why Partner with SulzaX for Design?</h2>
                         <p className="text-muted-foreground">We combine artistic flair with strategic thinking to deliver designs that are not only beautiful but also effective.</p>
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
                        <Image 
                            src="https://plus.unsplash.com/premium_photo-1689700527718-257b67a4abd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk1fHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHx8MA%3D%3D" 
                            alt="Moodboard with design concepts" 
                            width={600} 
                            height={400} 
                            className="rounded-lg shadow-lg" 
                            dataAiHint="design moodboard concepts" 
                        />
                    </div>
                </div>
            </section>

             {/* Values Section */}
            <section className="container py-20 md:py-24">
                <div>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Design Philosophy</h2>
                        <p className="mt-2 text-muted-foreground">The core principles that inspire our creative process.</p>
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
            <section className="container py-20 md:py-24">
                <div>
                    <div className="grid lg:grid-cols-2 gap-8">
                        {teamMembers.map((member) => (
                            <Card key={member.name} className="p-6 flex items-start gap-4">
                                <Image src={member.avatar} alt={member.name} width={80} height={80} className="rounded-full" dataAiHint={member.dataAiHint} />
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
                    <PricingToggle tiers={pricingTiers} supportFeatures={supportFeatures}>
                         <h2 className="text-4xl md:text-5xl font-bold text-black">Ready to Elevate Your Brand?</h2>
                         <p className="text-black">Choose a design package that fits your needs. We offer flexible pricing for businesses of all sizes.</p>
                    </PricingToggle>
                </div>
            </section>

            {/* Contact Section */}
            <section className="container py-20 md:py-24">
                 <div className="px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="flex flex-col space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Free Consultation - Discuss Your Design Needs</h2>
                                <p className="mt-4 max-w-2xl text-muted-foreground">
                                    Let's talk about your design ideas. Our creative team will help you scope your project and bring your vision to life.
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
    );
}