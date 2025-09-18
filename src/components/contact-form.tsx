
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';

const services = [
    "Financial Planning",
    "Custom Software Development",
    "Web Development",
    "Mobile Solutions",
    "UI/UX Design",
    "Cloud Solutions",
    "IT Consulting",
    "Other"
];

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  company: z.string().optional(),
  service: z.string({ required_error: 'Please select a service.' }),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
  phone: z.string().optional(),
  websiteUrl: z.string().url('Please enter a valid URL.').optional().or(z.literal('')),
});

type FormValues = z.infer<typeof formSchema>;

interface ContactFormProps {
    cardTitle?: string;
    cardDescription?: string;
}

export function ContactForm({ cardTitle = "Send us a Message", cardDescription = "We are here to help and answer any question you might have."}: ContactFormProps) {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      message: '',
      phone: '',
      websiteUrl: ''
    },
  });

  const selectedService = form.watch('service');

  async function onSubmit(data: FormValues) {
    // This is a placeholder for form submission.
    // In a real application, you would handle the form submission here.
    console.log(data);
    toast({
      title: "Message Sent! (Simulation)",
      description: "This is a demo. In a real app, your message would be sent.",
    });
    form.reset();
  }

  return (
    <Card className="shadow-lg border-accent/20">
      <CardHeader>
        {cardTitle && <CardTitle className="text-2xl text-primary">{cardTitle}</CardTitle>}
        {cardDescription && <CardDescription>{cardDescription}</CardDescription>}
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField name="name" control={form.control} render={({ field }) => (
              <FormItem><FormLabel>Name</FormLabel><FormControl><Input placeholder="" {...field} className="focus:ring-accent" /></FormControl><FormMessage /></FormItem>
            )} />
            
            <FormField name="phone" control={form.control} render={({ field }) => (
              <FormItem><FormLabel>Phone</FormLabel><FormControl><Input placeholder="" {...field} className="focus:ring-accent"/></FormControl><FormMessage /></FormItem>
            )} />

            <FormField name="email" control={form.control} render={({ field }) => (
              <FormItem><FormLabel>Company Email</FormLabel><FormControl><Input placeholder="" {...field} className="focus:ring-accent"/></FormControl><FormMessage /></FormItem>
            )} />

            <FormField name="company" control={form.control} render={({ field }) => (
              <FormItem><FormLabel>Company/ Organization</FormLabel><FormControl><Input placeholder="" {...field} className="focus:ring-accent"/></FormControl><FormMessage /></FormItem>
            )} />
            
            <FormField name="service" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>How can we help you?</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl><SelectTrigger className="focus:ring-accent"><SelectValue placeholder="Select a service" /></SelectTrigger></FormControl>
                  <SelectContent>
                    {services.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )} />

            {selectedService === 'Web Development' && (
              <FormField name="websiteUrl" control={form.control} render={({ field }) => (
                <FormItem><FormLabel>Current Website URL (Optional)</FormLabel><FormControl><Input placeholder="https://example.com" {...field} className="focus:ring-accent"/></FormControl><FormMessage /></FormItem>
              )} />
            )}

            <FormField name="message" control={form.control} render={({ field }) => (
              <FormItem><FormLabel>Message</FormLabel><FormControl><Textarea placeholder="" className="min-h-[100px] focus:ring-accent" {...field} /></FormControl><FormMessage /></FormItem>
            )} />

            <Button type="submit" size="lg" className="w-full font-semibold bg-accent hover:bg-accent/90 text-accent-foreground" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? 'Submitting...' : 'Submit'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
