"use client";

import React, { createContext, useContext, useReducer, useCallback, useEffect } from "react";
import type { MilkProduct } from "@/data/milk";

export type MilkCartItem = {
  product: MilkProduct;
  quantity: number;
};

type MilkCartState = { items: MilkCartItem[] };

type MilkCartAction =
  | { type: "ADD"; product: MilkProduct; quantity?: number }
  | { type: "REMOVE"; productId: string }
  | { type: "UPDATE_QTY"; productId: string; quantity: number }
  | { type: "CLEAR" }
  | { type: "HYDRATE"; items: MilkCartItem[] };

const initialState: MilkCartState = { items: [] };

function milkCartReducer(state: MilkCartState, action: MilkCartAction): MilkCartState {
  switch (action.type) {
    case "ADD": {
      const qty = action.quantity ?? 1;
      const existing = state.items.find((i) => i.product.id === action.product.id);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.product.id === action.product.id ? { ...i, quantity: i.quantity + qty } : i
          ),
        };
      }
      return { items: [...state.items, { product: action.product, quantity: qty }] };
    }
    case "REMOVE":
      return { items: state.items.filter((i) => i.product.id !== action.productId) };
    case "UPDATE_QTY":
      if (action.quantity <= 0) {
        return { items: state.items.filter((i) => i.product.id !== action.productId) };
      }
      return {
        items: state.items.map((i) =>
          i.product.id === action.productId ? { ...i, quantity: action.quantity } : i
        ),
      };
    case "CLEAR":
      return { items: [] };
    case "HYDRATE":
      return { items: action.items };
    default:
      return state;
  }
}

const MilkCartContext = createContext<{
  items: MilkCartItem[];
  addItem: (product: MilkProduct, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
} | null>(null);

const MILK_CART_KEY = "milkcart";

export function MilkCartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(milkCartReducer, initialState);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(MILK_CART_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as MilkCartItem[];
        if (Array.isArray(parsed) && parsed.length) dispatch({ type: "HYDRATE", items: parsed });
      }
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(MILK_CART_KEY, JSON.stringify(state.items));
    } catch {}
  }, [state.items]);

  const addItem = useCallback((product: MilkProduct, quantity = 1) => {
    dispatch({ type: "ADD", product, quantity });
  }, []);

  const removeItem = useCallback((productId: string) => {
    dispatch({ type: "REMOVE", productId });
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    dispatch({ type: "UPDATE_QTY", productId, quantity });
  }, []);

  const clearCart = useCallback(() => dispatch({ type: "CLEAR" }), []);

  const totalItems = state.items.reduce((s, i) => s + i.quantity, 0);
  const subtotal = state.items.reduce((s, i) => s + i.product.price * i.quantity, 0);

  return (
    <MilkCartContext.Provider
      value={{
        items: state.items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
      }}
    >
      {children}
    </MilkCartContext.Provider>
  );
}

export function useMilkCart() {
  const ctx = useContext(MilkCartContext);
  if (!ctx) throw new Error("useMilkCart must be used within MilkCartProvider");
  return ctx;
}
