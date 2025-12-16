import Link from 'next/link'

export default function PricingPage() {
  const plans = [
    {
      name: 'Free Forever',
      price: '$0',
      period: '',
      description: 'Perfect for getting started',
      features: [
        'Unlimited Invoices',
        '1 Project',
        '1 Invoice and Email Template',
        'Gmail OAuth',
        '30-Day Data Storage',
      ],
      cta: 'Get Started',
      ctaLink: '/docs/getting-started/introduction',
      popular: false,
      gradient: 'from-gray-500/20 to-gray-600/20',
    },
    {
      name: 'Plus Plan',
      price: '$7.99',
      period: '/month',
      description: 'For growing businesses',
      features: [
        'Everything in Free',
        'All existing Invoice and Email Templates',
        'Microsoft OAuth',
        'SendGrid OAuth as well as SMTP config',
        'Unlimited Data Storage',
        'Help and Support',
      ],
      cta: 'Choose Plus',
      ctaLink: '/contact',
      popular: true,
      gradient: 'from-blue-500/20 to-indigo-500/20',
    },
    {
      name: 'Pro Plan',
      price: '$11.99',
      period: '/month',
      description: 'For teams and enterprises',
      features: [
        'Everything in Plus',
        'Access Control',
        'Multi-Factor Authentication',
        'Notifications (Slack, Discord, WhatsApp, Teams and more)',
        'Invoice Autoscheduling',
        'Automated Server Backup and Restore',
        'Priority Support',
      ],
      cta: 'Choose Pro',
      ctaLink: '/contact',
      popular: false,
      gradient: 'from-purple-500/20 to-pink-500/20',
    },
  ]

  return (
    <section className="pricing-page">
      <div className="container">
        <div className="pricing-header">
          <h1>Pricing</h1>
          <p className="pricing-subtitle">
            Choose the plan that's right for you. All plans include self-hosting capabilities.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`pricing-card ${plan.popular ? 'pricing-card-popular' : ''}`}
            >
              {plan.popular && (
                <div className="pricing-badge">Most Popular</div>
              )}
              <div className="pricing-card-header">
                <h2>{plan.name}</h2>
                <p className="pricing-description">{plan.description}</p>
                <div className="pricing-price">
                  <span className="pricing-amount">{plan.price}</span>
                  {plan.period && <span className="pricing-period">{plan.period}</span>}
                </div>
              </div>
              <ul className="pricing-features">
                {plan.features.map((feature, index) => (
                  <li key={index}>
                    <svg
                      className="pricing-check"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 6L9 17L4 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href={plan.ctaLink} className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'} pricing-cta`}>
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="pricing-footer">
          <p>
            All plans are self-hosted. Need help choosing? <Link href="/contact">Contact us</Link> for assistance.
          </p>
        </div>
      </div>
    </section>
  )
}
