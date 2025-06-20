
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface CoinFlipAnimationProps {
  isFlipping?: boolean;
  result?: 'heads' | 'tails' | null;
}

const CoinFlipAnimation: React.FC<CoinFlipAnimationProps> = ({ 
  isFlipping = false, 
  result = null 
}) => {
  return (
    <div className="relative flex items-center justify-center">
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 opacity-20 blur-2xl animate-pulse" />
      
      {/* Coin container */}
      <div className={cn(
        "relative w-48 h-48 perspective-1000",
        isFlipping && "animate-spin"
      )}>
        <div className={cn(
          "w-full h-full rounded-full bg-gradient-to-br from-amber-300 via-yellow-400 to-amber-500 shadow-2xl transform-gpu transition-transform duration-700",
          "border-4 border-amber-200",
          "flex items-center justify-center",
          isFlipping && "animate-bounce"
        )}>
          {/* Inner coin design */}
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500 shadow-inner flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 shadow-lg" />
          </div>
        </div>
        
        {/* Result indicator */}
        {result && !isFlipping && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full font-bold text-lg animate-fade-in">
              {result.toUpperCase()}
            </div>
          </div>
        )}
      </div>
      
      {/* Odds display */}
      <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex gap-4">
        <div className="bg-indigo-500/20 backdrop-blur-sm border border-indigo-400/30 rounded-lg px-4 py-2 text-indigo-200">
          <div className="text-sm opacity-70">Heads</div>
          <div className="font-bold">60%</div>
        </div>
        <div className="bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 rounded-lg px-4 py-2 text-purple-200">
          <div className="text-sm opacity-70">Tails</div>
          <div className="font-bold">40%</div>
        </div>
      </div>
    </div>
  );
};

export default CoinFlipAnimation;
