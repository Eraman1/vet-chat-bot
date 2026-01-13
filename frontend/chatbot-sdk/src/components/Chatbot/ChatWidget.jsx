import { useState } from "react";
import ChatButton from "./ChatButton";
import ChatWindow from "./ChatWindow";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-5 right-5 z-[9999]">
        {open && <ChatWindow onClose={() => setOpen(false)} />}
        <ChatButton onClick={() => setOpen(true)} />
      </div>
    </>
  );
}
