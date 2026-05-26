import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { organization, sw, socialLinks, footerColumns } from '../data/siteData'
import { useAppContext } from '../context/AppContext'
import { Heart, Menu, X, ChevronDown, Sun, Moon } from 'lucide-react'

function SocialIcon({ platform }: { platform: string }) {
  if (platform === 'Facebook') return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
  )
  if (platform === 'Twitter') return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M4 4l16 16M4 20 20 4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" fill="none"/><path d="M20 4 4 20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" fill="none"/><path d="M2.5 4h5.5l13.5 16H16L2.5 4z" fill="currentColor"/></svg>
  )
  if (platform === 'Instagram') return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
  )
  if (platform === 'YouTube') return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>
  )
  if (platform === 'LinkedIn') return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
  )
  return null
}

const navLinks = [
  { label: 'Home', href: '/#home' },
  {
    label: 'About',
    href: '/#about',
    dropdown: [
      { label: 'Vision & Mission', href: '/#about' },
      { label: 'Registration', href: '/#about' },
      { label: 'Leadership', href: '/#about' },
    ]
  },
  {
    label: 'Programs',
    href: '/programs',
    dropdown: [
      { label: 'Thematic Areas', href: '/#services' },
      { label: 'Portfolio', href: '/#portfolio' },
      { label: 'Objectives', href: '/#objectives' },
      { label: 'Membership', href: '/#members' },
    ]
  },
  { label: 'Resources', href: '/resources' },
  { label: 'Profile', href: '/profile' },
  { label: 'Membership', href: '/membership' },
  { label: 'Donate', href: '/donate' },
  { label: 'Contact', href: '/#contact' },
]

