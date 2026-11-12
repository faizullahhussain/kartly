import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import FeatureProducts from '../components/FeatureProducts';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const ATTRIBUTES_BY_CATEGORY = {
  beauty: { label: 'Shade', options: ['Light', 'Medium', 'Dark'] },
  fragrances: { label: 'Volume', options: ['30ml', '50ml', '100ml'] },
  furniture: { label: 'Color', options: ['Natural', 'Walnut', 'White'] },
  groceries: { label: 'Weight', options: ['500g', '1kg', '2kg'] },
  'home-decoration': { label: 'Color', options: ['White', 'Natural', 'Black'] },
  laptops: { label: 'Storage', options: ['256GB', '512GB', '1TB'] },
  'mens-shirts': { label: 'Size', options: ['S', 'M', 'L', 'XL'] },
  'mens-shoes': { label: 'Size', options: [40, 41, 42, 43, 44] },
  'mens-watches': { label: 'Strap', options: ['Leather', 'Steel', 'Silicone'] },
};

const Productdetails = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(CartContext);
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);

  useEffect(() => {
    const loadProductDetails = async () => {
      setLoading(true);
      setError(null);
      setSelectedImage(0);
      setSelectedOption(null);
      setQuantity(1);
      setWishlisted(false);

      try {
        const response = await fetch(
          `https://dummyjson.com/products/${productId}`,
        );

        if (!response.ok) {
          throw new Error('Failed to load product details');
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

  if (loading) return <p>Loading..</p>;
  if (error) return <p className='text-red-600 font-bold'>{error}</p>;

  const images = product.images?.length ? product.images : [product.thumbnail];
  const filledStars = Math.round(product.rating);

  const attribute = ATTRIBUTES_BY_CATEGORY[product.category];
  const activeOption = selectedOption ?? attribute?.options[0];

  const handleAddToCart = () => {
    dispatch(
      {
        type: 'add_to_cart',
        payload: {
          id: product.id,
          title: product.title,
          price: product.price,
          quantity,
          thumbnail: product.thumbnail,
        },
      },
      navigate('/cart'),
    );
  };

  return (
    <section className='max-w-280 mx-auto mb-15'>
      <Breadcrumbs
        items={[
          { label: 'Home', to: '/' },
          { label: 'Shop' },
          { label: product.title },
        ]}
      />

      <div className='flex flex-col md:flex-row gap-10'>
        {/* Gallery */}
        <div>
          <img
            src={images[selectedImage]}
            alt={product.title}
            className='w-96 aspect-square object-contain bg-[#e0e7ff] rounded-2xl'
          />

          <div className='flex gap-3 mt-3'>
            {images.map((img, index) => (
              <img
                key={img}
                src={img}
                alt={`${product.title} view ${index + 1}`}
                onClick={() => setSelectedImage(index)}
                className={`w-16 h-16 object-contain rounded-lg bg-[#e0e7ff] cursor-pointer border-2 ${
                  index === selectedImage
                    ? 'border-primary'
                    : 'border-transparent'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Details */}
        <div className='flex-1'>
          <p className='flex items-center gap-1 text-[0.8rem] text-[#687386]'>
            <span className='text-amber-400 text-lg tracking-tight'>
              {'★'.repeat(filledStars)}
              <span className='text-gray-300'>
                {'★'.repeat(5 - filledStars)}
              </span>
            </span>
            {product.rating}
            <span>({product.reviews?.length ?? 0} reviews)</span>
          </p>

          <h3 className='text-3xl text-secondary font-bold mt-1'>
            {product.title}
          </h3>
          <h3 className='text-2xl text-primary font-bold my-3'>
            ${product.price}
          </h3>
          <p className='text-[#4b5563] max-w-xl'>{product.description}</p>

          {/* Category-based options (hidden if the category has none) */}
          {attribute && (
            <>
              <p className='font-bold mt-5 mb-2'>{attribute.label}</p>
              <div className='flex flex-wrap gap-2'>
                {attribute.options.map((option) => (
                  <button
                    key={option}
                    onClick={() => setSelectedOption(option)}
                    className={`px-4 py-2 rounded-lg border-2 font-bold cursor-pointer ${
                      option === activeOption
                        ? 'border-primary text-primary'
                        : 'border-gray-200'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </>
          )}

          {/* Quantity + actions */}
          <div className='flex items-center gap-3 mt-6'>
            <div className='flex items-center gap-4 border-2 border-gray-200 rounded-lg px-3 py-2'>
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className='cursor-pointer'
                aria-label='Decrease quantity'
              >
                −
              </button>
              <span className='font-bold w-4 text-center'>{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className='cursor-pointer'
                aria-label='Increase quantity'
              >
                +
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className='flex items-center gap-2 bg-primary text-white font-bold px-4 py-2 md:px-6 md:py-3 rounded-lg cursor-pointer'
            >
              <svg
                width='18'
                height='18'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <circle cx='9' cy='21' r='1' />
                <circle cx='20' cy='21' r='1' />
                <path d='M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6' />
              </svg>
              Add to cart
            </button>

            <button
              onClick={() => setWishlisted((w) => !w)}
              aria-label='Add to wishlist'
              className='border-2 border-primary rounded-lg px-4 py-3 cursor-pointer text-primary'
            >
              <svg
                width='20'
                height='20'
                viewBox='0 0 24 24'
                fill={wishlisted ? 'currentColor' : 'none'}
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z' />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <FeatureProducts />
    </section>
  );
};

export default Productdetails;
