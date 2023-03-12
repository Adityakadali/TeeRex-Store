import { useContext, useEffect, useState } from "react";
import Nav from "../components/Nav";
import { storeContext } from "../context/StoreContext";

function CartPage() {
  const { cartItems } = useContext(storeContext);

  return (
    <div className="container mx-auto">
      <Nav />
      <div className="mx-auto max-w-2xl">
        {cartItems.map((item) => {
          return (
            <div className="mt-4 flex gap-4 py-2 px-4 shadow-sm" key={item.id}>
              <div>
                <img className="h-28" src={item.imageURL} alt={item.name} />
              </div>
              <h2 className="text-xl font-bold">{item.name}</h2>
              <p>{item.quantity}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CartPage;
