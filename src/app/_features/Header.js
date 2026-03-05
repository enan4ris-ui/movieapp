"use client";

import React from "react";
import Filmicon from "../_icons/Filmicon";
import Filmtitle from "../_icons/Filmtitle";
import { Genre } from "../_components/Genre";
import Search from "../_components/Search";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="w-full min-h-9 p-4 grid grid-cols-[auto_1fr_auto] items-center mb-6 pl-20 pr-20 transition-colors duration-300">
      <Link
        href="/"
        className="w-[90px] flex gap-2 items-center cursor-pointer hover:opacity-80 transition"
      >
        <div className="w-[18px] h-[19px]">
          <Filmicon />
        </div>
        <div className="w-16 h-5 flex items-center">
          <Filmtitle />
        </div>
      </Link>

      <div className="flex w-[488px] min-h-9 gap-4 justify-self-center">
        <div className="w-[97px] border flex items-center justify-center rounded-md border-[#e4e4e7] py-1 pr-4 pl-4">
          <Genre />
        </div>

        <Search />
      </div>

      <div className="w-[90px]" aria-hidden="true" />
    </header>
  );
};
