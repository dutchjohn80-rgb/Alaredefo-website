import { PageHero } from '../components/PageHero'
import { organization } from '../data/siteData'
import { useAppContext } from '../context/AppContext'

export function PrivacyPage() {
  const { language } = useAppContext()
  return (
    <main>
      <PageHero
        eyebrow={language === 'sw' ? 'Faragha' : 'Privacy'}
        title={language === 'sw' ? 'Taarifa ya Faragha' : 'Privacy Notice'}
        description={language === 'sw' ? 'ALAREDEFO huheshimu faragha ya wageni wa tovuti, washirika, wajitoleaji, na wanajamii wanaowasiliana na taasisi.' : 'ALAREDEFO respects the privacy of website visitors, partners, volunteers, and community members who contact the organization.'}
      />
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/70">
            <p className="leading-8 text-slate-600">
              {language === 'sw' ? 'Tunaweza kukusanya taarifa unazotoa kwa hiari kama jina, barua pepe, namba ya simu, na ujumbe wako unapowasiliana nasi.' : 'We may collect personal details you provide voluntarily, such as your name, email address, phone number, and the content of your message, when you contact us or subscribe for updates.'}
            </p>
            <p className="mt-5 leading-8 text-slate-600">
              {language === 'sw' ? 'Tunatumia taarifa hizo kujibu maswali, kutoa taarifa muhimu, kuboresha mawasiliano, na kusaidia kazi ya taasisi. Hatuuzi taarifa zako.' : 'We use that information only to respond to inquiries, share relevant updates, improve communication, and support our organizational work. We do not sell your personal information.'}
            </p>
            <p className="mt-5 leading-8 text-slate-600">
              {language === 'sw' ? `Ukitaka kuuliza kuhusu taarifa zako au kuomba ziondolewe, wasiliana nasi kupitia ${organization.email}.` : `If you would like to ask about your information or request removal of submitted contact details, please reach us at ${organization.email}.`}
            </p>
          </div>
          <div className="rounded-[2rem] bg-emerald-50 p-8">
            <h3 className="text-2xl font-bold text-slate-900">{language === 'sw' ? 'Kanuni za matumizi ya taarifa' : 'Data use principles'}</h3>
            <ul className="mt-5 space-y-3 text-slate-700">
              <li>We collect only what is needed for communication and updates.</li>
              <li>We use submitted information to respond and support our work.</li>
              <li>We do not sell visitor or supporter information.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
