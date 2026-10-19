import { useParams } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { useState, useEffect } from 'react';
import FeatureProducts from '../components/FeatureProducts';
import { BsStar } from 'react-icons/bs';

const Productdetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProductDetails = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/${productId}`,
        );

        if (!response.ok) {
          throw new Error('Failded to load product details');
        }

        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadProductDetails();
  }, []);

  if (loading) {
    return <p>Loading..</p>;
  }
  if (error) return <p className='text-red font-bold'>{error}</p>;

  return (
    <section className='max-w-300 mx-auto mb-15'>
      <Breadcrumbs
        items={[
          { label: 'Home', to: '/' },
          { label: 'Shop' },
          { label: `Product ${productId}` },
        ]}
      />
      <div className='flex gap-10'>
        <img
          src={product.thumbnail}
          alt={product.title}
          className='w-80 bg-[#e0e7ff] rounded-md'
        />
        <div>
          <p>
            <BsStar /> {product.rating}
            <span>({product.reviews.length} reviews)</span>
          </p>
        </div>
      </div>

      <FeatureProducts />
    </section>
  );
};

export default Productdetails;
