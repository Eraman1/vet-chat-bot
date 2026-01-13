import { useState } from "react";

export default function ChatWindow({ onClose }) {
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hello! How can I help your pet today? 🐾" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { role: "bot", text: data.reply || "No response from server" },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "⚠️ Server error. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-24 right-6 w-80 h-[420px] bg-white rounded-xl shadow-xl flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-emerald-500 text-white px-4 py-3 flex justify-between">
        <span className="font-semibold">Vet Assistant 🐶</span>
        <button onClick={onClose}>✖</button>
      </div>

      {/* Messages */}
      <div className="flex-1 p-3 space-y-2 overflow-y-auto text-sm">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`max-w-[80%] p-2 rounded ${
              msg.role === "user"
                ? "bg-emerald-500 text-white ml-auto"
                : "bg-gray-100 text-gray-800"
            }`}
          >
            {msg.text}
          </div>
        ))}

        {loading && (
          <div className="bg-gray-100 p-2 rounded w-fit">Typing...</div>
        )}
      </div>

      {/* Input */}
      <div className="p-2 border-t flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Type a message..."
          className="flex-1 border rounded px-2 py-1 text-sm"
        />
        <button
          onClick={sendMessage}
          className="bg-emerald-500 text-white px-3 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
}
