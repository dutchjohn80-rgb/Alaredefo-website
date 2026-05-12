import { useState } from 'react'
import { Mail } from 'lucide-react'
import { useAppContext } from '../context/AppContext'

export function NewsletterSection() {
  const { language } = useAppContext()
  const isSw = language === 'sw'
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    // Simulate async subscription (can wire to /api/contact later)
    await new Promise((r) => setTimeout(r, 900))
    setStatus('success')
    setEmail('')
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section className="newsletter-band py-20">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <div className="reveal-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-emerald-700">
            <Mail className="h-3.5 w-3.5" />
            {isSw ? 'Jiandikishe' : 'Stay Connected'}
          </span>
          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            {isSw ? 'Jiandikishe kwa Habari' : 'Subscribe for Updates'}
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            {isSw
              ? 'Pata habari za hivi karibuni na hadithi zinazovutia zinazotumwa moja kwa moja kwenye barua pepe yako.'
              : 'Get the latest news and inspiring stories delivered right to your inbox.'}
          </p>

          {status === 'success' ? (
            <div className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-emerald-50 border border-emerald-200 px-6 py-4 text-emerald-700 font-semibold">
              <span className="text-xl">✓</span>
              {isSw ? 'Asante! Umesajiliwa.' : 'Thank you! You\'re subscribed.'}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={isSw ? 'Barua pepe yako' : 'Your email address'}
                required
                className="input-field flex-1 text-center sm:text-left"
                disabled={status === 'loading'}
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex shrink-0 items-center justify-center rounded-xl bg-amber-500 px-8 py-3.5 text-sm font-extrabold uppercase tracking-wider text-white shadow-lg shadow-amber-500/25 transition hover:-translate-y-0.5 hover:bg-amber-400 disabled:opacity-70"
              >
                {status === 'loading' ? (
                  <span className="spinner" />
                ) : isSw ? (
                  'Jiandikishe'
                ) : (
                  'Subscribe'
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
