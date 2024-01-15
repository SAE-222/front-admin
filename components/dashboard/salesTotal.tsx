import React from 'react';
import { CurrencyEuroIcon } from "@heroicons/react/outline";

const SalesTotal = () => {
  const totalSales = 4285.55; 

  return (
    <div className="bg-gray-100 rounded-lg px-4 py-4 flex items-center">
      <div className="mr-4">
        <CurrencyEuroIcon className="w-16 h-16 text-white bg-orange-300 rounded-full p-2" />
      </div>

      <div>
        <h2 className="">Total de ventes (mensuel)</h2>
        <p className="font-semibold">{totalSales} €</p>
      </div>
    </div>
  );
};

export default SalesTotal;
