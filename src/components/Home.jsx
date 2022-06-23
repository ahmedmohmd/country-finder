//* Imports
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
}

export default Home;
