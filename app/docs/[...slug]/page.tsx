import { notFound } from 'next/navigation'
import { getDocContent, getAllDocPaths, getDocsStructure } from '@/lib/markdown'
import DocsNav from '@/components/DocsNav'
import DocsOutline from '@/components/DocsOutline'

export async function generateStaticParams() {
  const paths = getAllDocPaths()
  return paths.map((path) => ({
    slug: path.split('/'),
  }))
}

export default function DocPage({ params }: { params: { slug: string[] } }) {
  const docPath = params.slug.join('/')
  const doc = getDocContent(docPath)
  const navStructure = getDocsStructure()

  if (!doc) {
    notFound()
  }

  return (
    <div className="docs-wrapper">
      <aside className="docs-sidebar">
        <DocsNav structure={navStructure} currentPath={docPath} />
      </aside>

      <main className="docs-main">
        <article className="markdown-content" dangerouslySetInnerHTML={{ __html: doc.content }} />
      </main>

      <DocsOutline />
    </div>
  )
}
