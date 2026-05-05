import { SectionHeading } from '../components/SectionHeading'
import { ContactForm } from '../components/ContactForm'
import { PortfolioGallery } from '../components/PortfolioGallery'
import { localized, organization, sw } from '../data/siteData'
import { useAppContext } from '../context/AppContext'

export function HomePage() {
  const { language } = useAppContext()
  const data = localized[language]
  const t = language === 'sw' ? sw.home : null
  return (
    <main>
      <section
        id="home"
        className="hero-showcase relative overflow-hidden"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-18 lg:min-h-[calc(100vh-5.25rem)] lg:grid-cols-[1.04fr_0.96fr] lg:px-8 lg:py-24">
          <div className="relative z-10 reveal-up">
            <p className="inline-flex rounded-full border border-emerald-300/35 bg-emerald-300/15 px-4 py-1.5 text-sm font-bold text-emerald-50 shadow-lg shadow-emerald-950/20 backdrop-blur">
              {t ? t.registered : 'Registered NGO No.'} {organization.registrationNumber}
            </p>
            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-7xl">
              {organization.fullName}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-emerald-50/90">{data.preamble}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#about" className="rounded-full bg-emerald-400 px-6 py-3 text-sm font-extrabold text-slate-950 shadow-xl shadow-emerald-950/30 transition hover:-translate-y-0.5 hover:bg-amber-300">
                {t ? t.learnMore : 'Learn More'}
              </a>
              <a href="#contact" className="rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/15">
                {t ? t.contactUs : 'Contact Us'}
              </a>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="hero-stat">
                <p className="text-2xl font-bold text-white">{organization.registrationDate}</p>
                <p className="mt-1 text-sm text-slate-300">{t ? t.registrationDate : 'Registration Date'}</p>
              </div>
              <div className="hero-stat">
                <p className="text-2xl font-bold text-white">{organization.region}</p>
                <p className="mt-1 text-sm text-slate-300">{t ? t.headOffice : 'Head Office'}</p>
              </div>
              <div className="hero-stat col-span-2 sm:col-span-1">
                <p className="text-2xl font-bold text-white">{data.thematicAreas.length}</p>
                <p className="mt-1 text-sm text-slate-300">{t ? t.thematicAreas : 'Thematic Areas'}</p>
              </div>
            </div>
          </div>

          <div className="relative z-10 reveal-up lg:self-center">
            <div className="hero-photo-grid">
              <img src="/images/about/about-group-1.jpeg" alt="ALAREDEFO community support" className="hero-photo-main" />
              <div className="hero-photo-caption">
                <p className="text-xs font-bold uppercase tracking-[0.26em] text-emerald-200">{t ? t.focus : 'Focus'}</p>
                <p className="mt-2 text-xl font-black text-white">{t ? t.focusText : 'Community self-reliance and socio-economic development'}</p>
              </div>
              <img src="/images/portfolio/portfolio-3.jpeg" alt="ALAREDEFO empowerment activity" className="hero-photo-small" />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section-band mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeading eyebrow={t ? t.aboutEyebrow : 'About'} title={t ? t.aboutTitle : 'Vision, mission, and people-centered impact'} description={data.vision} />
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="feature-frame overflow-hidden rounded-[2rem] bg-white p-3">
            <img src="/images/about/about-group-2.jpeg" alt="ALAREDEFO vision and mission" className="h-full min-h-[420px] w-full rounded-[1.5rem] object-cover" />
          </div>
            <div className="space-y-6">
              <div className="feature-card rounded-[2rem] bg-white p-8">
                <h3 className="text-2xl font-bold text-slate-900">{t ? t.missionTitle : 'Mission Statement'}</h3>
                <p className="mt-4 leading-8 text-slate-600">{data.mission}</p>
              </div>
              <div className="feature-card rounded-[2rem] border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">{t ? t.registration : 'Registration'}</p>
                <p className="mt-3 text-2xl font-bold text-slate-900">{organization.registrationNumber}</p>
                <p className="mt-2 text-slate-600">{t ? t.registeredOn : 'Registered on'} {organization.registrationDate} in Tanzania.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.75rem] bg-emerald-900 p-6 text-white">
                <p className="text-sm uppercase tracking-[0.3em] text-emerald-200">{t ? t.focus : 'Focus'}</p>
                <p className="mt-3 text-lg font-semibold">{t ? t.focusText : 'Community self-reliance and socio-economic development'}</p>
              </div>
              <div className="rounded-[1.75rem] bg-slate-900 p-6 text-white">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-300">{t ? t.reach : 'Reach'}</p>
                <p className="mt-3 text-lg font-semibold">{t ? t.reachText : 'Women, youth, children, and vulnerable communities'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section-band-alt py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow={t ? t.servicesEyebrow : 'Thematic Areas'} title={t ? t.servicesTitle : 'Core areas that guide ALAREDEFO programs'} description={t ? t.servicesDescription : 'These areas shape our interventions, advocacy, and long-term community partnerships.'} />
          <div className="stagger-grid grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {data.thematicAreas.map((area, index) => (
              <article key={area.title} className="service-card group rounded-[1.75rem] border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-emerald-300">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-lg font-black text-emerald-700">0{index + 1}</div>
                <h3 className="mt-5 text-xl font-bold text-slate-900">{area.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{area.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="section-band mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeading eyebrow={t ? t.portfolioEyebrow : 'Portfolio'} title={t ? t.portfolioTitle : 'A visual snapshot of ALAREDEFO priorities'} description={t ? t.portfolioDescription : 'Images matched to the work areas and outreach story of the organization.'} />
        <PortfolioGallery items={data.portfolioItems} />
      </section>

      <section id="objectives" className="objectives-band py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow={t ? t.objectivesEyebrow : 'Objectives'} title={t ? t.objectivesTitle : 'What ALAREDEFO intends to achieve'} description={t ? t.objectivesDescription : 'The foundation objectives are rooted in dignity, empowerment, sustainability, and practical action.'} tone="light" />
          <div className="stagger-grid grid gap-5 lg:grid-cols-2">
            {data.objectives.map((objective, index) => (
              <div key={objective} className="rounded-[1.75rem] border border-white/10 bg-white/10 p-6 shadow-xl shadow-slate-950/20 backdrop-blur">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400/20 font-bold text-emerald-200">{index + 1}</div>
                <p className="leading-8 text-slate-200">{objective}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="members" className="section-band mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeading eyebrow={t ? t.membersEyebrow : 'Membership'} title={t ? t.membersTitle : 'Types of members'} description={t ? t.membersDescription : 'Membership creates ownership, continuity, and stronger community participation in the life of the organization.'} />
        <div className="stagger-grid grid gap-6 md:grid-cols-3">
          {data.membershipTypes.map((memberType) => (
            <div key={memberType} className="member-card rounded-[1.75rem] bg-white p-8 text-center">
              <h3 className="text-xl font-bold text-slate-900">{memberType}</h3>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-[2rem] bg-gradient-to-r from-slate-950 via-emerald-950 to-emerald-800 p-8 text-white shadow-2xl shadow-emerald-950/20">
          <h3 className="text-2xl font-bold">{t ? t.buildTitle : 'Build the foundation with us'}</h3>
          <p className="mt-3 max-w-3xl text-slate-200">
            {t ? t.buildText : 'Membership supports continuity, accountability, and stronger local ownership of programs that serve women, youth, children, and wider communities.'}
          </p>
        </div>
      </section>

      <section id="contact" className="contact-band py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl shadow-emerald-950/20">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300">{t ? t.contactEyebrow : 'Contact'}</p>
            <h2 className="mt-4 text-3xl font-bold">{t ? t.contactTitle : 'Reach our head office in Arusha, Tanzania'}</h2>
            <div className="mt-8 space-y-5 text-slate-200">
              <p><span className="font-semibold text-white">{t ? t.postal : 'Postal Address'}:</span> {organization.poBox}, {organization.region}, Tanzania</p>
              <p><span className="font-semibold text-white">{t ? t.physical : 'Physical Location'}:</span> {organization.street} Street, House No. {organization.houseNumber}, {organization.ward} Ward, {organization.district} District</p>
              <p><span className="font-semibold text-white">{t ? t.email : 'Email'}:</span> {organization.email}</p>
              <p><span className="font-semibold text-white">{t ? t.phone : 'Phone'}:</span> {organization.phone}</p>
              <p><span className="font-semibold text-white">{t ? t.website : 'Website'}:</span> www.alaredefo.org</p>
              <p><span className="font-semibold text-white">Registration:</span> {organization.registrationNumber}</p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  )
}
