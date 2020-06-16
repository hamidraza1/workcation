import React, { Component } from "react";
import classes from "./SearchFilter.module.css";

class SearchFilter extends Component {
  state = {
    isOpen: true,
  };
  render() {
    const toggle = () => {
      this.setState({ isOpen: !this.state.isOpen });
    };
    return (
      <section className="bg-gray-800  ">
        <div className="flex justify-between bg-gray-800 px-4 py-3 items-center xl:hidden">
          <div className="relative max-w-xs w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className=" text-gray-500"
                width="20"
                height="20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.32 12.906l1.096 1.096c.412-.023.83.123 1.145.437l3 3a1.5 1.5 0 01-2.122 2.122l-3-3a1.497 1.497 0 01-.437-1.145l-1.096-1.096a8 8 0 111.414-1.414zM8 14A6 6 0 108 2a6 6 0 000 12z"
                  fill="#A0AEC0"
                />
              </svg>
            </div>

            <input
              className="block w-full bg-gray-900 text-white rounded-lg pl-10 py-2 pr-4  focus:outline-none focus:bg-white focus:text-gray-900"
              placeholder="Search by ketwords"
            />
          </div>

          <button
            onClick={() => toggle()}
            className="ml-4 inline-flex items-center bg-gray-700 hover:bg-gray-600 focus:outline-none rounded-lg pl-4 pr-3 py-2"
          >
            <div className="w-4 h-3">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 18 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 1a1 1 0 011-1h16a1 1 0 110 2H1a1 1 0 01-1-1zm3 6a1 1 0 011-1h10a1 1 0 110 2H4a1 1 0 01-1-1zm4 5a1 1 0 100 2h4a1 1 0 100-2H7z"
                  fill="#A0AEC0"
                />
              </svg>
            </div>
            <span className="text-white font-medium ml-2">Filters</span>
          </button>
        </div>

        {this.state.isOpen ? (
          <form className="xl:flex xl:flex-col xl:justify-between h-full xl:w-64">
            <div className="lg:flex xl:block xl:overflow-y-auto">
              <div className="px-4 py-4 border-t border-gray-900  lg:w-1/3 xl:border-t-0 xl:w-full">
                <div className="flex flex-wrap  -mx-2">
                  <label className="block w-1/2 px-2 sm:w-1/4 lg:w-1/2">
                    <span className="text-sm font-semibold text-gray-500">
                      Bedrooms
                    </span>
                    <select className="mt-1 block w-full h-10 rounded bg-gray-700 text-white px-3">
                      <option>4</option>
                    </select>
                  </label>
                  <label className="block w-1/2 px-2 sm:w-1/4 lg:w-1/2">
                    <span className="text-sm font-semibold text-gray-500">
                      Bathrooms
                    </span>
                    <select className="mt-1 block w-full h-10 rounded bg-gray-700 text-white px-3">
                      <option>2</option>
                    </select>
                  </label>
                  <label className="mt-4 block w-full px-2 sm:w-1/2 sm:mt-0 lg:w-full lg:mt-4">
                    <span className="text-sm font-semibold text-gray-500">
                      Price Range
                    </span>
                    <select className="mt-1 block w-full h-10 rounded bg-gray-700 text-white px-3">
                      <option>Up to $2,000 /wk</option>
                    </select>
                  </label>
                </div>
              </div>

              <div className="px-4 py-4 border-t border-gray-900  lg:w-1/3 lg:border-l xl:w-full">
                <span className="block text-sm font-semibold text-gray-500">
                  Property Type
                </span>
                <div className="sm:flex sm:-mx-2 lg:block lg:mx-0">
                  <label className="flex sm:w-1/4 sm:px-2 items-center mt-3 lg:w-full lg:px-0">
                    <input type="radio" name="propertyType" value="house" />
                    <span className="ml-6 mt-2 text-white">House</span>
                  </label>
                  <label className="flex sm:w-1/4 sm:px-2 items-center mt-3 lg:w-full lg:px-0">
                    <input type="radio" name="propertyType" value="house" />
                    <span className="ml-6 mt-2 text-white">Appartment</span>
                  </label>
                  <label className="flex sm:w-1/4 sm:px-2 items-center mt-3 lg:w-full lg:px-0">
                    <input type="radio" name="propertyType" value="loft" />
                    <span className="ml-6 mt-2 text-white">Loft</span>
                  </label>
                  <label className="flex sm:w-1/4 sm:px-2 items-center  mt-3 lg:w-full lg:px-0">
                    <input type="radio" name="propertyType" value="townhouse" />
                    <span className="ml-6 mt-2 text-white">Townhouse</span>
                  </label>
                </div>
              </div>

              <div className="px-4 py-4 border-t border-gray-900  lg:w-1/3 lg:border-l xl:w-full">
                <span className="block text-sm font-semibold text-gray-500">
                  Amenities
                </span>
                <div className="sm:flex sm:flex-wrap ">
                  <label className="flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
                    <input className="" type="checkbox" name="balcony" />
                    <span className="ml-6 mt-2 text-white">Balcony</span>
                  </label>
                  <label className="flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
                    <input type="checkbox" name="pool" />
                    <span className="ml-6 mt-2 text-white">Pool</span>
                  </label>
                  <label className="flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
                    <input type="checkbox" name="beach" />
                    <span className="ml-6 mt-2 text-white">Beach</span>
                  </label>
                  <label className="flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
                    <input type="checkbox" name="petFriendly" />
                    <span className="ml-6 mt-2 text-white ">Pet friendly</span>
                  </label>
                  <label className="flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
                    <input type="checkbox" name="kidfriendly" />
                    <span className="ml-6 mt-2 text-white">Kid friendly</span>
                  </label>
                  <label className="flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
                    <input type="checkbox" name="parking" />
                    <span className="ml-6 mt-2 text-white">Parking</span>
                  </label>
                  <label className="flex items-center sm:w-1/2 sm:px-2 lg:w-full xl:w-full">
                    <input type="checkbox" name="airConditioning" />
                    <span className="ml-6 mt-2 text-white">
                      Air conditioning
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 px-4 py-4 sm:text-right">
              <button className="text-white font-semibold px-4 py-2 w-full rounded-lg bg-indigo-500 hover:bg-indigo-400 sm:w-auto sm:inline-block xl:block xl:w-full ">
                {" "}
                Update Results
              </button>
            </div>
          </form>
        ) : null}
      </section>
    );
  }
}
export default SearchFilter;
