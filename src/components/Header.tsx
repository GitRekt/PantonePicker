import { Palette, Sparkles } from 'lucide-react';

export const Header = () => {
  return (
    <header className="relative overflow-hidden min-h-screen flex items-center justify-center parallax-container">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 parallax-bg"
        style={{ background: 'var(--pantone-bg)' }}
      />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-white/10 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}} />
      <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-white/5 rounded-full blur-lg animate-float" style={{animationDelay: '4s'}} />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center text-white">
        <div className="glass rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center mb-8 animate-slide-in">
            <div className="relative">
              <Palette size={60} className="mb-4 sm:mb-0 sm:mr-6 animate-pulse-glow" />
              <Sparkles size={20} className="absolute -top-2 -right-2 animate-float" />
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-playfair font-bold tracking-tight">
              Pantone
              <span className="block text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white/90">
                Colors
              </span>
            </h1>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-medium mb-6 animate-fade-in text-white/95" style={{animationDelay: '0.3s'}}>
            Color of the Year Collection
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto opacity-90 leading-relaxed animate-fade-in mb-8 font-inter font-light" style={{animationDelay: '0.6s'}}>
            Discover the complete collection of Pantone Colors of the Year from 2000 to 2024. 
            Each color captures the zeitgeist of its era, telling stories of culture, emotion, and design evolution. 
            Experience colors that have shaped the visual landscape of our time.
          </p>
          
          <div className="animate-fade-in" style={{animationDelay: '0.9s'}}>
            <div className="inline-flex items-center space-x-2 text-sm sm:text-base opacity-80 font-inter">
              <Sparkles size={16} />
              <span>Click any color to copy • {new Date().getFullYear() - 2000 + 1} colors and counting</span>
              <Sparkles size={16} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};