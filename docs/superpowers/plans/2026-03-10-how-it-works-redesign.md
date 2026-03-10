# HowItWorks Section Redesign — Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign a seção "Como Funciona" de 3 passos simples para 4 fases com cards pesados, número laranja 64px como âncora visual, copy expandido e animações sequenciais.

**Architecture:** Rewrite completo de `HowItWorks.tsx`. Layout em grid 4 colunas com cards independentes, reveal sequencial via Motion `useInView`, separador vertical entre cards. Nenhum novo arquivo criado — tudo em um único componente.

**Tech Stack:** Next.js 15, TypeScript, Tailwind CSS v4, Motion (motion/react), Lucide React

**Spec:** `docs/superpowers/specs/2026-03-10-how-it-works-redesign-design.md`

---

## Chunk 1: Rewrite completo de HowItWorks.tsx

**Files:**
- Modify: `src/components/sections/HowItWorks.tsx` (rewrite completo)

---

### Task 1: Verificar dependências

- [ ] **Step 1: Confirmar que SectionWrapper existe no caminho esperado**

  Run: `ls agentou-site/src/components/ui/SectionWrapper.tsx`

  Expected: arquivo listado. Se não existir, verificar o caminho correto antes de continuar.

- [ ] **Step 2: Confirmar ícones disponíveis no Lucide instalado**

  Run: `grep -r "\"lucide-react\"" agentou-site/src/components/ | head -3`

  Os ícones `Search`, `Compass`, `Wrench`, `Zap` estão disponíveis em qualquer versão recente do Lucide. Confirmar apenas se a instalação for muito antiga (< v0.263).

---

### Task 2: Reescrever HowItWorks.tsx

- [ ] **Step 1: Substituir o conteúdo completo do arquivo**

  Escrever o seguinte em `src/components/sections/HowItWorks.tsx`:

  ```tsx
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
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
      <SectionWrapper id="como-funciona" className="bg-[var(--color-navy)]">
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
                className="group relative flex flex-col p-8 lg:p-10 bg-[var(--color-lead)]/20 cursor-default"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: i * 0.2, duration: 0.3 }}
              >
                {/* Separator — diagonal SVG, right edge, visible on lg, not on last card */}
                {i < phases.length - 1 && (
                  <div className="hidden lg:block absolute top-0 bottom-0 right-0 w-6 overflow-hidden">
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 24 100" preserveAspectRatio="none" fill="none">
                      <line x1="12" y1="0" x2="12" y2="100" stroke="var(--color-lead)" strokeWidth="1" strokeOpacity="0.4" />
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
                      className="block text-[64px] font-bold text-[var(--color-orange)] leading-none tracking-[-0.04em] transition-transform duration-300 group-hover:scale-[1.02]"
                      initial={{ opacity: 0, y: -16 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
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
                  className="text-[12px] font-semibold tracking-[0.12em] uppercase text-[var(--color-orange)] mb-3"
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
  ```

- [ ] **Step 2: Verificar ausência de `transition-all`**

  Run: `grep -n "transition-all" agentou-site/src/components/sections/HowItWorks.tsx`

  Expected: nenhum resultado.

---

### Task 3: Build e verificação visual

- [ ] **Step 1: Rodar build para verificar TypeScript**

  Run: `cd agentou-site && npm run build 2>&1 | tail -20`

  Expected: sem erros. Se houver erro de importação do ícone `Map`, substituir por `MapPin` do Lucide como fallback.

- [ ] **Step 2: Subir o dev server (se não estiver rodando)**

  Run: `cd agentou-site && npm run dev`

  Acessar `http://localhost:3000`.

- [ ] **Step 3: Screenshot round 1**

  Run: `node screenshot.mjs http://localhost:3000 como-funciona`

  Cheklist de validação:
  - [ ] 4 cards visíveis lado a lado no desktop
  - [ ] Números `01`–`04` em laranja, ~64px, alinhados à esquerda
  - [ ] Labels (`Diagnóstico`, `Estratégia`, `Desenvolvimento`, `Integração`) em laranja pequeno, uppercase
  - [ ] Títulos em branco, bold, ~24px
  - [ ] Corpo de texto visível com contraste adequado (white/70)
  - [ ] Separadores verticais sutis entre cards
  - [ ] Linha pontilhada horizontal abaixo dos cards

- [ ] **Step 4: Corrigir discrepâncias encontradas no round 1**

  Para cada item do checklist acima que falhar, fazer o ajuste mínimo necessário:
  - Cor errada → corrigir o token CSS exato
  - Tamanho errado → ajustar a classe Tailwind
  - Espaçamento errado → ajustar `p-`, `mb-`, `mt-` conforme necessário
  - Separador ausente → verificar se a classe `bg-[var(--color-lead)]/20` está em cada card (`motion.div`), não no grid pai

- [ ] **Step 5: Screenshot round 2 — confirmar sem diferenças**

  Run: `node screenshot.mjs http://localhost:3000 como-funciona`

  Parar apenas quando todos os itens do checklist do Step 3 estiverem aprovados.

- [ ] **Step 6: Commit**

  ```bash
  git add agentou-site/src/components/sections/HowItWorks.tsx
  git commit -m "feat: redesign HowItWorks - 4 fases com cards pesados e animações sequenciais"
  ```
