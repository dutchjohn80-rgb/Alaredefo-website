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
    title: 'Community Relief Guidelines (PDF)',
    category: 'Health',
    description: 'Comprehensive guide for relief operations and health program implementation.',
    fileUrl: '/resources/guide-community-relief.pdf',
    date: '2025-01-10',
  },
  {
    id: 'res-2',
    title: 'Sustainable Farming Practices',
    category: 'Environment',
    description: 'Best practices for sustainable agriculture and environmental stewardship.',
    fileUrl: '/resources/sustainable-farming.pdf',
    date: '2024-11-02',
  },
  {
    id: 'res-3',
    title: 'Gender Inclusion Checklist',
    category: 'Gender',
    description: 'Tools and guidelines for gender-responsive project design and implementation.',
    fileUrl: '/resources/gender-checklist.pdf',
    date: '2024-07-15',
  },
  {
    id: 'res-4',
    title: 'Youth Empowerment Framework',
    category: 'Education',
    description: 'Framework for youth skills development and economic participation programs.',
    fileUrl: '/resources/youth-empowerment.pdf',
    date: '2024-09-20',
  },
  {
    id: 'res-5',
    title: 'Community Impact Report 2024',
    category: 'Reports',
    description: 'Annual report showcasing ALAREDEFO programs, results, and community stories.',
    fileUrl: '/resources/impact-report-2024.pdf',
    date: '2024-12-15',
  },
  {
    id: 'res-6',
    title: 'Climate Action Toolkit',
    category: 'Environment',
    description: 'Community-based climate adaptation and mitigation action toolbox.',
    fileUrl: '/resources/climate-action-toolkit.pdf',
    date: '2024-10-05',
  },
  {
    id: 'res-7',
    title: 'Women Empowerment Guide',
    category: 'Gender',
    description: 'Practical strategies for women economic participation and leadership.',
    fileUrl: '/resources/women-empowerment.pdf',
    date: '2024-08-10',
  },
  {
    id: 'res-8',
    title: 'Child Protection Standards',
    category: 'Health',
    description: 'Standards and procedures for safeguarding children in development programs.',
    fileUrl: '/resources/child-protection.pdf',
    date: '2024-07-01',
  },
  {
    id: 'res-9',
    title: 'Monitoring & Evaluation Guide',
    category: 'Reports',
    description: 'Framework for tracking project progress, outcomes, and community impact.',
    fileUrl: '/resources/m-e-guide.pdf',
    date: '2024-06-20',
  },
]