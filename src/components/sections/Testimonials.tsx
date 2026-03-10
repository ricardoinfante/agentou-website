'use client'

import { motion } from 'motion/react'
import SectionWrapper from '@/components/ui/SectionWrapper'

const testimonials = [
  {
    quote:
      'Reduzi 70% do tempo respondendo WhatsApp. Minha recepcionista agora foca no que importa — os pacientes.',
    name: 'Dra. Carla Mendes',
    role: 'Médica Veterinária',
    city: 'Belo Horizonte, MG',
    initials: 'CM',
  },
  {
    quote:
      'Em 8 dias tinham um sistema rodando. Achei que ia demorar meses. Me surpreendeu muito a velocidade.',
    name: 'Marcos Oliveira',
    role: 'Distribuidora de Alimentos',
    city: 'Goiânia, GO',
    initials: 'MO',
  },
  {
    quote:
      'Agendamentos automáticos, zero confusão de horário. Parece mágica, mas é só tecnologia funcionando direito.',
    name: 'Ana Paula Ramos',
    role: 'Escola de Idiomas',
    city: 'Recife, PE',
    initials: 'AR',
  },
]

export default function Testimonials() {
  return (
    <SectionWrapper className="bg-[var(--color-offwhite)]">
      <motion.p
        className="text-[var(--color-orange)] text-sm font-semibold tracking-[0.1em] uppercase mb-3"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        Resultados reais
      </motion.p>
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-[var(--color-navy)] mb-16 max-w-lg"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.05 }}
      >
        Quem já saiu na frente.
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: i * 0.1 }}
            className="bg-white p-8 flex flex-col gap-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            {/* Quote mark */}
            <span className="text-5xl font-serif text-[var(--color-orange)] leading-none select-none">&ldquo;</span>
            <p className="text-[var(--color-navy)] text-base leading-relaxed flex-1">{t.quote}</p>
            <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
              <div className="w-10 h-10 rounded-full bg-[var(--color-orange)]/10 border border-[var(--color-orange)]/30 flex items-center justify-center text-xs font-bold text-[var(--color-orange)] shrink-0">
                {t.initials}
              </div>
              <div>
                <p className="font-bold text-sm text-[var(--color-navy)]">{t.name}</p>
                <p className="text-xs text-[var(--color-navy)]/50">{t.role} · {t.city}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
