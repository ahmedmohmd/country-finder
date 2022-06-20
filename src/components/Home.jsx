import useFetcher from "../utilities/fetcher";
import Search from "./common/Search";
import config from "../config/config.json";
import { useEffect, useState } from "react";
import Country from "./common/Country";
import Countries from "./Countries";

//* Home JSX
function Home() {
  return (
    <div className="w-full dark:bg-whale-dark bg-whale-light">
      <div className="flex flex-col items-center justify-center gap-20 px-5 mx-auto ">
        <Countries />
      </div>
    </div>
  );

  // function handleSearch(searchText) {
  //   const copyCountries = [...data];

  //   if (searchText) {
  //     const filteredCountries = [...countries].filter(
  //       (country) =>
  //         country.name.common.toLowerCase() === searchText.toLowerCase()
  //     );

  //     if (filteredCountries.length > 0) {
  //       setCountries(filteredCountries);
  //     } else {
  //       console.log("Not Found!");
  //     }
  //   } else {
  //     setCountries(copyCountries);
  //   }
  // }
}

export default Home;
