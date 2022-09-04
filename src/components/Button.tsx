import React from "react";

import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<any> {
  children: React.ReactNode;
}

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={clsx("text-blue p-6 font-sober tracking-widest", className)}
      {...props}
    >
      {children}
    </button>
  );
};
