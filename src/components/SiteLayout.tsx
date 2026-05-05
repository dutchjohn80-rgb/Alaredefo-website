import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { organization, sw } from '../data/siteData'
import { useAppContext } from '../context/AppContext'

const navLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Thematic Areas', href: '/#services' },
  { label: 'Portfolio', href: '/#portfolio' },
  { label: 'Objectives', href: '/#objectives' },
  { label: 'Members', href: '/#members' },
  { label: 'Contact', href: '/#contact' },
  { label: 'Programs', href: '/programs' },
  { label: 'Profile', href: '/profile' },
  { label: 'Membership', href: '/membership' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
]

export function SiteLayout() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isScrollTopVisible, setIsScrollTopVisible] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
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
      <header className="sticky top-0 z-50 border-b border-white/20 bg-slate-950/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[96rem] items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-8">
          <a href="/" className="brand-link inline-flex shrink-0 items-center gap-3 text-white">
            <img
              src="/images/alaredefo-logo.png"
              alt="ALAREDEFO logo"
              className="h-12 w-12 rounded-full border border-white/20 object-cover"
            />
            <span className="brand-title text-xl font-bold tracking-[0.16em]">ALAREDEFO</span>
          </a>
          <nav className="hidden max-w-[70rem] flex-1 flex-wrap justify-end gap-2 text-[0.95rem] font-semibold leading-none text-slate-200 xl:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`rounded-full px-3.5 py-2.5 transition hover:text-white ${
                  isActiveLink(link.href) ? 'bg-emerald-400/20 text-white shadow-lg shadow-emerald-950/10' : 'text-slate-200'
                }`}
              >
                {language === 'sw' ? sw.nav[link.label as keyof typeof sw.nav] : link.label}
              </a>
            ))}
          </nav>
          <div className="hidden shrink-0 items-center gap-2 xl:flex">
            <button type="button" onClick={toggleTheme} className="rounded-full border border-white/15 px-3 py-2 text-sm font-bold text-white hover:bg-white/10">
              {theme === 'dark' ? (language === 'sw' ? sw.common.light : 'Light') : language === 'sw' ? sw.common.dark : 'Dark'}
            </button>
            <button type="button" onClick={() => setLanguage(language === 'en' ? 'sw' : 'en')} className="rounded-full bg-emerald-400/20 px-3 py-2 text-sm font-bold text-white">
              {language === 'en' ? 'SW' : 'EN'}
            </button>
          </div>
          <button
            type="button"
            onClick={() => setIsMobileOpen((prev) => !prev)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white transition hover:bg-white/10 xl:hidden"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileOpen}
          >
            <span className="relative h-4 w-5">
              <span className={`absolute left-0 top-0 h-0.5 w-5 bg-white transition ${isMobileOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
              <span className={`absolute left-0 top-[7px] h-0.5 w-5 bg-white transition ${isMobileOpen ? 'opacity-0' : ''}`} />
              <span className={`absolute left-0 top-[14px] h-0.5 w-5 bg-white transition ${isMobileOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
            </span>
          </button>
        </div>

        <div className={`overflow-hidden border-t border-emerald-400/15 bg-[linear-gradient(180deg,rgba(2,6,23,0.98)_0%,rgba(6,78,59,0.96)_100%)] transition-all duration-300 xl:hidden ${isMobileOpen ? 'max-h-[620px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-5">
            <div className="mb-3 flex gap-2">
              <button type="button" onClick={toggleTheme} className="rounded-full border border-white/15 px-4 py-2 text-sm font-bold text-white">
                {theme === 'dark' ? (language === 'sw' ? sw.common.light : 'Light') : language === 'sw' ? sw.common.dark : 'Dark'}
              </button>
              <button type="button" onClick={() => setLanguage(language === 'en' ? 'sw' : 'en')} className="rounded-full bg-emerald-400/20 px-4 py-2 text-sm font-bold text-white">
                {language === 'en' ? 'SW' : 'EN'}
              </button>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`rounded-2xl px-4 py-3.5 text-base font-semibold transition ${
                  isActiveLink(link.href)
                    ? 'bg-emerald-400/20 text-white shadow-lg shadow-emerald-950/20'
                    : 'text-emerald-50 hover:bg-white/10 hover:text-white'
                }`}
              >
                {language === 'sw' ? sw.nav[link.label as keyof typeof sw.nav] : link.label}
              </a>
            ))}
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

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-600 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="font-semibold text-slate-900">ALAREDEFO Tanzania</p>
            <p>
              {organization.poBox}, {organization.region}, Tanzania
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href={`mailto:${organization.email}`} className="hover:text-slate-900">
              {organization.email}
            </a>
            <a href={`tel:${organization.phone}`} className="hover:text-slate-900">
              {organization.phone}
            </a>
            <a href={organization.website} className="hover:text-slate-900">
              Website
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
