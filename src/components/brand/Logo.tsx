import Image from 'next/image'

interface LogoProps {
  variant?: 'wordmark' | 'symbol'
  height?: number
  className?: string
}

export default function Logo({ variant = 'wordmark', height = 32, className = '' }: LogoProps) {
  if (variant === 'symbol') {
    return (
      <Image
        src="/simbolo.png"
        alt="AGENTOU"
        width={height}
        height={height}
        className={className}
        priority
      />
    )
  }

  return (
    <Image
      src="/logo.png"
      alt="AGENTOU"
      width={Math.round(height * 4.5)}
      height={height}
      className={className}
      priority
    />
  )
}
