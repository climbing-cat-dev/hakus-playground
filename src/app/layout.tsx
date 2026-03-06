import type { Metadata } from "next";
import { Fredoka, Nunito, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { siteUrl, siteName, siteDescription } from "@/lib/metadata";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  verification: {
    google: "f-WyqyoLQGKyRtnCFSQGtPhhp8JoIKzODjloaZ7V8bk",
  },
  title: {
    default: "Haku's Playground — Learn AI from Rangitoto to Aoraki",
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    siteName,
    title: "Haku's Playground — Learn AI from Rangitoto to Aoraki",
    description: siteDescription,
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}/api/og?title=${encodeURIComponent("Learn AI from Rangitoto to Aoraki")}`,
        width: 1200,
        height: 630,
        alt: "Haku's Playground — Learn AI from Rangitoto to Aoraki",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Haku's Playground — Learn AI from Rangitoto to Aoraki",
    description: siteDescription,
    images: [
      `${siteUrl}/api/og?title=${encodeURIComponent("Learn AI from Rangitoto to Aoraki")}`,
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              name: "Haku's Playground",
              description: siteDescription,
              url: siteUrl,
              provider: {
                "@type": "Organization",
                name: siteName,
                url: siteUrl,
              },
              hasCourseInstance: {
                "@type": "CourseInstance",
                courseMode: "online",
                courseWorkload: "PT5H",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${fredoka.variable} ${nunito.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
