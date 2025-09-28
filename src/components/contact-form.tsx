'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  subject: z.string().min(2, 'Subject must be at least 2 characters.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
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
    <Card className="shadow-xl border-border/20 bg-white">
      <CardContent className="p-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField name="name" control={form.control} render={({ field }) => (
                  <FormItem><FormControl><Input placeholder="Name" {...field} className="bg-secondary/50 border-0 h-12 focus:ring-accent" /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField name="subject" control={form.control} render={({ field }) => (
                  <FormItem><FormControl><Input placeholder="Subject" {...field} className="bg-secondary/50 border-0 h-12 focus:ring-accent" /></FormControl><FormMessage /></FormItem>
                )} />
            </div>
            
            <FormField name="email" control={form.control} render={({ field }) => (
              <FormItem><FormControl><Input placeholder="Email" {...field} className="bg-secondary/50 border-0 h-12 focus:ring-accent"/></FormControl><FormMessage /></FormItem>
            )} />

            <FormField name="message" control={form.control} render={({ field }) => (
              <FormItem><FormControl><Textarea placeholder="Your Questions..." className="min-h-[120px] bg-secondary/50 border-0 focus:ring-accent" {...field} /></FormControl><FormMessage /></FormItem>
            )} />

            <Button type="submit" size="lg" className="w-full font-semibold bg-accent hover:bg-accent/90 text-accent-foreground h-12" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
