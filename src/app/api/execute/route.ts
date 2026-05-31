import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  try {
    const response = await fetch("https://api.jdoodle.com/v1/execute", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        clientId: process.env.NEXT_PUBLIC_JDOODLE_CLIENT_ID,
        clientSecret: process.env.NEXT_PUBLIC_JDOODLE_CLIENT_SECRET,
        script: body.script,
       language: body.language === "javascript" ? "nodejs" : body.language,
        versionIndex: body.versionIndex || "0",
      }),
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Error running code" }, { status: 500 });
  }
}