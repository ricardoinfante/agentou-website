'use client'

import { motion } from 'motion/react'
import SectionWrapper from '@/components/ui/SectionWrapper'

const services = [
  {
    number: '01',
    title: 'Automações & Fluxos de Trabalho',
    description: 'Pare de fazer na mão o que uma máquina faz melhor. Seu negócio rodando 24/7 sem você.',
    pills: ['WhatsApp 24/7', 'CRM automático', 'Qualificação de leads', 'Back-office', 'Mídias sociais'],
  },
  {
    number: '02',
    title: 'Apps & Micro-SaaS Sob Medida',
    description: 'Seu problema específico precisa de solução específica. Feito para o seu fluxo real.',
    pills: ['Dashboards em tempo real', 'Portais web', 'Sistemas internos'],
  },
  {
    number: '03',
    title: 'Sites, Lojas & Produtos Digitais',
    description: 'Presença online que trabalha por você — não só aparece bem.',
    pills: ['Landing pages', 'E-commerce', 'Cursos & portais'],
  },
  {
    number: '04',
    title: 'Consultoria & Estratégia de IA',
    description: 'Sabe que precisa de IA, mas não sabe por onde começar? A gente mostra o caminho.',
    pills: ['Mapeamento de oportunidades', 'Roadmap sem jargão', 'Treinamento de time'],
  },
]

// Corner glow positions per card index
const cornerGlow = [
  'bottom-[-64px] right-[-64px]',   // 01
  'bottom-[-64px] left-[-64px]',    // 02
  'top-[-64px] right-[-64px]',      // 03
  'top-[-64px] left-[-64px]',       // 04
]

export default function Services() {
  return (
    <SectionWrapper id="servicos" className="relative bg-[var(--color-navy)] overflow-hidden">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(196,90,44,0.10) 0%, transparent 70%)', filter: 'blur(60px)' }}
      />
      <div
        aria-hidden
        className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(196,90,44,0.06) 0%, transparent 70%)', filter: 'blur(80px)' }}
      />

      <div className="relative">
        <motion.p
          className="text-[var(--color-orange)] text-sm font-semibold tracking-[0.1em] uppercase mb-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
          O que fazemos
        </motion.p>

        <motion.h2
          className="font-bold text-[var(--color-white)] uppercase leading-[0.95] tracking-[-0.04em] mb-14"
          style={{ fontSize: 'clamp(40px, 5.5vw, 80px)' }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.05 }}
        >
          Tudo que seu negócio precisa para <span className="text-[var(--color-orange)]">crescer.</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100, damping: 20, delay: i * 0.08 }}
              className="group relative border border-[var(--color-orange)]/[0.14] bg-white/[0.03] backdrop-blur-[12px] overflow-hidden p-8 hover:border-[var(--color-orange)]/40 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(196,90,44,0.15)] transition-[transform,box-shadow,border-color] duration-300"
            >
              {/* Top-border glow */}
              <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-orange)]/50 to-transparent" />
              {/* Corner glow */}
              <div
                aria-hidden
                className={`absolute ${cornerGlow[i]} w-48 h-48 rounded-full pointer-events-none`}
                style={{ background: 'radial-gradient(circle, rgba(196,90,44,0.14) 0%, transparent 70%)' }}
              />

              <div className="relative">
                {/* Number row */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-sm font-bold text-[var(--color-orange)] tracking-[0.08em] opacity-80">
                    {service.number}
                  </span>
                  <div className="flex-1 h-px bg-gradient-to-r from-[var(--color-orange)]/40 to-transparent" />
                </div>

                {/* Title */}
                <h3
                  className="font-bold text-[var(--color-white)] uppercase leading-[1.05] tracking-[-0.03em] mb-3"
                  style={{ fontSize: 'clamp(20px, 2.2vw, 30px)' }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[var(--color-white)]/45 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Pills */}
                <div className="flex flex-wrap gap-2">
                  {service.pills.map((pill) => (
                    <span
                      key={pill}
                      className="text-[11px] font-medium text-[var(--color-white)]/50 border border-white/10 bg-white/[0.04] px-2.5 py-1"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
