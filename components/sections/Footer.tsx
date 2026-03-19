import Link from 'next/link'
import { Mail, MapPin, ArrowRight, Twitter, Linkedin, Github } from 'lucide-react'

const BRAND = {
  name: 'Strongest',
  tagline: 'Where AI Meets Real-World Business Impact',
  email: 'jiachwen33@gmail.com',
  address: 'B5-1-3, Forest Green Condominium, Bandar Sungai Long',
  description: 'We build intelligent technology that helps businesses work smarter.',
}

const footerLinks = {
  solutions: [
    { label: 'AI Automation', href: '#solutions' },
    { label: 'Data Intelligence', href: '#solutions' },
    { label: 'Digital Experience', href: '#solutions' },
    { label: 'Infrastructure', href: '#solutions' },
  ],
  company: [
    { label: 'About', href: '#about' },
    { label: 'Careers', href: '#careers' },
    { label: 'Contact', href: '#contact' },
    { label: 'Blog', href: '#blog' },
  ],
  resources: [
    { label: 'Documentation', href: '#docs' },
    { label: 'API Reference', href: '#api' },
    { label: 'Case Studies', href: '#cases' },
    { label: 'Support', href: '#support' },
  ],
}

const legal = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Cookie Policy', href: '/cookies' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-[#0f0f13] overflow-hidden">
      {/* Gradient accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />
      
      {/* Subtle glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-brand-500/5 blur-[120px] pointer-events-none" />
      
      {/* Dot grid pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <img 
                src="https://u5ft5besqtymo1lf.public.blob.vercel-storage.com/logos/1773912903996-ai-artificial-intelligence-improves-emai-600nw-2655586379.webp" 
                alt="Strongest logo" 
                className="h-10 w-auto object-contain" 
              />
              <span className="font-heading font-bold text-2xl text-content-inverse group-hover:text-brand-500 transition-colors">
                {BRAND.name}
              </span>
            </Link>
            
            <p className="mt-5 text-base text-content-secondary leading-relaxed max-w-sm">
              {BRAND.description}
            </p>
            
            <p className="mt-4 text-sm text-brand-500 font-medium italic">
              {BRAND.tagline}
            </p>

            {/* Contact info */}
            <div className="mt-8 space-y-3">
              <a
                href={`mailto:${BRAND.email}`}
                className="flex items-center gap-2.5 text-sm text-content-muted hover:text-brand-500 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-surface-overlay flex items-center justify-center group-hover:bg-brand-500/10 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                {BRAND.email}
              </a>
              <div className="flex items-start gap-2.5 text-sm text-content-muted">
                <div className="w-8 h-8 rounded-lg bg-surface-overlay flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="leading-relaxed">{BRAND.address}</span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 mt-8">
              {[
                { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
                { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: Github, href: 'https://github.com', label: 'GitHub' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl bg-surface-overlay border border-surface-border hover:border-brand-500/40 hover:bg-brand-500/10 flex items-center justify-center text-content-muted hover:text-brand-500 transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-4 grid grid-cols-3 gap-8">
            {/* Solutions */}
            <div>
              <h3 className="font-heading font-semibold text-content-inverse mb-5 text-sm uppercase tracking-wider">
                Solutions
              </h3>
              <ul className="space-y-3">
                {footerLinks.solutions.map(link => (
                  <li key={link.label}>
                    <a 
                      href={link.href} 
                      className="text-sm text-content-muted hover:text-brand-500 transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-heading font-semibold text-content-inverse mb-5 text-sm uppercase tracking-wider">
                Company
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map(link => (
                  <li key={link.label}>
                    <a 
                      href={link.href} 
                      className="text-sm text-content-muted hover:text-brand-500 transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-heading font-semibold text-content-inverse mb-5 text-sm uppercase tracking-wider">
                Resources
              </h3>
              <ul className="space-y-3">
                {footerLinks.resources.map(link => (
                  <li key={link.label}>
                    <a 
                      href={link.href} 
                      className="text-sm text-content-muted hover:text-brand-500 transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter / CTA section */}
        <div className="relative mb-12 p-8 rounded-2xl border border-surface-border bg-surface-overlay overflow-hidden">
          {/* Inner glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-brand-500/60 to-transparent" />
          
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-heading font-bold text-xl text-content-inverse mb-2">
                Ready to transform your business?
              </h3>
              <p className="text-sm text-content-muted">
                Start building intelligent solutions today.
              </p>
            </div>
            <div className="relative shrink-0">
              <div className="absolute inset-0 bg-brand-500/30 blur-xl rounded-full scale-110" />
              <a
                href="#contact"
                className="relative inline-flex items-center gap-2 px-6 py-3 bg-brand-500 hover:bg-brand-700 text-white font-medium text-sm rounded-xl transition-all duration-300 shadow-glow-sm hover:shadow-glow group"
              >
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-surface-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-content-muted">
              © {year} {BRAND.name}. All rights reserved.
            </div>
            
            <ul className="flex items-center gap-6">
              {legal.map(link => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-content-muted hover:text-brand-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}