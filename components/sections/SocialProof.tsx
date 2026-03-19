import AnimateIn from '@/components/ui/AnimateIn'
import { QuoteIcon, StarIcon, ChartBarIcon, BoltIcon, ShieldCheckIcon } from 'lucide-react'

const clients = [
  'TechFlow Solutions',
  'DataSphere AI',
  'Nexus Dynamics',
  'QuantumEdge Labs',
  'Synapse Systems',
  'Apex Innovations',
  'NeuralPath Corp',
  'CloudForge Technologies',
]

const testimonials = [
  {
    quote: 'Strongest transformed our data operations. We went from weeks of processing time to real-time insights. The AI-powered automation reduced our operational costs by 40% while improving accuracy across the board.',
    author: 'Sarah Chen',
    role: 'CTO, TechFlow Solutions',
  },
  {
    quote: 'The scalability of Strongest\'s platform is remarkable. What used to require an entire data science team now runs autonomously. Our team can focus on strategic initiatives instead of manual data processing.',
    author: 'Marcus Webb',
    role: 'VP of Operations, DataSphere AI',
  },
]

const stats = [
  { value: '500+', label: 'AI Deployments', sublabel: 'Across industries' },
  { value: '85%', label: 'Time Saved', sublabel: 'On data operations' },
  { value: '99.9%', label: 'Accuracy Rate', sublabel: 'In automated processes' },
]

export default function SocialProof() {
  return (
    <section className="py-section bg-[#0f0f13] relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand-500/8 blur-[180px] pointer-events-none" />

      {/* Subtle dot grid */}
      <div className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <AnimateIn className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-400 text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
            Trusted by industry leaders
          </span>
          <h2 className="font-heading font-bold text-[clamp(2rem,4vw,3rem)] text-white leading-tight">
            Powering the Future of{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-400 to-brand-600">
              Intelligent Business
            </span>
          </h2>
          <p className="text-content-secondary text-lg mt-4 max-w-2xl mx-auto">
            Leading enterprises leverage Strongest to automate operations, extract actionable insights, and scale their AI capabilities without compromise.
          </p>
        </AnimateIn>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {stats.map((stat, i) => (
            <AnimateIn key={i} delay={i * 100}>
              <div className="relative p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-brand-500/30 transition-all duration-300 group">
                <div className="absolute inset-0 bg-brand-500/0 group-hover:bg-brand-500/[0.03] transition-colors duration-500 rounded-2xl" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-heading font-bold text-5xl text-white">{stat.value}</span>
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                      <span className="text-green-400 text-sm">↑</span>
                    </div>
                  </div>
                  <div className="font-semibold text-white text-lg">{stat.label}</div>
                  <div className="text-sm text-white/40 mt-1">{stat.sublabel}</div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Client Logo Marquee */}
        <div className="relative mb-20 overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0f0f13] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0f0f13] to-transparent z-10 pointer-events-none" />
          <div className="flex gap-6 animate-marquee w-max">
            {[...clients, ...clients].map((name, i) => (
              <div
                key={i}
                className="whitespace-nowrap px-6 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-white/60 font-medium text-sm"
              >
                {name}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <AnimateIn key={i} delay={i * 120}>
              <div className="relative p-8 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl hover:border-brand-500/30 hover:bg-white/[0.06] transition-all duration-300 group">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />
                <div className="absolute inset-0 bg-brand-500/0 group-hover:bg-brand-500/[0.03] transition-colors duration-500 rounded-2xl" />

                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-brand-500/20 flex items-center justify-center">
                      <QuoteIcon className="w-6 h-6 text-brand-400" />
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                  </div>

                  <p className="text-content-primary/90 leading-relaxed mb-6 text-lg">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center font-bold text-white text-lg">
                      {t.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{t.author}</div>
                      <div className="text-sm text-white/50">{t.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Trust Badges */}
        <AnimateIn className="mt-16 flex flex-wrap justify-center gap-8 items-center opacity-60">
          <div className="flex items-center gap-2 text-white/40">
            <ShieldCheckIcon className="w-5 h-5" />
            <span className="text-sm font-medium">SOC 2 Compliant</span>
          </div>
          <div className="flex items-center gap-2 text-white/40">
            <ChartBarIcon className="w-5 h-5" />
            <span className="text-sm font-medium">GDPR Ready</span>
          </div>
          <div className="flex items-center gap-2 text-white/40">
            <BoltIcon className="w-5 h-5" />
            <span className="text-sm font-medium">99.99% Uptime</span>
          </div>
          <div className="flex items-center gap-2 text-white/40">
            <ShieldCheckIcon className="w-5 h-5" />
            <span className="text-sm font-medium">ISO 27001</span>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}