export function SiteLayout() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isScrollTopVisible, setIsScrollTopVisible] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const location = useLocation()
  const { language, setLanguage, theme, toggleTheme } = useAppContext()

  const isActiveLink = (href: string) => {
    if (href.startsWith('/#')) {
      const sectionId = href.replace('/#', '')
      return location.pathname === '/' && activeSection === sectionId
    }

    return location.pathname === href
  }

  useEffect(() => {
    setIsMobileOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    const onScroll = () => {
      setIsScrollTopVisible(window.scrollY > 360)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const animatedElements = Array.from(
      document.querySelectorAll<HTMLElement>('.reveal-on-scroll, .stagger-grid > *'),
    )

    if (!animatedElements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.14,
      },
    )

    animatedElements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [location.pathname, language])

  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection('')
      return
    }

    const sectionIds = ['home', 'about', 'services', 'portfolio', 'objectives', 'members', 'contact']
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element))

    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.id)
        }
      },
      {
        rootMargin: '-28% 0px -45% 0px',
        threshold: [0.15, 0.3, 0.6],
      },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-stone-50 text-slate-800">
      <header className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        theme === 'dark'
          ? 'border-white/10 bg-gradient-to-b from-slate-950 to-slate-900/95 backdrop-blur-2xl'
          : 'border-slate-200 bg-gradient-to-b from-white to-slate-50/95 backdrop-blur-xl'
      }`}>
        {/* Top Bar */}
        <div className={`border-b px-5 py-2.5 sm:px-6 lg:px-8 transition-colors duration-300 ${
          theme === 'dark'
            ? 'border-emerald-500/20 bg-emerald-950/40'
            : 'border-emerald-100 bg-emerald-50/60'
        }`}>
          <div className="mx-auto flex max-w-[96rem] items-center justify-between gap-4">
            <p className={`hidden text-xs font-medium tracking-wide sm:block transition-colors duration-300 ${
              theme === 'dark'
                ? 'text-emerald-100/80'
                : 'text-emerald-700'
            }`}>
              {language === 'sw' ? 'Kuwezesha Jamii — Kubadilisha Maisha' : 'Empowering Communities — Transforming Lives'}
            </p>
            <div className={`flex items-center gap-5 text-xs font-medium ml-auto transition-colors duration-300 ${
              theme === 'dark'
                ? 'text-emerald-100/70'
                : 'text-emerald-700'
            }`}>
              <a href="/#contact" className={`transition duration-300 hidden sm:inline ${
                theme === 'dark'
                  ? 'hover:text-emerald-200'
                  : 'hover:text-emerald-600'
              }`}>
                {language === 'sw' ? 'Wasiliana' : 'Contact'}
              </a>
              <span className={`hidden sm:inline ${theme === 'dark' ? 'text-emerald-700/60' : 'text-emerald-300'}`}>•</span>
              <a href="/resources" className={`transition duration-300 hidden sm:inline font-semibold ${
                theme === 'dark'
                  ? 'hover:text-emerald-200'
                  : 'hover:text-emerald-600'
              }`}>
                {language === 'sw' ? 'Rasilimali' : 'Resources'}
              </a>
              <span className={`hidden sm:inline ${theme === 'dark' ? 'text-emerald-700/60' : 'text-emerald-300'}`}>•</span>
              <button
                type="button"
                onClick={() => setLanguage(language === 'en' ? 'sw' : 'en')}
                className={`font-bold transition duration-300 ${
                  theme === 'dark'
                    ? 'text-emerald-100 hover:text-emerald-200'
                    : 'text-emerald-700 hover:text-emerald-600'
                }`}
              >
                {language === 'en' ? 'SW' : 'EN'}
              </button>
            </div>
          </div>
        </div>

        {/* Main Nav Bar */}
        <div className={`px-5 py-3.5 sm:px-6 lg:px-8 transition-colors duration-300 ${
          theme === 'dark' ? 'bg-slate-900/50' : 'bg-white/60'
        }`}>
          <div className="mx-auto flex max-w-[96rem] items-center justify-between gap-6">
            {/* Logo */}
            <a href="/" className={`brand-link inline-flex shrink-0 items-center gap-2.5 hover:opacity-80 transition ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              <img
                src="/images/alaredefo-logo.png"
                alt="ALAREDEFO"
                className={`h-11 w-11 rounded-lg border object-cover shadow-lg transition-colors duration-300 ${
                  theme === 'dark'
                    ? 'border-emerald-500/30 shadow-emerald-950/20'
                    : 'border-emerald-200 shadow-emerald-900/10'
                }`}
              />
              <span className="brand-title text-lg font-bold tracking-tight hidden sm:block">ALAREDEFO</span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden flex-1 xl:flex items-center justify-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() => link.dropdown && setOpenDropdown(link.label)}
                  onMouseLeave={() => link.dropdown && setOpenDropdown(null)}
                >
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                        className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-lg transition duration-300 ${
                          isActiveLink(link.href)
                            ? theme === 'dark'
                              ? 'text-emerald-300 bg-emerald-500/15'
                              : 'text-emerald-700 bg-emerald-100/60'
                            : theme === 'dark'
                            ? 'text-slate-200 hover:text-white hover:bg-white/5'
                            : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200/30'
                        }`}
                      >
                        {language === 'sw' ? sw.nav[link.label as keyof typeof sw.nav] : link.label}
                        <ChevronDown className={`h-3.5 w-3.5 transition duration-300 ${openDropdown === link.label ? 'rotate-180' : ''}`} />
                      </button>

                      {/* Dropdown Menu */}
                      <div
                        className={`absolute left-0 top-full mt-2 w-48 rounded-xl border shadow-xl transition-all duration-300 origin-top ${
                          theme === 'dark'
                            ? 'border-slate-700/50 bg-slate-900/95'
                            : 'border-slate-200 bg-white/95'
                        } ${
                          openDropdown === link.label ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-95 invisible'
                        } group-hover:opacity-100 group-hover:scale-y-100 group-hover:visible`}
                      >
                        {link.dropdown.map((subLink, idx) => (
                          <a
                            key={subLink.label}
                            href={subLink.href}
                            className={`block px-4 py-3 text-sm font-medium transition duration-300 ${
                              idx === 0 ? 'rounded-t-lg' : ''
                            } ${idx === link.dropdown!.length - 1 ? 'rounded-b-lg' : ''} ${
                              theme === 'dark'
                                ? 'text-slate-200 hover:bg-emerald-500/20 hover:text-emerald-100'
                                : 'text-slate-700 hover:bg-emerald-100/40 hover:text-emerald-700'
                            }`}
                          >
                            {subLink.label}
                          </a>
                        ))}
                      </div>
                    </>
                  ) : (
                    <a
                      href={link.href}
                      className={`px-3.5 py-2 text-sm font-medium rounded-lg transition duration-300 ${
                        isActiveLink(link.href)
                          ? theme === 'dark'
                            ? 'text-emerald-300 bg-emerald-500/15'
                            : 'text-emerald-700 bg-emerald-100/60'
                          : theme === 'dark'
                          ? 'text-slate-200 hover:text-white hover:bg-white/5'
                          : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200/30'
                      }`}
                    >
                      {language === 'sw' ? sw.nav[link.label as keyof typeof sw.nav] : link.label}
                    </a>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Section */}
            <div className="hidden xl:flex items-center gap-3">
              <button
                type="button"
                onClick={toggleTheme}
                className={`inline-flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg border transition duration-300 ${
                  theme === 'dark'
                    ? 'text-slate-200 border-slate-700/50 hover:bg-white/5'
                    : 'text-slate-700 border-slate-300 hover:bg-slate-200/30'
                }`}
              >
                {theme === 'dark' ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4 text-slate-600" />}
                <span className="hidden sm:inline text-xs">{theme === 'dark' ? 'Light' : 'Dark'}</span>
              </button>

              <a
                href="/donate"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-950/40 hover:shadow-lg hover:shadow-amber-950/60 transition duration-300 hover:-translate-y-0.5"
              >
                <Heart className="h-4 w-4" />
                {language === 'sw' ? 'Changia' : 'Donate'}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={`xl:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border transition duration-300 ${
                theme === 'dark'
                  ? 'border-slate-700/50 text-slate-200 hover:bg-white/5'
                  : 'border-slate-300 text-slate-700 hover:bg-slate-200/30'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`xl:hidden border-t transition-all duration-300 overflow-hidden ${
            theme === 'dark'
              ? 'border-slate-700/50 bg-slate-900/50 backdrop-blur'
              : 'border-slate-200 bg-white/60 backdrop-blur'
          } ${
            isMobileOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col gap-1 px-5 py-4 sm:px-6">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                      className={`w-full flex items-center justify-between px-4 py-3 text-sm font-semibold rounded-lg transition duration-300 ${
                        isActiveLink(link.href)
                          ? theme === 'dark'
                            ? 'bg-emerald-500/15 text-emerald-300'
                            : 'bg-emerald-100/60 text-emerald-700'
                          : theme === 'dark'
                          ? 'text-slate-200 hover:bg-white/5'
                          : 'text-slate-700 hover:bg-slate-200/30'
                      }`}
                    >
                      <span>{language === 'sw' ? sw.nav[link.label as keyof typeof sw.nav] : link.label}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition duration-300 ${openDropdown === link.label ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {openDropdown === link.label && (
                      <div className={`mt-1 ml-2 space-y-1 pl-3 ${
                        theme === 'dark'
                          ? 'border-l-2 border-slate-700'
                          : 'border-l-2 border-slate-300'
                      }`}>
                        {link.dropdown.map((subLink) => (
                          <a
                            key={subLink.label}
                            href={subLink.href}
                            className={`block px-3 py-2 text-sm transition duration-300 ${
                              theme === 'dark'
                                ? 'text-slate-300 hover:text-emerald-300'
                                : 'text-slate-600 hover:text-emerald-700'
                            }`}
                          >
                            {subLink.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={link.href}
                    className={`block px-4 py-3 text-sm font-semibold rounded-lg transition duration-300 ${
                      isActiveLink(link.href)
                        ? theme === 'dark'
                          ? 'bg-emerald-500/15 text-emerald-300'
                          : 'bg-emerald-100/60 text-emerald-700'
                        : theme === 'dark'
                        ? 'text-slate-200 hover:bg-white/5 hover:text-white'
                        : 'text-slate-700 hover:bg-slate-200/30 hover:text-slate-900'
                    }`}
                  >
                    {language === 'sw' ? sw.nav[link.label as keyof typeof sw.nav] : link.label}
                  </a>
                )}
              </div>
            ))}
            
            {/* Mobile Buttons */}
            <div className={`mt-4 flex gap-2 pt-4 ${theme === 'dark' ? 'border-t border-slate-700' : 'border-t border-slate-300'}`}>
              <button
                type="button"
                onClick={toggleTheme}
                className={`flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium rounded-lg border transition duration-300 ${
                  theme === 'dark'
                    ? 'text-slate-200 border-slate-700/50 hover:bg-white/5'
                    : 'text-slate-700 border-slate-300 hover:bg-slate-200/30'
                }`}
              >
                {theme === 'dark' ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4 text-slate-600" />}
              </button>
              <a
                href="/donate"
                className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 text-sm font-bold rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:shadow-lg transition duration-300"
              >
                <Heart className="h-4 w-4" />
                {language === 'sw' ? 'Changia' : 'Donate'}
              </a>
            </div>
          </nav>
        </div>
      </header>

      <Outlet />

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-5 right-5 z-50 inline-flex h-13 w-13 items-center justify-center rounded-full border border-white/20 bg-[linear-gradient(135deg,#059669_0%,#0f766e_100%)] text-white shadow-2xl shadow-emerald-900/30 transition duration-300 hover:-translate-y-1 hover:shadow-emerald-900/40 ${
          isScrollTopVisible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
        }`}
        aria-label="Scroll to top"
      >
        <span className="text-xl leading-none">^</span>
      </button>

      <footer>
        {/* Social Icons Bar */}
        <div className="bg-slate-900 py-5">
          <div className="mx-auto flex max-w-7xl items-center justify-center gap-4 px-6 lg:px-8">
            {socialLinks.map((s) => (
              <a
                key={s.platform}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.platform}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-slate-400 transition hover:border-white/35 hover:text-white"
              >
                <SocialIcon platform={s.platform} />
              </a>
            ))}
          </div>
        </div>

        {/* Multi-column Footer */}
        <div className="bg-slate-50 border-t border-slate-200">
          <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
              {/* Brand column */}
              <div className="lg:col-span-1">
                <a href="/" className="inline-flex items-center gap-2">
                  <img src="/images/alaredefo-logo.png" alt="ALAREDEFO" className="h-10 w-10 rounded-full object-cover" />
                  <span className="text-base font-black tracking-widest text-slate-900">ALAREDEFO</span>
                </a>
                <p className="mt-4 text-sm leading-6 text-slate-500">
                  {language === 'sw'
                    ? 'Kuwezesha jamii, kubadilisha maisha — Tanzania.'
                    : 'Empowering communities, transforming lives across Tanzania.'}
                </p>
                  <p className="mt-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Reg: {organization.registrationNumber}
                  </p>

                  <form action="/api/newsletter" method="post" className="mt-6 flex max-w-md items-center gap-2">
                    <label htmlFor="newsletter-email" className="sr-only">Email</label>
                    <input id="newsletter-email" name="email" type="email" placeholder={language === 'sw' ? 'Barua pepe yako' : 'Your email'} className="flex-1 rounded-md border px-3 py-2 text-sm" />
                    <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-3 py-2 text-sm font-semibold text-white hover:bg-emerald-700">{language === 'sw' ? 'Jiandikishe' : 'Subscribe'}</button>
                  </form>
              </div>

              {/* Link columns */}
              {footerColumns.map((col) => (
                <div key={col.heading}>
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900">
                    {language === 'sw' ? col.headingSw : col.heading}
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-sm text-slate-500 transition hover:text-emerald-700"
                        >
                          {language === 'sw' ? link.labelSw : link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Bottom bar */}
            <div className="mt-12 border-t border-slate-200 pt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-xs text-slate-400">
              <p>
                &copy; {new Date().getFullYear()} ALAREDEFO Tanzania.{' '}
                {language === 'sw' ? 'Haki zote zimehifadhiwa.' : 'All Rights Reserved.'}
              </p>
              <div className="flex gap-4">
                <a href={`mailto:${organization.email}`} className="hover:text-slate-600 transition">{organization.email}</a>
                <a href={`tel:${organization.phone}`} className="hover:text-slate-600 transition">{organization.phone}</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
