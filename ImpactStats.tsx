
import { useAppContext } from './AppContext'

export function ImpactStats() {
  const { language } = useAppContext()
  
  const stats = [
    { label: language === 'sw' ? 'Programu Hai' : 'Active Programs', value: '10+' },
    { label: language === 'sw' ? 'Jamii Zilizofikiwa' : 'Communities Reached', value: '500+' },
    { label: language === 'sw' ? 'Mwaka wa Usajili' : 'Year Registered', value: '2024' },
    { label: language === 'sw' ? 'Wajitoleaji' : 'Volunteers', value: '50+' },
  ]

  return (
    <section className="bg-slate-950 py-16 text-white border-y border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 text-center lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-y-3">
              <dt className="text-sm leading-6 text-slate-400 uppercase tracking-[0.2em]">{stat.label}</dt>
              <dd className="order-first text-5xl font-bold tracking-tight text-emerald-400">
                {stat.value}
              </dd>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-slate-400 italic text-sm">
            {language === 'sw' 
              ? 'Takwimu hizi zinawakilisha juhudi zetu za kuleta mabadiliko ya kudumu Tanzania.' 
              : 'These statistics represent our ongoing commitment to sustainable development in Tanzania.'}
          </p>
        </div>
      </div>
    </section>
  )
}