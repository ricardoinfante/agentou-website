'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { Search, Map, Wrench, Zap } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'

const phases = [
  {
    number: '01',
    label: 'Diagnóstico',
    title: 'Encontramos o gargalo',
    body: 'Entendemos como seu negócio funciona hoje e identificamos onde você perde mais tempo ou dinheiro.',
    icon: Search,
    pulse: true,
  },
  {
    number: '02',
    label: 'Estratégia',
    title: 'Definimos o que construir',
    body: 'Nada de plano gigante. Escolhemos a solução de maior impacto e menor risco para começar.',
    icon: Map,
    pulse: false,
  },
  {
    number: '03',
    label: 'Desenvolvimento',
    title: 'Construímos e entregamos',
    body: 'Você recebe algo funcionando no seu fluxo real — integrado, testado e com manual de uso.',
    icon: Wrench,
    pulse: false,
  },
  {
    number: '04',
    label: 'Integração',
    title: 'Fazemos funcionar de verdade',
    body: 'Treinamos quem vai usar, ajustamos o que precisar e garantimos que o resultado apareça.',
    icon: Zap,
    pulse: false,
  },
]

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <SectionWrapper id="como-funciona" className="relative bg-[var(--color-navy)] overflow-hidden">
      <div
        aria-hidden
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(196,90,44,0.08) 0%, transparent 70%)', filter: 'blur(70px)' }}
      />
      {/* Header */}
      <motion.p
        className="text-[var(--color-orange)] text-sm font-semibold tracking-[0.1em] uppercase mb-4"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        Como funciona
      </motion.p>
      <motion.h2
        className="text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--color-white)] leading-[0.95] mb-16"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.05 }}
      >
        Simples assim. Do zero ao funcionando.
      </motion.h2>

      {/* Cards grid */}
      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0"
      >
        {phases.map((phase, i) => {
          const Icon = phase.icon

          return (
            <motion.div
              key={phase.label}
              className="group relative flex flex-col p-8 lg:p-10 border border-[var(--color-orange)]/[0.12] bg-white/[0.03] backdrop-blur-[12px] overflow-hidden cursor-default"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: i * 0.2, duration: 0.3 }}
            >
              {/* Top-border glow */}
              <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-orange)]/40 to-transparent" />
              {/* Corner glow */}
              <div
                aria-hidden
                className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(196,90,44,0.12) 0%, transparent 70%)' }}
              />
              {/* Separator — diagonal SVG, right edge, visible on lg, not on last card */}
              {i < phases.length - 1 && (
                <div className="hidden lg:block absolute top-0 bottom-0 right-0 w-6 overflow-hidden">
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 24 100" preserveAspectRatio="none" fill="none">
                    <line x1="6" y1="0" x2="18" y2="100" stroke="var(--color-lead)" strokeWidth="1" strokeOpacity="0.4" />
                  </svg>
                </div>
              )}

              {/* Top row: number + icon */}
              <div className="flex items-start justify-between mb-6">
                {/* Number with optional pulse ring */}
                <div className="relative">
                  {phase.pulse && (
                    <motion.div
                      className="absolute inset-0 rounded-sm border border-[var(--color-orange)]/40"
                      animate={inView ? {
                        scale: [1, 1.15, 1],
                        opacity: [0.4, 0, 0.4],
                      } : {}}
                      transition={{ delay: 1.2, duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  )}
                  <motion.span
                    className="block text-[64px] font-bold text-[var(--color-orange)] leading-none tracking-[-0.04em]"
                    initial={{ opacity: 0, y: -16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 18, delay: i * 0.2 }}
                  >
                    {phase.number}
                  </motion.span>
                </div>

                {/* Icon — decorative, brightens on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: i * 0.2 + 0.05, duration: 0.4 }}
                >
                  <Icon
                    size={20}
                    strokeWidth={1.5}
                    className="text-[var(--color-orange)]/40 transition-colors duration-300 group-hover:text-[var(--color-orange)]"
                  />
                </motion.div>
              </div>

              {/* Label */}
              <motion.span
                className="text-[12px] font-semibold tracking-widest uppercase text-[var(--color-orange)] mb-3"
                initial={{ opacity: 0, y: -12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ type: 'spring', stiffness: 100, damping: 18, delay: i * 0.2 + 0.12 }}
              >
                {phase.label}
              </motion.span>

              {/* Title — 24px = text-2xl */}
              <motion.h3
                className="text-2xl font-bold text-[var(--color-white)] leading-tight mb-3"
                initial={{ opacity: 0, y: -12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ type: 'spring', stiffness: 100, damping: 18, delay: i * 0.2 + 0.24 }}
              >
                {phase.title}
              </motion.h3>

              {/* Body — 14px, white/70, line-height 1.4 */}
              <motion.p
                className="text-sm text-[var(--color-white)]/70 leading-[1.4]"
                initial={{ opacity: 0, y: -8 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ type: 'spring', stiffness: 100, damping: 18, delay: i * 0.2 + 0.36 }}
              >
                {phase.body}
              </motion.p>
            </motion.div>
          )
        })}
      </div>

      {/* Connecting line — animates after all cards have entered */}
      <div className="hidden lg:block relative mt-8 px-10">
        <svg className="w-full h-4" viewBox="0 0 100 4" preserveAspectRatio="none" fill="none">
          <motion.path
            d="M0 2 L100 2"
            stroke="var(--color-orange)"
            strokeWidth="0.5"
            strokeDasharray="3 3"
            strokeOpacity="0.3"
            initial={{ pathLength: 0 }}
            animate={inView ? { pathLength: 1 } : {}}
            transition={{ delay: 0.8, duration: 1, ease: 'easeInOut' }}
          />
        </svg>
      </div>
    </SectionWrapper>
  )
}
