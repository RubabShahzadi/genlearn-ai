import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });

export async function POST(req: NextRequest) {
  try {
    const { text, language } = await req.json();
    if (!text || !language)
      return NextResponse.json({ error: "Text and language required" }, { status: 400 });

    const prompt = `
Translate the following text into ${language}
using simple student-friendly language:

${text}
`;

    const result = await model.generateContent(prompt);
    return NextResponse.json({ result: result.response.text() });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}