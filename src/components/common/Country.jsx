//* Imports
import { Link } from "react-router-dom";

//* Country JSX
function Country({ name, region, flage, people, cover, continent }) {
  return (
    <div className="py-4 grow sm:p-4 lg:w-1/2 xl:w-1/4">
      <div className="h-full overflow-hidden duration-500 shadow hover:shadow-xl border-opacity-60 rounded-2xl hover:-translate-y-1">
        <img
          className="object-cover object-center w-full lg:h-48 md:h-36"
          src={cover}
          alt="blog"
        />
        <div className="p-6 bg-white dark:bg-elephant-dark">
          <h2 className="mb-1 text-xs font-medium tracking-widest text-gray-400 title-font">
            {continent}
          </h2>
          <Link
            to={`/country/${name}`}
            className="mb-3 text-lg font-bold text-gray-500 title-font dark:text-slate-300"
          >
            {name}
          </Link>
          <div className="flex flex-wrap items-center ">
            <Link
              to={`/country/${name}`}
              className="inline-flex items-center text-indigo-500 md:mb-2 lg:mb-0"
            >
              Learn More
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </Link>
            <span className="inline-flex items-center gap-2 py-1 pr-3 ml-auto mr-3 text-sm leading-none text-gray-400 border-r-2 border-gray-200 lg:ml-auto md:ml-0 dark:border-slate-500">
              <svg
                width="25px"
                height="25px"
                viewBox="0 0 512 512"
                fill="#cbd5e1"
              >
                <title>ionicons-v5-j</title>
                <path d="M336,256c-20.56,0-40.44-9.18-56-25.84-15.13-16.25-24.37-37.92-26-61-1.74-24.62,5.77-47.26,21.14-63.76S312,80,336,80c23.83,0,45.38,9.06,60.7,25.52,15.47,16.62,23,39.22,21.26,63.63h0c-1.67,23.11-10.9,44.77-26,61C376.44,246.82,356.57,256,336,256Zm66-88h0Z" />
                <path d="M467.83,432H204.18a27.71,27.71,0,0,1-22-10.67,30.22,30.22,0,0,1-5.26-25.79c8.42-33.81,29.28-61.85,60.32-81.08C264.79,297.4,299.86,288,336,288c36.85,0,71,9,98.71,26.05,31.11,19.13,52,47.33,60.38,81.55a30.27,30.27,0,0,1-5.32,25.78A27.68,27.68,0,0,1,467.83,432Z" />
                <path d="M147,260c-35.19,0-66.13-32.72-69-72.93C76.58,166.47,83,147.42,96,133.45,108.86,119.62,127,112,147,112s38,7.66,50.93,21.57c13.1,14.08,19.5,33.09,18,53.52C213.06,227.29,182.13,260,147,260Z" />
                <path d="M212.66,291.45c-17.59-8.6-40.42-12.9-65.65-12.9-29.46,0-58.07,7.68-80.57,21.62C40.93,316,23.77,339.05,16.84,366.88a27.39,27.39,0,0,0,4.79,23.36A25.32,25.32,0,0,0,41.72,400h111a8,8,0,0,0,7.87-6.57c.11-.63.25-1.26.41-1.88,8.48-34.06,28.35-62.84,57.71-83.82a8,8,0,0,0-.63-13.39C216.51,293.42,214.71,292.45,212.66,291.45Z" />
              </svg>
              <span className="text-gray-400 dark:text-slate-300 text-bold">
                {people}
              </span>
            </span>
            <span className="inline-flex items-center text-sm leading-none text-gray-400">
              <span>{flage}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Country;
