import { PageHero } from '../components/PageHero'
import { organization } from '../data/siteData'
import { useAppContext } from '../context/AppContext'

export function TermsPage() {
  const { language } = useAppContext()
  return (
    <main>
      <PageHero
        eyebrow={language === 'sw' ? 'Masharti' : 'Terms'}
        title={language === 'sw' ? 'Masharti ya Matumizi' : 'Terms of Use'}
        description={language === 'sw' ? 'Tovuti hii ni ya ALAREDEFO Tanzania na hutumika kwa taarifa, mawasiliano, na ushirikiano.' : 'This website belongs to ALAREDEFO Tanzania and is provided for general information, communication, and partnership engagement.'}
      />
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="mb-8 inline-block rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700">
          {language === 'sw' ? 'Imesasishwa' : 'Last Updated'}: {new Date().toLocaleDateString(language === 'sw' ? 'sw-TZ' : 'en-TZ', { month: 'long', day: 'numeric', year: 'numeric' })}
        </div>
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/70">
            <p className="leading-8 text-slate-600">
              {language === 'sw' ? 'Kwa kutumia tovuti hii, unakubali kutumia taarifa kwa uwajibikaji na si kwa madhumuni haramu, yenye madhara, au ya kupotosha.' : 'By using this website, you agree to use the information responsibly and not for unlawful, harmful, or misleading purposes.'}
            </p>
            <p className="mt-5 leading-8 text-slate-600">
              {language === 'sw' ? 'Taarifa kwenye tovuti hii zinaweza kusasishwa kadri taasisi inavyokua na kuendeleza programu zake.' : 'Information published on this site may be updated as the foundation grows and develops its programmes. We work to keep the content accurate, but some information may change over time.'}
            </p>
            <p className="mt-5 leading-8 text-slate-600">
              {language === 'sw' ? 'Kwa mawasiliano rasmi, ushirikiano, au maswali, wasiliana kupitia ' : 'For formal communication, partnerships, or questions, please contact '}
              <a href={`mailto:${organization.email}`} className="font-medium text-emerald-600 hover:underline">
                {organization.email}
              </a>{' '}
              {language === 'sw' ? ' au piga ' : ' or call '}
              <a href={`tel:${organization.phone}`} className="font-medium text-emerald-600 hover:underline">
                {organization.phone}
              </a>.
            </p>
          </div>
          <div className="rounded-[2rem] bg-slate-950 p-8 text-white">
            <h3 className="text-2xl font-bold">{language === 'sw' ? 'Matumizi ya kuwajibika' : 'Responsible use'}</h3>
            <p className="mt-4 leading-8 text-slate-200">
              Content on this website is intended to inform, engage, and support responsible communication with
              ALAREDEFO. Misuse, false representation, or harmful use of the site is not permitted.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
