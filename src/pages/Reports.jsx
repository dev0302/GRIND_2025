import React, { useState } from "react";
import Navbar from "../components/Navbar";

export default function Report() {
  const [reports, setReports] = useState([]);
  const [location, setLocation] = useState("");
  const [issue, setIssue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!location || !issue) {
      alert("Please fill in all fields!");
      return;
    }

    const newReport = {
      id: Date.now(),
      location,
      issue,
      date: new Date().toLocaleString(),
    };

    // Add report to local state (frontend-only prototype)
    setReports([newReport, ...reports]);

    // Clear form
    setLocation("");
    setIssue("");

    alert("Report submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white pt-16">
      <Navbar />
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-teal-400">Submit a Water Report</h1>

        {/* Report Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-900 p-6 rounded-2xl shadow-lg flex flex-col gap-4 mb-8"
        >
          <input
            type="text"
            placeholder="Enter location (city/area)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <textarea
            placeholder="Describe the issue"
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
            className="p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-teal-400 resize-none"
            rows={4}
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-400 hover:to-blue-400 px-6 py-3 rounded-lg font-semibold shadow-lg transform transition hover:scale-105"
          >
            Submit Report
          </button>
        </form>

        {/* Submitted Reports */}
        <h2 className="text-2xl font-bold mb-4 text-indigo-400">Submitted Reports</h2>
        {reports.length === 0 ? (
          <p className="text-gray-300">No reports yet. Be the first to submit!</p>
        ) : (
          <div className="flex flex-col gap-4">
            {reports.map((r) => (
              <div
                key={r.id}
                className="bg-gray-900 p-4 rounded-xl shadow-md border border-gray-700"
              >
                <p className="font-semibold text-teal-300">{r.location}</p>
                <p className="text-gray-300 mt-1">{r.issue}</p>
                <p className="text-gray-500 text-sm mt-2">{r.date}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
