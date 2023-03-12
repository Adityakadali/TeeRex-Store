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

  const incQuantity = (id, currentQuantity) => {
    let orginalQuantity = data.find((obj) => {
      if (obj.id === id) {
        return true;
      }
    }).quantity;
    let currentCart = cartItems;
    if (currentQuantity <= orginalQuantity) {
      currentCart.find((obj, idx) => {
        if (obj.id === id) {
          console.log("pp");
          currentCart[idx].quantity += 1;
          currentCart = [...currentCart];
          setCartItems(currentCart);
          return true;
        }
      });
    }
  };

  const decQuantity = (id, currentQuantity) => {
    let currentCart = cartItems;
    if (currentQuantity > 0) {
      currentCart.find((obj, idx) => {
        if (obj.id === id) {
          console.log("pp");
          currentCart[idx].quantity -= 1;
          currentCart = [...currentCart];
          setCartItems(currentCart);
          return true;
        }
      });
    }
  };

  return (
    <storeContext.Provider
      value={{
        cartItems,
        addItem,
        products,
        setProducts,
        inventory,
        incQuantity,
        decQuantity,
      }}
    >
      {children}
    </storeContext.Provider>
  );
}

export default CartContext;
