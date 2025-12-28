import { getDocsStructure } from '@/lib/markdown'
import DocsNav from '@/components/DocsNav'
import Link from 'next/link'

export default function DocsPage() {
  const navStructure = getDocsStructure()

  const sections = [
    {
      title: 'Getting Started',
      description: 'Learn the basics and get up and running quickly',
      href: '/docs/getting-started/introduction',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
      ),
    },
    {
      title: 'Installation',
      description: 'Deploy Invoicer with Docker in minutes',
      href: '/docs/installation/docker',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
    },
    {
      title: 'Usage',
      description: 'Create, manage, and export invoices',
      href: '/docs/usage/creating-invoices',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: 'Features',
      description: 'Explore all capabilities of Invoicer',
      href: '/docs/features/overview',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
  ]

  return (
    <div className="docs-wrapper">
      <aside className="docs-sidebar">
        <DocsNav structure={navStructure} />
      </aside>

      <main className="docs-main">
        <div className="docs-hero">
          <h1>Documentation</h1>
          <p>Everything you need to know about Invoicer</p>
        </div>

        <div className="docs-grid">
          {sections.map((section) => (
            <Link key={section.title} href={section.href} className="docs-section-card">
              <div className="docs-section-icon">{section.icon}</div>
              <div className="docs-section-content">
                <h2>{section.title}</h2>
                <p>{section.description}</p>
                <span className="docs-section-arrow">→</span>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <aside className="docs-toc">
        <div className="docs-toc-content">
          <h3>On this page</h3>
          <p className="docs-toc-empty">Select a doc to see outline</p>
        </div>
      </aside>
    </div>
  )
}
