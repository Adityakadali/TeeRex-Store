import { useContext, useEffect, useState } from "react";
import Filters from "./components/Filters";
import Nav from "./components/Nav";
import Products from "./components/Products";
import { cart } from "./context/cartContext";

function App() {
  const { products, setProducts, inventory } = useContext(cart);
  const [filterArray, setFilterArray] = useState({
    type: [],
    color: [],
    gender: [],
  });

  const handleChecked = (e, type) => {
    let id = e.target.id;
    // console.log(e.target.checked);
    if (e.target.checked) {
      let filteredItems = {
        ...filterArray,
        [type]: [...filterArray[type], id],
      };
      setFilterArray(filteredItems);
    } else {
      let filteredItems = {
        ...filterArray,
        [type]: filterArray[type].filter((item) => item !== id),
      };
      setFilterArray(filteredItems);
    }
  };

  const filterItems = () => {
    let filteredProducts = inventory;

    if (filterArray.gender.length > 0) {
      filteredProducts = filteredProducts.filter((product) => {
        if (filterArray.gender.includes(product.gender)) {
          return true;
        }
      });
    }

    if (filterArray.color.length > 0) {
      filteredProducts = filteredProducts.filter((product) => {
        if (filterArray.color.includes(product.color)) {
          return true;
        }
      });
    }

    if (filterArray.type.length > 0) {
      filteredProducts = filteredProducts.filter((product) => {
        if (filterArray.type.includes(product.type)) {
          return true;
        }
      });
    }
    setProducts(filteredProducts);
  };

  useEffect(() => {
    filterItems();
  }, [filterArray]);

  return (
    <div className="App">
      <Nav />
      <div className="flex gap-2">
        <Filters data={inventory} handleChecked={handleChecked} />
        <Products data={products} />
      </div>
    </div>
  );
}

export default App;
