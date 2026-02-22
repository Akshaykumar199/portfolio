export type MilkProduct = {
  id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  unit: string;
  image: string;
  variety: string; // e.g. "Full Cream", "Toned", "Flavored"
  inStock: boolean;
  rating?: number;
};

const milkImg = "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=400&fit=crop";
const milkImg2 = "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=400&fit=crop";
const milkImg3 = "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=400&fit=crop";

function img(i: number) {
  return [milkImg, milkImg2, milkImg3][i % 3];
}

export const milkVarieties = [
  "Full Cream",
  "Toned",
  "Double Toned",
  "Skimmed",
  "Buffalo",
  "Cow Milk",
  "Organic",
  "Flavored",
  "Lactose Free",
  "A2 Milk",
  "Premium",
  "Fortified",
] as const;

export const milkProducts: MilkProduct[] = [
  // Full Cream
  { id: "m1", name: "Full Cream Milk", slug: "full-cream-milk-500ml", price: 36, unit: "500 ml", image: img(0), variety: "Full Cream", inStock: true, rating: 4.6 },
  { id: "m2", name: "Full Cream Milk", slug: "full-cream-milk-1l", price: 66, unit: "1 L", image: img(0), variety: "Full Cream", inStock: true, rating: 4.6 },
  { id: "m3", name: "Full Cream Milk", slug: "full-cream-milk-2l", price: 125, originalPrice: 132, unit: "2 L", image: img(0), variety: "Full Cream", inStock: true, rating: 4.6 },
  // Toned
  { id: "m4", name: "Toned Milk", slug: "toned-milk-500ml", price: 32, unit: "500 ml", image: img(1), variety: "Toned", inStock: true, rating: 4.5 },
  { id: "m5", name: "Toned Milk", slug: "toned-milk-1l", price: 58, unit: "1 L", image: img(1), variety: "Toned", inStock: true, rating: 4.5 },
  { id: "m6", name: "Toned Milk", slug: "toned-milk-2l", price: 110, unit: "2 L", image: img(1), variety: "Toned", inStock: true, rating: 4.5 },
  // Double Toned
  { id: "m7", name: "Double Toned Milk", slug: "double-toned-milk-500ml", price: 30, unit: "500 ml", image: img(1), variety: "Double Toned", inStock: true, rating: 4.4 },
  { id: "m8", name: "Double Toned Milk", slug: "double-toned-milk-1l", price: 54, unit: "1 L", image: img(1), variety: "Double Toned", inStock: true, rating: 4.4 },
  // Skimmed
  { id: "m9", name: "Skimmed Milk", slug: "skimmed-milk-500ml", price: 38, unit: "500 ml", image: img(2), variety: "Skimmed", inStock: true, rating: 4.5 },
  { id: "m10", name: "Skimmed Milk", slug: "skimmed-milk-1l", price: 70, unit: "1 L", image: img(2), variety: "Skimmed", inStock: true, rating: 4.5 },
  // Buffalo
  { id: "m11", name: "Buffalo Milk", slug: "buffalo-milk-500ml", price: 42, unit: "500 ml", image: img(0), variety: "Buffalo", inStock: true, rating: 4.7 },
  { id: "m12", name: "Buffalo Milk", slug: "buffalo-milk-1l", price: 80, unit: "1 L", image: img(0), variety: "Buffalo", inStock: true, rating: 4.7 },
  // Cow Milk
  { id: "m13", name: "Cow Milk (Fresh)", slug: "cow-milk-500ml", price: 34, unit: "500 ml", image: img(1), variety: "Cow Milk", inStock: true, rating: 4.6 },
  { id: "m14", name: "Cow Milk (Fresh)", slug: "cow-milk-1l", price: 62, unit: "1 L", image: img(1), variety: "Cow Milk", inStock: true, rating: 4.6 },
  // Organic
  { id: "m15", name: "Organic Full Cream Milk", slug: "organic-full-cream-1l", price: 95, unit: "1 L", image: img(2), variety: "Organic", inStock: true, rating: 4.8 },
  { id: "m16", name: "Organic Toned Milk", slug: "organic-toned-1l", price: 88, unit: "1 L", image: img(2), variety: "Organic", inStock: true, rating: 4.7 },
  // Flavored
  { id: "m17", name: "Chocolate Milk", slug: "chocolate-milk-200ml", price: 30, unit: "200 ml", image: img(2), variety: "Flavored", inStock: true, rating: 4.7 },
  { id: "m18", name: "Chocolate Milk", slug: "chocolate-milk-500ml", price: 65, unit: "500 ml", image: img(2), variety: "Flavored", inStock: true, rating: 4.7 },
  { id: "m19", name: "Strawberry Milk", slug: "strawberry-milk-200ml", price: 32, unit: "200 ml", image: img(2), variety: "Flavored", inStock: true, rating: 4.6 },
  { id: "m20", name: "Badam Milk", slug: "badam-milk-200ml", price: 45, unit: "200 ml", image: img(2), variety: "Flavored", inStock: true, rating: 4.8 },
  { id: "m21", name: "Kesar Elaichi Milk", slug: "kesar-elaichi-milk-200ml", price: 48, unit: "200 ml", image: img(2), variety: "Flavored", inStock: true, rating: 4.8 },
  { id: "m22", name: "Rose Milk", slug: "rose-milk-200ml", price: 35, unit: "200 ml", image: img(2), variety: "Flavored", inStock: true, rating: 4.5 },
  // Lactose Free
  { id: "m23", name: "Lactose Free Milk", slug: "lactose-free-milk-1l", price: 120, unit: "1 L", image: img(1), variety: "Lactose Free", inStock: true, rating: 4.6 },
  { id: "m24", name: "Lactose Free Milk", slug: "lactose-free-milk-500ml", price: 68, unit: "500 ml", image: img(1), variety: "Lactose Free", inStock: true, rating: 4.6 },
  // A2 Milk
  { id: "m25", name: "A2 Cow Milk", slug: "a2-cow-milk-500ml", price: 55, unit: "500 ml", image: img(0), variety: "A2 Milk", inStock: true, rating: 4.8 },
  { id: "m26", name: "A2 Cow Milk", slug: "a2-cow-milk-1l", price: 105, unit: "1 L", image: img(0), variety: "A2 Milk", inStock: true, rating: 4.8 },
  // Premium
  { id: "m27", name: "Premium Full Cream Milk", slug: "premium-full-cream-1l", price: 78, unit: "1 L", image: img(0), variety: "Premium", inStock: true, rating: 4.7 },
  { id: "m28", name: "Premium Toned Milk", slug: "premium-toned-1l", price: 72, unit: "1 L", image: img(1), variety: "Premium", inStock: true, rating: 4.6 },
  // Fortified
  { id: "m29", name: "Fortified Milk (Vitamin D)", slug: "fortified-milk-1l", price: 70, unit: "1 L", image: img(1), variety: "Fortified", inStock: true, rating: 4.6 },
  { id: "m30", name: "Fortified Milk (Vitamin D)", slug: "fortified-milk-500ml", price: 38, unit: "500 ml", image: img(1), variety: "Fortified", inStock: true, rating: 4.6 },
];

export function getMilkByVariety(variety: string): MilkProduct[] {
  return milkProducts.filter((p) => p.variety === variety);
}

export function getMilkBySlug(slug: string): MilkProduct | undefined {
  return milkProducts.find((p) => p.slug === slug);
}

export function getMilkVarietiesList(): string[] {
  return [...new Set(milkProducts.map((p) => p.variety))];
}
