import { Header } from '@/components/Header';
import { ColorCard } from '@/components/ColorCard';
import { pantoneColorsData } from '@/data/pantoneColors';
import { useEffect, useRef } from 'react';

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, observerOptions);

    // Observe stats section
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    // Observe color cards with staggered animation
    const colorCards = containerRef.current?.querySelectorAll('.color-card');
    colorCards?.forEach((card, index) => {
      card.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700');
      (card as HTMLElement).style.transitionDelay = `${index * 100}ms`;
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background relative">
      {/* Glass Background Overlay */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="absolute inset-0 glass opacity-30" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-white/3 to-transparent" />
      </div>
      
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 relative z-10">
        {/* Stats */}
        <div 
          ref={statsRef}
          className="text-center mb-12 opacity-0 translate-y-8 transition-all duration-700"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 p-4 sm:p-6 bg-card rounded-lg shadow-sm">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary">{pantoneColorsData.length}</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Total Colors</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-border" />
            <div className="sm:hidden w-12 h-px bg-border" />
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary">26</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Years Covered</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-border" />
            <div className="sm:hidden w-12 h-px bg-border" />
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary">2000-2025</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Time Span</div>
            </div>
          </div>
        </div>

        {/* Color Grid */}
        <div 
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
        >
          {pantoneColorsData.map((color) => (
            <div key={`${color.year}-${color.name}`} className="color-card">
              <ColorCard color={color} />
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-border text-center text-muted-foreground">
          <p className="mb-2">
            Pantone Colors of the Year Collection • Built with ❤️ for designers
          </p>
          <p className="text-sm">
            Colors and descriptions are trademarks of Pantone LLC
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
