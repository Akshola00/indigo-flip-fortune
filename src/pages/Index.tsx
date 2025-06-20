
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
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239333ea" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
      
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
