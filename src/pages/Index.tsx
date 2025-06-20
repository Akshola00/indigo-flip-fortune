
import React, { useState } from 'react';
import Header from '@/components/Header';
import CoinFlipAnimation from '@/components/CoinFlipAnimation';
import StakeSection from '@/components/StakeSection';
import ChooseSideSection from '@/components/ChooseSideSection';
import PoolActivity from '@/components/PoolActivity';
import GameChat from '@/components/GameChat';

const Index = () => {
  const [isFlipping, setIsFlipping] = useState(false);
  const [result, setResult] = useState<'heads' | 'tails' | null>(null);

  const handlePlaceStake = () => {
    setIsFlipping(true);
    setResult(null);
    
    // Simulate coin flip result after animation
    setTimeout(() => {
      const outcomes: ('heads' | 'tails')[] = ['heads', 'tails'];
      const randomResult = outcomes[Math.floor(Math.random() * outcomes.length)];
      setResult(randomResult);
    }, 2000);
  };

  const handleAnimationComplete = () => {
    setIsFlipping(false);
  };

  return (
    <div className="h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23fbbf24%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
      
      <div className="relative z-10 h-full flex flex-col p-4">
        <Header />
        
        {/* Desktop Layout */}
        <div className="hidden lg:block flex-1 min-h-0">
          <div className="grid grid-cols-12 gap-4 h-full">
            {/* Left sidebar - Stake and Choose Side */}
            <div className="col-span-3 space-y-3">
              <StakeSection onPlaceStake={handlePlaceStake} />
              <ChooseSideSection />
            </div>
            
            {/* Center - Coin Animation */}
            <div className="col-span-6 flex flex-col items-center justify-center">
              <CoinFlipAnimation 
                isFlipping={isFlipping} 
                result={result}
                onAnimationComplete={handleAnimationComplete}
              />
            </div>
            
            {/* Right sidebar - Pool Activity and Chat */}
            <div className="col-span-3 space-y-3">
              <PoolActivity />
              <GameChat />
            </div>
          </div>
        </div>

        {/* Mobile Layout - Scrollable */}
        <div className="lg:hidden flex-1 overflow-y-auto">
          <div className="space-y-4 pb-4">
            {/* Coin Animation at top for mobile */}
            <div className="flex justify-center py-4">
              <CoinFlipAnimation 
                isFlipping={isFlipping} 
                result={result}
                onAnimationComplete={handleAnimationComplete}
              />
            </div>
            
            {/* Stake and Choose Side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <StakeSection onPlaceStake={handlePlaceStake} />
              <ChooseSideSection />
            </div>
            
            {/* Pool Activity and Chat */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <PoolActivity />
              <GameChat />
            </div>
          </div>
        </div>
        
        {/* Bottom stats - Desktop only */}
        <div className="hidden lg:grid grid-cols-3 gap-4 mt-4">
          <div className="bg-black/20 backdrop-blur-md border border-yellow-500/20 rounded-lg p-3 text-center">
            <div className="text-xl font-black text-yellow-400 mb-1">1,247</div>
            <div className="text-yellow-200 text-xs font-medium">TOTAL DEGENS</div>
          </div>
          <div className="bg-black/20 backdrop-blur-md border border-yellow-500/20 rounded-lg p-3 text-center">
            <div className="text-xl font-black text-yellow-400 mb-1">45,823</div>
            <div className="text-yellow-200 text-xs font-medium">STRK WAGERED</div>
          </div>
          <div className="bg-black/20 backdrop-blur-md border border-yellow-500/20 rounded-lg p-3 text-center">
            <div className="text-xl font-black text-yellow-400 mb-1">98.7%</div>
            <div className="text-yellow-200 text-xs font-medium">PAYOUT RATE</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
