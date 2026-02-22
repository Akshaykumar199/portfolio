"use client";

import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { useMilkCart } from "@/context/MilkCartContext";

export default function MilkNav() {
  const { totalItems } = useMilkCart();

  return (
    <header className="sticky top-0 z-40 bg-sky-700 text-white shadow-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3">
        <Link href="/milk" className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <span className="text-2xl">🥛</span>
          Milk Store
        </Link>
        <p className="hidden text-sm text-white/90 sm:block">Fresh milk delivered daily</p>
        <Link
          href="/milk/cart"
          className="relative flex items-center justify-center rounded-full bg-white/20 p-2.5 transition hover:bg-white/30"
          aria-label="Cart"
        >
          <FiShoppingCart className="text-xl" />
          {totalItems > 0 && (
            <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-amber-400 text-xs font-bold text-slate-900">
              {totalItems > 99 ? "99+" : totalItems}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
