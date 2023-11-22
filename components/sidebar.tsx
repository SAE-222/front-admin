"use client"
import { TemplateIcon, ShoppingCartIcon, ShoppingBagIcon, UsersIcon, ChartSquareBarIcon, CogIcon } from "@heroicons/react/outline";
import Link from "next/link"
import { useState } from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import Image from 'next/image'
import logo from "./LogoNocif.jpg"



function classNames(...classes: string[]){
    return classes.filter (Boolean).join('')
}

const Sidebar = () => {
    const segment = useSelectedLayoutSegment()
    const sidebarOptions = [
        {name: "Dashboard", href: "/dashboard",icon: TemplateIcon, current: !segment ? true : false},
        {name: "Produits", href: "/dashboard/produits",icon: ShoppingBagIcon ,current: `/${segment}` ==="/produits" ? true : false},
        {name: "Commandes", href: "/dashboard/commandes",icon: ShoppingCartIcon ,current: `/${segment}` ==="/commandes" ? true : false},
        {name: "Clients", href: "/dashboard/clients",icon: UsersIcon ,current: `/${segment}` ==="/clients" ? true : false},
        {name: "Statistiques", href: "/dashboard/statistiques",icon: ChartSquareBarIcon ,current: `/${segment}` ==="/statistiques" ? true : false},
        {name: "Paramètres", href: "/dashboard/parametres",icon: CogIcon ,current: `/${segment}` ==="/parametres" ? true : false},
    ]

    return (
        <div className="p-3">
            <div className="lg:fixed lg:inset-y-0 lg:flex lg:w-72 lg:flex-col">
                <div className="flex grow flex-col gapy-y-5 overflow-y-auto bg-gray-100 px-6 pb-4 border-r-2">
                    <div className="flex h-16 shrink-0 items-center ">
                    <Image src={logo} alt="Large Image" layout="fixed" className="rounded-lg"  objectFit="cover" width={55} height={55}/>
                    </div>
                    <nav className="flex flex-1 flex-col">
                        <ul role="list" className="flex flex-1 flex-col gap-y-7">
                            <li>
                                <ul role="list" className="-mx-2 space-y-1">
                                    {
                                        sidebarOptions.map((option) =>(
                                            <li key={option.name} >
                                                <Link href={option.href} className={classNames(option.current ? "bg-gray-200 text-white" : "text-gray-700 hover:bg-gray-700", "group flex gap-x-3 rounded-md p-2 text-sm leading-6 fontsemibold hover:bg-gray-200" )}>
                                                <option.icon className="text-gray-700 group-hover:text-white h-6 w-6 shrink-0   "/>
                                                {option.name}
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>            
        </div>
    )
}

export default Sidebar

