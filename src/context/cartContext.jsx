import { createContext, useState } from "react";
import data from "../data.json";

export const cart = createContext({});

function CartContext({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [inventory, setInventory] = useState(data);
  const [products, setProducts] = useState(data);
  const addItem = (item, quantity) => {
    let itemsInCart = cartItems;
    let presentInv = inventory;
    let inCart = cartItems.find((o, i) => {
      if (o.item === item) {
        itemsInCart[i].quantity += quantity;
        setCartItems(itemsInCart);
        return true;
      }
    });
    if (!inCart) {
      setCartItems([...cartItems, { item, quantity }]);
    }
    presentInv.find((o, i) => {
      if (o.id === item) {
        presentInv[i].quantity -= quantity;
        setInventory(presentInv);
        setProducts(presentInv);
        return true;
      }
    });
  };
  return (
    <cart.Provider
      value={{ cartItems, addItem, products, setProducts, inventory }}
    >
      {children}
    </cart.Provider>
  );
}

export default CartContext;
