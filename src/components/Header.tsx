import React from "react";

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-10 bg-white py-3 md:py-5 tracking-widest text-center">
      <h1 className="font-buzz text-yellow text-6xl md:text-8xl">{title}</h1>
    </header>
  );
};
