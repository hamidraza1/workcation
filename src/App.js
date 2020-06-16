import React from "react";

import SiteHeader from "./components/SiteHeader/SiteHeader";
import SearchFilter from "./components/SearchFilter/SearchFilter";
import Cards from "./components/Cards/Cards";

function App() {
  return (
    <div className="min-h-screen antialiased bg-gray-200 xl:flex xl:flex-col xl:h-screen">
      <SiteHeader className="xl:flex-shrink-0" />
      <div className="xl:flex-1 xl:flex xl:overflow-y-hidden">
        <SearchFilter />
        <main className="px-4 py-6 xl:overflow-x-hidden">
          <h3 className="text-gray-900 text-xl">Los Angeles</h3>
          <p className="text-gray-600">
            Live like stars in these luxirious Southeren Califorian States
          </p>

          <div className="-mt-4 sm:flex sm:-mx-2 sm:overflow-x-auto sm:pb-8 ">
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
