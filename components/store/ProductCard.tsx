"use client";

import Image from "next/image";
import Link from "next/link";
import { FiPlus } from "react-icons/fi";
import type { Product } from "@/data/store";
import { useCart } from "@/context/CartContext";

type ProductCardProps = {
  product: Product;
  showAdd?: boolean;
};

export default function ProductCard({ product, showAdd = true }: ProductCardProps) {
  const { addItem, updateQuantity, items } = useCart();
  const inCart = items.find((i) => i.product.id === product.id);
  const qty = inCart?.quantity ?? 0;

  return (
    <div className="group flex flex-col rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition hover:shadow-md">
      <Link href={`/store/product/${product.slug}`} className="flex flex-1 flex-col">
        <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
          {product.originalPrice && (
            <span className="absolute left-1 top-1 rounded bg-red-500 px-1.5 py-0.5 text-xs font-medium text-white">
              {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
            </span>
          )}
        </div>
        <div className="mt-2 flex-1">
          <h3 className="line-clamp-2 text-sm font-medium text-gray-800">{product.name}</h3>
          <p className="mt-0.5 text-xs text-gray-500">{product.unit}</p>
          <div className="mt-2 flex items-center gap-1">
            <span className="text-base font-semibold text-gray-900">₹{product.price}</span>
            {product.originalPrice && (
              <span className="text-xs text-gray-400 line-through">₹{product.originalPrice}</span>
            )}
          </div>
        </div>
      </Link>
      {showAdd && (
        <div className="mt-2 flex items-center justify-between gap-2">
          {qty > 0 ? (
            <div className="flex items-center gap-2 rounded-full border border-emerald-500 bg-emerald-50 px-2 py-1">
              <button
                type="button"
                onClick={() => updateQuantity(product.id, qty - 1)}
                className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white hover:bg-emerald-600"
                aria-label="Decrease"
              >
                −
              </button>
              <span className="min-w-[1.25rem] text-center text-sm font-medium">{qty}</span>
              <button
                type="button"
                onClick={() => addItem(product, 1)}
                className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white hover:bg-emerald-600"
                aria-label="Increase"
              >
                +
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                addItem(product, 1);
              }}
              className="flex flex-1 items-center justify-center gap-1 rounded-full bg-emerald-600 py-2 text-sm font-medium text-white transition hover:bg-emerald-700"
            >
              <FiPlus className="text-base" /> Add
            </button>
          )}
        </div>
      )}
    </div>
  );
}
