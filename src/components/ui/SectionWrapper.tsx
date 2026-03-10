interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export default function SectionWrapper({ children, className = '', id }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`w-full px-6 py-20 md:px-12 lg:px-16 xl:px-24 ${className}`}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  )
}
