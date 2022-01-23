import useWindowSize from "hooks/useWindowResize";
import React from "react";
import { FC } from "react";

export interface CommonLayoutProps {
  index: string;
  nextBtnText?: string;
  className?: string;
}


const CommonLayout: FC<CommonLayoutProps> = (
  { index = "01", children },
  className
) => {
  
 
  return (
    <div
      className={`nc-PageAddListing1 w-full ${className} justify-items: center `}
      data-nc-id="PageAddListing1"
      style={{minWidth:'40%'}}
    >
      <div className="space-y-6">
        <div> 
          <span className="text-4xl font-semibold">{index}</span>{" "}
        </div>

        {/* --------------------- */}
        <div className="listingSection__wrap">{children}</div>

        {/* --------------------- */}
      </div>
    </div>
  );
};

export default CommonLayout;
