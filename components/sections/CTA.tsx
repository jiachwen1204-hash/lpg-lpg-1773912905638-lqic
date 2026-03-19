'use client'

import AnimateIn from '@/components/ui/AnimateIn'

const CONTENT = {
  eyebrow: 'Where AI Meets Real-World Business Impact',
  heading: 'Ready to Transform Your Business?',
  subtext: 'Join the next generation of AI-powered organizations turning complex data into actionable insights, automating operations with precision, and creating seamless digital experiences.',
  cta: { label: 'Get Started', href: '#contact' },
  secondary: { label: 'See Our Solutions', href: '#features' },
}

export default function CTA() {
  return (
    <section className="py-section-lg relative overflow-hidden bg-[#0f0f13]">
      {/* Background depth layers */}
      <div className="absolute inset-0">
        {/* Primary ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-brand-500/15 blur-[160px] animate-pulse-glow pointer-events-none" />
        {/* Secondary glow orb */}
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-brand-400/10 blur-[120px] animate-pulse pointer-events-none" />
        {/* Noise texture */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundRepeat: 'repeat', backgroundSize: '256px 256px' }} />
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '40px 40px', maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)' }} />
      </div>

      {/* Gradient line top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <AnimateIn>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-pill bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
            {CONTENT.eyebrow}
          </span>
        </AnimateIn>

        <AnimateIn delay={100}>
          <h2 className="font-heading font-black text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] tracking-[-0.03em] mb-6">
            <span className="text-content-primary">Ready to </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-400 via-brand-300 to-brand-400 bg-[length:200%_auto] animate-shimmer">Transform</span>
            <br />
            <span className="text-content-primary">Your Business?</span>
          </h2>
        </AnimateIn>

        <AnimateIn delay={200}>
          <p className="text-lg md:text-xl text-content-secondary/80 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            {CONTENT.subtext}
          </p>
        </AnimateIn>

        <AnimateIn delay={300}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            {/* Primary CTA with glow */}
            <div className="relative">
              <div className="absolute inset-0 bg-brand-500/50 blur-2xl rounded-pill scale-110 opacity-60" />
              <a
                href={CONTENT.cta.href}
                className="relative z-10 px-10 py-5 font-body font-semibold bg-brand-500 text-content-inverse rounded-card hover:bg-brand-700 transition-all duration-300 ease-expo-out active:scale-[0.97] shadow-glow hover:shadow-glow-lg"
              >
                {CONTENT.cta.label}
                <span className="ml-2 inline-block">→</span>
              </a>
            </div>
            <a
              href={CONTENT.secondary.href}
              className="group px-10 py-5 font-body font-medium border border-surface-border text-content-secondary rounded-card hover:border-brand-500/50 hover:text-brand-400 transition-all duration-300 ease-expo-out bg-white/[0.02] hover:bg-white/[0.05]"
            >
              {CONTENT.secondary.label}
              <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">→</span>
            </a>
          </div>
        </AnimateIn>

        {/* Trust indicators */}
        <AnimateIn delay={400}>
          <div className="mt-16 pt-10 border-t border-white/5">
            <p className="text-sm text-content-muted mb-6">Trusted by forward-thinking organizations</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
              {['Enterprise Corp', 'TechFlow Inc', 'DataFirst', 'NextGen AI', 'ScaleUp'].map((company) => (
                <span key={company} className="text-sm font-medium text-content-secondary tracking-wide">
                  {company}
                </span>
              ))}
            </div>
          </div>
        </AnimateIn>
      </div>

      {/* Gradient line bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />
    </section>
  )
}