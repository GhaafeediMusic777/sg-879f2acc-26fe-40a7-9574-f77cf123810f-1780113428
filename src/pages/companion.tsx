import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/Layout";
import { AuthGuard } from "@/components/AuthGuard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { Heart, Send, Sparkles, Brain, Music, Calendar, MessageCircle, Shield, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { WellnessChatbot } from "@/components/WellnessChatbot";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

interface Message {
  id: string;
  role: "user" | "assistant";
  message: string;
  emotional_context?: any;
  avatar_expression?: string;
  created_at: string;
}

export default function CompanionPage() {
  const { user } = useAuth();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState<string>("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    loadConversationHistory();
    setSessionId(crypto.randomUUID());
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const loadConversationHistory = async () => {
    if (!user) return;

    const { data, error } = await supabase
      .from('companion_conversations')
      .select('*')
      .eq('user_id', user.uid)
      .order('created_at', { ascending: true })
      .limit(50);

    if (data && !error) {
      setMessages(data.map(msg => ({
        ...msg,
        role: msg.role as "user" | "assistant"
      })));
    }
  };

  const sendMessage = async () => {
    if (!input.trim() || isLoading || !user) return;

    const userMessage = input.trim();
    setInput("");
    setIsLoading(true);

    // Add user message to UI
    const userMsg: Message = {
      id: crypto.randomUUID(),
      role: "user",
      message: userMessage,
      created_at: new Date().toISOString()
    };
    setMessages(prev => [...prev, userMsg]);

    try {
      // Save user message
      await supabase.from('companion_conversations').insert({
        user_id: user.uid,
        session_id: sessionId,
        message: userMessage,
        role: 'user'
      });

      // Call OpenAI API (would be implemented in production)
      // For now, simulate response
      const assistantResponse = generateEmpatheticResponse(userMessage);

      const assistantMsg: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        message: assistantResponse,
        avatar_expression: "empathetic",
        created_at: new Date().toISOString()
      };

      // Save assistant message
      await supabase.from('companion_conversations').insert({
        user_id: user.uid,
        session_id: sessionId,
        message: assistantResponse,
        role: 'assistant',
        avatar_expression: 'empathetic'
      });

      setMessages(prev => [...prev, assistantMsg]);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const generateEmpatheticResponse = (userMessage: string): string => {
    // Placeholder - would use OpenAI in production
    const responses = [
      "I hear you, and I'm here with you. Your feelings are completely valid. Would you like to tell me more about what you're experiencing?",
      "That sounds incredibly difficult. You're showing real strength by opening up about this. How can I support you right now?",
      "Thank you for sharing that with me. Your journey matters, and I'm honored to walk alongside you through this.",
      "I can sense the depth of what you're feeling. Remember, healing isn't linear, and every step forward counts, even the small ones.",
      "Your resilience is remarkable. What you've been through would challenge anyone. How are you taking care of yourself today?"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  return (
    <AuthGuard>
      <Layout 
        title="AI Emotional Companion - Ghaafeedi Music"
        description="Your personal AI companion for emotional support, healing guidance, and cinematic encouragement"
      >
        <main className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5">
          {/* Hero Section */}
          <section className="relative pt-32 pb-16 px-6 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
            <div className="absolute inset-0">
              <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="relative max-w-7xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm text-primary font-medium">AI Emotional Intelligence</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Your AI Companion
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                  A cinematic emotional companion who remembers your journey, speaks with empathy, and guides your healing with personalized support.
                </p>

                {/* SOPHIA AVAILABILITY CARD */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="max-w-2xl mx-auto"
                >
                  <Card className="glass border-[#8B5CF6]/30 bg-gradient-to-br from-[#8B5CF6]/10 to-[#D4A574]/10 p-6 shadow-2xl shadow-[#8B5CF6]/20">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4A574] to-[#8B5CF6] flex items-center justify-center shadow-lg shadow-[#8B5CF6]/50">
                          <Heart className="w-8 h-8 text-white animate-pulse" />
                        </div>
                        <span className="absolute -top-1 -right-1 flex h-5 w-5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-5 w-5 bg-green-500 border-2 border-white"></span>
                        </span>
                      </div>
                      <div className="text-left flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-2xl font-bold text-white">Sophia</h3>
                          <Badge className="bg-green-500/20 text-green-400 border-green-500/50">Available Now</Badge>
                        </div>
                        <p className="text-gray-300 text-sm mb-2">Your AI Emotional Wellness Companion</p>
                        <div className="flex flex-wrap gap-2 text-xs text-gray-400">
                          <span className="flex items-center gap-1">
                            <Brain className="w-3 h-3" />
                            OpenAI Powered
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Shield className="w-3 h-3" />
                            Private & Secure
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            24/7 Support
                          </span>
                        </div>
                      </div>
                      <Button 
                        onClick={() => {
                          const event = new CustomEvent('openWellnessChatbot');
                          window.dispatchEvent(event);
                        }}
                        className="bg-gradient-to-br from-[#D4A574] to-[#8B5CF6] hover:opacity-90 shadow-lg"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Talk to Sophia
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Chat Interface */}
          <section className="py-16 px-6">
            <div className="max-w-4xl mx-auto">
              <Card className="glass border-primary/20 overflow-hidden">
                {/* Avatar Section */}
                <div className="p-6 bg-gradient-to-r from-primary/10 to-accent/10 border-b border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold">Your Companion</h2>
                      <p className="text-sm text-muted-foreground">Always here to listen and support</p>
                    </div>
                  </div>
                </div>

                {/* Messages */}
                <ScrollArea className="h-[500px] p-6">
                  <AnimatePresence>
                    {messages.length === 0 ? (
                      <div className="flex flex-col items-center justify-center h-full text-center">
                        <Brain className="w-16 h-16 text-muted-foreground/50 mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Start Your Journey</h3>
                        <p className="text-sm text-muted-foreground max-w-md">
                          Share what's on your mind. I'm here to listen without judgment and support your emotional journey.
                        </p>
                      </div>
                    ) : (
                      messages.map((msg, index) => (
                        <motion.div
                          key={msg.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className={`mb-6 flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div className={`max-w-[80%] ${msg.role === 'user' ? 'order-2' : 'order-1'}`}>
                            <div className={`p-4 rounded-2xl ${
                              msg.role === 'user' 
                                ? 'bg-primary text-black' 
                                : 'glass border border-primary/20'
                            }`}>
                              <p className="text-sm leading-relaxed">{msg.message}</p>
                            </div>
                            <p className="text-xs text-muted-foreground mt-1 px-2">
                              {new Date(msg.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </p>
                          </div>
                        </motion.div>
                      ))
                    )}
                  </AnimatePresence>
                  <div ref={messagesEndRef} />
                </ScrollArea>

                {/* Input */}
                <div className="p-6 bg-card/50 border-t border-white/10">
                  <form onSubmit={(e) => { e.preventDefault(); sendMessage(); }} className="flex gap-3">
                    <Input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Share what's on your mind..."
                      className="flex-1"
                      disabled={isLoading}
                    />
                    <Button type="submit" disabled={isLoading || !input.trim()}>
                      <Send className="w-4 h-4" />
                    </Button>
                  </form>
                </div>
              </Card>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <Card className="glass border-primary/20 p-4 hover:border-primary/40 transition-colors cursor-pointer">
                  <Music className="w-6 h-6 text-primary mb-2" />
                  <h3 className="font-semibold mb-1">Soundtrack Therapy</h3>
                  <p className="text-sm text-muted-foreground">Personalized healing playlists</p>
                </Card>
                
                <Card className="glass border-accent/20 p-4 hover:border-accent/40 transition-colors cursor-pointer">
                  <Calendar className="w-6 h-6 text-accent mb-2" />
                  <h3 className="font-semibold mb-1">Wellness Check-in</h3>
                  <p className="text-sm text-muted-foreground">Daily emotional tracking</p>
                </Card>
                
                <Card className="glass border-primary/20 p-4 hover:border-primary/40 transition-colors cursor-pointer">
                  <Sparkles className="w-6 h-6 text-primary mb-2" />
                  <h3 className="font-semibold mb-1">Future Self</h3>
                  <p className="text-sm text-muted-foreground">Transformation encouragement</p>
                </Card>
              </div>
            </div>
          </section>
        </main>
      </Layout>
      <WellnessChatbot />
    </AuthGuard>
  );
}