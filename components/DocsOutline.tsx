'use client'

import { useEffect, useState } from 'react'

export default function DocsOutline() {
  const [headings, setHeadings] = useState<Array<{ id: string; text: string; level: number }>>([])
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const contentArea = document.querySelector('.markdown-content')
    if (!contentArea) return

    const headingElements = contentArea.querySelectorAll('h1, h2, h3, h4')
    const headingData: Array<{ id: string; text: string; level: number }> = []

    headingElements.forEach((heading) => {
      const id = heading.id || heading.textContent?.toLowerCase().replace(/\s+/g, '-') || ''
      if (!heading.id) {
        heading.id = id
      }
      const level = parseInt(heading.tagName.charAt(1))
      headingData.push({
        id,
        text: heading.textContent || '',
        level,
      })
    })

    setHeadings(headingData)

    // Intersection Observer for active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-100px 0px -66% 0px',
        threshold: 0,
      }
    )

    headingElements.forEach((heading) => observer.observe(heading))

    return () => {
      headingElements.forEach((heading) => observer.unobserve(heading))
    }
  }, [])

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <aside className="docs-outline">
      <div className="docs-outline-content">
        <h3 className="docs-outline-title">On this page</h3>
        {headings.length === 0 ? (
          <p className="docs-outline-empty-text">No headings found</p>
        ) : (
          <nav className="docs-outline-nav">
            {headings.map((heading) => (
              <a
                key={heading.id}
                href={`#${heading.id}`}
                className={`docs-outline-link docs-outline-level-${heading.level} ${activeId === heading.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToHeading(heading.id)
                }}
              >
                {heading.text}
              </a>
            ))}
          </nav>
        )}
      </div>
    </aside>
  )
}