"use client"
import Link from "next/link";
import Image from 'next/image'
import logo from "../components/LogoNocif.jpg"
import { useRouter } from "next/navigation";
import { ChangeEvent } from "react";


export default function Login() {
  const router = useRouter();

  // Fonction de vérification du format de l'email
  const isValidEmail = (email: string): boolean => {
    // Utilisation d'une expression régulière pour la validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Fonction pour gérer la soumission du formulaire
  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // Récupération des valeurs des champs email et password
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const passwordInput = document.getElementById("password") as HTMLInputElement;

    // Vérification que les deux champs ne sont pas vides
    if (emailInput.value.trim() === "" || passwordInput.value.trim() === "") {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    // Vérification du format de l'email
    if (!isValidEmail(emailInput.value)) {
      alert("Veuillez entrer une adresse email valide.");
      return;
    }

    // Autres vérifications ou actions liées à la connexion
    // ...

    // Redirection vers le tableau de bord
    router.push("/dashboard");
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl flex flex-col items-center">
        <div className="mb-4">
          <Image src={logo} alt="Large Image" layout="fixed" className="rounded-lg" objectFit="cover" width={100} height={100} />
        </div>
        <form className="w-full mt-6">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Mot de passe
            </label>
            <input
              id="password"
              type="password"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mt-2">
            <button onClick={handleLogin} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
