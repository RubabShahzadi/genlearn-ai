const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { genai } = require("@google/generative-ai"); // SDK handles token

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/explain", async (req, res) => {
  try {
    const { topic } = req.body;

    // Using SDK's generateText
    const response = await genai.generateText({
      model: "gemini-3-flash-preview",
      prompt: `Explain ${topic} in simple language for Pakistani students with examples.`,
      temperature: 0.7,
      maxOutputTokens: 500,
    });

    res.json({ result: response.output[0].content[0].text });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));



// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();
// const genai = require("@google/generative-ai"); // correct import

// const app = express();
// app.use(cors());
// app.use(express.json());

// // 🔹 Explain API
// app.post("/api/explain", async (req, res) => {
//   try {
//     const { topic } = req.body;

//     const response = await genai.generateText({
//       apiKey: process.env.GEMINI_API_KEY,
//       model: "gemini-3-flash-preview",
//       prompt: `Explain ${topic} in simple language for Pakistani students with examples.`,
//       temperature: 0.7,
//       maxOutputTokens: 500,
//     });

//     res.json({ result: response.output[0].content[0].text });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // 🔹 Quiz API
// app.post("/api/quiz", async (req, res) => {
//   try {
//     const { topic } = req.body;

//     const response = await genai.generateText({
//       apiKey: process.env.GEMINI_API_KEY,
//       model: "gemini-3-flash-preview",
//       prompt: `Generate 5 MCQs with answers about ${topic}.`,
//       temperature: 0.7,
//       maxOutputTokens: 500,
//     });

//     res.json({ result: response.output[0].content[0].text });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // 🔹 Study Plan API
// app.post("/api/studyplan", async (req, res) => {
//   try {
//     const { subject, days } = req.body;

//     const response = await genai.generateText({
//       apiKey: process.env.GEMINI_API_KEY,
//       model: "gemini-3-flash-preview",
//       prompt: `Create a ${days}-day study plan for ${subject} for board exam preparation.`,
//       temperature: 0.7,
//       maxOutputTokens: 500,
//     });

//     res.json({ result: response.output[0].content[0].text });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// app.listen(5000, () => console.log("Server running on port 5000"));



// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();
// const { genai } = require("@google/generative-ai"); // correct import

// const app = express();
// app.use(cors());
// app.use(express.json());

// // 🔹 Explain API
// app.post("/api/explain", async (req, res) => {
//   try {
//     const { topic } = req.body;

//     const response = await genai.models.generateText({
//       model: "gemini-3-flash-preview",
//       apiKey: process.env.GEMINI_API_KEY,
//       prompt: `Explain ${topic} in simple language for Pakistani students with examples.`,
//       temperature: 0.7,
//       maxOutputTokens: 500,
//     });

//     res.json({ result: response.output[0].content[0].text });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // 🔹 Quiz API
// app.post("/api/quiz", async (req, res) => {
//   try {
//     const { topic } = req.body;

//     const response = await genai.models.generateText({
//       model: "gemini-3-flash-preview",
//       apiKey: process.env.GEMINI_API_KEY,
//       prompt: `Generate 5 MCQs with answers about ${topic}.`,
//       temperature: 0.7,
//       maxOutputTokens: 500,
//     });

//     res.json({ result: response.output[0].content[0].text });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // 🔹 Study Plan API
// app.post("/api/studyplan", async (req, res) => {
//   try {
//     const { subject, days } = req.body;

//     const response = await genai.models.generateText({
//       model: "gemini-3-flash-preview",
//       apiKey: process.env.GEMINI_API_KEY,
//       prompt: `Create a ${days}-day study plan for ${subject} for board exam preparation.`,
//       temperature: 0.7,
//       maxOutputTokens: 500,
//     });

//     res.json({ result: response.output[0].content[0].text });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// app.listen(5000, () => console.log("Server running on port 5000"));



// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();
// const genai = require("@google/generative-ai"); // use as imported object

// const app = express();
// app.use(cors());
// app.use(express.json());

// // 🔹 Explain API
// app.post("/api/explain", async (req, res) => {
//   try {
//     const { topic } = req.body;

//     const response = await genai.models.generateContent({
//       apiKey: process.env.GEMINI_API_KEY,
//       model: "gemini-3-flash-preview",
//       contents: `Explain ${topic} in simple language for Pakistani students with examples.`,
//     });

//     res.json({ result: response[0].content[0].text });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // 🔹 Quiz API
// app.post("/api/quiz", async (req, res) => {
//   try {
//     const { topic } = req.body;

//     const response = await genai.models.generateContent({
//       apiKey: process.env.GEMINI_API_KEY,
//       model: "gemini-3-flash-preview",
//       contents: `Generate 5 MCQs with answers about ${topic}.`,
//     });

//     res.json({ result: response[0].content[0].text });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // 🔹 Study Plan API
// app.post("/api/studyplan", async (req, res) => {
//   try {
//     const { subject, days } = req.body;

