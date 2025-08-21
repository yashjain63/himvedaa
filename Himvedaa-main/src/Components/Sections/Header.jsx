import { Link } from "react-router-dom";
import React, { useState } from "react";
import { FaUser, FaSearch, FaHeart, FaShoppingBag, FaBars, FaTimes, } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      // Example: Redirect to search page with query
      window.location.href = `/search?query=${query};`
    }
  };

  return (
    <>

      {/* Announcement Bar */}
      <div className="w-full bg-[#702a21f4] h-10 text-white overflow-hidden relative">
        <div className="flex whitespace-nowrap animate-marquee p-2">
          <p>🌿Welcome to HIMVEDA Naturals...!🌿</p>
          <p>🌱 100% Natural & Organic Products </p>
          <p>🚚 Fast Delivery </p>
          <p>🎉 Free shipping on orders above Rs. 999!</p>

          {/* duplicate for smooth loop */}
          <p>🌿Welcome to HIMVEDA Naturals...!🌿</p>
          <p>🌱 100% Natural & Organic Products</p>
          <p>🚚 Fast Delivery</p>
          <p>🎉 Free shipping on orders above Rs. 999!</p>
        </div>
      </div>


      <nav className="w-full shadow-sm bg-white px-10 py-3 grid grid-cols-3 items-center mb-1">
        {/* Left - Hamburger for Mobile */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>

        {/* Left Menu (Desktop Only) */}
        <div className=" hidden lg:flex items-center space-x-6 text-[15px] ">
          <Link to="/" className="hover:text-green-600 hover:underline hover:underline-offset-4">HOME</Link>
          <Link to="/about" className="hover:text-green-600 hover:underline hover:underline-offset-4">ABOUT</Link>
          <Link to="/shop" className="hover:text-green-600 hover:underline hover:underline-offset-4">SHOP</Link>
          <Link to="/sales" className="hover:text-green-600 hover:underline hover:underline-offset-4">SALES</Link>
          <Link to="/blog" className="hover:text-green-600 hover:underline hover:underline-offset-4">BLOG</Link>
          <Link to="/contact" className="hover:text-green-600 hover:underline hover:underline-offset-4">CONTACT</Link>
        </div>

        {/* Center Logo */}
        <div className="flex justify-center ">
          <img src="/logo.png" alt="Logo" className="h-16" />
        </div>

        {/* Right Side - Icons */}
        <div className="flex items-center justify-end space-x-6 text-gray-700">
          <Link to="/login" className="hidden lg:flex items-center gap-2 font-semibold hover:text-green-600 ">
            <FaUser /> LOGIN
          </Link>

          {/* Search */}
          <div className="relative">
            <FaSearch
              className="cursor-pointer hover:text-green-600"
              onClick={() => setShowSearch(!showSearch)}
            />
            {showSearch && (
              <form
                onSubmit={handleSearch}
                className="absolute right-0 top-8 bg-white border rounded-md shadow-md flex"
              >
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search..."
                  className="px-3 py-2 w-48 outline-none"
                />
                <button
                  type="submit"
                  className="bg-green-600 text-white px-3 py-2 rounded-r-md hover:bg-green-700"
                >
                  Go
                </button>
              </form>
            )}
          </div>

          {/* Wishlist with badge */}
          <div className="relative cursor-pointer">
            <Link to="/wishlist"><FaHeart className="hover:text-green-600" /></Link>
          </div>

          {/* Cart with badge */}
          <div className="cursor-pointer">
            <a href="/cart">
              <FaShoppingBag className="hover:text-green-600" />
            </a>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {isOpen && (
          <div className="absolute top-14 left-0 w-full bg-white shadow-lg lg:hidden z-50">
            <div className="flex flex-col items-center space-y-4 py-6 font-semibold">
              <a href="/" className="hover:text-green-600">Home</a>
              <a href="/about" className="hover:text-green-600">About</a>
              <a href="/shop" className="hover:text-green-600">Shop</a>
              <a href="/blogs" className="hover:text-green-600">Blogs</a>
              <a href="/contact" className="hover:text-green-600">Contact</a>
              <form onSubmit={handleSearch} className="flex w-3/4">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search..."
                  className="px-3 py-2 w-full border rounded-l-md outline-none"
                />
                <button
                  type="submit"
                  className="bg-green-600 text-white px-3 py-2 rounded-r-md hover:bg-green-700"
                >
                  Go
                </button>
              </form>
              <a href="/login" className="flex items-center gap-2 hover:text-green-600">
                <FaUser /> Login
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;