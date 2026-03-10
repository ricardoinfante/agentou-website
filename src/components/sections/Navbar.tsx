'use client'

import { useEffect, useState } from 'react'
import Logo from '@/components/brand/Logo'
import Button from '@/components/ui/Button'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background,backdrop-filter] duration-300 ${
        scrolled ? 'bg-[var(--color-navy)]/90 backdrop-blur-md border-b border-[var(--color-lead)]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 xl:px-24 h-16 flex items-center justify-between">
        <Logo height={28} />
        <Button as="a" href="#contato" size="sm">
          Falar com especialista
        </Button>
      </div>
    </header>
  )
}
