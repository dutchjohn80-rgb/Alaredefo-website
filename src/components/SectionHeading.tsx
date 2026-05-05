type SectionHeadingProps = {
  eyebrow: string
  title: string
  description: string
  tone?: 'light' | 'dark'
}

export function SectionHeading({ eyebrow, title, description, tone = 'dark' }: SectionHeadingProps) {
  const titleColor = tone === 'light' ? 'text-white' : 'text-slate-900'
  const descriptionColor = tone === 'light' ? 'text-slate-300' : 'text-slate-600'
  const eyebrowColor = tone === 'light' ? 'text-emerald-300' : 'text-emerald-700'

  return (
    <div className="reveal-up mx-auto mb-12 max-w-3xl text-center">
      <p className={`section-eyebrow mx-auto mb-4 w-fit ${eyebrowColor}`}>{eyebrow}</p>
      <h2 className={`text-3xl font-black tracking-tight sm:text-4xl ${titleColor}`}>{title}</h2>
      <p className={`mt-4 text-base leading-7 ${descriptionColor}`}>{description}</p>
    </div>
  )
}
