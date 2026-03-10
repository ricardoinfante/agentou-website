import Logo from '@/components/brand/Logo'
import { MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = '5511999999999' // Replace with real number

export default function Footer() {
  return (
    <footer className="bg-[var(--color-navy)] border-t border-[var(--color-lead)] px-6 md:px-12 lg:px-16 xl:px-24 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="flex flex-col gap-3">
          <Logo height={24} />
          <p className="text-sm text-[var(--color-white)]/40">
            O futuro, implantado hoje.
          </p>
        </div>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-[var(--color-white)]/60 hover:text-[var(--color-orange)] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-orange)]"
        >
          <MessageCircle size={16} strokeWidth={1.5} />
          Falar no WhatsApp
        </a>

        <p className="text-xs text-[var(--color-white)]/30">
          © {new Date().getFullYear()} AGENTOU. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
