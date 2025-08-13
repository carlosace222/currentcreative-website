import Section from '@/components/Section'

export default function PrivacyPage() {
  return (
    <section className="pt-24 pb-12">
      <Section>
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1>Privacy Policy</h1>
          <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>
          
          <h2>Information We Collect</h2>
          <p>
            When you use our website or contact us, we may collect:
          </p>
          <ul>
            <li>Contact information (name, email, phone number)</li>
            <li>Company information</li>
            <li>Service preferences and requirements</li>
            <li>Website usage data through analytics</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your inquiries and provide services</li>
            <li>Send you relevant marketing communications (with consent)</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>Information Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to third parties 
            except as described in this policy. We may share information with:
          </p>
          <ul>
            <li>Service providers who assist in our operations</li>
            <li>Legal authorities when required by law</li>
            <li>Business partners with your explicit consent</li>
          </ul>

          <h2>Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information 
            against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2>Cookies and Analytics</h2>
          <p>
            We use Google Analytics to understand how visitors use our site. 
            You can opt out of analytics tracking through your browser settings.
          </p>

          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt out of marketing communications</li>
          </ul>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at:
          </p>
          <p>
            Email: hello@currentcreative.ai<br />
            Phone: (845) 555-1234<br />
            Address: 123 Main Street, New City, NY 10956
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any 
            changes by posting the new Privacy Policy on this page.
          </p>
        </div>
      </Section>
    </section>
  )
}