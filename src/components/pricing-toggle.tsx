
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

interface PricingTier {
    name: string;
    price: string;
    period: string;
    features: string[];
    buttonText: string;
    popular: boolean;
}

interface PricingTiers {
    monthly: PricingTier[];
    yearly: PricingTier[];
}

interface PricingToggleProps {
    tiers: PricingTiers;
    supportFeatures: string[];
    children: React.ReactNode;
}

export default function PricingToggle({ tiers, supportFeatures, children }: PricingToggleProps) {
    const [isYearly, setIsYearly] = useState(false);
    const plans = isYearly ? tiers.yearly : tiers.monthly;

    const renderPrice = (price: string) => {
        if (price.toLowerCase() === 'custom' || price.toLowerCase() === 'contact us') {
            return <span className="text-4xl font-bold">{price}</span>;
        }
        const parts = price.split('.');
        return (
            <>
                <span className="text-5xl font-bold">{parts[0]}.</span>
                <span className="text-3xl font-bold">{parts[1]}</span>
            </>
        );
    };

    return (
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
                {children}
                <div className="radio-pricing-toggle">
                    <input 
                        type="radio" 
                        id="monthly" 
                        name="pricing-cycle" 
                        checked={!isYearly} 
                        onChange={() => setIsYearly(false)}
                    />
                    <label htmlFor="monthly">Pay Monthly</label>
                    
                    <input 
                        type="radio" 
                        id="yearly" 
                        name="pricing-cycle" 
                        checked={isYearly} 
                        onChange={() => setIsYearly(true)}
                    />
                    <label htmlFor="yearly">Pay Yearly (Save 10%)</label>
                </div>
                <ul className="space-y-3 pt-4">
                    {supportFeatures.map(feature => (
                        <li key={feature} className="flex items-center gap-3">
                            <Check className="w-5 h-5 text-accent" />
                            <span className="text-black">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
                 {plans.map(tier => (
                    <Card key={tier.name} className={`w-full flex flex-col relative shadow-none border-0 ${tier.popular ? 'bg-card' : 'bg-transparent'}`}>
                        {tier.popular && <Badge className="absolute -top-3 right-4 bg-accent text-accent-foreground">POPULAR</Badge>}
                        <CardHeader className="text-center">
                            <CardTitle className="text-2xl text-black">{tier.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow space-y-6">
                            <div className={cn('text-center', tier.popular ? 'text-black' : 'text-accent')}>
                                {renderPrice(tier.price)}
                                <span className="text-black">{tier.period}</span>
                            </div>
                            <ul className="space-y-3">
                                {tier.features.map(feature => (
                                    <li key={feature} className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-accent" />
                                        <span className="text-black">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <div className="p-6">
                          {tier.popular ? (
                             <Button asChild className="w-full">
                                <a href="#" className="shine-button">
                                    {tier.buttonText}
                                </a>
                             </Button>
                          ) : (
                              <Button asChild className="w-full">
                                <a href="#" className="shine-button">
                                    {tier.buttonText}
                                </a>
                              </Button>
                          )}
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    )
}
