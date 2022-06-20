//* Imports
import { DarkThemeToggle } from "flowbite-react";
import Search from "./Search";

//* NavBar JSX
function NavBar() {
  return (
    <header class="mt-0 lg:mt-8 relative w-full lg:w-36 bg-whale-light dark:bg-whale-dark">
      <div class="  justify-between items-center mx-auto flex  lg:flex-col p-5">
        <div className="flex w-full gap-3 p-2 justify-evenly lg:justify-center lg:p-5 lg:flex-col bg-elephant-light dark:bg-elephant-dark rounded-2xl">
          {/* <a class="flex justify-center items-center title-font font-medium items-center text-gray-900 ">
            <span class="text-2xl font-bold text-slate-700 dark:text-slate-300">
              W
            </span>
          </a> */}
          <Search />
          <div className="flex items-center justify-center mt-0 md:order-2 lg:mt-64">
            <DarkThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
