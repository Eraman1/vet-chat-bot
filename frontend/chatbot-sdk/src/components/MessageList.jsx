import React, { useEffect, useRef } from "react";

export default function MessageList({ messages, loading }) {
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  return (
    <div style={styles.container}>
      {messages.map((msg, index) => (
        <div
          key={index}
          style={{
            ...styles.message,
            alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
            background: msg.role === "user" ? "#DCF8C6" : "#F1F1F1",
          }}
        >
          {msg.content}
        </div>
      ))}

      {loading && <div style={styles.loading}>Typing...</div>}

      <div ref={endRef} />
    </div>
  );
}

const styles = {
  container: {
    flex: 1,
    padding: "10px",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  message: {
    maxWidth: "75%",
    padding: "8px 10px",
    borderRadius: "6px",
    fontSize: "14px",
  },
  loading: {
    fontSize: "12px",
    color: "#666",
  },
};
