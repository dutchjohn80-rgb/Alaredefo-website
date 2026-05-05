type PageHeroProps = {
  eyebrow: string
  title: string
  description: string
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="page-hero border-b border-white/10">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-18 lg:grid-cols-[1fr_0.72fr] lg:px-8 lg:py-20">
        <div>
          <p className="section-eyebrow w-fit text-emerald-200">{eyebrow}</p>
          <h1 className="reveal-up mt-5 max-w-4xl text-4xl font-black tracking-tight text-white sm:text-5xl">{title}</h1>
          <p className="reveal-up mt-5 max-w-3xl text-lg leading-8 text-slate-200">{description}</p>
        </div>
        <div className="hidden overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/10 p-2 shadow-2xl shadow-slate-950/30 lg:block">
          <img src="/images/about/about-group-2.jpeg" alt="" className="h-64 w-full rounded-[1.35rem] object-cover" />
        </div>
      </div>
    </section>
  )
}
