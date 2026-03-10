'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Plus } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'

const faqs = [
  {
    q: 'Preciso de equipe de TI para contratar a AGENTOU?',
    a: 'Não. Cuidamos de tudo, do início ao fim. Você não precisa saber de tecnologia para trabalhar com a gente. Nossa missão é justamente eliminar essa barreira.',
  },
  {
    q: 'Quanto tempo até ver resultado?',
    a: 'Até 10 dias úteis para a solução estar rodando no seu negócio. Em casos mais simples, pode ser menos. E na primeira semana já dá para sentir a diferença.',
  },
  {
    q: 'E se não funcionar para o meu negócio?',
    a: 'A primeira conversa é grátis e sem compromisso. Só avançamos se fizer sentido para os dois lados. Se não for o momento certo, somos honestos sobre isso.',
  },
  {
    q: 'Qual o investimento?',
    a: 'Planos a partir de R$1.500/mês. Começamos com um piloto de baixo risco antes de qualquer compromisso maior. Assim você vê o resultado antes de decidir.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <SectionWrapper className="relative bg-[var(--color-navy)] overflow-hidden">
      <div
        aria-hidden
        className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(196,90,44,0.08) 0%, transparent 70%)', filter: 'blur(70px)' }}
      />
      <motion.p
        className="text-[var(--color-orange)] text-sm font-semibold tracking-[0.1em] uppercase mb-4"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        Perguntas frequentes
      </motion.p>
      <motion.h2
        className="font-bold text-[var(--color-white)] uppercase leading-[0.95] tracking-[-0.04em] mb-12"
        style={{ fontSize: 'clamp(36px, 5vw, 72px)' }}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.05 }}
      >
        Tire suas dúvidas antes de começar.
      </motion.h2>

      <div className="max-w-2xl space-y-2">
        {faqs.map((faq, i) => (
          <motion.div
            key={faq.q}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: i * 0.07 }}
            className={`relative border backdrop-blur-[8px] bg-white/[0.02] overflow-hidden ${
              open === i
                ? 'border-[var(--color-orange)]/50 border-l-[var(--color-orange)] [border-left-width:2px]'
                : 'border-[var(--color-orange)]/[0.12]'
            } transition-colors duration-200`}
          >
            <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-orange)]/30 to-transparent" />
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 group"
              aria-expanded={open === i}
            >
              <span className="font-semibold text-[var(--color-white)] group-hover:text-[var(--color-orange)] transition-colors duration-200 text-sm md:text-base">
                {faq.q}
              </span>
              <motion.div
                animate={{ rotate: open === i ? 45 : 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                className="shrink-0"
              >
                <Plus size={18} strokeWidth={2} className="text-[var(--color-orange)]" />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 30 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-5 text-sm text-[var(--color-white)]/60 leading-relaxed">
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
