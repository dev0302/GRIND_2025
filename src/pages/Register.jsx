import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("general"); // default role

  const handleRegister = (e) => {
    e.preventDefault();
    if (!name || !email || !password || !role) {
      alert("Please fill all fields.");
      return;
    }

    // Save user info to localStorage (frontend-only prototype)
    const user = { name, email, role };
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem("role", role);

    // Redirect based on role
    if (role === "researcher") {
      navigate("/researcher-dashboard");
    } else {
      navigate("/user-dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="max-w-md mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-teal-400">Register</h1>
        <form
          onSubmit={handleRegister}
          className="flex flex-col gap-4 bg-gray-800 p-6 rounded-2xl shadow-lg"
        >
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
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

          {/* Role Selection */}
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-teal-400"
          >
            <option value="general">General User</option>
            <option value="researcher">Researcher</option>
          </select>

          <button
            type="submit"
            className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-400 hover:to-blue-400 px-6 py-3 rounded-lg font-semibold shadow-lg transform transition hover:scale-105"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
