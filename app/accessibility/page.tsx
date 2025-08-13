import Section from '@/components/Section'

export default function AccessibilityPage() {
  return (
    <section className="pt-24 pb-12">
      <Section>
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1>Accessibility Statement</h1>
          <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>
          
          <p>
            Current Creative AI is committed to ensuring digital accessibility for people with 
            disabilities. We are continually improving the user experience for everyone and 
            applying the relevant accessibility standards.
          </p>

          <h2>Conformance Status</h2>
          <p>
            We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.2 
            at the AA level. These guidelines help make web content accessible to users 
            with disabilities.
          </p>

          <h2>Accessibility Features</h2>
          <p>This website includes the following accessibility features:</p>
          <ul>
            <li>Semantic HTML markup for screen readers</li>
            <li>Keyboard navigation support</li>
            <li>High contrast color ratios</li>
            <li>Descriptive alt text for images</li>
            <li>Proper heading hierarchy</li>
            <li>Focus indicators for interactive elements</li>
            <li>Skip to main content link</li>
            <li>Form labels and error messages</li>
          </ul>

          <h2>Known Limitations</h2>
          <p>
            While we strive for full accessibility, some areas may still present challenges:
          </p>
          <ul>
            <li>Third-party embedded content (social media, maps)</li>
            <li>Complex interactive elements may require additional navigation</li>
          </ul>

          <h2>Feedback and Contact</h2>
          <p>
            We welcome feedback on the accessibility of our website. Please contact us if 
            you encounter accessibility barriers:
          </p>
          <ul>
            <li><strong>Email:</strong> hello@currentcreative.ai</li>
            <li><strong>Phone:</strong> (845) 555-1234</li>
            <li><strong>Mail:</strong> 123 Main Street, New City, NY 10956</li>
          </ul>

          <h2>Assessment Method</h2>
          <p>
            Current Creative AI assessed the accessibility of this website through:
          </p>
          <ul>
            <li>Self-evaluation using automated testing tools</li>
            <li>Manual testing with keyboard navigation</li>
            <li>Screen reader testing</li>
            <li>Color contrast analysis</li>
          </ul>

          <h2>Ongoing Efforts</h2>
          <p>
            We are committed to ongoing accessibility improvements and will:
          </p>
          <ul>
            <li>Regularly test our website for accessibility</li>
            <li>Provide accessibility training for our team</li>
            <li>Update this statement as improvements are made</li>
            <li>Consider accessibility in all design and development decisions</li>
          </ul>

          <h2>Third-Party Content</h2>
          <p>
            Some content on this site may be provided by third parties. We are working 
            with our partners to ensure their content meets accessibility standards.
          </p>

          <h2>Compatibility</h2>
          <p>This website is designed to be compatible with:</p>
          <ul>
            <li>Screen readers (NVDA, JAWS, VoiceOver)</li>
            <li>Voice recognition software</li>
            <li>Keyboard-only navigation</li>
            <li>Browser zoom up to 200%</li>
          </ul>

          <p>
            This accessibility statement was created with the help of the 
            Web Accessibility Initiative (WAI) and is reviewed regularly to ensure accuracy.
          </p>
        </div>
      </Section>
    </section>
  )
}