
import React from 'react';
import Header from '@/components/Header';
import CoinFlipAnimation from '@/components/CoinFlipAnimation';
import StakeSection from '@/components/StakeSection';
import ChooseSideSection from '@/components/ChooseSideSection';
import PoolActivity from '@/components/PoolActivity';
import GameChat from '@/components/GameChat';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239333ea%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
      
      <div className="relative z-10 container mx-auto px-4 py-6">
        <Header />
        
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          {/* Left sidebar - Stake and Choose Side */}
          <div className="xl:col-span-1 space-y-6">
            <StakeSection />
            <ChooseSideSection />
          </div>
          
          {/* Center - Coin Animation */}
          <div className="xl:col-span-2 flex items-center justify-center py-12">
            <CoinFlipAnimation />
          </div>
          
          {/* Right sidebar - Pool Activity and Chat */}
          <div className="xl:col-span-1 space-y-6">
            <PoolActivity />
            <GameChat />
          </div>
        </div>
        
        {/* Bottom stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2">1,247</div>
            <div className="text-indigo-300">Total Players</div>
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2">45,823</div>
            <div className="text-indigo-300">STRK Wagered</div>
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2">98.7%</div>
            <div className="text-indigo-300">Payout Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
