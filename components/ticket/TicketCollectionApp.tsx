"use client";

import { useEffect, useMemo, useState } from "react";
import { FaTrash } from "react-icons/fa";

type DailyEntry = {
  date: string; // YYYY-MM-DD (local date)
  amount: number; // in INR
};

type PersistedState = {
  goal: number;
  entries: DailyEntry[];
  version: 1;
};

const STORAGE_KEY = "trainTicketCollection:v1";

function getLocalISODate(d: Date) {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatINR(amount: number) {
  const value = Number.isFinite(amount) ? amount : 0;
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

function parsePositiveNumber(value: string) {
  const n = Number(value);
  if (!Number.isFinite(n) || n <= 0) return null;
  return n;
}

export default function TicketCollectionApp() {
  const [isLoaded, setIsLoaded] = useState(false);

  const [goal, setGoal] = useState<number>(1000);
  const [goalInput, setGoalInput] = useState<string>("1000");

  const [amountInput, setAmountInput] = useState<string>("");
  const [dateInput, setDateInput] = useState<string>(
    getLocalISODate(new Date())
  );

  const [entries, setEntries] = useState<DailyEntry[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        setIsLoaded(true);
        return;
      }

      const parsed: PersistedState = JSON.parse(raw);
      if (!parsed || parsed.version !== 1) {
        setIsLoaded(true);
        return;
      }

      if (Number.isFinite(parsed.goal) && parsed.goal > 0) {
        setGoal(parsed.goal);
        setGoalInput(String(parsed.goal));
      }

      if (Array.isArray(parsed.entries)) {
        const cleaned = parsed.entries
          .filter(
            (e) =>
              typeof e?.date === "string" &&
              typeof e?.amount === "number" &&
              Number.isFinite(e.amount) &&
              e.amount > 0
          )
          .map((e) => ({ date: e.date, amount: e.amount }));

        setEntries(cleaned);
      }
    } catch {
      // Ignore corrupted localStorage.
    } finally {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    try {
      const next: PersistedState = { goal, entries, version: 1 };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // If storage is full / blocked, keep app usable in-memory.
    }
  }, [entries, goal, isLoaded]);

  const totals = useMemo(() => {
    const totalCollected = entries.reduce((sum, e) => sum + e.amount, 0);
    const remaining = Math.max(0, goal - totalCollected);
    const progressPct =
      goal > 0 ? Math.min(100, Math.round((totalCollected / goal) * 100)) : 0;
    return { totalCollected, remaining, progressPct };
  }, [entries, goal]);

  const todayEntry = useMemo(
    () => entries.find((e) => e.date === dateInput)?.amount ?? 0,
    [entries, dateInput]
  );

  const sortedEntries = useMemo(() => {
    return [...entries].sort((a, b) => (a.date < b.date ? 1 : -1));
  }, [entries]);

  const handleSetGoal = () => {
    const next = parsePositiveNumber(goalInput);
    if (next === null) return;
    setGoal(Math.round(next));
  };

  const handleAddDaily = () => {
    const amount = parsePositiveNumber(amountInput);
    if (amount === null) return;

    setEntries((prev) => {
      const idx = prev.findIndex((e) => e.date === dateInput);
      if (idx === -1) {
        return [...prev, { date: dateInput, amount: Math.round(amount) }];
      }
      const next = [...prev];
      next[idx] = {
        ...next[idx],
        amount: next[idx].amount + Math.round(amount),
      };
      return next;
    });

    setAmountInput("");
  };

  const handleDeleteEntry = (date: string) => {
    setEntries((prev) => prev.filter((e) => e.date !== date));
  };

  const handleReset = () => {
    const ok = window.confirm(
      "Reset all daily collection entries and goal for this demo?"
    );
    if (!ok) return;
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    setGoal(1000);
    setGoalInput("1000");
    setEntries([]);
    setAmountInput("");
    setDateInput(getLocalISODate(new Date()));
  };

  const progressWidth = `${totals.progressPct}%`;

  return (
    <section className="relative">
      <div className="grid gap-6 md:grid-cols-[minmax(0,1.1fr),minmax(0,0.9fr)]">
        {/* Form */}
        <div className="rounded-2xl bg-slate-900/70 border border-slate-800 shadow-xl shadow-black/40 p-5">
          <div className="mb-5">
            <h2 className="text-lg font-bold mb-1">Daily collection</h2>
            <p className="text-sm text-slate-300">
              Add money every day until you reach your train ticket goal.
            </p>
          </div>

          <div className="space-y-4">
            <div className="rounded-xl bg-slate-800/40 border border-slate-700 p-4">
              <label className="text-xs text-slate-300 block mb-2">
                Train ticket goal
              </label>
              <div className="flex gap-3 items-center">
                <input
                  type="number"
                  inputMode="numeric"
                  min={1}
                  step={1}
                  value={goalInput}
                  onChange={(e) => setGoalInput(e.target.value)}
                  className="flex-1 rounded-xl bg-slate-900/70 border border-slate-700 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  placeholder="e.g. 1500"
                />
                <button
                  type="button"
                  onClick={handleSetGoal}
                  className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-500/40 hover:bg-emerald-400 disabled:opacity-50"
                  disabled={parsePositiveNumber(goalInput) === null}
                  aria-label="Set ticket goal"
                >
                  Set
                </button>
              </div>

              <p className="text-[11px] text-slate-400 mt-2">
                Current goal: <span className="text-slate-200">{formatINR(goal)}</span>
              </p>
            </div>

            <div className="rounded-xl bg-slate-800/40 border border-slate-700 p-4">
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs text-slate-300">
                  Add today’s collection
                </label>
                <span className="text-[11px] text-slate-400">
                  Today already:{" "}
                  <span className="text-slate-200">{formatINR(todayEntry)}</span>
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input
                  type="date"
                  value={dateInput}
                  onChange={(e) => setDateInput(e.target.value)}
                  className="rounded-xl bg-slate-900/70 border border-slate-700 px-3 py-2 text-sm text-slate-50 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
                <input
                  type="number"
                  inputMode="numeric"
                  min={1}
                  step={1}
                  value={amountInput}
                  onChange={(e) => setAmountInput(e.target.value)}
                  className="rounded-xl bg-slate-900/70 border border-slate-700 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  placeholder="Amount (₹)"
                />
                <button
                  type="button"
                  onClick={handleAddDaily}
                  disabled={parsePositiveNumber(amountInput) === null}
                  className="rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-500/40 hover:bg-emerald-400 disabled:opacity-50"
                >
                  Add
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="w-full rounded-xl bg-slate-800/40 border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-slate-800/60"
            >
              Reset demo data
            </button>
          </div>
        </div>

        {/* Summary */}
        <div className="rounded-2xl bg-slate-900/70 border border-slate-800 shadow-xl shadow-black/40 p-5">
          <div className="mb-5">
            <h2 className="text-lg font-bold mb-1">Progress</h2>
            <p className="text-sm text-slate-300">
              Keep saving daily. This updates automatically.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="rounded-xl bg-slate-800/40 border border-slate-700 p-3">
              <div className="text-[11px] text-slate-400">Collected</div>
              <div className="text-sm font-bold text-slate-50">
                {formatINR(totals.totalCollected)}
              </div>
            </div>
            <div className="rounded-xl bg-slate-800/40 border border-slate-700 p-3">
              <div className="text-[11px] text-slate-400">Remaining</div>
              <div className="text-sm font-bold text-slate-50">
                {formatINR(totals.remaining)}
              </div>
            </div>
            <div className="rounded-xl bg-slate-800/40 border border-slate-700 p-3">
              <div className="text-[11px] text-slate-400">Progress</div>
              <div className="text-sm font-bold text-slate-50">
                {totals.progressPct}%
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-slate-800/40 border border-slate-700 p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="text-xs text-slate-300">Goal bar</div>
              <div className="text-xs text-slate-200">
                {totals.totalCollected >= goal ? "Goal achieved" : "Keep going"}
              </div>
            </div>
            <div className="h-3 rounded-full bg-slate-800 overflow-hidden">
              <div
                className="h-full rounded-full bg-emerald-500 transition-[width] duration-300"
                style={{ width: progressWidth }}
              />
            </div>
            <p className="text-[11px] text-slate-400 mt-2">
              {formatINR(totals.totalCollected)} collected out of{" "}
              {formatINR(goal)}.
            </p>
          </div>

          <div className="mt-5">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-semibold text-slate-100">
                Daily history
              </h3>
              <span className="text-[11px] text-slate-400">
                {entries.length} day{entries.length === 1 ? "" : "s"}
              </span>
            </div>

            <div className="space-y-2 max-h-[320px] overflow-auto pr-1 scrollbar-hide">
              {sortedEntries.length === 0 ? (
                <div className="rounded-xl bg-slate-800/40 border border-slate-700 p-4 text-sm text-slate-300">
                  No entries yet. Add your first daily collection on the left.
                </div>
              ) : (
                sortedEntries.map((e) => {
                  const prettyDate = new Date(`${e.date}T00:00:00`).toLocaleDateString(
                    "en-IN",
                    { day: "2-digit", month: "short", year: "numeric" }
                  );
                  return (
                    <div
                      key={e.date}
                      className="flex items-center justify-between gap-3 rounded-xl bg-slate-800/40 border border-slate-700 p-3"
                    >
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-slate-50 truncate">
                          {prettyDate}
                        </div>
                        <div className="text-[11px] text-slate-400">
                          Saved amount
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-sm font-bold text-emerald-200">
                          {formatINR(e.amount)}
                        </div>
                        <button
                          type="button"
                          onClick={() => handleDeleteEntry(e.date)}
                          className="inline-flex items-center justify-center rounded-lg bg-slate-900/50 border border-slate-700 h-9 w-9 text-slate-200 hover:bg-slate-900/70"
                          aria-label={`Delete entry for ${e.date}`}
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            <div className="mt-4 text-[11px] text-slate-400">
              {isLoaded
                ? "Data is saved in your browser (localStorage)."
                : "Loading saved data…"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

