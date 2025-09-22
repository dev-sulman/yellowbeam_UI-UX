
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Check, ArrowRight } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

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
                <span className="text-4xl font-bold">{parts[0]}</span>
                {parts[1] && <span className="text-xl font-bold text-muted-foreground">.{parts[1]}</span>}
            </>
        );
    };

    return (
        <div className="w-full grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-1 space-y-6">
                 {children}
                 <div className="flex items-center space-x-2 switch-pricing-toggle">
                    <Label htmlFor="pricing-toggle" className={cn(!isYearly ? 'text-primary' : 'text-muted-foreground')}>Pay Monthly</Label>
                    <Switch
                        id="pricing-toggle"
                        checked={isYearly}
                        onCheckedChange={setIsYearly}
                        aria-label="Toggle between monthly and yearly pricing"
                    />
                    <Label htmlFor="pricing-toggle" className={cn(isYearly ? 'text-primary' : 'text-muted-foreground')}>
                        Pay Yearly <span className="text-accent font-semibold">(Save 10%)</span>
                    </Label>
                </div>
                 <ul className="space-y-3 pt-4 border-t">
                    {supportFeatures.map(feature => (
                        <li key={feature} className="flex items-center gap-3">
                            <Check className="w-5 h-5 text-accent flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="lg:col-span-2 grid md:grid-cols-2 gap-8 items-start">
                 {plans.map(tier => (
                    <Card key={tier.name} className={cn(
                        "w-full flex flex-col rounded-xl border",
                        tier.popular ? "border-accent/50" : "border-border"
                    )}>
                        <CardHeader className="relative">
                            <CardTitle className="text-2xl font-bold text-primary">{tier.name}</CardTitle>
                            {tier.popular && 
                                <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground border-accent px-3 py-1 text-xs">
                                    SAVE 25%
                                </Badge>
                            }
                        </CardHeader>
                        <CardContent className="flex-grow flex flex-col justify-between">
                           <div>
                                <div className="mb-6">
                                    <span className="text-primary">
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
                           <Button asChild size="lg" className={cn(
                               "w-full mt-auto font-semibold",
                                tier.popular ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-transparent text-primary border-2 border-primary hover:bg-primary/5"
                                )}>
                                <a href="/contact">
                                    {tier.buttonText}
                                </a>
                           </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
