import { PageHero } from '../components/PageHero'
import { localized, organization } from '../data/siteData'
import { useAppContext } from '../context/AppContext'

export function MembershipPage() {
  const { language } = useAppContext()
  const data = localized[language]
  return (
    <main>
      <PageHero
        eyebrow={language === 'sw' ? 'Uanachama' : 'Membership'}
        title={language === 'sw' ? 'Aina za uanachama ndani ya ALAREDEFO' : 'Membership categories within ALAREDEFO'}
        description={language === 'sw' ? 'Uanachama huimarisha mwendelezo wa taasisi, umiliki wa jamii, na ushiriki katika kazi za maendeleo.' : 'Membership supports organizational continuity, community ownership, and stronger participation in development work.'}
      />
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="stagger-grid grid gap-6 md:grid-cols-3">
          {data.membershipTypes?.map((memberType, index) => (
            <article key={memberType} className="rounded-[1.75rem] bg-white p-8 shadow-xl shadow-slate-200/70">
              <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-700">
                {language === 'sw' ? 'Mwanachama' : 'Member'} 0{index + 1}
              </span>
              <h2 className="text-2xl font-bold text-slate-900">{memberType}</h2>
              <p className="mt-4 leading-8 text-slate-600">
                {language === 'sw' ? 'Wanachama wanaoshiriki katika kuimarisha mwendelezo, umiliki, na ukuaji wa ALAREDEFO.' : 'Members who support the ongoing work, activities, and growth of ALAREDEFO.'}
              </p>
              <a href="/#contact" className="mt-6 inline-block text-sm font-bold text-emerald-600 hover:text-emerald-500">
                {language === 'sw' ? 'Omba Uanachama →' : 'Apply for Membership →'}
              </a>
            </article>
          ))}
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-emerald-50 p-8">
            <h3 className="text-2xl font-bold text-slate-900">{language === 'sw' ? 'Kwa nini uanachama ni muhimu' : 'Why membership matters'}</h3>
            <p className="mt-4 leading-8 text-slate-700">
              {language === 'sw' ? 'Uanachama husaidia taasisi kujenga umiliki wa jamii, miradi endelevu, na ushiriki mpana katika mabadiliko ya kijamii.' : 'Membership helps the foundation build stronger community ownership, more sustainable initiatives, and wider public participation in social transformation.'}
            </p>
          </div>
          <div className="rounded-[2rem] bg-slate-950 p-8 text-white">
            <h3 className="text-2xl font-bold">{language === 'sw' ? 'Mawasiliano ya Ushiriki' : 'Engagement Contact'}</h3>
            <p className="mt-4 text-slate-200">
              Email: {organization.email}<br />
              Phone: {organization.phone}<br />
              Website: {organization.website}
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
