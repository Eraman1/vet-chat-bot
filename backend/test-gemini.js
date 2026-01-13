require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

async function test() {
  try {
    const genAI = new GoogleGenerativeAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });

    const result = await model.generateContent("Say hello");
    console.log(result.response.text());
  } catch (err) {
    console.error("TEST ERROR:", err.message);
  }
}

test();
