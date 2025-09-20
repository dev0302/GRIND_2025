import React from 'react';

function U_Home() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Groundwater Quality Check
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Check Heavy Metal Pollution Index (HMPI) for your location
          </p>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Delhi HMPI Report
            </h2>
            <p className="text-gray-600 mb-6">
              New Delhi, Delhi
            </p>
            
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white mb-4">
                <div className="text-center">
                  <div className="text-3xl font-bold">6.8</div>
                  <div className="text-sm opacity-90">HMPI Score</div>
                </div>
              </div>
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold text-red-600 bg-red-100">
                High Risk Level
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Heavy Metal Concentrations</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-2 text-left">Metal</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Concentration (mg/L)</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Safe Limit (mg/L)</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">Lead (Pb)</td>
                      <td className="border border-gray-300 px-4 py-2">0.038</td>
                      <td className="border border-gray-300 px-4 py-2">0.01</td>
                      <td className="border border-gray-300 px-4 py-2">
                        <span className="px-2 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-800">
                          Exceeded
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">Cadmium (Cd)</td>
                      <td className="border border-gray-300 px-4 py-2">0.006</td>
                      <td className="border border-gray-300 px-4 py-2">0.003</td>
                      <td className="border border-gray-300 px-4 py-2">
                        <span className="px-2 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-800">
                          Exceeded
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">Mercury (Hg)</td>
                      <td className="border border-gray-300 px-4 py-2">0.0015</td>
                      <td className="border border-gray-300 px-4 py-2">0.001</td>
                      <td className="border border-gray-300 px-4 py-2">
                        <span className="px-2 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-800">
                          Exceeded
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">Arsenic (As)</td>
                      <td className="border border-gray-300 px-4 py-2">0.018</td>
                      <td className="border border-gray-300 px-4 py-2">0.01</td>
                      <td className="border border-gray-300 px-4 py-2">
                        <span className="px-2 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-800">
                          Exceeded
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">Chromium (Cr)</td>
                      <td className="border border-gray-300 px-4 py-2">0.095</td>
                      <td className="border border-gray-300 px-4 py-2">0.05</td>
                      <td className="border border-gray-300 px-4 py-2">
                        <span className="px-2 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-800">
                          Exceeded
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Recommendations</h3>
              <ul className="space-y-2">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Critical water quality issues detected</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Use only treated water for consumption</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Install RO systems immediately</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Contact local authorities for water testing</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1">
                Generate HMPI Report
              </button>
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300">
                Search Another Location
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default U_Home;