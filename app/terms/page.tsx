import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { JsonLd } from "../components/JsonLd"

export const metadata: Metadata = {
  title: "Terms of Service - Cyan VCard",
  description: "Terms of service and usage conditions for Cyan VCard digital business card platform.",
}

export default function TermsOfService() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Terms of Service - Cyan VCard",
          description: "Terms of service and usage conditions for Cyan VCard digital business card platform.",
        }}
      />
      <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <Card className="max-w-4xl mx-auto bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-white">Terms of Service</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-invert max-w-none">
            <div className="space-y-6 text-gray-300">
              <section>
                <h2 className="text-xl font-semibold text-white">Last Updated: January 25, 2024</h2>
                <p>
                  Please read these Terms of Service carefully before using Cyan VCard. By using our service, you agree
                  to be bound by these terms.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white">1. Service Description</h3>
                <p>
                  Cyan VCard is a free digital business card platform that allows users to create, manage, and share
                  digital business cards. The service includes features such as QR code generation, file sharing, and
                  contact information management.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white">2. Free Service</h3>
                <p>
                  Cyan VCard is provided as a free service. While we accept donations to support development and
                  maintenance, the service remains free for all users regardless of donation status.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white">3. Disclaimer of Warranties</h3>
                <p>
                  THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES OF ANY KIND, EXPRESS OR
                  IMPLIED. WE DO NOT GUARANTEE THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white">4. Limitation of Liability</h3>
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, CYAN VCARD AND ITS CREATORS SHALL NOT BE LIABLE FOR ANY
                  INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES,
                  WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE
                  LOSSES.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white">5. User Responsibilities</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You are responsible for maintaining the confidentiality of your account</li>
                  <li>You must provide accurate and truthful information</li>
                  <li>You must not use the service for any illegal or unauthorized purpose</li>
                  <li>You are responsible for any content you share through the service</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white">6. Acceptable Use</h3>
                <p>You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Upload malicious code or harmful content</li>
                  <li>Infringe on others' intellectual property rights</li>
                  <li>Use the service to spam or harass others</li>
                  <li>Attempt to gain unauthorized access to the service</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white">7. Service Modifications</h3>
                <p>
                  We reserve the right to modify or discontinue the service at any time without notice. We shall not be
                  liable to you or any third party for any modification, suspension, or discontinuance of the service.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white">8. Donations</h3>
                <p>
                  Donations to support the development and maintenance of Cyan VCard are voluntary and non-refundable.
                  Donations do not entitle users to any additional features or privileges.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white">9. Governing Law</h3>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in
                  which the service is primarily operated, without regard to its conflict of law provisions.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white">10. Contact</h3>
                <p>For any questions about these Terms of Service, please contact us at terms@cyanvcard.com</p>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

