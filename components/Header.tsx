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
    <div className="grid grid-cols-3 gap-9 ">
      {/* Colonne 1 (vide) */}
      <div></div>
      {/* Colonne 2 (vide) */}
      <div></div>

      {/* Colonne 3 (contenu principal) */}
      <div className="container bg-gray-200 rounded-bl-[100px]">
        <header className="relative text-white  ">
          <div className="flex items-center ml-auto">
            {/* Barre de recherche */}
            <SearchBar />
            
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
              <DropdownMenuTrigger className="flex items-center cursor-pointer">
                <ChevronDownIcon className="w-6 h-6 text-gray-700" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="text-gray-800">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
      </div>
    </div>
  );
};

// Composant Barre de recherche
const SearchBar = () => {
  return (
    <div className="relative flex items-center">
      <input
        type="search"
        className="px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        placeholder="Search"
        aria-label="Search"
      />
      <span className="absolute right-4">
        <SearchIcon className="w-6 h-6 text-gray-700 cursor-pointer" />
      </span>
    </div>
  );
};

export default Header;
