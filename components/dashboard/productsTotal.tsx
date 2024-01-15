import React from 'react';
import { ShoppingBagIcon} from "@heroicons/react/outline";

const ProductsTotal = () => {
  const totalProducts = 144;

  return (
    <div className="bg-gray-100 rounded-lg px-4 py-4 flex items-center">
      <div className="mr-4">
        <ShoppingBagIcon className="w-16 h-16 text-white bg-blue-400 rounded-full p-2" />
      </div>

      <div>
        <h2 className="">Total de produits</h2>
        <p className="font-semibold">{totalProducts}</p>
      </div>
    </div>
  );
};

export default ProductsTotal;