"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMilkCart } from "@/context/MilkCartContext";

export default function MilkCheckoutPage() {
  const router = useRouter();
  const { totalItems, subtotal, clearCart } = useMilkCart();
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [placing, setPlacing] = useState(false);
  const [done, setDone] = useState(false);

  if (totalItems === 0 && !done) {
    return (
      <div className="mx-auto max-w-lg px-4 py-12 text-center">
        <p className="text-lg text-slate-600">Your cart is empty.</p>
        <Link href="/milk" className="mt-4 inline-block text-sky-600 hover:underline">
          Browse milk
        </Link>
      </div>
    );
  }

  const total = subtotal;

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
        <h1 className="text-2xl font-bold text-slate-900">Order placed!</h1>
        <p className="mt-2 text-slate-600">
          Your milk will be delivered fresh to the address you provided.
        </p>
        <Link
          href="/milk"
          className="mt-6 inline-block rounded-xl bg-sky-600 px-6 py-3 font-medium text-white hover:bg-sky-700"
          onClick={() => router.push("/milk")}
        >
          Back to Milk Store
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-xl px-4 py-6">
      <Link href="/milk/cart" className="text-sm text-sky-600 hover:underline">
        ← Back to cart
      </Link>
      <h1 className="mt-4 text-2xl font-bold text-slate-900">Checkout</h1>

      <form onSubmit={handlePlaceOrder} className="mt-6 space-y-6">
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-slate-700">
            Delivery address
          </label>
          <textarea
            id="address"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            rows={3}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
            placeholder="Flat, building, area, city, PIN"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
            Phone number
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
            placeholder="10-digit mobile number"
          />
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm font-medium text-slate-700">
            {totalItems} item{totalItems !== 1 ? "s" : ""}
          </p>
          <p className="mt-2 text-xl font-bold text-slate-900">
            ₹{total.toLocaleString("en-IN")}
          </p>
        </div>

        <button
          type="submit"
          disabled={placing}
          className="w-full rounded-xl bg-sky-600 py-4 text-lg font-semibold text-white transition hover:bg-sky-700 disabled:opacity-70"
        >
          {placing ? "Placing order…" : "Place order"}
        </button>
      </form>
    </div>
  );
}
