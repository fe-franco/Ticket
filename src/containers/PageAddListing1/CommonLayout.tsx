import useWindowSize from "hooks/useWindowResize";
import React from "react";
import { FC } from "react";

export interface CommonLayoutProps {
  index: string;
  nextBtnText?: string;
}


const CommonLayout: FC<CommonLayoutProps> = ({ index = "01", children }) => {
  const windowSize = useWindowSize();
  return (
    <div
      className={`nc-PageAddListing1 ${windowSize.width > 1400 ? "w-1/2" : "w-full"}  justify-items: center px-8 pb-10 pt-10 sm:py-10 lg:pb-10`}
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
