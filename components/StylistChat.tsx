
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Sparkles } from 'lucide-react';
import { geminiService } from '../services/geminiService';
import { ChatMessage } from '../types';

export const StylistChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Namaste! I am your Thriya stylist. How can I help you find the perfect jewel today?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);
    const response = await geminiService.getStylistAdvice(messages, input);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 bg-[#e2b4b4] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center active:scale-95"
        aria-label="Open AI Stylist"
      >
        <Sparkles size={24} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 md:inset-auto md:bottom-28 md:right-10 w-full md:w-[400px] h-full md:h-[600px] bg-white md:rounded-3xl shadow-2xl z-[100] flex flex-col border border-gray-100 overflow-hidden animate-fade-in">
          <div className="bg-[#e2b4b4] p-5 md:p-6 flex justify-between items-center text-white flex-shrink-0">
            <div className="flex items-center gap-3">
              <Sparkles size={20} />
              <h3 className="serif text-2xl italic tracking-wide">Digital Stylist</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2 -mr-2"><X size={24} /></button>
          </div>

          <div ref={scrollRef} className="flex-grow p-5 overflow-y-auto space-y-6 text-sm scroll-smooth bg-[#fdfaf7]">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl shadow-sm ${
                  m.role === 'user' 
                  ? 'bg-[#333] text-white rounded-tr-none' 
                  : 'bg-white text-gray-700 border border-gray-100 rounded-tl-none'
                }`}>
                  <p className="leading-relaxed tracking-wide">{m.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/80 p-4 rounded-2xl rounded-tl-none text-gray-400 italic animate-pulse flex items-center gap-2">
                  <Sparkles size={14} className="animate-spin" />
                  Crafting recommendation...
                </div>
              </div>
            )}
          </div>

          <div className="p-5 md:p-6 border-t border-gray-100 bg-white safe-bottom flex-shrink-0">
            <div className="flex gap-3 bg-gray-50 p-3 rounded-2xl px-5 border border-gray-100">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask for wedding styles..."
                className="bg-transparent flex-grow outline-none text-[16px] md:text-sm placeholder:text-gray-400 text-gray-800"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="text-[#e2b4b4] active:scale-90 disabled:text-gray-200"
              >
                <Send size={22} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
