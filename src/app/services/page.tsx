import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const servicesData = [
    {
        category: "Custom Software Development",
        description: "Bespoke software solutions crafted to meet your unique business challenges and objectives.",
        items: ["Enterprise Applications", "Workflow Automation", "CRM/ERP Solutions", "API Integrations"]
    },
    {
        category: "Web Development",
        description: "Creating powerful, scalable, and secure web experiences that engage your audience.",
        items: ["Progressive Web Apps", "E-commerce Solutions", "CMS Development", "Web Portals"]
    },
    {
        category: "Mobile Solutions",
        description: "Innovative mobile applications that connect you with your customers on the go.",
        items: ["Cross-platform Apps", "IoT Integration", "AR/VR Experiences", "Mobile Commerce"]
    },
    {
        category: "UI/UX Design",
        description: "Designing intuitive and beautiful interfaces that deliver exceptional user experiences.",
        items: ["User Research", "Wireframing & Prototyping", "Design Systems", "Usability Testing"]
    },
    {
        category: "Cloud Solutions",
        description: "Leveraging the power of the cloud to enhance scalability, security, and performance.",
        items: ["AWS/Azure/GCP", "Cloud Migration", "Serverless Architecture", "DevOps Automation"]
    },
    {
        category: "IT Consulting",
        description: "Strategic guidance to help you navigate the complex technology landscape and drive transformation.",
        items: ["Digital Transformation", "Technology Roadmaps", "Security Audits", "Staff Augmentation"]
    },
];

export default function ServicesPage() {
    return (
        <div className="container py-12 md:py-24">
            <div className="flex flex-col items-center text-center mb-12">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Our Services</h1>
                <p className="mt-4 max-w-2xl text-xl text-muted-foreground">
                    We offer a comprehensive suite of IT services designed to empower your business and drive growth.
                </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {servicesData.map((service) => (
                    <Card key={service.category} className="flex flex-col hover:shadow-xl transition-shadow duration-300 border-accent/20 hover:border-accent">
                        <CardHeader>
                            <CardTitle className="text-2xl text-primary">{service.category}</CardTitle>
                            <CardDescription>{service.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <ul className="space-y-3">
                                {service.items.map((item) => (
                                    <li key={item} className="flex items-center">
                                        <Check className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
