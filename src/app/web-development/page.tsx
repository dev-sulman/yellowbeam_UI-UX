import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Award, Star, Phone, Mail, MapPin, Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ContactForm } from '@/app/actions/contact';

const services = [
    { title: 'Custom Web Design', description: 'Unique designs that capture your brand identity.' },
    { title: 'E-commerce Solutions', description: 'Robust online stores to sell your products.' },
    { title: 'CMS Development', description: 'Easy-to-manage websites with powerful CMS.' },
    { title: 'Web Applications', description: 'Powerful applications to run your business online.' },
];

const teamMembers = [
    {
        name: 'Alexander Ball',
        role: 'CEO Digital Avitex',
        avatar: '/two.jpg',
        'data-ai-hint': 'professional headshot',
        testimonial: 'SulzaX exceeded our expectations with their web development solutions. Highly recommended!'
    },
    {
        name: 'Izabel Watt',
        role: 'UI UX Design TechX',
        avatar: 'four.jpg',
        'data-ai-hint': 'professional headshot',
        testimonial: 'The team at SulzaX is professional, responsive, and delivered a fantastic website for our company.'
    },
];

const whyChooseUsPoints = [
    { title: 'Efficient Technical Support', description: 'Quick and effective resolution of technical issues.' },
    { title: 'Enhanced Productivity', description: 'Time saved through prompt guidance.' },
    { title: 'Minimized Incidents', description: 'Consistent support to minimize disruptions.' },
]

const values = [
    { title: 'Customer Centricity', description: 'Our clients are our priority. We listen to their needs, understand their challenges, and work tirelessly to deliver IT solutions that meet and exceed their expectations. Their success is our success.' },
    { title: 'Quality Assurance', description: 'We have a relentless commitment to quality. We set high standards and rigorously test and monitor our IT services to ensure they meet those standards. Quality is non-negotiable.' },
    { title: 'Client Focus', description: 'Our clients are the center of our IT universe. We listen to their needs, provide tailored solutions, and stand by them every step of the way. Their success is our success, excellence, integrity.' },
    { title: 'Integrity Always', description: 'Integrity is the foundation of trust. We operate with complete transparency, ensuring the highest ethical standards in all our IT operations. Our clients rely on us for honesty and fairness.' }
];

export default function WebDevelopmentPage() {
    return (
        <div className="bg-background text-foreground font-body text-base">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 bg-secondary/30">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-primary">Web Development</h1>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">Your website is a tool that should be used in order to draw traffic, convert traffic into customers, and maintain the relationship you have with your customers.</p>
                </div>
            </section>

            {/* History Section */}
            <section className="container mx-auto px-4 md:px-6 py-20 md:py-24">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">100 Years Of History Serving The Poconos Region</h2>
                        <div className="flex items-center gap-4">
                            <Image src="https://cdn.dribbble.com/users/3562273/avatars/small/0c694d76da8cc6696453f2c301fe51f3.jpg?1744785508/80x80.png" alt="Tony Nguyen" width={80} height={80} className="rounded-full" data-ai-hint="professional headshot" />
                            <div>
                                <p className="font-semibold">Tony Nguyen, CEO, SulzaX</p>
                                <p className="text-muted-foreground">"Unlock your business potential today!"</p>
                            </div>
                        </div>
                        <p className="text-muted-foreground">Supported by experienced web development experts, we focus on creating beautiful, functional websites that drive results. We build stable, scalable platforms and ensure your digital presence is secure and effective.</p>
                        <Button asChild>
                            <Link href="/about">About Us</Link>
                        </Button>
                    </div>
                    <div>
                        <Image src="https://images.unsplash.com/photo-1669023414180-4dcf35d943e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww/600x400.png" alt="Team discussing web design" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="web design meeting" />
                    </div>
                </div>
            </section>
            
            {/* Services Section */}
            <section className="py-20 md:py-24 bg-secondary/30">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Services</h2>
                        <p className="mt-2 text-muted-foreground">Trusted by specialists all around the world</p>
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
            <section className="container mx-auto px-4 md:px-6 py-20 md:py-24">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                         <Image src="https://images.unsplash.com/photo-1554902843-260acd0993f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D/600x400.png" alt="Team working on code" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="team coding" />
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Simplify Tech Challenges with Our Responsive Development Team</h2>
                        <p className="text-muted-foreground">Welcome to SulzaX, your trusted companion in the realm of IT services. We take pride in being a dedicated partner, committed to delivering state-of-the-art solutions that propel the future of your business.</p>
                        <div className="flex gap-8">
                            <div>
                                <p className="text-4xl font-bold text-accent">20</p>
                                <p className="text-muted-foreground">Years experience</p>
                            </div>
                            <div>
                                <p className="text-4xl font-bold text-accent">1.8k</p>
                                <p className="text-muted-foreground">Happy customers</p>
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
                <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Elevate Productivity with Our Expert Web Services</h2>
                         <p className="text-muted-foreground">Welcome to SulzaX, your trusted companion in the realm of IT services. We are committed to delivering state-of-the-art solutions.</p>
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
                        <Image src="https://images.unsplash.com/photo-1556565681-67b9cd907d20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D/600x400.png" alt="Website analytics" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="website analytics" />
                    </div>
                </div>
            </section>

             {/* Values Section */}
            <section className="container mx-auto px-4 md:px-6 py-20 md:py-24">
                <div>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Journey Through Time</h2>
                        <p className="mt-2 text-muted-foreground">Discover exceptional experiences through testimonials from our satisfied customers.</p>
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
                     <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">Outstanding Customer Service Recognition</h2>
                     <div className="flex justify-center items-center flex-wrap gap-8">
                        {[...Array(5)].map((_, i) => (
                             <Image key={i} src="https://images.unsplash.com/photo-1713947503588-8ff8196dc4a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIxfHx8ZW58MHx8fHx8/120x120.png" alt="Award" width={120} height={120} data-ai-hint="award trophy" />
                        ))}
                     </div>
                </div>
            </section>

             {/* Testimonials Section */}
            <section className="container mx-auto px-4 md:px-6 py-20 md:py-24">
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

            {/* Contact Section */}
            <section className="container mx-auto px-4 md:px-6 py-20 md:py-24">
                 <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Free Consultation - Discover Web Solutions</h2>
                            <p className="mt-4 max-w-2xl text-muted-foreground">
                                Unlock the full potential of your business with our free consultation. Our expert team will assess your web needs, recommend tailored solutions, and chart a path to success.
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
            </section>
        </div>
    )
}
