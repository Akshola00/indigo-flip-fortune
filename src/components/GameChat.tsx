
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageCircle, Send } from 'lucide-react';

const GameChat: React.FC = () => {
  const [message, setMessage] = useState('');
  const [messages] = useState([
    { id: 1, user: 'Birdmann', message: 'yessss 1000x', time: '2m ago', avatar: 'B' },
    { id: 2, user: 'Yunus', message: 'is this ever going to pay out?', time: '3m ago', avatar: 'Y' },
    { id: 3, user: 'Zyrick', message: 'check the next pool and see the outcome', time: '5m ago', avatar: 'Z' },
    { id: 4, user: 'Gregory', message: 'My stake is on fire 🔥', time: '7m ago', avatar: 'G' },
  ]);

  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl h-full flex flex-col">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-green-500/20 rounded-lg">
          <MessageCircle className="w-5 h-5 text-green-400" />
        </div>
        <h3 className="text-xl font-bold text-white">Game Chat</h3>
      </div>

      {/* Messages */}
      <div className="flex-1 space-y-3 mb-4 overflow-y-auto max-h-64">
        {messages.map((msg) => (
          <div key={msg.id} className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">
              {msg.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-indigo-300 font-medium text-sm">{msg.user}</span>
                <span className="text-gray-400 text-xs">{msg.time}</span>
              </div>
              <div className="text-white text-sm">{msg.message}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Message input */}
      <div className="flex gap-2">
        <Input
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
          onKeyPress={(e) => e.key === 'Enter' && setMessage('')}
        />
        <Button 
          size="icon" 
          onClick={() => setMessage('')}
          className="bg-indigo-500 hover:bg-indigo-600 transition-colors"
        >
          <Send className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default GameChat;
