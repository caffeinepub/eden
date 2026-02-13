import { Leaf } from 'lucide-react';

export function SiteHeader() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src="/assets/generated/eden-mark.dim_512x512.png" 
            alt="Eden" 
            className="h-10 w-10 rounded-full"
          />
          <span className="text-xl font-semibold tracking-tight">Eden</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('about')}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('how')}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Our Mission
          </button>
          <button
            onClick={() => scrollToSection('guestbook')}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Messages
          </button>
        </nav>

        <button
          onClick={() => scrollToSection('guestbook')}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          <Leaf className="h-4 w-4" />
          Share Peace
        </button>
      </div>
    </header>
  );
}
