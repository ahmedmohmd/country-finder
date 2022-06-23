//* Imports
import { DarkThemeToggle } from "flowbite-react";
import Search from "./Search";

//* NavBar JSX
function NavBar() {
  return (
    <header className="relative w-full mt-0 lg:mt-8 lg:w-36 bg-whale-light dark:bg-whale-dark">
      <div className="flex items-center justify-between p-5 mx-auto lg:flex-col">
        <div className="flex w-full gap-3 p-2 justify-evenly lg:justify-center lg:p-5 lg:flex-col bg-elephant-light dark:bg-elephant-dark rounded-2xl">
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
