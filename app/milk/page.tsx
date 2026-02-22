import { milkProducts, getMilkVarietiesList } from "@/data/milk";
import MilkCard from "@/components/milk/MilkCard";

export default function MilkHome() {
  const varieties = getMilkVarietiesList();

  return (
    <>
      <div className="bg-sky-700 px-4 py-4 text-center text-white">
        <p className="text-lg font-semibold">Fresh milk, all varieties</p>
        <p className="mt-1 text-sm text-white/90">Full cream, toned, flavored, organic, A2 & more</p>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-6">
        {varieties.map((variety) => {
          const products = milkProducts.filter((p) => p.variety === variety);
          if (products.length === 0) return null;
          return (
            <section key={variety} className="mb-10">
              <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-slate-800">
                <span className="text-2xl">🥛</span>
                {variety}
              </h2>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                {products.map((product) => (
                  <MilkCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
