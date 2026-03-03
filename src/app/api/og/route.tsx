import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

const trailColors: Record<string, string> = {
  basecamp: "#4CAF50",
  "easy-trail": "#FF9800",
  "medium-trail": "#7C4DFF",
  summit: "#E91E63",
};

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const title = searchParams.get("title") || "Haku's Playground";
  const trail = searchParams.get("trail") || "";
  const accentColor = trailColors[trail] || "#FF6B35";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1A1612",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <span style={{ fontSize: "48px" }}>🐱</span>
          <span
            style={{
              fontSize: "32px",
              color: "#F5F0E8",
              fontWeight: 700,
            }}
          >
            Haku&apos;s Playground
          </span>
        </div>
        <div
          style={{
            fontSize: "56px",
            fontWeight: 700,
            color: accentColor,
            textAlign: "center",
            lineHeight: 1.2,
          }}
        >
          {title}
        </div>
        <div
          style={{
            marginTop: "24px",
            fontSize: "24px",
            color: "#C4B89A",
          }}
        >
          Learn AI from Basecamp to Summit
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
