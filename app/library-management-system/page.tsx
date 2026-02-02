import Link from "next/link";
import {
  FaBook,
  FaUserGraduate,
  FaExchangeAlt,
  FaPlus,
  FaGithub,
} from "react-icons/fa";

const stats = [
  { label: "Total Books", value: "1,248" },
  { label: "Issued Today", value: "24" },
  { label: "Overdue", value: "7" },
  { label: "Active Members", value: "312" },
];

const books = [
  {
    title: "Introduction to Algorithms",
    author: "Cormen et al.",
    category: "Computer Science",
    status: "Available",
  },
  {
    title: "Database System Concepts",
    author: "Silberschatz et al.",
    category: "Databases",
    status: "Issued",
  },
  {
    title: "Operating System Concepts",
    author: "Silberschatz et al.",
    category: "Operating Systems",
    status: "Available",
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    category: "Programming",
    status: "Reserved",
  },
];

const transactions = [
  {
    book: "Clean Code",
    member: "Rahul Verma",
    type: "Issued",
    date: "24 Jan 2026",
  },
  {
    book: "Introduction to Algorithms",
    member: "Priya Singh",
    type: "Returned",
    date: "23 Jan 2026",
  },
  {
    book: "Database System Concepts",
    member: "Aman Kumar",
    type: "Issued",
    date: "23 Jan 2026",
  },
];

export default function LibraryManagementSystemPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <header className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-500 shadow-lg shadow-emerald-500/40">
              <FaBook className="text-2xl text-white" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">
                Library Management System
              </h1>
              <p className="text-sm text-slate-300">
                A dashboard-style mini project for managing books, members, and
                issue/return transactions.
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

        <div className="grid lg:grid-cols-[minmax(0,1.7fr),minmax(0,1.1fr)] gap-6">
          {/* Left: main dashboard */}
          <section className="space-y-6">
            {/* Stats */}
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl bg-slate-900/80 border border-slate-800 px-4 py-4 shadow-xl shadow-black/40"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 mb-2">
                    {item.label}
                  </p>
                  <p className="text-2xl font-semibold">{item.value}</p>
                </div>
              ))}
            </div>

            {/* Books & Transactions */}
            <div className="grid md:grid-cols-[minmax(0,1.5fr),minmax(0,1.2fr)] gap-4">
              {/* Books list */}
              <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-5 shadow-xl shadow-black/40">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/90">
                      <FaBook className="text-white" />
                    </div>
                    <div>
                      <h2 className="text-sm font-semibold">Books catalogue</h2>
                      <p className="text-xs text-slate-300">
                        Example records for library books.
                      </p>
                    </div>
                  </div>
                  <button className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-3 py-1.5 text-xs font-semibold text-white shadow-lg shadow-emerald-500/40 hover:bg-emerald-400">
                    <FaPlus />
                    Add book (UI)
                  </button>
                </div>

                <div className="overflow-x-auto text-sm">
                  <table className="min-w-full">
                    <thead>
                      <tr className="border-b border-slate-800 text-xs text-slate-400">
                        <th className="py-2 text-left font-medium">Title</th>
                        <th className="py-2 text-left font-medium">Author</th>
                        <th className="py-2 text-left font-medium">Category</th>
                        <th className="py-2 text-left font-medium">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {books.map((book) => (
                        <tr
                          key={book.title}
                          className="border-b border-slate-900/60 hover:bg-slate-800/60"
                        >
                          <td className="py-2 pr-3 text-slate-50">
                            {book.title}
                          </td>
                          <td className="py-2 pr-3 text-slate-200">
                            {book.author}
                          </td>
                          <td className="py-2 pr-3 text-slate-300">
                            {book.category}
                          </td>
                          <td className="py-2 text-xs">
                            <span
                              className={`inline-flex rounded-full px-2 py-0.5 ${
                                book.status === "Available"
                                  ? "bg-emerald-500/10 text-emerald-300 border border-emerald-500/40"
                                  : book.status === "Issued"
                                  ? "bg-sky-500/10 text-sky-300 border border-sky-500/40"
                                  : "bg-amber-500/10 text-amber-300 border border-amber-500/40"
                              }`}
                            >
                              {book.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Recent transactions */}
              <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-5 shadow-xl shadow-black/40">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500/90">
                    <FaExchangeAlt className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-sm font-semibold">
                      Recent transactions
                    </h2>
                    <p className="text-xs text-slate-300">
                      Issued and returned books (sample data).
                    </p>
                  </div>
                </div>

                <ul className="space-y-3 text-sm">
                  {transactions.map((tx) => (
                    <li
                      key={`${tx.book}-${tx.member}-${tx.type}`}
                      className="rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-3"
                    >
                      <p className="text-slate-50 font-medium flex items-center gap-2">
                        <FaBook className="text-emerald-300" />
                        {tx.book}
                      </p>
                      <p className="text-xs text-slate-300 mt-1 flex items-center gap-1">
                        <FaUserGraduate className="text-slate-400" />
                        {tx.member}
                      </p>
                      <div className="mt-2 flex items-center justify-between text-xs text-slate-300">
                        <span
                          className={`inline-flex rounded-full px-2 py-0.5 ${
                            tx.type === "Issued"
                              ? "bg-sky-500/10 text-sky-300 border border-sky-500/40"
                              : "bg-emerald-500/10 text-emerald-300 border border-emerald-500/40"
                          }`}
                        >
                          {tx.type}
                        </span>
                        <span>{tx.date}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Right: project details & GitHub */}
          <aside className="space-y-4">
            <section className="rounded-2xl bg-slate-900/80 border border-slate-800 p-5 shadow-xl shadow-black/40 text-sm">
              <h2 className="text-sm font-semibold mb-2">Project overview</h2>
              <p className="text-slate-300 mb-2">
                This Library Management System is a{" "}
                <span className="font-semibold text-slate-50">
                  front-end dashboard
                </span>{" "}
                demonstrating how a librarian could view key metrics, browse
                books, and track recent issue/return activity.
              </p>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>Dashboard with stats cards for books and members.</li>
                <li>Books table with status labels (Available, Issued, Reserved).</li>
                <li>Recent transactions list with members and dates.</li>
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
                    Source code link for this mini project.
                  </p>
                </div>
              </div>
              <a
                href="https://github.com/Akshaykumar199/library-management-system"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-800 px-4 py-2 text-xs font-semibold text-slate-100 hover:bg-slate-700"
              >
                <FaGithub />
                Open library-management-system repo
              </a>
              <p className="mt-2 text-[11px] text-slate-400">
                After you push the project to this repository on GitHub, visitors
                can view the full source code.
              </p>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}

