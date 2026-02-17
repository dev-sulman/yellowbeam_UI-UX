
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Phone, Mail, MapPin, Code, Server, Layers, GitBranch } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ContactForm } from '@/components/contact-form';
import PricingToggle from '@/components/pricing-toggle';

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
            period: '/month',
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
            period: '/year (discounted)',
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
    return (
        <div className="bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 bg-gradient-to-r from-[#0f172a] to-[#334155] text-white">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold">Software Development</h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">Custom software development and integration services to meet specific business needs.</p>
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
                            <Image src="/customapp.png" alt="Software architecture diagram" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="software architecture diagram" />
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
                            <Image src="/why-choose-us.png" alt="Developers collaborating" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="team developers meeting" />
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
                            <Image src="/aim.png" alt="Secure data center" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="data center security" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 md:py-24 bg-gradient-to-r from-slate-500 to-slate-400 text-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold">Our Software Development Principles</h2>
                        <p className="mt-2 text-slate-200">The values that drive our engineering culture.</p>
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

            {/* Pricing Section */}
            <section className="py-20 md:py-24 bg-gradient-to-r from-[#0f172a] to-[#334155] text-white">
                <div className="container mx-auto px-4 md:px-6">
                    <PricingToggle tiers={pricingTiers} supportFeatures={supportFeatures}>
                        <h2 className="text-4xl md:text-5xl font-bold">Flexible Engagement Models</h2>
                        <p className="text-gray-300 mt-2 max-w-2xl mx-auto">We offer flexible engagement models to suit your project needs, from fixed-scope projects to dedicated development teams.</p>
                    </PricingToggle>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 md:py-24 bg-gradient-to-r from-[#d1d5db] via-[#6b7280] to-[#374151]">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="flex flex-col space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-800">Free Consultation - Discuss Your Software Project</h2>
                                <p className="mt-4 max-w-2xl text-gray-700">
                                    Let's talk about your software needs. Our experts will help you scope your project and provide a clear path forward.
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
    )
}

