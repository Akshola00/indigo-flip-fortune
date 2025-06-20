
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Trophy, Target } from 'lucide-react';
import { cn } from '@/lib/utils';

const ChooseSideSection: React.FC = () => {
  const [selectedSide, setSelectedSide] = useState<'heads' | 'tails' | null>(null);

  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-purple-500/20 rounded-lg">
          <Target className="w-5 h-5 text-purple-400" />
        </div>
        <h3 className="text-xl font-bold text-white">Choose Your Side</h3>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Button
          onClick={() => setSelectedSide('heads')}
          className={cn(
            "h-24 flex flex-col items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105",
            selectedSide === 'heads'
              ? "bg-gradient-to-br from-indigo-500 to-indigo-600 text-white shadow-lg"
              : "bg-white/10 border border-white/20 text-white hover:bg-indigo-500/20"
          )}
        >
          <div className="text-2xl font-bold">H</div>
          <div className="text-sm">Heads</div>
          <div className="text-xs opacity-70">1.8x</div>
        </Button>

        <Button
          onClick={() => setSelectedSide('tails')}
          className={cn(
            "h-24 flex flex-col items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105",
            selectedSide === 'tails'
              ? "bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-lg"
              : "bg-white/10 border border-white/20 text-white hover:bg-purple-500/20"
          )}
        >
          <div className="text-2xl font-bold">T</div>
          <div className="text-sm">Tails</div>
          <div className="text-xs opacity-70">3.5x</div>
        </Button>
      </div>

      {selectedSide && (
        <div className="mt-4 p-4 bg-indigo-500/10 border border-indigo-400/30 rounded-lg animate-fade-in">
          <div className="flex items-center gap-2 text-indigo-200">
            <Trophy className="w-4 h-4" />
            <span className="text-sm">
              You've selected {selectedSide} with {selectedSide === 'heads' ? '1.8x' : '3.5x'} multiplier
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChooseSideSection;
