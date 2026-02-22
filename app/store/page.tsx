import DeliveryBanner from "@/components/store/DeliveryBanner";
import CategoryGrid from "@/components/store/CategoryGrid";
import ProductCard from "@/components/store/ProductCard";
import { products } from "@/data/store";

export default function StoreHome() {
  const featured = products.slice(0, 12);

  return (
    <>
      <DeliveryBanner />
      <CategoryGrid />
      <section className="mx-auto max-w-6xl px-4 py-6">
        <h2 className="mb-4 text-lg font-semibold text-gray-800">Popular products</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}
