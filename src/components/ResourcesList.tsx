import { useMemo, useState } from 'react'
import { resources as allResources, type Resource } from '../data/resources'
import { ResourceCard } from './ResourceCard'

export function ResourcesList() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')

  const categories = useMemo(() => {
    const set = new Set<string>(allResources.map((r) => r.category))
    return ['All', ...Array.from(set)]
  }, [])

  const filtered = useMemo(() => {
    return allResources.filter((r) => {
      const matchesCategory = category === 'All' || r.category === category
      const matchesQuery =
        !query ||
        r.title.toLowerCase().includes(query.toLowerCase()) ||
        (r.description || '').toLowerCase().includes(query.toLowerCase())
      return matchesCategory && matchesQuery
    })
  }, [category, query])

  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-bold text-slate-900">Rasilimali</h2>
        <div className="flex flex-wrap items-center gap-2">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tafuta rasilimali..."
            className="rounded-md border px-3 py-2 text-sm"
            aria-label="Search resources"
          />
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="rounded-md border px-3 py-2 text-sm">
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((res: Resource) => (
          <ResourceCard key={res.id} resource={res} />
        ))}
        {filtered.length === 0 && <p className="col-span-full text-center text-slate-600">Hakuna matokeo.</p>}
      </div>
    </section>
  )
}