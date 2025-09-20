

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || user.email !== email) {
      alert("User not found.");
      return;
    }

    // For prototype, no password check needed
    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem("role", user.role);

    if (user.role === "researcher") {
      navigate("/researcher-dashboard");
    } else {
      navigate("/user-dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="max-w-md mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-teal-400">Login</h1>
        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-4 bg-gray-800 p-6 rounded-2xl shadow-lg"
        >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-400 hover:to-blue-400 px-6 py-3 rounded-lg font-semibold shadow-lg transform transition hover:scale-105"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
