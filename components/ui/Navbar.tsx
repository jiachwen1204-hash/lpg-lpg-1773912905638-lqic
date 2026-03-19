```javascript
'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

// @lpg: Update navLinks labels and hrefs to match the company's page type.
// For 1-Page: use anchor links (#services, #about, #contact)
// For 5-Pages: use real routes (/about, /services, /contact, /faq)
// IMPORTANT: Keep this static array — only change label/href values.
// Do NOT replace with .map() on a string array or compute hrefs dynamically.
const navLinks = [
  { label: 'Features',  href: '#features'  },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Pricing',   href: '#pricing'   },
  { label: 'Contact',   href: '#contact'   },
]

// @lpg: Replace with real company name and CTA
const BRAND_NAME = 'Strongest'
const CTA = { label: 'Get Started', href: '#contact' }

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[var(--color-background)]/95 backdrop-blur-md border-b border-[var(--color-border)] shadow-[0_0_30px_rgba(14,165,233,0.05)]'
          : 'bg-transparent',
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-nav">
        <Link
          href="/"
          className="flex items-center gap-3 group"
        >
          <img 
            src="https://u5ft5besqtymo1lf.public.blob.vercel-storage.com/logos/1773912903996-ai-artificial-intelligence-improves-emai-600nw-2655586379.webp" 
            alt="Strongest logo" 
            className="h-10 w-auto object-contain" 
          />
          <span className="font-heading font-bold text-xl text-[var(--color-foreground)] group-hover:text-brand-500 transition-colors duration-200">
            {BRAND_NAME}
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-4 py-2 text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] rounded-lg hover:bg-[var(--color-muted)] transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={CTA.href}
            className="relative group px-5 py-2.5 text-sm font-semibold bg-brand-500 text-[var(--color-background)] rounded-lg hover:bg-brand-700 transition-all duration-300 hover:shadow-[0_0_25px_rgba(14,165,233,0.4)]"
          >
            <span className="relative z-10">{CTA.label}</span>
            <div className="absolute inset-0 bg-brand-500 rounded-lg opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10" />
          </a>
        </div>

        <button
          onClick={() => setOpen(v => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="md:hidden p-2 rounded-lg text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-muted)] transition-colors duration-200"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-[var(--color-background)] border-b border-[var(--color-border)]">
          <ul className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] rounded-lg hover:bg-[var(--color-muted)] transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={CTA.href}
                onClick={() => setOpen(false)}
                className="block px-5 py-3 text-sm font-semibold text-center bg-brand-500 text-[var(--color-background)] rounded-lg hover:bg-brand-700 transition-colors duration-200"
              >
                {CTA.label}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
```