"use client";

import { FiPlus, FiMinus } from "react-icons/fi";
import type { Product } from "@/data/store";
import { useCart } from "@/context/CartContext";

type Props = { product: Product };

export default function AddToCart({ product }: Props) {
  const { addItem, updateQuantity, items } = useCart();
  const inCart = items.find((i) => i.product.id === product.id);
  const qty = inCart?.quantity ?? 0;

  if (qty > 0) {
    return (
      <div className="flex items-center gap-4">
        <div className="flex items-center rounded-full border-2 border-emerald-500 bg-emerald-50">
          <button
            type="button"
            onClick={() => updateQuantity(product.id, qty - 1)}
            className="flex h-10 w-10 items-center justify-center rounded-l-full text-emerald-600 hover:bg-emerald-100"
            aria-label="Decrease"
          >
            <FiMinus />
          </button>
          <span className="min-w-[2.5rem] text-center font-semibold">{qty}</span>
          <button
            type="button"
            onClick={() => addItem(product, 1)}
            className="flex h-10 w-10 items-center justify-center rounded-r-full text-emerald-600 hover:bg-emerald-100"
            aria-label="Increase"
          >
            <FiPlus />
          </button>
        </div>
        <span className="text-sm text-gray-600">in cart</span>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => addItem(product, 1)}
      className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 font-semibold text-white transition hover:bg-emerald-700 md:w-auto md:px-8"
    >
      <FiPlus className="text-lg" /> Add to cart
    </button>
  );
}
