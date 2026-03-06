import { NextRequest, NextResponse } from "next/server";

const NOTION_API_KEY = process.env.NOTION_API_KEY;
const NOTION_DATABASE_ID = process.env.NOTION_SUBSCRIBE_DB_ID;

const notionHeaders = {
  Authorization: `Bearer ${NOTION_API_KEY}`,
  "Notion-Version": "2022-06-28",
  "Content-Type": "application/json",
};

async function isAlreadySubscribed(email: string): Promise<boolean> {
  const res = await fetch(
    `https://api.notion.com/v1/databases/${NOTION_DATABASE_ID}/query`,
    {
      method: "POST",
      headers: notionHeaders,
      body: JSON.stringify({
        filter: { property: "Email", email: { equals: email } },
      }),
    }
  );
  if (!res.ok) return false;
  const data = await res.json();
  return data.results?.length > 0;
}

async function createSubscriber(email: string): Promise<boolean> {
  const res = await fetch("https://api.notion.com/v1/pages", {
    method: "POST",
    headers: notionHeaders,
    body: JSON.stringify({
      parent: { database_id: NOTION_DATABASE_ID },
      properties: {
        Email: { email },
        Source: { select: { name: "Haku's Playground" } },
      },
    }),
  });
  return res.ok;
}

export async function POST(request: NextRequest) {
  const { email } = await request.json();

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }

  if (!NOTION_API_KEY || !NOTION_DATABASE_ID) {
    return NextResponse.json({ error: "server_misconfigured" }, { status: 500 });
  }

  if (await isAlreadySubscribed(email)) {
    return NextResponse.json({ error: "already_subscribed" }, { status: 409 });
  }

  if (!(await createSubscriber(email))) {
    return NextResponse.json({ error: "notion_error" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
