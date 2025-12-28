'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'setup',
    hours: '1',
    details: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // This would connect to your payment/booking system
    console.log('Form submitted:', formData)
    alert('Thank you! We will contact you shortly to schedule your support session.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const totalCost = parseInt(formData.hours) * 5

  return (
    <section className="support-page">
      <div className="container">
        <div className="support-hero">
          <h1>Professional Support</h1>
          <p className="support-hero-subtitle">
            Get expert help setting up and configuring Invoicer for your business
          </p>
        </div>

        <div className="support-content">
          <div className="support-grid">
            <div className="support-info">
              <div className="support-pricing-card">
                <div className="pricing-badge">Affordable</div>
                <div className="support-price">
                  <span className="price-amount">$5</span>
                  <span className="price-period">/hour</span>
                </div>
                <p className="support-price-description">
                  Expert assistance for your Invoicer setup and configuration
                </p>
              </div>

              <div className="support-services">
                <h2>What We Can Help With</h2>
                <div className="service-list">
                  <div className="service-item">
                    <div className="service-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3>Initial Setup</h3>
                      <p>Docker installation, configuration, and first-time setup</p>
                    </div>
                  </div>

                  <div className="service-item">
                    <div className="service-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3>Customization</h3>
                      <p>Customize templates, branding, and invoice designs</p>
                    </div>
                  </div>

                  <div className="service-item">
                    <div className="service-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3>Deployment</h3>
                      <p>Deploy to your server, VPS, or cloud infrastructure</p>
                    </div>
                  </div>

                  <div className="service-item">
                    <div className="service-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3>Troubleshooting</h3>
                      <p>Fix issues, optimize performance, and solve problems</p>
                    </div>
                  </div>

                  <div className="service-item">
                    <div className="service-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3>Training</h3>
                      <p>Learn best practices and advanced features</p>
                    </div>
                  </div>

                  <div className="service-item">
                    <div className="service-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3>Migration</h3>
                      <p>Import data from your existing invoicing system</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="support-benefits">
                <h2>Why Choose Professional Support?</h2>
                <ul className="benefits-list">
                  <li>Save time and avoid common setup pitfalls</li>
                  <li>Get expert guidance from experienced developers</li>
                  <li>Ensure proper security and optimization</li>
                  <li>Learn best practices for your workflow</li>
                  <li>Priority response within 24 hours</li>
                </ul>
              </div>
            </div>

            <div className="support-booking">
              <div className="booking-card">
                <h2>Book Support Session</h2>
                <p>Fill out the form below and we'll get back to you within 24 hours</p>

                <form onSubmit={handleSubmit} className="support-form">
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">Service Type *</label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="setup">Initial Setup</option>
                      <option value="customization">Customization</option>
                      <option value="deployment">Deployment</option>
                      <option value="troubleshooting">Troubleshooting</option>
                      <option value="training">Training</option>
                      <option value="migration">Migration</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="hours">Estimated Hours *</label>
                    <select
                      id="hours"
                      name="hours"
                      required
                      value={formData.hours}
                      onChange={handleChange}
                    >
                      <option value="1">1 hour - $5</option>
                      <option value="2">2 hours - $10</option>
                      <option value="3">3 hours - $15</option>
                      <option value="4">4 hours - $20</option>
                      <option value="5">5+ hours - $25+</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="details">Project Details *</label>
                    <textarea
                      id="details"
                      name="details"
                      required
                      value={formData.details}
                      onChange={handleChange}
                      placeholder="Describe what you need help with..."
                      rows={5}
                    />
                  </div>

                  <div className="cost-summary">
                    <div className="cost-row">
                      <span>Estimated Cost:</span>
                      <span className="cost-amount">${totalCost}</span>
                    </div>
                    <p className="cost-note">Final cost may vary based on actual time spent</p>
                  </div>

                  <button type="submit" className="btn btn-primary btn-large">
                    Request Support Session
                  </button>

                  <p className="form-note">
                    By submitting this form, you agree to be contacted about your support request.
                  </p>
                </form>
              </div>

              <div className="support-alternatives">
                <h3>Need Free Help?</h3>
                <p>Try these resources first:</p>
                <div className="alternatives-list">
                  <Link href="/docs" className="alternative-link">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <span>Documentation</span>
                  </Link>
                  <a href="https://discord.gg/6mzgrSaTCz" className="alternative-link" target="_blank" rel="noopener noreferrer">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span>Discord Community</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

