// src/pages/ViewProduct.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FiHeart, FiShoppingCart, FiStar } from "react-icons/fi";
import { useCart } from "../contexts/CartContext";
import { useWishlist } from "../contexts/WishlistContext";
import axios from "axios";

const ViewProduct = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch product details with axios
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );

        // Add fake reviews + inStock field (since API doesn’t provide them)
        setProduct({
          ...data,
          inStock: Math.random() > 0.3, // 70% chance in stock
          rating: Math.round(data.rating?.rate || 4),
          reviewCount: data.rating?.count || 120,
          reviews: [
            { user: "John Doe", comment: "Great quality, worth the price!" },
            {
              user: "Jane Smith",
              comment: "Fast delivery and good packaging.",
            },
            { user: "Chris P.", comment: "Not bad, but expected more." },
          ],
        });
      } catch (error) {
        console.error("Error fetching product:", error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p className="p-8 text-center">Loading product...</p>;
  if (!product) return <p className="p-8 text-center">Product not found</p>;

  return (
    <motion.div
      className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Left: Image */}
      <div className="space-y-4">
        <img
          src={product.image}
          alt={product.title}
          className="w-full rounded-xl shadow-lg"
        />
        {/* Example video (static since API has no videos) */}
        <video
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          controls
          className="w-full rounded-lg shadow-md"
        />
      </div>

      {/* Right: Details */}
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">{product.title}</h2>
          <p className="text-gray-500">{product.category}</p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <FiStar
                key={i}
                className={`w-5 h-5 ${
                  i < product.rating
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-gray-600">({product.reviewCount} reviews)</span>
        </div>

        {/* Description */}
        <p className="text-gray-700 leading-relaxed">{product.description}</p>

        {/* Stock */}
        <p
          className={`font-medium ${
            product.inStock ? "text-emerald-600" : "text-red-500"
          }`}
        >
          {product.inStock ? "In Stock ✅" : "Out of Stock ❌"}
        </p>

        {/* Price */}
        <div className="flex items-center gap-3">
          <span className="text-3xl font-bold text-gray-900">
            ${product.price}
          </span>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => addToCart(product)}
            className="flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-xl shadow hover:bg-emerald-700 transition"
          >
            <FiShoppingCart /> Add to Cart
          </button>
          <button
            onClick={() => toggleWishlist(product)}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl shadow transition ${
              isInWishlist(product.id)
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            <FiHeart />
            {isInWishlist(product.id) ? "Remove Wishlist" : "Add Wishlist"}
          </button>
        </div>

        {/* Reviews */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Customer Feedback</h3>
          <ul className="space-y-3">
            {product.reviews.map((review, i) => (
              <motion.li
                key={i}
                className="p-4 bg-gray-50 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <p className="font-medium text-gray-800">{review.user}</p>
                <p className="text-gray-600">{review.comment}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default ViewProduct;
