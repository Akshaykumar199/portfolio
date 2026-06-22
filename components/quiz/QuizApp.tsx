"use client";

import { useMemo, useState } from "react";
import {
  quizCategories,
  quizQuestions,
  getQuestionsByCategory,
  type QuizQuestion,
} from "@/data/quiz";
import { FaCheckCircle, FaTimesCircle, FaRedo } from "react-icons/fa";

type QuizPhase = "start" | "playing" | "finished";

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default function QuizApp() {
  const [phase, setPhase] = useState<QuizPhase>("start");
  const [category, setCategory] = useState<string>("All");
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<
    { questionId: number; correct: boolean }[]
  >([]);

  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;
  const progressPct =
    totalQuestions > 0
      ? Math.round(((currentIndex + (selectedIndex !== null ? 1 : 0)) / totalQuestions) * 100)
      : 0;

  const resultMessage = useMemo(() => {
    if (totalQuestions === 0) return "";
    const pct = Math.round((score / totalQuestions) * 100);
    if (pct === 100) return "Perfect score! Outstanding work.";
    if (pct >= 80) return "Great job! You know your stuff.";
    if (pct >= 60) return "Good effort! Keep practicing.";
    if (pct >= 40) return "Not bad — review the topics and try again.";
    return "Keep learning — every attempt makes you better.";
  }, [score, totalQuestions]);

  const startQuiz = (cat: string) => {
    const pool =
      cat === "All" ? quizQuestions : getQuestionsByCategory(cat);
    const shuffled = shuffle(pool).slice(0, Math.min(8, pool.length));
    setCategory(cat);
    setQuestions(shuffled);
    setCurrentIndex(0);
    setSelectedIndex(null);
    setScore(0);
    setAnswers([]);
    setPhase("playing");
  };

  const handleSelect = (optionIndex: number) => {
    if (selectedIndex !== null || !currentQuestion) return;

    setSelectedIndex(optionIndex);
    const isCorrect = optionIndex === currentQuestion.correctIndex;
    if (isCorrect) setScore((s) => s + 1);
    setAnswers((prev) => [
      ...prev,
      { questionId: currentQuestion.id, correct: isCorrect },
    ]);
  };

  const handleNext = () => {
    if (currentIndex + 1 >= totalQuestions) {
      setPhase("finished");
      return;
    }
    setCurrentIndex((i) => i + 1);
    setSelectedIndex(null);
  };

  const handleRestart = () => {
    setPhase("start");
    setQuestions([]);
    setCurrentIndex(0);
    setSelectedIndex(null);
    setScore(0);
    setAnswers([]);
  };

  if (phase === "start") {
    return (
      <section className="max-w-2xl mx-auto">
        <div className="rounded-2xl bg-slate-900/70 border border-slate-800 shadow-xl shadow-black/40 p-6 md:p-8">
          <h2 className="text-xl font-bold mb-2">Choose a category</h2>
          <p className="text-sm text-slate-300 mb-6">
            Test your knowledge with multiple-choice questions. Each quiz has up
            to 8 random questions.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => startQuiz("All")}
              className="rounded-xl bg-violet-600 hover:bg-violet-500 border border-violet-500/50 px-4 py-4 text-left transition-colors"
            >
              <span className="font-semibold block">All Topics</span>
              <span className="text-xs text-violet-200 mt-1">
                {quizQuestions.length} questions
              </span>
            </button>
            {quizCategories.map((cat) => {
              const count = getQuestionsByCategory(cat).length;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => startQuiz(cat)}
                  className="rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700 px-4 py-4 text-left transition-colors"
                >
                  <span className="font-semibold block">{cat}</span>
                  <span className="text-xs text-slate-400 mt-1">
                    {count} questions
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  if (phase === "finished") {
    const pct =
      totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;
    return (
      <section className="max-w-2xl mx-auto">
        <div className="rounded-2xl bg-slate-900/70 border border-slate-800 shadow-xl shadow-black/40 p-6 md:p-8 text-center">
          <h2 className="text-2xl font-bold mb-2">Quiz Complete!</h2>
          <p className="text-slate-300 text-sm mb-6">{category}</p>

          <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-violet-600 to-purple-700 shadow-lg shadow-violet-500/30 mb-6">
            <div>
              <div className="text-3xl font-bold">{pct}%</div>
              <div className="text-xs text-violet-200">
                {score}/{totalQuestions}
              </div>
            </div>
          </div>

          <p className="text-slate-200 mb-8">{resultMessage}</p>

          <div className="text-left mb-8 space-y-2 max-h-48 overflow-auto scrollbar-hide">
            {answers.map((a, i) => {
              const q = questions.find((q) => q.id === a.questionId);
              return (
                <div
                  key={i}
                  className="flex items-center gap-2 text-sm rounded-lg bg-slate-800/50 px-3 py-2"
                >
                  {a.correct ? (
                    <FaCheckCircle className="text-emerald-400 shrink-0" />
                  ) : (
                    <FaTimesCircle className="text-red-400 shrink-0" />
                  )}
                  <span className="text-slate-300 truncate">
                    Q{i + 1}: {q?.question}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            <button
              type="button"
              onClick={() => startQuiz(category)}
              className="inline-flex items-center gap-2 rounded-xl bg-violet-600 hover:bg-violet-500 px-5 py-2.5 text-sm font-semibold"
            >
              <FaRedo />
              Play again
            </button>
            <button
              type="button"
              onClick={handleRestart}
              className="rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 px-5 py-2.5 text-sm font-semibold"
            >
              Change category
            </button>
          </div>
        </div>
      </section>
    );
  }

  if (!currentQuestion) return null;

  return (
    <section className="max-w-2xl mx-auto">
      <div className="rounded-2xl bg-slate-900/70 border border-slate-800 shadow-xl shadow-black/40 p-6 md:p-8">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-medium text-violet-300 bg-violet-500/20 px-3 py-1 rounded-full">
            {currentQuestion.category}
          </span>
          <span className="text-sm text-slate-400">
            Question {currentIndex + 1} of {totalQuestions}
          </span>
        </div>

        <div className="h-2 rounded-full bg-slate-800 mb-6 overflow-hidden">
          <div
            className="h-full rounded-full bg-violet-500 transition-[width] duration-300"
            style={{ width: `${progressPct}%` }}
          />
        </div>

        <h2 className="text-lg md:text-xl font-bold mb-6">
          {currentQuestion.question}
        </h2>

        <div className="space-y-3 mb-6">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedIndex === index;
            const isCorrect = index === currentQuestion.correctIndex;
            const showResult = selectedIndex !== null;

            let btnClass =
              "w-full text-left rounded-xl border px-4 py-3 text-sm transition-colors ";
            if (!showResult) {
              btnClass +=
                "border-slate-700 bg-slate-800/50 hover:bg-slate-800 hover:border-violet-500/50";
            } else if (isCorrect) {
              btnClass += "border-emerald-500 bg-emerald-500/20 text-emerald-100";
            } else if (isSelected && !isCorrect) {
              btnClass += "border-red-500 bg-red-500/20 text-red-100";
            } else {
              btnClass += "border-slate-700 bg-slate-800/30 opacity-60";
            }

            return (
              <button
                key={index}
                type="button"
                onClick={() => handleSelect(index)}
                disabled={selectedIndex !== null}
                className={btnClass}
              >
                <span className="font-medium text-slate-400 mr-2">
                  {String.fromCharCode(65 + index)}.
                </span>
                {option}
              </button>
            );
          })}
        </div>

        {selectedIndex !== null && (
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-300">
              {selectedIndex === currentQuestion.correctIndex
                ? "Correct!"
                : `Correct answer: ${currentQuestion.options[currentQuestion.correctIndex]}`}
            </p>
            <button
              type="button"
              onClick={handleNext}
              className="rounded-xl bg-violet-600 hover:bg-violet-500 px-5 py-2 text-sm font-semibold"
            >
              {currentIndex + 1 >= totalQuestions ? "See results" : "Next"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
