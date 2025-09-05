import { useState } from "react";
import { FiHeart, FiEye, FiStar, FiShare2 } from "react-icons/fi";
import { useCart } from "../contexts/CartContext";
import { useWishlist } from "../contexts/WishlistContext";
import { useNavigate } from "react-router-dom";
import StarRating  from "./StarRating";

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const navigate = useNavigate();  
  return (
    <article
      className="product-card group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-64 object-cover transition-transform duration-500 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />

        {/* Quick Actions Overlay */}
        <div
          className={`absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex gap-2">
            <button
              className="bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full transition-all duration-200 hover:scale-110"
              onClick={() => toggleWishlist(product)}
            >
              <FiHeart
                className={`w-5 h-5 ${
                  isInWishlist(product.id)
                    ? "text-red-500 fill-current"
                    : "text-gray-400"
                }`}
              />
            </button>
            {/* View Product */}

            <button
              className="bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full transition-all duration-200 hover:scale-110"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <FiEye className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3">
            <span className="bg-emerald-600 text-white text-xs font-medium px-2 py-1 rounded-full">
              {product.badge}
            </span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-3">
        {/* Category */}
        <p className="text-sm text-gray-500 font-medium">{product.category}</p>

        {/* Product Name */}
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors duration-200">
          {product.name}
        </h3>

        {/* Rating */}
        {/* Rating */}
        <div className="flex items-center gap-1">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <FiStar
                key={i}
                className={`w-4 h-4 ${
                  i < Math.round(product.rating?.rate || 0)
                    ? "text-yellow-400 fill-current"
                    : "text-gray-500"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">
            ({product.rating?.count || 0})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-gray-900">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="text-lg text-gray-500 line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button
          className="w-full btn-primary mt-4"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>

      {/* Share */}
      <button
        onClick={() =>
          navigator.share
            ? navigator.share({
                title: product.name,
                url: window.location.href,
              })
            : navigator.clipboard.writeText(window.location.href)
        }
        className="mt-2 flex items-center gap-2 text-emerald-600 hover:text-emerald-800 transition"
      >
        <FiShare2 /> Share
      </button>
    </article>
  );
};

export default ProductCard;
