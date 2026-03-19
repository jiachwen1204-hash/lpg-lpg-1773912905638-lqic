```react
'use client'

import AnimateIn from '@/components/ui/AnimateIn'

const CONTENT = {
  badge: 'Next-Gen AI Platform',
  headline: 'Turn Complex Data Into',
  highlight: 'Actionable Intelligence',
  subline: 'We build intelligent technology that helps businesses work smarter. Our AI-powered ecosystem transforms data into insights, automates operations with precision, and creates seamless digital experiences for real-world business growth.',
  cta: { label: 'Get Started', href: '#contact' },
  secondary: { label: 'See How It Works', href: '#features' },
  stats: [
    { value: '10x', label: 'Faster Decisions' },
    { value: '85%', label: 'Operational Efficiency' },
    { value: '24/7', label: 'AI-Powered Automation' },
  ],
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[var(--color-background)] pt-nav"
    >
      {/* Background depth layers */}
      <div className="absolute inset-0">
        {/* Primary ambient orb */}
        <div
          aria-hidden
          className="absolute top-[-15%] left-[5%] w-[700px] h-[700px] rounded-full bg-brand-500/20 blur-[180px] animate-pulse pointer-events-none"
        />
        {/* Secondary orb */}
        <div
          aria-hidden
          className="absolute bottom-[-10%] right-[5%] w-[600px] h-[600px] rounded-full bg-brand-600/15 blur-[150px] animate-pulse pointer-events-none"
          style={{ animationDelay: '2s' }}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
          }}
        />
        {/* Noise texture */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '256px 256px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-section-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            {/* Badge */}
            <AnimateIn delay={0}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill border border-surface-overlay bg-surface-raised text-sm text-content-secondary mb-8">
                <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
                {CONTENT.badge}
              </div>
            </AnimateIn>

            {/* Headline with gradient highlight */}
            <AnimateIn delay={80}>
              <h1 className="font-heading font-black text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.03em] text-content-primary mb-6">
                {CONTENT.headline}{' '}
                <span className="bg-gradient-to-r from-brand-500 via-brand-500 to-brand-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer">
                  {CONTENT.highlight}
                </span>
              </h1>
            </AnimateIn>

            {/* Subline */}
            <AnimateIn delay={160}>
              <p className="text-lg md:text-xl text-content-secondary/80 leading-relaxed mb-10 max-w-xl">
                {CONTENT.subline}
              </p>
            </AnimateIn>

            {/* CTAs */}
            <AnimateIn delay={240}>
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-16">
                <div className="relative">
                  <div className="absolute inset-0 bg-brand-500/40 blur-2xl rounded-pill scale-110" />
                  <a
                    href={CONTENT.cta.href}
                    className="relative z-10 inline-flex px-8 py-4 font-heading font-semibold bg-brand-500 text-content-inverse rounded-card hover:bg-brand-700 hover:shadow-glow-lg transition-all duration-300 ease-expo-out"
                  >
                    {CONTENT.cta.label}
                  </a>
                </div>
                <a
                  href={CONTENT.secondary.href}
                  className="inline-flex items-center gap-2 px-8 py-4 font-heading font-medium border border-surface-overlay text-content-secondary rounded-card hover:border-brand-500/50 hover:text-brand-400 transition-all duration-300 ease-expo-out"
                >
                  {CONTENT.secondary.label}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>
            </AnimateIn>

            {/* Stats */}
            <AnimateIn delay={320}>
              <div className="flex flex-wrap gap-12 pt-8 border-t border-surface-overlay">
                {CONTENT.stats.map((stat, i) => (
                  <div key={stat.label} className="relative">
                    <div className="font-heading font-black text-4xl md:text-5xl bg-gradient-to-r from-brand-400 to-brand-500 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-content-muted mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>

          {/* Right: Floating UI mockup */}
          <div className="hidden lg:block relative">
            <AnimateIn delay={200}>
              <div className="relative">
                {/* Main dashboard card */}
                <div className="relative rounded-card-lg border border-surface-overlay bg-surface-raised/80 backdrop-blur-xl p-6 shadow-card-lg overflow-hidden">
                  {/* Top accent line */}
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />
                  
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="label-sm text-content-muted">AI Analytics Dashboard</span>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
                        <span className="text-xs text-brand-400">Real-time Processing</span>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-brand-500/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                  </div>

                  {/* Fake chart */}
                  <div className="flex items-end gap-1.5 h-28 mb-6">
                    {[30, 55, 40, 70, 50, 85, 60, 90, 75, 95, 80, 100].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm transition-all duration-500"
                        style={{
                          height: `${h}%`,
                          background: i >= 10 ? 'linear-gradient(to top, var(--color-brand-500), var(--color-brand-400))' : 'linear-gradient(to top, var(--color-surface-overlay), var(--color-surface-overlay))',
                          opacity: i >= 10 ? 1 : 0.4 + (i / 12) * 0.4,
                        }}
                      />
                    ))}
                  </div>

                  {/* Metrics row */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: 'Data Processed', value: '2.4TB', trend: '+18%', isPositive: true },
                      { label: 'Accuracy', value: '99.7%', trend: '↑', isPositive: true },
                      { label: 'Response', value: '<50ms', trend: 'Optimal', isPositive: true },
                    ].map((m) => (
                      <div key={m.label} className="rounded-xl bg-surface-overlay/50 p-3 border border-surface-overlay">
                        <div className="label-sm text-content-muted mb-1">{m.label}</div>
                        <div className="font-heading font-bold text-lg text-content-primary">{m.value}</div>
                        <div className={`text-xs mt-0.5 ${m.isPositive ? 'text-brand-400' : 'text-content-muted'}`}>{m.trend}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating insight card - top right */}
                <div className="absolute -top-6 -right-6 card-glass p-4 animate-float">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-brand-500/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <span className="label-sm text-brand-400">Insight</span>
                  </div>
                  <div className="text-sm text-content-primary font-medium">85% Cost Reduction</div>
                  <div className="text-xs text-content-muted mt-0.5">In automation workflows</div>
                </div>

                {/* Floating badge - bottom left */}
                <div className="absolute -bottom-4 -left-6 card-glass p-3 flex items-center gap-3 animate-float" style={{ animationDelay: '1.5s' }}>
                  <div className="w-10 h-10 rounded-xl bg-brand-500/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-content-primary">Enterprise Ready</div>
                    <div className="text-xs text-content-muted">SOC 2 Compliant</div>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[var(--color-background)] to-transparent pointer-events-none" />
    </section>
  )
}
```