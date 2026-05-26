import { motion } from 'framer-motion'
import { testimonials as defaultTestimonials } from '../data/siteData'
import { useAppContext } from '../context/AppContext'

export function Testimonials({ items }: { items?: typeof defaultTestimonials }) {
  const { language } = useAppContext()
  const list = items ?? defaultTestimonials

  return (
    <motion.section
      id="testimonials"
      className="section-band mx-auto max-w-7xl px-6 py-20 lg:px-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
    >
      <h2 className="text-3xl font-black text-slate-900 sm:text-4xl">{language === 'sw' ? 'Ushuhuda' : 'Testimonials'}</h2>
      <p className="mt-4 max-w-2xl text-lg text-slate-600">{language === 'sw' ? 'Maneno kutoka kwa watu walioboresha maisha yao kupitia ALAREDEFO' : 'Voices of people whose lives were touched by our work'}</p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {list.map((t, index) => (
          <motion.article
            key={t.id}
            className="rounded-2xl border bg-white p-6 shadow-md"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: index * 0.12 }}
          >
            <p className="text-sm leading-7 text-slate-700">“{t.quote}”</p>
            <div className="mt-6 flex items-center gap-4">
              <img src={t.image} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
              <div>
                <p className="text-sm font-bold text-slate-900">{t.name}</p>
                <p className="text-xs text-slate-500">{t.role}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  )
}
