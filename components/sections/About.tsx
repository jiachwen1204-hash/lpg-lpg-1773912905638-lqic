```javascript
import AnimateIn from '@/components/ui/AnimateIn'
import { CheckCircle, Brain, Zap, Shield, BarChart3, Users } from 'lucide-react'

const CONTENT = {
  label: 'About Strongest',
  heading: 'Where AI Meets Real-World Business Impact',
  subheading: 'Intelligent Technology for Smarter Operations',
  paragraphs: [
    'We build intelligent technology that helps businesses work smarter. As a next-generation AI Technology Platform, we combine artificial intelligence, automation, and scalable infrastructure into one powerful ecosystem.',
    'Our solutions help organizations turn complex data into actionable insights, automate operations with precision, and create seamless digital experiences for their customers. We don\'t just implement AI — we make it practical, scalable, and impactful for real-world business growth.',
  ],
  values: [
    { icon: Brain, title: 'AI-First Architecture', desc: 'Purpose-built for intelligent automation at scale' },
    { icon: Zap, title: 'Real-Time Processing', desc: 'Instant insights from complex data streams' },
    { icon: Shield, title: 'Enterprise Security', desc: 'Bank-grade protection for your sensitive data' },
    { icon: BarChart3, title: 'Measurable ROI', desc: 'Proven impact on business outcomes' },
    { icon: Users, title: 'Seamless Integration', desc: 'Works with your existing tech stack' },
    { icon: CheckCircle, title: 'Scalable Solutions', desc: 'Grow from startup to enterprise' },
  ],
  stats: [
    { value: '10M+', label: 'Data Points Processed Daily' },
    { value: '99.9%', label: 'Platform Uptime' },
    { value: '500+', label: 'Enterprise Clients' },
  ],
  cta: { label: 'Get Started', href: '#contact' },
}

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-950 via-brand-950 to-brand-950 pointer-events-none" />
      
      {/* Ambient glow orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[800px] h-[800px] rounded-full bg-brand-500/10 blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] rounded-full bg-brand-400/8 blur-[160px] pointer-events-none" />
      
      {/* Dot grid texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgb(var(--color-content-primary) / 0.15) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
        }}
      />
      
      {/* Main content */}
      <div className="relative z-10 py-section-lg">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <AnimateIn>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-body font-medium mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
                Next-Gen AI Technology Platform
              </span>
            </AnimateIn>
            
            <AnimateIn delay={100}>
              <h2 className="font-heading font-black text-[clamp(2.5rem,5vw,4rem)] leading-[1.05] tracking-[-0.03em] mb-6">
                <span className="text-content-primary">Where </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-400 via-brand-300 to-brand-400 bg-[length:200%_auto] animate-shimmer">
                  AI Meets
                </span>
                <br />
                <span className="text-content-primary">Real-World Business Impact</span>
              </h2>
            </AnimateIn>
            
            <AnimateIn delay={200}>
              <p className="font-body text-xl text-content-secondary/80 font-light max-w-2xl mx-auto leading-relaxed">
                We build intelligent technology that helps businesses work smarter. Our solutions turn complex data into actionable insights and automate operations with precision.
              </p>
            </AnimateIn>
          </div>
          
          {/* Stats row */}
          <AnimateIn delay={300}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
              {CONTENT.stats.map((stat, i) => (
                <div 
                  key={stat.label}
                  className="relative group p-8 rounded-card-lg border border-white/[0.08] bg-white/[0.03] hover:border-brand-500/30 hover:bg-white/[0.06] transition-all duration-500 cursor-default"
                >
                  <div className="absolute inset-0 bg-brand-500/0 group-hover:bg-brand-500/[0.02] transition-colors duration-500 rounded-card-lg" />
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="font-heading font-black text-[clamp(2.5rem,5vw,3.5rem)] text-brand-400 leading-none mb-3">
                      {stat.value}
                    </div>
                    <div className="font-body text-content-muted font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </AnimateIn>
          
          {/* Two column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Story content */}
            <AnimateIn direction="left">
              <div className="lg:sticky lg:top-32">
                <p className="font-body text-sm font-medium tracking-widest uppercase text-brand-500 mb-3">
                  {CONTENT.label}
                </p>
                <h3 className="font-heading font-black text-[clamp(1.75rem,3vw,2.5rem)] text-content-primary leading-tight mb-6">
                  {CONTENT.subheading}
                </h3>
                
                <div className="space-y-5">
                  {CONTENT.paragraphs.map((p, i) => (
                    <p key={i} className="font-body text-lg text-content-secondary/80 leading-relaxed font-light">
                      {p}
                    </p>
                  ))}
                </div>
                
                {/* Key differentiators */}
                <div className="mt-10 p-6 rounded-card-lg border border-white/[0.08] bg-white/[0.02]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-500/20 flex items-center justify-center">
                      <Brain className="w-5 h-5 text-brand-400" />
                    </div>
                    <div>
                      <div className="font-heading font-semibold text-content-primary">Practical AI</div>
                      <div className="font-body text-sm text-content-muted">Not just concepts — real results</div>
                    </div>
                  </div>
                  <p className="font-body text-content-secondary/70 text-sm leading-relaxed">
                    We don&apos;t just implement AI — we make it practical, scalable, and impactful for real-world business growth. Every solution is designed with your specific outcomes in mind.
                  </p>
                </div>
                
                {/* CTA */}
                <div className="mt-8">
                  <div className="relative inline-flex">
                    <div className="absolute inset-0 bg-brand-500/30 blur-xl rounded-pill scale-110" />
                    <a
                      href={CONTENT.cta.href}
                      className="relative inline-flex items-center gap-2 px-8 py-4 font-body font-semibold bg-brand-500 text-white rounded-pill hover:bg-brand-400 transition-all duration-300 shadow-glow hover:shadow-glow-lg hover:scale-105"
                    >
                      {CONTENT.cta.label}
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </AnimateIn>
            
            {/* Right: Values grid */}
            <AnimateIn direction="right" delay={100}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CONTENT.values.map((value, i) => (
                  <div 
                    key={value.title}
                    className="group relative p-6 rounded-card-lg border border-white/[0.08] bg-white/[0.02] hover:border-brand-500/30 hover:bg-white/[0.05] transition-all duration-500 cursor-default"
                  >
                    <div className="absolute inset-0 bg-brand-500/0 group-hover:bg-brand-500/[0.02] transition-colors duration-500 rounded-card-lg" />
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative">
                      <div className="w-12 h-12 rounded-xl bg-brand-500/15 flex items-center justify-center mb-4 group-hover:bg-brand-500/25 transition-colors duration-300">
                        <value.icon className="w-6 h-6 text-brand-400" />
                      </div>
                      <h4 className="font-heading font-semibold text-lg text-content-primary mb-2">
                        {value.title}
                      </h4>
                      <p className="font-body text-sm text-content-muted leading-relaxed">
                        {value.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Visual accent - floating badge */}
              <div className="relative mt-8">
                <div className="absolute -top-4 -right-4 lg:-right-8 animate-float">
                  <div className="px-4 py-2 rounded-pill bg-brand-500/10 border border-brand-500/20 backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <span className="font-body text-sm font-medium text-brand-400">AI Powered</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />
    </section>
  )
}
```