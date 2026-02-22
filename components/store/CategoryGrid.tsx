import Link from "next/link";
import { categories } from "@/data/store";

export default function CategoryGrid() {
  return (
    <section className="border-b border-gray-200 bg-white px-4 py-4">
      <h2 className="mb-3 text-lg font-semibold text-gray-800">Shop by category</h2>
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`/store/category/${cat.slug}`}
            className="flex shrink-0 flex-col items-center gap-1.5 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 transition hover:border-emerald-400 hover:bg-emerald-50"
          >
            <span className="text-2xl">{cat.icon}</span>
            <span className="max-w-[72px] truncate text-center text-xs font-medium text-gray-700">
              {cat.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
