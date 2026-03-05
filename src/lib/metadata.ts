import { Metadata } from "next";

export const siteUrl = "https://hakus-playground.vercel.app";
export const siteName = "Haku's Playground";
export const siteDescription =
  "A playful, climbing-cat-themed course that teaches non-technical people to use AI tools — from understanding AI basics through building agentic systems.";

export function createMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = `${siteUrl}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
