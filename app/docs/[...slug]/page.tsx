import { notFound } from 'next/navigation'
import { getDocContent, getAllDocPaths } from '@/lib/markdown'
import DocsNav from '@/components/DocsNav'
import DocsOutline from '@/components/DocsOutline'
import { getDocsStructure } from '@/lib/markdown'

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
    <section className="docs-page">
      <div className="docs-layout-wrapper">
        <aside className="docs-sidebar docs-sidebar-fixed">
          <DocsNav structure={navStructure} currentPath={docPath} />
        </aside>
        <div className="docs-content-area">
          <div className="markdown-content" dangerouslySetInnerHTML={{ __html: doc.content }} />
        </div>
        <DocsOutline />
      </div>
    </section>
  )
}
