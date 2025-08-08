'use server';

/**
 * @fileOverview AI-powered IT solution advisor flow.
 *
 * - getSolutionRecommendations - A function that provides tailored IT solution recommendations based on user input.
 * - SolutionAdvisorInput - The input type for the getSolutionRecommendations function.
 * - SolutionRecommendation - The return type for the getSolutionRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SolutionAdvisorInputSchema = z.object({
  businessNeeds: z
    .string()
    .describe('A detailed description of the business needs and requirements.'),
});
export type SolutionAdvisorInput = z.infer<typeof SolutionAdvisorInputSchema>;

const SolutionRecommendationSchema = z.object({
  solutionName: z.string().describe('The name of the recommended IT solution.'),
  description: z
    .string()
    .describe('A detailed description of the IT solution and its benefits.'),
  estimatedBudget: z
    .string()
    .describe('The estimated budget for implementing the IT solution.'),
});

export type SolutionRecommendation = z.infer<typeof SolutionRecommendationSchema>;

export async function getSolutionRecommendations(input: SolutionAdvisorInput): Promise<SolutionRecommendation[]> {
  return solutionAdvisorFlow(input);
}

const solutionAdvisorPrompt = ai.definePrompt({
  name: 'solutionAdvisorPrompt',
  input: {schema: SolutionAdvisorInputSchema},
  output: {schema: z.array(SolutionRecommendationSchema).describe('Array of IT solution recommendations')},
  prompt: `You are an IT solutions expert at SulzaX IT Services. A user will describe their business needs, and you should provide a list of tailored IT solution recommendations with estimated budgets. Consider SulzaX's project portfolio and expertise when making recommendations.

Business Needs: {{{businessNeeds}}}

Respond with a JSON array of IT solution recommendations, including the solution name, a detailed description, and an estimated budget.
`,
});

const solutionAdvisorFlow = ai.defineFlow(
  {
    name: 'solutionAdvisorFlow',
    inputSchema: SolutionAdvisorInputSchema,
    outputSchema: z.array(SolutionRecommendationSchema),
  },
  async input => {
    const {output} = await solutionAdvisorPrompt(input);
    return output!;
  }
);
