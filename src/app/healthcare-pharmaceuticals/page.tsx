
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Award, Star, Phone, Mail, MapPin, Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ContactForm } from '@/components/contact-form';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import PricingToggle from '@/components/pricing-toggle';

const services = [
    { title: 'EHR/EMR Systems', description: 'Development and integration of Electronic Health/Medical Record systems.' },
    { title: 'Telemedicine Platforms', description: 'Secure and HIPAA-compliant platforms for remote patient care.' },
    { title: 'Pharmaceutical Software', description: 'Custom software for drug discovery, clinical trials, and supply chain management.' },
    { title: 'Healthcare Analytics', description: 'Data analytics solutions to improve patient outcomes and operational efficiency.' },
];

const teamMembers = [
    {
        name: 'Dr. Emily Carter',
        role: 'Chief Medical Officer, HealthForward',
        avatar: 'https://images.unsplash.com/profile-1753579092976-a27783e34e90image?w=32&dpr=1&crop=faces&bg=%23fff&h=32&auto=format&fit=crop&q=60&ixlib=rb-4.1.0/100x100.png',
        'data-ai-hint': 'professional headshot',
        testimonial: 'SulzaX developed a telemedicine platform that has been a game-changer for our practice.'
    },
    {
        name: 'David Chen',
        role: 'Director of Pharmacy, WellRx',
        avatar: 'https://images.unsplash.com/profile-1520262191045-ab3b9c257971?w=32&dpr=1&crop=faces&bg=%23fff&h=32&auto=format&fit=crop&q=60&ixlib=rb-4.0.3/100x100.png',
        'data-ai-hint': 'professional headshot',
        testimonial: 'Their custom software has streamlined our inventory management and improved our efficiency.'
    },
];

const whyChooseUsPoints = [
    { title: 'Industry Compliance', description: 'Expertise in HIPAA, FDA, and other healthcare regulations.' },
    { title: 'Patient-Centric Design', description: 'We design solutions with the patient experience in mind.' },
    { title: 'Data Security', description: 'Robust security measures to protect sensitive patient data.' },
]

const values = [
    { title: 'Patient Privacy', description: 'We are committed to protecting patient privacy and ensuring compliance with all healthcare regulations.' },
    { title: 'Innovation in Care', description: 'We leverage technology to create innovative solutions that improve patient care and outcomes.' },
    { title: 'Reliability', description: 'We build reliable and robust systems that healthcare professionals can depend on.' },
    { title: 'Collaboration', description: 'We work in close partnership with healthcare providers to understand their needs and deliver effective solutions.' }
];

const pricingTiers = {
    monthly: [
        {
            name: 'Practice Essentials',
            price: '$499.00',
            period: '/ per month',
            features: [
                'HIPAA-Compliant Hosting',
                'Basic EMR Integration',
                'Telemedicine (up to 10 users)',
                'Technical Support (8x5)',
                'Monthly Security Scans'
            ],
            buttonText: 'Choose Plan',
            popular: false,
        },
        {
            name: 'Clinical Suite',
            price: '$1299.00',
            period: '/ per month',
            features: [
                'Advanced EMR/EHR System',
                'Full Telemedicine Platform',
                'Healthcare Analytics Dashboard',
                '24/7 Technical Support',
                'Quarterly Compliance Audits'
            ],
            buttonText: 'Choose Plan',
            popular: true,
        }
    ],
    yearly: [
        {
            name: 'Practice Essentials',
            price: '$5389.20',
            period: '/ per year',
            features: [
                'HIPAA-Compliant Hosting',
                'Basic EMR Integration',
                'Telemedicine (up to 10 users)',
                'Technical Support (8x5)',
                'Monthly Security Scans'
            ],
            buttonText: 'Choose Plan',
            popular: false,
        },
        {
            name: 'Clinical Suite',
            price: '$14029.20',
            period: '/ per year',
            features: [
                'Advanced EMR/EHR System',
                'Full Telemedicine Platform',
                'Healthcare Analytics Dashboard',
                '24/7 Technical Support',
                'Quarterly Compliance Audits'
            ],
            buttonText: 'Choose Plan',
            popular: true,
        }
    ]
};

