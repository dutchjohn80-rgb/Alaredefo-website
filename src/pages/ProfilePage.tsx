import { PageHero } from '../components/PageHero'
import { localized, organization } from '../data/siteData'
import { useAppContext } from '../context/AppContext'

export function ProfilePage() {
  const { language } = useAppContext()
  const data = localized[language]
  return (
    <main>
      <PageHero
        eyebrow={language === 'sw' ? 'Wasifu' : 'Profile'}
        title={organization.fullName}
        description={language === 'sw' ? 'NGO iliyosajiliwa Tanzania inayojikita katika utetezi, msaada, uwezeshaji, na maendeleo endelevu ya jamii.' : 'Registered Tanzanian NGO committed to advocacy, relief, empowerment, and sustainable community development.'}
      />
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-8">
            <div className="reveal-up overflow-hidden rounded-[2rem] bg-white p-3 shadow-xl shadow-slate-200/70">
              <img src="/images/about/about-group-1.jpeg" alt="ALAREDEFO profile" className="h-[320px] w-full rounded-[1.5rem] object-cover" />
            </div>
            <div className="reveal-up rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/70">
              <h2 className="text-2xl font-bold text-slate-900">{language === 'sw' ? 'Utangulizi' : 'Preamble'}</h2>
              <p className="mt-4 leading-8 text-slate-600">{data.preamble}</p>
            </div>
            <div className="reveal-up rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/70">
              <h2 className="text-2xl font-bold text-slate-900">{language === 'sw' ? 'Dira' : 'Vision Statement'}</h2>
              <p className="mt-4 leading-8 text-slate-600">{data.vision}</p>
            </div>
            <div className="reveal-up rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/70">
              <h2 className="text-2xl font-bold text-slate-900">{language === 'sw' ? 'Dhamira' : 'Mission Statement'}</h2>
              <p className="mt-4 leading-8 text-slate-600">{data.mission}</p>
            </div>
            <div className="reveal-up rounded-[2rem] bg-slate-950 p-8 text-white shadow-xl shadow-slate-300/20">
              <h2 className="text-2xl font-bold">{language === 'sw' ? 'Malengo ya Taasisi' : 'Organization Objectives'}</h2>
              <ol className="mt-5 space-y-4 text-slate-200">
                {data.objectives.map((objective, index) => (
                  <li key={objective}>
                    <span className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-400/20 text-sm font-bold text-emerald-200">
                      {index + 1}
                    </span>
                    {objective}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="reveal-up rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/70">
              <h3 className="text-xl font-bold text-slate-900">{language === 'sw' ? 'Taarifa za Usajili' : 'Registration Details'}</h3>
              <div className="mt-5 space-y-4 text-slate-600">
                <p><span className="font-semibold text-slate-900">Registration Number:</span> {organization.registrationNumber}</p>
                <p><span className="font-semibold text-slate-900">Registration Date:</span> {organization.registrationDate}</p>
                <p><span className="font-semibold text-slate-900">Status:</span> Head Office</p>
                <p><span className="font-semibold text-slate-900">Website:</span> {organization.website}</p>
              </div>
            </div>
            <div className="reveal-up rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/70">
              <h3 className="text-xl font-bold text-slate-900">{language === 'sw' ? 'Anwani' : 'Address'}</h3>
              <div className="mt-5 space-y-4 text-slate-600">
                <p><span className="font-semibold text-slate-900">P.O. Box:</span> 12986</p>
                <p><span className="font-semibold text-slate-900">Region:</span> {organization.region}</p>
                <p><span className="font-semibold text-slate-900">District:</span> {organization.district}</p>
                <p><span className="font-semibold text-slate-900">Ward:</span> {organization.ward}</p>
                <p><span className="font-semibold text-slate-900">Street:</span> {organization.street}</p>
                <p><span className="font-semibold text-slate-900">House No:</span> {organization.houseNumber}</p>
                <p><span className="font-semibold text-slate-900">Nearby:</span> {organization.nearby}</p>
                <p><span className="font-semibold text-slate-900">Email:</span> {organization.email}</p>
                <p><span className="font-semibold text-slate-900">Phone:</span> {organization.phone}</p>
              </div>
            </div>
            <div className="reveal-up rounded-[2rem] bg-gradient-to-br from-emerald-600 to-emerald-800 p-8 text-white shadow-xl shadow-emerald-200/60">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-100">{language === 'sw' ? 'Utambulisho' : 'Identity'}</p>
              <p className="mt-4 text-2xl font-bold">{language === 'sw' ? 'Taasisi iliyojengwa kwa mabadiliko endelevu ya jamii' : 'A foundation built for sustainable community transformation'}</p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
