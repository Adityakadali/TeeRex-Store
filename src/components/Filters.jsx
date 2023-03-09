import { filterItems } from "../utils/FilterItems";

function Filters({ data }) {
  const genders = filterItems(data, "gender");
  const colors = filterItems(data, "color");
  const types = filterItems(data, "type");
  const price = filterItems(data, "price");
  return (
    <aside className="max-w-xs px-4">
      {/* Genders */}
      <section>
        <h2 className="mb-2 text-lg font-semibold">Genders</h2>
        {genders.map((gender) => (
          <div className="ml-6 flex items-center gap-2">
            <input
              type="checkbox"
              name={gender}
              id={gender}
              className="rounded-sm text-cyan-800"
            />
            <label htmlFor={gender}>{gender}</label>
          </div>
        ))}
      </section>
      {/* colors */}
      <section>
        <h2 className="mb-2 text-lg font-semibold">Colors</h2>
        {colors.map((gender) => (
          <div className="ml-6 flex items-center gap-2">
            <input
              type="checkbox"
              name={gender}
              id={gender}
              className="rounded-sm text-cyan-800"
            />
            <label htmlFor={gender}>{gender}</label>
          </div>
        ))}
      </section>

      {/* types */}
      <section>
        <h2 className="mb-2 text-lg font-semibold">Types</h2>
        {types.map((gender) => (
          <div className="ml-6 flex items-center gap-2">
            <input
              type="checkbox"
              name={gender}
              id={gender}
              className="rounded-sm text-cyan-800"
            />
            <label htmlFor={gender}>{gender}</label>
          </div>
        ))}
      </section>
    </aside>
  );
}

export default Filters;
