import { Heart } from 'lucide-react';

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname)
    : 'eden-app';

  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container py-12 px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/assets/generated/eden-mark.dim_512x512.png" 
                alt="Eden" 
                className="h-10 w-10 rounded-full"
              />
              <span className="text-xl font-semibold">Eden</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Bringing peace to the whole earth, one heart at a time.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Our Mission</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              To create a sanctuary of tranquility that inspires global harmony through 
              natural beauty, mindful practices, and community connection.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Connect</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Join our community and share your message of peace. Together, we can 
              create ripples of harmony that transform the world.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Eden. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with <Heart className="h-4 w-4 text-primary fill-primary" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground hover:text-primary transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
