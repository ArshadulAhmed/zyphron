import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Custom Software Development Company | Zyphron Technologies",
  description:
    "Zyphron Technologies is a custom software development company in India helping teams design, build, and scale modern web, mobile, e‑commerce, and SaaS products.",
  metadataBase: new URL("https://zyphron.in"),
  openGraph: {
    title: "Custom Software Development Company | Zyphron Technologies",
    description:
      "End-to-end software development for web, mobile, e‑commerce, dashboards, and SaaS platforms.",
    type: "website",
    url: "https://zyphron.in",
    siteName: "Zyphron Technologies",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software Development Company | Zyphron Technologies",
    description:
      "Partner with Zyphron Technologies to design and build scalable, modern software products.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-50`}
      >
        <Script
          id="zyphron-organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Zyphron Technologies",
              url: "https://zyphron.in",
              logo: "https://zyphron.in/favicon.ico",
              email: "hello@zyphron.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Barpeta",
                addressRegion: "Assam",
                postalCode: "781314",
                addressCountry: "IN",
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  contactType: "sales",
                  email: "hello@zyphron.com",
                  areaServed: "IN",
                  availableLanguage: ["en"],
                },
              ],
            }),
          }}
        />
        <Script
          id="zyphron-website-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Zyphron Technologies",
              url: "https://zyphron.in",
            }),
          }}
        />
        <div className="relative min-h-screen overflow-hidden">
          <div className="pointer-events-none fixed inset-0 -z-10">
            <div className="absolute inset-0 bg-slate-950" />
            <div className="absolute -top-40 left-1/2 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-cyan-400/15 via-sky-500/10 to-emerald-400/10 blur-3xl" />
            <div className="absolute bottom-[-12rem] right-[-6rem] h-96 w-[32rem] rounded-full bg-gradient-to-tr from-violet-500/20 via-indigo-500/10 to-sky-400/20 blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.16),transparent_60%),radial-gradient(circle_at_bottom,_rgba(15,23,42,0.9),#020617)]" />
          </div>

          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </div>
      </body>
    </html>
  );
}
