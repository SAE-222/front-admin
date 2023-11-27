"use client"
import React from "react";
import Image from 'next/image';
import logo from "../components/LogoNocif.jpg";
import { ChevronDownIcon, SearchIcon, SunIcon } from "@heroicons/react/outline";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../node_modules/@radix-ui/react-dropdown-menu";

const Header = () => {
  return (
    <header className="self-end pl-14 pr-4 min-w-[550px] bg-gray-200 rounded-bl-full">
      <div className="flex justify-between">
        {/* Barre de recherche */}
        <SearchBar />
        <div className="flex">
        {/* Icône de soleil */}
        <div>
          <span className="px-4 ml-4">
            <SunIcon className="w-6 h-6 text-gray-700 cursor-pointer" />
          </span>
        </div>

        {/* Logo */}
        <div className="flex items-center px-4">
          <Image src={logo} className="rounded-full " alt="Logo" width={40} height={40} />
        </div>

        {/* Menu déroulant */}
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center cursor-pointer ">
            <ChevronDownIcon className="w-6 h-6 text-gray-700" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="text-gray-800">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      </div>
      
    </header>
  );
};

// Composant Barre de recherche
const SearchBar = () => {
  return (
    <div className="relative flex items-center">
      <input
        type="search"
        className="px-4 py-2 border rounded-md focus:outline-none focus:border-gray-700 text-black "
        placeholder="Recherher"
        aria-label="Recherher"
      />
      <span className="absolute right-4">
        <SearchIcon className="w-6 h-6 text-gray-700 cursor-pointer" />
      </span>
    </div>
  );
};

export default Header;