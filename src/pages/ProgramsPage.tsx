import { PageHero } from '../components/PageHero'
import { localized, organization } from '../data/siteData'
import { useAppContext } from '../context/AppContext'

export function ProgramsPage() {
  const { language } = useAppContext()
  const data = localized[language]
  return (
    <main>
      <PageHero
        eyebrow={language === 'sw' ? 'Programu' : 'Programs'}
        title={language === 'sw' ? 'Maeneo ya kazi na mwelekeo wa programu' : 'Thematic areas and program direction'}
        description={language === 'sw' ? 'ALAREDEFO hufanya kazi kupitia maeneo yanayounganisha msaada, uwezeshaji, utetezi, na maendeleo endelevu.' : 'ALAREDEFO works through practical, community-centered areas that connect relief, empowerment, advocacy, and sustainable development.'}
      />
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="stagger-grid grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {data.thematicAreas.map((area, index) => (
            <article key={area.title} className="program-card rounded-[1.75rem] border border-white/50 bg-white/90 p-8 shadow-xl shadow-slate-200/70 backdrop-blur">
              <span className="program-pill inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-700">
                {language === 'sw' ? 'Eneo' : 'Track'} 0{index + 1}
              </span>
              <h2 className="program-title text-2xl font-bold text-slate-900">{area.title}</h2>
              <p className="program-text mt-4 leading-8 text-slate-600">{area.description}</p>
              <a
                href={`/donate?source=empowerment&title=${encodeURIComponent(area.title)}`}
                className="mt-6 inline-flex rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                {language === 'sw' ? 'Changia eneo hili' : 'Donate for this area'}
              </a>
            </article>
          ))}
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="program-info rounded-[2rem] bg-emerald-50 p-8">
            <h3 className="program-title text-2xl font-bold text-slate-900">{language === 'sw' ? 'Namna kazi yetu inavyoleta matokeo' : 'How our work creates impact'}</h3>
            <ul className="program-text mt-4 space-y-3 text-slate-700">
              <li>{language === 'sw' ? 'Tunaongeza uelewa na kujenga uwezo katika ngazi ya jamii.' : 'We raise awareness and build capacity at community level.'}</li>
              <li>{language === 'sw' ? 'Tunakuza mafunzo ya ufundi, mikopo midogo, na njia za kukuza uchumi.' : 'We promote viable economic growth interventions including vocational training and microfinance.'}</li>
              <li>{language === 'sw' ? 'Tunaunganisha mahitaji ya ndani na malengo mapana ya maendeleo endelevu.' : 'We connect local needs with broader sustainable development goals and Agenda 2063.'}</li>
              <li>{language === 'sw' ? 'Tunatetea haki, ulinzi, na ustahimilivu wa muda mrefu wa jamii.' : 'We advocate for justice, protection, and long-term community resilience.'}</li>
            </ul>
          </div>
          <div className="program-collab rounded-[2rem] bg-slate-950 p-8 text-white">
            <h3 className="text-2xl font-bold">{language === 'sw' ? 'Ushirikiano wa programu' : 'Program collaboration'}</h3>
            <p className="mt-4 leading-8 text-slate-200">
              {language === 'sw' ? `Wasiliana nasi kupitia ${organization.email} au ${organization.phone} kwa ushirikiano na msaada unaolingana na maeneo ya kazi hapo juu.` : `Contact us via ${organization.email} or ${organization.phone} for partnerships, field collaboration, and support aligned with the thematic areas above.`}
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
