"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, Suspense } from "react";
import Link from "next/link";
import { searchProducts } from "@/data/store";
import ProductCard from "@/components/store/ProductCard";

function SearchContent() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q") ?? "";

  const results = useMemo(() => (q.trim() ? searchProducts(q.trim()) : []), [q]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-6">
      <Link href="/store" className="text-sm text-emerald-600 hover:underline">
        ← Store
      </Link>
      <h1 className="mt-4 text-xl font-bold text-gray-900">
        {q ? `Search: "${q}"` : "Search"}
      </h1>
      {!q.trim() ? (
        <p className="mt-4 text-gray-600">Enter a search term to find products.</p>
      ) : results.length === 0 ? (
        <p className="mt-4 text-gray-600">No products found for &quot;{q}&quot;.</p>
      ) : (
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {results.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-6xl px-4 py-6">Loading search…</div>}>
      <SearchContent />
    </Suspense>
  );
}
