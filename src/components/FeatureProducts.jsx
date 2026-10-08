import { useEffect, useState } from "react";

const categories = ["beauty", "fragrances", "furniture", "groceries"];

// Best-rated, available product from each category
const getFeatured = (products) =>
  categories
    .map((category) => {
      const best = products
        .filter(
          (p) =>
            p.category === category && p.availabilityStatus !== "Out of Stock",
        )
        .sort((a, b) => b.rating - a.rating);
      return best[0]; // undefined if nothing is available
    })
    .filter(Boolean);

const ProductCard = ({ product }) => (
  <div className="rounded-2xl border border-gray-200 bg-white p-3">
    <div className="aspect-square overflow-hidden rounded-xl bg-gray-100">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="h-full w-full object-contain"
      />
    </div>
    <h3 className="mt-3 truncate font-bold text-secondary">{product.title}</h3>
    <p className="mt-1 text-sm text-gray-600">★ {product.rating}</p>
    <div className="mt-2 flex items-center justify-between">
      <span className="text-xl font-bold">${product.price}</span>
      <button className="cursor-pointer rounded-lg bg-secondary px-3 py-2 text-sm font-semibold text-white hover:opacity-90">
        Add to cart
      </button>
    </div>
  </div>
);

const FeatureProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products?limit=0");
        if (!res.ok) throw new Error("Failed to load products");
        const data = await res.json();
        setProducts(data.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading) return <p className="p-4">Loading...</p>;
  if (error) return <p className="p-4 text-red-600">{error}</p>;

  const featured = getFeatured(products);

  return (
    <section className="mx-auto mt-12 w-full max-w-300">
      <h2 className="mb-6 text-3xl font-bold text-secondary">
        Featured products
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FeatureProduct;
