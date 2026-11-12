import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <section className='min-h-120 flex flex-col items-center justify-center'>
      <div className='text-center space-y-3'>
        <h1 className='font-bold text-2xl'>Oops! Page Not Found</h1>
        <p className='leading-relaxed max-w-xl text-gray-600'>
          The page you're looking for doesn't exist or may have been moved.
          Don't worry! You can head back home.
        </p>
        <Link
          to='/'
          className='inline-block bg-primary px-10 py-2 text-white border border-primary rounded-full hover:bg-transparent hover:text-primary transition-all'
        >
          Go Home
        </Link>
      </div>
    </section>
  );
};

export default PageNotFound;
