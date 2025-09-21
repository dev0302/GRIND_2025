import React, { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import WaterData from "../data/WaterQuality.json";

export default function UserDashboard() {
  const [location, setLocation] = useState("");
  const [result, setResult] = useState(null);

  const handleCheckWater = (e) => {
    e.preventDefault();
    const data = WaterData.find(
      (item) => item.location.toLowerCase() === location.toLowerCase()
    );
    if (data) {
      setResult(data);
    } else {
      alert("No data available for this location.");
      setResult(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-16">
      <Navbar />
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-teal-400">
          Water Quality Checker
        </h1>

        {/* Location input form */}
        <form
          onSubmit={handleCheckWater}
          className="flex flex-col gap-4 bg-gray-800 p-6 rounded-2xl shadow-lg mb-8"
        >
          <input
            type="text"
            placeholder="Enter your city/area"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-400 hover:to-blue-400 px-6 py-3 rounded-lg font-semibold shadow-lg transform transition hover:scale-105"
          >
            Check Water Quality
          </button>
        </form>

        {/* Result Card */}
        {result && (
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-teal-300">
              {result.location} Water Quality
            </h2>
            <p className="mb-2">
              <span className="font-semibold">WQI:</span> {result.wqi}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Status:</span>{" "}
              <span
                className={
                  result.status === "Safe"
                    ? "text-green-400"
                    : result.status === "Toxic"
                    ? "text-red-500"
                    : "text-yellow-400"
                }
              >
                {result.status}
              </span>
            </p>
            <p className="mb-2 font-semibold">Suggested Solutions:</p>
            <ul className="list-disc list-inside">
              {result.solutions.map((sol, idx) => (
                <li key={idx}>{sol}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
