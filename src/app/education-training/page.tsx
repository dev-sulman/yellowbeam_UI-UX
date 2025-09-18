
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
    { title: 'Learning Management Systems (LMS)', description: 'Custom LMS platforms for creating, delivering, and tracking educational content.' },
    { title: 'E-Learning & Virtual Classrooms', description: 'Interactive e-learning modules and virtual classroom solutions for remote learning.' },
    { title: 'Student Information Systems (SIS)', description: 'Systems for managing student data, admissions, enrollment, and grades.' },
    { title: 'Educational Apps & Games', description: 'Engaging and educational mobile apps and games for students of all ages.' },
];

const teamMembers = [
    {
        name: 'Maria Garcia',
        role: 'Principal, Oakwood Academy',
        avatar: 'https://picsum.photos/seed/edu1/100/100',
        'data-ai-hint': 'professional headshot',
        testimonial: 'SulzaX developed an LMS that has transformed how we deliver our curriculum. It\'s intuitive for both teachers and students.'
    },
    {
        name: 'Dr. David Lee',
        role: 'Dean of Online Learning, City University',
        avatar: 'https://picsum.photos/seed/edu2/100/100',
        'data-ai-hint': 'professional headshot',
        testimonial: 'Their virtual classroom solution has been essential for our distance learning programs. The quality and reliability are excellent.'
    },
];

const whyChooseUsPoints = [
    { title: 'Experience in Education', description: 'We have a proven track record of developing successful technology solutions for education.' },
    { title: 'Focus on Engagement', description: 'We design solutions that are engaging and effective for modern learners.' },
    { title: 'Scalable & Secure', description: 'Our platforms are scalable to support growing institutions and secure to protect student data.' },
]

const values = [
    { title: 'Accessibility', description: 'We are committed to creating accessible learning experiences for all students, regardless of their abilities or location.' },
    { title: 'Lifelong Learning', description: 'We believe in the power of technology to support lifelong learning and personal development.' },
    { title: 'Teacher Empowerment', description: 'We build tools that empower teachers to create engaging and effective learning experiences.' },
    { title: 'Student Success', description: 'Our ultimate goal is to create technology that helps students succeed in their educational journey.' }
];

const pricingTiers = {
    monthly: [
        {
            name: 'Classroom Plus',
            price: '$299.00',
            period: '/ per month',
            features: [
                'Basic LMS',
                'Virtual Classroom (up to 50 users)',
                'Content Authoring Tools',
                'Standard Support'
            ],
            buttonText: 'Choose Plan',
            popular: false,
        },
        {
            name: 'Campus Suite',
            price: '$899.00',
            period: '/ per month',
            features: [
                'Advanced LMS with SIS Integration',
                'Unlimited Virtual Classrooms',
                'Custom E-Learning Development',
                'Priority Support & Training'
            ],
            buttonText: 'Choose Plan',
            popular: true,
        }
    ],
    yearly: [
        {
            name: 'Classroom Plus',
            price: '$3229.20',
            period: '/ per year',
            features: [
                'Basic LMS',
                'Virtual Classroom (up to 50 users)',
                'Content Authoring Tools',
                'Standard Support'
            ],
            buttonText: 'Choose Plan',
            popular: false,
        },
        {
            name: 'Campus Suite',
            price: '$9709.20',
            period: '/ per year',
            features: [
                'Advanced LMS with SIS Integration',
                'Unlimited Virtual Classrooms',
                'Custom E-Learning Development',
                'Priority Support & Training'
            ],
            buttonText: 'Choose Plan',
            popular: true,
        }
    ]
};

const supportFeatures = [
    "Dedicated EdTech Specialist",
    "Teacher & Admin Training",
    "Curriculum Integration Support"
];

