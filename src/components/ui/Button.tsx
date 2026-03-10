import { forwardRef } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  as?: 'button' | 'a'
  href?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', children, as: Tag = 'button', href, ...props }, ref) => {
    const base =
      'inline-flex items-center justify-center font-semibold tracking-wide uppercase transition-[transform,box-shadow,opacity] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-orange)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-navy)] active:scale-95 cursor-pointer'

    const variants = {
      primary:
        'bg-[var(--color-orange)] text-[var(--color-white)] hover:brightness-110 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(196,90,44,0.35)] [clip-path:polygon(0_0,calc(100%-12px)_0,100%_100%,0_100%)]',
      ghost:
        'border border-[var(--color-lead)] text-[var(--color-white)] hover:border-[var(--color-orange)] hover:text-[var(--color-orange)]',
    }

    const sizes = {
      sm: 'px-4 py-2 text-xs',
      md: 'px-6 py-3 text-sm',
      lg: 'px-8 py-4 text-base',
    }

    const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

    if (Tag === 'a') {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      )
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
export default Button
