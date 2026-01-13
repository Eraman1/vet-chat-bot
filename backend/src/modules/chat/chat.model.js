const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: ["user", "bot"],
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const chatSchema = new mongoose.Schema(
  {
    sessionId: {
      type: String,
      required: true,
    },
    context: {
      type: Object,
      default: {},
    },
    messages: [messageSchema],
  },
  { timestamps: true }
);

const ChatSession = mongoose.model("ChatSession", chatSchema);

module.exports = ChatSession;