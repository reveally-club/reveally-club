import { useState } from "react";
import { useRouter } from "next/router";
import { useSearchThreadQuery } from "../../modules/reducers/thread";
import { track } from "@amplitude/analytics-browser";

import useDebounce from "../../modules/hooks/useDebounce";
import useDidMountEffect from "../../modules/hooks/useDidMountEffect";

const SearchBar = () => {
  const router = useRouter();
  const [text, setText] = useState("");
  const [hidden, setHidden] = useState(true);

  const debouncedText = useDebounce(text, 500);

  const { data: thread } = useSearchThreadQuery(debouncedText);

  useDidMountEffect(() => {
    const eventProperties = {
      "Search Term": text,
    };

    track("Search Content", eventProperties);
  }, [text]);

  return (
    <>
      <form
        className="flex items-center lg:ml-4"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label className="sr-only">Search</label>
        <div className="relative w-full">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-1.5"
            placeholder="Search"
            onChange={(e) => {
              setHidden(false);
              setText(e.target.value);
            }}
          />
        </div>
      </form>
      {!hidden && (
        <ul className="absolute bg-white border border-gray-100 flex flex-col items-center lg:ml-4 mt-2">
          {thread?.data.data.map((data, index) => (
            <li
              key={index}
              className="w-full pl-4 pr-2 py-1 border-b-2 border-gray-100 relative cursor-pointer hover:bg-yellow-50 hover:text-gray-900 flex"
              onClick={() => {
                router.push(`/threads/${data.id}`);
              }}
            >
              {data.title}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default SearchBar;
