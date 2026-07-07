import { createContext, useContext, useState } from "react";

// Ye ek "container" hai jisme cart ka data store hoga
const CartContext = createContext();

// Ye component pura app ko cart ka data available karayega
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Item add karne ka function
  const addToCart = (product) => {
    setCart((prevCart) => {
      const alreadyExists = prevCart.find((item) => item.id === product.id);

      if (alreadyExists) {
        // Agar item already hai, to quantity +1 kar do
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        // Naya item hai, list mein add kar do
        return [...prevCart, { ...product, qty: 1 }];
      }
    });
  };

    const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const updateQty = (id, newQty) => {
    if (newQty < 1) return; // quantity 0 se kam nahi ho sakti
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, qty: newQty } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQty }}>
      {children}
    </CartContext.Provider>
  );
}

// Ye function kisi bhi component mein cart use karne ke liye
export function useCart() {
  return useContext(CartContext);
}