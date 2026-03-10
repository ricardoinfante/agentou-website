'use client'

import { motion, type Variants } from 'motion/react'
import Button from '@/components/ui/Button'

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[var(--color-navy)] pt-16">
      {/* Grain texture overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" aria-hidden>
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>

      {/* Radial glow */}
      <div
        aria-hidden
        className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(196,90,44,0.08) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 xl:px-24 w-full grid lg:grid-cols-2 gap-16 items-center py-20">
        {/* Text block */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="text-[var(--color-orange)] text-sm font-semibold tracking-[0.1em] uppercase mb-6"
          >
            Inteligência Artificial para PMEs brasileiras
          </motion.p>

          <motion.h1
            variants={item}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--color-white)] uppercase mb-6"
          >
            Resultados
            <br />
            em dias,
            <br />
            <span className="text-[var(--color-orange)]">não meses.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg text-[var(--color-white)]/70 max-w-md mb-10 leading-[1.6]"
          >
            Automatizamos o que te faz perder tempo.
            <br />
            Você foca no que gera dinheiro.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
            <Button as="a" href="#contato" size="lg">
              Quero resultado agora
            </Button>
            <Button as="a" href="#como-funciona" size="lg" variant="ghost">
              Como funciona
            </Button>
          </motion.div>
        </motion.div>

        {/* Abstract flow diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
          className="hidden lg:flex items-center justify-center"
          aria-hidden
        >
          <FlowDiagram />
        </motion.div>
      </div>
    </section>
  )
}

function FlowDiagram() {
  return (
    <svg viewBox="0 0 400 400" className="w-full max-w-md opacity-90" fill="none">
      {/* Background nodes */}
      {[
        { cx: 200, cy: 80, r: 48 },
        { cx: 80, cy: 280, r: 36 },
        { cx: 320, cy: 280, r: 36 },
        { cx: 200, cy: 220, r: 24 },
      ].map((node, i) => (
        <motion.circle
          key={i}
          cx={node.cx}
          cy={node.cy}
          r={node.r}
          stroke="var(--color-orange)"
          strokeWidth="1.5"
          strokeOpacity="0.3"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8 + i * 0.15, type: 'spring', stiffness: 80 }}
        />
      ))}

      {/* Connecting lines */}
      {[
        { d: 'M200 128 L200 196' },
        { d: 'M164 244 L116 264' },
        { d: 'M236 244 L284 264' },
      ].map((line, i) => (
        <motion.path
          key={i}
          d={line.d}
          stroke="var(--color-orange)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          strokeOpacity="0.4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ delay: 1.2 + i * 0.2, duration: 0.6 }}
        />
      ))}

      {/* Center node fill */}
      <motion.circle
        cx="200" cy="80" r="32"
        fill="var(--color-orange)"
        fillOpacity="0.12"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.9, type: 'spring' }}
      />
      <motion.circle
        cx="200" cy="80" r="12"
        fill="var(--color-orange)"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 1] }}
        transition={{ delay: 1.0, duration: 0.4 }}
      />

      {/* Side nodes */}
      {[{ cx: 80, cy: 280 }, { cx: 320, cy: 280 }].map((n, i) => (
        <motion.circle
          key={i}
          cx={n.cx} cy={n.cy} r="10"
          fill="var(--color-orange)"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ delay: 1.4 + i * 0.15, duration: 0.4 }}
        />
      ))}

      {/* Subtle grid lines */}
      {[100, 200, 300].map((x) => (
        <line key={x} x1={x} y1="0" x2={x} y2="400" stroke="var(--color-lead)" strokeWidth="0.5" strokeOpacity="0.4" />
      ))}
      {[100, 200, 300].map((y) => (
        <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="var(--color-lead)" strokeWidth="0.5" strokeOpacity="0.4" />
      ))}
    </svg>
  )
}
