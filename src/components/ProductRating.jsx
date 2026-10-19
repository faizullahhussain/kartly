const ProductRating = ({ rating }) => {
  return (
    <div className='flex items-center gap-2'>
      <div className='flex items-center'>
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star} className='relative text-xl'>
            <span className='text-gray-300'>★</span>
            <span
              className='absolute top-0 left-0 overflow-hidden text-yellow-400'
              style={{
                width: `${Math.min(Math.max(rating - star + 1, 0), 1) * 100}%`,
              }}
            >
              ★
            </span>
          </span>
        ))}
      </div>

      <span className='text-sm text-gray-500'>{rating}</span>
    </div>
  );
};

export default ProductRating;
