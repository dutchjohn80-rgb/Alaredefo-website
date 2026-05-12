
import { ResourcesList } from '../components/ResourcesList'

export function ResourcesPage() {
  return (
    <main id="resources">
      <header className="bg-emerald-600 py-12 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="text-3xl font-bold">Rasilimali za ALAREDEFO</h1>
          <p className="mt-2 max-w-2xl text-slate-100">Pakua miongozo, ripoti, na nyenzo nyingine kwa kila shirika letu.</p>
        </div>
      </header>

      <ResourcesList />
    </main>
  )
}