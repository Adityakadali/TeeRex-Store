import { filterItems } from "../utils/FilterItems";

function Filters({ data, handleChecked }) {
  const genders = filterItems(data, "gender");
  const colors = filterItems(data, "color");
  const types = filterItems(data, "type");
  // const price = filterItems(data, "price");

  // const handleChecked = (e, type) => {
  //   let id = e.target.id;
  //   // console.log(e.target.checked);
  //   if (e.target.checked) {
  //     filterArray = {
  //       ...filterArray,
  //       [type]: [...filterArray[type], id],
  //     };
  //     setFilterArray(filterArray);
  //   } else {
  //     let index = filterArray[type].indexOf(id);
  //     console.log(index);
  //     if (index > -1) {
  //       filterArray[type].splice(index, 1);
  //       console.log(filterArray[type]);
  //       setFilterArray(filterArray);
  //     }
  //   }
  // };
  return (
    <aside className="max-w-xs px-4">
      {/* Genders */}
      <section>
        <h2 className="mb-2 text-lg font-semibold">Genders</h2>
        {genders.map((gender) => (
          <div className="ml-6 flex items-center gap-2" key={gender}>
            <input
              type="checkbox"
              name={gender}
              id={gender}
              className="rounded-sm text-cyan-800"
              onChange={(e) => handleChecked(e, "gender")}
            />
            <label htmlFor={gender}>{gender}</label>
          </div>
        ))}
      </section>
      {/* colors */}
      <section>
        <h2 className="mb-2 text-lg font-semibold">Colors</h2>
        {colors.map((color) => (
          <div className="ml-6 flex items-center gap-2" key={color}>
            <input
              type="checkbox"
              name={color}
              id={color}
              className="rounded-sm text-cyan-800"
              onChange={(e) => handleChecked(e, "color")}
            />
            <label htmlFor={color}>{color}</label>
          </div>
        ))}
      </section>

      {/* types */}
      <section>
        <h2 className="mb-2 text-lg font-semibold">Types</h2>
        {types.map((type) => (
          <div className="ml-6 flex items-center gap-2" key={type}>
            <input
              type="checkbox"
              name={type}
              id={type}
              className="rounded-sm text-cyan-800"
              onChange={(e) => handleChecked(e, "type")}
            />
            <label htmlFor={type}>{type}</label>
          </div>
        ))}
      </section>
    </aside>
  );
}

export default Filters;
