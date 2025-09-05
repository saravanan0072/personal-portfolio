import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import About from "./pages/About.jsx";
import Missing from "./pages/Missing.jsx";
import Cart from "./pages/Cart.jsx";
import { CartProvider } from "./contexts/CartContext.jsx"
import { WishlistProvider } from "./contexts/WishlistContext.jsx";
import Wishlist from "./components/Wishlist.jsx";
import ViewProduct from "./pages/ViewProduct.jsx";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <CartProvider>
        <WishlistProvider>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/categories" element={<Products />} />
            <Route path="/contact" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/product/:id" element={<ViewProduct />} />
            <Route path="*" element={<Missing />} />
          </Routes>
          <Footer />
        </WishlistProvider>
      </CartProvider>
    </div>
  );
}

export default App;
