import { useEffect, useState } from "react";
import axios from "axios";

import Hero from "../components/Hero";
import ProductGrid from "../components/ProductGrid";
import CategoryCard from "../components/CategoryCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products and categories
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch all products
        const productRes = await axios.get("https://fakestoreapi.com/products");
        setProducts(productRes.data);

        // Fetch categories
        const categoryRes = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );
        setCategories(categoryRes.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <main className="flex items-center justify-center h-screen">
        <p className="text-lg text-gray-600">Loading...</p>
      </main>
    );
  }

  return (
    <main>
      <Hero />

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our wide range of categories and find exactly what you're
              looking for.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div
                key={category}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CategoryCard
                  category={{
                    name: category,
                    productCount: products.filter(
                      (p) => p.category === category
                    ).length,
                    image:
                      products.find((p) => p.category === category)?.image ||
                      "https://via.placeholder.com/400x300", // fallback image
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <ProductGrid products={products.slice(0, 8)} title="Featured Products" />

      {/* Special Offers Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Special Offers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't miss out on these amazing deals and limited-time offers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.slice(8, 14).map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CategoryCard
                  category={{
                    id: product.id,
                    name: product.title,
                    image: product.image,
                    productCount: Math.floor(Math.random() * 200) + 1, // fake count
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
