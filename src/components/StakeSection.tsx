
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { TrendingUp } from 'lucide-react';

const StakeSection: React.FC = () => {
  const [stakeAmount, setStakeAmount] = useState('');
  const quickAmounts = [1, 5, 10, 50, 100];

  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-indigo-500/20 rounded-lg">
          <TrendingUp className="w-5 h-5 text-indigo-400" />
        </div>
        <h3 className="text-xl font-bold text-white">Enter Your Stake</h3>
      </div>

      <div className="space-y-4">
        {/* Amount input */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-indigo-200">Amount (STRK)</label>
          <div className="relative">
            <Input
              type="number"
              placeholder="0.00"
              value={stakeAmount}
              onChange={(e) => setStakeAmount(e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 text-lg font-semibold h-14 pr-16"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-indigo-300 font-medium">
              STRK
            </div>
          </div>
        </div>

        {/* Quick amount buttons */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-indigo-200">Quick Select</label>
          <div className="flex gap-2">
            {quickAmounts.map((amount) => (
              <Button
                key={amount}
                variant="outline"
                size="sm"
                onClick={() => setStakeAmount(amount.toString())}
                className="bg-white/5 border-white/20 text-white hover:bg-indigo-500/20 hover:border-indigo-400/50 transition-all duration-200"
              >
                {amount}
              </Button>
            ))}
          </div>
        </div>

        {/* Place stake button */}
        <Button 
          className="w-full h-14 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
          disabled={!stakeAmount}
        >
          Place Stake
        </Button>

        {/* Estimated payout */}
        {stakeAmount && (
          <div className="mt-4 p-4 bg-green-500/10 border border-green-400/30 rounded-lg">
            <div className="text-sm text-green-300 mb-1">Estimated Payout</div>
            <div className="text-lg font-bold text-green-200">
              {(parseFloat(stakeAmount) * 1.8).toFixed(2)} STRK
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StakeSection;
