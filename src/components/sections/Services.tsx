'use client'

import { motion } from 'motion/react'
import { Zap, Code2, Globe, Lightbulb } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'

const services = [
  {
    icon: Zap,
    title: 'Automações & Fluxos de Trabalho',
    description: 'Pare de fazer na mão o que uma máquina faz melhor.',
    bullets: [
      'Agente de atendimento no WhatsApp 24/7',
      'CRM, qualificação de leads e follow-up automático',
      'Relatórios, notas fiscais e rotinas de back-office',
      'Conteúdo e publicações em mídias sociais',
    ],
  },
  {
    icon: Code2,
    title: 'Apps & Micro-SaaS Sob Medida',
    description: 'Seu negócio tem um problema específico. A solução também precisa ser.',
    bullets: [
      'Dashboards e painéis de controle em tempo real',
      'Aplicativos web para times e clientes',
      'Micro-SaaS para nichos e processos internos',
    ],
  },
  {
    icon: Globe,
    title: 'Sites, Lojas & Produtos Digitais',
    description: 'Presença online que trabalha por você — não só aparece bem.',
    bullets: [
      'Landing pages de alta conversão',
      'Sites institucionais e e-commerces',
      'Cursos, portais e produtos digitais',
    ],
  },
  {
    icon: Lightbulb,
    title: 'Consultoria & Estratégia de IA',
    description: 'Sabe que precisa de IA, mas não sabe por onde começar? A gente mostra.',
    bullets: [
      'Mapeamento de oportunidades no seu negócio',
      'Roadmap de implementação sem jargão',
      'Treinamento para seu time usar IA no dia a dia',
    ],
  },
]

export default function Services() {
  return (
    <SectionWrapper id="servicos" className="bg-[var(--color-navy)]">
      <motion.p
        className="text-[var(--color-orange)] text-sm font-semibold tracking-[0.1em] uppercase mb-3"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        O que fazemos
      </motion.p>
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-[var(--color-white)] mb-16 max-w-lg"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.05 }}
      >
        Tudo que seu negócio precisa para crescer com IA.
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, i) => {
          const Icon = service.icon
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100, damping: 20, delay: i * 0.08 }}
              className="group relative p-6 border border-[var(--color-lead)] bg-[var(--color-navy)] hover:border-[var(--color-orange)]/40 hover:-translate-y-1 transition-[transform,box-shadow,border-color] duration-300 hover:shadow-[0_8px_32px_rgba(196,90,44,0.15)] flex flex-col gap-4"
            >
              <Icon
                size={28}
                strokeWidth={1.5}
                className="text-[var(--color-orange)]"
              />
              <div>
                <h3 className="text-base font-bold text-[var(--color-white)] mb-2 leading-tight">
                  {service.title}
                </h3>
                <p className="text-sm text-[var(--color-white)]/50 leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-xs text-[var(--color-white)]/70">
                      <span className="mt-1 shrink-0 w-1 h-1 rounded-full bg-[var(--color-orange)]" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
