
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function EcommercePage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
            <div className="text-center p-8">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">E-commerce</h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8">This page is under construction.</p>
                <Button asChild>
                    <Link href="/">Return to Home</Link>
                </Button>
            </div>
        </div>
    );
}
