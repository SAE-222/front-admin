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
    <div className="grid grid-cols-3 divide-x">
        {/* Colonne 1 (vide) */}
        <div></div>



        {/* Colonne 2 (contenu principal) */}
        <div className="container mx-auto flex items-center justify-between relative z-10 bg-gray-200 rounded-bl-[100px]">
            <header className="relative text-white p-4">
                <div className="flex items-center ml-auto">
                    {/* Barre de recherche */}
                    <SearchBar />
                    <div>
                        <span className="px-4 ml-4">
                            <SunIcon className="w-6 h-6 text-gray-700" />
                        </span>
                    </div>
                    <div className="flex items-center px-4">
                        <Image src={logo} className="rounded-full" alt="Logo" width={40} height={40} />
                    </div>
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
        <SearchIcon className="w-6 h-6 text-gray-700" />
      </span>
    </div>
  );
};

export default Header;


