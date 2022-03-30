import React, { FC, SelectHTMLAttributes } from "react";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
  sizeClass?: string;
}

const Select: FC<SelectProps> = ({
  className = "",
  sizeClass = "h-14",
  children,
  ...args
}) => {
  return (
    <select
      className={`${sizeClass} ${className} block w-full text-sm rounded-3xl bg-white border-none dark:bg-neutral-900`}
      {...args}
    >
      {children}
    </select>
  );
};

export default Select;
