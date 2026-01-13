import { MessageCircle } from "lucide-react";

export default function ChatButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 w-14 h-14 rounded-full 
                 bg-emerald-500 hover:bg-emerald-600 
                 text-white shadow-lg 
                 flex items-center justify-center"
    >
      <MessageCircle size={26} />
    </button>
  );
}
