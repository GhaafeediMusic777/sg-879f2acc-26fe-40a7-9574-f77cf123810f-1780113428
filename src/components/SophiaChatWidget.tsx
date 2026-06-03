'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, X, MessageCircle, Volume2, VolumeX, Minimize2, Maximize2 } from 'lucide-react'
import { getSophiaAdvancedResponse } from '@/services/sophia-ai-advanced'
import { useAuth } from '@/context/AuthContext'

interface Message {
  id: string
  role: 'user' | 'assistant'
  message: string
  avatarExpression?: string
  timestamp: Date
}

const AVATAR_EXPRESSIONS = {
  neutral: '😊',
  happy: '😄',
  delighted: '🤩',
  compassionate: '🥰',
  deeply_empathetic: '💙',
  supportive: '🤝',
  warm: '✨',
}

export function SophiaChatWidget() {
  const { user } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [voiceEnabled, setVoiceEnabled] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [conversationHistory, setConversationHistory] = useState<Array<{ role: string; content: string }>>([])

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Load initial greeting
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const greeting: Message = {
        id: '0',
        role: 'assistant',
        message: "Hello! I'm Sophia, your emotional companion. I'm here to listen and support you on your creative journey. What's on your mind today?",
        avatarExpression: 'warm',
        timestamp: new Date(),
      }
      setMessages([greeting])
    }
  }, [isOpen])

  // Text-to-speech functionality
  const speakMessage = (text: string) => {
    if (!voiceEnabled) return

    if (isSpeaking) {
      window.speechSynthesis.cancel()
      setIsSpeaking(false)
      return
    }

    const utterance = new SpeechSynthesisUtterance(text)
    utterance.rate = 0.95
    utterance.pitch = 1.1
    utterance.volume = 0.8

    utterance.onstart = () => setIsSpeaking(true)
    utterance.onend = () => setIsSpeaking(false)

    window.speechSynthesis.speak(utterance)
  }

  // Send message to Sophia
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput('')

    // Add user message
    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      message: userMessage,
      timestamp: new Date(),
    }
    setMessages(prev => [...prev, userMsg])

    // Update conversation history
    const newHistory = [...conversationHistory, { role: 'user', content: userMessage }]
    setConversationHistory(newHistory)

    setIsLoading(true)

    try {
      // Get Sophia's advanced response
      const response = await getSophiaAdvancedResponse(userMessage, newHistory)

      const assistantMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        message: response.message,
        avatarExpression: response.avatarExpression,
        timestamp: new Date(),
      }

      setMessages(prev => [...prev, assistantMsg])
      setConversationHistory(prev => [...prev, { role: 'assistant', content: response.message }])

      // Speak response if voice is enabled
      if (voiceEnabled) {
        speakMessage(response.message)
      }
    } catch (error) {
      console.error('Error getting Sophia response:', error)
      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        message: 'I apologize, but I\'m having trouble connecting. Please try again in a moment.',
        timestamp: new Date(),
      }
      setMessages(prev => [...prev, errorMsg])
    } finally {
      setIsLoading(false)
    }
  }

  if (!user) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-2rem)] bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-2xl border border-purple-500/30 flex flex-col z-50"
          style={{ height: isMinimized ? '60px' : '600px' }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-3xl">
                {messages.length > 0 && messages[messages.length - 1].role === 'assistant'
                  ? AVATAR_EXPRESSIONS[messages[messages.length - 1].avatarExpression as keyof typeof AVATAR_EXPRESSIONS] || '😊'
                  : '😊'}
              </div>
              <div>
                <h3 className="font-bold text-white">Sophia</h3>
                <p className="text-sm text-purple-100">Your Emotional Companion</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setVoiceEnabled(!voiceEnabled)}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                title={voiceEnabled ? 'Disable voice' : 'Enable voice'}
              >
                {voiceEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
              </button>
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                {isMinimized ? <Maximize2 size={18} /> : <Minimize2 size={18} />}
              </button>
              <button
                onClick={() => {
                  setIsOpen(false)
                  window.speechSynthesis.cancel()
                }}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          {!isMinimized && (
            <>
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map(msg => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs px-4 py-3 rounded-lg ${
                        msg.role === 'user'
                          ? 'bg-purple-600 text-white rounded-br-none'
                          : 'bg-slate-700 text-gray-100 rounded-bl-none'
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{msg.message}</p>
                      {msg.role === 'assistant' && voiceEnabled && (
                        <button
                          onClick={() => speakMessage(msg.message)}
                          className="mt-2 text-xs text-purple-300 hover:text-purple-200 transition-colors"
                        >
                          {isSpeaking ? '🔊 Speaking...' : '🔉 Listen'}
                        </button>
                      )}
                    </div>
                  </motion.div>
                ))}
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="bg-slate-700 px-4 py-3 rounded-lg rounded-bl-none">
                      <div className="flex gap-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-100" />
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-200" />
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <form onSubmit={handleSendMessage} className="p-4 border-t border-slate-700 flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  placeholder="Share your thoughts..."
                  className="flex-1 bg-slate-700 text-white placeholder-gray-400 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white p-2 rounded-lg transition-colors"
                >
                  <Send size={18} />
                </button>
              </form>
            </>
          )}
        </motion.div>
      )}

      {/* Floating Button */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full shadow-lg flex items-center justify-center text-2xl hover:shadow-xl transition-shadow z-40"
          title="Chat with Sophia"
        >
          😊
        </motion.button>
      )}
    </AnimatePresence>
  )
}
