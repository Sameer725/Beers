import React from "react";

interface TooltipProps {
  message: string;
  children: React.ReactNode;
}

export const Tooltip = ({ message, children }: TooltipProps) => {
  return (
    <div className="relative flex flex-col  group">
      {children}

      <span className="absolute hidden group-hover:flex -left-1/2 -top-2 -translate-y-full w-40 p-2 bg-black rounded-sm text-center text-white text-sm after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-black">
        {message}
      </span>
    </div>
  );
};
