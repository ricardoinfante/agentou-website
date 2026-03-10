'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'motion/react'
import { ArrowRight, CheckCircle } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'

const WHATSAPP_NUMBER = '5562996741085'

const segments = [
  'Clínica / Saúde',
  'Varejo',
  'Alimentação / Restaurante',
  'Educação',
  'Serviços',
  'Indústria / Distribuição',
  'Outro',
]

interface FormData {
  name: string
  phone: string
  email: string
  segment: string
  challenge: string
}

const initialForm: FormData = { name: '', phone: '', email: '', segment: '', challenge: '' }

function formatWhatsAppMessage(data: FormData): string {
  return encodeURIComponent(
    `Olá! Vim pelo site da AGENTOU e gostaria de conversar.\n\n` +
    `*Nome:* ${data.name}\n` +
    `*WhatsApp:* ${data.phone}\n` +
    `*E-mail:* ${data.email}\n` +
    `*Segmento:* ${data.segment}\n` +
    `*Maior desafio:* ${data.challenge}`
  )
}

export default function LeadForm() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [submitted, setSubmitted] = useState(false)

  function validate(): boolean {
    const newErrors: Partial<FormData> = {}
    if (!form.name.trim()) newErrors.name = 'Campo obrigatório'
    if (!form.phone.trim()) newErrors.phone = 'Campo obrigatório'
    if (!form.email.trim() || !form.email.includes('@')) newErrors.email = 'E-mail inválido'
    if (!form.segment) newErrors.segment = 'Selecione um segmento'
    if (!form.challenge.trim()) newErrors.challenge = 'Conta um pouco sobre seu desafio'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setSubmitted(true)
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${formatWhatsAppMessage(form)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <SectionWrapper id="contato" className="bg-[var(--color-navy)] border-t border-[var(--color-lead)]">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left: headline */}
        <div>
          <motion.p
            className="text-[var(--color-orange)] text-sm font-semibold tracking-[0.1em] uppercase mb-3"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          >
            Comece agora
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[var(--color-white)] uppercase mb-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.05 }}
          >
            Vamos
            <br />
            <span className="text-[var(--color-orange)]">conversar?</span>
          </motion.h2>
          <motion.p
            className="text-[var(--color-white)]/60 text-base leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.1 }}
          >
            30 minutos. Sem compromisso. Sem jargão.
            <br />
            A gente entende o seu negócio e te mostra o que é possível.
          </motion.p>
        </div>

        {/* Right: form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.15 }}
        >
          {submitted ? (
            <div className="flex flex-col items-start gap-4 py-8">
              <CheckCircle size={40} className="text-[var(--color-orange)]" />
              <h3 className="text-xl font-bold text-[var(--color-white)]">Recebemos seu contato!</h3>
              <p className="text-[var(--color-white)]/60">
                O WhatsApp vai abrir agora. Caso não abra,{' '}
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-orange)] underline"
                >
                  clique aqui
                </a>
                .
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <Field
                label="Nome completo"
                error={errors.name}
                input={
                  <input
                    type="text"
                    placeholder="Maria Silva"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass(!!errors.name)}
                  />
                }
              />
              <Field
                label="WhatsApp com DDD"
                error={errors.phone}
                input={
                  <input
                    type="tel"
                    placeholder="(11) 99999-9999"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={inputClass(!!errors.phone)}
                  />
                }
              />
              <Field
                label="E-mail"
                error={errors.email}
                input={
                  <input
                    type="email"
                    placeholder="maria@empresa.com.br"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass(!!errors.email)}
                  />
                }
              />
              <Field
                label="Segmento do negócio"
                error={errors.segment}
                input={
                  <select
                    value={form.segment}
                    onChange={(e) => setForm({ ...form, segment: e.target.value })}
                    className={inputClass(!!errors.segment)}
                  >
                    <option value="">Selecione...</option>
                    {segments.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                }
              />
              <Field
                label="Qual seu maior desafio hoje?"
                error={errors.challenge}
                input={
                  <textarea
                    placeholder="Ex: Perco muito tempo respondendo mensagens repetitivas no WhatsApp..."
                    rows={3}
                    value={form.challenge}
                    onChange={(e) => setForm({ ...form, challenge: e.target.value })}
                    className={inputClass(!!errors.challenge) + ' resize-none'}
                  />
                }
              />

              <button
                type="submit"
                className="w-full mt-2 bg-[var(--color-orange)] text-white font-bold text-sm uppercase tracking-wide py-4 px-8 flex items-center justify-center gap-3 hover:brightness-110 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(196,90,44,0.35)] active:scale-95 transition-[transform,box-shadow,filter] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-orange)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-navy)] [clip-path:polygon(0_0,calc(100%-12px)_0,100%_100%,0_100%)]"
              >
                Quero resultado
                <ArrowRight size={18} strokeWidth={2} />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

function inputClass(hasError: boolean) {
  return `w-full bg-[var(--color-lead)]/30 border ${
    hasError ? 'border-red-500/70' : 'border-[var(--color-lead)]'
  } text-[var(--color-white)] placeholder:text-[var(--color-white)]/30 px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-orange)] transition-colors duration-200`
}

function Field({
  label,
  error,
  input,
}: {
  label: string
  error?: string
  input: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold text-[var(--color-white)]/70 uppercase tracking-wide">
        {label}
      </label>
      {input}
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  )
}
