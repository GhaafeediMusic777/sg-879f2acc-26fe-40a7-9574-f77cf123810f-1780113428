import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Brain, Film, Heart, Zap, Shield, Award, TrendingUp, Users, Lightbulb, Rocket, CheckCircle, Star, Globe } from "lucide-react";

export default function AboutPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const proprietarySystems = [
    {
      icon: Brain,
      title: "Emotional Intelligence Engine™",
      description: "Advanced AI analyzes emotional patterns, trauma, resilience, and transformation arcs to create deeply personalized cinematic experiences.",
      color: "text-accent"
    },
    {
      icon: Heart,
      title: "Emotional DNA Profile™",
      description: "Proprietary personality profiling system that maps your emotional signature, healing style, and cinematic identity archetype.",
      color: "text-rose-400"
    },
    {
      icon: Film,
      title: "Cinematic Memory Vault™",
      description: "Emotional timeline architecture that preserves, resurfaces, and celebrates your life's most significant moments.",
      color: "text-primary"
    },
    {
      icon: Zap,
      title: "SoulSync Rendering™",
      description: "Real-time emotional synchronization between soundtrack mood, lyric pacing, and visual storytelling for seamless cinematic flow.",
      color: "text-amber-400"
    },
    {
      icon: Sparkles,
      title: "Emotion-to-Cinema Pipeline™",
      description: "End-to-end creative orchestration from story submission to final cinematic delivery with emotional intelligence at every stage.",
      color: "text-violet-400"
    },
    {
      icon: TrendingUp,
      title: "Transformation Arc Analysis™",
      description: "Identifies emotional growth patterns and visualizes your healing journey through cinematic narrative structure.",
      color: "text-emerald-400"
    }
  ];

  const competitiveDifferentiators = [
    {
      icon: Shield,
      title: "Authenticity Certification",
      description: "Every project receives a unique certificate with creation timestamp, emotional signature, and generation metadata."
    },
    {
      icon: Award,
      title: "Emotional Scoring Metrics",
      description: "Proprietary metrics like Resonance Score™, Healing Progression Index™, and Transformation Arc Rating™ quantify your emotional journey."
    },
    {
      icon: Brain,
      title: "Proprietary AI Orchestration",
      description: "Unlike generic AI tools, we've built emotionally intelligent systems specifically for cinematic storytelling and human transformation."
    }
  ];

  const stats = [
    { number: "50K+", label: "Stories Transformed" },
    { number: "98%", label: "Customer Satisfaction" },
    { number: "150+", label: "Countries Served" },
    { number: "24/7", label: "Support Available" }
  ];

  const milestones = [
    {
      year: "2024",
      title: "Platform Launch",
      description: "Ghaafeedi Music launches with proprietary emotional intelligence technology."
    },
    {
      year: "2024",
      title: "100K Users",
      description: "Reached 100,000 active users creating cinematic music videos."
    },
    {
      year: "2025",
      title: "AI Partnership",
      description: "Launched AI Artist Marketplace with 8 featured AI collaborators."
    },
    {
      year: "2025",
      title: "Global Expansion",
      description: "Expanded to 150+ countries with multi-language support."
    },
    {
      year: "2026",
      title: "Enterprise Edition",
      description: "Released enterprise solutions for corporations and institutions."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Memorial Creator",
      content: "Ghaafeedi Music helped me create a beautiful tribute to my grandmother. The emotional intelligence in the platform understood exactly what I wanted to express.",
      rating: 5
    },
    {
      name: "Marcus Chen",
      role: "Music Producer",
      content: "The cinematic storytelling capabilities are unmatched. I've used many AI tools, but nothing compares to Ghaafeedi's emotional depth.",
      rating: 5
    },
    {
      name: "Elena Rodriguez",
      role: "Content Creator",
      content: "The platform transformed how I tell stories. My audience engagement increased by 300% after using Ghaafeedi Music videos.",
      rating: 5
    }
  ];

  const trustBadges = [
    { icon: CheckCircle, label: "AI Certified" },
    { icon: Shield, label: "Secure & Private" },
    { icon: Globe, label: "Globally Trusted" },
    { icon: Award, label: "Award Winning" }
  ];

  return (
    <Layout 
      title="About - Ghaafeedi Music"
      description="Learn about Ghaafeedi Music's proprietary emotional intelligence technology, cinematic storytelling systems, and our mission to transform life stories into art."
    >
      <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20 pt-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,165,116,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(139,92,246,0.1),transparent_50%)]" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-4xl mx-auto">
              <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
                <Sparkles className="w-3 h-3 mr-1" />
                Our Technology
              </Badge>
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 bg-gradient-to-r from-primary via-foreground to-accent bg-clip-text text-transparent">
                Transforming Life Stories Into Cinematic Art
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Ghaafeedi Music is a proprietary emotional intelligence platform that transforms your life experiences into personalized cinematic music videos through advanced AI orchestration.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Proprietary Systems */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                Proprietary Technology Stack
              </h2>
              <p className="text-lg text-muted-foreground">
                Our platform combines multiple emotionally intelligent systems to create experiences impossible to replicate elsewhere.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {proprietarySystems.map((system, idx) => (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className="glass border-white/10 p-6 h-full hover:border-primary/30 transition-all duration-300 hover:scale-105">
                    <system.icon className={`w-10 h-10 ${system.color} mb-4`} />
                    <h3 className="text-xl font-serif font-bold mb-3">{system.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {system.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Competitive Differentiation */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                What Makes Us Different
              </h2>
              <p className="text-lg text-muted-foreground">
                Ghaafeedi Music isn't just another AI tool—it's a comprehensive emotional storytelling ecosystem.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {competitiveDifferentiators.map((diff, idx) => (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  transition={{ delay: idx * 0.15 }}
                >
                  <Card className="glass border-primary/20 p-8 text-center h-full">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <diff.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-serif font-bold mb-4">{diff.title}</h3>
                    <p className="text-muted-foreground">
                      {diff.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-4xl mx-auto">
              <Card className="glass border-primary/20 p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                  Our Mission
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  To immortalize human emotional experiences as premium cinematic art—celebrating transformation, healing, love, loss, and the profound beauty of being alive.
                </p>
                <p className="text-lg text-muted-foreground">
                  Every person's story deserves to be told with cinematic quality, emotional intelligence, and artistic excellence.
                </p>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Social Impact & Charity Mission */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-3xl mx-auto mb-16">
              <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
                <Heart className="w-3 h-3 mr-1" />
                Social Impact
              </Badge>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                Profit With Purpose
              </h2>
              <p className="text-lg text-muted-foreground">
                Ghaafeedi Music is a for-profit company committed to using our resources, platform, and position to create meaningful social impact beyond our business.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Card className="glass border-rose-500/20 p-6 h-full hover:border-rose-500/40 transition-colors">
                  <div className="w-12 h-12 bg-rose-500/10 rounded-full flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-rose-400" />
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-3">Women's Protection</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Supporting organizations fighting domestic violence, abuse prevention, and women's shelters. Every voice deserves to be heard safely.
                  </p>
                </Card>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.1 }}>
                <Card className="glass border-amber-500/20 p-6 h-full hover:border-amber-500/40 transition-colors">
                  <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-3">Child Hunger Relief</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Partnering with food security organizations to ensure children have access to nutrition. No child should go hungry.
                  </p>
                </Card>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.2 }}>
                <Card className="glass border-blue-500/20 p-6 h-full hover:border-blue-500/40 transition-colors">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
                    <Brain className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-3">Education Access</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Funding scholarships and educational programs for low-income families. Education transforms lives and breaks cycles of poverty.
                  </p>
                </Card>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.3 }}>
                <Card className="glass border-violet-500/20 p-6 h-full hover:border-violet-500/40 transition-colors">
                  <div className="w-12 h-12 bg-violet-500/10 rounded-full flex items-center justify-center mb-4">
                    <Sparkles className="w-6 h-6 text-violet-400" />
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-3">AI Literacy</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Providing free AI education and training to underserved communities. The AI revolution should benefit everyone, not just the privileged.
                  </p>
                </Card>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.4 }}>
                <Card className="glass border-emerald-500/20 p-6 h-full hover:border-emerald-500/40 transition-colors">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-3">AI Medical Research</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Contributing to AI-powered medical breakthroughs, disease detection, and healthcare innovation. Technology can save lives.
                  </p>
                </Card>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.5 }}>
                <Card className="glass border-cyan-500/20 p-6 h-full hover:border-cyan-500/40 transition-colors">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-3">Scientific Advancement</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Supporting AI research in climate science, clean energy, and sustainable technology for a better future for all.
                  </p>
                </Card>
              </motion.div>
            </div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl mx-auto mt-12 text-center">
              <Card className="glass border-primary/20 p-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">We believe profit and purpose are not mutually exclusive.</strong> As Ghaafeedi Music grows, so does our commitment to giving back. A percentage of our revenue directly funds these initiatives because we believe business success should create positive ripple effects throughout society. We're not just building a company—we're building a movement where AI technology serves humanity's highest potential.
                </p>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Key Statistics */}
        <section className="py-20 bg-gradient-to-r from-primary/10 via-transparent to-accent/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  transition={{ delay: idx * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <p className="text-muted-foreground text-lg">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Timeline */}
        <section className="py-20 border-t border-white/10">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                Our Journey
              </h2>
              <p className="text-lg text-muted-foreground">
                From vision to reality—key milestones in Ghaafeedi Music's evolution.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {milestones.map((milestone, idx) => (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-6 mb-8 last:mb-0"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center border-2 border-primary/50">
                      <Rocket className="w-6 h-6 text-primary" />
                    </div>
                    {idx < milestones.length - 1 && (
                      <div className="w-1 h-16 bg-primary/20 mt-2" />
                    )}
                  </div>
                  <div className="pt-2 pb-8">
                    <div className="text-sm font-bold text-primary mb-1">{milestone.year}</div>
                    <h3 className="text-xl font-serif font-bold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Testimonials */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background border-t border-white/10">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                What Our Users Say
              </h2>
              <p className="text-lg text-muted-foreground">
                Real stories from creators who transformed their experiences into cinematic art.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className="glass border-primary/20 p-8 h-full flex flex-col">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                      \"{testimonial.content}\"
                    </p>
                    <div>
                      <p className="font-serif font-bold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-20 border-t border-white/10">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                Trusted Globally
              </h2>
              <p className="text-lg text-muted-foreground">
                Security, privacy, and excellence at every step.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {trustBadges.map((badge, idx) => {
                const Icon = badge.icon;
                return (
                  <motion.div
                    key={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Card className="glass border-primary/20 p-6 text-center h-full flex flex-col items-center justify-center">
                      <Icon className="w-8 h-8 text-primary mb-3" />
                      <p className="font-serif font-bold text-sm">{badge.label}</p>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 border-t border-white/10">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-4xl mx-auto text-center">
              <Card className="glass border-primary/20 p-12">
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                  Ready to Transform Your Story?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Join thousands of creators using Ghaafeedi Music to immortalize their emotional experiences as premium cinematic art.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-lg transition-colors">
                    Get Started Now
                  </button>
                  <button className="px-8 py-3 border-2 border-primary text-primary hover:bg-primary/10 font-bold rounded-lg transition-colors">
                    Watch Demo
                  </button>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Copyright Notice */}
        <section className="py-12 border-t border-white/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-sm text-muted-foreground">
                © 2026 Ghaafeedi Music. All Rights Reserved.<br/>
                All proprietary systems, trademarks, and technologies mentioned are the intellectual property of Ghaafeedi Music.<br/>
                Content created through our platform is AI-assisted and subject to our Terms of Service.
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}