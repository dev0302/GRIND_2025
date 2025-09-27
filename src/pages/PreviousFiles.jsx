import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function PreviousFiles() {
  const navigate = useNavigate();
  
  // Sample data for previously submitted files
  const [previousFiles] = useState([
    {
      id: 1,
      fileName: "Delhi_Groundwater_Study_2024.csv",
      uploadDate: "2024-12-15",
      sampleCount: 45,
      locations: ["Paschim Vihar", "Model Town", "Karol Bagh"],
      avgHMPI: 68.5,
      status: "Completed",
      reportGenerated: true,
      labName: "EnviroLab Pvt Ltd",
      accreditationId: "NABL-001"
    },
    {
      id: 2,
      fileName: "Gurgaon_Industrial_Area_2024.csv",
      uploadDate: "2024-11-28",
      sampleCount: 32,
      locations: ["Sector 14", "Sector 29", "Industrial Area"],
      avgHMPI: 82.3,
      status: "Completed",
      reportGenerated: true,
      labName: "GreenCheck Labs",
      accreditationId: "NABL-002"
    },
    {
      id: 3,
      fileName: "Noida_Residential_2024.csv",
      uploadDate: "2024-10-10",
      sampleCount: 28,
      locations: ["Sector 62", "Sector 18", "Greater Noida"],
      avgHMPI: 45.2,
      status: "Completed",
      reportGenerated: true,
      labName: "AquaTest Solutions",
      accreditationId: "CPCB-456"
    },
    {
      id: 4,
      fileName: "Faridabad_Urban_2024.csv",
      uploadDate: "2024-09-22",
      sampleCount: 38,
      locations: ["Sector 16", "Ballabgarh", "Nehru Ground"],
      avgHMPI: 71.8,
      status: "Completed",
      reportGenerated: true,
      labName: "Water Quality Institute",
      accreditationId: "SPCB-789"
    },
    {
      id: 5,
      fileName: "Ghaziabad_Industrial_2024.csv",
      uploadDate: "2024-08-15",
      sampleCount: 41,
      locations: ["Industrial Area", "Vasundhara", "Raj Nagar"],
      avgHMPI: 89.1,
      status: "Completed",
      reportGenerated: true,
      labName: "EnviroLab Pvt Ltd",
      accreditationId: "NABL-001"
    },
    {
      id: 6,
      fileName: "Delhi_Rural_Areas_2024.csv",
      uploadDate: "2024-07-30",
      sampleCount: 25,
      locations: ["Najafgarh", "Nangloi", "Bawana"],
      avgHMPI: 52.4,
      status: "Completed",
      reportGenerated: true,
      labName: "Rural Water Testing Lab",
      accreditationId: "NABL-003"
    }
  ]);

  const handleBackToDashboard = () => {
    navigate("/researcherDashboard");
  };

  const handleViewReport = (fileId) => {
    // For demo purposes, we'll show an alert
    // In a real app, this would load the specific report
    alert(`Viewing report for file ID: ${fileId}\n\nThis would open the detailed report for this dataset.`);
  };

  const handleDownloadReport = (fileId) => {
    // For demo purposes, we'll show an alert
    alert(`Downloading PDF report for file ID: ${fileId}\n\nThis would download the PDF report.`);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-600 text-white";
      case "Processing":
        return "bg-yellow-600 text-white";
      case "Failed":
        return "bg-red-600 text-white";
      default:
        return "bg-gray-600 text-white";
    }
  };

  const getHMPIColor = (hmpi) => {
    if (hmpi < 25) return "text-green-400";
    if (hmpi < 50) return "text-yellow-400";
    if (hmpi < 75) return "text-orange-400";
    return "text-red-400";
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white pt-16">
      <Navbar />
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-teal-400">
            Previously Submitted Files
          </h1>
          <button
            onClick={handleBackToDashboard}
            className="bg-gray-700 text-white font-semibold py-2 px-6 rounded-lg hover:bg-gray-600 transition-all duration-300"
          >
            Back to Dashboard
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-blue-200 mb-2">Total Files</h3>
            <p className="text-3xl font-bold text-white">{previousFiles.length}</p>
          </div>
          <div className="bg-gradient-to-r from-green-900 to-green-800 p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-green-200 mb-2">Total Samples</h3>
            <p className="text-3xl font-bold text-white">
              {previousFiles.reduce((sum, file) => sum + file.sampleCount, 0)}
            </p>
          </div>
          <div className="bg-gradient-to-r from-purple-900 to-purple-800 p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-purple-200 mb-2">Avg HMPI</h3>
            <p className="text-3xl font-bold text-white">
              {(previousFiles.reduce((sum, file) => sum + file.avgHMPI, 0) / previousFiles.length).toFixed(1)}
            </p>
          </div>
          <div className="bg-gradient-to-r from-orange-900 to-red-800 p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-orange-200 mb-2">Completed Reports</h3>
            <p className="text-3xl font-bold text-white">
              {previousFiles.filter(file => file.reportGenerated).length}
            </p>
          </div>
        </div>

        {/* Files Table */}
        <div className="bg-gray-900 rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-6 text-indigo-400">Research Datasets</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-800 border border-gray-700 rounded-xl">
              <thead>
                <tr className="text-left text-teal-400 border-b border-gray-700">
                  <th className="px-6 py-4">File Name</th>
                  <th className="px-6 py-4">Upload Date</th>
                  <th className="px-6 py-4">Samples</th>
                  <th className="px-6 py-4">Locations</th>
                  <th className="px-6 py-4">Avg HMPI</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {previousFiles.map((file) => (
                  <tr
                    key={file.id}
                    className="border-b border-gray-700 hover:bg-gray-700 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div>
                        <div className="font-semibold text-white">{file.fileName}</div>
                        <div className="text-sm text-gray-400">
                          {file.labName} ({file.accreditationId})
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-300">
                      {new Date(file.uploadDate).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-white font-semibold">
                      {file.sampleCount}
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-gray-300">
                        {file.locations.slice(0, 2).join(", ")}
                        {file.locations.length > 2 && (
                          <span className="text-gray-500"> +{file.locations.length - 2} more</span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`font-bold text-lg ${getHMPIColor(file.avgHMPI)}`}>
                        {file.avgHMPI}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(file.status)}`}>
                        {file.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleViewReport(file.id)}
                          className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors"
                        >
                          View Report
                        </button>
                        <button
                          onClick={() => handleDownloadReport(file.id)}
                          className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700 transition-colors"
                        >
                          Download PDF
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-8 bg-gradient-to-r from-slate-800 to-gray-800 p-6 rounded-xl border border-slate-700">
          <h3 className="text-lg font-semibold mb-4 text-cyan-400">Dataset Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-300">
            <div>
              <h4 className="font-semibold text-white mb-2">Coverage Areas</h4>
              <ul className="space-y-1">
                <li>• Delhi: 2 datasets (70 samples)</li>
                <li>• Gurgaon: 1 dataset (32 samples)</li>
                <li>• Noida: 1 dataset (28 samples)</li>
                <li>• Faridabad: 1 dataset (38 samples)</li>
                <li>• Ghaziabad: 1 dataset (41 samples)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">Quality Distribution</h4>
              <ul className="space-y-1">
                <li>• Safe (HMPI &lt; 25): 0 datasets</li>
                <li>• Moderate (25-50): 1 dataset</li>
                <li>• Polluted (50-75): 3 datasets</li>
                <li>• Critical (&gt; 75): 2 datasets</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
