import Image from 'next/image';
import React from "react";

const ProduitDetails = () => {
  const produit = {
    id: 3,
    image: "https://img01.ztat.net/article/spp-media-p1/25497c6b498a4ec58d9f81c83f94586f/0023bc3485d34a8c9eaf07f22581e097.jpg?imwidth=1800",
    categorie: "Homme",
    nom: "T-shirt",
    description: "Tee-shirt manche courte Adidas Homme",
    disponibilite: "En stock",
    stock: 50,
    marque: "Adidas",
    prix: "19,99 € ",
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Détails du Produit</h1>
      <div className='flex p-2 h-[780px]'>
            <div>
            <img
                  src={produit.image}
                  alt={produit.nom}
                  className="w-[300px]  object-cover rounded"
                />
            </div>
            <div>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="px-6 py-4 text-black font-semibold">ID:</td>
                        <td>{produit.id}</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="px-6 py-4 text-black font-semibold">Catégorie:</td>
                        <td>{produit.categorie}</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="px-6 py-4 text-black font-semibold">Nom:</td>
                        <td>{produit.nom}</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="px-6 py-4 text-black font-semibold">Prix:</td>
                        <td>{produit.prix}</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="px-6 py-4 text-black font-semibold">Description:</td>
                        <td>{produit.description}</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="px-6 py-4 text-black font-semibold">Disponibilité:</td>
                        <td>{produit.disponibilite}</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="px-6 py-4 text-black font-semibold">Stock:</td>
                        <td>{produit.stock}</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="px-6 py-4 text-black font-semibold">Marque:</td>
                        <td>{produit.marque}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
      </div>
    </div>
  );
};

export default ProduitDetails;
