import { useContext, useState } from "react";
import { cart } from "../context/cartContext";

function Card({ product }) {
  const { addItem } = useContext(cart);
  return (
    <article className="relative h-max rounded-sm px-4 py-2 shadow-sm transition-all delay-100 ease-in-out hover:scale-105 hover:shadow-lg">
      <div className="relative">
        <img
          src={product.imageURL}
          alt={product.name}
          className="h-52 w-40 object-contain"
        />
        <p className="absolute bottom-2 rounded-sm bg-slate-200 px-2 py-1 font-mono text-sm">
          {product.gender}
        </p>
        {product.quantity <= 0 ? (
          <p className="absolute top-3 left-0 rounded-md bg-red-500 px-2 py-1 font-mono text-sm font-bold text-red-50">
            Out of stock
          </p>
        ) : (
          <button
            onClick={() => addItem(product.id, 1)}
            className="absolute top-2 right-2 text-slate-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </button>
        )}
      </div>
      <div>
        <h3 className="font-mono font-bold text-slate-900">{product.name}</h3>
        <p className="text-slate700 font-mono text-sm">
          {product.type} | {product.color}
        </p>
        <p>{product.quantity} left</p>
      </div>
    </article>
  );
}

export default Card;
