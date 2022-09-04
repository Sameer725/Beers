import React from "react";

import clsx from "clsx";

interface GridProps {
  children: React.ReactNode;
  className?: string;
}

export const Grid = ({ children, className }: GridProps) => {
  return (
    <ul className={clsx("grid grid-cols-1 md:grid-cols-2 gap-10", className)}>
      {children}
    </ul>
  );
};

//separate type definition for each component because each component can have different properties, though for now both the interface are same

interface GridItemProps {
  children: React.ReactNode;
  className?: string;
}

export const GridItem = ({ children, className }: GridItemProps) => {
  return (
    <li
      className={clsx(
        "relative bg-white pl-4 py-4 shadow-md rounded-md  flex cursor-pointer items-center",
        className
      )}
    >
      {children}
    </li>
  );
};