//     const response = await genai.models.generateContent({
//       apiKey: process.env.GEMINI_API_KEY,
//       model: "gemini-3-flash-preview",
//       contents: `Create a ${days}-day study plan for ${subject} for board exam preparation.`,
//     });

//     res.json({ result: response[0].content[0].text });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// app.listen(5000, () => console.log("Server running on port 5000"));



// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();
// const { Client } = require("@google/generative-ai"); // current import

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Gemini client
// const client = new Client({
//   apiKey: process.env.GEMINI_API_KEY,
// });

// // 🔹 Explain API
// app.post("/api/explain", async (req, res) => {
//   try {
//     const { topic } = req.body;

//     const response = await client.models.generateContent({
//       model: "gemini-3-flash-preview",
//       contents: `Explain ${topic} in simple language for Pakistani students with examples.`,
//     });

//     res.json({ result: response[0].content[0].text });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // 🔹 Quiz API
// app.post("/api/quiz", async (req, res) => {
//   try {
//     const { topic } = req.body;

//     const response = await client.models.generateContent({
//       model: "gemini-3-flash-preview",
//       contents: `Generate 5 MCQs with answers about ${topic}.`,
//     });

//     res.json({ result: response[0].content[0].text });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // 🔹 Study Plan API
// app.post("/api/studyplan", async (req, res) => {
//   try {
//     const { subject, days } = req.body;

//     const response = await client.models.generateContent({
//       model: "gemini-3-flash-preview",
//       contents: `Create a ${days}-day study plan for ${subject} for board exam preparation.`,
//     });

//     res.json({ result: response[0].content[0].text });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// app.listen(5000, () => console.log("Server running on port 5000"));



// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();
// const { TextGenerationClient } = require("@google/generative-ai");

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Gemini Client
// const client = new TextGenerationClient({
//   apiKey: process.env.GEMINI_API_KEY,
// });

// // 🔹 Explain API
// app.post("/api/explain", async (req, res) => {
//   try {
//     const { topic } = req.body;

//     const response = await client.generateText({
//       model: "gemini-3-flash-preview", // ✅ updated model
//       prompt: `Explain ${topic} in simple language for Pakistani students with examples.`,
//       temperature: 0.7,
//       maxOutputTokens: 500,
//     });

//     res.json({ result: response.candidates[0].output });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // 🔹 Quiz API
// app.post("/api/quiz", async (req, res) => {
//   try {
//     const { topic } = req.body;

//     const response = await client.generateText({
//       model: "gemini-3-flash-preview",
//       prompt: `Generate 5 MCQs with answers about ${topic}.`,
//       temperature: 0.7,
//       maxOutputTokens: 500,
//     });

//     res.json({ result: response.candidates[0].output });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // 🔹 Study Plan API
// app.post("/api/studyplan", async (req, res) => {
//   try {
//     const { subject, days } = req.body;

//     const response = await client.generateText({
//       model: "gemini-3-flash-preview",
//       prompt: `Create a ${days}-day study plan for ${subject} for board exam preparation.`,
//       temperature: 0.7,
//       maxOutputTokens: 500,
//     });

//     res.json({ result: response.candidates[0].output });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// app.listen(5000, () => console.log("Server running on port 5000"));



// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();
// const { TextGenerationClient } = require("@google/generative-ai");

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Use Gemini TextGenerationClient
// const client = new TextGenerationClient({
//   apiKey: process.env.GEMINI_API_KEY,
// });

// // Explain API
// app.post("/api/explain", async (req, res) => {
//   try {
//     const { topic } = req.body;

//     const response = await client.generateText({
//       model: "text-bison-001", // latest working model
//       prompt: `Explain ${topic} in simple language for Pakistani students with examples.`,
//       temperature: 0.7,
//       maxOutputTokens: 500,
//     });

//     res.json({ result: response.candidates[0].output });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Quiz API
// app.post("/api/quiz", async (req, res) => {
//   try {
//     const { topic } = req.body;

//     const response = await client.generateText({
//       model: "text-bison-001",
//       prompt: `Generate 5 MCQs with answers about ${topic}.`,
//       temperature: 0.7,
//       maxOutputTokens: 500,
//     });

//     res.json({ result: response.candidates[0].output });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Study Plan API
// app.post("/api/studyplan", async (req, res) => {
//   try {
//     const { subject, days } = req.body;

//     const response = await client.generateText({
//       model: "text-bison-001",
//       prompt: `Create a ${days}-day study plan for ${subject} for board exam preparation.`,
//       temperature: 0.7,
//       maxOutputTokens: 500,
//     });

//     res.json({ result: response.candidates[0].output });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// app.listen(5000, () => console.log("Server running on port 5000"));



// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();
// const { GoogleGenerativeAI } = require("@google/generative-ai");

// const app = express();
// app.use(cors());
// app.use(express.json());

// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
// const model = genAI.getGenerativeModel({ model: "text-bison-001" }); // ✅ working model

// // 🔹 Explain Feature
// app.post("/api/explain", async (req, res) => {
//   try {
//     const { topic } = req.body;

//     const result = await model.generateContent(
//       `Explain ${topic} in simple language for Pakistani students with examples.`
//     );

//     res.json({ result: result.response.text() });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // 🔹 Quiz Feature
// app.post("/api/quiz", async (req, res) => {
//   try {
//     const { topic } = req.body;

//     const result = await model.generateContent(
//       `Generate 5 MCQs with answers about ${topic}.`
//     );

//     res.json({ result: result.response.text() });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // 🔹 Study Plan Feature
// app.post("/api/studyplan", async (req, res) => {
//   try {
//     const { subject, days } = req.body;

//     const result = await model.generateContent(
//       `Create a ${days}-day study plan for ${subject} for board exam preparation.`
//     );

//     res.json({ result: result.response.text() });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// app.listen(5000, () => console.log("Server running on port 5000"));



// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();
// const { GoogleGenerativeAI } = require("@google/generative-ai");

// const app = express();
// app.use(cors());
// app.use(express.json());

// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// // 🔹 Explain Feature
// app.post("/api/explain", async (req, res) => {
//   try {
//     const { topic } = req.body;

//     const result = await model.generateContent(
//       `Explain ${topic} in simple language for Pakistani students with examples.`
//     );

//     res.json({ result: result.response.text() });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // 🔹 Quiz Feature
// app.post("/api/quiz", async (req, res) => {
//   try {
//     const { topic } = req.body;

//     const result = await model.generateContent(
//       `Generate 5 MCQs with answers about ${topic}.`
//     );

//     res.json({ result: result.response.text() });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // 🔹 Study Plan Feature
// app.post("/api/studyplan", async (req, res) => {
//   try {
//     const { subject, days } = req.body;

//     const result = await model.generateContent(
//       `Create a ${days}-day study plan for ${subject} for board exam preparation.`
//     );

//     res.json({ result: result.response.text() });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// app.listen(5000, () => console.log("Server running on port 5000"));



// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();
// const OpenAI = require("openai");

// const app = express();
// app.use(cors());
// app.use(express.json());

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// // 🔹 Explain Feature
// app.post("/api/explain", async (req, res) => {
//   try {
//     const { topic } = req.body;

//     const response = await openai.chat.completions.create({
//       model: "gpt-4o-mini",
//       messages: [
//         {
//           role: "user",
//           content: `Explain ${topic} in simple language for Pakistani students with examples.`,
//         },
//       ],
//     });

//     res.json({ result: response.choices[0].message.content });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // 🔹 Quiz Feature
// app.post("/api/quiz", async (req, res) => {
//   try {
//     const { topic } = req.body;

//     const response = await openai.chat.completions.create({
//       model: "gpt-4o-mini",
//       messages: [
//         {
//           role: "user",
//           content: `Generate 5 MCQs with answers about ${topic}.`,
//         },
//       ],
//     });

//     res.json({ result: response.choices[0].message.content });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // 🔹 Study Plan Feature
// app.post("/api/studyplan", async (req, res) => {
//   try {
//     const { subject, days } = req.body;

//     const response = await openai.chat.completions.create({
//       model: "gpt-4o-mini",
//       messages: [
//         {
//           role: "user",
//           content: `Create a ${days}-day study plan for ${subject} for board exam preparation.`,
//         },
//       ],
//     });

//     res.json({ result: response.choices[0].message.content });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// app.listen(5000, () => {
//   console.log("Server running on port 5000");
// });



// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import OpenAI from "openai";

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// app.post("/api/explain", async (req, res) => {
//   const { topic } = req.body;

//   const response = await openai.chat.completions.create({
//     model: "gpt-4o-mini",
//     messages: [
//       {
//         role: "user",
//         content: `Explain ${topic} in simple language for Pakistani students with examples.`,
//       },
//     ],
//   });

//   res.json({ result: response.choices[0].message.content });
// });

// app.post("/api/quiz", async (req, res) => {
//   const { topic } = req.body;

//   const response = await openai.chat.completions.create({
//     model: "gpt-4o-mini",
//     messages: [
//       {
//         role: "user",
//         content: `Generate 5 MCQs with answers about ${topic}.`,
//       },
//     ],
//   });

//   res.json({ result: response.choices[0].message.content });
// });

// app.post("/api/studyplan", async (req, res) => {
//   const { subject, days } = req.body;

//   const response = await openai.chat.completions.create({
//     model: "gpt-4o-mini",
//     messages: [
//       {
//         role: "user",
//         content: `Create a ${days}-day study plan for ${subject} for board exam preparation.`,
//       },
//     ],
//   });

//   res.json({ result: response.choices[0].message.content });
// });

// app.listen(5000, () => console.log("Server running on port 5000"));