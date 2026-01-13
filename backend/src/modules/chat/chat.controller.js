const { v4: uuidv4 } = require("uuid");
const {
  getOrCreateSession,
  saveMessage,
  generateReply,
} = require("./chat.service");

exports.handleChat = async (req, res) => {
  try {
    const { message, sessionId, context } = req.body;

    if (!message) {
      return res.status(400).json({
        reply: "Message is required",
      });
    }

   
    const sid = sessionId || uuidv4();
    const session = await getOrCreateSession(sid, context || {});

    
    await saveMessage(session, "user", message);


    const botReply = await generateReply(message, session);

    return res.json({
      sessionId: sid,
      reply: botReply,
    });
  } catch (error) {
    console.error("Chat error:", error);
    return res.status(500).json({
      reply: "Vet Bot: Sorry, I couldn't process your message right now.",
    });
  }
};
