'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from '@/components/ui/switch';
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
                <div className="flex items-center gap-4">
                    <span className={cn('font-medium', !isYearly ? 'text-[#2D4FE1]' : 'text-black')}>Pay Monthly</span>
                    <Switch checked={isYearly} onCheckedChange={setIsYearly} aria-label="billing cycle toggle" />
                    <span className={cn('font-medium', isYearly ? 'text-[#2D4FE1]' : 'text-black')}>Pay Yearly (Save 10%)</span>
                </div>
                <ul className="space-y-3 pt-4">
                    {supportFeatures.map(feature => (
                        <li key={feature} className="flex items-center gap-3">
                            <Check className="w-5 h-5 text-[#2D4FE1]" />
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
                            <div className={cn('text-center', tier.popular ? 'text-black' : 'text-[#2D4FE1]')}>
                                {renderPrice(tier.price)}
                                <span className="text-black">{tier.period}</span>
                            </div>
                            <ul className="space-y-3">
                                {tier.features.map(feature => (
                                    <li key={feature} className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-[#2D4FE1]" />
                                        <span className="text-black">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <div className="p-6">
                          {tier.popular ? (
                             <Button className="w-full bg-transparent border border-black text-black hover:bg-[#2D4FE1] hover:text-white hover:border-transparent">{tier.buttonText}</Button>
                          ) : (
                              <Button className="w-full bg-[#2D4FE1] hover:bg-[#2139a6] text-white">{tier.buttonText}</Button>
                          )}
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    )
}