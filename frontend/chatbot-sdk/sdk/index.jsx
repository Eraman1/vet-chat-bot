import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import ChatWidget from "../src/components/Chatbot/ChatWidget";

function initVetChatbot() {
  let container = document.getElementById("vet-chatbot-root");

  if (!container) {
    container = document.createElement("div");
    container.id = "vet-chatbot-root";
    document.body.appendChild(container);
  }

  createRoot(container).render(<ChatWidget />);
}

window.VetChatbot = { init: initVetChatbot };

// auto-init
initVetChatbot();
