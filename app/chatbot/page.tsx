"use client";

import { useState } from "react";
import Link from "next/link";
import { FaRobot, FaUser, FaGithub } from "react-icons/fa";

type Message = {
  id: number;
  sender: "user" | "bot";
  text: string;
};

const initialMessages: Message[] = [
  {
    id: 1,
    sender: "bot",
    text: "Hi, I'm Akshay's portfolio chatbot 👋 Ask me about his skills, projects, or education.",
  },
];

function getBotReply(input: string): string {
  const text = input.toLowerCase().trim();

  if (!text) return "Please type a message so I can help you 🙂";

  if (text.includes("hello") || text.includes("hi") || text.includes("hey")) {
    return "Hello! You can ask me about Akshay's skills, projects (Chatbot, YouTube Management, Library Management), or education.";
  }

  if (text.includes("skill") || text.includes("tech") || text.includes("technology")) {
    return "Akshay works with C, C++, HTML, CSS, JavaScript, DBMS, SQL, and Data Structures & Algorithms.";
  }

  if (text.includes("project")) {
    return "Akshay has built a Chatbot, a YouTube Management System dashboard, and a Library Management System demonstrating CRUD and database concepts.";
  }

  if (text.includes("education") || text.includes("college") || text.includes("study")) {
    return "Akshay is pursuing B.Tech in Electronics & Communications Engineering at Subharti Institute of Technology and Engineering, Meerut (around 70% till 7th semester).";
  }

  if (text.includes("contact") || text.includes("email")) {
    return "You can contact Akshay at Akshaykumar74570@gmail.com or through the contact form on the main portfolio page.";
  }

  if (text.includes("github")) {
    return "Akshay's GitHub profile is at github.com/Akshaykumar199 where you can explore all his projects.";
  }

  return "That's interesting! I'm a simple rule-based chatbot for the portfolio. Try asking about skills, projects, education, or GitHub.";
}

export default function ChatbotPage() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [nextId, setNextId] = useState(2);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMessage: Message = {
      id: nextId,
      sender: "user",
      text: trimmed,
    };

    const botMessage: Message = {
      id: nextId + 1,
      sender: "bot",
      text: getBotReply(trimmed),
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setNextId((prev) => prev + 2);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <header className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-500 shadow-lg shadow-emerald-500/40">
              <FaRobot className="text-2xl text-white" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">
                Portfolio Chatbot
              </h1>
              <p className="text-sm text-slate-300">
                A simple rule-based chatbot built for Akshay&apos;s portfolio using
                React hooks and Next.js.
              </p>
            </div>
          </div>
          <Link
            href="/"
            className="text-sm text-slate-300 hover:text-white underline-offset-4 hover:underline"
          >
            ← Back to portfolio
          </Link>
        </header>

        <div className="grid lg:grid-cols-[minmax(0,1.4fr),minmax(0,1fr)] gap-6">
          {/* Chat window */}
          <section className="rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl shadow-black/40 flex flex-col min-h-[420px]">
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800">
              <div>
                <h2 className="text-sm font-semibold flex items-center gap-2">
                  <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  Chat with the assistant
                </h2>
                <p className="text-xs text-slate-400">
                  Ask about skills, projects, education, or GitHub.
                </p>
              </div>
              <span className="text-[11px] rounded-full bg-slate-800 px-3 py-1 text-slate-300 border border-slate-700">
                Demo only · no backend
              </span>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm ${
                      msg.sender === "user"
                        ? "bg-emerald-500 text-white rounded-br-sm"
                        : "bg-slate-800 text-slate-50 rounded-bl-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="px-5 py-4 border-t border-slate-800 flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a message…"
                className="flex-1 rounded-xl bg-slate-900/80 border border-slate-700 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
              <button
                type="button"
                onClick={handleSend}
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-500/40 hover:bg-emerald-400"
              >
                Send
              </button>
            </div>
          </section>

          {/* Project details / GitHub link */}
          <aside className="space-y-4">
            <section className="rounded-2xl bg-slate-900/80 border border-slate-800 p-5 shadow-xl shadow-black/40 text-sm">
              <h2 className="text-sm font-semibold mb-2">Project overview</h2>
              <p className="text-slate-300 mb-2">
                This chatbot is a{" "}
                <span className="font-semibold text-slate-50">
                  front-end project
                </span>{" "}
                built with React hooks in a Next.js app. It demonstrates UI
                state management, message rendering, and simple rule-based
                responses.
              </p>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>Rule-based responses based on user queries</li>
                <li>Conversation history managed in component state</li>
                <li>Clean, responsive chat UI with dark theme</li>
              </ul>
            </section>

            <section className="rounded-2xl bg-slate-900/80 border border-slate-800 p-5 shadow-xl shadow-black/40 text-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-800">
                  <FaGithub className="text-lg text-slate-100" />
                </div>
                <div>
                  <h2 className="text-sm font-semibold">GitHub repository</h2>
                  <p className="text-xs text-slate-300">
                    Link this demo to a public repo on your GitHub.
                  </p>
                </div>
              </div>
              <a
                href="https://github.com/Akshaykumar199/chatbot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-800 px-4 py-2 text-xs font-semibold text-slate-100 hover:bg-slate-700"
              >
                <FaGithub />
                Open chatbot repo on GitHub
              </a>
              <p className="mt-2 text-[11px] text-slate-400">
                After you push the code to this repository, visitors will be
                able to view the full source for this chatbot project.
              </p>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}

