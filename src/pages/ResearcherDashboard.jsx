import React, { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Papa from "papaparse";

export default function ResearcherDashboard() {
  const [researchData, setResearchData] = useState([]);

  // Handle CSV upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const parsedData = results.data.map((row, index) => ({
          id: Date.now() + index,
          location: row.Location || "Unknown",
          metal: row.Metal || "N/A",
          concentration: row.Concentration || "N/A",
          date: row.Date || new Date().toLocaleDateString(),
        }));

        setResearchData([...parsedData, ...researchData]);
        alert("CSV uploaded successfully!");
      },
      error: function (err) {
        console.error(err);
        alert("Error parsing CSV");
      },
    });
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <Navbar />
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-teal-400">
          Researcher Dashboard
        </h1>

        {/* CSV Upload Section */}
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-400">
            Upload Groundwater Research CSV
          </h2>
          <input
            type="file"
            accept=".csv"
            onChange={handleFileUpload}
            className="p-2 rounded-lg bg-gray-700 cursor-pointer"
          />
          <p className="text-gray-400 mt-2 text-sm">
            CSV columns: <b>Location, Metal, Concentration, Date</b> (Date optional)
          </p>
        </div>

        {/* Uploaded Research Table */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-indigo-400">Uploaded Research Data</h2>
          {researchData.length === 0 ? (
            <p className="text-gray-300">No research uploaded yet.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-gray-900 border border-gray-700 rounded-xl">
                <thead>
                  <tr className="text-left text-teal-400 border-b border-gray-700">
                    <th className="px-4 py-2">Location</th>
                    <th className="px-4 py-2">Metal</th>
                    <th className="px-4 py-2">Concentration</th>
                    <th className="px-4 py-2">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {researchData.map((r) => (
                    <tr
                      key={r.id}
                      className="border-b border-gray-700 hover:bg-gray-700 transition"
                    >
                      <td className="px-4 py-2">{r.location}</td>
                      <td className="px-4 py-2">{r.metal}</td>
                      <td className="px-4 py-2">{r.concentration}</td>
                      <td className="px-4 py-2">{r.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
