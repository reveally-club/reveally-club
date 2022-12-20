import React from "react";
import { Link } from "react-router-dom";
import { IThread } from "../../types";
import { shortenAddress } from "../../utils";
import { useThreads } from "../../hooks/fetcher";

const HotThread: React.FC = () => {
  const { data, isLoading } = useThreads();

  return (
    <div className="pt-4 pl-4">
      <div className="w-full border p-2 rounded">
        <h5 className="text-base font-bold">🔥HOT THREAD🔥</h5>
        <div className="flex flex-col gap-4" id="trading-list">
          {!isLoading &&
            data.map((data: IThread) => (
              <Link
                to={`/post/${data.id}`}
                className="mt-1 p-1 hover:bg-slate-100 h-24 overflow-auto"
              >
                <div>
                  <h6 className="flex text-sm leading-6 line-clamp-3">
                    {data.content[0]}
                  </h6>
                  <div className="flex">
                    <p className="flex text-xs items-center mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                        />
                      </svg>
                      <p className="ml-1 font-semibold">
                        {shortenAddress(data.author)}
                      </p>
                    </p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HotThread;
