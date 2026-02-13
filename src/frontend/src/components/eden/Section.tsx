import { ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'py-16 md:py-24 lg:py-32 px-4',
        className
      )}
    >
      <div className="container max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}
