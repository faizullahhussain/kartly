import { FiArrowRight } from "react-icons/fi";
import herobg from "../assets/images/hero-banner.png";

const Home = () => {
  return (
    <section className="mx-auto mt-8 w-full max-w-300 px-4">
      <div className="flex flex-col overflow-hidden rounded-[28px] bg-indigo-50 md:h-105 md:flex-row md:items-center">
        {/* Text side */}
        <div className="p-8 md:w-140 md:shrink-0 md:px-15 md:py-0">
          <h1 className="mb-4 text-3xl font-extrabold leading-[1.1] text-secondary md:text-[50px]">
            Everyday gear you will actually love
          </h1>
          <p className="mb-7 text-lg text-gray-600">
            Shop our newest arrivals with free shipping on orders over $50.
          </p>

          <button className="flex cursor-pointer items-center gap-2 rounded-xl bg-primary px-7 py-3.75 font-bold text-white hover:opacity-90">
            <span>Shop now</span>
            <FiArrowRight size={18} />
          </button>
        </div>

        {/* Image side */}
        <div className="h-56 w-full md:h-full md:min-w-0 md:flex-1">
          <img
            src={herobg}
            alt="Shopping bag illustration"
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
