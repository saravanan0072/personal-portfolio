import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiShoppingCart, FiMenu, FiX, FiHeart, FiSearch } from "react-icons/fi";
import { useCart } from "../contexts/CartContext";
import {useWishlist } from "../contexts/WishlistContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [cartCount, setCartCount] = useState(0); // Mock cart count
  const location = useLocation();
  const { cartItems } = useCart();
   const { wishlist } = useWishlist();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-2xl font-bold text-emerald-600 hover:text-emerald-700 transition-colors duration-200"
            >
              ShopHub
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/"
                className={`nav-link ${
                  isActive("/") ? "text-emerald-600" : ""
                }`}
              >
                Home
              </Link>
              <Link
                to="/products"
                className={`nav-link ${
                  isActive("/products") ? "text-emerald-600" : ""
                }`}
              >
                Products
              </Link>
              <Link
                to="/categories"
                className={`nav-link ${
                  isActive("/categories") ? "text-emerald-600" : ""
                }`}
              >
                Categories
              </Link>
              <Link
                to="/about"
                className={`nav-link ${
                  isActive("/about") ? "text-emerald-600" : ""
                }`}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`nav-link ${
                  isActive("/contact") ? "text-emerald-600" : ""
                }`}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Search, Cart and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <button className="p-2 text-gray-600 hover:text-emerald-600 transition-colors duration-200">
              <FiSearch className="w-5 h-5" />
            </button>

            {/* Wishlist Icon */}
            <Link to="/wishlist" className="relative p-2">
              <FiHeart className="w-5 h-5 text-gray-600 hover:text-red-500 transition" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* Cart Icon */}
            <Link
              to="/cart"
              className="relative p-2 text-gray-600 hover:text-emerald-600 transition-colors duration-200"
            >
              <FiShoppingCart className="w-5 h-5" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-gray-600 hover:text-emerald-600 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-slide-up">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <Link
                to="/"
                className={`block px-3 py-2 nav-link ${
                  isActive("/") ? "text-emerald-600" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/products"
                className={`block px-3 py-2 nav-link ${
                  isActive("/products") ? "text-emerald-600" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/categories"
                className={`block px-3 py-2 nav-link ${
                  isActive("/categories") ? "text-emerald-600" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Categories
              </Link>
              <Link
                to="/about"
                className={`block px-3 py-2 nav-link ${
                  isActive("/about") ? "text-emerald-600" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`block px-3 py-2 nav-link ${
                  isActive("/contact") ? "text-emerald-600" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
