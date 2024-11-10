import { useEffect, useState } from "react";
import Nav from "./component/Nav";
import Products from "./component/Products";
import CartModal from "./component/Cartmodal";

function App() {
  const [cart, setCart] = useState([]); 
  const [products, setProducts] = useState([]); 
  const [cartcount, setCartcount] = useState(0); 
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const getProductsData = () => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .catch((error) => console.error('Error fetching products:', error));
  };

  useEffect(() => {
    getProductsData();
  }, []);

  const handleAddToCart = (product) => {
    const isAlreadyInCart = cart.find((item) => item.id === product.id);

    if (isAlreadyInCart) {
      alert("Item already added to the cart");
    } else {
      const updatedCart = [...cart, product];
      setCart(updatedCart);
      setCartcount(updatedCart.length);
    }
  };

  const handleRemoveFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    setCartcount(updatedCart.length);
  };

  return (
    <div className=" bg-gray-700">
      <Nav cartcount={cartcount} onCartClick={() => setIsCartModalOpen(true)} />
      <div className="flex items-center justify-center flex-wrap p-5 gap-8">
        <Products products={products} onAddToCart={handleAddToCart} />
      </div>
      {isCartModalOpen && (
        <CartModal
          cart={cart}
          onRemoveFromCart={handleRemoveFromCart}
          onClose={() => setIsCartModalOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
