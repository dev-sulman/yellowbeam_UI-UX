
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Check, ArrowRight } from 'lucide-react';

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
                <span className="text-5xl font-bold">{parts[0]}</span>
                {parts[1] && <span className="text-2xl font-bold text-muted-foreground">.{parts[1]}</span>}
            </>
        );
    };

    return (
        <div className="w-full">
            <div className="text-center mb-12">
                 {children}
                <div className="mt-6 flex justify-center">
                    <div className="radio-pricing-toggle">
                        <input 
                            type="radio" 
                            id="monthly" 
                            name="pricing-cycle" 
                            checked={!isYearly} 
                            onChange={() => setIsYearly(false)}
                        />
                        <label htmlFor="monthly">Monthly</label>
                        
                        <input 
                            type="radio" 
                            id="yearly" 
                            name="pricing-cycle" 
                            checked={isYearly} 
                            onChange={() => setIsYearly(true)}
                        />
                        <label htmlFor="yearly">Yearly (Save 10%)</label>
                    </div>
                </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-stretch">
                 {plans.map(tier => (
                    <Card key={tier.name} className={cn(
                        "w-full flex flex-col shadow-lg rounded-xl",
                        tier.popular ? "border-2 border-accent bg-accent/5" : "bg-card"
                    )}>
                        {tier.popular && 
                            <Badge className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground border-accent px-4 py-1 text-sm">
                                MOST POPULAR
                            </Badge>
                        }
                        <CardHeader className="pt-10">
                            <CardTitle className="text-2xl text-center font-bold text-primary">{tier.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow flex flex-col justify-between">
                           <div>
                                <div className="text-center mb-6">
                                    <span className={cn(tier.popular ? 'text-primary' : 'text-primary')}>
                                        {renderPrice(tier.price)}
                                    </span>
                                    <span className="text-muted-foreground">{tier.period}</span>
                                </div>
                                <ul className="space-y-4 mb-8">
                                    {tier.features.map(feature => (
                                        <li key={feature} className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                                            <span className="text-foreground">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                           </div>
                           <Button asChild size="lg" className={cn("w-full mt-auto font-semibold", tier.popular ? "bg-accent hover:bg-accent/90 text-accent-foreground" : "bg-primary hover:bg-primary/90 text-primary-foreground")}>
                                <a href="/contact" className="shine-button-2">
                                    {tier.buttonText}
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </a>
                           </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
             <div className="mt-12">
                <h3 className="text-center text-lg font-semibold mb-4">All Plans Include</h3>
                 <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    {supportFeatures.map(feature => (
                        <li key={feature} className="flex items-center justify-center gap-2 p-3 bg-secondary/50 rounded-lg">
                            <Check className="w-4 h-4 text-accent" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
