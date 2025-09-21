import React, { useState } from 'react';

function LocationAnalysis({ cityData }) {
  const [selectedSample, setSelectedSample] = useState(0);
  
  // Paschim Vihar sampling data
  const samplingData = [
    {
      id: 'S001',
      date: '2024-01-15',
      coordinates: { lat: 28.6139, lng: 77.2090 },
      hmpi: 7.2,
      riskLevel: 'High',
      color: 'red'
    },
    {
      id: 'S002', 
      date: '2024-04-20',
      coordinates: { lat: 28.6139, lng: 77.2090 },
      hmpi: 6.8,
      riskLevel: 'High',
      color: 'red'
    },
    {
      id: 'S003',
      date: '2024-07-15', 
      coordinates: { lat: 28.6139, lng: 77.2090 },
      hmpi: 5.1,
      riskLevel: 'Moderate-High',
      color: 'orange'
    },
    {
      id: 'S004',
      date: '2024-10-10',
      coordinates: { lat: 28.6139, lng: 77.2090 },
      hmpi: 3.8,
      riskLevel: 'Moderate',
      color: 'yellow'
    },
    {
      id: 'S005',
      date: '2025-01-20',
      coordinates: { lat: 28.6139, lng: 77.2090 },
      hmpi: 2.9,
      riskLevel: 'Low',
      color: 'green'
    }
  ];

  const currentSample = samplingData[selectedSample];

  return (
    <div className="space-y-8">
      {/* Interactive Map Section */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-white">Interactive Location Analysis</h3>
          <div className="flex space-x-2">
            {samplingData.map((sample, index) => (
              <button
                key={sample.id}
                onClick={() => setSelectedSample(index)}
                className={`px-3 py-1 rounded-full text-sm font-semibold transition-all ${
                  selectedSample === index
                    ? 'bg-blue-500 text-white'
                    : 'bg-white/20 text-gray-300 hover:bg-white/30'
                }`}
              >
                {sample.id}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map Visualization */}
          <div className="bg-white/5 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-white mb-4">Sampling Point Map</h4>
            
            {/* Mock Interactive Map */}
            <div className="relative bg-gradient-to-br from-blue-900 via-green-900 to-blue-900 rounded-lg h-64 overflow-hidden">
              {/* Map Background Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="grid grid-cols-8 grid-rows-6 h-full">
                  {Array.from({ length: 48 }).map((_, i) => (
                    <div key={i} className="border border-white/10"></div>
                  ))}
                </div>
              </div>
              
              {/* Sampling Point */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className={`w-8 h-8 rounded-full border-4 border-white shadow-lg flex items-center justify-center ${
                  currentSample.color === 'red' ? 'bg-red-500' :
                  currentSample.color === 'orange' ? 'bg-orange-500' :
                  currentSample.color === 'yellow' ? 'bg-yellow-500' :
                  'bg-green-500'
                }`}>
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                  <div className="text-white text-sm font-semibold">{currentSample.id}</div>
                  <div className="text-gray-300 text-xs">HMPI: {currentSample.hmpi}</div>
                </div>
              </div>

              {/* Map Labels */}
              <div className="absolute top-4 left-4 text-white text-sm">
                <div className="font-semibold">Paschim Vihar</div>
                <div className="text-gray-300 text-xs">Delhi, India</div>
              </div>
              
              <div className="absolute bottom-4 right-4 text-white text-xs">
                <div>28.6139°N, 77.2090°E</div>
              </div>
            </div>

            {/* Map Legend */}
            <div className="mt-4 flex items-center justify-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-gray-300 text-sm">High Risk</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span className="text-gray-300 text-sm">Moderate-High</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-gray-300 text-sm">Moderate</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-300 text-sm">Low Risk</span>
              </div>
            </div>
          </div>

          {/* Sample Details */}
          <div className="bg-white/5 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-white mb-4">Sample Details</h4>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Sample ID</span>
                <span className="text-white font-semibold">{currentSample.id}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Collection Date</span>
                <span className="text-white font-semibold">
                  {new Date(currentSample.date).toLocaleDateString('en-IN', { 
                    day: 'numeric', 
                    month: 'long', 
                    year: 'numeric' 
                  })}
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-300">HMPI Score</span>
                <span className={`font-semibold ${
                  currentSample.color === 'red' ? 'text-red-400' :
                  currentSample.color === 'orange' ? 'text-orange-400' :
                  currentSample.color === 'yellow' ? 'text-yellow-400' :
                  'text-green-400'
                }`}>
                  {currentSample.hmpi}
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Risk Level</span>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  currentSample.color === 'red' ? 'bg-red-100 text-red-800' :
                  currentSample.color === 'orange' ? 'bg-orange-100 text-orange-800' :
                  currentSample.color === 'yellow' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {currentSample.riskLevel}
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Coordinates</span>
                <span className="text-white font-semibold text-sm">
                  {currentSample.coordinates.lat}°N, {currentSample.coordinates.lng}°E
                </span>
              </div>
            </div>

            {/* Progress Indicator */}
            <div className="mt-6">
              <div className="flex justify-between text-sm text-gray-300 mb-2">
                <span>Sample Progress</span>
                <span>{selectedSample + 1} of {samplingData.length}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((selectedSample + 1) / samplingData.length) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Temporal Analysis */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
        <h3 className="text-2xl font-bold text-white mb-6">Temporal Analysis</h3>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Timeline Chart */}
          <div className="bg-white/5 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-white mb-4">HMPI Timeline</h4>
            
            <div className="space-y-4">
              {samplingData.map((sample, index) => (
                <div key={sample.id} className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className={`w-4 h-4 rounded-full ${
                      sample.color === 'red' ? 'bg-red-500' :
                      sample.color === 'orange' ? 'bg-orange-500' :
                      sample.color === 'yellow' ? 'bg-yellow-500' :
                      'bg-green-500'
                    }`}></div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-white font-semibold">{sample.id}</span>
                      <span className="text-gray-300 text-sm">
                        {new Date(sample.date).toLocaleDateString('en-IN', { month: 'short', year: '2-digit' })}
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-500 ${
                          sample.color === 'red' ? 'bg-red-500' :
                          sample.color === 'orange' ? 'bg-orange-500' :
                          sample.color === 'yellow' ? 'bg-yellow-500' :
                          'bg-green-500'
                        }`}
                        style={{ width: `${(sample.hmpi / 8) * 100}%` }}
                      ></div>
                    </div>
                    
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                      <span>HMPI: {sample.hmpi}</span>
                      <span>{sample.riskLevel}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Improvement Metrics */}
          <div className="bg-white/5 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-white mb-4">Improvement Metrics</h4>
            
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">
                  {((samplingData[0].hmpi - samplingData[samplingData.length - 1].hmpi) / samplingData[0].hmpi * 100).toFixed(1)}%
                </div>
                <div className="text-gray-300">Overall Improvement</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-xl font-bold text-blue-400 mb-1">
                    {samplingData[0].hmpi}
                  </div>
                  <div className="text-gray-300 text-sm">Starting HMPI</div>
                </div>
                
                <div className="text-center">
                  <div className="text-xl font-bold text-green-400 mb-1">
                    {samplingData[samplingData.length - 1].hmpi}
                  </div>
                  <div className="text-gray-300 text-sm">Current HMPI</div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-lg font-bold text-yellow-400 mb-1">
                  {samplingData.length} Samples
                </div>
                <div className="text-gray-300 text-sm">Over 12 Months</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Environmental Context */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
        <h3 className="text-2xl font-bold text-white mb-6">Environmental Context</h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Urban Area</h4>
            <p className="text-gray-300 text-sm">Located in densely populated residential area with industrial influence</p>
          </div>
          
          <div className="bg-white/5 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Groundwater Source</h4>
            <p className="text-gray-300 text-sm">Borewell at 30m depth, susceptible to surface contamination</p>
          </div>
          
          <div className="bg-white/5 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Monitoring Program</h4>
            <p className="text-gray-300 text-sm">Quarterly sampling by certified NABL laboratory</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationAnalysis;
