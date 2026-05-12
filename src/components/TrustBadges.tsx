interface Badge {
  id: string
  name: string
  logo: string
  link?: string
  description?: string
}

interface TrustBadgesProps {
  badges: Badge[]
  title?: string
}

export function TrustBadges({ badges, title = 'Our Partners & Certifications' }: TrustBadgesProps) {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-slate-100/50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {title && (
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">{title}</h2>
            <p className="mt-3 text-slate-600">Trusted by organizations and partners working for community development</p>
          </div>
        )}

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {badges.map((badge) => (
            <div
              key={badge.id}
              className="group relative rounded-xl border border-slate-200 bg-white p-6 text-center transition hover:-translate-y-1 hover:shadow-md"
            >
              {badge.link ? (
                <a
                  href={badge.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  title={badge.description || badge.name}
                >
                  <img
                    src={badge.logo}
                    alt={badge.name}
                    className="h-20 w-full object-contain transition group-hover:scale-110"
                  />
                </a>
              ) : (
                <img
                  src={badge.logo}
                  alt={badge.name}
                  className="h-20 w-full object-contain transition group-hover:scale-110"
                />
              )}

              {/* Tooltip on hover */}
              {badge.description && (
                <div className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 transform rounded-lg bg-slate-900 px-3 py-2 text-xs text-white opacity-0 pointer-events-none transition group-hover:opacity-100 whitespace-nowrap">
                  {badge.description}
                </div>
              )}

              <p className="mt-2 text-xs font-semibold text-slate-600 group-hover:text-slate-900">{badge.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
