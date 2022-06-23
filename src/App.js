//* Imports
import { Flowbite } from "flowbite-react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/common/NavBar";
import Home from "./components/Home";
import React, { useEffect, useState } from "react";
import config from "./config/config.json";
import useFetcher from "./utilities/fetcher";
import CountryPage from "./components/CountryPage";
import { ToastContainer, toast } from "react-toastify";

const CountriesContext = React.createContext();

//* App JSX
function App() {
  const [countries, setCountries] = useState([]);
  const [searchText, setSearchValue] = useState("all");
  const { data, isLoading, isError } = useFetcher(
    `${config.countriesApiBaseUrl}/${searchText}`
  );

  useEffect(() => {
    if (data) {
      setCountries(data);
    }
  }, [data]);

  return (
    <Flowbite>
      <CountriesContext.Provider
        value={{
          countries,
          onSelect: handleSelect,
          onSearch: handleSearch,
          isLoading,
          isError,
        }}
      >
        <div className="flex flex-col min-h-screen lg:flex-row dark:bg-whale-dark bg-whale-light">
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/country/:name" element={<CountryPage />} />
          </Routes>
        </div>
      </CountriesContext.Provider>
      <ToastContainer />
    </Flowbite>
  );

  function handleSelect(selectValue) {
    setSearchValue(selectValue);
  }

  function handleSearch(searchText) {
    const copyCountries = [...data];

    if (searchText) {
      const filteredCountries = [...countries].filter(
        (country) =>
          country.name.common.toLowerCase() === searchText.toLowerCase()
      );

      if (filteredCountries.length > 0) {
        setCountries(filteredCountries);
      } else {
        toast.error("Sorry, Country Not Found!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } else {
      setCountries(copyCountries);
    }
  }
}
export { CountriesContext };

export default App;
