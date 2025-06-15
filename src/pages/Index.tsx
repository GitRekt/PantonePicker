import { Header } from '@/components/Header';
import { ColorCard } from '@/components/ColorCard';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import { pantoneColorsData } from '@/data/pantoneColors';
import { useEffect, useRef } from 'react';
import { Sparkles, TrendingUp, Palette } from 'lucide-react';

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax effect for header
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxBg = document.querySelector('.parallax-bg') as HTMLElement;
      if (parallaxBg) {
        parallaxBg.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Header />
      
      <main className="relative">
        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-24 relative z-10">
          {/* Enhanced Stats Section */}
          <ScrollAnimation className="text-center mb-20" delay={100}>
            <div className="glass rounded-3xl p-8 sm:p-12 shadow-2xl max-w-5xl mx-auto border border-white/20">
              <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
                <div className="text-center group">
                  <div className="flex items-center justify-center mb-4">
                    <Palette className="w-8 h-8 text-primary mr-3 group-hover:animate-pulse" />
                    <div className="text-4xl sm:text-5xl font-playfair font-bold text-primary">
                      {pantoneColorsData.length}
                    </div>
                  </div>
                  <div className="text-sm sm:text-base text-muted-foreground font-inter">Total Colors</div>
                </div>
                
                <div className="hidden lg:block w-px h-20 bg-gradient-to-b from-transparent via-border to-transparent" />
                <div className="lg:hidden w-20 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                
                <div className="text-center group">
                  <div className="flex items-center justify-center mb-4">
                    <TrendingUp className="w-8 h-8 text-primary mr-3 group-hover:animate-pulse" />
                    <div className="text-4xl sm:text-5xl font-playfair font-bold text-primary">25</div>
                  </div>
                  <div className="text-sm sm:text-base text-muted-foreground font-inter">Years Covered</div>
                </div>
                
                <div className="hidden lg:block w-px h-20 bg-gradient-to-b from-transparent via-border to-transparent" />
                <div className="lg:hidden w-20 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                
                <div className="text-center group">
                  <div className="flex items-center justify-center mb-4">
                    <Sparkles className="w-8 h-8 text-primary mr-3 group-hover:animate-pulse" />
                    <div className="text-4xl sm:text-5xl font-playfair font-bold text-primary">2000-2024</div>
                  </div>
                  <div className="text-sm sm:text-base text-muted-foreground font-inter">Time Span</div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Section Title */}
          <ScrollAnimation className="text-center mb-16" delay={200}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
              The Complete Collection
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto font-inter leading-relaxed">
              Journey through 25 years of design evolution, where each color tells the story of its time
            </p>
          </ScrollAnimation>

          {/* Enhanced Color Grid */}
          <div 
            ref={containerRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-10"
          >
            {pantoneColorsData.map((color, index) => (
              <ScrollAnimation 
                key={`${color.year}-${color.name}`} 
                className="color-card"
                delay={index * 50}
              >
                <ColorCard color={color} />
              </ScrollAnimation>
            ))}
          </div>

          {/* Enhanced Footer */}
          <ScrollAnimation delay={300}>
            <footer className="mt-24 pt-12 border-t border-border/30 text-center">
              <div className="glass rounded-2xl p-8 max-w-2xl mx-auto border border-white/20">
                <div className="flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-primary mr-2" />
                  <h3 className="text-xl font-playfair font-semibold text-foreground">
                    Pantone Colors Collection
                  </h3>
                  <Sparkles className="w-6 h-6 text-primary ml-2" />
                </div>
                <p className="text-muted-foreground mb-4 font-inter">
                  Built with passion for designers, creators, and color enthusiasts worldwide
                </p>
                <p className="text-sm text-muted-foreground/80 font-inter">
                  Colors and descriptions are trademarks of Pantone LLC • Designed for inspiration
                </p>
              </div>
            </footer>
          </ScrollAnimation>
        </div>
      </main>
    </div>
  );
};

export default Index;
