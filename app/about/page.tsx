import Link from 'next/link'

export default function AboutPage() {
  return (
    <section className="about-page">
      <div className="container">
        <div className="about-hero">
          <h1>About Invoicer</h1>
          <p className="about-hero-subtitle">
            Empowering businesses with self-hosted invoice management
          </p>
        </div>

        <div className="about-content">
          <div className="about-section">
            <div className="about-section-header">
              <div className="about-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2>What is Invoicer?</h2>
            </div>
            <div className="about-section-content">
              <p>
                Invoicer is a powerful, self-hosted invoice generator designed to give you complete control over your invoicing workflow. 
                Built with simplicity and privacy in mind, Invoicer allows you to generate professional invoices without relying on 
                third-party services or cloud platforms.
              </p>
              <p>
                Whether you're a freelancer, small business, or enterprise, Invoicer provides the tools you need to create, manage, 
                and track invoices efficiently. Our mission is to make professional invoicing accessible, private, and completely under your control.
              </p>
            </div>
          </div>

          <div className="about-section">
            <div className="about-section-header">
              <div className="about-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2>Key Features</h2>
            </div>
            <div className="features-grid-about">
              <div className="feature-item">
                <div className="feature-item-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Self-Hosted</h3>
                <p>Complete control over your data and infrastructure</p>
              </div>
              <div className="feature-item">
                <div className="feature-item-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Privacy-First</h3>
                <p>Your invoices never leave your server</p>
              </div>
              <div className="feature-item">
                <div className="feature-item-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Professional Templates</h3>
                <p>Beautiful, customizable invoice designs</p>
              </div>
              <div className="feature-item">
                <div className="feature-item-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 16V8C20.9996 7.64928 20.9071 7.30481 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.27L13 2.27C12.696 2.09446 12.3511 2.00205 12 2.00205C11.6489 2.00205 11.304 2.09446 11 2.27L4 6.27C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.30481 3.00036 7.64928 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Docker-Ready</h3>
                <p>Deploy in minutes with Docker</p>
              </div>
              <div className="feature-item">
                <div className="feature-item-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>PDF Export</h3>
                <p>High-quality PDF generation</p>
              </div>
              <div className="feature-item">
                <div className="feature-item-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Fast & Efficient</h3>
                <p>Lightweight and performant with minimal resource usage</p>
              </div>
            </div>
          </div>

          <div className="about-section">
            <div className="about-section-header">
              <div className="about-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2>Why Self-Hosted?</h2>
            </div>
            <div className="about-section-content">
              <p>In today's digital world, data privacy and control are more important than ever. By self-hosting Invoicer, you:</p>
              <div className="benefits-grid">
                <div className="benefit-item">
                  <div className="benefit-check">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Data Ownership</h4>
                    <p>Keep all your financial data on your own infrastructure</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-check">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4>No Vendor Lock-in</h4>
                    <p>Avoid subscription fees and vendor dependencies</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-check">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Full Control</h4>
                    <p>Complete control over customization and features</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-check">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Compliance Ready</h4>
                    <p>Meet compliance requirements for data residency</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-check">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Independence</h4>
                    <p>Reduce dependency on external services</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-check">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Cost Effective</h4>
                    <p>No recurring fees, just one-time setup</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-section">
            <div className="about-section-header">
              <div className="about-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2>Open Source</h2>
            </div>
            <div className="about-section-content">
              <p>
                Invoicer is built with open-source principles, giving you the freedom to inspect, modify, and enhance the code to meet your specific needs. 
                We believe in transparency, community collaboration, and giving you complete control over your tools.
              </p>
              <div className="about-cta">
                <Link href="/docs" className="btn btn-primary">Get Started</Link>
                <a href="https://github.com/yourusername/invoicer" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">View on GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
