"use client"
import React, { useState } from "react";
import Link from "next/link";

const TabCommandes = () => {

  const ordersData = [
    {
      id: 1,
      status: "En cours de traitement",
      date: "2024-03-15",
      addressDelivery: "123 Rue de la Livraison",
      addressBilling: "456 Rue de la Facturation",
      postalCodeDelivery: "75001",
      postalCodeBilling: "75002",
    },
    {
      id: 2,
      status: "Expédiée",
      date: "2024-03-14",
      addressDelivery: "789 Rue de la Livraison",
      addressBilling: "101 Rue de la Facturation",
      postalCodeDelivery: "75003",
      postalCodeBilling: "75004",
    },
    {
      id: 3,
      status: "En attente de paiement",
      date: "2024-03-13",
      addressDelivery: "111 Rue de la Livraison",
      addressBilling: "222 Rue de la Facturation",
      postalCodeDelivery: "75005",
      postalCodeBilling: "75006",
    },
    {
      id: 4,
      status: "Livraison en cours",
      date: "2024-03-12",
      addressDelivery: "333 Rue de la Livraison",
      addressBilling: "444 Rue de la Facturation",
      postalCodeDelivery: "75007",
      postalCodeBilling: "75008",
    },
    {
      id: 5,
      status: "En cours de traitement",
      date: "2024-03-11",
      addressDelivery: "555 Rue de la Livraison",
      addressBilling: "666 Rue de la Facturation",
      postalCodeDelivery: "75009",
      postalCodeBilling: "75010",
    },
    {
      id: 6,
      status: "Expédiée",
      date: "2024-03-10",
      addressDelivery: "777 Rue de la Livraison",
      addressBilling: "888 Rue de la Facturation",
      postalCodeDelivery: "75011",
      postalCodeBilling: "75012",
    },
    {
      id: 7,
      status: "En attente de paiement",
      date: "2024-03-09",
      addressDelivery: "999 Rue de la Livraison",
      addressBilling: "000 Rue de la Facturation",
      postalCodeDelivery: "75013",
      postalCodeBilling: "75014",
    },
    {
      id: 8,
      status: "Livraison en cours",
      date: "2024-03-08",
      addressDelivery: "123 Rue des Colis",
      addressBilling: "456 Rue des Factures",
      postalCodeDelivery: "75015",
      postalCodeBilling: "75016",
    },
    {
      id: 9,
      status: "En cours de traitement",
      date: "2024-03-07",
      addressDelivery: "789 Rue des Livraisons",
      addressBilling: "101 Rue des Facturations",
      postalCodeDelivery: "75017",
      postalCodeBilling: "75018",
    },
    {
      id: 10,
      status: "Expédiée",
      date: "2024-03-06",
      addressDelivery: "111 Rue des Colis",
      addressBilling: "222 Rue des Factures",
      postalCodeDelivery: "75019",
      postalCodeBilling: "75020",
    },
    {
      id: 11,
      status: "En attente de paiement",
      date: "2024-03-05",
      addressDelivery: "789 Rue des Colis",
      addressBilling: "101 Rue des Factures",
      postalCodeDelivery: "75021",
      postalCodeBilling: "75022",
    },
    {
      id: 12,
      status: "Livraison en cours",
      date: "2024-03-04",
      addressDelivery: "111 Rue des Livraisons",
      addressBilling: "222 Rue des Facturations",
      postalCodeDelivery: "75023",
      postalCodeBilling: "75024",
    },
    {
      id: 13,
      status: "En cours de traitement",
      date: "2024-03-03",
      addressDelivery: "333 Rue des Colis",
      addressBilling: "444 Rue des Factures",
      postalCodeDelivery: "75025",
      postalCodeBilling: "75026",
    },
    {
      id: 14,
      status: "Expédiée",
      date: "2024-03-02",
      addressDelivery: "555 Rue des Livraisons",
      addressBilling: "666 Rue des Facturations",
      postalCodeDelivery: "75027",
      postalCodeBilling: "75028",
    },
    {
      id: 15,
      status: "En attente de paiement",
      date: "2024-03-01",
      addressDelivery: "777 Rue des Colis",
      addressBilling: "888 Rue des Factures",
      postalCodeDelivery: "75029",
      postalCodeBilling: "75030",
    },
    {
      id: 16,
      status: "Livraison en cours",
      date: "2024-02-29",
      addressDelivery: "999 Rue des Livraisons",
      addressBilling: "000 Rue des Facturations",
      postalCodeDelivery: "75031",
      postalCodeBilling: "75032",
    },
    {
      id: 17,
      status: "En cours de traitement",
      date: "2024-02-28",
      addressDelivery: "123 Rue du Transport",
      addressBilling: "456 Rue de la Logistique",
      postalCodeDelivery: "75033",
      postalCodeBilling: "75034",
    },
    {
      id: 18,
      status: "Expédiée",
      date: "2024-02-27",
      addressDelivery: "789 Rue de l'Expédition",
      addressBilling: "101 Rue de la Distribution",
      postalCodeDelivery: "75035",
      postalCodeBilling: "75036",
    },
    {
      id: 19,
      status: "En attente de paiement",
      date: "2024-02-26",
      addressDelivery: "111 Rue de la Manutention",
      addressBilling: "222 Rue du Stockage",
      postalCodeDelivery: "75037",
      postalCodeBilling: "75038",
    },
    {
      id: 20,
      status: "Livraison en cours",
      date: "2024-02-25",
      addressDelivery: "333 Rue de la Chaîne d'Approvisionnement",
      addressBilling: "444 Rue de la Gestion des Stocks",
      postalCodeDelivery: "75039",
      postalCodeBilling: "75040",
    },
  ];

  

  const [orders, setOrders] = useState(ordersData);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");

  const handleSearch = (query) => {
    const filteredOrders = ordersData.filter((order) =>
      order.id.toString().includes(query) ||
      order.addressDelivery.toLowerCase().includes(query.toLowerCase()) ||
      order.addressBilling.toLowerCase().includes(query.toLowerCase()) ||
      order.postalCodeDelivery.includes(query) ||
      order.postalCodeBilling.includes(query)||
      order.date.includes(query)
    );
    setOrders(filteredOrders);
    setSearchQuery(query);
  };

  const handleStatusChange = (status) => {
    setSelectedStatus(status);
    const filteredOrders =
      status === "All"
        ? ordersData
        : ordersData.filter((order) => order.status === status);
    setOrders(filteredOrders);
  };

  const statuses = [
    "All",
    "En cours de traitement",
    "Expédiée",
    "En attente de paiement",
    "Livraison en cours",
  ];

  return (
    <div>
    <h1 className="font-bold text-3xl">Commandes</h1>
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
                placeholder="Rechercher des commandes"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
          </div>

          
        </div>

        <div className="py-1">
          <label htmlFor="status-select" className="sr-only">
            Select Status
          </label>
          <select
            id="status-select"
            className="block w-30 text-gray-700 bg-gray-100"
            value={selectedStatus}
            onChange={(e) => handleStatusChange(e.target.value)}
          >
            {statuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Statut
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
              Adresse de Livraison
            </th>
            <th scope="col" className="px-6 py-3">
              Adresse de Facturation
            </th>
            <th scope="col" className="px-6 py-3">
              Code Postal Livraison
            </th>
            <th scope="col" className="px-6 py-3">
              Code Postal Facturation
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr
              key={order.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="px-6 py-4">{order.id}</td>
              <td className="px-6 py-4">{order.status}</td>
              <td className="px-6 py-4">{order.date}</td>
              <td className="px-6 py-4">{order.addressDelivery}</td>
              <td className="px-6 py-4">{order.addressBilling}</td>
              <td className="px-6 py-4">{order.postalCodeDelivery}</td>
              <td className="px-6 py-4">{order.postalCodeBilling}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};
  

export default TabCommandes;
