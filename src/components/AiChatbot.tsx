import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const AiChatbot: React.FC = () => {
  const [messages, setMessages] = useState([
    { role: 'ai', content: '안녕하세요! 다스 채용에 대해 궁금한 점이 있으신가요? 직무, 복지, 전형 과정 등 무엇이든 물어보세요.' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const GENAI_KEY = import.meta.env.VITE_GEMINI_API_KEY;

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;
    
    const userMessage = input;
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setInput('');
    setIsTyping(true);

    try {
      if (!GENAI_KEY) {
        throw new Error('API 키가 설정되지 않았습니다.');
      }

      const genAI = new GoogleGenerativeAI(GENAI_KEY);
      const model = genAI.getGenerativeModel({ 
        model: "gemini-1.5-flash",
        systemInstruction: "(주)다스 전문 채용 멘토로서 정중한 경어체(해요체)를 사용하세요. 가독성을 위해 불렛 포인트를 적극 활용하고, 개인 신상이나 대외비 등 답변이 불가능한 정보는 recruit@das.co.kr로 문의하도록 안내하세요."
      });

      const result = await model.generateContent(userMessage);
      const response = await result.response;
      const text = response.text();

      setMessages(prev => [...prev, { role: 'ai', content: text }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'ai', content: '죄송합니다. 메시지를 처리하는 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.' }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="glass-panel rounded-2xl overflow-hidden flex flex-col h-[600px] shadow-2xl">
      <div className="p-6 bg-surface-container-high flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-tertiary flex items-center justify-center shadow-[0_0_15px_rgba(0,218,243,0.3)]">
          <span className="material-symbols-outlined text-surface-container-lowest" style={{ fontVariationSettings: "'FILL' 1" }}>smart_toy</span>
        </div>
        <div>
          <h3 className="font-headline font-bold text-sm">DAS AI HR Mentor</h3>
          <p className="text-[10px] text-tertiary uppercase font-label">Online | Response in seconds</p>
        </div>
      </div>
      <div className="flex-1 p-6 space-y-6 overflow-y-auto font-body text-sm">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'flex-row-reverse' : ''} gap-3`}>
            <div className={`${msg.role === 'user' ? 'bg-primary/20 text-on-primary-fixed' : 'bg-surface-container-highest'} p-4 rounded-xl ${msg.role === 'user' ? 'rounded-tr-none' : 'rounded-tl-none'} max-w-[80%] whitespace-pre-wrap`}>
              {msg.content}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex gap-3">
            <div className="bg-surface-container-highest p-4 rounded-xl rounded-tl-none animate-pulse">
              답변을 작성 중입니다...
            </div>
          </div>
        )}
      </div>
      <div className="p-4 bg-surface-container-lowest border-t border-outline-variant/20 flex gap-4">
        <input 
          className="flex-1 bg-surface-container-low border-none rounded-md text-sm focus:ring-1 focus:ring-tertiary placeholder:text-outline/50 p-2 text-on-surface" 
          placeholder="메시지를 입력하세요..." 
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          disabled={isTyping}
        />
        <button 
          className={`bg-tertiary p-2 rounded-md transition-opacity ${isTyping ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'}`}
          onClick={handleSend}
          disabled={isTyping}
        >
          <span className="material-symbols-outlined text-surface-container-lowest">send</span>
        </button>
      </div>
    </div>
  );
};

export default AiChatbot;

