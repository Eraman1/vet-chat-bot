import React, { useState } from "react";

export default function InputBox({ onSend, disabled }) {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;
    onSend(text);
    setText("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Ask about your pet..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyPress}
        disabled={disabled}
        style={styles.input}
      />
      <button onClick={handleSend} disabled={disabled} style={styles.button}>
        Send
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    borderTop: "1px solid #ddd",
    padding: "8px",
    gap: "6px",
  },
  input: {
    flex: 1,
    padding: "8px",
    fontSize: "14px",
  },
  button: {
    padding: "8px 12px",
    cursor: "pointer",
  },
};
