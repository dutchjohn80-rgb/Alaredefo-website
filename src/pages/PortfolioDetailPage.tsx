import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { localized, sw } from '../data/siteData'
import { useAppContext } from '../context/AppContext'

export function PortfolioDetailPage() {
  const { slug } = useParams()
  const { language } = useAppContext()
  const items = localized[language].portfolioItems
  const item = useMemo(() => items.find((entry) => entry.slug === slug), [items, slug])

  if (!item) {
    return (
      <main>
        <PageHero eyebrow={language === 'sw' ? 'Maelezo ya Picha' : 'Portfolio Detail'} title={language === 'sw' ? 'Haijapatikana' : 'Portfolio detail not found'} description={language === 'sw' ? 'Kipengele ulichotafuta hakipo.' : 'The portfolio item you requested does not exist.'} />
        <section className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
          <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/70">
            <a href="/#portfolio" className="inline-flex rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white">
              {language === 'sw' ? sw.common.backToPortfolio : 'Back to Portfolio'}
            </a>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main>
      <PageHero eyebrow={language === 'sw' ? 'Maelezo ya Picha' : 'Portfolio Detail'} title={item.title} description={item.description} />
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="reveal-on-scroll reveal-left overflow-hidden rounded-[2rem] bg-white p-3 shadow-xl shadow-slate-200/70">
            <img src={item.image} alt={item.title} className="h-full min-h-[420px] w-full rounded-[1.5rem] object-cover" />
          </div>
          <div className="space-y-6">
            <div className="reveal-on-scroll reveal-right rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/70">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">{item.category}</p>
              <h2 className="mt-4 text-3xl font-bold text-slate-900">{item.title}</h2>
              <p className="mt-5 leading-8 text-slate-600">{item.details}</p>
            </div>
            <div className="reveal-on-scroll reveal-up rounded-[2rem] bg-emerald-50 p-8">
              <h3 className="text-2xl font-bold text-slate-900">{language === 'sw' ? 'Kwa nini hili ni muhimu' : 'Why this matters'}</h3>
              <p className="mt-4 leading-8 text-slate-700">
                {language === 'sw' ? 'Eneo hili linaonyesha namna ALAREDEFO inavyounganisha vitendo, ushiriki wa jamii, na matokeo endelevu Tanzania.' : 'This portfolio area reflects how ALAREDEFO connects practical action, community participation, and sustainable development outcomes in Tanzania.'}
              </p>
            </div>
            <div className="reveal-on-scroll reveal-right rounded-[2rem] bg-slate-950 p-8 text-white">
              <h3 className="text-2xl font-bold">{language === 'sw' ? 'Tazama zaidi' : 'Explore more'}</h3>
              <div className="mt-5 flex flex-wrap gap-4">
                <a href="/programs" className="inline-flex rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white">
                  {language === 'sw' ? sw.common.viewPrograms : 'View Programs'}
                </a>
                <a href="/#portfolio" className="inline-flex rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white">
                  {language === 'sw' ? sw.common.backToPortfolio : 'Back to Portfolio'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
