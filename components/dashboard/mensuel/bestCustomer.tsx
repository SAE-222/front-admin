import React, { useState, useEffect } from 'react';
import { SparklesIcon } from "@heroicons/react/outline";


const CustomerInfo = () => {
  const [topCustomer, setTopCustomer] = useState(null);

  useEffect(() => {
    // Simulez des données de clients et de commandes (à remplacer par vos propres données)
    const customerData = [
      { id: 2, name: 'Marie Robert', gender: 'Femme', totalSpent: 185.27, orderCount: 2 },
      // ... Autres clients
    ];

    // Triez les clients par le montant total dépensé de manière décroissante
    const sortedCustomers = customerData.sort((a, b) => b.totalSpent - a.totalSpent);

    // Sélectionnez le client ayant le montant total dépensé le plus élevé
    const topCustomer = sortedCustomers[0];

    setTopCustomer(topCustomer);
  }, []);

  return (
    <div>
        <div className='flex gap-2 bg-white p-2 rounded-lg h-full'>
            <div>
                <SparklesIcon className="w-6 h-6 text-green-400 rounded-full " />
            </div>
            <div className='w-[300px]'>
                <h2 className='font-semibold'>Client du mois !</h2>
                {topCustomer && (
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="px-6 py-4 text-black "><strong>Nom:</strong></td>
                        <td>{topCustomer.name}</td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="px-6 py-4 text-black"><strong>Sexe:</strong></td>
                        <td>{topCustomer.gender}</td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="px-6 py-4 text-black"><strong>Total Dépensé:</strong></td>
                        <td>{topCustomer.totalSpent} €</td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="px-6 py-4 text-black"><strong>Total de Commandes:</strong></td>
                        <td>{topCustomer.orderCount}</td>
                        </tr>
                    </tbody>
                  </table>
                )}
            </div>
        </div>
    </div>
  );
};

export default CustomerInfo;
