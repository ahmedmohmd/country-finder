import { useContext, useState } from "react";
import { CountriesContext } from "../App";
import Country from "./common/Country";

function Countries() {
  const [searchText, setSearchText] = useState("");
  const { countries, isLoading, onSearch } = useContext(CountriesContext);

  return (
    <div className="flex flex-col items-center justify-center w-full gap-8 py-12">
      <div className="flex items-center justify-start w-full px-5 ">
        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-between gap-2 "
        >
          <button
            type="submit"
            class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-2xl text-sm px-5 py-4 text-center"
          >
            Search
          </button>
          <input
            type="text"
            placeholder="type country name..."
            className="w-full py-3 font-semibold border-2 border-transparent border-gray-200 outline-none placeholder:text-gray-300 dark:placeholder:text-slate-500 ring-0 focus:border-blue-400 dark:focus:border-blue-400 dark:border-transparent sm:w-auto rounded-xl grow dark:bg-elephant-dark dark:text-slate-300"
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
        </form>
      </div>

      {isLoading ? (
        <div class="px-5 ">
          <div class="flex flex-wrap -m-4">
            {Array(15)
              .fill(0)
              .map(() => {
                return (
                  <div class="grow p-4 md:w-1/2 lg:w-1/3  xl:w-1/4">
                    <div class="border-2 border-gray-200 dark:border-slate-500/50  h-full border-opacity-60 rounded-2xl overflow-hidden">
                      <div class="lg:h-48 bg-gray-400 dark:bg-slate-600/50 md:h-36 w-full object-cover object-center"></div>
                      <div class="p-6">
                        <h2 class="bg-gray-400 dark:bg-slate-400 animate-pulse h-4 w-1/4 mb-2"></h2>
                        <h1 class="w-1/2 mb-4 h-6 animate-pulse bg-gray-500 dark:bg-gray-500"></h1>
                        <p class="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400 dark:bg-gray-500"></p>
                        <p class="leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-400 dark:bg-gray-500"></p>
                        <p class="leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-400 dark:bg-gray-500"></p>
                        <div class="flex items-center flex-wrap ">
                          <a class="bg-indigo-300 h-4 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0"></a>
                          <span class="bg-indigo-300 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      ) : (
        <div class="px-5 self-start">
          <div class="flex flex-wrap -m-4">
            {countries.map(
              ({
                name: { common },
                flags: { svg },
                flag,
                region,
                population,
              }) => {
                return (
                  <Country
                    name={common}
                    cover={svg}
                    flage={flag}
                    continent={region}
                    people={population}
                  />
                );
              }
            )}
          </div>
        </div>
      )}
    </div>
  );

  function handleSubmit(event) {
    event.preventDefault();
    // console.log(searchText);
    onSearch(searchText);
  }
}

export default Countries;
