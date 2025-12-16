'use client'

import { usePathname } from 'next/navigation'
import Footer from './Footer'

export default function ConditionalFooter() {
  const pathname = usePathname()
  const isDocsPage = pathname?.startsWith('/docs')

  if (isDocsPage) {
    return null
  }

  return <Footer />
}
