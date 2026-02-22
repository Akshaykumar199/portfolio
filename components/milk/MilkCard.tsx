"use client";

import Image from "next/image";
import { FiPlus } from "react-icons/fi";
import type { MilkProduct } from "@/data/milk";
import { useMilkCart } from "@/context/MilkCartContext";

type Props = { product: MilkProduct };

export default function MilkCard({ product }: Props) {
  const { addItem, updateQuantity, items } = useMilkCart();
  const inCart = items.find((i) => i.product.id === product.id);
  const qty = inCart?.quantity ?? 0;

  return (
    <div className="flex flex-col rounded-xl border border-slate-200 bg-white p-3 shadow-sm transition hover:shadow-md">
      <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-slate-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
        {product.originalPrice && (
          <span className="absolute left-1 top-1 rounded bg-red-500 px-1.5 py-0.5 text-xs font-medium text-white">
            {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
          </span>
        )}
        <span className="absolute bottom-1 right-1 rounded bg-sky-600/90 px-1.5 py-0.5 text-xs font-medium text-white">
          {product.variety}
        </span>
      </div>
      <div className="mt-2 flex-1">
        <h3 className="font-medium text-slate-800">{product.name}</h3>
        <p className="text-xs text-slate-500">{product.unit}</p>
        <div className="mt-2 flex items-center gap-1">
          <span className="text-base font-semibold text-slate-900">₹{product.price}</span>
          {product.originalPrice && (
            <span className="text-xs text-slate-400 line-through">₹{product.originalPrice}</span>
          )}
        </div>
      </div>
      <div className="mt-2">
        {qty > 0 ? (
          <div className="flex items-center gap-2 rounded-full border border-sky-500 bg-sky-50 px-2 py-1">
            <button
              type="button"
              onClick={() => updateQuantity(product.id, qty - 1)}
              className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-600 text-white hover:bg-sky-700"
              aria-label="Decrease"
            >
              −
            </button>
            <span className="min-w-[1.25rem] text-center text-sm font-medium">{qty}</span>
            <button
              type="button"
              onClick={() => addItem(product, 1)}
              className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-600 text-white hover:bg-sky-700"
              aria-label="Increase"
            >
              +
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => addItem(product, 1)}
            className="flex w-full items-center justify-center gap-1 rounded-full bg-sky-600 py-2 text-sm font-medium text-white transition hover:bg-sky-700"
          >
            <FiPlus className="text-base" /> Add
          </button>
        )}
      </div>
    </div>
  );
}
