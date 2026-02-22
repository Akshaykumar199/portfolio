import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProductBySlug, getCategoryById } from "@/data/store";
import AddToCart from "@/components/store/AddToCart";

type Props = { params: Promise<{ slug: string }> };

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const category = getCategoryById(product.categoryId);

  return (
    <div className="mx-auto max-w-6xl px-4 py-6">
      <div className="mb-4 flex items-center gap-2 text-sm">
        <Link href="/store" className="text-emerald-600 hover:underline">
          Store
        </Link>
        <span className="text-gray-400">/</span>
        {category && (
          <>
            <Link href={`/store/category/${category.slug}`} className="text-emerald-600 hover:underline">
              {category.name}
            </Link>
            <span className="text-gray-400">/</span>
          </>
        )}
        <span className="text-gray-600">{product.name}</span>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          {product.originalPrice && (
            <span className="absolute left-3 top-3 rounded-lg bg-red-500 px-2 py-1 text-sm font-medium text-white">
              {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
            </span>
          )}
        </div>

        <div>
          <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>
          <p className="mt-1 text-gray-500">{product.unit}</p>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-gray-900">₹{product.price}</span>
            {product.originalPrice && (
              <span className="text-lg text-gray-400 line-through">₹{product.originalPrice}</span>
            )}
          </div>
          {product.rating && (
            <p className="mt-2 text-sm text-gray-600">★ {product.rating} rating</p>
          )}
          <div className="mt-6">
            <AddToCart product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
