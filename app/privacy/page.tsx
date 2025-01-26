import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { JsonLd } from "../components/JsonLd"

export const metadata: Metadata = {
  title: "Privacy Policy - Cyan VCard",
  description: "Privacy policy and data handling practices for Cyan VCard digital business card platform.",
}

export default function PrivacyPolicy() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Privacy Policy - Cyan VCard",
          description: "Privacy policy and data handling practices for Cyan VCard digital business card platform.",
        }}
      />
      <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <Card className="max-w-4xl mx-auto bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-white">Privacy Policy</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-invert max-w-none">
            <div className="space-y-6 text-gray-300">
              <section>
                <h2 className="text-xl font-semibold text-white">Last Updated: January 25, 2024</h2>
                <p>
                  Welcome to Cyan VCard. This Privacy Policy explains how we collect, use, and protect your information
                  when you use our digital business card platform.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white">Information We Collect</h3>
                <p>
                  We collect information that you voluntarily provide when creating and sharing your digital business
                  cards:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Basic contact information (name, email, phone number)</li>
                  <li>Professional information (job title, company name)</li>
                  <li>Profile pictures and company logos you upload</li>
                  <li>Social media links you choose to share</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white">How We Use Your Information</h3>
                <p>We use your information solely for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Creating and displaying your digital business cards</li>
                  <li>Generating QR codes for sharing</li>
                  <li>Enabling the sharing functionality of your cards</li>
                  <li>Improving our service and user experience</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white">Data Storage and Security</h3>
                <p>
                  Your data is stored securely in the cloud. While we implement reasonable security measures, we cannot
                  guarantee absolute security. Use of this service is at your own risk.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white">Data Sharing</h3>
                <p>
                  We do not sell your personal information to third parties. Your information is only shared when you
                  explicitly choose to share your digital business card with others.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white">Your Rights</h3>
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access your personal information</li>
                  <li>Update or correct your information</li>
                  <li>Delete your account and associated data</li>
                  <li>Export your data</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white">Free Service and Donations</h3>
                <p>
                  Cyan VCard is provided as a free service. While we welcome donations to support development and
                  maintenance, they are entirely voluntary and do not affect the level of service provided.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white">Contact Us</h3>
                <p>If you have any questions about this Privacy Policy, please contact us at privacy@cyanvcard.com</p>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

