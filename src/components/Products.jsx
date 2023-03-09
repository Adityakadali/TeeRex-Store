import Card from "./Card";

function Products({ data }) {
  return (
    <div className="flex flex-wrap gap-4 px-6">
      {data.map((item) => (
        <Card product={item} />
      ))}
    </div>
  );
}

export default Products;
