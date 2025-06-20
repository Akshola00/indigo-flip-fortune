
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock, TrendingUp, Flame } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-4">
        <Button 
          variant="ghost" 
          size="sm"
          className="text-yellow-400 hover:text-yellow-300 hover:bg-yellow-500/10 font-bold"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          BACK
        </Button>

        <div className="flex items-center gap-2">
          <Flame className="w-5 h-5 text-orange-500" />
          <span className="text-2xl font-black text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text">
            FLIPNET
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm border border-yellow-500/30 rounded-lg px-3 py-1">
          <TrendingUp className="w-4 h-4 text-yellow-400" />
          <span className="text-yellow-300 font-bold text-sm">Pool #189</span>
          <span className="text-orange-300 font-bold text-sm">300 STRK</span>
        </div>
        
        <div className="flex items-center gap-2 bg-red-500/20 border border-red-400/50 rounded-lg px-3 py-1">
          <Clock className="w-4 h-4 text-red-400" />
          <span className="text-red-200 font-black font-mono">0:59</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
