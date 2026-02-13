import { SiteHeader } from './components/eden/SiteHeader';
import { HeroSection } from './components/eden/HeroSection';
import { AboutSection } from './components/eden/AboutSection';
import { HowSection } from './components/eden/HowSection';
import { GuestbookSection } from './components/eden/GuestbookSection';
import { SiteFooter } from './components/eden/SiteFooter';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <HowSection />
        <GuestbookSection />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
