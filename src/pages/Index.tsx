import { Header } from '@/components/Header';
import { ColorCard } from '@/components/ColorCard';
import { pantoneColorsData } from '@/data/pantoneColors';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-12">
        {/* Stats */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-8 p-6 bg-card rounded-lg shadow-sm">
            <div>
              <div className="text-3xl font-bold text-primary">{pantoneColorsData.length}</div>
              <div className="text-sm text-muted-foreground">Total Colors</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div>
              <div className="text-3xl font-bold text-primary">25</div>
              <div className="text-sm text-muted-foreground">Years Covered</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div>
              <div className="text-3xl font-bold text-primary">2000-2024</div>
              <div className="text-sm text-muted-foreground">Time Span</div>
            </div>
          </div>
        </div>

        {/* Color Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {pantoneColorsData.map((color) => (
            <ColorCard key={`${color.year}-${color.name}`} color={color} />
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
