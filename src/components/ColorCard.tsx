import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { PantoneColor } from '@/data/pantoneColors';
import { useToast } from '@/hooks/use-toast';

interface ColorCardProps {
  color: PantoneColor;
}

export const ColorCard = ({ color }: ColorCardProps) => {
  const [copied, setCopied] = useState(false);
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
    <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02]">
      {/* Color Display */}
      <div 
        className="h-40 sm:h-48 w-full relative cursor-pointer transition-all duration-500 group-hover:scale-105"
        style={{ backgroundColor: color.hex }}
        onClick={() => copyToClipboard(color.hex)}
      >
        {/* Year Badge */}
        <div className="absolute top-4 left-4">
          <span 
            className="px-3 py-1 rounded-full text-sm font-bold backdrop-blur-sm bg-black/20"
            style={{ color: textColor }}
          >
            {color.year}
          </span>
        </div>
        
        {/* Copy Button */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={(e) => {
              e.stopPropagation();
              copyToClipboard(color.hex);
            }}
            className="p-2 rounded-full backdrop-blur-sm bg-black/20 hover:bg-black/30 transition-colors duration-200"
          >
            {copied ? (
              <Check size={16} style={{ color: textColor }} />
            ) : (
              <Copy size={16} style={{ color: textColor }} />
            )}
          </button>
        </div>

        {/* Color Name Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
          <h3 
            className="text-lg font-bold mb-1"
            style={{ color: textColor }}
          >
            {color.name}
          </h3>
          <p 
            className="text-sm opacity-90"
            style={{ color: textColor }}
          >
            {color.pantoneCode}
          </p>
        </div>
      </div>

      {/* Card Info */}
      <div className="p-6 bg-card">
        <div className="flex items-center justify-between mb-3">
          <div 
            className="px-3 py-1 rounded-md font-mono text-sm font-semibold cursor-pointer hover:bg-accent transition-colors duration-200"
            onClick={() => copyToClipboard(color.hex)}
            title="Click to copy"
          >
            {color.hex}
          </div>
          <button
            onClick={() => copyToClipboard(color.hex)}
            className="p-1 rounded hover:bg-accent transition-colors duration-200"
            title="Copy hex code"
          >
            {copied ? <Check size={16} className="text-green-600" /> : <Copy size={16} />}
          </button>
        </div>
        
        <p className="text-sm text-muted-foreground leading-relaxed">
          {color.description}
        </p>
      </div>
    </div>
  );
};