const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function probarGemini() {
  console.log("Conectando con Gemini...");
 const model = genAI.getGenerativeModel({ model: "gemini-3.6-flash" });
  
  try {
    const result = await model.generateContent("Dime un dato curioso sobre la tecnología en una frase.");
    console.log("\n🤖 Gemini dice:");
    console.log(result.response.text());
  } catch (error) {
    console.error("\n❌ Hubo un error:", error.message);
  }
}

probarGemini();