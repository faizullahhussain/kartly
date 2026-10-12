import { useEffect, useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import ProductCard from '../components/ProductCard';

const Shop = () => {
  const [productList, setProductsList] = useState([]);
  const [categoriesList, setCategoriesList] = useState([]);
  const [selected, setSelected] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const toggle = (category) => {
    setSelected((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  };

  const visible =
    selected.length === 0
      ? productList
      : productList.filter((p) => selected.includes(p.category));

  useEffect(() => {
    const loadProductData = async () => {
      try {
        const [productsResponse, categoriesResponse] = await Promise.all([
          fetch('https://dummyjson.com/products?limit=0'),
          fetch('https://dummyjson.com/products/category-list'),
        ]);

        const [productData, categoriesData] = await Promise.all([
          productsResponse.json(),
          categoriesResponse.json(),
        ]);
        if (!productsResponse.ok) throw new Error('Failed to load product');

        setProductsList(productData.products);
        setCategoriesList(categoriesData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadProductData();
  }, []);

  if (loading)
    return (
      <p className='text-red p-4 grid place-items-center h-screen'>
        Loading...
      </p>
    );
  if (error) return <p className='text-bold text-red'>{error}</p>;

  return (
    <section className='max-w-300 mx-auto'>
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Shop' }]} />
      <div className='flex justify-between items-center'>
        <h1 className='mb-6 text-3xl font-bold text-secondary'>All Products</h1>
        <select
          name='sort'
          id='sort'
          className=' border border-border-dark p-3 rounded-md'
        >
          <option value='Popular'>Popular</option>
          <option value='top_rated'>Top Rated</option>
          <option value='low_to_high'>Low to high</option>
          <option value='high_to_low'>high to low</option>
        </select>
      </div>

      <div className='grid grid-cols-1 items-start md:grid-cols-[250px_minmax(0,1fr)] gap-8 pb-10'>
        <div className='bg-white border border-border-dark rounded-md p-4 sticky top-4'>
          <h2>Categories</h2>
          <ul>
            {categoriesList.slice(0, 10).map((category) => (
              <li key={category}>
                <label htmlFor='category' className='capitalize'>
                  <input
                    className='w-3 h-3 appearance-none mr-2 rounded-sm border-2 border-gray-300 checked:border-primary checked:bg-primary'
                    type='checkbox'
                    checked={selected.includes(category)}
                    onChange={() => toggle(category)}
                  />
                  {category}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
            {visible.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
