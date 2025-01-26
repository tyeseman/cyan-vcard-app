import SignupForm from "./SignupForm"
import { JsonLd } from "../components/JsonLd"

export default function SignupPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Sign Up for Cyan VCard",
          description: "Create your Cyan VCard account and start making digital business cards today.",
          url: "https://www.cyanvcard.com/signup",
          mainEntity: {
            "@type": "RegisterAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: "https://www.cyanvcard.com/signup",
              actionPlatform: [
                "http://schema.org/DesktopWebPlatform",
                "http://schema.org/MobileWebPlatform",
                "http://schema.org/IOSPlatform",
                "http://schema.org/AndroidPlatform",
              ],
            },
            httpMethod: "POST",
          },
        }}
      />
      <SignupForm />
    </>
  )
}

