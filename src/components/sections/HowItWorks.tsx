'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { MessageSquare, Rocket, TrendingUp } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'

const steps = [
  {
    icon: MessageSquare,
    label: 'Conversa de 30min',
    sub: 'Sem compromisso. Sem jargão.',
  },
  {
    icon: Rocket,
    label: 'Solução em até 10 dias',
    sub: 'Testada e documentada.',
  },
  {
    icon: TrendingUp,
    label: 'Resultado na semana 1',
    sub: 'Ou continuamos ajustando.',
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <SectionWrapper id="como-funciona" className="bg-[var(--color-navy)]">
      <motion.p
        className="text-[var(--color-orange)] text-sm font-semibold tracking-[0.1em] uppercase mb-3"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        Como funciona
      </motion.p>
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-[var(--color-white)] mb-16 max-w-lg"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.05 }}
      >
        Simples assim. Do zero ao funcionando.
      </motion.h2>

      {/* Flow diagram */}
      <div ref={ref} className="relative flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-0">
        {steps.map((step, i) => {
          const Icon = step.icon
          return (
            <div key={step.label} className="flex flex-col lg:flex-row items-center flex-1">
              {/* Node */}
              <motion.div
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ type: 'spring', stiffness: 100, damping: 18, delay: i * 0.2 }}
              >
                <div className="relative mb-5">
                  {/* Outer pulse ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full border border-[var(--color-orange)]/30"
                    animate={inView ? { scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] } : {}}
                    transition={{ delay: 0.8 + i * 0.2, duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <div className="w-20 h-20 rounded-full bg-[var(--color-orange)]/10 border border-[var(--color-orange)]/40 flex items-center justify-center">
                    <Icon size={28} strokeWidth={1.5} className="text-[var(--color-orange)]" />
                  </div>
                  {/* Step number */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[var(--color-orange)] flex items-center justify-center text-[10px] font-bold text-white">
                    {i + 1}
                  </div>
                </div>
                <p className="font-bold text-[var(--color-white)] text-base mb-1 max-w-[140px] leading-tight">
                  {step.label}
                </p>
                <p className="text-sm text-[var(--color-white)]/50">{step.sub}</p>
              </motion.div>

              {/* Connector line (between nodes, not after last) */}
              {i < steps.length - 1 && (
                <div className="flex items-center justify-center lg:flex-1 my-4 lg:my-0 lg:mx-4">
                  <svg
                    className="hidden lg:block w-full h-4"
                    viewBox="0 0 100 8"
                    preserveAspectRatio="none"
                    fill="none"
                  >
                    <motion.path
                      d="M0 4 L100 4"
                      stroke="var(--color-orange)"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                      strokeOpacity="0.5"
                      initial={{ pathLength: 0 }}
                      animate={inView ? { pathLength: 1 } : {}}
                      transition={{ delay: 0.4 + i * 0.2, duration: 0.6 }}
                    />
                  </svg>
                  <svg className="block lg:hidden w-4 h-8" viewBox="0 0 8 40" fill="none">
                    <motion.path
                      d="M4 0 L4 40"
                      stroke="var(--color-orange)"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                      strokeOpacity="0.5"
                      initial={{ pathLength: 0 }}
                      animate={inView ? { pathLength: 1 } : {}}
                      transition={{ delay: 0.4 + i * 0.2, duration: 0.6 }}
                    />
                  </svg>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
