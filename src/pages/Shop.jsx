import { useEffect, useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import ProductCard from '../components/ProductCard';

const Shop = () => {
  const [productList, setProductsList] = useState([]);
  const [categoriesList, setCategoriesList] = useState([]);
  const [selected, setSelected] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const productsPerPage = 6;

  const toggle = (category) => {
    setSelected((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );

    // Return to page 1 when categories change
    setCurrentPage(1);
  };

  const visible =
    selected.length === 0
      ? productList
      : productList.filter((p) => selected.includes(p.category));

  // Pagination calculations
  const totalPages = Math.ceil(visible.length / productsPerPage);

  const startIndex = (currentPage - 1) * productsPerPage;

  const currentProducts = visible.slice(
    startIndex,
    startIndex + productsPerPage,
  );

  useEffect(() => {
    const loadProductData = async () => {
      try {
        const [productsResponse, categoriesResponse] = await Promise.all([
          fetch('https://dummyjson.com/products?limit=0'),
          fetch('https://dummyjson.com/products/category-list'),
        ]);

        if (!productsResponse.ok || !categoriesResponse.ok) {
          throw new Error('Failed to load product data');
        }

        const [productData, categoriesData] = await Promise.all([
          productsResponse.json(),
          categoriesResponse.json(),
        ]);

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

  if (loading) {
    return <p className='p-4 grid place-items-center h-screen'>Loading...</p>;
  }

  if (error) {
    return <p className='font-bold text-red-500 p-4'>{error}</p>;
  }

  return (
    <section className='max-w-300 mx-auto'>
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Shop' }]} />

      <div className='flex justify-between items-center'>
        <h1 className='mb-6 text-3xl font-bold text-secondary'>All Products</h1>

        <select
          name='sort'
          id='sort'
          className='border border-border-dark p-3 rounded-md'
        >
          <option value='Popular'>Popular</option>
          <option value='top_rated'>Top Rated</option>
          <option value='low_to_high'>Low to high</option>
          <option value='high_to_low'>High to low</option>
        </select>
      </div>

      <div className='grid grid-cols-1 items-start md:grid-cols-[250px_minmax(0,1fr)] gap-8 pb-10'>
        {/* Category sidebar */}
        <div className='bg-white border border-border-dark rounded-md p-4 sticky top-4'>
          <h2 className='font-semibold mb-3'>Categories</h2>

          <ul className='space-y-2'>
            {categoriesList.slice(0, 10).map((category) => (
              <li key={category}>
                <label className='capitalize flex items-center'>
                  <input
                    className='w-3 h-3 appearance-none mr-2 rounded-sm border-2 border-gray-300 checked:border-primary checked:bg-primary'
                    type='checkbox'
                    checked={selected.includes(category)}
                    onChange={() => toggle(category)}
                  />
                  {category.replaceAll('-', ' ')}
                </label>
              </li>
            ))}
          </ul>
        </div>

        {/* Products and pagination */}
        <div>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
            {currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {visible.length === 0 ? (
            <p className='text-center py-8'>No products found.</p>
          ) : (
            <>
              {/* Product count */}
              <p className='text-sm text-gray-500 mt-6 text-center'>
                Showing {startIndex + 1}–
                {Math.min(startIndex + productsPerPage, visible.length)} of{' '}
                {visible.length} products
              </p>

              {/* Pagination controls */}
              <div className='flex flex-wrap justify-center items-center gap-2 mt-4'>
                <button
                  onClick={() => setCurrentPage((page) => page - 1)}
                  disabled={currentPage === 1}
                  className='px-3 py-2 border border-border-dark rounded-md disabled:opacity-40 disabled:cursor-not-allowed'
                >
                  Previous
                </button>

                {Array.from(
                  {
                    length: Math.min(6, totalPages),
                  },
                  (_, index) => {
                    const startPage = Math.min(
                      Math.max(currentPage - 2, 1),
                      Math.max(totalPages - 5, 1),
                    );

                    const pageNumber = startPage + index;

                    return (
                      <button
                        key={pageNumber}
                        onClick={() => setCurrentPage(pageNumber)}
                        className={`px-3 py-2 border border-border-dark rounded-md ${
                          currentPage === pageNumber
                            ? 'bg-primary text-white'
                            : 'bg-white hover:bg-gray-100'
                        }`}
                      >
                        {pageNumber}
                      </button>
                    );
                  },
                )}

                <button
                  onClick={() => setCurrentPage((page) => page + 1)}
                  disabled={currentPage === totalPages}
                  className='px-3 py-2 border border-border-dark rounded-md disabled:opacity-40 disabled:cursor-not-allowed'
                >
                  Next
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Shop;
