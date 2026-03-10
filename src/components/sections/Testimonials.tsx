'use client'

import { motion } from 'motion/react'
import SectionWrapper from '@/components/ui/SectionWrapper'

const testimonials = [
  {
    type: 'quote' as const,
    featured: true,
    quote: 'Reduzi 70% do tempo respondendo WhatsApp. Minha recepcionista agora foca no que importa — os pacientes.',
    name: 'Dra. Carla Mendes',
    role: 'Médica Veterinária',
    city: 'Belo Horizonte, MG',
    initials: 'CM',
  },
  {
    type: 'quote' as const,
    featured: false,
    quote: 'Em 8 dias tinham um sistema rodando. Achei que ia demorar meses. Me surpreendeu muito a velocidade.',
    name: 'Marcos Oliveira',
    role: 'Distribuidora de Alimentos',
    city: 'Goiânia, GO',
    initials: 'MO',
  },
  {
    type: 'quote' as const,
    featured: false,
    quote: 'Agendamentos automáticos, zero confusão de horário. Parece mágica, mas é só tecnologia funcionando direito.',
    name: 'Ana Paula Ramos',
    role: 'Escola de Idiomas',
    city: 'Recife, PE',
    initials: 'AR',
  },
]

const metrics = [
  { number: '−70%', label: 'tempo gasto em atendimento manual' },
  { number: '10d', label: 'do briefing ao sistema rodando em produção' },
]

export default function Testimonials() {
  return (
    <SectionWrapper className="relative bg-[var(--color-navy)] overflow-hidden">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(196,90,44,0.09) 0%, transparent 70%)', filter: 'blur(70px)' }}
      />

      <div className="relative">
        <motion.p
          className="text-[var(--color-orange)] text-sm font-semibold tracking-[0.1em] uppercase mb-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
          Resultados reais
        </motion.p>

        <motion.h2
          className="font-bold text-[var(--color-white)] uppercase leading-[0.95] tracking-[-0.04em] mb-12"
          style={{ fontSize: 'clamp(48px, 6.5vw, 88px)' }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.05 }}
        >
          Quem já saiu na frente.
        </motion.h2>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:grid-rows-2">

          {/* Featured card — spans 2 rows on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className="relative border border-[var(--color-orange)]/[0.14] bg-white/[0.03] backdrop-blur-[12px] overflow-hidden p-7 md:row-span-2 flex flex-col justify-between min-h-[240px]"
          >
            <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-orange)]/50 to-transparent" />
            <div aria-hidden className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(196,90,44,0.14) 0%, transparent 70%)' }} />
            <div className="relative">
              <span className="block font-serif text-5xl text-[var(--color-orange)] leading-none opacity-60 mb-4 select-none">&ldquo;</span>
              <p className="font-bold text-[var(--color-white)] leading-[1.2] tracking-[-0.02em]" style={{ fontSize: 'clamp(16px, 1.8vw, 22px)' }}>
                {testimonials[0].quote}
              </p>
            </div>
            <div className="relative flex items-center gap-3 pt-5 border-t border-white/[0.06]">
              <div className="w-9 h-9 rounded-full bg-[var(--color-orange)]/10 border border-[var(--color-orange)]/30 flex items-center justify-center text-[11px] font-bold text-[var(--color-orange)] shrink-0">
                {testimonials[0].initials}
              </div>
              <div>
                <p className="text-sm font-bold text-[var(--color-white)]">{testimonials[0].name}</p>
                <p className="text-xs text-[var(--color-white)]/35">{testimonials[0].role} · {testimonials[0].city}</p>
              </div>
            </div>
          </motion.div>

          {/* Small quote cards */}
          {[testimonials[1], testimonials[2]].map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.1 + i * 0.08 }}
              className="relative border border-[var(--color-orange)]/[0.14] bg-white/[0.03] backdrop-blur-[12px] overflow-hidden p-6 flex flex-col justify-between"
            >
              <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-orange)]/40 to-transparent" />
              <div aria-hidden className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(196,90,44,0.12) 0%, transparent 70%)' }} />
              <p className="relative text-sm text-[var(--color-white)]/75 leading-relaxed mb-5">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="relative flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                <div className="w-8 h-8 rounded-full bg-[var(--color-orange)]/10 border border-[var(--color-orange)]/30 flex items-center justify-center text-[10px] font-bold text-[var(--color-orange)] shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="text-xs font-bold text-[var(--color-white)]">{t.name}</p>
                  <p className="text-[11px] text-[var(--color-white)]/35">{t.role} · {t.city}</p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Metric cards */}
          {metrics.map((m, i) => (
            <motion.div
              key={m.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 + i * 0.08 }}
              className="relative border border-[var(--color-orange)]/25 bg-[var(--color-orange)]/[0.08] overflow-hidden p-6 flex flex-col justify-center"
            >
              <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-orange)]/60 to-transparent" />
              <p
                className="font-bold text-[var(--color-orange)] leading-none tracking-[-0.04em] mb-2"
                style={{ fontSize: 'clamp(40px, 4vw, 56px)' }}
              >
                {m.number}
              </p>
              <p className="text-sm text-[var(--color-white)]/50 leading-snug max-w-[160px]">{m.label}</p>
            </motion.div>
          ))}

        </div>
      </div>
    </SectionWrapper>
  )
}
