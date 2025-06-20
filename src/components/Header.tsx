
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock, TrendingUp } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      <Button 
        variant="ghost" 
        className="text-indigo-300 hover:text-white hover:bg-white/10"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Market
      </Button>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2">
          <TrendingUp className="w-4 h-4 text-indigo-400" />
          <span className="text-white font-medium">Pool #189</span>
          <span className="text-indigo-300">300 STRK</span>
        </div>
        
        <div className="flex items-center gap-2 bg-red-500/20 border border-red-400/30 rounded-lg px-4 py-2">
          <Clock className="w-4 h-4 text-red-400" />
          <span className="text-red-200 font-mono font-bold">0:59</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
