import type { Resource } from '../data/resources'
import { Download, FileText, Calendar } from 'lucide-react'

export function ResourceCard({ resource }: { resource: Resource }) {
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Health: 'bg-red-100 text-red-700',
      Environment: 'bg-emerald-100 text-emerald-700',
      Gender: 'bg-purple-100 text-purple-700',
      Education: 'bg-blue-100 text-blue-700',
      Economic: 'bg-yellow-100 text-yellow-700',
    }
    return colors[category] || 'bg-slate-100 text-slate-700'
  }

  const getIconColor = (category: string) => {
    const colors: Record<string, string> = {
      Health: 'text-red-600',
      Environment: 'text-emerald-600',
      Gender: 'text-purple-600',
      Education: 'text-blue-600',
      Economic: 'text-yellow-600',
    }
    return colors[category] || 'text-slate-600'
  }

  return (
    <a
      href={resource.fileUrl}
      download
      className="group rounded-xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg"
    >
      <div className="flex items-start justify-between">
        <FileText className={`h-8 w-8 ${getIconColor(resource.category)}`} />
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${getCategoryColor(resource.category)}`}>
          {resource.category}
        </span>
      </div>

      <h3 className="mt-4 font-bold text-slate-900 group-hover:text-emerald-600">{resource.title}</h3>

      {resource.description && <p className="mt-2 text-sm text-slate-600">{resource.description}</p>}

      <div className="mt-4 flex items-center justify-between">
        {resource.date && (
          <div className="flex items-center gap-1 text-xs text-slate-500">
            <Calendar className="h-3.5 w-3.5" />
            {new Date(resource.date).toLocaleDateString('sw-TZ')}
          </div>
        )}
        <Download className="h-4 w-4 text-emerald-600 transition group-hover:translate-x-0.5" />
      </div>
    </a>
  )
}
