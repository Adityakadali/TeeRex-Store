import data from "./data.json";
import Nav from "./components/Nav";
import Filters from "./components/Filters";
import Products from "./components/Products";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [products, setProducts] = useState(data);

  const filterItems = () => {
    let newProducts = products.filter((product) => {
      if (product.gender == "Women") {
        return true;
      }
    });
    setProducts(newProducts);
  };

  useEffect(() => filterItems(), []);

  return (
    <div className="App">
      <Nav />
      <div className="flex gap-2">
        <Filters data={data} />
        <Products data={products} />
      </div>
    </div>
  );
}

export default App;
