import { notFound } from "next/navigation";
import Link from "next/link";
import { getCategoryBySlug, getProductsByCategory } from "@/data/store";
import ProductCard from "@/components/store/ProductCard";

type Props = { params: Promise<{ slug: string }> };

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const categoryProducts = getProductsByCategory(category.id);

  return (
    <div className="mx-auto max-w-6xl px-4 py-6">
      <div className="mb-4 flex items-center gap-2">
        <Link href="/store" className="text-sm text-emerald-600 hover:underline">
          ← Store
        </Link>
        <span className="text-gray-400">/</span>
        <span className="font-semibold text-gray-800">{category.name}</span>
      </div>
      <h1 className="mb-6 text-2xl font-bold text-gray-900">
        <span className="mr-2">{category.icon}</span>
        {category.name}
      </h1>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {categoryProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
