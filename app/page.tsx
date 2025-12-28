import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <h1 className="hero-title">
            Professional Invoice Management
            <span className="hero-title-gradient"> Simplified</span>
          </h1>
          
          <p className="hero-description">
            Create, manage, and export beautiful invoices with ease. Self-hosted, 
            and built for modern businesses.
          </p>
          
          <div className="hero-actions">
            <Link href="/docs/getting-started/introduction" className="btn btn-primary btn-large">
              Get Started
              <svg className="btn-icon" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link href="/docs" className="btn btn-secondary btn-large">
              Documentation
            </Link>
          </div>
          
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-value">100%</div>
              <div className="stat-label">Free Forever</div>
            </div>
            <div className="stat">
              <div className="stat-value">Docker</div>
              <div className="stat-label">Easy Deployment</div>
            </div>
            <div className="stat">
              <div className="stat-value">Self-Hosted</div>
              <div className="stat-label">Full Control</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Everything you need</h2>
            <p className="section-subtitle">
              Powerful features designed to streamline your invoicing workflow
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3>Professional Templates</h3>
              <p>Beautiful, customizable invoice templates that look professional and polished.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>
              <h3>Easy to Use</h3>
              <p>Intuitive interface that makes creating invoices quick and effortless.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3>Self-Hosted</h3>
              <p>Full control over your data. Deploy on your own infrastructure with Docker.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3>PDF Export</h3>
              <p>Generate high-quality PDFs ready for printing or email delivery.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3>Community Support</h3>
              <p>Join our Discord community for support, feedback, and feature requests.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3>Lightning Fast</h3>
              <p>Built with modern technologies for optimal performance and speed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="quickstart-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Get started in minutes</h2>
            <p className="section-subtitle">Deploy Invoicer with a single Docker command</p>
          </div>

          <div className="quickstart-card">
            <div className="quickstart-steps">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Pull the image</h4>
                  <code>docker pull sphereops/invoicer</code>
                </div>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Run the container</h4>
                  <code>docker run -p 3000:3000 sphereops/invoicer</code>
                </div>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Start creating invoices</h4>
                  <code>Open http://localhost:3000</code>
                </div>
              </div>
            </div>
            
            <Link href="/docs/installation/docker" className="btn btn-primary">
              View Full Documentation
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Ready to streamline your invoicing?</h2>
          <p className="cta-description">
            Join businesses using Invoicer to manage their invoices professionally
          </p>
          <div className="cta-actions">
            <Link href="/docs/getting-started/introduction" className="btn btn-primary btn-large">
              Get Started Now
            </Link>
            <Link href="/pricing" className="btn btn-secondary btn-large">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
