import Link from "next/link";
import React from "react";
import { track } from "@amplitude/analytics-browser";

const LeftNav: React.FC = () => {
  const onClickLink = (path: string): void => {
    const eventProperties = {
      Navigation: path,
    };

    track("Click Project Information", eventProperties);
  };

  const onClickAdRequest = (): void => {
    track("Click Ad Request Button");
  };

  return (
    <div className="w-48 hidden border-r pt-4 lg:block">
      <ul className="flex flex-col gap-2 text-sm">
        <li>
          <Link
            className="flex items-center hover:font-bold"
            href="/"
            onClick={() => {
              onClickLink("Home");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            Home
          </Link>
        </li>
        <li className="mt-8 mr-8">
          <Link
            className="flex rounded-md text-center justify-center p-2 items-center hover:font-bold text-white text-sm bg-gradient-to-r from-sky-400 to-violet-400"
            href="https://litt.ly/reveally"
            target="_blank"
            onClick={onClickAdRequest}
          >
            무료로 광고 <br /> 업로드
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LeftNav;
