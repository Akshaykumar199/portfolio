"use client";

import Link from "next/link";
import Image from "next/image";
import { useMilkCart } from "@/context/MilkCartContext";
import { FiTrash2 } from "react-icons/fi";

export default function MilkCartPage() {
  const { items, removeItem, updateQuantity, subtotal, totalItems, clearCart } = useMilkCart();

  if (totalItems === 0) {
    return (
      <div className="mx-auto max-w-lg px-4 py-12 text-center">
        <p className="text-lg text-slate-600">Your cart is empty.</p>
        <Link
          href="/milk"
          className="mt-4 inline-block rounded-xl bg-sky-600 px-6 py-3 font-medium text-white hover:bg-sky-700"
        >
          Browse milk
        </Link>
      </div>
    );
  }

  const deliveryFee = 0;
  const total = subtotal + deliveryFee;

  return (
    <div className="mx-auto max-w-2xl px-4 py-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-900">Cart ({totalItems} items)</h1>
        <button
          type="button"
          onClick={clearCart}
          className="text-sm text-red-600 hover:underline"
        >
          Clear cart
        </button>
      </div>

      <ul className="space-y-4">
        {items.map(({ product, quantity }) => (
          <li
            key={product.id}
            className="flex gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
          >
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-slate-100">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="80px"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-medium text-slate-900">{product.name}</p>
              <p className="text-sm text-slate-500">{product.unit} • {product.variety}</p>
              <div className="mt-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => updateQuantity(product.id, quantity - 1)}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 text-slate-600 hover:bg-slate-100"
                  >
                    −
                  </button>
                  <span className="min-w-[1.5rem] text-center font-medium">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => updateQuantity(product.id, quantity + 1)}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 text-slate-600 hover:bg-slate-100"
                  >
                    +
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-900">
                    ₹{(product.price * quantity).toLocaleString("en-IN")}
                  </span>
                  <button
                    type="button"
                    onClick={() => removeItem(product.id)}
                    className="rounded p-1 text-slate-400 hover:bg-red-50 hover:text-red-600"
                    aria-label="Remove"
                  >
                    <FiTrash2 className="text-lg" />
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex justify-between text-slate-600">
          <span>Subtotal</span>
          <span>₹{subtotal.toLocaleString("en-IN")}</span>
        </div>
        <div className="mt-2 flex justify-between text-slate-600">
          <span>Delivery</span>
          <span>Free</span>
        </div>
        <div className="mt-4 flex justify-between border-t border-slate-200 pt-4 text-lg font-bold">
          <span>Total</span>
          <span>₹{total.toLocaleString("en-IN")}</span>
        </div>
      </div>

      <Link
        href="/milk/checkout"
        className="mt-6 flex w-full items-center justify-center rounded-xl bg-sky-600 py-4 text-lg font-semibold text-white transition hover:bg-sky-700"
      >
        Proceed to checkout
      </Link>
    </div>
  );
}
