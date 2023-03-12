import Cart from "./Cart";

function Nav() {
  return (
    <header>
      <nav className="container mx-auto flex justify-between px-4 py-6">
        <h1 className="font-mono text-2xl font-bold">TeeRex Store</h1>
        <ul className="flex items-center gap-4">
          <li>
            <div className="itmes flex gap-2">
              <input
                type="search"
                name="search"
                id="search"
                placeholder="search"
                className="rounded-sm"
              />
              <button>
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
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>
            </div>
          </li>
          <li>
            <Cart />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
