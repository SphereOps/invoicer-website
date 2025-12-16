import { getDocsStructure } from '@/lib/markdown'
import DocsNav from '@/components/DocsNav'
import Link from 'next/link'

export default function DocsPage() {
  const navStructure = getDocsStructure()

  const categories = [
    {
      title: 'Getting Started',
      description: 'New to Invoicer? Start here to learn the basics and get up and running quickly.',
      href: '/docs/getting-started/introduction',
      pattern: 'stars',
    },
    {
      title: 'Installation',
      description: 'Step-by-step guides for installing and deploying Invoicer with Docker.',
      href: '/docs/installation/docker',
      pattern: 'stars',
    },
    {
      title: 'Usage',
      description: 'Learn how to create, manage, and export invoices using Invoicer.',
      href: '/docs/usage/creating-invoices',
      pattern: 'stars',
    },
  ]

  return (
    <section className="docs-main-page">
      <div className="docs-layout-wrapper">
        <aside className="docs-sidebar docs-sidebar-fixed">
          <DocsNav structure={navStructure} />
        </aside>
        <div className="docs-content-area">
          <div className="docs-content">
            <h1>Documentation</h1>
            <p>Welcome to the Invoicer documentation. Select a topic from the sidebar to get started.</p>
            <div className="docs-categories">
              {categories.map((category) => (
                <Link
                  key={category.title}
                  href={category.href}
                  className={`docs-category docs-category-${category.pattern}`}
                >
                  <div className={`docs-category-bg docs-category-gradient-${category.pattern}`}></div>
                  <div className="docs-category-content">
                    <h2>{category.title}</h2>
                    <p>{category.description}</p>
                    <span className="docs-category-arrow">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <aside className="docs-outline docs-outline-empty">
          <div className="docs-outline-content">
            <h3 className="docs-outline-title">On this page</h3>
            <p className="docs-outline-empty-text">Select a documentation page to see the outline</p>
          </div>
        </aside>
      </div>
    </section>
  )
}
