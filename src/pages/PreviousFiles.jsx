import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function PreviousFiles() {
  const navigate = useNavigate();
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [selectedFileData, setSelectedFileData] = useState(null);
  
  // Function to generate realistic CSV data based on file characteristics
  const generateCSVData = (file) => {
    const baseData = {
      1: { // Delhi_Groundwater_Study_2024.csv
        locations: ["Paschim Vihar", "Model Town", "Karol Bagh"],
        avgHMPI: 68.5,
        sampleCount: 45,
        labName: "EnviroLab Pvt Ltd",
        accreditationId: "NABL-001"
      },
      2: { // Gurgaon_Industrial_Area_2024.csv
        locations: ["Sector 14", "Sector 29", "Industrial Area"],
        avgHMPI: 82.3,
        sampleCount: 32,
        labName: "GreenCheck Labs",
        accreditationId: "NABL-002"
      },
      3: { // Noida_Residential_2024.csv
        locations: ["Sector 62", "Sector 18", "Greater Noida"],
        avgHMPI: 45.2,
        sampleCount: 28,
        labName: "AquaTest Solutions",
        accreditationId: "CPCB-456"
      },
      4: { // Faridabad_Urban_2024.csv
        locations: ["Sector 16", "Ballabgarh", "Nehru Ground"],
        avgHMPI: 71.8,
        sampleCount: 38,
        labName: "Water Quality Institute",
        accreditationId: "SPCB-789"
      },
      5: { // Ghaziabad_Industrial_2024.csv
        locations: ["Industrial Area", "Vasundhara", "Raj Nagar"],
        avgHMPI: 89.1,
        sampleCount: 41,
        labName: "EnviroLab Pvt Ltd",
        accreditationId: "NABL-001"
      },
      6: { // Delhi_Rural_Areas_2024.csv
        locations: ["Najafgarh", "Nangloi", "Bawana"],
        avgHMPI: 52.4,
        sampleCount: 25,
        labName: "Rural Water Testing Lab",
        accreditationId: "NABL-003"
      }
    };

    const config = baseData[file.id];
    const samples = [];
    
    // Generate sample data based on the file characteristics
    for (let i = 1; i <= config.sampleCount; i++) {
      const location = config.locations[Math.floor(Math.random() * config.locations.length)];
      const baseDate = new Date(file.uploadDate);
      const sampleDate = new Date(baseDate.getTime() - Math.random() * 30 * 24 * 60 * 60 * 1000);
      
      // Generate realistic metal concentrations based on HMPI level
      const hmpiFactor = config.avgHMPI / 100;
      const baseConcentrations = {
        Pb: 0.01 + (hmpiFactor * 0.08),
        As: 0.005 + (hmpiFactor * 0.05),
        Cd: 0.002 + (hmpiFactor * 0.01),
        Cr: 0.01 + (hmpiFactor * 0.1),
        Ni: 0.005 + (hmpiFactor * 0.02),
        Hg: 0.0005 + (hmpiFactor * 0.003),
        Cu: 0.01 + (hmpiFactor * 0.05),
        Zn: 0.05 + (hmpiFactor * 0.2),
        Fe: 0.1 + (hmpiFactor * 0.5),
        Mn: 0.02 + (hmpiFactor * 0.1)
      };

      samples.push({
        SampleID: `S${String(i).padStart(3, '0')}`,
        LabCode: `LAB${String(file.id).padStart(3, '0')}`,
        LabName: config.labName,
        AccreditationID: config.accreditationId,
        CollectorName: "Dr. Rajesh Kumar",
        DateOfCollection: sampleDate.toISOString().split('T')[0],
        TimeOfCollection: `${String(Math.floor(Math.random() * 12) + 8).padStart(2, '0')}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}`,
        Depth: `${Math.floor(Math.random() * 15) + 5}m`,
        SourceType: Math.random() > 0.5 ? "Borewell" : "Hand Pump",
        LocationName: location,
        Latitude: (28.5 + Math.random() * 0.5).toFixed(4),
        Longitude: (77.0 + Math.random() * 0.5).toFixed(4),
        Photo: `sample_${i}.jpg`,
        pH: (6.5 + Math.random() * 1.5).toFixed(1),
        EC: Math.floor(300 + Math.random() * 400),
        TDS: Math.floor(200 + Math.random() * 300),
        Temperature: (22 + Math.random() * 8).toFixed(1),
        Turbidity: (1.0 + Math.random() * 3.0).toFixed(1),
        Pb: (baseConcentrations.Pb + (Math.random() - 0.5) * 0.02).toFixed(3),
        As: (baseConcentrations.As + (Math.random() - 0.5) * 0.01).toFixed(3),
        Cd: (baseConcentrations.Cd + (Math.random() - 0.5) * 0.005).toFixed(3),
        Cr: (baseConcentrations.Cr + (Math.random() - 0.5) * 0.02).toFixed(3),
        Ni: (baseConcentrations.Ni + (Math.random() - 0.5) * 0.01).toFixed(3),
        Hg: (baseConcentrations.Hg + (Math.random() - 0.5) * 0.001).toFixed(4),
        Cu: (baseConcentrations.Cu + (Math.random() - 0.5) * 0.01).toFixed(3),
        Zn: (baseConcentrations.Zn + (Math.random() - 0.5) * 0.05).toFixed(3),
        Fe: (baseConcentrations.Fe + (Math.random() - 0.5) * 0.1).toFixed(3),
        Mn: (baseConcentrations.Mn + (Math.random() - 0.5) * 0.02).toFixed(3)
      });
    }
    
    return samples;
  };

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
    const file = previousFiles.find(f => f.id === fileId);
    if (file) {
      const csvData = generateCSVData(file);
      setSelectedFileData({ file, csvData });
      setViewModalOpen(true);
    }
  };

  const handleDownloadReport = (fileId) => {
    const file = previousFiles.find(f => f.id === fileId);
    if (file) {
      const csvData = generateCSVData(file);
      
      // Convert data to CSV format
      const headers = Object.keys(csvData[0]);
      const csvContent = [
        headers.join(','),
        ...csvData.map(row => headers.map(header => `"${row[header]}"`).join(','))
      ].join('\n');
      
      // Create and download the file
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', file.fileName);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const closeModal = () => {
    setViewModalOpen(false);
    setSelectedFileData(null);
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
                          View CSV
                        </button>
                        <button
                          onClick={() => handleDownloadReport(file.id)}
                          className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700 transition-colors"
                        >
                          Download CSV
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

      {/* View Modal */}
      {viewModalOpen && selectedFileData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-800 rounded-xl p-6 w-full max-w-6xl max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-teal-400">
                {selectedFileData.file.fileName}
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>
            
            <div className="mb-4 text-sm text-gray-300">
              <p><strong>Lab:</strong> {selectedFileData.file.labName} ({selectedFileData.file.accreditationId})</p>
              <p><strong>Samples:</strong> {selectedFileData.file.sampleCount} | <strong>Avg HMPI:</strong> {selectedFileData.file.avgHMPI}</p>
              <p><strong>Upload Date:</strong> {new Date(selectedFileData.file.uploadDate).toLocaleDateString()}</p>
            </div>

            <div className="overflow-auto max-h-[60vh] border border-gray-600 rounded-lg">
              <table className="min-w-full bg-gray-900">
                <thead className="sticky top-0 bg-gray-700">
                  <tr className="text-left text-teal-400">
                    <th className="px-3 py-2 text-xs">Sample ID</th>
                    <th className="px-3 py-2 text-xs">Location</th>
                    <th className="px-3 py-2 text-xs">Date</th>
                    <th className="px-3 py-2 text-xs">pH</th>
                    <th className="px-3 py-2 text-xs">EC</th>
                    <th className="px-3 py-2 text-xs">TDS</th>
                    <th className="px-3 py-2 text-xs">Pb</th>
                    <th className="px-3 py-2 text-xs">As</th>
                    <th className="px-3 py-2 text-xs">Cd</th>
                    <th className="px-3 py-2 text-xs">Cr</th>
                    <th className="px-3 py-2 text-xs">Ni</th>
                    <th className="px-3 py-2 text-xs">Hg</th>
                    <th className="px-3 py-2 text-xs">Cu</th>
                    <th className="px-3 py-2 text-xs">Zn</th>
                    <th className="px-3 py-2 text-xs">Fe</th>
                    <th className="px-3 py-2 text-xs">Mn</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedFileData.csvData.slice(0, 20).map((sample, index) => (
                    <tr key={index} className="border-b border-gray-700 hover:bg-gray-700">
                      <td className="px-3 py-2 text-xs text-white">{sample.SampleID}</td>
                      <td className="px-3 py-2 text-xs text-gray-300">{sample.LocationName}</td>
                      <td className="px-3 py-2 text-xs text-gray-300">{sample.DateOfCollection}</td>
                      <td className="px-3 py-2 text-xs text-gray-300">{sample.pH}</td>
                      <td className="px-3 py-2 text-xs text-gray-300">{sample.EC}</td>
                      <td className="px-3 py-2 text-xs text-gray-300">{sample.TDS}</td>
                      <td className="px-3 py-2 text-xs text-gray-300">{sample.Pb}</td>
                      <td className="px-3 py-2 text-xs text-gray-300">{sample.As}</td>
                      <td className="px-3 py-2 text-xs text-gray-300">{sample.Cd}</td>
                      <td className="px-3 py-2 text-xs text-gray-300">{sample.Cr}</td>
                      <td className="px-3 py-2 text-xs text-gray-300">{sample.Ni}</td>
                      <td className="px-3 py-2 text-xs text-gray-300">{sample.Hg}</td>
                      <td className="px-3 py-2 text-xs text-gray-300">{sample.Cu}</td>
                      <td className="px-3 py-2 text-xs text-gray-300">{sample.Zn}</td>
                      <td className="px-3 py-2 text-xs text-gray-300">{sample.Fe}</td>
                      <td className="px-3 py-2 text-xs text-gray-300">{sample.Mn}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {selectedFileData.csvData.length > 20 && (
                <div className="p-4 text-center text-gray-400 text-sm">
                  Showing first 20 samples of {selectedFileData.csvData.length} total samples
                </div>
              )}
            </div>

            <div className="flex justify-end space-x-4 mt-4">
              <button
                onClick={() => handleDownloadReport(selectedFileData.file.id)}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
              >
                Download CSV
              </button>
              <button
                onClick={closeModal}
                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
