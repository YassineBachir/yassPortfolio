import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const adminUser = {
      username: "yass",
      password: "yass123",
    };

    if (username === adminUser.username && password === adminUser.password) {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/admin");
    } else {
      setError("Identifiants incorrects !");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-900 text-white">
      <form onSubmit={handleLogin} className="p-6 bg-gray-800 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Connexion Admin</h2>

        {error && <p className="text-red-500 text-sm mb-3 text-center">{error}</p>}

        <input
          type="text"
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 mb-3 rounded bg-gray-700 text-white"
          required
        />

        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-3 rounded bg-gray-700 text-white"
          required
        />

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-500 p-2 rounded text-white font-bold"
        >
          Se connecter
        </button>
      </form>
    </div>
  );
}
