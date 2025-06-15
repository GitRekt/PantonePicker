import { useState } from 'react';
import { Copy, Check, Info } from 'lucide-react';
import { PantoneColor } from '@/data/pantoneColors';
import { useToast } from '@/hooks/use-toast';

interface ColorCardProps {
  color: PantoneColor;
}

export const ColorCard = ({ color }: ColorCardProps) => {
  const [copied, setCopied] = useState(false);
  const [showFormula, setShowFormula] = useState(false);
  const { toast } = useToast();

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast({
        title: "Copied!",
        description: `${text} copied to clipboard`,
        duration: 2000,
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Could not copy to clipboard",
        variant: "destructive",
        duration: 2000,
      });
    }
  };

  const getContrastColor = (hex: string) => {
    // Remove # if present
    const cleanHex = hex.replace('#', '');
    
    // Convert to RGB
    const r = parseInt(cleanHex.substr(0, 2), 16);
    const g = parseInt(cleanHex.substr(2, 2), 16);
    const b = parseInt(cleanHex.substr(4, 2), 16);
    
    // Calculate luminance
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    
    return luminance > 0.5 ? '#000000' : '#FFFFFF';
  };

  const textColor = getContrastColor(color.hex);

  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
      {/* Main Color Chip */}
      <div 
        className="relative aspect-square w-full cursor-pointer transition-all duration-300"
        style={{ backgroundColor: color.hex }}
        onClick={() => color.formula ? setShowFormula(!showFormula) : copyToClipboard(color.hex)}
      >
        {/* Small white circle (hole) */}
        <div className="absolute top-3 right-3 w-3 h-3 bg-white rounded-full shadow-sm" />
        
        {/* Formula/Info Button for colors with formula */}
        {color.formula && (
          <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowFormula(!showFormula);
              }}
              className="p-1.5 rounded-full backdrop-blur-sm bg-black/20 hover:bg-black/30 transition-colors duration-200"
            >
              <Info size={14} style={{ color: textColor }} />
            </button>
          </div>
        )}
        
        {/* Copy Button */}
        <div className="absolute top-3 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={(e) => {
              e.stopPropagation();
              copyToClipboard(color.hex);
            }}
            className="p-1.5 rounded-full backdrop-blur-sm bg-black/20 hover:bg-black/30 transition-colors duration-200"
          >
            {copied ? (
              <Check size={14} style={{ color: textColor }} />
            ) : (
              <Copy size={14} style={{ color: textColor }} />
            )}
          </button>
        </div>
      </div>

      {/* Bottom Label Section */}
      <div className="bg-white p-3 border-t">
        <div className="text-center">
          <div className="text-lg font-bold text-black mb-1">PANTONE®</div>
          <div className="text-sm font-semibold text-black">{color.pantoneCode}</div>
        </div>
      </div>

      {/* Formula Overlay */}
      {color.formula && (
        <div 
          className={`absolute inset-0 bg-card p-4 transition-all duration-500 ${
            showFormula ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full pointer-events-none'
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-bold text-foreground">Formula</h4>
            <button
              onClick={() => setShowFormula(false)}
              className="p-1 rounded hover:bg-accent transition-colors duration-200"
            >
              <Check size={16} />
            </button>
          </div>
          
          <div className="text-xs text-muted-foreground space-y-1">
            {color.formula.split('\n').map((line, index) => (
              <div key={index} className="font-mono">{line}</div>
            ))}
          </div>
          
          {/* Color info */}
          <div className="mt-4 pt-3 border-t border-border">
            <div className="text-sm font-semibold text-foreground mb-1">{color.name}</div>
            <div className="text-xs text-muted-foreground">{color.year}</div>
          </div>
        </div>
      )}
    </div>
  );
};