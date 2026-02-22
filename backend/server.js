const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Check API key
if (!process.env.GEMINI_API_KEY) {
  console.error("GEMINI_API_KEY not found in .env file");
  process.exit(1);
}

// Initialize Gemini once
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-3-flash-preview",
});

// Health Route
app.get("/", (req, res) => {
  res.json({ message: "GenLearn AI Backend Running" });
});

// =============================
// 🔹 1. Explain Topic
// =============================
app.post("/api/explain", async (req, res) => {
  try {
    const { topic } = req.body;
    if (!topic) return res.status(400).json({ error: "Topic is required" });

    const prompt = `
Explain "${topic}" in simple language for Pakistani students.
Use easy Urdu + English mix.
Add real-life examples.
Use headings and bullet points.
`;

    const result = await model.generateContent(prompt);
    res.json({ result: result.response.text() });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// =============================
// 🔹 2. Quiz Generator
// =============================
app.post("/api/quiz", async (req, res) => {
  try {
    const { topic } = req.body;
    if (!topic) return res.status(400).json({ error: "Topic is required" });

    const prompt = `
Generate 5 short quiz questions about "${topic}".
Mix conceptual and practical questions.
Provide answers at the end.
`;

    const result = await model.generateContent(prompt);
    res.json({ result: result.response.text() });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// =============================
// 🔹 3. MCQ Generator
// =============================
app.post("/api/mcq", async (req, res) => {
  try {
    const { topic } = req.body;
    if (!topic) return res.status(400).json({ error: "Topic is required" });

    const prompt = `
Generate 5 multiple choice questions (MCQs) about "${topic}".
Each question must have:
A) option
B) option
C) option
D) option
Also mention correct answer.
`;

    const result = await model.generateContent(prompt);
    res.json({ result: result.response.text() });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// =============================
// 🔹 4. Study Roadmap
// =============================
app.post("/api/roadmap", async (req, res) => {
  try {
    const { subject, days } = req.body;
    if (!subject || !days)
      return res.status(400).json({ error: "Subject and days required" });

    const prompt = `
Create a ${days}-day study roadmap for "${subject}".
Target: Pakistani board students (Matric/Inter).
Divide topics day-wise.
Include revision and practice days.
`;

    const result = await model.generateContent(prompt);
    res.json({ result: result.response.text() });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// =============================
// 🔹 5. Summary Generator
// =============================
app.post("/api/summary", async (req, res) => {
  try {
    const { content } = req.body;
    if (!content)
      return res.status(400).json({ error: "Content is required" });

    const prompt = `
Summarize the following content in short bullet points
for Pakistani students:

${content}
`;

    const result = await model.generateContent(prompt);
    res.json({ result: result.response.text() });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// =============================
// 🔹 6. Translate API
// =============================
app.post("/api/translate", async (req, res) => {
  try {
    const { text, language } = req.body;
    if (!text || !language)
      return res.status(400).json({ error: "Text and language required" });

    const prompt = `
Translate the following text into ${language}
using simple student-friendly language:

${text}
`;

    const result = await model.generateContent(prompt);
    res.json({ result: result.response.text() });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// =============================
// Start Server
// =============================
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



// const express = require("express");
// const cors = require("cors");
// const path = require("path")
// require("dotenv").config();
// const { GoogleGenerativeAI } = require("@google/generative-ai"); // SDK handles token

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.post("/api/explain", async (req, res) => {
//   try {
//     const { topic } = req.body;
//     console.log(topic);


//     const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
//     const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });
//     const response = await model.generateContent(
//       `Explain ${topic} in simple language for Pakistani students with examples.`
//     );

//     return res.json({ result: response.response.text() });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// app.listen(5000, () => console.log("Server running on port 5000"));