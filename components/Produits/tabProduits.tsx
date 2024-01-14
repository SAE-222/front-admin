"use client"
import chemise from "./images/chemise.jpg";  // Import the image directly
import React, { useState } from "react";
import Link from "next/link";
import { TrashIcon } from "@heroicons/react/outline";


const TabProduits = () => {
  // Tableau de test avec des informations sur les produits
  const produits = [
    {
      id: 1,
      image: "https://img01.ztat.net/article/spp-media-p1/74822df60b5e432289ea05491b0eb717/168b87e9abc24da49c9e8d0abe63c673.jpg?imwidth=1800",
      categorie: "Homme",
      nom: "Doudoune",
      disponibilite: "En stock",
      marque: "The North Face",
    },
    {
      id: 2,
      image: "https://img01.ztat.net/article/spp-media-p1/bd19d9ae87c04f4aab52bb9adad9b415/a77b31d845e149358ed1ac40e7be65f4.jpg?imwidth=1800&filter=packshot",
      categorie: "Homme",
      nom: "Sacoche",
      disponibilite: "Épuisé",
      marque: "Carhartt",
    },
    {
      id: 3,
      image: "https://img01.ztat.net/article/spp-media-p1/25497c6b498a4ec58d9f81c83f94586f/0023bc3485d34a8c9eaf07f22581e097.jpg?imwidth=1800",
      categorie: "Homme",
      nom: "T-shirt",
      disponibilite: "En stock",
      marque: "Adidas",
    },
    {
      id: 4,
      image: "https://img01.ztat.net/article/spp-media-p1/d84684eafa4b4c8aa85fbdddcfe56652/287742068bd2400691e93e8d07b53d1d.jpg?imwidth=1800",
      categorie: "Homme",
      nom: "Sweat",
      disponibilite: "En stock",
      marque: "Nike",
    },
    {
      id: 5,
      image: "https://i1.adis.ws/i/carhartt_wip/I032699_01_02-ST-01/double-knee-pant-blue-rinsed-111.png?$pdp_02$",
      categorie: "Homme",
      nom: "Jean",
      disponibilite: "En stock",
      marque: "Carhartt",
    },
    {
      id: 6,
      image: "https://img01.ztat.net/article/spp-media-p1/056828a233e34eaca8c550b1c1ca2b6b/7a91a66d83ab44f3ac4f7f128af93e39.jpg?imwidth=1800",
      categorie: "Femme",
      nom: "Doudoune Ralph Lauren",
      disponibilite: "Épuisé",
      marque: "Ralph Lauren",
    },
    {
      id: 7,
      image: "https://img01.ztat.net/article/spp-media-p1/570035c5a9334132a468c8cf6a591028/6dc6db080f2f44fdb8312fdad7048f9e.jpg?imwidth=1800",
      categorie: "Femme",
      nom: "Doudoune Lacoste",
      disponibilite: "En stock",
      marque: "Lacoste",
    },
    {
      id: 8,
      image: "https://img01.ztat.net/article/spp-media-p1/7c3eb32a9d29489bb1f3dbb35bd8319b/366e13f233b14776930e87c31b398d99.jpg?imwidth=762",
      categorie: "Femme",
      nom: "Sweat Ralph Lauren",
      disponibilite: "En stock",
      marque: "Ralph Lauren",
    },
    {
      id: 9,
      image: "https://img01.ztat.net/article/spp-media-p1/6cbf9c1f1bbf488393897cef08a754c0/885c3d2d277342099bb79887f88460ed.jpg?imwidth=1800",
      categorie: "Femme",
      nom: "Sweat Carhartt",
      disponibilite: "Épuisé",
      marque: "Carhartt",
    },
    {
      id: 10,
      image: "https://img01.ztat.net/article/spp-media-p1/e04f7c1a25c044399811ea125dedcd22/67f792f2d85f47c79ec9931e5195caa4.jpg?imwidth=1800",
      categorie: "Femme",
      nom: "T-shirt Adidas",
      disponibilite: "En stock",
      marque: "Adidas",
    },
    {
      id: 11,
      image: "https://img01.ztat.net/article/spp-media-p1/f3b5d2c9afbb48d0b87bda458e796344/e74e3ce20744413a9d489c236351fcd9.jpg?imwidth=1800",
      categorie: "Unisexe",
      nom: "T-shirt Levi's",
      disponibilite: "En stock",
      marque: "Levi's",
    },
    {
      id: 12,
      image: "https://img01.ztat.net/article/spp-media-p1/9ca949b58e47340fab8c34ca80d0662a/6db930d2ddc543ce87909f621444038a.jpg?imwidth=1800",
      categorie: "Homme",
      nom: "Jogging Nike",
      disponibilite: "En stock",
      marque: "Nike",
    },
    {
      id: 13,
      image: "https://img01.ztat.net/article/spp-media-p1/687a3b3a03e146bfa299999fc7993da7/ac35c4ed73684dae93ae4b4543969c4c.jpg?imwidth=1800",
      categorie: "Homme",
      nom: "Chemise Levi's",
      disponibilite: "En stock",
      marque: "Levi's",
    },
    {
      id: 14,
      image: "https://img01.ztat.net/article/spp-media-p1/c391c5552af741f09cd31817bfc5b60d/9717ffeb1e1c4e7690418775638405cd.jpg?imwidth=762",
      categorie: "Homme",
      nom: "Polo Ralph lauren",
      disponibilite: "En stock",
      marque: "Ralph Lauren",
    },
    {
      id: 15,
      image: "https://img01.ztat.net/article/spp-media-p1/f1d4a4ab7f4b4057ba176fdf5ed9e19e/6cef8a7a60774900ae86e7c0718162a8.jpg?imwidth=1800",
      categorie: "Homme",
      nom: "Veste Lacoste",
      disponibilite: "En stock",
      marque: "Lacoste",
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

  const handleDelete = (id) => {
    // Display confirmation message before deleting
    const shouldDelete = window.confirm("Êtes-vous sûr de vouloir supprimer ce produit ?");
    
    if (shouldDelete) {
      const updatedProducts = products.filter((product) => product.id !== id);
      setProducts(updatedProducts);
    }
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
                    className="item-center block ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                <th scope="col" className="px-6 py-3">
                  Détails
                </th>
                <th scope="col" className="px-6 py-3">
                  
                </th>
                
              </tr>
            </thead>
            <tbody>
            {products.map((produit) => (
          <tr
            key={produit.id}
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <td className="px-6 py-1">
              <a href={produit.image} target="_blank" rel="noopener noreferrer">
                <img
                  src={produit.image}
                  alt={produit.nom}
                  className="w-16  object-cover rounded"
                />
              </a>
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
                  <td className="px-6 py-4">
                    <Link className="item-center border-2 p-1 rounded-lg text-black bg-gray-200" href="/dashboard/produits/details">
                      Afficher Details
                    </Link>
                  </td>
                  
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleDelete(produit.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <TrashIcon className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  );
};
  

export default TabProduits;
