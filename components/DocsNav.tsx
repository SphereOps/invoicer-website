'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { DocItem } from '@/lib/markdown'

interface DocsNavProps {
  structure: DocItem[]
  currentPath?: string
}

// Helper to find all parent paths that should be expanded
function findParentPaths(structure: DocItem[], targetPath: string, parents: string[] = []): string[] {
  for (const item of structure) {
    if (item.type === 'file' && item.path.replace('.html', '') === targetPath) {
      return parents
    }
    if (item.type === 'folder' && item.children) {
      const newParents = [...parents, item.path]
      const found = findParentPaths(item.children, targetPath, newParents)
      if (found.length > 0) {
        return found
      }
    }
  }
  return []
}

export default function DocsNav({ structure, currentPath }: DocsNavProps) {
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set())

  // Auto-expand folders containing the current path
  useEffect(() => {
    if (currentPath) {
      const parentPaths = findParentPaths(structure, currentPath)
      setExpandedFolders(new Set(parentPaths))
    }
  }, [currentPath, structure])

  const toggleFolder = (path: string) => {
    setExpandedFolders((prev) => {
      const next = new Set(prev)
      if (next.has(path)) {
        next.delete(path)
      } else {
        next.add(path)
      }
      return next
    })
  }

  const renderNavItem = (item: DocItem, level: number = 0) => {
    if (item.type === 'file') {
      const isActive = currentPath === item.path.replace('.html', '')
      return (
        <li key={item.path} className={isActive ? 'nav-item active' : 'nav-item'}>
          <Link
            href={`/docs/${item.path.replace('.html', '')}`}
          >
            {item.title}
          </Link>
        </li>
      )
    } else {
      const isExpanded = expandedFolders.has(item.path)

      return (
        <li key={item.path} className={`nav-folder ${isExpanded ? 'expanded' : ''}`}>
          <div
            className="nav-folder-header"
            onClick={() => toggleFolder(item.path)}
          >
            <span className="nav-folder-title">{item.title}</span>
          </div>
          {isExpanded && item.children && (
            <ul className="nav-sublist">
              {item.children.map((child) => renderNavItem(child, level + 1))}
            </ul>
          )}
        </li>
      )
    }
  }

  return (
    <div className="docs-nav">
      <h3 className="docs-nav-title">Documentation</h3>
      <ul className="nav-list">
        {structure.map((item) => renderNavItem(item))}
      </ul>
    </div>
  )
}
