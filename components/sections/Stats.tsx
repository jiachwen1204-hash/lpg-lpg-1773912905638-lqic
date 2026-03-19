'use client'
import { useEffect, useRef, useState } from 'react'
import AnimateIn from '@/components/ui/AnimateIn'

const stats = [
  { value: 500,  suffix: '+', label: 'Enterprise Clients', description: 'Businesses transformed with AI' },
  { value: 99.9, suffix: '%', label: 'Platform Uptime', description: 'Enterprise-grade reliability' },
  { value: 10,   suffix: 'M+', label: 'Data Points', description: 'Processed daily at scale' },
  { value: 150,  suffix: '+', label: 'Integrations', description: 'Seamless ecosystem connect' },
]

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.unobserve(el)
      const duration = 1800
      const start = performance.now()
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        const current = eased * target
        setCount(target % 1 !== 0 ? Math.round(current * 10) / 10 : Math.round(current))
        if (progress < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, { threshold: 0.3 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function Stats() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#0f0f13]">
      {/* Ambient glow orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand-500/[0.06] blur-[180px] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-violet-600/[0.08] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-brand-400/[0.05] blur-[100px] pointer-events-none" />
      
      {/* Dot grid texture */}
      <div className="absolute inset-0 opacity-[0.08]"
           style={{
             backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
             backgroundSize: '32px 32px',
           }} />
      
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <AnimateIn className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
            By the Numbers
          </span>
          <h2 className="font-heading font-bold text-display-lg text-content-primary mb-4">
            Scale That Speaks{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-400 to-violet-400">
              for Itself
            </span>
          </h2>
          <p className="text-lg text-content-secondary max-w-2xl mx-auto">
            Real metrics from real deployments — proving that our AI ecosystem delivers measurable business impact at enterprise scale.
          </p>
        </AnimateIn>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={stat.label}>
              <AnimateIn 
                delay={i * 100}
                className="group relative"
              >
                {/* Card background */}
                <div className="relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 overflow-hidden transition-all duration-500 hover:border-brand-500/30 hover:bg-white/[0.05]">
                  
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-brand-500/0 group-hover:bg-brand-500/[0.03] transition-colors duration-500 rounded-2xl" />
                  
                  <div className="relative">
                    {/* Large number */}
                    <div className="font-heading font-black text-display-xl text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/60 mb-2">
                      <CountUp target={stat.value} suffix={stat.suffix} />
                    </div>
                    
                    {/* Label */}
                    <div className="font-heading font-semibold text-lg text-content-primary mb-1">
                      {stat.label}
                    </div>
                    
                    {/* Description */}
                    <div className="text-sm text-content-muted">
                      {stat.description}
                    </div>
                  </div>
                </div>
                
                {/* Corner accent - top left */}
                <div className="absolute top-3 left-3 w-2 h-2 rounded-full bg-brand-500/20 group-hover:bg-brand-500/50 transition-colors duration-500" />
              </AnimateIn>
            </div>
          ))}
        </div>
        
        {/* Bottom decorative element */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center gap-8 text-content-muted text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>SOC 2 Certified</span>
            </div>
            <div className="w-px h-4 bg-white/10" />
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>GDPR Compliant</span>
            </div>
            <div className="w-px h-4 bg-white/10" />
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>99.9% SLA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}