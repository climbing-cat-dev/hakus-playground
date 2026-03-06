import { Metadata } from "next";

export const siteUrl = "https://playground.climbingcat.dev";
export const siteName = "Haku's Playground";
export const siteDescription =
  "A playful, climbing-cat-themed course that teaches non-technical people to use AI tools — from understanding AI basics through building agentic systems.";

export function createMetadata({
  title,
  description,
  path = "",
  trail,
}: {
  title: string;
  description: string;
  path?: string;
  trail?: string;
}): Metadata {
  const url = `${siteUrl}${path}`;
  const ogParams = new URLSearchParams({ title });
  if (trail) ogParams.set("trail", trail);
  const ogImage = `${siteUrl}/api/og?${ogParams.toString()}`;

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
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