const supportFeatures = [
    "Dedicated Healthcare IT Specialist",
    "24/7 Priority Support",
    "Regular System Updates"
];

export default function HealthcarePage() {
    return (
        <div className="bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 bg-secondary/30">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-primary">Healthcare & Pharmaceuticals</h1>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">Providing specialized IT solutions for the healthcare and pharmaceutical industries, ensuring compliance, security, and innovation.</p>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-20 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary">Innovating for Better Health Outcomes</h2>
                            <div className="flex items-center gap-4">
                                <Image src="https://cdn.dribbble.com/users/2808548/avatars/small/a1f9508173de6f2eaa0fe427784a98ae.jpg?1571559169/80x80.png" alt="Dr. Sarah Johnson" width={80} height={80} className="rounded-full" data-ai-hint="professional headshot doctor" />
                                <div>
                                    <p className="font-semibold">Dr. Sarah Johnson, Chief Innovation Officer, SulzaX Health</p>
                                    <p className="text-muted-foreground">"Technology has the power to transform healthcare."</p>
                                </div>
                            </div>
                            <p className="text-muted-foreground">We are dedicated to developing cutting-edge IT solutions for the healthcare and pharmaceutical sectors. From telemedicine platforms to EMR systems, we build technology that improves lives.</p>
                            <Button asChild>
                                <Link href="/about">About Us</Link>
                            </Button>
                        </div>
                        <div>
                            <Image src="https://cdn.dribbble.com/userupload/18403664/file/original-4a9be44a4d507faa2f18961974ebeafd.png?resize=1024x768&vertical=center/600x400.png" alt="Doctor using a tablet" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="doctor tablet healthcare" />
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Services Section */}
            <section className="py-20 md:py-24 bg-secondary/30">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Healthcare & Pharma Services</h2>
                        <p className="mt-2 text-muted-foreground">Compliant and innovative solutions for the health sector.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map(service => (
                            <Card key={service.title} className="text-center p-6">
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
                            <Image src="https://cdn.dribbble.com/userupload/43326704/file/original-88944b21ab01ac8dbc601fe4571d2fc6.jpg?resize=1024x4391&vertical=center/600x400.png" alt="Scientist in a lab" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="pharmaceutical lab scientist" />
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary">Your Partner in HealthTech</h2>
                            <p className="text-muted-foreground">At SulzaX, we combine deep industry knowledge with technical expertise to deliver solutions that meet the unique challenges of the healthcare and pharmaceutical industries.</p>
                            <div className="flex gap-8">
                                <div>
                                    <p className="text-4xl font-bold text-accent">100%</p>
                                    <p className="text-muted-foreground">HIPAA Compliance</p>
                                </div>
                                <div>
                                    <p className="text-4xl font-bold text-accent">50+</p>
                                    <p className="text-muted-foreground">Health Systems Deployed</p>
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
                            <h2 className="text-3xl md:text-4xl font-bold text-primary">Why Choose SulzaX for HealthTech?</h2>
                            <p className="text-muted-foreground">We provide secure, compliant, and innovative technology solutions tailored to the needs of the healthcare and pharmaceutical industries.</p>
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
                            <Image src="https://images.unsplash.com/photo-1621857093087-7daa85ab14a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2ViJTIwZGV2ZWxvcGVyfGVufDB8fDB8fHww/600x400.png" alt="Secure data server for healthcare" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="secure data healthcare" />
                        </div>
                    </div>
                </div>
            </section>

             {/* Values Section */}
            <section className="py-20 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Core Values</h2>
                        <p className="mt-2 text-muted-foreground">The principles that guide our work in the health sector.</p>
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
                        <h2 className="text-4xl md:text-5xl font-bold text-black">HealthTech Solution Plans</h2>
                        <p className="text-black">Choose a plan that fits your practice or organization's needs. We offer scalable solutions for the healthcare industry.</p>
                    </PricingToggle>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="flex flex-col space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Free Consultation - Discover HealthTech Solutions</h2>
                                <p className="mt-4 max-w-2xl text-muted-foreground">
                                    Let's discuss how our technology solutions can improve your practice or pharmaceutical operations. Schedule a free, no-obligation consultation today.
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

    
