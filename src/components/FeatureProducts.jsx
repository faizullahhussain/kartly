import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const categories = ['beauty', 'fragrances', 'furniture', 'groceries'];

// Best-rated, available product from each category
const getFeatured = (products) =>
  categories
    .map((category) => {
      const best = products
        .filter(
          (p) =>
            p.category === category && p.availabilityStatus !== 'Out of Stock',
        )
        .sort((a, b) => b.rating - a.rating);
      return best[0];
    })
    .filter(Boolean);

const FeatureProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch('https://dummyjson.com/products?limit=0');
        if (!res.ok) throw new Error('Failed to load products');
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

  if (loading) return <p className='p-4'>Loading...</p>;
  if (error) return <p className='p-4 text-red-600'>{error}</p>;

  const featured = getFeatured(products);

  return (
    <section className='mx-auto mt-12 w-full max-w-280'>
      <h2 className='mb-6 text-3xl font-bold text-secondary'>
        Featured products
      </h2>
      <div className='grid grid-cols-2 gap-6 lg:grid-cols-4'>
        {featured.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FeatureProducts;
