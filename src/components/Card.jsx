function Card({ product }) {
  return (
    <article className="h-max rounded-sm p-4 shadow-sm transition-all delay-100 ease-in-out hover:scale-105 hover:shadow-lg">
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
        <p className="text-slate700 font-mono text-sm">
          {product.type} | {product.color}
        </p>
      </div>
    </article>
  );
}

export default Card;
