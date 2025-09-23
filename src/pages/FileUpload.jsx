import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Papa from "papaparse";

export default function FileUpload() {
  const navigate = useNavigate();
  const [researchData, setResearchData] = useState([]);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploadedFile(file);

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        console.log("CSV Parsed Results:", results.data);
        
        const parsedData = results.data.map((row, index) => ({
          id: Date.now() + index,
          SampleID: row.SampleID || `S${index + 1}`,
          LabCode: row.LabCode || "N/A",
          LabName: row.LabName || "N/A",
          AccreditationID: row.AccreditationID || "N/A",
          CollectorName: row.CollectorName || "N/A",
          DateOfCollection: row.DateOfCollection || new Date().toISOString().split('T')[0],
          TimeOfCollection: row.TimeOfCollection || "N/A",
          Depth: row.Depth || "N/A",
          SourceType: row.SourceType || "N/A",
          LocationName: row.LocationName || "Unknown",
          Latitude: row.Latitude || "N/A",
          Longitude: row.Longitude || "N/A",
          Photo: row.Photo || "N/A",
          pH: row.pH || "N/A",
          EC: row.EC || "N/A",
          TDS: row.TDS || "N/A",
          Temperature: row.Temperature || "N/A",
          Turbidity: row.Turbidity || "N/A",
          Pb: row.Pb || 0,
          As: row.As || 0,
          Cd: row.Cd || 0,
          Cr: row.Cr || 0,
          Ni: row.Ni || 0,
          Hg: row.Hg || 0,
          Cu: row.Cu || 0,
          Zn: row.Zn || 0,
          Fe: row.Fe || 0,
          Mn: row.Mn || 0,
          location: row.LocationName || "Unknown",
          date: row.DateOfCollection || new Date().toISOString().split('T')[0],
        }));

        console.log("Processed Data:", parsedData);
        setResearchData([...parsedData, ...researchData]);
        setIsFileUploaded(true);
        // alert("CSV uploaded successfully! Click 'Generate Report' to proceed.");
      },
      error: function (err) {
        console.error("CSV Parse Error:", err);
        alert("Error parsing CSV: " + err.message);
      },
    });
  };

  const handleGenerateReport = () => {
    if (!isFileUploaded) {
      const toast = document.createElement('div');
      toast.className = 'fixed top-20 right-4 bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 transform transition-all duration-300 translate-x-full';
      toast.innerHTML = `
        <div class="flex items-center space-x-2">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span>Please upload a CSV file first!</span>
        </div>
      `;
      document.body.appendChild(toast);
      
      setTimeout(() => {
        toast.classList.remove('translate-x-full');
      }, 100);
      
      setTimeout(() => {
        toast.classList.add('translate-x-full');
        setTimeout(() => {
          document.body.removeChild(toast);
        }, 300);
      }, 3000);
      
      return;
    }

    // Start staged loader (3 steps)
    setIsLoading(true);
    setStepIndex(0);

    setTimeout(() => {
      setStepIndex(1);
      setTimeout(() => {
        setStepIndex(2);
        setTimeout(() => {
          // Persist data
          localStorage.setItem("researchData", JSON.stringify(researchData));
          localStorage.setItem("uploadedFileName", uploadedFile?.name || "research_data.csv");

          // Scroll to top and navigate
          window.scrollTo({ top: 0, behavior: 'smooth' });
          navigate("/researcherReport");
          setIsLoading(false);
        }, 900);
      }, 900);
    }, 900);
  };

  const handleBackToDashboard = () => {
    navigate("/researcherDashboard");
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white pt-16">
      <Navbar />
      <div className="max-w-5xl mx-auto p-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-teal-400">
            Upload Research Data
          </h1>
          <button
            onClick={handleBackToDashboard}
            className="bg-gray-700 text-white font-semibold py-2 px-6 rounded-lg hover:bg-gray-600 transition-all duration-300"
          >
            Back to Dashboard
          </button>
        </div>

        {/* CSV Upload Section */}
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-400">
            Upload Groundwater Research CSV
          </h2>
          <div className="space-y-4">
            <input
              type="file"
              accept=".csv"
              onChange={handleFileUpload}
              className="p-2 rounded-lg bg-gray-700 cursor-pointer w-full"
            />
            <p className="text-gray-400 text-sm">
              CSV columns: <b>SampleID, LocationName, Metal Concentrations, DateOfCollection</b>
            </p>
            
            {/* File Upload Status */}
            {isFileUploaded && (
              <div className="mt-4 p-3 bg-green-900/20 border border-green-700/30 rounded-lg">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-green-400 text-sm font-medium">
                    File uploaded successfully: {uploadedFile?.name}
                  </span>
                </div>
              </div>
            )}
            
            {/* Submit Button - Always visible */}
            <div className="mt-4 pt-4 border-t border-gray-700">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-400">
                  {isFileUploaded ? "Ready to generate report" : "Upload a file to generate report"}
                </div>
                <button
                  onClick={handleGenerateReport}
                  className={`font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 ${
                    isFileUploaded 
                      ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:shadow-lg hover:shadow-indigo-500/25" 
                      : "bg-gray-600 text-gray-300 hover:bg-gray-500"
                  }`}
                >
                  Generate Report
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* File Format Description */}
        <div className="bg-gradient-to-r from-slate-800 to-gray-800 p-6 rounded-2xl shadow-lg mb-8 border border-slate-700">
          <h3 className="text-lg font-semibold mb-4 text-cyan-400 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Required File Format
          </h3>
          
          <div className="space-y-6 text-sm text-gray-300">
            {/* Sample Identification */}
            <div>
              <h4 className="font-semibold text-white mb-3 text-base">1. Sample Identification & Metadata</h4>
              <div className="bg-gray-900/50 p-4 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div><span className="text-cyan-300">Sample ID:</span> Unique identifier (text)</div>
                  <div><span className="text-cyan-300">Lab Code:</span> Laboratory code (text)</div>
                  <div><span className="text-cyan-300">Collector Name:</span> Full name (text)</div>
                  <div><span className="text-cyan-300">Date of Collection:</span> YYYY-MM-DD (date)</div>
                  <div><span className="text-cyan-300">Time of Collection:</span> HH:MM AM/PM (time)</div>
                  <div><span className="text-cyan-300">Depth:</span> meters (number)</div>
                  <div><span className="text-cyan-300">Source Type:</span> Borewell, hand pump, dug well (text)</div>
                  <div><span className="text-cyan-300">Location Name:</span> Village/Town/District (text)</div>
                  <div><span className="text-cyan-300">Latitude/Longitude:</span> Decimal degrees (number)</div>
                  <div><span className="text-cyan-300">Photo/Site Image:</span> File name (text)</div>
                </div>
              </div>
            </div>

            {/* Basic Water Quality */}
            <div>
              <h4 className="font-semibold text-white mb-3 text-base">2. Basic Water Quality Parameters</h4>
              <div className="bg-gray-900/50 p-4 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div><span className="text-cyan-300">pH:</span> — (dimensionless)</div>
                  <div><span className="text-cyan-300">Electrical Conductivity:</span> µS/cm (number)</div>
                  <div><span className="text-cyan-300">Total Dissolved Solids:</span> mg/L (number)</div>
                  <div><span className="text-cyan-300">Temperature:</span> °C (number)</div>
                  <div><span className="text-cyan-300">Turbidity:</span> NTU (number)</div>
                </div>
                <p className="text-xs text-gray-400 mt-2 italic">These parameters provide context for HMPI calculations</p>
              </div>
            </div>

            {/* Heavy Metal Data */}
            <div>
              <h4 className="font-semibold text-white mb-3 text-base">3. Heavy Metal Concentration Data (Core Section)</h4>
              <div className="bg-gray-900/50 p-4 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div><span className="text-cyan-300">Lead (Pb):</span> mg/L (number)</div>
                  <div><span className="text-cyan-300">Arsenic (As):</span> mg/L (number)</div>
                  <div><span className="text-cyan-300">Cadmium (Cd):</span> mg/L (number)</div>
                  <div><span className="text-cyan-300">Chromium (Cr):</span> mg/L (number)</div>
                  <div><span className="text-cyan-300">Nickel (Ni):</span> mg/L (number)</div>
                  <div><span className="text-cyan-300">Mercury (Hg):</span> mg/L (number)</div>
                  <div><span className="text-cyan-300">Copper (Cu):</span> mg/L (number)</div>
                  <div><span className="text-cyan-300">Zinc (Zn):</span> mg/L (number)</div>
                  <div><span className="text-cyan-300">Iron (Fe):</span> mg/L (number)</div>
                  <div><span className="text-cyan-300">Manganese (Mn):</span> mg/L (number)</div>
                </div>
                <p className="text-xs text-gray-400 mt-2 italic">Optional: Selenium (Se), Cobalt (Co) depending on study area</p>
              </div>
            </div>

            {/* Additional Notes */}
            <div className="bg-blue-900/20 border border-blue-700/30 p-4 rounded-lg">
              <div className="flex items-start">
                <svg className="w-4 h-4 text-blue-400 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="text-xs">
                  <p className="text-blue-300 font-medium mb-1">Important Notes:</p>
                  <ul className="text-gray-300 space-y-1">
                    <li>• All concentrations should be in mg/L or µg/L</li>
                    <li>• Include proper units for each measurement</li>
                    <li>• Ensure sample IDs are unique across your dataset</li>
                    <li>• Geo-coordinates enable heat map generation</li>
                    <li>• Missing values should be left blank or marked as "ND" (Not Detected)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
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
                    <th className="px-4 py-2">Sample ID</th>
                    <th className="px-4 py-2">Location</th>
                    <th className="px-4 py-2">Date</th>
                    <th className="px-4 py-2">Pb (mg/L)</th>
                    <th className="px-4 py-2">As (mg/L)</th>
                    <th className="px-4 py-2">HMPI</th>
                  </tr>
                </thead>
                <tbody>
                  {researchData.map((r) => (
                    <tr
                      key={r.id}
                      className="border-b border-gray-700 hover:bg-gray-700 transition"
                    >
                      <td className="px-4 py-2">{r.SampleID}</td>
                      <td className="px-4 py-2">{r.LocationName}</td>
                      <td className="px-4 py-2">{r.DateOfCollection}</td>
                      <td className="px-4 py-2">{r.Pb}</td>
                      <td className="px-4 py-2">{r.As}</td>
                      <td className="px-4 py-2">N/A</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Staged Loader Overlay during report generation */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 w-full max-w-md text-center shadow-2xl">
            <div className="mx-auto w-14 h-14 border-4 border-indigo-400 border-t-transparent rounded-full animate-spin mb-6"></div>
            <div className="space-y-2">
              {stepIndex === 0 && (
                <p className="text-white text-lg font-semibold">Uploading and parsing CSV...</p>
              )}
              {stepIndex === 1 && (
                <p className="text-white text-lg font-semibold">Fetching Previous Data...</p>
              )}
              {stepIndex === 2 && (
                <p className="text-white text-lg font-semibold">Preparing your report...</p>
              )}
              <p className="text-gray-300 text-sm">Please wait</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
