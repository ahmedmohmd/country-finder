//* Imports
import { useContext, useState } from "react";
import { CountriesContext } from "../App";
import Country from "./common/Country";

//* Countries JSX
function Countries() {
  const [searchText, setSearchText] = useState("");
  const { countries, isLoading, onSearch, isError } =
    useContext(CountriesContext);

  return (
    <div className="flex flex-col items-center justify-center w-full gap-8 py-12 ">
      <div className="flex items-center justify-start w-full px-5">
        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-between gap-2 "
        >
          <button
            type="submit"
            className="px-5 py-4 text-sm font-medium text-center text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-2xl"
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
        <div className="self-start px-5">
          <div className="flex flex-wrap -m-4 ">
            {Array(15)
              .fill(0)
              .map((item, index) => {
                return (
                  <div
                    className="p-4 grow md:w-1/2 lg:w-1/3 xl:w-1/4"
                    key={index}
                  >
                    <div className="h-full overflow-hidden border-2 border-gray-200 dark:border-slate-500/50 border-opacity-60 rounded-2xl">
                      <div className="object-cover object-center w-full bg-gray-400 lg:h-48 dark:bg-slate-600/50 md:h-36"></div>
                      <div className="p-6">
                        <h2 className="w-1/4 h-4 mb-2 bg-gray-400 dark:bg-slate-400 animate-pulse"></h2>
                        <h1 className="w-1/2 h-6 mb-4 bg-gray-500 animate-pulse dark:bg-gray-500"></h1>
                        <p className="w-full h-3 mb-3 leading-relaxed bg-gray-400 animate-pulse dark:bg-gray-500"></p>
                        <p className="w-2/3 h-3 mb-3 leading-relaxed bg-gray-400 animate-pulse dark:bg-gray-500"></p>
                        <p className="w-1/2 h-3 mb-3 leading-relaxed bg-gray-400 animate-pulse dark:bg-gray-500"></p>
                        <div className="flex flex-wrap items-center ">
                          <a className="inline-flex items-center w-32 h-4 mt-2 bg-indigo-300 animate-pulse md:mb-2 lg:mb-0"></a>
                          <span className="inline-flex items-center w-16 h-4 px-2 py-1 pr-5 mt-2 ml-auto mr-3 text-sm leading-none bg-indigo-300 animate-pulse"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      ) : isError ? (
        <div className="mt-20 lg:mt-0 lg:absolute w-44 sm:w-64 lg:w-auto lg:-translate-y-1/2 lg:top-1/2">
          <img src={"/images/404.svg"} className="max-w-full " alt="" />
        </div>
      ) : (
        <div className="self-start px-5">
          <div className="flex flex-wrap -m-4">
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
                    key={flag}
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
    onSearch(searchText);
  }
}

export default Countries;
