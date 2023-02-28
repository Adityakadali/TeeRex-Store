import data from "./data.json";
import Nav from "./components/Nav";
import Filters from "./components/Filters";

function App() {
  console.log(data);

  return (
    <div className="App">
      <Nav />
      <Filters />
    </div>
  );
}

export default App;
