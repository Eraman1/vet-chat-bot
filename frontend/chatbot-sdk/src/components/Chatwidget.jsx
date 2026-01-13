import React, { useState } from "react";
import MessageList from "./MessageList";
import InputBox from "./InputBox";

export default function ChatWidget({ config }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      content: "Hi 👋 I’m your veterinary assistant. How can I help you?",
    },
  ]);
  const [loading, setLoading] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = async (text) => {
    const userMessage = { role: "user", content: text };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: text,
          context: config || {},
        }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { role: "bot", content: data.reply || "Something went wrong." },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          content: "⚠️ Sorry, I couldn’t connect to the server.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button onClick={toggleChat} style={styles.fab}>
        🐶
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div style={styles.chatWindow}>
          <div style={styles.header}>
            Vet Chatbot
            <span style={styles.close} onClick={toggleChat}>
              ✖
            </span>
          </div>

          <MessageList messages={messages} loading={loading} />
          <InputBox onSend={sendMessage} disabled={loading} />
        </div>
      )}
    </>
  );
}

const styles = {
  fab: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "56px",
    height: "56px",
    borderRadius: "50%",
    fontSize: "24px",
    cursor: "pointer",
  },
  chatWindow: {
    position: "fixed",
    bottom: "90px",
    right: "20px",
    width: "320px",
    height: "420px",
    background: "#fff",
    border: "1px solid #ccc",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    padding: "10px",
    background: "#4f46e5",
    color: "#fff",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "space-between",
  },
  close: {
    cursor: "pointer",
  },
};
