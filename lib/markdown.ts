import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

const docsDirectory = path.join(process.cwd(), 'docs')

// Ensure we can use fs in Next.js
if (typeof window === 'undefined') {
  // Server-side only
}

export interface DocItem {
  title: string
  path: string
  type: 'file' | 'folder'
  children?: DocItem[]
}

export interface DocContent {
  title: string
  content: string
  path: string
}

// Configure marked
marked.setOptions({
  breaks: true,
  gfm: true,
})

// Recursively build navigation structure
export function getDocsStructure(): DocItem[] {
  function processDirectory(dir: string, relativePath: string = ''): DocItem[] {
    try {
      if (!fs.existsSync(dir)) {
        return []
      }
    } catch {
      return []
    }

    const items = fs.readdirSync(dir, { withFileTypes: true })
    const structure: DocItem[] = []

    for (const item of items) {
      const fullPath = path.join(dir, item.name)
      const relPath = path.join(relativePath, item.name)

      if (item.isDirectory()) {
        const children = processDirectory(fullPath, relPath)
        if (children.length > 0) {
          structure.push({
            title: item.name.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
            path: relPath,
            type: 'folder',
            children,
          })
        }
      } else if (item.name.endsWith('.md')) {
        const name = item.name.replace('.md', '')
        structure.push({
          title: name.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
          path: path.join(relPath.replace('.md', '.html')),
          type: 'file',
        })
      }
    }

    return structure.sort((a, b) => {
      // Folders first, then files
      if (a.type !== b.type) {
        return a.type === 'folder' ? -1 : 1
      }
      return a.title.localeCompare(b.title)
    })
  }

  return processDirectory(docsDirectory)
}

// Get all markdown file paths
export function getAllDocPaths(): string[] {
  function getAllFiles(dir: string, fileList: string[] = []): string[] {
    try {
      if (!fs.existsSync(dir)) {
        return []
      }
    } catch {
      return []
    }

    const files = fs.readdirSync(dir)

    files.forEach((file) => {
      const filePath = path.join(dir, file)
      if (fs.statSync(filePath).isDirectory()) {
        getAllFiles(filePath, fileList)
      } else if (file.endsWith('.md')) {
        const relativePath = path.relative(docsDirectory, filePath)
        fileList.push(relativePath.replace('.md', ''))
      }
    })

    return fileList
  }

  return getAllFiles(docsDirectory)
}

// Get doc content by path
export function getDocContent(docPath: string): DocContent | null {
  try {
    const fullPath = path.join(docsDirectory, `${docPath}.md`)
    
    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    // Convert markdown to HTML
    let html = marked.parse(content)

    // Convert relative markdown links to HTML
    html = html.replace(/href="([^"]+\.md)"/g, (match, mdPath) => {
      if (mdPath.startsWith('../')) {
        const parts = mdPath.replace('../', '').replace('.md', '')
        return `href="/docs/${parts}"`
      } else if (!mdPath.startsWith('http')) {
        return `href="/docs/${mdPath.replace('.md', '')}"`
      }
      return match
    })

    return {
      title: data.title || docPath.split('/').pop() || 'Documentation',
      content: html,
      path: docPath,
    }
  } catch (error) {
    console.error('Error reading doc:', error)
    return null
  }
}
