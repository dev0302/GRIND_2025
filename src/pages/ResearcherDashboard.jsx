import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";

export default function ResearcherDashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Load user data from localStorage
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleUploadFile = () => {
    navigate("/fileUpload");
  };

  const handleViewPreviousFiles = () => {
    navigate("/previousFiles");
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("role");
    navigate("/login");
  };

  // Sample lab data - in a real app, this would come from the user's profile
  const labData = {
    name: "EnviroLab Pvt Ltd",
    accreditationId: "NABL-001",
    address: "123 Research Park, Delhi - 110001",
    phone: "+91-11-2345-6789",
    email: "info@envirolab.com",
    established: "2015",
    certifications: ["NABL", "ISO 17025", "CPCB Approved"],
    specialties: ["Water Quality Testing", "Heavy Metal Analysis", "Environmental Monitoring"]
  };

  const stats = {
    totalUploads: 6,
    totalSamples: 209,
    avgHMPI: 68.2,
    criticalSamples: 2
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white pt-16">
      <Navbar />
      <div className="max-w-7xl mx-auto p-6">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-teal-400 mb-2">
              Researcher Dashboard
            </h1>
            <p className="text-gray-300">
              Welcome back, {user?.name || "Researcher"}
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-red-700 transition-all duration-300"
          >
            Logout
          </button>
        </div>

        {/* Lab Information Card */}
        <div className="bg-gradient-to-r from-slate-800 to-gray-800 p-8 rounded-2xl shadow-lg mb-8 border border-slate-700">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-6">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 backdrop-blur-lg rounded-full flex items-center justify-center shadow-2xl shadow-cyan-500/20">
                <img src="/logo.jpeg" alt="Lab Logo" className="h-12 w-12 rounded-full" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">{labData.name}</h2>
                <p className="text-cyan-400 font-semibold mb-1">Accreditation: {labData.accreditationId}</p>
                <p className="text-gray-300 text-sm">{labData.address}</p>
                <div className="flex items-center space-x-4 mt-2 text-sm text-gray-400">
                  <span>📞 {labData.phone}</span>
                  <span>✉️ {labData.email}</span>
                  <span>📅 Est. {labData.established}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-2">
                Active Lab
              </div>
              <p className="text-gray-400 text-sm">Last Activity: Today</p>
            </div>
          </div>
          
          {/* Certifications and Specialties */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-3">Certifications</h3>
              <div className="flex flex-wrap gap-2">
                {labData.certifications.map((cert, index) => (
                  <span key={index} className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-600/30">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-3">Specialties</h3>
              <div className="flex flex-wrap gap-2">
                {labData.specialties.map((specialty, index) => (
                  <span key={index} className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-600/30">
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 p-6 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-blue-200 mb-2">Total Uploads</h3>
                <p className="text-3xl font-bold text-white">{stats.totalUploads}</p>
              </div>
              <div className="w-12 h-12 bg-blue-600/30 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-900 to-green-800 p-6 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-green-200 mb-2">Total Samples</h3>
                <p className="text-3xl font-bold text-white">{stats.totalSamples}</p>
              </div>
              <div className="w-12 h-12 bg-green-600/30 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-900 to-purple-800 p-6 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-purple-200 mb-2">Avg HMPI</h3>
                <p className="text-3xl font-bold text-white">{stats.avgHMPI}</p>
              </div>
              <div className="w-12 h-12 bg-purple-600/30 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-orange-900 to-red-800 p-6 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-orange-200 mb-2">Critical Samples</h3>
                <p className="text-3xl font-bold text-white">{stats.criticalSamples}</p>
              </div>
              <div className="w-12 h-12 bg-red-600/30 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Upload New File Card */}
          <div className="bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Upload New Data</h3>
                <p className="text-gray-400">Upload CSV files for HMPI analysis</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Upload your groundwater research data in CSV format. Our system will automatically calculate HMPI values, generate comprehensive reports, and provide detailed analysis with trend tracking.
            </p>
            <button
              onClick={handleUploadFile}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-1"
            >
              Upload CSV File
            </button>
          </div>

          {/* View Previous Files Card */}
          <div className="bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300 group">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Previous Files</h3>
                <p className="text-gray-400">View and manage uploaded datasets</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Access all your previously uploaded research files, view generated reports, download PDFs, and track the progress of your environmental monitoring projects.
            </p>
            <button
              onClick={handleViewPreviousFiles}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-1"
            >
              View All Files
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-indigo-400">Recent Activity</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-green-600/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold">Report Generated</p>
                  <p className="text-gray-400 text-sm">Delhi_Groundwater_Study_2024.csv</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-gray-300 text-sm">2 hours ago</p>
                <p className="text-green-400 text-sm font-semibold">Completed</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold">File Uploaded</p>
                  <p className="text-gray-400 text-sm">Gurgaon_Industrial_Area_2024.csv</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-gray-300 text-sm">1 day ago</p>
                <p className="text-blue-400 text-sm font-semibold">Processing</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-purple-600/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold">PDF Downloaded</p>
                  <p className="text-gray-400 text-sm">Noida_Residential_2024_Report.pdf</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-gray-300 text-sm">3 days ago</p>
                <p className="text-purple-400 text-sm font-semibold">Downloaded</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}