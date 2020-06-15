import React from "react";
import { ReactComponent as Star } from "./components/svgs/star.svg";
import SiteHeader from "./components/SiteHeader/SiteHeader";
import SearchFilter from "./components/SearchFilter/SearchFilter";

function App() {
  return (
    <div className="bg-gray-200">
      <SiteHeader />
      <SearchFilter />

      <main className="px-4 py-6">
        <h3 className="text-gray-900 text-xl">Los Angeles</h3>
        <p className="text-gray-600">
          Live like stars in these luxirious Southeren Califorian States
        </p>

        <div className="mt-4">
          <div>
            <div>
              <img
                className="rounded-lg shadow-md h-64"
                alt=""
                src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
              />
            </div>

            <div className="px-4 -mt-16 relative">
              <div className="bg-white rounded-lg px-4 py-4 shadow-lg">
                <div className="flex">
                  <span className="px-2 py-1  leading-none bg-teal-200 text-teal-800 font-semimedium uppercase tracking-wide text-xs rounded-lg">
                    Plus
                  </span>
                  <div className="ml-2 text-gray-600 font-semibold text-xs uppercase tracking-wide">
                    3 beds &bull; 2 baths
                  </div>
                </div>

                <h3 className="mt-1 text-gray-900 font-semibold text-lg">
                  Modern Home in city center
                </h3>

                <div className="mt-1">
                  <span className="text-gray-900">$1400</span>
                  <span className="ml-1 text-sm text-gray-600">/wk</span>
                </div>

                <div className="flex items-center text-gray-600 text-sm mt-2">
                  <div className="flex">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                  <div className="ml-2">34 Reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
