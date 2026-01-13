const ChatSession = require("./chat.model");
const model = require("../../config/gemini"); 

const getOrCreateSession = async (sessionId, context) => {
  let session = await ChatSession.findOne({ sessionId });

  if (!session) {
    session = await ChatSession.create({
      sessionId,
      context,
      messages: [],
    });
  }

  return session;
};

const saveMessage = async (session, role, content) => {
  session.messages.push({ role, content });
  await session.save();
};

const generateReply = async (message, session) => {
  try {
    const history = session.messages
      .map((m) => `${m.role}: ${m.content}`)
      .join("\n");

    const prompt = `
You are a veterinary assistant.
Only answer questions related to pet health, care, vaccination,
diet, illness, or preventive care.
If the question is unrelated, politely refuse.

Conversation so far:
${history}

user: ${message}
assistant:
`;

    const result = await model.generateContent(prompt);
    const aiReply = result.response.text().trim();

    
    await saveMessage(session, "assistant", aiReply);

    return aiReply;
  } catch (error) {
    console.error("Gemini error:", error);
    return "Vet Bot: I'm having trouble responding right now";
  }
};

module.exports = {
  getOrCreateSession,
  saveMessage,
  generateReply,
};
