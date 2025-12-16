export default function AboutPage() {
  return (
    <section className="about-page">
      <div className="container">
        <div className="about-content">
          <h1>About Invoicer</h1>
          <div className="about-section">
            <h2>What is Invoicer?</h2>
            <p>
              Invoicer is a powerful, self-hosted invoice generator designed to give you complete control over your invoicing workflow. 
              Built with simplicity and privacy in mind, Invoicer allows you to generate professional invoices without relying on 
              third-party services or cloud platforms.
            </p>
            <p>
              Whether you're a freelancer, small business, or enterprise, Invoicer provides the tools you need to create, manage, 
              and track invoices efficiently.
            </p>
          </div>

          <div className="about-section">
            <h2>Key Features</h2>
            <ul>
              <li><strong>Self-Hosted:</strong> Complete control over your data and infrastructure</li>
              <li><strong>Privacy-First:</strong> Your invoices never leave your server</li>
              <li><strong>Docker-Ready:</strong> Deploy in minutes with Docker</li>
              <li><strong>REST API:</strong> Full programmatic access to all features</li>
              <li><strong>Professional Templates:</strong> Beautiful, customizable invoice designs</li>
              <li><strong>PDF Export:</strong> High-quality PDF generation</li>
            </ul>
          </div>

          <div className="about-section">
            <h2>Why Self-Hosted?</h2>
            <p>In today's digital world, data privacy and control are more important than ever. By self-hosting Invoicer, you:</p>
            <ul>
              <li>Keep all your financial data on your own infrastructure</li>
              <li>Avoid vendor lock-in and subscription fees</li>
              <li>Have complete control over customization and features</li>
              <li>Meet compliance requirements for data residency</li>
              <li>Reduce dependency on external services</li>
            </ul>
          </div>

          <div className="about-section">
            <h2>Open Source</h2>
            <p>Invoicer is built with open-source principles, giving you the freedom to inspect, modify, and enhance the code to meet your specific needs.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
