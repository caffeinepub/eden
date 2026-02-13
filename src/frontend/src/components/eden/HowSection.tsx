import { Section } from './Section';
import { Sparkles, Users, TreePine, Waves } from 'lucide-react';

export function HowSection() {
  return (
    <Section id="how">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="mb-6">How Eden Brings Peace</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Through a harmonious blend of natural beauty, mindful practices, and community connection, 
          Eden creates a transformative experience that extends far beyond its borders.
        </p>
      </div>

      <div className="space-y-12 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
            <TreePine className="h-7 w-7" />
          </div>
          <div className="flex-1 space-y-2">
            <h3 className="text-2xl">Sanctuary of Nature</h3>
            <p className="text-muted-foreground leading-relaxed">
              Eden preserves pristine natural landscapes where ancient forests, crystal-clear waters, 
              and vibrant ecosystems thrive. This untouched beauty serves as a living reminder of the 
              earth's inherent peace, inspiring visitors to protect and cherish our planet.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
            <Sparkles className="h-7 w-7" />
          </div>
          <div className="flex-1 space-y-2">
            <h3 className="text-2xl">Mindful Practices</h3>
            <p className="text-muted-foreground leading-relaxed">
              Through meditation, contemplation, and connection with nature, Eden offers pathways to 
              inner peace. These practices help individuals find clarity, reduce stress, and cultivate 
              a sense of calm that they carry into their daily lives.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
            <Users className="h-7 w-7" />
          </div>
          <div className="flex-1 space-y-2">
            <h3 className="text-2xl">Community & Connection</h3>
            <p className="text-muted-foreground leading-relaxed">
              Eden brings together people from all walks of life, fostering understanding, empathy, 
              and shared purpose. Through dialogue and collaboration, we build bridges that unite 
              communities and dissolve barriers.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
            <Waves className="h-7 w-7" />
          </div>
          <div className="flex-1 space-y-2">
            <h3 className="text-2xl">Ripple Effect</h3>
            <p className="text-muted-foreground leading-relaxed">
              Every person touched by Eden becomes an ambassador of peace. They return to their 
              communities with renewed perspective, spreading kindness, compassion, and harmony. 
              This ripple effect gradually transforms the world, one interaction at a time.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
