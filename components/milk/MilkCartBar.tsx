"use client";

import Link from "next/link";
import { useMilkCart } from "@/context/MilkCartContext";

export default function MilkCartBar() {
  const { totalItems, subtotal } = useMilkCart();

  if (totalItems === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 border-t border-slate-200 bg-white p-4 shadow-lg md:hidden">
      <Link
        href="/milk/cart"
        className="flex items-center justify-between rounded-xl bg-sky-600 px-6 py-3 text-white shadow-lg transition hover:bg-sky-700"
      >
        <span className="font-semibold">
          View cart • {totalItems} item{totalItems !== 1 ? "s" : ""}
        </span>
        <span className="font-bold">₹{subtotal.toLocaleString("en-IN")}</span>
      </Link>
    </div>
  );
}
