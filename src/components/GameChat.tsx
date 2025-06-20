
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageCircle, Send } from 'lucide-react';

const GameChat: React.FC = () => {
  const [message, setMessage] = useState('');
  const [messages] = useState([
    { id: 1, user: 'Birdmann', message: 'yessss 1000x 🚀', time: '2m', avatar: 'B' },
    { id: 2, user: 'Yunus', message: 'wen moon?', time: '3m', avatar: 'Y' },
    { id: 3, user: 'Zyrick', message: 'diamond hands 💎', time: '5m', avatar: 'Z' },
    { id: 4, user: 'Gregory', message: 'stake is fire 🔥', time: '7m', avatar: 'G' },
  ]);

  return (
    <div className="bg-black/20 backdrop-blur-md border border-yellow-500/20 rounded-xl p-4 shadow-2xl h-full flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-1 bg-yellow-500/20 rounded-lg">
          <MessageCircle className="w-4 h-4 text-yellow-400" />
        </div>
        <h3 className="text-lg font-black text-yellow-400">DEGEN CHAT</h3>
      </div>

      {/* Messages */}
      <div className="flex-1 space-y-2 mb-3 overflow-y-auto max-h-48">
        {messages.map((msg) => (
          <div key={msg.id} className="flex items-start gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center text-black text-xs font-black">
              {msg.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-yellow-300 font-bold text-xs">{msg.user}</span>
                <span className="text-gray-400 text-xs">{msg.time}</span>
              </div>
              <div className="text-white text-xs">{msg.message}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Message input */}
      <div className="flex gap-2">
        <Input
          placeholder="Type degen msg..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="bg-black/30 border-yellow-500/30 text-yellow-300 placeholder:text-gray-500 text-xs h-8"
          onKeyPress={(e) => e.key === 'Enter' && setMessage('')}
        />
        <Button 
          size="sm" 
          onClick={() => setMessage('')}
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold h-8 w-8 p-0"
        >
          <Send className="w-3 h-3" />
        </Button>
      </div>
    </div>
  );
};

export default GameChat;
