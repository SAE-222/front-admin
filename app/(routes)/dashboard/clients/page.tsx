"use client"
import React, { useState } from "react";
const tabClients = () => {

  const clientsData = [
    {
      id: 1,
      nom: "Dupont",
      prenom: "Jean",
      email: "jean.dupont@example.com",
      telephone: "0123456789",
    },
    {
      id: 2,
      nom: "Martin",
      prenom: "Sophie",
      email: "sophie.martin@example.com",
      telephone: "0234567890",
    },
    {
      id: 3,
      nom: "Lefevre",
      prenom: "Pierre",
      email: "pierre.lefevre@example.com",
      telephone: "0345678901",
    },
    {
      id: 4,
      nom: "Robert",
      prenom: "Marie",
      email: "marie.robert@example.com",
      telephone: "0456789012",
    },
    {
      id: 5,
      nom: "Dubois",
      prenom: "Thomas",
      email: "thomas.dubois@example.com",
      telephone: "0567890123",
    },
    {
      id: 6,
      nom: "Simon",
      prenom: "Camille",
      email: "camille.simon@example.com",
      telephone: "0678901234",
    },
    {
      id: 7,
      nom: "Moreau",
      prenom: "Lucas",
      email: "lucas.moreau@example.com",
      telephone: "0789012345",
    },
    {
      id: 8,
      nom: "Lefevre",
      prenom: "Emma",
      email: "emma.lefevre@example.com",
      telephone: "0890123456",
    },
    {
      id: 9,
      nom: "Girard",
      prenom: "Louis",
      email: "louis.girard@example.com",
      telephone: "0901234567",
    },
    {
      id: 10,
      nom: "Garcia",
      prenom: "Chloé",
      email: "chloe.garcia@example.com",
      telephone: "0012345678",
    },
    {
      id: 11,
      nom: "Fournier",
      prenom: "Adam",
      email: "adam.fournier@example.com",
      telephone: "0111222333",
    },
    {
      id: 12,
      nom: "Legrand",
      prenom: "Léa",
      email: "lea.legrand@example.com",
      telephone: "0222333444",
    },
    {
      id: 13,
      nom: "Lefevre",
      prenom: "Hugo",
      email: "hugo.lefevre@example.com",
      telephone: "0333444555",
    },
    {
      id: 14,
      nom: "Garnier",
      prenom: "Clara",
      email: "clara.garnier@example.com",
      telephone: "0444555666",
    },
    {
      id: 15,
      nom: "Roux",
      prenom: "Noah",
      email: "noah.roux@example.com",
      telephone: "0555666777",
    },
    {
      id: 16,
      nom: "Lemoine",
      prenom: "Zoé",
      email: "zoe.lemoine@example.com",
      telephone: "0666777888",
    },
    {
      id: 17,
      nom: "Gauthier",
      prenom: "Mathis",
      email: "mathis.gauthier@example.com",
      telephone: "0777888999",
    },
    {
      id: 18,
      nom: "Chevalier",
      prenom: "Inès",
      email: "ines.chevalier@example.com",
      telephone: "0888999000",
    },
    {
      id: 19,
      nom: "Mercier",
      prenom: "Eva",
      email: "eva.mercier@example.com",
      telephone: "0999000111",
    },
    {
      id: 20,
      nom: "Leroux",
      prenom: "Alexandre",
      email: "alexandre.leroux@example.com",
      telephone: "0101010111",
    },
  ];

  const [clients, setClients] = useState(clientsData);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");

  const handleSearch = (query) => {
    const filteredClients = clientsData.filter((client) =>
      client.id.toString().includes(query) ||
      client.nom.toLowerCase().includes(query.toLowerCase()) ||
      client.prenom.toLowerCase().includes(query.toLowerCase()) ||
      client.email.toLowerCase().includes(query.toLowerCase()) ||
      client.telephone.includes(query)
    );
    setClients(filteredClients);
    setSearchQuery(query);
  };

  const handleStatusChange = (status) => {
    setSelectedStatus(status);
    // Si le statut est "telephone", filtre les clients ayant un numéro de téléphone non vide
    const filteredClients =
      status === "All"
        ? clientsData
        : clientsData.filter((client) =>
            status === "telephone" ? client.telephone !== "" : true
          );
    setClients(filteredClients);
  };

  const statuses = [
    "All",
    "telephone"
  ];

  return (
    <div>
    <h1 className="font-bold text-3xl">Clients</h1>
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
                placeholder="Rechercher des clients"
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
              Nom
            </th>
            <th scope="col" className="px-6 py-3">
              Prénom
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Téléphone
            </th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr
              key={client.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="px-6 py-4">{client.id}</td>
              <td className="px-6 py-4">{client.nom}</td>
              <td className="px-6 py-4">{client.prenom}</td>
              <td className="px-6 py-4">{client.email}</td>
              <td className="px-6 py-4">{client.telephone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

  

export default tabClients;