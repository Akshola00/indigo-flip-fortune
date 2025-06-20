
import React from 'react';
import { Activity, Users, Clock, TrendingUp } from 'lucide-react';

const PoolActivity: React.FC = () => {
  const pools = [
    { id: 189, amount: 300, participants: 12, timeLeft: '0:59', status: 'active' },
    { id: 188, amount: 450, participants: 18, timeLeft: 'Ended', status: 'ended' },
    { id: 187, amount: 275, participants: 9, timeLeft: 'Ended', status: 'ended' },
  ];

  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-blue-500/20 rounded-lg">
          <Activity className="w-5 h-5 text-blue-400" />
        </div>
        <h3 className="text-xl font-bold text-white">Current Pool Activity</h3>
      </div>

      <div className="space-y-3">
        {pools.map((pool) => (
          <div 
            key={pool.id}
            className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all duration-200"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-indigo-300 font-medium">Pool #{pool.id}</span>
                <div className={`w-2 h-2 rounded-full ${
                  pool.status === 'active' ? 'bg-green-400 animate-pulse' : 'bg-gray-400'
                }`} />
              </div>
              <div className="flex items-center gap-1 text-gray-300">
                <Clock className="w-3 h-3" />
                <span className="text-xs">{pool.timeLeft}</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 text-white">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span className="font-semibold">{pool.amount} STRK</span>
                </div>
                <div className="flex items-center gap-1 text-gray-300">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">{pool.participants}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PoolActivity;
