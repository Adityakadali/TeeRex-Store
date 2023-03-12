import { useContext, useEffect, useState } from "react";
import Nav from "../components/Nav";
import { storeContext } from "../context/StoreContext";

function CartPage() {
  const { cartItems, incQuantity, decQuantity } = useContext(storeContext);

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
              <div>
                <h2 className="text-xl font-bold">{item.name}</h2>
                <p className="mt-4 flex items-center gap-2">
                  <button
                    onClick={() => decQuantity(item.id, item.quantity)}
                    className="grid h-6 w-6 place-content-center bg-slate-900 px-2 py-1 font-bold text-white"
                  >
                    -
                  </button>
                  {item.quantity}
                  <button
                    onClick={() => incQuantity(item.id, item.quantity)}
                    className="grid h-6 w-6 place-content-center bg-slate-900 px-2 py-1 font-bold text-white"
                  >
                    +
                  </button>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CartPage;
