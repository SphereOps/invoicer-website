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
                  <path d="M8 12H.01M12 12H.01M16 12H.01M21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Discord Community</h3>
              <p>Join our Discord for support, discussions, feature requests, and updates.</p>
              <a href="https://discord.gg/6mzgrSaTCz" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Join Discord</a>
              <p className="contact-detail">Community Support & Discussions</p>
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
                  <span className="response-label">Discord Community:</span>
                  <span className="response-value">Immediate (Community-driven)</span>
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
