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
      montant: 55.99,
    },
    {
      id: 2,
      status: "Expédiée",
      date: "2024-03-14",
      addressDelivery: "789 Rue de la Livraison",
      addressBilling: "101 Rue de la Facturation",
      postalCodeDelivery: "75003",
      postalCodeBilling: "75004",
      montant: 29.99,
    },
    {
      id: 3,
      status: "En attente de paiement",
      date: "2024-03-13",
      addressDelivery: "111 Rue de la Livraison",
      addressBilling: "222 Rue de la Facturation",
      postalCodeDelivery: "75005",
      postalCodeBilling: "75006",
      montant: 38.75,
    },
    {
      id: 4,
      status: "Livraison en cours",
      date: "2024-03-12",
      addressDelivery: "333 Rue de la Livraison",
      addressBilling: "444 Rue de la Facturation",
      postalCodeDelivery: "75007",
      postalCodeBilling: "75008",
      montant: 79.99,
    },
    {
      id: 5,
      status: "En cours de traitement",
      date: "2024-03-11",
      addressDelivery: "555 Rue de la Livraison",
      addressBilling: "666 Rue de la Facturation",
      postalCodeDelivery: "75009",
      postalCodeBilling: "75010",
      montant: 46.50,
    },
    {
      id: 6,
      status: "Expédiée",
      date: "2024-03-10",
      addressDelivery: "777 Rue de la Livraison",
      addressBilling: "888 Rue de la Facturation",
      postalCodeDelivery: "75011",
      postalCodeBilling: "75012",
      montant: 64.99,
    },
    {
      id: 7,
      status: "En attente de paiement",
      date: "2024-03-09",
      addressDelivery: "999 Rue de la Livraison",
      addressBilling: "000 Rue de la Facturation",
      postalCodeDelivery: "75013",
      postalCodeBilling: "75014",
      montant: 105.00,
    },
    {
      id: 8,
      status: "Livraison en cours",
      date: "2024-03-08",
      addressDelivery: "123 Rue des Colis",
      addressBilling: "456 Rue des Factures",
      postalCodeDelivery: "75015",
      postalCodeBilling: "75016",
      montant: 89.99,
    },
    {
      id: 9,
      status: "En cours de traitement",
      date: "2024-03-07",
      addressDelivery: "789 Rue des Livraisons",
      addressBilling: "101 Rue des Facturations",
      postalCodeDelivery: "75017",
      postalCodeBilling: "75018",
      montant: 47.75,
    },
    {
      id: 10,
      status: "Expédiée",
      date: "2024-03-06",
      addressDelivery: "111 Rue des Colis",
      addressBilling: "222 Rue des Factures",
      postalCodeDelivery: "75019",
      postalCodeBilling: "75020",
      montant: 32.99,
    },
    {
      id: 11,
      status: "En attente de paiement",
      date: "2024-03-05",
      addressDelivery: "789 Rue des Colis",
      addressBilling: "101 Rue des Factures",
      postalCodeDelivery: "75021",
      postalCodeBilling: "75022",
      montant: 59.99,
    },
    {
      id: 12,
      status: "Livraison en cours",
      date: "2024-03-04",
      addressDelivery: "111 Rue des Livraisons",
      addressBilling: "222 Rue des Facturations",
      postalCodeDelivery: "75023",
      postalCodeBilling: "75024",
      montant: 29.99,
    },
    {
      id: 13,
      status: "En cours de traitement",
      date: "2024-03-03",
      addressDelivery: "333 Rue des Colis",
      addressBilling: "444 Rue des Factures",
      postalCodeDelivery: "75025",
      postalCodeBilling: "75026",
      montant: 44.99,
    },
    {
      id: 14,
      status: "Expédiée",
      date: "2024-03-02",
      addressDelivery: "555 Rue des Livraisons",
      addressBilling: "666 Rue des Facturations",
      postalCodeDelivery: "75027",
      postalCodeBilling: "75028",
      montant: 72.99,
    },
    {
      id: 15,
      status: "En attente de paiement",
      date: "2024-03-01",
      addressDelivery: "777 Rue des Colis",
      addressBilling: "888 Rue des Factures",
      postalCodeDelivery: "75029",
      postalCodeBilling: "75030",
      montant: 39.99,
    },
    {
      id: 16,
      status: "Livraison en cours",
      date: "2024-02-29",
      addressDelivery: "999 Rue des Livraisons",
      addressBilling: "000 Rue des Facturations",
      postalCodeDelivery: "75031",
      postalCodeBilling: "75032",
      montant: 67.99,
    },
    {
      id: 17,
      status: "En cours de traitement",
      date: "2024-02-28",
      addressDelivery: "123 Rue du Transport",
      addressBilling: "456 Rue de la Logistique",
      postalCodeDelivery: "75033",
      postalCodeBilling: "75034",
      montant: 54.99,
    },
    {
      id: 18,
      status: "Expédiée",
      date: "2024-02-27",
      addressDelivery: "789 Rue de l'Expédition",
      addressBilling: "101 Rue de la Distribution",
      postalCodeDelivery: "75035",
      postalCodeBilling: "75036",
      montant: 29.99,
    },
    {
      id: 19,
      status: "En attente de paiement",
      date: "2024-02-26",
      addressDelivery: "111 Rue de la Manutention",
      addressBilling: "222 Rue du Stockage",
      postalCodeDelivery: "75037",
      postalCodeBilling: "75038",
      montant: 89.99,
    },
    {
      id: 20,
      status: "Livraison en cours",
      date: "2024-02-25",
      addressDelivery: "333 Rue de la Chaîne d'Approvisionnement",
      addressBilling: "444 Rue de la Gestion des Stocks",
      postalCodeDelivery: "75039",
      postalCodeBilling: "75040",
      montant: 99.99,
    },
    {
      id: 21,
      status: "En cours de traitement",
      date: "2024-02-24",
      addressDelivery: "555 Rue du Traitement",
      addressBilling: "666 Rue de la Facturation",
      postalCodeDelivery: "75041",
      postalCodeBilling: "75042",
      montant: 34.99,
    },
    {
      id: 22,
      status: "Expédiée",
      date: "2024-02-23",
      addressDelivery: "777 Rue de l'Expédition",
      addressBilling: "888 Rue de la Distribution",
      postalCodeDelivery: "75043",
      postalCodeBilling: "75044",
      montant: 49.99,
    },
    {
      id: 23,
      status: "En attente de paiement",
      date: "2024-02-22",
      addressDelivery: "999 Rue de la Manutention",
      addressBilling: "000 Rue du Stockage",
      postalCodeDelivery: "75045",
      postalCodeBilling: "75046",
      montant: 59.99,
    },
    {
      id: 24,
      status: "Livraison en cours",
      date: "2024-02-21",
      addressDelivery: "111 Rue de la Chaîne d'Approvisionnement",
      addressBilling: "222 Rue de la Gestion des Stocks",
      postalCodeDelivery: "75047",
      postalCodeBilling: "75048",
      montant: 99.99,
    },
    {
      id: 25,
      status: "En cours de traitement",
      date: "2024-02-20",
      addressDelivery: "333 Rue du Traitement",
      addressBilling: "444 Rue de la Facturation",
      postalCodeDelivery: "75049",
      postalCodeBilling: "75050",
      montant: 29.99,
    },
    {
      id: 26,
      status: "Expédiée",
      date: "2024-02-19",
      addressDelivery: "555 Rue de l'Expédition",
      addressBilling: "666 Rue de la Distribution",
      postalCodeDelivery: "75051",
      postalCodeBilling: "75052",
      montant: 44.99,
    },
    {
      id: 27,
      status: "En attente de paiement",
      date: "2024-02-18",
      addressDelivery: "777 Rue de la Manutention",
      addressBilling: "888 Rue du Stockage",
      postalCodeDelivery: "75053",
      postalCodeBilling: "75054",
      montant: 69.99,
    },
    {
      id: 28,
      status: "Livraison en cours",
      date: "2024-02-17",
      addressDelivery: "999 Rue de la Chaîne d'Approvisionnement",
      addressBilling: "000 Rue de la Gestion des Stocks",
      postalCodeDelivery: "75055",
      postalCodeBilling: "75056",
      montant: 79.99,
    },
    {
      id: 29,
      status: "En cours de traitement",
      date: "2024-02-16",
      addressDelivery: "111 Rue du Traitement",
      addressBilling: "222 Rue de la Facturation",
      postalCodeDelivery: "75057",
      postalCodeBilling: "75058",
      montant: 39.99,
    },
    {
      id: 30,
      status: "Expédiée",
      date: "2024-02-15",
      addressDelivery: "333 Rue de l'Expédition",
      addressBilling: "444 Rue de la Distribution",
      postalCodeDelivery: "75059",
      postalCodeBilling: "75060",
      montant: 54.99,
    },
    {
      id: 31,
      status: "En attente de paiement",
      date: "2024-02-14",
      addressDelivery: "555 Rue de la Manutention",
      addressBilling: "666 Rue du Stockage",
      postalCodeDelivery: "75061",
      postalCodeBilling: "75062",
      montant: 84.99,
    },
    {
      id: 32,
      status: "Livraison en cours",
      date: "2024-02-13",
      addressDelivery: "777 Rue de la Chaîne d'Approvisionnement",
      addressBilling: "888 Rue de la Gestion des Stocks",
      postalCodeDelivery: "75063",
      postalCodeBilling: "75064",
      montant: 129.99,
    },
    {
      id: 33,
      status: "En cours de traitement",
      date: "2024-02-12",
      addressDelivery: "999 Rue du Traitement",
      addressBilling: "000 Rue de la Facturation",
      postalCodeDelivery: "75065",
      postalCodeBilling: "75066",
      montant: 74.99,
    },
    {
      id: 34,
      status: "Expédiée",
      date: "2024-02-11",
      addressDelivery: "111 Rue de l'Expédition",
      addressBilling: "222 Rue de la Distribution",
      postalCodeDelivery: "75067",
      postalCodeBilling: "75068",
      montant: 64.99,
    },
    {
      id: 35,
      status: "En attente de paiement",
      date: "2024-02-10",
      addressDelivery: "333 Rue de la Manutention",
      addressBilling: "444 Rue du Stockage",
      postalCodeDelivery: "75069",
      postalCodeBilling: "75070",
      montant: 59.99,
    },
    {
      id: 36,
      status: "Livraison en cours",
      date: "2024-02-09",
      addressDelivery: "555 Rue de la Chaîne d'Approvisionnement",
      addressBilling: "666 Rue de la Gestion des Stocks",
      postalCodeDelivery: "75071",
      postalCodeBilling: "75072",
      montant: 94.99,
    },
    {
      id: 37,
      status: "En cours de traitement",
      date: "2024-02-08",
      addressDelivery: "777 Rue du Traitement",
      addressBilling: "888 Rue de la Facturation",
      postalCodeDelivery: "75073",
      postalCodeBilling: "75074",
      montant: 49.99,
    },
    {
      id: 38,
      status: "Expédiée",
      date: "2024-02-07",
      addressDelivery: "999 Rue de l'Expédition",
      addressBilling: "000 Rue de la Distribution",
      postalCodeDelivery: "75075",
      postalCodeBilling: "75076",
      montant: 84.99,
    },
    {
      id: 39,
      status: "En attente de paiement",
      date: "2024-02-06",
      addressDelivery: "111 Rue de la Manutention",
      addressBilling: "222 Rue du Stockage",
      postalCodeDelivery: "75077",
      postalCodeBilling: "75078",
      montant: 119.99,
    },
    {
      id: 40,
      status: "Livraison en cours",
      date: "2024-02-05",
      addressDelivery: "333 Rue de la Chaîne d'Approvisionnement",
      addressBilling: "444 Rue de la Gestion des Stocks",
      postalCodeDelivery: "75079",
      postalCodeBilling: "75080",
      montant: 199.99,
    },
    {
      id: 41,
      status: "En cours de traitement",
      date: "2024-02-04",
      addressDelivery: "555 Rue du Traitement",
      addressBilling: "666 Rue de la Facturation",
      postalCodeDelivery: "75081",
      postalCodeBilling: "75082",
      montant: 59.99,
    },
    {
      id: 42,
      status: "Expédiée",
      date: "2024-02-03",
      addressDelivery: "777 Rue de l'Expédition",
      addressBilling: "888 Rue de la Distribution",
      postalCodeDelivery: "75083",
      postalCodeBilling: "75084",
      montant: 79.99,
    },
    {
      id: 43,
      status: "En attente de paiement",
      date: "2024-02-02",
      addressDelivery: "999 Rue de la Manutention",
      addressBilling: "000 Rue du Stockage",
      postalCodeDelivery: "75085",
      postalCodeBilling: "75086",
      montant: 89.99,
    },
    {
      id: 44,
      status: "Livraison en cours",
      date: "2024-02-01",
      addressDelivery: "111 Rue de la Chaîne d'Approvisionnement",
      addressBilling: "222 Rue de la Gestion des Stocks",
      postalCodeDelivery: "75087",
      postalCodeBilling: "75088",
      montant: 149.99,
    },
    {
      id: 45,
      status: "En cours de traitement",
      date: "2024-01-31",
      addressDelivery: "333 Rue du Traitement",
      addressBilling: "444 Rue de la Facturation",
      postalCodeDelivery: "75089",
      postalCodeBilling: "75090",
      montant: 129.99,
    },
    {
      id: 46,
      status: "Expédiée",
      date: "2024-01-30",
      addressDelivery: "555 Rue de l'Expédition",
      addressBilling: "666 Rue de la Distribution",
      postalCodeDelivery: "75091",
      postalCodeBilling: "75092",
      montant: 69.99,
    },
    {
      id: 47,
      status: "En attente de paiement",
      date: "2024-01-29",
      addressDelivery: "777 Rue de la Manutention",
      addressBilling: "888 Rue du Stockage",
      postalCodeDelivery: "75093",
      postalCodeBilling: "75094",
      montant: 44.99,
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
      <div className="p-2 h-[52px] bg-gray-100 dark:bg-gray-900 items-center justify-between">
        <div className="flex justify-between items-center float-right">
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
                className="block item-center ps-10 text-sm h-[32px] text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
      <div className="overflow-x-auto h-[870px]">
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
              Montant
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
              <td className="px-6 py-4">{order.montant} €</td>
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
    </div>
  );
};
  

export default TabCommandes;
