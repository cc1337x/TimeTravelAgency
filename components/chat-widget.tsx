"use client";

import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const quickPrompts = [
  "Quelle destination pour un week-end ?",
  "Je veux éviter les risques",
  "Itinéraire 3 jours à Florence 1504",
];

const mockResponses: Record<string, string> = {
  default:
    "Bonjour ! Je suis votre agent IA spécialisé en voyages temporels. Comment puis-je vous aider à planifier votre prochaine aventure à travers le temps ?",
  weekend:
    "Pour un week-end, je vous recommande Florence 1504 ! C'est la durée idéale pour découvrir les chefs-d'œuvre de la Renaissance et l'atmosphère unique de cette époque. Le risque est modéré et l'expérience culturelle incomparable.",
  risques:
    "Si vous souhaitez minimiser les risques, Paris 1889 est votre destination idéale. C'est notre destination la plus sûre avec un niveau de risque faible. Vous pourrez profiter de l'Exposition Universelle et de l'inauguration de la Tour Eiffel en toute sérénité.",
  florence:
    "Excellent choix ! Pour 3 jours à Florence 1504, je vous propose : Jour 1 - Visite de l'atelier de Michel-Ange et du Duomo. Jour 2 - Exploration du Palazzo Vecchio et rencontre avec les artisans locaux. Jour 3 - Promenade sur le Ponte Vecchio et visite des galeries d'art. Souhaitez-vous que je réserve cette expérience ?",
};

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", role: "assistant", content: mockResponses.default },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOpen = (event: CustomEvent<{ message?: string }>) => {
      setIsOpen(true);
      if (event.detail?.message) {
        handleSendMessage(event.detail.message);
      }
    };

    window.addEventListener("openChatWidget", handleOpen as EventListener);
    return () =>
      window.removeEventListener("openChatWidget", handleOpen as EventListener);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: text,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Mock response logic
    setTimeout(() => {
      let response = mockResponses.default;
      const lowerText = text.toLowerCase();

      if (lowerText.includes("week-end") || lowerText.includes("weekend")) {
        response = mockResponses.weekend;
      } else if (
        lowerText.includes("risque") ||
        lowerText.includes("sécurité") ||
        lowerText.includes("éviter")
      ) {
        response = mockResponses.risques;
      } else if (
        lowerText.includes("florence") ||
        lowerText.includes("itinéraire")
      ) {
        response = mockResponses.florence;
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: response,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    }, 800);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-gold-light transition-all duration-300 flex items-center justify-center",
          "hover:scale-110 active:scale-95",
          isOpen && "opacity-0 pointer-events-none"
        )}
        aria-label="Ouvrir le chat"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chat Panel */}
      <div
        className={cn(
          "fixed z-50 bg-card border border-border shadow-2xl transition-all duration-300 flex flex-col",
          // Mobile: full screen
          "inset-0 md:inset-auto",
          // Desktop: slide-over panel
          "md:bottom-6 md:right-6 md:w-96 md:h-[600px] md:max-h-[80vh] md:rounded-2xl",
          isOpen
            ? "opacity-100 translate-y-0 md:translate-x-0"
            : "opacity-0 translate-y-full md:translate-y-0 md:translate-x-full pointer-events-none"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Agent IA</h3>
              <p className="text-xs text-muted-foreground">
                Spécialiste voyages temporels
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-secondary rounded-lg transition-colors text-foreground"
            aria-label="Fermer le chat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "max-w-[85%] p-3 rounded-2xl",
                message.role === "user"
                  ? "ml-auto bg-primary text-primary-foreground rounded-br-md"
                  : "bg-secondary text-secondary-foreground rounded-bl-md"
              )}
            >
              <p className="text-sm leading-relaxed">{message.content}</p>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Prompts */}
        <div className="px-4 pb-2">
          <div className="flex flex-wrap gap-2">
            {quickPrompts.map((prompt) => (
              <button
                key={prompt}
                type="button"
                onClick={() => handleSendMessage(prompt)}
                className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground hover:bg-muted transition-colors"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="p-4 border-t border-border">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage(input);
            }}
            className="flex gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Posez votre question..."
              className="flex-1 px-4 py-2 bg-input border border-border rounded-full text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button
              type="submit"
              size="icon"
              className="rounded-full bg-primary text-primary-foreground hover:bg-gold-light"
            >
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
