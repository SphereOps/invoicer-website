import Link from 'next/link'

export default function Home() {
  return (
    <>
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Invoicer</h1>
            <p className="hero-subtitle">A powerful, self-hosted invoice generator that puts you in control</p>
            <p className="hero-description">
              Generate professional invoices with ease. Deploy with Docker in minutes and manage your invoicing workflow completely on your own infrastructure.
            </p>
            <div className="hero-cta">
              <Link href="/docs" className="btn btn-primary">View Documentation</Link>
              <Link href="/about" className="btn btn-secondary">Learn More</Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="invoice-preview">
              <div className="invoice-header">
                <div className="invoice-logo"></div>
                <div className="invoice-title">INVOICE</div>
              </div>
              <div className="invoice-body">
                <div className="invoice-row">
                  <span>Invoice #</span>
                  <span>INV-2024-001</span>
                </div>
                <div className="invoice-row">
                  <span>Date</span>
                  <span>Jan 15, 2024</span>
                </div>
                <div className="invoice-row">
                  <span>Amount</span>
                  <span className="invoice-amount">$1,250.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-preview">
        <div className="container">
          <h2 className="section-title">Why Choose Invoicer?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Self-Hosted</h3>
              <p>Complete control over your data. Deploy on your own infrastructure with Docker.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Professional Templates</h3>
              <p>Beautiful, customizable invoice templates that look professional and polished.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Fast & Efficient</h3>
              <p>Lightweight and performant. Generate invoices in seconds with minimal resource usage.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Secure & Private</h3>
              <p>Your data stays on your server. No cloud dependencies, no third-party tracking.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Easy Deployment</h3>
              <p>One-command Docker deployment. Get up and running in minutes, not hours.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>PDF Export</h3>
              <p>Generate high-quality PDF invoices that look professional and are ready to send to clients.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Deploy</h3>
              <p>Deploy Invoicer using Docker with a single command. No complex setup required.</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Configure</h3>
              <p>Set up your business details, customize templates, and configure your preferences.</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Generate</h3>
              <p>Create professional invoices in minutes. Export as PDF and send to your clients.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Join thousands of businesses using Invoicer to streamline their invoicing workflow.</p>
            <div className="cta-buttons">
              <Link href="/docs" className="btn btn-primary">View Documentation</Link>
              <Link href="/pricing" className="btn btn-secondary">See Pricing</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
