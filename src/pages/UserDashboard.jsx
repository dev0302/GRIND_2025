import React, { useEffect, useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import WaterData from "../Data/WaterQuality.js";
import { useGeolocation } from "../utils/useGeolocation";

export default function UserDashboard() {
  const [location, setLocation] = useState("");
  const [result, setResult] = useState(null);
  const { coords, status, request, error } = useGeolocation({ enableHighAccuracy: true, timeout: 12000, maximumAge: 300000 });

  // Compute nearest city from WaterData based on user coords
  const nearestCity = useMemo(() => {
    if (!coords) return null;
    let best = null;
    let bestDist = Infinity;
    for (const city of WaterData) {
      const dLat = city.lat - coords.lat;
      const dLng = city.lng - coords.lng;
      const dist = Math.sqrt(dLat * dLat + dLng * dLng);
      if (dist < bestDist) {
        bestDist = dist;
        best = city;
      }
    }
    return best;
  }, [coords]);

  // Request geolocation on mount
  useEffect(() => {
    request();
  }, [request]);

  // When permission resolves, set location/result
  useEffect(() => {
    if (status === 'granted' && nearestCity) {
      setLocation(nearestCity.location);
      setResult(nearestCity);
    } else if (status === 'denied' || status === 'unsupported' || status === 'error') {
      // Safe fallback: use Delhi if available
      const delhi = WaterData.find(item => item.location.toLowerCase().includes('delhi'));
      if (delhi) {
        setLocation(delhi.location);
        setResult(delhi);
      }
    }
  }, [status, nearestCity]);

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
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={request}
              className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg text-sm"
            >
              Use My Location
            </button>
            {status === 'requesting' && (
              <span className="text-gray-300 text-sm">Requesting location…</span>
            )}
            {status === 'denied' && (
              <span className="text-yellow-400 text-sm">Permission denied. Using Delhi.</span>
            )}
            {status === 'unsupported' && (
              <span className="text-yellow-400 text-sm">Geolocation unsupported. Using Delhi.</span>
            )}
            {status === 'error' && (
              <span className="text-yellow-400 text-sm">Couldn’t get location. Using Delhi.</span>
            )}
          </div>
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
