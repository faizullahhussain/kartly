import { BiCart, BiHeart, BiSearch, BiUser } from "react-icons/bi";

const Header = () => {
  return (
    <header className="border border-border-dark py-4">
      <nav className="flex justify-between items-center container mx-auto px-4">
        <a href="#" className="flex items-center text-primary">
          <BiCart />
          <span>Kartley</span>
        </a>

        <ul className="flex gap-6">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Cart</a>
          </li>
        </ul>

        <div className="flex justify-center items-center">
          <form className="flex">
            <BiSearch />
            <input type="text" placeholder="Search products" />
          </form>
          <ul className="flex gap-6">
            <li>
              <BiHeart />
            </li>
            <li>
              <BiUser />
            </li>
            <li>
              <BiCart />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
