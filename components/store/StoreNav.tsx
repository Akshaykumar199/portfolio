"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FiShoppingCart, FiMapPin, FiMenu, FiSearch } from "react-icons/fi";
import { useCart } from "@/context/CartContext";

export default function StoreNav() {
  const pathname = usePathname();
  const router = useRouter();
  const { totalItems } = useCart();
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) router.push(`/store/search?q=${encodeURIComponent(search.trim())}`);
  };

  return (
    <header className="sticky top-0 z-40 bg-emerald-600 text-white shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link href="/store" className="flex shrink-0 items-center gap-2 font-bold text-xl tracking-tight">
          <span className="rounded-lg bg-white/20 px-2 py-0.5 text-sm font-black">QC</span>
          QuickCart
        </Link>

        <form onSubmit={handleSearch} className="flex flex-1 max-w-md">
          <div className="flex w-full items-center rounded-full bg-white/20 px-3 py-2 text-sm">
            <FiSearch className="mr-2 shrink-0 text-lg opacity-80" />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="w-full min-w-0 bg-transparent placeholder:text-white/80 focus:outline-none"
            />
          </div>
        </form>

        <div className="flex items-center gap-2">
          <Link
            href="/store/cart"
            className="relative flex items-center justify-center rounded-full bg-white/20 p-2.5 transition hover:bg-white/30"
            aria-label="Cart"
          >
            <FiShoppingCart className="text-xl" />
            {totalItems > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-gray-900">
                {totalItems > 99 ? "99+" : totalItems}
              </span>
            )}
          </Link>
          <button
            type="button"
            className="rounded-full bg-white/20 p-2.5 transition hover:bg-white/30 md:hidden"
            aria-label="Menu"
          >
            <FiMenu className="text-xl" />
          </button>
        </div>
      </div>
    </header>
  );
}
