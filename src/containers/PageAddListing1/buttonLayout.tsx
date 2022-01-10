import React from "react";
import { FC } from "react";

export interface ButtonLayoutProps {
  index: string;
  nextBtnText?: string;
}

const ButtonLayout: FC<ButtonLayoutProps> = ({ index = "01", children }) => {
  return (
    <div
      className={`nc-PageAddListing1 col-span-2 px-4 max-w-3xl pb-10 pt-10 sm:py-10 lg:pb-10`}
      data-nc-id="PageAddListing1"
      style={{minWidth:'40%'}}
    >
      <div className="space-y-6">


        {/* --------------------- */}
        <div>{children}</div>

        {/* --------------------- */}
      </div>
    </div>
  );
};

export default ButtonLayout;
