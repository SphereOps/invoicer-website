import Link from 'next/link'

export default function ContactPage() {
  return (
    <section className="contact-page">
      <div className="container">
        <div className="contact-hero">
          <h1>Get in Touch</h1>
          <p className="contact-hero-subtitle">
            Have questions, suggestions, or need support? We'd love to hear from you!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-methods">
            <div className="contact-method">
              <div className="contact-method-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Email</h3>
              <p>For detailed inquiries, support requests, or general questions.</p>
              <a href="mailto:support@invoicer.example" className="btn btn-primary">Send Email</a>
              <p className="contact-detail">support@invoicer.example</p>
            </div>
            
            <div className="contact-method">
              <div className="contact-method-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>GitHub</h3>
              <p>Report issues, contribute code, or view the source repository.</p>
              <a href="https://github.com/yourusername/invoicer" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Visit GitHub</a>
              <p className="contact-detail">github.com/yourusername/invoicer</p>
            </div>
          </div>

          <div className="contact-info-section">
            <div className="contact-info-card">
              <h3>Response Times</h3>
              <div className="response-times">
                <div className="response-item">
                  <span className="response-label">Email:</span>
                  <span className="response-value">Within 24 hours</span>
                </div>
                <div className="response-item">
                  <span className="response-label">GitHub Issues:</span>
                  <span className="response-value">Within 48 hours</span>
                </div>
              </div>
            </div>

            <div className="contact-info-card">
              <h3>What Can We Help With?</h3>
              <ul className="help-list">
                <li>Installation and setup assistance</li>
                <li>Feature requests and suggestions</li>
                <li>Bug reports and technical issues</li>
                <li>Documentation improvements</li>
                <li>General questions about Invoicer</li>
              </ul>
            </div>
          </div>

          <div className="contact-cta">
            <h2>Ready to Get Started?</h2>
            <p>Check out our documentation to learn how to deploy and use Invoicer.</p>
            <Link href="/docs" className="btn btn-primary">View Documentation</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
