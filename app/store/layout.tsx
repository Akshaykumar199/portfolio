import type { Metadata } from "next";
import { CartProvider } from "@/context/CartContext";
import StoreNav from "@/components/store/StoreNav";
import CartDrawer from "@/components/store/CartDrawer";

export const metadata: Metadata = {
  title: "QuickCart – Groceries in 10 mins",
  description: "Order groceries and essentials. Delivery in 10–15 minutes.",
};

export default function StoreLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <StoreNav />
        <main className="pb-24 md:pb-8">{children}</main>
        <CartDrawer />
      </div>
    </CartProvider>
  );
}
