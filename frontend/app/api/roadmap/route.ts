import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });

export async function POST(req: NextRequest) {
  try {
    const { subject, days } = await req.json();
    if (!subject || !days)
      return NextResponse.json({ error: "Subject and days required" }, { status: 400 });

    const prompt = `
Create a ${days}-day study roadmap for "${subject}".
Target: Pakistani board students (Matric/Inter).
Divide topics day-wise.
Include revision and practice days.
`;

    const result = await model.generateContent(prompt);
    return NextResponse.json({ result: result.response.text() });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}