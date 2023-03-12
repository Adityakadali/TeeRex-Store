import { useContext, useState } from "react";
import { storeContext } from "../context/StoreContext";

function Card({ product }) {
  const { addItem } = useContext(storeContext);
  return (
    <article className="relative h-max rounded-sm px-4 py-2 shadow-sm transition-all delay-100 ease-in-out hover:shadow-lg">
      <div className="relative">
        <img
          src={product.imageURL}
          alt={product.name}
          className="h-52 w-40 object-contain"
        />
        <p className="absolute bottom-2 rounded-sm bg-slate-200 px-2 py-1 font-mono text-sm">
          {product.gender}
        </p>
      </div>
      <div>
        <h3 className="font-mono font-bold text-slate-900">{product.name}</h3>
        <p className="text-slate700 font-mono">Rs. {product.price}</p>

        {product.quantity <= 0 ? (
          <p className="block w-fit rounded-sm bg-red-500 px-2 py-1 font-mono text-sm font-bold text-red-50">
            Out of stock
          </p>
        ) : (
          <div className="flex gap-2">
            <button
              onClick={() => addItem(product.id, 1)}
              className="rounded-sm bg-slate-900 px-2 py-1 font-mono text-sm text-slate-50 hover:bg-slate-800"
            >
              Add to cart
            </button>
            <p>{product.quantity} left</p>
          </div>
        )}
      </div>
    </article>
  );
}

export default Card;
