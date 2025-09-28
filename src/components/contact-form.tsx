'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  phone: z.string().min(10, 'Please enter a valid phone number.'),
  companyEmail: z.string().email('Please enter a valid email address.'),
  company: z.string().min(2, 'Company/Organization must be at least 2 characters.'),
  service: z.string({
    required_error: "Please select a service.",
  }),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

type FormValues = z.infer<typeof formSchema>;

const services = [
    "Financial Planning",
    "Web Development",
    "Mobile Development",
    "Software Development",
    "Graphic Design",
    "UI/UX Development",
    "SEO",
    "Social Media Marketing",
    "PPC Advertising",
    "Content Marketing"
];


export function ContactForm() {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      companyEmail: '',
      company: '',
      message: '',
    },
  });

  async function onSubmit(data: FormValues) {
    console.log(data);
    toast({
      title: "Message Sent! (Simulation)",
      description: "This is a demo. In a real app, your message would be sent.",
    });
    form.reset();
  }

  return (
    <Card className="shadow-xl border-border/20 bg-white w-full max-w-lg mx-auto">
        <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Schedule A Free Consultation</CardTitle>
        </CardHeader>
      <CardContent className="p-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField name="name" control={form.control} render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl><Input placeholder="" {...field} className="bg-white border-gray-300 h-12 focus:ring-accent" /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField name="phone" control={form.control} render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl><Input placeholder="" {...field} className="bg-white border-gray-300 h-12 focus:ring-accent" /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField name="companyEmail" control={form.control} render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Email</FormLabel>
                    <FormControl><Input placeholder="" {...field} className="bg-white border-gray-300 h-12 focus:ring-accent"/></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField name="company" control={form.control} render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company/Organization</FormLabel>
                    <FormControl><Input placeholder="" {...field} className="bg-white border-gray-300 h-12 focus:ring-accent" /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
            
            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How can we help you?</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="h-12 bg-white border-gray-300">
                        <SelectValue placeholder="Financial Planning" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                        {services.map(service => (
                            <SelectItem key={service} value={service}>{service}</SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField name="message" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl><Textarea placeholder="" className="min-h-[120px] bg-white border-gray-300 focus:ring-accent" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />

            <Button type="submit" size="lg" className="w-full font-semibold bg-accent hover:bg-accent/90 text-accent-foreground h-12" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? 'Sending...' : 'Submit'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}