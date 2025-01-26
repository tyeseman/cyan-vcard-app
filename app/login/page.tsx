import LoginForm from "./LoginForm"
import { JsonLd } from "../components/JsonLd"

export default function LoginPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Login to Cyan VCard",
          description: "Access your Cyan VCard account to manage your digital business cards.",
          url: "https://www.cyanvcard.com/login",
          mainEntity: {
            "@type": "LoginAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: "https://www.cyanvcard.com/login",
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
      <LoginForm />
    </>
  )
}

