const ProductRating = ({ rating }) => {
  return (
    <div className='flex items-center gap-2'>
      <div
        className='flex text-yellow-400 text-xl'
        aria-label={`Rating: ${rating} out of 5`}
      >
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star}>{star <= Math.round(rating) ? '★' : '☆'}</span>
        ))}
      </div>

      <span className='text-sm text-gray-500'>{rating}</span>
    </div>
  );
};

export default ProductRating;
