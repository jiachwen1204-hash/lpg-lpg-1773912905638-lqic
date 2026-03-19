import type { Metadata } from 'next'
import { Space_Grotesk, Outfit } from 'next/font/google'
import './globals.css'

const headingFont = Space_Grotesk({
  subsets: ['latin'],
  weight: ["500","600","700"],
  variable: '--font-heading',
  display: 'swap',
})

const bodyFont = Outfit({
  subsets: ['latin'],
  weight: ["300","400","500"],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: "Strongest",
  description: "We build intelligent technology that helps businesses work smarter.\r\n\r\nAs a next-generation AI Technology Platform, we combine artificial intelligence, aut",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Organization","name":"Strongest","description":"We build intelligent technology that helps businesses work smarter.\r\n\r\nAs a next-generation AI Technology Platform, we combine artificial intelligence, automation, and scalable infrastructure into one powerful ecosystem. Our solutions help organizations turn complex data into actionable insights, automate operations with precision, and create seamless digital experiences for their customers.\r\n\r\nWe don’t just implement AI — we make it practical, scalable, and impactful for real-world business growth.","email":"jiachwen33@gmail.com","address":"B5-1-3, Forest Green Condominium, Bandar Sungai Long"}` }} />
      {children}</body>
    </html>
  )
}
