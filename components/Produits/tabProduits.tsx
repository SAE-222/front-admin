"use client"
import chemise from "./images/chemise.jpg";  // Import the image directly
import React, { useState } from "react";
import Link from "next/link";

const TabProduits = () => {
  // Tableau de test avec des informations sur les produits
  const produits = [
    {
      id: 1,
      image: chemise,
      categorie: "Homme",
      nom: "Chemise élégante",
      disponibilite: "En stock",
      marque: "FashionCo",
    },
    {
      id: 2,
      image: chemise,
      categorie: "Femme",
      nom: "Robe de soirée",
      disponibilite: "Épuisé",
      marque: "ChicBrand",
    },
    {
      id: 3,
      image: chemise,
      categorie: "Homme",
      nom: "Pantalon de costume",
      disponibilite: "En stock",
      marque: "ClassyWear",
    },
    {
      id: 4,
      image: chemise,
      categorie: "Unisexe",
      nom: "T-shirt décontracté",
      disponibilite: "En stock",
      marque: "CasualStyle",
    },
    {
      id: 5,
      image: chemise,
      categorie: "Unisexe",
      nom: "Chaussures de sport",
      disponibilite: "En stock",
      marque: "ActiveGear",
    },
    {
      id: 6,
      image: chemise,
      categorie: "Homme",
      nom: "Chemise rayée",
      disponibilite: "Épuisé",
      marque: "StripeFashion",
    },
    {
      id: 7,
      image: chemise,
      categorie: "Femme",
      nom: "Robe d'été",
      disponibilite: "En stock",
      marque: "SummerChic",
    },
    {
      id: 8,
      image: chemise,
      categorie: "Unisexe",
      nom: "T-shirt graphique",
      disponibilite: "En stock",
      marque: "GraphicWear",
    },
    {
      id: 9,
      image: chemise,
      categorie: "Femme",
      nom: "Pantalon décontracté",
      disponibilite: "Épuisé",
      marque: "RelaxedStyle",
    },
    {
      id: 10,
      image: chemise,
      categorie: "Homme",
      nom: "Chaussures de ville",
      disponibilite: "En stock",
      marque: "CityWalk",
    },
    {
      id: 11,
      image: chemise,
      categorie: "Unisexe",
      nom: "T-shirt à capuche",
      disponibilite: "En stock",
      marque: "HoodieStyle",
    },
    {
      id: 12,
      image: chemise,
      categorie: "Femme",
      nom: "Robe casual",
      disponibilite: "En stock",
      marque: "CasualWear",
    },
  ];

  const [products, setProducts] = useState(produits);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleSearch = (query) => {
    const filteredProducts = produits.filter((product) =>
      product.nom.toLowerCase().includes(query.toLowerCase())
    );
    setProducts(filteredProducts);
    setSearchQuery(query);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    const filteredProducts =
      category === "All"
        ? produits
        : produits.filter((product) => product.categorie === category);
    setProducts(filteredProducts);
  };

  const categories = ["All", "Homme", "Femme", "Unisexe"]; 

  return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <div className="p-2 bg-gray-100 dark:bg-gray-900 items-center justify-between">
            <div className="flex justify-between">
              <div>
                <label htmlFor="table-search" className="sr-only">
                  Search
                </label>
                <div className="relative mt-1">
                  <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="table-search"
                    className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Rechercher des produits"
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                  />
                </div>
              </div>
      
              <div className="py-2">
                <Link
                  href="/dashboard/produits/ajouter"
                  className="inline-block rounded-md bg-blue-600 p-1 text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-500 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] active:bg-blue-600 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                >
                  Ajouter Produit
                </Link>
              </div>
            </div>
      
            <div>
              <label htmlFor="category-select" className="sr-only">
                Select Category
              </label>
              <select
                id="category-select"
                className="block w-30 text-gray-700 bg-gray-100"
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Image
                </th>
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Catégorie
                </th>
                <th scope="col" className="px-6 py-3">
                  Nom
                </th>
                <th scope="col" className="px-6 py-3">
                  Disponibilité
                </th>
                <th scope="col" className="px-6 py-3">
                  Marque
                </th>
                
              </tr>
            </thead>
            <tbody>
              {products.map((produit) => (
                <tr
                  key={produit.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="px-6 py-4">
                    <img
                      src={produit.image.src}
                      alt={produit.nom}
                      className="w-10 h-10 object-cover rounded"
                    />
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {produit.id}
                  </td>
                  <td className="px-6 py-4">{produit.categorie}</td>
                  <td className="px-6 py-4">{produit.nom}</td>
                  <td className="px-6 py-4">
                    {produit.disponibilite === "En stock" ? (
                      <span className="text-green-500">{produit.disponibilite}</span>
                    ) : (
                      <span className="text-red-500">{produit.disponibilite}</span>
                    )}
                  </td>
                  <td className="px-6 py-4">{produit.marque}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  );
};
  

export default TabProduits;
