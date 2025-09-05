import { FiShoppingCart,FiTrash2, FiMinus, FiPlus, FiEye,} from "react-icons/fi";
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <section
        aria-labelledby="cart-heading"
        className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-10"
      >
        {/* Header */}
        <header className="flex items-center gap-3 border-b pb-6 mb-8">
          <FiShoppingCart className="text-emerald-600 text-3xl" />
          <h1 id="cart-heading" className="text-2xl font-bold text-gray-900">
            Your Shopping Cart
          </h1>
        </header>

        {/* Cart Items */}
        <section aria-live="polite" className="space-y-6">
          {cartItems.length === 0 ? (
            <p className="text-gray-600 text-center py-10 text-lg">
              Your cart is empty 🛒
            </p>
          ) : (
            cartItems.map((item) => (
              <article
                key={item.id}
                className="flex items-center gap-6 rounded-xl p-4 shadow-sm bg-gray-50"
              >
                {/* Product Image */}
                <img
                  src={item.image}  
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />

                {/* Product Details */}
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-gray-900">
                    {item.name}
                  </h2>
                  <p className="text-emerald-600 font-bold mt-1">
                    ${item.price.toFixed(2)}
                  </p>

                  {/* Update Quantity Controls */}
                  <div className="flex items-center gap-3 mt-3">
                    <button
                      aria-label={`Decrease quantity of ${item.name}`}
                      className="p-2 rounded-lg border bg-white hover:bg-gray-100 transition"
                      onClick={() => updateQuantity(item.id, -1)}
                    >
                      <FiMinus />
                    </button>
                    <span
                      aria-live="polite"
                      className="font-medium text-gray-800"
                    >
                      {item.quantity}
                    </span>
                    <button
                      aria-label={`Increase quantity of ${item.name}`}
                      className="p-2 rounded-lg border bg-white hover:bg-gray-100 transition"
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      <FiPlus />
                    </button>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col items-center gap-3">
                  {/* View Product */}
                  <button
                    aria-label={`View details of ${item.name}`}
                    className="text-emerald-600 hover:text-emerald-800 transition"
                    onClick={() => navigate(`/product/${item.id}`)}
                  >
                    <FiEye size={20} />
                  </button>

                  {/* Remove */}
                  <button
                    aria-label={`Remove ${item.name} from cart`}
                    className="text-red-500 hover:text-red-900 transition"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <FiTrash2 size={20} />
                  </button>
                </div>
              </article>
            ))
          )}
        </section>

        {/* Cart Footer */}
        {cartItems.length > 0 && (
          <footer className="mt-10 border-t pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xl font-bold text-gray-900">
              Total:{" "}
              <span className="text-emerald-600">${total.toFixed(2)}</span>
            </p>
            <div className="flex gap-4 w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-gray-200 text-gray-800 px-6 py-3 rounded-xl hover:bg-gray-300 transition">
                Continue Shopping
              </button>
              <button className="w-full sm:w-auto bg-emerald-600 text-white px-6 py-3 rounded-xl shadow hover:bg-emerald-700 transition">
                Buy Now
              </button>
            </div>
          </footer>
        )}
      </section>
    </main>
  );
};

export default Cart;
