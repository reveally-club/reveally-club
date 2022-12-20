import React, { useEffect, useState } from "react";
import { useCategory } from "../../hooks/fetcher";
import { ICategory } from "../../types";

const Category: React.FC = () => {
  const { data, isLoading } = useCategory();
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen border-r pt-4 pr-4">
      {/* <ul className="flex flex-col gap-2 text-sm">
                <button onClick={() => { setOpen(!open) }} className="flex items-center hover:font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                    <p className="w-full text-left">Category</p>
                    {open ?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                        </svg>
                        : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    }
                </button>
                {open && <li className="flex flex-col">
                    {!isLoading && data.map((data: ICategory) => (
                        <Link to={data.route} className="p-2 hover:bg-slate-100 hover:font-bold">
                            {data.name}
                        </Link>
                    ))}
                </li>}
            </ul> */}
    </div>
  );
};

export default Category;
