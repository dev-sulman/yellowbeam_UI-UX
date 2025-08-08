
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "The Future of Web Development in 2024",
    category: "Web Development",
    date: "October 26, 2023",
    author: "John Doe",
    excerpt: "Exploring the latest trends and technologies shaping the future of web development, from AI-powered tools to serverless architectures.",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "web development future",
    href: "#"
  },
  {
    title: "Why Your Business Needs a Mobile App",
    category: "Mobile Development",
    date: "October 22, 2023",
    author: "Jane Smith",
    excerpt: "A deep dive into the benefits of having a dedicated mobile application for your business in today's mobile-first world.",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "mobile app business",
    href: "#"
  },
   {
    title: "Mastering UI/UX: A Guide for Beginners",
    category: "UI/UX Design",
    date: "October 18, 2023",
    author: "Michael Brown",
    excerpt: "An introductory guide to the principles of UI/UX design, with practical tips for creating user-friendly digital products.",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "ui ux design guide",
    href: "#"
  },
  {
    title: "The Ultimate Guide to SEO in 2024",
    category: "SEO",
    date: "October 15, 2023",
    author: "Emily White",
    excerpt: "A comprehensive guide to the latest SEO strategies and techniques to boost your website's ranking on Google.",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "seo guide 2024",
    href: "#"
  },
];

export default function BlogPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Our Blog</h1>
        <p className="mt-4 max-w-2xl text-xl text-muted-foreground">
          Insights, trends, and news from the world of technology and design.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Card key={post.title} className="overflow-hidden group hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <Link href={post.href} className="block">
                <div className="overflow-hidden">
                    <Image
                        src={post.image}
                        alt={post.title}
                        width={600}
                        height={400}
                        data-ai-hint={post.dataAiHint}
                        className="group-hover:scale-105 transition-transform duration-500 object-cover"
                    />
                </div>
            </Link>
            <CardContent className="p-6 flex flex-col flex-grow">
              <div className="mb-4">
                <Badge variant="secondary" className="mr-2">{post.category}</Badge>
                <span className="text-sm text-muted-foreground">{post.date}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-muted-foreground text-sm flex-grow">{post.excerpt}</p>
              <div className="mt-4 flex justify-between items-center">
                <p className="text-sm font-medium">By {post.author}</p>
                <Link href={post.href} className="text-sm font-semibold text-accent hover:underline flex items-center">
                  Read more <ArrowRight className="inline-block ml-1 h-4 w-4" />
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
