//* Imports
import { useParams } from "react-router-dom";
import useFetcher from "../utilities/fetcher";
import config from "../config/config.json";
import { ToastContainer, toast } from "react-toastify";

//* CountryPage JSX
function CountryPage() {
  const { name } = useParams();
  const {
    data = [[]],
    isLoading,
    isError,
  } = useFetcher(`${config.countriesApiBaseUrl}/name/${name}`);

  const {
    name: { common = "" } = "",
    capital = "",
    flag = "",
    maps: { googleMaps = "" } = "",
    population = "",
    continents: [cont = ""] = "",
  } = data[0];

  return (
    <div className="relative flex items-center justify-center w-full h-full p-5 lg:h-screen ">
      {isError ? (
        <div className="mt-20 lg:mt-0 lg:absolute w-44 sm:w-64 lg:w-auto lg:-translate-y-1/2 lg:top-1/2">
          <img src={"/images/404.svg"} className="max-w-full " alt="" />
        </div>
      ) : isLoading ? (
        <div class="pt-44 lg:pt-0 flex items-center justify-center space-x-2">
          <div class="w-8 h-8 bg-[#ea8763a9] rounded-full animate-ping"></div>
          <div class="w-8 h-8 bg-[#60c2e6a9] rounded-full animate-ping"></div>
          <div class="w-8 h-8 bg-[#e3567ea9] rounded-full animate-ping"></div>
        </div>
      ) : (
        <div className="flex items-center justify-center ">
          <div className="relative mt-20 overflow-x-auto shadow-md lg:w-[40rem]  lg:mt-0 rounded-xl">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Field
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Info
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    Name
                  </th>
                  <td className="px-6 py-4">{common}</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    Capital
                  </th>
                  <td className="px-6 py-4">{capital}</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    People
                  </th>
                  <td className="inline-flex items-center gap-2 px-6 py-4">
                    <span>{population}</span> Human
                  </td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    Containent
                  </th>
                  <td className="px-6 py-4">{cont}</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    Flag
                  </th>
                  <td className="px-6 py-4">{flag}</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    Map
                  </th>
                  <td className="px-6 py-4">
                    <a href={googleMaps} target="_blank">
                      <svg
                        aria-label="Google Maps"
                        role="img"
                        viewBox="0 0 512 512"
                        className="w-4"
                      >
                        <rect
                          id="a"
                          width="512"
                          height="512"
                          x="0"
                          y="0"
                          rx="15%"
                          fill="#fff"
                        />
                        <clipPath id="b">
                          <use href="#a" />
                        </clipPath>
                        <g clipPath="url(#b)">
                          <path fill="#35a85b" d="M0 512V0h512z" />
                          <path fill="#5881ca" d="M256 288L32 512h448z" />
                          <path fill="#c1c0be" d="M288 256L512 32v448z" />
                          <path
                            stroke="#fadb2a"
                            strokeWidth="71"
                            d="M0 512L512 0"
                          />
                          <path
                            fill="none"
                            stroke="#f2f2f2"
                            strokeWidth="22"
                            d="M175 173h50a50 54 0 1 1-15-41"
                          />
                          <path
                            fill="#de3738"
                            d="M353 85a70 70 0 0 1 140 0c0 70-70 70-70 157 0-87-70-87-70-157"
                          />
                          <circle cx="423" cy="89" r="25" fill="#7d2426" />
                        </g>
                      </svg>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
            <ToastContainer />
          </div>
        </div>
      )}
    </div>
  );
}

export default CountryPage;
