// sample resources data
export type Resource = {
  id: string
  title: string
  category: string
  description?: string
  fileUrl: string
  date?: string
}

export const resources: Resource[] = [
  {
    id: 'res-1',
    title: 'Guide to Community Relief (PDF)',
    category: 'Health',
    description: 'Miongozo ya msingi kuhusu utoaji wa misaada ya afya katika jamii.',
    fileUrl: '/resources/guide-community-relief.pdf',
    date: '2025-01-10',
  },
  {
    id: 'res-2',
    title: 'Sustainable Farming Practices',
    category: 'Environment',
    description: 'Ripoti fupi juu ya mbinu za kilimo endelevu kwa vijijini.',
    fileUrl: '/resources/sustainable-farming.pdf',
    date: '2024-11-02',
  },
  {
    id: 'res-3',
    title: 'Gender Inclusion Checklist',
    category: 'Gender',
    description: 'Orodha ya uhakiki ya kuzingatia jinsia katika miradi.',
    fileUrl: '/resources/gender-checklist.pdf',
    date: '2024-07-15',
  },
]