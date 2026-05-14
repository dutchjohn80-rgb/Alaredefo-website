import { Routes, Route } from 'react-router-dom'
import { SiteLayout } from './components/SiteLayout'
import { HomePage } from './pages/HomePage'
import { ProgramsPage } from './pages/ProgramsPage'
import { ProfilePage } from './pages/ProfilePage'
import { MembershipPage } from './pages/MembershipPage'
import { DonatePage } from './pages/DonatePage'
import { PrivacyPage } from './pages/PrivacyPage'
import { TermsPage } from './pages/TermsPage'
import { PortfolioDetailPage } from './pages/PortfolioDetailPage'
import { ResourcesPage } from './pages/ResourcesPage'

function NotFoundPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24 text-center lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-700">404</p>
      <h1 className="mt-4 text-4xl font-bold text-slate-900">Page not found</h1>
      <p className="mt-4 text-slate-600">The page you requested does not exist on the ALAREDEFO website.</p>
      <a href="/" className="mt-8 inline-flex rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white">
        Back to Home
      </a>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/membership" element={<MembershipPage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/portfolio/:slug" element={<PortfolioDetailPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
