# Design Spec — HowItWorks Section Redesign

**Date:** 2026-03-10
**Status:** Approved
**File:** `src/components/sections/HowItWorks.tsx`

---

## Problema

A seção atual tem 3 ícones circulares pequenos com texto curto — sem peso visual, sem presença, sem copy que comunique valor real.

---

## Decisões de Design

### Layout
- Migrar de 3 para **4 fases**
- Grid responsivo: `grid-cols-4` (desktop) → `grid-cols-2` (tablet) → `grid-cols-1` (mobile)
- Sem promessas de tempo, sem numeração explícita de "passos"
- Fundo `--color-navy` puro

### Cada Card
- **Número** `64px`, `font-bold`, `--color-orange`, `letter-spacing: -0.04em` — âncora visual principal (top-left)
- **Ícone** `20px`, `strokeWidth: 1.5`, `--color-orange/40` — decorativo (top-right)
- **Label** `12px`, `--color-orange`, `tracking-widest`, uppercase — abaixo do número
- **Título** `24px`, `Space Grotesk Bold`, `--color-white`
- **Corpo** `14px`, `line-height: 1.4`, `--color-white/70`, ~2–3 linhas
- Fundo de card: `--color-lead/20`, sem borda visível
- Separador diagonal SVG entre cards (visível apenas `lg`)

### Hover
- Número: `scale(1.02)` via `transform`
- Ícone: `--color-orange/40 → --color-orange`
- Apenas `transform` e `opacity` — nunca `transition-all`

### Animações (Motion)
- Trigger: `useInView`, `margin: '-80px'`, `once: true`
- Stagger entre cards: `0.2s`
- Dentro de cada card (stagger `0.12s`):
  1. Número: `translateY(-16px) → 0` + fade
  2. Label: `translateY(-12px) → 0` + fade
  3. Título: `translateY(-12px) → 0` + fade
  4. Corpo: `translateY(-8px) → 0` + fade
- Pulse ring no card 1: `scale [1, 1.15, 1]`, `opacity [0.4, 0, 0.4]`, `duration: 3s`, `repeat: Infinity`
- Linha de conexão: `pathLength: 0 → 1` após todos os cards (`delay: 0.8`)

---

## Copy por Fase

| # | Label | Título | Subtítulo | Detalhe |
|---|-------|--------|-----------|---------|
| 1 | Diagnóstico | Encontramos o gargalo | — | Entendemos como seu negócio funciona hoje e identificamos onde você perde mais tempo ou dinheiro. |
| 2 | Estratégia | Definimos o que construir | — | Nada de plano gigante. Escolhemos a solução de maior impacto e menor risco para começar. |
| 3 | Desenvolvimento | Construímos e entregamos | — | Você recebe algo funcionando no seu fluxo real — integrado, testado e com manual de uso. |
| 4 | Integração | Fazemos funcionar de verdade | — | Treinamos quem vai usar, ajustamos o que precisar e garantimos que o resultado apareça. |

### Ícones por Fase
- Fase 1: `Search` (Diagnóstico)
- Fase 2: `Map` (Estratégia)
- Fase 3: `Wrench` (Desenvolvimento)
- Fase 4: `Zap` (Integração)

---

## Regras Mantidas
- Nunca `transition-all`
- Nunca cores fora da paleta da marca
- Todo elemento clicável com `hover`, `focus-visible`, `active`
- Fontes: Space Grotesk (títulos) + Inter (corpo)
