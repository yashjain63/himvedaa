import { Link, Links } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/final logo.png";
import { FaShoppingBag, FaUserAlt, FaUserCog } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white p-4 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img src={logo} alt="Company Logo" className="h-[70px]" />
            </Link>
          </div>

          {/* Desktop Nav + Search */}
          <div className="hidden lg:flex flex-col items-center gap-4 w-full max-w-[700px] px-4">
            {/* Search Bar */}
            <input
              type="text"
              placeholder="Search here"
              className="border border-gray-600 p-2 w-full rounded"
            />

            {/* Nav Links */}
            <nav className="flex gap-7 text-lg flex-wrap justify-center">
              <Link className="text-red-900 hover:text-green-600 hover:underline" to="/">Home</Link>
              <Link className="text-red-900 hover:text-green-600 hover:underline" to="/shop">Shop</Link>
              <Link className="text-red-900 hover:text-green-600 hover:underline" to="/sales">Sales</Link>
              <Link className="text-red-900 hover:text-green-600 hover:underline" to="/blog">Blog</Link>
              <Link className="text-red-900 hover:text-green-600 hover:underline" to="/contact">Contact</Link>
              {/* <Link className="text-red-900 hover:text-green-600 hover:underline" to="/ingredient">Ingredients</Link> */}
            </nav>
          </div>

          {/* Cart + Login (Always Visible) */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <FaShoppingBag className="text-2xl text-red-950 hover:text-green-700" />
              <Link className="hover:underline hover:text-green-700 cursor-pointer" to="/cart">Cart</Link>
              {/* <p className="hover:underline hover:text-green-700 cursor-pointer">Cart</p> */}
            </div>
            {/* <div className="flex items-center gap-2">
              <FaUserCog className="text-3xl text-red-950 hover:text-green-700" />
              <Link className="hover:underline hover:text-green-700 cursor-pointer" to="/admin">Admin</Link>
            </div> */}
            <div className="flex items-center gap-2">
              <FaUserAlt className="text-2xl text-red-950 hover:text-green-700" />
              <Link className="hover:underline hover:text-green-700 cursor-pointer" to="/login">Login</Link>
            </div>

            {/* Hamburger menu (mobile only) */}
            <button
              className="lg:hidden text-3xl text-red-900 ml-4"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        {menuOpen && (
          <div className="lg:hidden mt-4 px-4 space-y-4">
            <input
              type="text"
              placeholder="Search here"
              className="border border-gray-600 p-2 w-full rounded"
            />
            <nav className="flex flex-col gap-3 text-lg">
              <Link className="text-red-900 hover:text-green-600 hover:underline" to="/">Home</Link>
              <Link className="text-red-900 hover:text-green-600 hover:underline" to="/shop">Shop</Link>
              <Link className="text-red-900 hover:text-green-600 hover:underline" to="/sales">Sales</Link>
              <Link className="text-red-900 hover:text-green-600 hover:underline" to="/blog">Blog</Link>
              {/* <Link className="text-red-900 hover:text-green-600 hover:underline" to="/ingredient">Ingredients</Link> */}
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
