```tsx
import Navbar from '@/components/ui/Navbar'
import Hero from '@/components/sections/Hero'
import SocialProof from '@/components/sections/SocialProof'
import Services from '@/components/sections/Services'
import About from '@/components/sections/About'
import Stats from '@/components/sections/Stats'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/sections/Footer'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "AI Technology Platform — Work Smarter with AI | Strongest",
  description: "Transform your business with Strongest's AI technology platform. Automate operations, extract actionable insights, and scale intelligently. Start building smart",
  openGraph: {
    title: "AI Technology Platform That Makes Business Work Smarter",
    description: "Strongest combines AI, automation, and scalable infrastructure to help your organization turn complex data into actionable insights and seamless digital experie",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI Technology Platform That Makes Business Work Smarter",
    description: "Strongest combines AI, automation, and scalable infrastructure to help your organization turn complex data into actionable insights and seamless digital experie",
  },
}

export default function Home() {
  return (
    <main className="bg-[var(--brand-900)] min-h-screen">
      <Navbar />
      <Hero />
      <SocialProof />
      <Services />
      <About />
      <Stats />
      <CTA />
      <Footer />
    </main>
  )
}
```