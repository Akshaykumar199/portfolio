import Link from "next/link";
import { FaYoutube, FaVideo, FaListUl, FaChartBar, FaUpload } from "react-icons/fa";

const stats = [
  { label: "Total Videos", value: "128", change: "+12 this month" },
  { label: "Total Views", value: "1.2M", change: "+45K this month" },
  { label: "Subscribers", value: "8.4K", change: "+520 this month" },
  { label: "Watch Time", value: "3.1K hrs", change: "+210 hrs this month" },
];

const videos = [
  {
    title: "Introduction to Data Structures in C++",
    status: "Published",
    visibility: "Public",
    views: "24,532",
    date: "Jan 10, 2026",
  },
  {
    title: "Build a YouTube Management System (Full Walkthrough)",
    status: "Scheduled",
    visibility: "Public",
    views: "—",
    date: "Jan 30, 2026",
  },
  {
    title: "SQL Basics for Beginners",
    status: "Published",
    visibility: "Unlisted",
    views: "9,104",
    date: "Dec 18, 2025",
  },
  {
    title: "Library Management System in C++",
    status: "Draft",
    visibility: "Private",
    views: "—",
    date: "—",
  },
];

const playlists = [
  {
    name: "Data Structures & Algorithms",
    videos: 18,
    visibility: "Public",
  },
  {
    name: "C++ Projects",
    videos: 9,
    visibility: "Public",
  },
  {
    name: "Database & SQL",
    videos: 7,
    visibility: "Unlisted",
  },
];

