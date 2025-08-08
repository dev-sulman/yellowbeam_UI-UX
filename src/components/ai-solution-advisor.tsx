'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { getSolutionRecommendations, type SolutionRecommendation } from '@/ai/flows/solution-advisor';

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Lightbulb, Package, DollarSign, AlertCircle } from 'lucide-react';

const FormSchema = z.object({
  businessNeeds: z.string().min(50, 'Please describe your business needs in at least 50 characters.'),
});

type FormValues = z.infer<typeof FormSchema>;

function SolutionCard({ solution }: { solution: SolutionRecommendation }) {
  return (
    <Card className="flex flex-col bg-secondary/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Package className="w-6 h-6 text-primary" />
          {solution.solutionName}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{solution.description}</p>
      </CardContent>
      <CardFooter className="bg-secondary p-4 rounded-b-lg mt-4">
        <div className="flex items-center font-semibold">
          <DollarSign className="w-5 h-5 mr-2 text-accent" />
          Estimated Budget: {solution.estimatedBudget}
        </div>
      </CardFooter>
    </Card>
  );
}

function LoadingSkeleton() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {[...Array(2)].map((_, i) => (
        <Card key={i} className="bg-secondary/50">
          <CardHeader>
            <Skeleton className="h-6 w-3/4 bg-muted" />
          </CardHeader>
          <CardContent className="space-y-2">
            <Skeleton className="h-4 w-full bg-muted" />
            <Skeleton className="h-4 w-full bg-muted" />
            <Skeleton className="h-4 w-5/6 bg-muted" />
          </CardContent>
          <CardFooter>
            <Skeleton className="h-8 w-1/2 bg-muted" />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default function AiSolutionAdvisor() {
  const [recommendations, setRecommendations] = useState<SolutionRecommendation[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: { businessNeeds: '' },
  });

  async function onSubmit(data: FormValues) {
    setIsLoading(true);
    setError(null);
    setRecommendations([]);

    try {
      const result = await getSolutionRecommendations(data);
      if (result && result.length > 0) {
        setRecommendations(result);
      } else {
        setError('We could not find any suitable solutions. Please try rephrasing your needs.');
      }
    } catch (e) {
      setError('An unexpected error occurred. Please try again later.');
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="w-full shadow-lg border-accent/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="w-6 h-6 text-accent" />
          Your Business Needs
        </CardTitle>
        <CardDescription>
          Tell us about your project, challenges, and goals. The more detail, the better our recommendations.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="businessNeeds"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Business Needs</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., 'We are a growing e-commerce business and need a system to manage our inventory across multiple warehouses, integrate with our Shopify store, and provide sales analytics...'"
                      className="min-h-[150px] text-base focus:ring-accent"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} size="lg" className="w-full font-semibold bg-accent hover:bg-accent/90 text-accent-foreground">
              {isLoading ? 'Analyzing...' : 'Get Recommendations'}
            </Button>
          </form>
        </Form>
      </CardContent>

      {(isLoading || error || recommendations.length > 0) && (
        <CardFooter className="flex-col items-start gap-4 pt-6 border-t">
          {isLoading && <LoadingSkeleton />}
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          {recommendations.length > 0 && (
            <div className="w-full space-y-4">
              <h3 className="text-xl font-bold">Recommended Solutions</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {recommendations.map((rec, index) => (
                  <SolutionCard key={index} solution={rec} />
                ))}
              </div>
            </div>
          )}
        </CardFooter>
      )}
    </Card>
  );
}
