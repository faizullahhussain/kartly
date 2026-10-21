import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import FeatureProducts from '../components/FeatureProducts';

const Productdetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const star = '★';

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
  }, [productId]);

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
          <p className='flex items-center gap-1 text-[0.8rem] text-[#687386]'>
            {star.repeat(5)}
            {product.rating}
            <span>({product.reviews?.length ?? 0} reviews)</span>
          </p>
          <h3 className='text-2xl text-secondary font-bold'>{product.title}</h3>
          <h3 className='text-2xl text-primary font-bold'>${product.price}</h3>
          <p>{product.description}</p>
        </div>
      </div>

      <FeatureProducts />
    </section>
  );
};

export default Productdetails;
