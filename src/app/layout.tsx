import type { Metadata } from "next";
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
  title: "Zyphron Technologies – Software Development",
  description:
    "Zyphron Technologies partners with startups, SMEs, and enterprises to design and build scalable, modern software—from web and mobile apps to SaaS platforms and backend systems.",
  metadataBase: new URL("https://www.zyphron.com"),
  openGraph: {
    title: "Zyphron Technologies – Software Development",
    description:
      "We design and build scalable, modern software products and platforms.",
    type: "website",
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
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
