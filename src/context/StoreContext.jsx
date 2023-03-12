import { createContext, useEffect, useState } from "react";
import data from "../data.json";

export const storeContext = createContext({});

function CartContext({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [inventory, setInventory] = useState(data);
  const [products, setProducts] = useState(data);
  const addItem = (item, quantity) => {
    let itemsInCart = cartItems;
    let presentInv = inventory;
    let inCart = cartItems.find((o, i) => {
      if (o.id === item) {
        itemsInCart[i].quantity += quantity;
        itemsInCart = [...itemsInCart];
        setCartItems(itemsInCart);
        return true;
      }
    });
    if (!inCart) {
      let product = inventory.find((obj) => obj.id === item);
      setCartItems((cartItems) => [...cartItems, { ...product, quantity }]);
    }

    presentInv.find((o, i) => {
      if (o.id === item) {
        presentInv[i].quantity = presentInv[i].quantity - quantity;
        presentInv = [...presentInv];
        setInventory(presentInv);
        setProducts(presentInv);
        return true;
      }
    });
  };

  return (
    <storeContext.Provider
      value={{ cartItems, addItem, products, setProducts, inventory }}
    >
      {children}
    </storeContext.Provider>
  );
}

export default CartContext;
