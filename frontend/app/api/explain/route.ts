import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });

export async function POST(req: NextRequest) {
  try {
    const { topic } = await req.json();
    if (!topic) return NextResponse.json({ error: "Topic is required" }, { status: 400 });

    const prompt = `
Explain "${topic}" in simple language for Pakistani students.
Use easy Urdu + English mix.
Add real-life examples.
Use headings and bullet points.
`;

    const result = await model.generateContent(prompt);
    return NextResponse.json({ result: result.response.text() });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}