export default function YouTubeManagementSystemPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <header className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-red-600 shadow-lg shadow-red-500/40">
              <FaYoutube className="text-2xl text-white" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">
                YouTube Management System
              </h1>
              <p className="text-sm text-slate-300">
                A dashboard-style project for managing videos, playlists, and channel
                analytics.
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

        {/* Layout */}
        <div className="grid lg:grid-cols-[260px,1fr] gap-6">
          {/* Sidebar */}
          <aside className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 space-y-4 shadow-xl shadow-black/40">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Navigation
            </p>
            <nav className="space-y-1 text-sm">
              <button className="flex w-full items-center justify-between rounded-lg px-3 py-2 bg-slate-800 text-slate-50">
                <span className="flex items-center gap-2">
                  <FaChartBar className="text-sky-400" />
                  Overview
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-300 border border-sky-500/40">
                  Active
                </span>
              </button>
              <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2 hover:bg-slate-800/80 text-slate-200">
                <FaVideo className="text-rose-300" />
                Videos
              </button>
              <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2 hover:bg-slate-800/80 text-slate-200">
                <FaListUl className="text-emerald-300" />
                Playlists
              </button>
            </nav>
            <div className="pt-4 border-t border-slate-800 space-y-2 text-xs text-slate-400">
              <p>
                This is a{" "}
                <span className="text-slate-100 font-semibold">
                  front-end only
                </span>{" "}
                demo built with Next.js and Tailwind CSS.
              </p>
            </div>
          </aside>

          {/* Main content */}
          <div className="space-y-6">
            {/* Stats */}
            <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-900/60 border border-slate-800 px-4 py-4 shadow-xl shadow-black/40"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 mb-2">
                    {item.label}
                  </p>
                  <p className="text-2xl font-semibold mb-1">{item.value}</p>
                  <p className="text-xs text-emerald-300">{item.change}</p>
                </div>
              ))}
            </section>

            {/* Upload and playlists */}
            <section className="grid lg:grid-cols-[minmax(0,2fr),minmax(0,1.2fr)] gap-4">
              {/* Upload panel */}
              <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-5 shadow-xl shadow-black/40">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-600/90">
                    <FaUpload className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-sm font-semibold">Quick upload</h2>
                    <p className="text-xs text-slate-300">
                      Prototype of an upload form (UI only).
                    </p>
                  </div>
                </div>

                <form className="space-y-3 text-sm">
                  <div className="grid md:grid-cols-2 gap-3">
                    <div>
                      <label className="block mb-1 text-slate-300">
                        Video title
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Learn SQL in 20 minutes"
                        className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                      />
                    </div>
                    <div>
                      <label className="block mb-1 text-slate-300">
                        Visibility
                      </label>
                      <select className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-50 focus:outline-none focus:ring-1 focus:ring-sky-500">
                        <option>Public</option>
                        <option>Private</option>
                        <option>Unlisted</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block mb-1 text-slate-300">
                      Description
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Short description of your video..."
                      className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                    />
                  </div>

                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-sky-500/40 hover:bg-sky-500 transition-colors"
                  >
                    <FaUpload />
                    Simulate upload
                  </button>

                  <p className="text-[11px] text-slate-400">
                    In a real application, this would send the video metadata to a
                    backend API and handle file uploads, status, and progress.
                  </p>
                </form>
              </div>

              {/* Playlists */}
              <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-5 shadow-xl shadow-black/40">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-sm font-semibold">Playlists</h2>
                    <p className="text-xs text-slate-300">
                      Organized collections of videos.
                    </p>
                  </div>
                  <span className="rounded-full bg-slate-800 px-3 py-1 text-[11px] text-slate-300 border border-slate-700">
                    {playlists.length} total
                  </span>
                </div>

                <div className="space-y-3 text-sm">
                  {playlists.map((playlist) => (
                    <div
                      key={playlist.name}
                      className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-3 hover:border-sky-600/60 transition-colors"
                    >
                      <div>
                        <p className="font-medium text-slate-50">
                          {playlist.name}
                        </p>
                        <p className="text-xs text-slate-400">
                          {playlist.videos} videos · {playlist.visibility}
                        </p>
                      </div>
                      <button className="text-xs rounded-full bg-slate-800 px-3 py-1 text-slate-200 hover:bg-slate-700">
                        View details
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Videos table */}
            <section className="rounded-2xl bg-slate-900/80 border border-slate-800 p-5 shadow-xl shadow-black/40">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-sm font-semibold">Recent videos</h2>
                  <p className="text-xs text-slate-300">
                    Example data to showcase how the management table looks.
                  </p>
                </div>
                <div className="flex gap-2 text-[11px] text-slate-300">
                  <span className="rounded-full bg-slate-800 px-2 py-1 border border-slate-700">
                    Status
                  </span>
                  <span className="rounded-full bg-slate-800 px-2 py-1 border border-slate-700">
                    Visibility
                  </span>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-800 text-xs text-slate-400">
                      <th className="py-2 text-left font-medium">Title</th>
                      <th className="py-2 text-left font-medium">Status</th>
                      <th className="py-2 text-left font-medium">Visibility</th>
                      <th className="py-2 text-right font-medium">Views</th>
                      <th className="py-2 text-right font-medium">Last updated</th>
                    </tr>
                  </thead>
                  <tbody>
                    {videos.map((video) => (
                      <tr
                        key={video.title}
                        className="border-b border-slate-900/60 hover:bg-slate-800/60"
                      >
                        <td className="py-2 pr-4">
                          <p className="font-medium text-slate-50">
                            {video.title}
                          </p>
                        </td>
                        <td className="py-2 pr-4">
                          <span
                            className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] ${
                              video.status === "Published"
                                ? "bg-emerald-500/10 text-emerald-300 border border-emerald-500/40"
                                : video.status === "Scheduled"
                                ? "bg-sky-500/10 text-sky-300 border border-sky-500/40"
                                : "bg-slate-700/60 text-slate-200 border border-slate-500/60"
                            }`}
                          >
                            {video.status}
                          </span>
                        </td>
                        <td className="py-2 pr-4">
                          <span className="text-xs text-slate-200">
                            {video.visibility}
                          </span>
                        </td>
                        <td className="py-2 pr-4 text-right text-slate-100">
                          {video.views}
                        </td>
                        <td className="py-2 text-right text-xs text-slate-300">
                          {video.date}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

