import { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import { sw } from '../data/siteData'

type PortfolioItem = {
  slug: string
  title: string
  filter: string
  category: string
  description: string
  details: string
  image: string
}

type PortfolioGalleryProps = {
  items: PortfolioItem[]
}

export function PortfolioGallery({ items }: PortfolioGalleryProps) {
  const { language } = useAppContext()
  const [activeFilter, setActiveFilter] = useState('all')
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const filters = [
    { key: 'all', label: language === 'sw' ? 'Zote' : 'All' },
    { key: 'climate', label: language === 'sw' ? 'Tabianchi' : 'Climate' },
    { key: 'community', label: language === 'sw' ? 'Jamii' : 'Community' },
    { key: 'empowerment', label: language === 'sw' ? 'Uwezeshaji' : 'Empowerment' },
  ]

  const filteredItems = activeFilter === 'all' ? items : items.filter((item) => item.filter === activeFilter)

  const openLightbox = (index: number) => setActiveIndex(index)
  const closeLightbox = () => setActiveIndex(null)

  const showPrevious = () => {
    setActiveIndex((current) => {
      if (current === null) return current
      return current === 0 ? filteredItems.length - 1 : current - 1
    })
  }

  const showNext = () => {
    setActiveIndex((current) => {
      if (current === null) return current
      return current === filteredItems.length - 1 ? 0 : current + 1
    })
  }

  useEffect(() => {
    setActiveIndex(null)
  }, [activeFilter])

  useEffect(() => {
    if (activeIndex === null) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeLightbox()
      if (event.key === 'ArrowLeft') showPrevious()
      if (event.key === 'ArrowRight') showNext()
    }

    window.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [activeIndex, filteredItems.length])

  const activeItem = activeIndex !== null ? filteredItems[activeIndex] : null
  const activePosition = activeIndex !== null ? activeIndex + 1 : 0

  return (
    <>
      <div className="mb-12 flex flex-wrap justify-center gap-4">
        {filters.map((filter) => (
          <button
            key={filter.key}
            type="button"
            onClick={() => setActiveFilter(filter.key)}
            className={`rounded-full px-6 py-3 text-sm font-bold uppercase tracking-wider transition duration-300 ${
              activeFilter === filter.key
                ? 'scale-105 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-2xl shadow-emerald-300/50 ring-2 ring-emerald-400/50'
                : 'bg-slate-100 text-slate-600 shadow-md shadow-slate-200/60 hover:bg-slate-200 hover:text-slate-800 hover:scale-102'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="stagger-grid grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredItems.map((item, index) => (
          <article key={item.slug} className="portfolio-card group overflow-hidden rounded-[1.75rem] bg-white transition duration-300 hover:-translate-y-1">
            <div className="relative overflow-hidden">
              <img src={item.image} alt={item.title} className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.02)_10%,rgba(2,6,23,0.78)_100%)] opacity-100 transition duration-300 sm:opacity-0 sm:group-hover:opacity-100" />
              <div className="absolute bottom-4 left-4 right-4 flex translate-y-0 items-center justify-between opacity-100 transition duration-300 sm:translate-y-4 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-200">{item.category}</p>
                  <h3 className="mt-2 truncate text-xl font-bold text-white">{item.title}</h3>
                </div>
                <div className="ml-4 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => openLightbox(index)}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-900 shadow-lg transition hover:scale-105 hover:bg-emerald-300"
                    aria-label={`Zoom ${item.title}`}
                  >
                    <span className="text-2xl leading-none">+</span>
                  </button>
                  <a
                    href={`/portfolio/${item.slug}`}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg transition hover:scale-105 hover:bg-emerald-400"
                    aria-label={`More details for ${item.title}`}
                  >
                    <span className="text-xl leading-none">{'>'}</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-700">{item.category}</p>
              <h3 className="mt-3 text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
            </div>
          </article>
        ))}
      </div>

      {activeItem && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center bg-slate-950/92 px-4 py-8 backdrop-blur-sm" onClick={closeLightbox}>
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Close image viewer"
          >
            <span className="text-2xl leading-none">x</span>
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              showPrevious()
            }}
            className="absolute left-3 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 sm:left-6"
            aria-label="Previous image"
          >
            <span className="text-2xl leading-none">&lt;</span>
          </button>

          <div
            className="mx-auto flex w-full max-w-5xl flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900 shadow-2xl shadow-black/40"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative bg-slate-950">
              <img src={activeItem.image} alt={activeItem.title} className="max-h-[72vh] w-full object-contain" />
            </div>
            <div className="flex flex-col gap-3 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">{activeItem.category}</p>
                <h3 className="mt-2 text-2xl font-bold text-white">{activeItem.title}</h3>
                <p className="mt-2 max-w-2xl text-slate-300">{activeItem.description}</p>
              </div>
              <p className="text-sm text-slate-400">
                {activePosition} / {filteredItems.length}
              </p>
            </div>
            <div className="border-t border-white/10 px-6 pb-6">
              <div className="mb-5 mt-5 flex flex-wrap items-center gap-3">
                <a
                  href={`/portfolio/${activeItem.slug}`}
                  className="inline-flex items-center rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-400"
                >
                  {language === 'sw' ? sw.common.moreDetails : 'More Details'}
                </a>
              </div>
              <div className="flex gap-3 overflow-x-auto pb-1">
                {filteredItems.map((thumb, index) => (
                  <button
                    key={thumb.slug}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`shrink-0 overflow-hidden rounded-2xl border-2 transition ${
                      index === activeIndex ? 'border-emerald-400' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                    aria-label={`View ${thumb.title}`}
                  >
                    <img src={thumb.image} alt={thumb.title} className="h-16 w-20 object-cover sm:h-20 sm:w-24" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              showNext()
            }}
            className="absolute right-3 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 sm:right-6"
            aria-label="Next image"
          >
            <span className="text-2xl leading-none">&gt;</span>
          </button>
        </div>
      )}
    </>
  )
}
