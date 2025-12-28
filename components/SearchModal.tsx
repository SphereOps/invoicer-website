'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'

interface SearchResult {
  title: string
  description: string
  href: string
  category: string
}

const searchData: SearchResult[] = [
  { title: 'Getting Started', description: 'Learn how to install and set up Invoicer', href: '/docs/getting-started/introduction', category: 'Documentation' },
  { title: 'Docker Installation', description: 'Deploy Invoicer using Docker', href: '/docs/installation/docker', category: 'Documentation' },
  { title: 'Creating Invoices', description: 'How to create and manage invoices', href: '/docs/usage/creating-invoices', category: 'Documentation' },
  { title: 'Exporting Invoices', description: 'Export invoices as PDF or other formats', href: '/docs/usage/exporting', category: 'Documentation' },
  { title: 'Features Overview', description: 'Explore all features of Invoicer', href: '/docs/features/overview', category: 'Documentation' },
  { title: 'Home', description: 'Return to the homepage', href: '/', category: 'Pages' },
  { title: 'Pricing', description: 'View pricing information', href: '/pricing', category: 'Pages' },
  { title: 'About', description: 'Learn more about Invoicer', href: '/about', category: 'Pages' },
  { title: 'Contact', description: 'Get in touch with us', href: '/contact', category: 'Pages' },
]

export default function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const resultsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (query.trim()) {
      const filtered = searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
      )
      setResults(filtered)
      setSelectedIndex(0)
    } else {
      setResults([])
    }
  }, [query])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIndex(prev => (prev < results.length - 1 ? prev + 1 : prev))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIndex(prev => (prev > 0 ? prev - 1 : 0))
      } else if (e.key === 'Enter' && results[selectedIndex]) {
        e.preventDefault()
        window.location.href = results[selectedIndex].href
        onClose()
      } else if (e.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, results, selectedIndex, onClose])

  useEffect(() => {
    if (resultsRef.current && selectedIndex >= 0) {
      const selectedElement = resultsRef.current.children[selectedIndex] as HTMLElement
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
      }
    }
  }, [selectedIndex])

  if (!isOpen) return null

  return (
    <div className="search-modal-overlay" onClick={onClose}>
      <div className="search-modal" onClick={(e) => e.stopPropagation()}>
        <div className="search-modal-header">
          <div className="search-input-wrapper">
            <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <input
              ref={inputRef}
              type="text"
              placeholder="Search documentation, pages..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="search-modal-input"
            />
            <div className="search-shortcut-hint">
              <kbd>Esc</kbd>
            </div>
          </div>
        </div>
        {results.length > 0 && (
          <div className="search-results" ref={resultsRef}>
            {results.map((result, index) => (
              <Link
                key={result.href}
                href={result.href}
                className={`search-result-item ${index === selectedIndex ? 'selected' : ''}`}
                onClick={onClose}
              >
                <div className="search-result-content">
                  <div className="search-result-title">{result.title}</div>
                  <div className="search-result-description">{result.description}</div>
                </div>
                <div className="search-result-category">{result.category}</div>
              </Link>
            ))}
          </div>
        )}
        {query.trim() && results.length === 0 && (
          <div className="search-no-results">
            <p>No results found for "{query}"</p>
          </div>
        )}
        {!query.trim() && (
          <div className="search-empty-state">
            <p>Start typing to search...</p>
            <div className="search-suggestions">
              <span>Try searching for:</span>
              <div className="search-tags">
                <span>installation</span>
                <span>invoices</span>
                <span>export</span>
                <span>templates</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
