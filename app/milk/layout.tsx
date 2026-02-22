import type { Metadata } from "next";
import Link from "next/link";
import { MilkCartProvider } from "@/context/MilkCartContext";
import MilkNav from "@/components/milk/MilkNav";
import MilkCartBar from "@/components/milk/MilkCartBar";

export const metadata: Metadata = {
  title: "Milk Store – Fresh milk & all varieties",
  description: "Order fresh milk – full cream, toned, skimmed, buffalo, organic, flavored, A2, lactose-free and more.",
};

export default function MilkLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <MilkCartProvider>
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <MilkNav />
        <main className="pb-24 md:pb-8">{children}</main>
        <MilkCartBar />
      </div>
    </MilkCartProvider>
  );
}
