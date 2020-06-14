import React from "react";
import { ReactComponent as Star } from "./components/svgs/star.svg";

function App() {
  return (
    <div className="bg-gray-200">
      <header className="bg-gray-900">
        <div className="flex bg-gray-900 px-4 py-3 items-center">
          <div>
            <svg
              width="auto"
              height="32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M60.064 27h3.768l3.144-11.088L70.144 27h3.768l4.704-16.8h-3.48L71.92 22.656 68.392 10.2H65.56l-3.504 12.456L58.84 10.2h-3.48L60.064 27zm24.61.336c3.529 0 6.36-2.76 6.36-6.336 0-3.576-2.831-6.336-6.36-6.336-3.527 0-6.335 2.76-6.335 6.336 0 3.576 2.808 6.336 6.336 6.336zm0-3.024c-1.823 0-3.24-1.368-3.24-3.312 0-1.944 1.417-3.312 3.24-3.312 1.849 0 3.265 1.368 3.265 3.312 0 1.944-1.416 3.312-3.264 3.312zm11.635-7.248V15h-3.096v12h3.096v-5.736c0-2.52 2.04-3.24 3.648-3.048V14.76c-1.512 0-3.024.672-3.648 2.304zM112.832 27l-4.968-6.072L112.688 15h-3.696l-4.128 5.28V10.2h-3.096V27h3.096v-5.448L109.232 27h3.6z"
                fill="#fff"
              />
              <path
                d="M120.089 27.336c2.352 0 4.392-1.248 5.424-3.12l-2.688-1.536c-.48.984-1.512 1.584-2.76 1.584-1.848 0-3.216-1.368-3.216-3.264 0-1.92 1.368-3.288 3.216-3.288 1.224 0 2.256.624 2.736 1.608l2.664-1.56c-.984-1.848-3.024-3.096-5.376-3.096-3.648 0-6.336 2.76-6.336 6.336 0 3.576 2.688 6.336 6.336 6.336zM136.083 15v1.416c-.864-1.08-2.16-1.752-3.912-1.752-3.192 0-5.832 2.76-5.832 6.336 0 3.576 2.64 6.336 5.832 6.336 1.752 0 3.048-.672 3.912-1.752V27h3.096V15h-3.096zm-3.336 9.384c-1.896 0-3.312-1.368-3.312-3.384s1.416-3.384 3.312-3.384c1.92 0 3.336 1.368 3.336 3.384s-1.416 3.384-3.336 3.384zm16.103-6.408V15h-2.712v-3.36l-3.096.936V15h-2.088v2.976h2.088v4.992c0 3.24 1.464 4.512 5.808 4.032v-2.808c-1.776.096-2.712.072-2.712-1.224v-4.992h2.712zm3.719-4.416c1.056 0 1.92-.864 1.92-1.896s-.864-1.92-1.92-1.92c-1.032 0-1.896.888-1.896 1.92s.864 1.896 1.896 1.896zM151.033 27h3.096V15h-3.096v12zm11.642.336c3.528 0 6.36-2.76 6.36-6.336 0-3.576-2.832-6.336-6.36-6.336-3.528 0-6.336 2.76-6.336 6.336 0 3.576 2.808 6.336 6.336 6.336zm0-3.024c-1.824 0-3.24-1.368-3.24-3.312 0-1.944 1.416-3.312 3.24-3.312 1.848 0 3.264 1.368 3.264 3.312 0 1.944-1.416 3.312-3.264 3.312zm15.21-9.648c-1.608 0-2.856.6-3.576 1.68V15h-3.096v12h3.096v-6.48c0-2.088 1.128-2.976 2.64-2.976 1.392 0 2.376.84 2.376 2.472V27h3.096v-7.368c0-3.192-1.992-4.968-4.536-4.968z"
                fill="#A3BFFA"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M42.911 11.604L35.213 7.16v20.645h9v2h-44v-2h4v-12.72l-3.728.933L0 14.078l21.09-5.273h3.122a9.551 9.551 0 00-.68 2.559l-.483 3.975 5.164-2.982v15.448h5V7.161l-7.696 4.444a7.502 7.502 0 012.565-4.8h-4.12a7.489 7.489 0 016.646-2.972L25.017.603a7.488 7.488 0 016.696.403c1.039.6 1.88 1.41 2.5 2.347a7.461 7.461 0 012.5-2.347 7.49 7.49 0 016.698-.402l-5.593 3.229a7.488 7.488 0 016.646 2.973h-4.12a7.498 7.498 0 012.567 4.798zM24.213 27.805v-10h-6v10h6zm-11-8a2 2 0 11-4 0 2 2 0 014 0z"
                fill="#A3BFFA"
              />
            </svg>
          </div>

          <div className="flex">
            <button className="h-6 w-6 ">
              <svg
                width="18"
                height="14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 1a1 1 0 011-1h16a1 1 0 110 2H1a1 1 0 01-1-1zm0 6a1 1 0 011-1h16a1 1 0 110 2H1a1 1 0 01-1-1zm1 5a1 1 0 100 2h16a1 1 0 100-2H1z"
                  fill="#A0AEC0"
                />
              </svg>
            </button>
          </div>
        </div>

        <nav>
          <div className="px-5 py-3 border-b border-gray-800">
            <a href="#" className="block font-semibold text-white">
              List your property
            </a>
            <a href="#" className="mt-3 block font-semibold text-white">
              Messages
            </a>
            <a href="#" className="mt-3 block font-semibold text-white">
              Trips
            </a>
          </div>
          <div>
            <div className="flex items-center">
              <img
                className="h-10 w-10 object-cover rounded-full border-2 border-gray-600"
                alt=""
                src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
              />
              <span>Hamid Raza</span>
            </div>
            <div>
              <a href="#">Account settings</a>
              <a href="#">Support</a>
              <a href="#">Sign out</a>
            </div>
          </div>
        </nav>
      </header>

      <section className="flex justify-between bg-gray-800 px-4 py-3 items-center">
        <div className="relative">
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
            className="bg-gray-900 text-white rounded-lg pl-10 py-2 pr-4  focus:outline-none focus:bg-white focus:text-gray-900"
            placeholder="Search by ketwords"
          />
        </div>

        <button className="flex items-center bg-gray-700 hover:bg-gray-600 focus:outline-none rounded-lg pl-4 pr-3 py-2">
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
      </section>

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
