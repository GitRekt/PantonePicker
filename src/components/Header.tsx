import { Palette } from 'lucide-react';

export const Header = () => {
  return (
    <header className="relative overflow-hidden">
      {/* Background Gradient */}
      <div 
        className="absolute inset-0 opacity-90"
        style={{ background: 'var(--pantone-bg)' }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-16 text-center text-white">
        <div className="flex items-center justify-center mb-6">
          <Palette size={48} className="mr-4" />
          <h1 className="text-5xl md:text-6xl font-bold">
            Pantone Colors
          </h1>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-light mb-4">
          Color of the Year
        </h2>
        
        <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90 leading-relaxed">
          Explore the complete collection of Pantone Colors of the Year from 2000 to 2024. 
          Each color tells a story of its time, capturing the mood and spirit of the era. 
          Click any color to copy its hex code for your design projects.
        </p>
        
        <div className="mt-8 text-sm opacity-75">
          <p>Click on any color or hex code to copy • {new Date().getFullYear() - 2000 + 1} colors and counting</p>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-xl" />
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-white/10 rounded-full blur-xl" />
    </header>
  );
};