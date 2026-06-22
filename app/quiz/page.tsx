import Link from "next/link";
import QuizApp from "@/components/quiz/QuizApp";

export default function QuizPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <header className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-violet-600 shadow-lg shadow-violet-500/40">
              <span className="text-lg font-bold">?</span>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Tech Quiz App</h1>
              <p className="text-sm text-slate-300">
                Test your programming knowledge with interactive multiple-choice
                quizzes.
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

        <QuizApp />
      </div>
    </main>
  );
}
