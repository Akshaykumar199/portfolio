export type Product = {
  id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  unit: string;
  image: string;
  categoryId: string;
  inStock: boolean;
  rating?: number;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  icon: string;
  productCount: number;
};

export const categories: Category[] = [
  { id: "fruits", name: "Fruits & Vegetables", slug: "fruits-vegetables", icon: "🥬", productCount: 48 },
  { id: "dairy", name: "Dairy & Breakfast", slug: "dairy-breakfast", icon: "🥛", productCount: 32 },
  { id: "snacks", name: "Snacks & Munchies", slug: "snacks-munchies", icon: "🍿", productCount: 56 },
  { id: "beverages", name: "Beverages", slug: "beverages", icon: "🥤", productCount: 28 },
  { id: "staples", name: "Staples", slug: "staples", icon: "🍚", productCount: 24 },
  { id: "personal", name: "Personal Care", slug: "personal-care", icon: "🧴", productCount: 36 },
  { id: "cleaning", name: "Cleaning & Household", slug: "cleaning-household", icon: "🧹", productCount: 22 },
  { id: "frozen", name: "Frozen", slug: "frozen", icon: "🧊", productCount: 18 },
];

const placeholderImages = [
  "https://images.unsplash.com/photo-1542838132-92c53300491e?w=200&h=200&fit=crop",
  "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=200&h=200&fit=crop",
  "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=200&h=200&fit=crop",
  "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=200&h=200&fit=crop",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop",
  "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=200&h=200&fit=crop",
  "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=200&h=200&fit=crop",
  "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=200&h=200&fit=crop",
];

function img(i: number) {
  return placeholderImages[i % placeholderImages.length];
}

export const products: Product[] = [
  { id: "1", name: "Fresh Tomatoes", slug: "fresh-tomatoes", price: 45, unit: "500g", image: img(0), categoryId: "fruits", inStock: true, rating: 4.5 },
  { id: "2", name: "Onions", slug: "onions", price: 30, unit: "1 kg", image: img(1), categoryId: "fruits", inStock: true, rating: 4.2 },
  { id: "3", name: "Potatoes", slug: "potatoes", price: 35, unit: "1 kg", image: img(2), categoryId: "fruits", inStock: true, rating: 4.4 },
  { id: "4", name: "Bananas", slug: "bananas", price: 50, unit: "1 dozen", image: img(3), categoryId: "fruits", inStock: true, rating: 4.6 },
  { id: "5", name: "Apples", slug: "apples", price: 180, originalPrice: 200, unit: "1 kg", image: img(4), categoryId: "fruits", inStock: true, rating: 4.7 },
  { id: "6", name: "Milk Full Cream", slug: "milk-full-cream", price: 66, unit: "1 L", image: img(5), categoryId: "dairy", inStock: true, rating: 4.5 },
  { id: "7", name: "Curd", slug: "curd", price: 40, unit: "500g", image: img(6), categoryId: "dairy", inStock: true, rating: 4.3 },
  { id: "8", name: "Bread Brown", slug: "bread-brown", price: 45, unit: "400g", image: img(7), categoryId: "dairy", inStock: true, rating: 4.4 },
  { id: "9", name: "Eggs", slug: "eggs", price: 90, unit: "12 pcs", image: img(0), categoryId: "dairy", inStock: true, rating: 4.6 },
  { id: "10", name: "Butter", slug: "butter", price: 55, unit: "100g", image: img(1), categoryId: "dairy", inStock: true, rating: 4.5 },
  { id: "11", name: "Lay's Classic", slug: "lays-classic", price: 20, unit: "52g", image: img(2), categoryId: "snacks", inStock: true, rating: 4.8 },
  { id: "12", name: "Kurkure", slug: "kurkure", price: 20, unit: "60g", image: img(3), categoryId: "snacks", inStock: true, rating: 4.5 },
  { id: "13", name: "Biscuits Parle-G", slug: "parle-g", price: 30, unit: "200g", image: img(4), categoryId: "snacks", inStock: true, rating: 4.7 },
  { id: "14", name: "Dark Fantasy", slug: "dark-fantasy", price: 100, unit: "150g", image: img(5), categoryId: "snacks", inStock: true, rating: 4.9 },
  { id: "15", name: "Coca Cola", slug: "coca-cola", price: 95, unit: "2L", image: img(6), categoryId: "beverages", inStock: true, rating: 4.6 },
  { id: "16", name: "Bisleri Water", slug: "bisleri-water", price: 20, unit: "1L", image: img(7), categoryId: "beverages", inStock: true, rating: 4.5 },
  { id: "17", name: "Tata Tea", slug: "tata-tea", price: 65, unit: "500g", image: img(0), categoryId: "beverages", inStock: true, rating: 4.4 },
  { id: "18", name: "Nescafe Classic", slug: "nescafe-classic", price: 245, unit: "100g", image: img(1), categoryId: "beverages", inStock: true, rating: 4.7 },
  { id: "19", name: "Fortune Sunlite Oil", slug: "sunlite-oil", price: 180, unit: "1L", image: img(2), categoryId: "staples", inStock: true, rating: 4.5 },
  { id: "20", name: "Tata Salt", slug: "tata-salt", price: 22, unit: "1 kg", image: img(3), categoryId: "staples", inStock: true, rating: 4.6 },
  { id: "21", name: "India Gate Basmati", slug: "basmati-rice", price: 185, unit: "1 kg", image: img(4), categoryId: "staples", inStock: true, rating: 4.7 },
  { id: "22", name: "Aashirvaad Atta", slug: "aashirvaad-atta", price: 55, unit: "1 kg", image: img(5), categoryId: "staples", inStock: true, rating: 4.8 },
  { id: "23", name: "Colgate Toothpaste", slug: "colgate", price: 95, unit: "200g", image: img(6), categoryId: "personal", inStock: true, rating: 4.5 },
  { id: "24", name: "Dove Soap", slug: "dove-soap", price: 45, unit: "90g", image: img(7), categoryId: "personal", inStock: true, rating: 4.6 },
  { id: "25", name: "Vim Dishwash", slug: "vim-dishwash", price: 75, unit: "500g", image: img(0), categoryId: "cleaning", inStock: true, rating: 4.4 },
  { id: "26", name: "Harpic Toilet Cleaner", slug: "harpic", price: 85, unit: "1L", image: img(1), categoryId: "cleaning", inStock: true, rating: 4.5 },
  { id: "27", name: "Frozen Peas", slug: "frozen-peas", price: 120, unit: "500g", image: img(2), categoryId: "frozen", inStock: true, rating: 4.3 },
  { id: "28", name: "Frozen Paratha", slug: "frozen-paratha", price: 90, unit: "6 pcs", image: img(3), categoryId: "frozen", inStock: true, rating: 4.6 },
];

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter((p) => p.categoryId === categoryId);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase();
  return products.filter((p) => p.name.toLowerCase().includes(q));
}
