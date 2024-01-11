import Image from 'next/image';
import chemise from "./images/chemise.jpg";
import React from "react";

const ProduitDetails = () => {
  const produit = {
    id: 1,
    image: chemise,
    categorie: "Homme",
    nom: "Chemise élégante",
    description: "Découvrez l'élégance intemporelle avec notre Chemise Élégante FashionCo, une pièce incontournable pour toute garde-robe sophistiquée. Conçue pour allier confort et style, cette chemise incarne la perfection artisanale. Découvrez l'élégance intemporelle avec notre Chemise Élégante FashionCo, une pièce incontournable pour toute garde-robe sophistiquée. Conçue pour allier confort et style, cette chemise incarne la perfection artisanale.",
    disponibilite: "En stock",
    stock: 20,
    marque: "FashionCo",
    prix: "39,99 € ",
  };

  return (
    <div className="">
      <h1 className="text-3xl font-bold mb-4">Détails du Produit</h1>
      <div className='flex p-2'>
            <div>
            <Image src={chemise} alt="Large Image" layout="fixed" className="rounded-lg" objectFit="cover" width={600} height={50} />
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
