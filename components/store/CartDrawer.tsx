"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const { totalItems, subtotal } = useCart();

  if (totalItems === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 border-t border-gray-200 bg-white p-4 shadow-lg md:hidden">
      <Link
        href="/store/cart"
        className="flex items-center justify-between rounded-xl bg-emerald-600 px-6 py-3 text-white shadow-lg transition hover:bg-emerald-700 md:inline-flex md:rounded-full"
      >
        <span className="font-semibold">
          View cart • {totalItems} item{totalItems !== 1 ? "s" : ""}
        </span>
        <span className="font-bold">₹{subtotal.toLocaleString("en-IN")}</span>
      </Link>
    </div>
  );
}
