import { ArrowRight } from 'lucide-react'
import { SectionHeading } from './SectionHeading'
import { newsItems } from '../data/siteData'
import { useAppContext } from '../context/AppContext'
import { sw } from '../data/siteData'

export function NewsSection() {
  const { language } = useAppContext()
  const isSw = language === 'sw'

  return (
    <section className="section-band mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionHeading
        eyebrow={isSw ? 'Habari' : 'Latest News'}
        title={isSw ? 'Habari za Hivi Karibuni kutoka Uwanjani' : 'Stories from the Field'}
        description={
          isSw
            ? 'Pata habari za hivi karibuni na hadithi zinazovutia kutoka kwa jamii tunazohudumia.'
            : 'Stay informed with our latest updates and stories from the communities we serve.'
        }
      />

      <div className="stagger-grid grid gap-8 md:grid-cols-3">
        {newsItems.map((item) => (
          <article
            key={item.id}
            className="news-card group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white transition hover:-translate-y-1"
          >
            <div className="relative overflow-hidden h-52">
              <img
                src={item.image}
                alt={isSw ? item.titleSw : item.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
              <span className="absolute left-4 top-4 inline-flex rounded-full bg-emerald-700/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                {isSw ? item.categorySw : item.category}
              </span>
            </div>

            <div className="p-6">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">{item.date}</p>
              <h3 className="text-lg font-bold leading-snug text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-2">
                {isSw ? item.titleSw : item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600 line-clamp-3">
                {isSw ? item.excerptSw : item.excerpt}
              </p>
              <a
                href="/#portfolio"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-emerald-700 transition hover:gap-3 hover:text-emerald-600"
              >
                {isSw ? sw.common.moreDetails : 'Read More'}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
