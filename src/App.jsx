import data from "./data.json";
import Nav from "./components/Nav";
import Filters from "./components/Filters";
import Products from "./components/Products";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [products, setProducts] = useState(data);
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
      let index = filterArray[type].indexOf(id);
      console.log(index);
      if (index > -1) {
        filterArray[type].splice(index, 1);
        console.log(filterArray[type]);
        setFilterArray(filterArray);
      }
    }
  };

  //TODO:

  const filterItems = () => {
    let filteredProducts = products;

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

  useEffect(filterItems, [filterArray]);

  return (
    <div className="App">
      <Nav />
      <div className="flex gap-2">
        <Filters data={data} handleChecked={handleChecked} />
        <Products data={products} />
      </div>
    </div>
  );
}

export default App;
