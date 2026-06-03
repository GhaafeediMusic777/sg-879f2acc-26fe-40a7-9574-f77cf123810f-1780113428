import React, { useState } from 'react'
import { MessageCircle, Send } from 'lucide-react'

export function WellnessChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Array<{ role: string; content: string }>>([])
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (!input.trim()) return
    
    setMessages(prev => [...prev, { role: 'user', content: input }])
    setInput('')
    
    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Thank you for reaching out. How can I help you today?' }])
    }, 500)
  }

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-xl w-96 h-96 flex flex-col">
          <div className="bg-purple-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-bold">Wellness Support</h3>
            <button onClick={() => setIsOpen(false)} className="text-white hover:bg-purple-700 p-1 rounded">
              ✕
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs px-4 py-2 rounded-lg ${msg.role === 'user' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-900'}`}>
                  {msg.content}
                </div>
              </div>
            ))}
          </div>
          
          <div className="border-t p-4 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyPress={e => e.key === 'Enter' && handleSend()}
              placeholder="Type a message..."
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button onClick={handleSend} className="bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-700">
              <Send size={18} />
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition-colors"
        >
          <MessageCircle size={24} />
        </button>
      )}
    </div>
  )
}
