import { Metadata } from 'next';
import { siteConfig } from '@/config/site-config';

export const metadata: Metadata = {
  title: 'Terms of Service | Printer Supports Online',
  description: 'Terms of Service for Printer Supports Online - Read our terms and conditions for using our printer repair services.',
};

export default function TermsOfService() {
  const lastUpdated = 'December 11, 2024';

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last updated: {lastUpdated}</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing and using the services provided by {siteConfig.business.name}, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
              <p className="text-gray-700 leading-relaxed">
                These Terms of Service (&quot;Terms&quot;) govern your use of our website and printer repair services. Please read these Terms carefully before using our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Services</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {siteConfig.business.name} provides professional printer repair, maintenance, installation, and technical support services. Our services include but are not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>On-site and remote printer repair services</li>
                <li>Printer installation and setup</li>
                <li>Network printer configuration</li>
                <li>Maintenance and preventive care</li>
                <li>Technical support and troubleshooting</li>
                <li>Emergency repair services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Service Terms and Conditions</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Service Appointments</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Service appointments must be scheduled in advance during business hours</li>
                <li>We require at least 24 hours notice for appointment cancellations</li>
                <li>Emergency services may be available outside regular business hours at premium rates</li>
                <li>Service times are estimates and may vary based on the complexity of the issue</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Service Area</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We provide services throughout the United States. Travel charges may apply for locations outside our standard service area. Remote support services are available nationwide.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Equipment Access</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Customers must provide safe and reasonable access to equipment requiring service. We reserve the right to refuse service if working conditions are deemed unsafe or if access to equipment is restricted.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Pricing and Payment Terms</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Service Fees</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Diagnostic fees may apply and will be disclosed before service begins</li>
                <li>Labor rates are based on the complexity and time required for repairs</li>
                <li>Parts and materials are charged at cost plus applicable markup</li>
                <li>Emergency and after-hours services are subject to premium rates</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Payment Terms</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Payment is due upon completion of services unless other arrangements are made</li>
                <li>We accept cash, check, and major credit cards</li>
                <li>A service charge may be applied to returned checks</li>
                <li>Accounts past due may be subject to collection procedures and additional fees</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Estimates</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Service estimates are provided in good faith based on initial diagnosis. Final costs may vary if additional issues are discovered during repair. We will obtain customer approval before proceeding with work that exceeds the original estimate by more than 20%.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Warranties and Guarantees</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Service Warranty</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We provide a 90-day warranty on labor for repair services. This warranty covers the specific repair performed and does not extend to other components or issues that may arise.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Parts Warranty</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Replacement parts are covered by manufacturer warranties where applicable. We will assist in warranty claims for defective parts installed during our service.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Warranty Limitations</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Warranty does not cover damage caused by misuse, abuse, or normal wear and tear</li>
                <li>Warranty is void if equipment is serviced by unauthorized personnel after our repair</li>
                <li>Customer must notify us of warranty issues within the warranty period</li>
                <li>Our liability is limited to re-performing the service or refunding the service fee</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To the maximum extent permitted by law, {siteConfig.business.name} shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Loss of profits, data, or business opportunities</li>
                <li>Business interruption or downtime</li>
                <li>Damage to other equipment not directly serviced by us</li>
                <li>Third-party claims or damages</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Our total liability for any claim shall not exceed the amount paid for the specific service that gave rise to the claim.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Customer Responsibilities</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Customers are responsible for:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Providing accurate information about equipment and issues</li>
                <li>Backing up important data before service (we are not responsible for data loss)</li>
                <li>Ensuring safe working conditions and equipment access</li>
                <li>Following proper equipment operation procedures after service</li>
                <li>Timely payment for services rendered</li>
                <li>Notifying us promptly of any issues with completed work</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All content on our website, including text, graphics, logos, images, and software, is the property of {siteConfig.business.name} or its licensors and is protected by copyright and other intellectual property laws.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You may not reproduce, distribute, modify, or create derivative works of our content without express written permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Privacy and Data Protection</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We respect your privacy and are committed to protecting your personal information. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By using our services, you consent to the collection and use of your information as described in our Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Termination</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Either party may terminate service agreements with reasonable notice. We reserve the right to refuse service or terminate agreements immediately in cases of:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Non-payment or breach of payment terms</li>
                <li>Violation of these Terms of Service</li>
                <li>Unsafe working conditions</li>
                <li>Abusive or threatening behavior toward our staff</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Force Majeure</h2>
              <p className="text-gray-700 leading-relaxed">
                We shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, labor disputes, or government regulations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Governing Law and Dispute Resolution</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Any disputes arising from these Terms or our services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, except that either party may seek injunctive relief in court for intellectual property violations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Severability</h2>
              <p className="text-gray-700 leading-relaxed">
                If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that these Terms shall otherwise remain in full force and effect.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after changes are posted constitutes acceptance of the modified Terms.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We recommend reviewing these Terms periodically to stay informed of any updates.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>{siteConfig.business.name}</strong></p>
                <p className="text-gray-700 mb-2">Email: <a href={`mailto:${siteConfig.business.email}`} className="text-blue-600 hover:text-blue-800">{siteConfig.business.email}</a></p>
                <p className="text-gray-700">Phone: <a href={`tel:${siteConfig.business.phone}`} className="text-blue-600 hover:text-blue-800">{siteConfig.business.phone}</a></p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">16. Acknowledgment</h2>
              <p className="text-gray-700 leading-relaxed">
                By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}