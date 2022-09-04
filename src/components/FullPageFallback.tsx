import React from "react";

import clsx from "clsx";

interface FullPageFallBackProps {
  message?: string;
  className?: string;
}

export const FullPageFallback = ({
  message = "Loading...",
  className,
}: FullPageFallBackProps) => {
  return (
    <div className=" flex h-screen justify-center items-center ">
      <div className="prose prose-2xl">
        <h3
          className={clsx("tracking-widest text-yellow font-buzz", className)}
        >
          {message}
        </h3>
      </div>
    </div>
  );
};
