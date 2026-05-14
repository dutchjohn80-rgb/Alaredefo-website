import { Heart } from 'lucide-react'
import { useAppContext } from '../context/AppContext'

export function DonateCtaSection() {
  const { language } = useAppContext()
  const isSw = language === 'sw'

  return (
    <section className="donate-cta-band relative overflow-hidden py-28 text-white">
      {/* Grayscale image overlay */}
      <div className="absolute inset-0 donate-cta-bg" />
      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/88 via-slate-900/70 to-emerald-950/60" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-300">
            {isSw ? 'Fanya Mabadiliko' : 'Make a Difference'}
          </p>
          <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            {isSw
              ? 'Saidia Kubadilisha Maisha.'
              : 'Help Transform Lives.'}
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-200">
            {isSw
              ? 'ALAREDEFO ina uwezo wa kufikia jamii zilizo hatarini na msaada unaobadilisha maisha. Changia leo na uwe sehemu ya mabadiliko endelevu Tanzania.'
              : 'ALAREDEFO has the power to reach vulnerable communities across northern Tanzania with life-changing relief and development support. Your contribution makes lasting change possible.'}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/donate"
              className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-8 py-4 text-base font-extrabold uppercase tracking-wider text-white shadow-xl shadow-amber-950/30 transition hover:-translate-y-0.5 hover:bg-amber-400"
            >
              <Heart className="h-5 w-5" />
              {isSw ? 'Changia Sasa' : 'Donate Now'}
            </a>
            <a
              href="/donate"
              className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/15"
            >
              {isSw ? 'Shirikiana Nasi' : 'Partner With Us'}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
