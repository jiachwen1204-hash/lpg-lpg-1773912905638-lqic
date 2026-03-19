import { LucideIcon } from 'lucide-react'
import AnimateIn from '@/components/ui/AnimateIn'
import { Brain, Cpu, BarChart3, Layers, Zap, GitBranch } from 'lucide-react'

interface Service {
  icon: LucideIcon
  title: string
  description: string
  highlight: string
}

const services: Service[] = [
  {
    icon: Brain,
    title: 'AI-Powered Analytics',
    description:
      'Transform complex data into actionable insights with our intelligent analytics engine. Machine learning models that adapt to your business patterns and surface what matters most.',
    highlight: 'Real-time intelligence',
  },
  {
    icon: Cpu,
    title: 'Intelligent Automation',
    description:
      'Eliminate manual workflows with precision automation. Our AI agents handle repetitive tasks, freeing your team to focus on strategic initiatives that drive growth.',
    highlight: 'Reduce operational overhead',
  },
  {
    icon: Layers,
    title: 'Scalable Infrastructure',
    description:
      'Enterprise-grade infrastructure that grows with your needs. From startup to scale-up, our cloud-native platform ensures performance, security, and reliability at any size.',
    highlight: 'Elastic scalability',
  },
  {
    icon: BarChart3,
    title: 'Predictive Insights',
    description:
      'Anticipate market trends and customer behavior before they happen. Our predictive models give you the forward-looking intelligence to make confident decisions.',
    highlight: 'Forecast-driven strategy',
  },
  {
    icon: Zap,
    title: 'Seamless Integration',
    description:
      'Connect your existing tools and data sources into one powerful ecosystem. APIs and pre-built connectors ensure your technology stack works together effortlessly.',
    highlight: 'Zero friction setup',
  },
  {
    icon: GitBranch,
    title: 'Custom AI Solutions',
    description:
      "Don't settle for one-size-fits-all. We build tailored AI solutions designed specifically for your industry's challenges and your company's unique requirements.",
    highlight: 'Purpose-built for you',
  },
]

const HEADING = 'Power Your Business with AI'
const SUBTEXT =
  'Our intelligent technology platform combines artificial intelligence, automation, and scalable infrastructure to help you work smarter — turning complex data into actionable insights and automating operations with precision.'

export default function Services() {
  return (
    <section id="services" className="relative py-section-lg overflow-hidden bg-[#0f0f13]">
      {/* Depth layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-brand-500/[0.06] blur-[200px]" />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimateIn className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-brand-400 mb-4">
            Solutions
          </p>
          <h2 className="font-heading font-black text-[clamp(2.5rem,5vw,4rem)] leading-[1.05] tracking-[-0.03em] text-content-inverse mb-6">
            Power Your Business{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-400 via-sky-400 to-brand-400 bg-[length:200%_auto] animate-shimmer">
              with AI
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-content-secondary leading-relaxed">
            {SUBTEXT}
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <AnimateIn key={svc.title} delay={i * 100}>
              <div className="group relative h-full p-8 rounded-card-lg border border-white/[0.06] bg-white/[0.02] hover:border-brand-500/40 hover:bg-white/[0.05] transition-all duration-500 ease-expo-out overflow-hidden">
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Hover glow */}
                <div className="absolute inset-0 bg-brand-500/0 group-hover:bg-brand-500/[0.04] transition-colors duration-500 rounded-card-lg" />

                <div className="relative">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-card bg-brand-500/10 flex items-center justify-center mb-6 group-hover:bg-brand-500/20 group-hover:scale-110 transition-all duration-300">
                    <svc.icon className="w-7 h-7 text-brand-400" />
                  </div>

                  {/* Highlight badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
                    <span className="text-xs font-medium text-brand-400">{svc.highlight}</span>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-content-inverse mb-3 group-hover:text-brand-400 transition-colors duration-300">
                    {svc.title}
                  </h3>
                  <p className="text-content-secondary leading-relaxed">{svc.description}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimateIn delay={600}>
          <div className="mt-16 text-center">
            <p className="text-content-muted mb-6">Ready to transform your business operations?</p>
            <div className="relative inline-flex">
              <div className="absolute inset-0 bg-brand-500/30 blur-xl rounded-pill scale-110" />
              <a
                href="#contact"
                className="relative z-10 inline-flex items-center gap-2 px-8 py-4 rounded-pill bg-brand-500 text-content-inverse font-semibold text-lg hover:bg-brand-400 transition-all duration-300 shadow-glow"
              >
                Get Started
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}