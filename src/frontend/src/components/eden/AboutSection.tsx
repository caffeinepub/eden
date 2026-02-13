import { Section } from './Section';
import { Leaf, Heart, Globe } from 'lucide-react';

export function AboutSection() {
  return (
    <Section id="about" className="bg-muted/30">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="mb-6">About Eden</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Eden is more than a place—it's a vision of harmony, a refuge where the chaos of the world 
          gives way to serenity. Here, nature and humanity exist in perfect balance, creating ripples 
          of peace that extend across the entire earth.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
        <div className="text-center space-y-4 p-6 rounded-2xl bg-card hover:shadow-soft transition-shadow">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
            <Leaf className="h-8 w-8" />
          </div>
          <h3 className="text-xl">Natural Harmony</h3>
          <p className="text-muted-foreground">
            A pristine sanctuary where nature flourishes in its purest form, reminding us of the beauty 
            that exists when we live in balance with the earth.
          </p>
        </div>

        <div className="text-center space-y-4 p-6 rounded-2xl bg-card hover:shadow-soft transition-shadow">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent">
            <Heart className="h-8 w-8" />
          </div>
          <h3 className="text-xl">Inner Peace</h3>
          <p className="text-muted-foreground">
            Eden nurtures the soul, offering a space for reflection, healing, and the cultivation of 
            inner tranquility that radiates outward.
          </p>
        </div>

        <div className="text-center space-y-4 p-6 rounded-2xl bg-card hover:shadow-soft transition-shadow">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
            <Globe className="h-8 w-8" />
          </div>
          <h3 className="text-xl">Global Impact</h3>
          <p className="text-muted-foreground">
            From this peaceful center, waves of harmony spread across the world, inspiring communities 
            to embrace compassion and unity.
          </p>
        </div>
      </div>
    </Section>
  );
}