export default function EducationPage() {
    return (
        <div className="bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 bg-secondary/30">
                <div className="container text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-primary">Education & Training</h1>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">Transforming learning experiences with innovative technology solutions for educational institutions and corporate training.</p>
                </div>
            </section>

            {/* Intro Section */}
            <section className="container py-20 md:py-24">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">The Future of Learning is Here</h2>
                        <div className="flex items-center gap-4">
                            <Image src="https://picsum.photos/seed/edu3/80/80" alt="Dr. Evelyn Reed" width={80} height={80} className="rounded-full" data-ai-hint="professional headshot professor" />
                            <div>
                                <p className="font-semibold">Dr. Evelyn Reed, Head of EdTech, SulzaX</p>
                                <p className="text-muted-foreground">"Empowering educators and inspiring learners through technology."</p>
                            </div>
                        </div>
                        <p className="text-muted-foreground">We specialize in developing cutting-edge educational technology, from learning management systems to interactive e-learning content. Let us help you create the learning environment of the future.</p>
                        <Button asChild>
                            <Link href="/about">About Us</Link>
                        </Button>
                    </div>
                    <div>
                        <Image src="https://picsum.photos/seed/edu4/600/400" alt="Student using a laptop for e-learning" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="elearning student laptop" />
                    </div>
                </div>
            </section>
            
            {/* Services Section */}
            <section className="py-20 md:py-24 bg-secondary/30">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Education & Training Services</h2>
                        <p className="mt-2 text-muted-foreground">Comprehensive solutions for modern learning environments.</p>
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
            <section className="container py-20 md:py-24">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                         <Image src="https://picsum.photos/seed/edu5/600/400" alt="Virtual classroom session" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="virtual classroom" />
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Your Partner in Educational Technology</h2>
                        <p className="text-muted-foreground">At SulzaX, we are passionate about the power of technology to enhance education. We work with schools, universities, and corporations to build learning solutions that are engaging, effective, and accessible.</p>
                        <div className="flex gap-8">
                            <div>
                                <p className="text-4xl font-bold text-accent">1M+</p>
                                <p className="text-muted-foreground">Learners Reached</p>
                            </div>
                            <div>
                                <p className="text-4xl font-bold text-accent">200+</p>
                                <p className="text-muted-foreground">Educational Institutions Served</p>
                            </div>
                        </div>
                        <Button asChild variant="outline">
                            <Link href="/team">Meet our team</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 md:py-24 bg-secondary/30">
                <div className="container grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Why SulzaX for EdTech?</h2>
                         <p className="text-muted-foreground">We provide secure, scalable, and engaging solutions with a deep understanding of the educational landscape.</p>
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
                        <Image src="https://picsum.photos/seed/edu6/600/400" alt="Student engagement analytics" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="education analytics dashboard" />
                    </div>
                </div>
            </section>

             {/* Values Section */}
            <section className="container py-20 md:py-24">
                <div>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Core Values</h2>
                        <p className="mt-2 text-muted-foreground">The principles that guide our work in educational technology.</p>
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
                <div className="container text-center">
                     <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">Award-Winning EdTech Solutions</h2>
                     <div className="flex justify-center items-center flex-wrap gap-8">
                        {[...Array(4)].map((_, i) => (
                             <Image key={i} src={`https://picsum.photos/seed/award${i}/120/120`} alt="Award for EdTech" width={120} height={120} data-ai-hint="award trophy" />
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
                <div className="container">
                    <PricingToggle tiers={pricingTiers} supportFeatures={supportFeatures}>
                        <h2 className="text-4xl md:text-5xl font-bold text-black">EdTech Solution Plans</h2>
                        <p className="text-black">Choose a plan that fits your institution's needs. We offer scalable solutions for schools, universities, and corporate training.</p>
                    </PricingToggle>
                </div>
            </section>

            {/* Contact Section */}
            <section className="container py-20 md:py-24">
                 <div className="px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="flex flex-col space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Free Consultation - Discover EdTech Solutions</h2>
                                <p className="mt-4 max-w-2xl text-muted-foreground">
                                    Let's discuss how our technology can enhance your learning environment. Schedule a free consultation with our EdTech experts.
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
