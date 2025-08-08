import Link from 'next/link';
import { Mountain } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-muted py-6">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-2">
          <Mountain className="h-6 w-6 text-primary" />
          <p className="text-sm font-bold text-muted-foreground font-headline">
            SulzaX Digital Hub
          </p>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} SulzaX. All rights reserved.
        </p>
        <nav className="flex gap-4">
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Privacy Policy
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Terms of Service
          </Link>
        </nav>
      </div>
    </footer>
  );
}
