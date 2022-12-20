import React, { ReactNode } from "react";

const Popup = ({ children }: { children: ReactNode }) => {

    return (
        <div className="absolute bg-black bg-opacity-50 min-h-full w-full z-10 p-4 md:p-12">
            {children!}
        </div>
    );
};

export default Popup;