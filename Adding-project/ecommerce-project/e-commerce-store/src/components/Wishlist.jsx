import { useWishlist } from "../contexts/WishlistContext";
import ProductCard from "../components/ProductCard";

const Wishlist = () => {
  const { wishlist } = useWishlist();

  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8">My Wishlist ❤️</h2>

      {wishlist.length === 0 ? (
        <p className="text-gray-600">No items in your wishlist yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishlist.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
};

export default Wishlist;
