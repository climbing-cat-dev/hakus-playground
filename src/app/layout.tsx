import type { Metadata } from "next";
import { Fredoka, Nunito, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
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
  title: {
    default: "Haku's Playground — Learn AI from Rangitoto to Aoraki",
    template: "%s | Haku's Playground",
  },
  description:
    "A playful, climbing-cat-themed course that teaches non-technical people to use AI tools — from understanding AI basics through building agentic systems.",
  icons: {
    icon: "/images/logo/haku-logo.webp",
    apple: "/images/logo/haku-logo.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
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
