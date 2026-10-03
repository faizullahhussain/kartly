import { BiCart, BiHeart, BiSearch, BiUser } from "react-icons/bi";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Cart", href: "/cart" },
];

const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <header className="border border-border-dark py-4">
      <nav className="flex justify-between items-center mx-auto px-4">
        <a href="#" className="flex items-center text-primary">
          <BiCart className="font-bold text-3xl" />
          <span className="font-bold text-[1rem] md:text-2xl">Kartley</span>
        </a>

        <ul className="hidden md:flex gap-6">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href=""
                className="text-secondary font-semibold hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpenNav(!openNav)}
          aria-label="Toggle Menu"
          aria-expanded={openNav}
          className="md:hidden"
        >
          {openNav ? (
            <FiX size={22} strokeWidth={2.3} />
          ) : (
            <FiMenu size={22} strokeWidth={2.3} />
          )}
        </button>

        <div className="hidden md:flex md:justify-center md:items-center gap-4">
          <form className="flex items-center p-1 rounded-full bg-[#f3f4f6] px-3">
            <BiSearch />
            <input
              type="text"
              placeholder="Search products"
              className="outline-none"
            />
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

      {openNav && (
        <ul className="md:hidden px-4 mt-4">
          {links.map((linke) => (
            <li key={linke.name}>
              <a href="" onClick={() => setOpenNav(false)}>
                {linke.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Header;
