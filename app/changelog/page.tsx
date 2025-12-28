import fs from 'fs'
import path from 'path'
import Link from 'next/link'

interface ChangelogVersion {
  version: string
  date: string
  sections: {
    [key: string]: string[]
  }
}

function parseChangelog(): ChangelogVersion[] {
  const changelogPath = path.join(process.cwd(), 'CHANGELOG.md')
  const content = fs.readFileSync(changelogPath, 'utf-8')
  
  const versions: ChangelogVersion[] = []
  const lines = content.split('\n')
  
  let currentVersion: ChangelogVersion | null = null
  let currentSection: string | null = null
  
  for (const line of lines) {
    // Match version headers like ## [1.0.0] - 2025-01-15
    const versionMatch = line.match(/^##\s+\[([^\]]+)\](?:\s+-\s+(.+))?/)
    if (versionMatch) {
      if (currentVersion) {
        versions.push(currentVersion)
      }
      currentVersion = {
        version: versionMatch[1],
        date: versionMatch[2] || 'TBD',
        sections: {}
      }
      currentSection = null
      continue
    }
    
    // Match section headers like ### Added
    const sectionMatch = line.match(/^###\s+(.+)/)
    if (sectionMatch && currentVersion) {
      currentSection = sectionMatch[1]
      currentVersion.sections[currentSection] = []
      continue
    }
    
    // Match list items
    const itemMatch = line.match(/^[*-]\s+(.+)/)
    if (itemMatch && currentVersion && currentSection) {
      currentVersion.sections[currentSection].push(itemMatch[1])
    }
  }
  
  if (currentVersion) {
    versions.push(currentVersion)
  }
  
  return versions
}

function getSectionIcon(section: string) {
  const icons: { [key: string]: JSX.Element } = {
    'Added': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
      </svg>
    ),
    'Changed': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    'Fixed': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    'Deprecated': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    'Removed': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    ),
    'Security': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  }
  
  return icons[section] || icons['Added']
}

export default function ChangelogPage() {
  const versions = parseChangelog()
  
  return (
    <section className="changelog-page">
      <div className="container">
        <div className="changelog-hero">
          <h1>Changelog</h1>
          <p className="changelog-hero-subtitle">
            Track all updates, new features, and improvements to Invoicer
          </p>
          <div className="changelog-meta">
            <a 
              href="https://github.com/sphereops/invoicer/releases" 
              target="_blank" 
              rel="noopener noreferrer"
              className="changelog-link"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              View on GitHub
            </a>
            <Link href="/support" className="changelog-link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              Need Help?
            </Link>
          </div>
        </div>

        <div className="changelog-content">
          {versions.map((version, idx) => (
            <div key={idx} className={`changelog-version ${version.version === 'Unreleased' ? 'unreleased' : ''}`}>
              <div className="version-header">
                <div className="version-info">
                  <h2 className="version-number">
                    {version.version === 'Unreleased' ? (
                      <>
                        <span className="version-badge unreleased-badge">Unreleased</span>
                        Coming Soon
                      </>
                    ) : (
                      <>
                        <span className="version-badge">v{version.version}</span>
                        {version.version}
                      </>
                    )}
                  </h2>
                  <p className="version-date">{version.date}</p>
                </div>
                {version.version !== 'Unreleased' && (
                  <a 
                    href={`https://github.com/sphereops/invoicer/releases/tag/v${version.version}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="version-link"
                  >
                    View Release
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>

              <div className="version-sections">
                {Object.entries(version.sections).map(([section, items]) => (
                  items.length > 0 && (
                    <div key={section} className={`changelog-section section-${section.toLowerCase()}`}>
                      <div className="section-header">
                        <div className="section-icon">
                          {getSectionIcon(section)}
                        </div>
                        <h3>{section}</h3>
                      </div>
                      <ul className="section-items">
                        {items.map((item, itemIdx) => (
                          <li key={itemIdx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="changelog-footer">
          <div className="changelog-cta">
            <h2>Stay Updated</h2>
            <p>Join our Discord community to get notified about new releases and updates</p>
            <div className="cta-buttons">
              <a 
                href="https://discord.gg/6mzgrSaTCz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Join Discord
              </a>
              <Link href="/docs" className="btn btn-secondary">
                View Documentation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

