"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, subtotal, totalItems, clearCart } = useCart();
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [placing, setPlacing] = useState(false);
  const [done, setDone] = useState(false);

  if (totalItems === 0 && !done) {
    return (
      <div className="mx-auto max-w-lg px-4 py-12 text-center">
        <p className="text-lg text-gray-600">Your cart is empty.</p>
        <Link
          href="/store"
          className="mt-4 inline-block text-emerald-600 hover:underline"
        >
          Continue shopping
        </Link>
      </div>
    );
  }

  const deliveryFee = 0;
  const total = subtotal + deliveryFee;

  async function handlePlaceOrder(e: React.FormEvent) {
    e.preventDefault();
    setPlacing(true);
    await new Promise((r) => setTimeout(r, 1200));
    clearCart();
    setDone(true);
    setPlacing(false);
  }

  if (done) {
    return (
      <div className="mx-auto max-w-lg px-4 py-12 text-center">
        <div className="mb-4 text-6xl">✅</div>
        <h1 className="text-2xl font-bold text-gray-900">Order placed!</h1>
        <p className="mt-2 text-gray-600">
          We’ll deliver your order in 10–15 minutes to the address you provided.
        </p>
        <Link
          href="/store"
          className="mt-6 inline-block rounded-xl bg-emerald-600 px-6 py-3 font-medium text-white hover:bg-emerald-700"
          onClick={() => router.push("/store")}
        >
          Back to store
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-xl px-4 py-6">
      <Link href="/store/cart" className="text-sm text-emerald-600 hover:underline">
        ← Back to cart
      </Link>
      <h1 className="mt-4 text-2xl font-bold text-gray-900">Checkout</h1>

      <form onSubmit={handlePlaceOrder} className="mt-6 space-y-6">
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            Delivery address
          </label>
          <textarea
            id="address"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            rows={3}
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            placeholder="Flat, building, area, city, PIN"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone number
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            placeholder="10-digit mobile number"
          />
        </div>

        <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
          <p className="text-sm font-medium text-gray-700">
            {totalItems} item{totalItems !== 1 ? "s" : ""} • Delivery in 10–15 min
          </p>
          <p className="mt-2 text-xl font-bold text-gray-900">
            ₹{total.toLocaleString("en-IN")}
          </p>
        </div>

        <button
          type="submit"
          disabled={placing}
          className="w-full rounded-xl bg-emerald-600 py-4 text-lg font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-70"
        >
          {placing ? "Placing order…" : "Place order"}
        </button>
      </form>
    </div>
  );
}
