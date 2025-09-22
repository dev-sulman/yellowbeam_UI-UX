
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Phone, Mail, MapPin, Check, ThumbsUp, Users, BarChart, FileSignature } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ContactForm } from '@/components/contact-form';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import PricingToggle from '@/components/pricing-toggle';

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
        avatar: 'https://cdn.dribbble.com/users/124059/avatars/small/d3ea2de59812eb0062ed2258fccd71d6.jpg?1501076695/100x100.png',
        'data-ai-hint': 'professional headshot',
        testimonial: 'SulzaX took our social media presence to the next level. Our engagement and follower growth have been incredible.'
    },
    {
        name: 'Jason Chen',
        role: 'Founder of StyleSavvy',
        avatar: 'https://cdn.dribbble.com/users/8427991/avatars/normal/2d630ea0fd16c841881d23386c4fa850.jpg?1625395574/100x100.png',
        'data-ai-hint': 'professional headshot',
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
            period: '/month',
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
            period: '/month',
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
            period: '/year',
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
            period: '/year',
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
    "Dedicated Account Manager",
    "Monthly Strategy Calls",
    "Custom Performance Dashboard"
];

export default function SocialMediaPage() {
    return (
        <div className="bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 bg-secondary/30">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-primary">Social Media Marketing</h1>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">Building brand awareness, driving engagement, and generating leads through strategic social media campaigns.</p>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-20 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary">Connecting Brands with Audiences</h2>
                            <div className="flex items-center gap-4">
                                <Image src="/three.jpg" alt="Sarah Johnson" width={80} height={80} className="rounded-full" data-ai-hint="professional headshot" />
                                <div>
                                    <p className="font-semibold">Sarah Johnson, Head of Social, SulzaX</p>
                                    <p className="text-muted-foreground">"Let's make your brand the talk of the town."</p>
                                </div>
                            </div>
                            <p className="text-muted-foreground">We help businesses build and manage a strong social media presence. From content creation to community engagement, we've got you covered.</p>
                            <Button asChild>
                                <Link href="/about">About Us</Link>
                            </Button>
                        </div>
                        <div>
                            <Image src="https://cdn.dribbble.com/userupload/2946837/file/original-d39c0712a8614605c89c54529a2859ee.png?format=webp&resize=400x300&vertical=center/600x400.png" alt="Social media campaign concept" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="social media ideas" />
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Services Section */}
            <section className="py-20 md:py-24 bg-secondary/30">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Social Media Services</h2>
                        <p className="mt-2 text-muted-foreground">A holistic approach to social media management.</p>
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
                            <Image src="https://cdn.dribbble.com/userupload/2946839/file/original-f361d35f4a9a17a0b370dd6e3150f342.png?format=webp&resize=400x300&vertical=center/600x400.png" alt="Social media marketing team" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="social media marketing team" />
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary">Your Partner in Social Media</h2>
                            <p className="text-muted-foreground">At SulzaX, we are passionate about the power of social media. We combine strategic thinking with creative flair to create campaigns that engage audiences and drive results.</p>
                            <div className="flex gap-8">
                                <div>
                                    <p className="text-4xl font-bold text-accent">1M+</p>
                                    <p className="text-muted-foreground">Followers Reached</p>
                                </div>
                                <div>
                                    <p className="text-4xl font-bold text-accent">500+</p>
                                    <p className="text-muted-foreground">Campaigns Launched</p>
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
                            <h2 className="text-3xl md:text-4xl font-bold text-primary">Why Choose SulzaX for Social Media?</h2>
                            <p className="text-muted-foreground">We deliver measurable results through strategic social media campaigns tailored to your business goals.</p>
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
                            <Image src="https://cdn.dribbble.com/userupload/3491080/file/original-a14e5336b810c4370db4f42a30e5ae3c.png?format=webp&resize=400x300&vertical=center/600x400.png" alt="Social media analytics dashboard" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="social media data chart" />
                        </div>
                    </div>
                </div>
            </section>

             {/* Values Section */}
            <section className="py-20 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Social Media Values</h2>
                        <p className="mt-2 text-muted-foreground">The principles that guide our social media strategies.</p>
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
                        <h2 className="text-4xl md:text-5xl font-bold text-primary">Ignite Your Social Media Presence</h2>
                        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Choose a social media package that fits your needs. We offer transparent pricing for businesses of all sizes.</p>
                    </PricingToggle>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 md:py-24">
                 <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="flex flex-col space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Free Consultation - Discover Your Social Strategy</h2>
                                <p className="mt-4 max-w-2xl text-muted-foreground">
                                    Let's discuss your social media goals and develop a tailored strategy to connect with your audience.
                                </p>
                            </div>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <Mail className="w-6 h-6 text-accent" />
                                    <a href="mailto:sulzax0@gmail.com" className="text-lg hover:text-accent transition-colors">sulzax0@gmail.com</a>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Phone className="w-6 h-6 text-accent" />
                                    <a href="tel:03045865181" className="text-lg hover:text-accent transition-colors">03045865181</a>
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
