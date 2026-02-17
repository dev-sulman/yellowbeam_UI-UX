
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Phone, Mail, MapPin, ShieldCheck, Bug, ClipboardCheck, Microscope } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ContactForm } from '@/components/contact-form';
import PricingToggle from '@/components/pricing-toggle';

const services = [
    { title: 'Automated Testing', description: 'Faster, repeatable tests to ensure software reliability and performance.', icon: <Bug /> },
    { title: 'Manual Testing', description: 'Exploratory and functional testing by expert QA engineers.', icon: <ClipboardCheck /> },
    { title: 'Performance Testing', description: 'Ensuring your application handles high traffic with ease.', icon: <Microscope /> },
    { title: 'Security Audits', description: 'Identifying vulnerabilities to protect your data and users.', icon: <ShieldCheck /> },
];

const whyChooseUsPoints = [
    { title: 'Reduced Time-to-Market', description: 'Efficient QA processes that speed up your release cycles.' },
    { title: 'Higher Software Quality', description: 'Eliminating bugs and ensuring a seamless user experience.' },
    { title: 'Technical Expertise', description: 'Our QA team uses the latest tools and methodologies.' },
]

const values = [
    { title: 'Quality First', description: 'We believe that quality is the foundation of any successful software product.' },
    { title: 'Precision & Detail', description: 'Our testers leave no stone unturned in finding and fixing issues.' },
    { title: 'Integrity', description: 'We provide honest reporting and transparent feedback on your software status.' },
    { title: 'Continuous Improvement', description: 'We help you improve your development processes over time.' }
];

const pricingTiers = {
    monthly: [
        {
            name: 'QA Audit',
            price: '$1,999',
            period: '/one-time',
            features: [
                'Test Plan Creation',
                'Heuristic Evaluation',
                'Critical Bug Identification',
                'Performance Overview',
                'Final QA Report',
                '1-week Support'
            ],
            buttonText: 'Get Audit',
            popular: false,
        },
        {
            name: 'Managed QA',
            price: '$3,499',
            period: '/month',
            features: [
                'Full Test Automation',
                'Continuous Manual Testing',
                'Integration with CI/CD',
                'Performance Monitoring',
                'Security Vulnerability Checks',
                'Dedicated QA Lead'
            ],
            buttonText: 'Start Testing',
            popular: true,
        }
    ],
    yearly: [
        {
            name: 'QA Audit',
            price: '$1,999',
            period: '/one-time',
            features: [
                'Test Plan Creation',
                'Heuristic Evaluation',
                'Critical Bug Identification',
                'Performance Overview',
                'Final QA Report',
                '1-week Support'
            ],
            buttonText: 'Get Audit',
            popular: false,
        },
        {
            name: 'Managed QA',
            price: '$37,790',
            period: '/year',
            features: [
                'Full Test Automation',
                'Continuous Manual Testing',
                'Integration with CI/CD',
                'Performance Monitoring',
                'Security Vulnerability Checks',
                'Dedicated QA Lead'
            ],
            buttonText: 'Start Testing',
            popular: true,
        }
    ]
};

const supportFeatures = [
    "JIRA/Trello Integration",
    "Detailed Bug Reports",
    "Regression Testing"
];

export default function SoftwareQAPage() {
    return (
        <div className="bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 bg-gradient-to-r from-[#0f172a] to-[#334155] text-white">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold">Software Quality Assurance</h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">Ensuring your software is reliable, secure, and ready for peak performance.</p>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-20 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary">Zero Tolerance for Bugs</h2>
                            <div className="flex items-center gap-4">
                                <Image src="/three.jpg" alt="QA Lead" width={80} height={80} className="rounded-full" data-ai-hint="professional headshot" />
                                <div>
                                    <p className="font-semibold">Sarah Connor, Head of QA, SulzaX</p>
                                    <p className="text-muted-foreground">"We ensure your code stands up to the toughest tests."</p>
                                </div>
                            </div>
                            <p className="text-muted-foreground">Quality shouldn't be an afterthought. Our dedicated QA team works as an extension of your development process, catching issues early and ensuring your final product is rock-solid.</p>
                            <Button asChild>
                                <Link href="/about">About Us</Link>
                            </Button>
                        </div>
                        <div>
                            <Image src="/why-choose-us.png" alt="QA testing process" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="qa testing dashboard" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 md:py-24 bg-secondary/30">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Our QA Services</h2>
                        <p className="mt-2 text-muted-foreground">From automated scripts to detailed manual audits.</p>
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

            {/* Why Choose Us Section */}
            <section className="py-20 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <Image src="/aim.png" alt="QA analytics" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="qa data analysis" />
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary">Why Choose Our QA Team?</h2>
                            <p className="text-muted-foreground">We help businesses release better software, faster. Our approach focuses on both high-level strategy and granular testing execution.</p>
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
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 md:py-24 bg-gradient-to-r from-slate-500 to-slate-400 text-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold">Our Commitment to Excellence</h2>
                        <p className="mt-2 text-slate-200">The standards we uphold in every project.</p>
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
                        <h2 className="text-4xl md:text-5xl font-bold">QA Engagement Plans</h2>
                        <p className="text-gray-300 mt-2 max-w-2xl mx-auto">Whether you need a one-time audit or continuous testing, we have a plan that fits your development cycle.</p>
                    </PricingToggle>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 md:py-24 bg-gradient-to-r from-[#d1d5db] via-[#6b7280] to-[#374151]">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="flex flex-col space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-800">Free QA Consultation</h2>
                                <p className="mt-4 max-w-2xl text-gray-700">
                                    Discuss your software quality needs with our experts. We'll help you identify gaps in your testing process and provide a roadmap to reliability.
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
