import React, { useState, useEffect } from 'react';
import LocationAnalysis from './LocationAnalysis';
import UserFriendlySummary from './UserFriendlySummary';

// Paschim Vihar detailed data from CSV
const paschimViharData = [
  {
    sampleId: "S001",
    date: "2024-01-15",
    pH: 7.4,
    EC: 750,
    TDS: 480,
    temperature: 28,
    turbidity: 3,
    Pb: 0.12,
    As: 0.05,
    Cd: 0.003,
    Cr: 0.15,
    Ni: 0.06,
    Hg: 0.001,
    Cu: 0.08,
    Zn: 0.18,
    Fe: 0.8,
    Mn: 0.15,
    hmpi: 7.2
  },
  {
    sampleId: "S002",
    date: "2024-04-20",
    pH: 7.3,
    EC: 780,
    TDS: 490,
    temperature: 29,
    turbidity: 3.2,
    Pb: 0.08,
    As: 0.03,
    Cd: 0.002,
    Cr: 0.12,
    Ni: 0.04,
    Hg: 0.0008,
    Cu: 0.06,
    Zn: 0.15,
    Fe: 0.6,
    Mn: 0.12,
    hmpi: 6.8
  },
  {
    sampleId: "S003",
    date: "2024-07-15",
    pH: 7.2,
    EC: 800,
    TDS: 500,
    temperature: 30,
    turbidity: 3.5,
    Pb: 0.05,
    As: 0.02,
    Cd: 0.0015,
    Cr: 0.08,
    Ni: 0.03,
    Hg: 0.0006,
    Cu: 0.04,
    Zn: 0.12,
    Fe: 0.45,
    Mn: 0.1,
    hmpi: 5.1
  },
  {
    sampleId: "S004",
    date: "2024-10-10",
    pH: 7.1,
    EC: 820,
    TDS: 510,
    temperature: 31,
    turbidity: 3.8,
    Pb: 0.03,
    As: 0.015,
    Cd: 0.001,
    Cr: 0.06,
    Ni: 0.02,
    Hg: 0.0004,
    Cu: 0.03,
    Zn: 0.1,
    Fe: 0.35,
    Mn: 0.08,
    hmpi: 3.8
  },
  {
    sampleId: "S005",
    date: "2025-01-20",
    pH: 7.0,
    EC: 850,
    TDS: 520,
    temperature: 32,
    turbidity: 4.0,
    Pb: 0.02,
    As: 0.01,
    Cd: 0.0008,
    Cr: 0.04,
    Ni: 0.015,
    Hg: 0.0003,
    Cu: 0.025,
    Zn: 0.08,
    Fe: 0.25,
    Mn: 0.06,
    hmpi: 2.9
  }
];

// BIS Limits
const BIS_LIMITS = {
  Pb: 0.01,
  As: 0.01,
  Cd: 0.003,
  Cr: 0.05,
  Ni: 0.02,
  Hg: 0.001,
  Cu: 0.05,
  Zn: 3.0,
  Fe: 0.3,
  Mn: 0.1
};

function GraphicalAnalysis({ cityData }) {
  const [selectedParameter, setSelectedParameter] = useState('hmpi');
  const [selectedTimeframe, setSelectedTimeframe] = useState('all');
  const [showTrendAnalysis, setShowTrendAnalysis] = useState(true);

  // Calculate trend data
  const calculateTrend = (parameter) => {
    const values = paschimViharData.map(sample => sample[parameter]);
    const firstValue = values[0];
    const lastValue = values[values.length - 1];
    const change = lastValue - firstValue;
    const percentChange = ((change / firstValue) * 100).toFixed(1);
    
    return {
      firstValue,
      lastValue,
      change,
      percentChange,
      trend: change > 0 ? 'increasing' : change < 0 ? 'decreasing' : 'stable',
      values
    };
  };

  const hmpiTrend = calculateTrend('hmpi');
  const leadTrend = calculateTrend('Pb');
  const arsenicTrend = calculateTrend('As');

  // Get current HMPI level
  const getHmpiLevel = (hmpi) => {
    if (hmpi < 2.0) return { level: 'Low', color: 'green', description: 'Safe for consumption' };
    if (hmpi < 4.0) return { level: 'Moderate', color: 'yellow', description: 'Caution required' };
    if (hmpi < 6.0) return { level: 'Moderate-High', color: 'orange', description: 'Treatment recommended' };
    if (hmpi < 8.0) return { level: 'High', color: 'red', description: 'Critical - immediate action needed' };
    return { level: 'Very High', color: 'purple', description: 'Extremely dangerous' };
  };

  const currentHmpi = paschimViharData[paschimViharData.length - 1].hmpi;
  const hmpiLevel = getHmpiLevel(currentHmpi);

  return (
    <div className="space-y-8">
      {/* HMPI Trend Overview */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-white">HMPI Trend Analysis</h3>
          <div className={`px-4 py-2 rounded-full text-sm font-semibold ${
            hmpiLevel.color === 'green' ? 'bg-green-100 text-green-800' :
            hmpiLevel.color === 'yellow' ? 'bg-yellow-100 text-yellow-800' :
            hmpiLevel.color === 'orange' ? 'bg-orange-100 text-orange-800' :
            hmpiLevel.color === 'red' ? 'bg-red-100 text-red-800' :
            'bg-purple-100 text-purple-800'
          }`}>
            {hmpiLevel.level} Risk
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">{currentHmpi}</div>
            <div className="text-gray-300">Current HMPI</div>
          </div>
          <div className="text-center">
            <div className={`text-2xl font-bold mb-2 ${
              hmpiTrend.trend === 'decreasing' ? 'text-green-400' : 
              hmpiTrend.trend === 'increasing' ? 'text-red-400' : 'text-gray-400'
            }`}>
              {hmpiTrend.trend === 'decreasing' ? '↘️' : 
               hmpiTrend.trend === 'increasing' ? '↗️' : '→'}
            </div>
            <div className="text-gray-300">Trend</div>
          </div>
          <div className="text-center">
            <div className={`text-2xl font-bold mb-2 ${
              hmpiTrend.percentChange < 0 ? 'text-green-400' : 'text-red-400'
            }`}>
              {hmpiTrend.percentChange > 0 ? '+' : ''}{hmpiTrend.percentChange}%
            </div>
            <div className="text-gray-300">Change (1 Year)</div>
          </div>
        </div>

        {/* HMPI Trend Chart */}
        <div className="bg-white/5 rounded-xl p-6">
          <h4 className="text-lg font-semibold text-white mb-4">HMPI Over Time</h4>
          <div className="flex items-end justify-between h-32 space-x-2">
            {paschimViharData.map((sample, index) => {
              const height = (sample.hmpi / 8) * 100; // Scale to max 8
              return (
                <div key={sample.sampleId} className="flex flex-col items-center flex-1">
                  <div 
                    className={`w-full rounded-t transition-all duration-500 ${
                      sample.hmpi < 2 ? 'bg-green-500' :
                      sample.hmpi < 4 ? 'bg-yellow-500' :
                      sample.hmpi < 6 ? 'bg-orange-500' :
                      sample.hmpi < 8 ? 'bg-red-500' : 'bg-purple-500'
                    }`}
                    style={{ height: `${height}%` }}
                  ></div>
                  <div className="text-xs text-gray-400 mt-2 text-center">
                    {new Date(sample.date).toLocaleDateString('en-IN', { month: 'short', year: '2-digit' })}
                  </div>
                  <div className="text-xs text-white font-semibold mt-1">{sample.hmpi}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Heavy Metal Analysis */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
        <h3 className="text-2xl font-bold text-white mb-6">Heavy Metal Analysis</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Lead Analysis */}
          <div className="bg-white/5 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-white">Lead (Pb)</h4>
              <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                leadTrend.lastValue > BIS_LIMITS.Pb ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
              }`}>
                {leadTrend.lastValue > BIS_LIMITS.Pb ? 'Exceeded' : 'Safe'}
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Current Level</span>
                <span className="text-white font-semibold">{leadTrend.lastValue} mg/L</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">BIS Limit</span>
                <span className="text-gray-400">{BIS_LIMITS.Pb} mg/L</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Trend</span>
                <span className={`font-semibold ${
                  leadTrend.trend === 'decreasing' ? 'text-green-400' : 
                  leadTrend.trend === 'increasing' ? 'text-red-400' : 'text-gray-400'
                }`}>
                  {leadTrend.trend === 'decreasing' ? '↘️ Improving' : 
                   leadTrend.trend === 'increasing' ? '↗️ Worsening' : '→ Stable'}
                </span>
              </div>
            </div>

            {/* Lead Trend Mini Chart */}
            <div className="mt-4 flex items-end space-x-1 h-16">
              {leadTrend.values.map((value, index) => {
                const height = (value / Math.max(...leadTrend.values)) * 100;
                return (
                  <div 
                    key={index}
                    className="flex-1 bg-blue-500 rounded-t"
                    style={{ height: `${height}%` }}
                  ></div>
                );
              })}
            </div>
          </div>

          {/* Arsenic Analysis */}
          <div className="bg-white/5 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-white">Arsenic (As)</h4>
              <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                arsenicTrend.lastValue > BIS_LIMITS.As ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
              }`}>
                {arsenicTrend.lastValue > BIS_LIMITS.As ? 'Exceeded' : 'Safe'}
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Current Level</span>
                <span className="text-white font-semibold">{arsenicTrend.lastValue} mg/L</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">BIS Limit</span>
                <span className="text-gray-400">{BIS_LIMITS.As} mg/L</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Trend</span>
                <span className={`font-semibold ${
                  arsenicTrend.trend === 'decreasing' ? 'text-green-400' : 
                  arsenicTrend.trend === 'increasing' ? 'text-red-400' : 'text-gray-400'
                }`}>
                  {arsenicTrend.trend === 'decreasing' ? '↘️ Improving' : 
                   arsenicTrend.trend === 'increasing' ? '↗️ Worsening' : '→ Stable'}
                </span>
              </div>
            </div>

            {/* Arsenic Trend Mini Chart */}
            <div className="mt-4 flex items-end space-x-1 h-16">
              {arsenicTrend.values.map((value, index) => {
                const height = (value / Math.max(...arsenicTrend.values)) * 100;
                return (
                  <div 
                    key={index}
                    className="flex-1 bg-orange-500 rounded-t"
                    style={{ height: `${height}%` }}
                  ></div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Water Quality Parameters */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
        <h3 className="text-2xl font-bold text-white mb-6">Water Quality Parameters</h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* pH Level */}
          <div className="bg-white/5 rounded-xl p-6 text-center">
            <h4 className="text-lg font-semibold text-white mb-2">pH Level</h4>
            <div className="text-3xl font-bold text-blue-400 mb-2">
              {paschimViharData[paschimViharData.length - 1].pH}
            </div>
            <div className="text-sm text-gray-300">Optimal Range: 6.5 - 8.5</div>
            <div className="mt-2 w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: `${((paschimViharData[paschimViharData.length - 1].pH - 6) / 2.5) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* TDS Level */}
          <div className="bg-white/5 rounded-xl p-6 text-center">
            <h4 className="text-lg font-semibold text-white mb-2">TDS (mg/L)</h4>
            <div className="text-3xl font-bold text-cyan-400 mb-2">
              {paschimViharData[paschimViharData.length - 1].TDS}
            </div>
            <div className="text-sm text-gray-300">Acceptable: &lt; 500 mg/L</div>
            <div className="mt-2 w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-cyan-500 h-2 rounded-full"
                style={{ width: `${Math.min((paschimViharData[paschimViharData.length - 1].TDS / 1000) * 100, 100)}%` }}
              ></div>
            </div>
          </div>

          {/* Temperature */}
          <div className="bg-white/5 rounded-xl p-6 text-center">
            <h4 className="text-lg font-semibold text-white mb-2">Temperature (°C)</h4>
            <div className="text-3xl font-bold text-yellow-400 mb-2">
              {paschimViharData[paschimViharData.length - 1].temperature}°C
            </div>
            <div className="text-sm text-gray-300">Normal Range: 25-35°C</div>
            <div className="mt-2 w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-yellow-500 h-2 rounded-full"
                style={{ width: `${((paschimViharData[paschimViharData.length - 1].temperature - 20) / 20) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Location Analysis */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
        <h3 className="text-2xl font-bold text-white mb-6">Location Analysis</h3>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Map Visualization */}
          <div className="bg-white/5 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-white mb-4">Sampling Location</h4>
            <div className="bg-gray-800 rounded-lg p-4 text-center">
              <div className="text-blue-400 text-sm mb-2">📍 Paschim Vihar, Delhi</div>
              <div className="text-gray-300 text-xs mb-4">
                Coordinates: 28.6139°N, 77.2090°E
              </div>
              <div className="w-full h-32 bg-gradient-to-br from-blue-900 to-green-900 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-white font-semibold">Interactive Map</div>
                  <div className="text-gray-400 text-sm">5 Sampling Points</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sampling Details */}
          <div className="bg-white/5 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-white mb-4">Sampling Details</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-300">Total Samples</span>
                <span className="text-white font-semibold">{paschimViharData.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Sampling Period</span>
                <span className="text-white font-semibold">Jan 2024 - Jan 2025</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Source Type</span>
                <span className="text-white font-semibold">Borewell</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Depth</span>
                <span className="text-white font-semibold">30 meters</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Lab</span>
                <span className="text-white font-semibold">EnviroLab Pvt Ltd</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
        <h3 className="text-2xl font-bold text-white mb-6">Smart Recommendations</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-green-400">✅ Positive Trends</h4>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <span className="text-green-400 mt-1">•</span>
                <span className="text-gray-300">HMPI has decreased by {Math.abs(hmpiTrend.percentChange)}% over the year</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-400 mt-1">•</span>
                <span className="text-gray-300">Lead levels showing consistent improvement</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-400 mt-1">•</span>
                <span className="text-gray-300">Arsenic concentrations decreasing</span>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-yellow-400">⚠️ Areas of Concern</h4>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <span className="text-yellow-400 mt-1">•</span>
                <span className="text-gray-300">TDS levels slightly above optimal range</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-yellow-400 mt-1">•</span>
                <span className="text-gray-300">Temperature showing seasonal variation</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-yellow-400 mt-1">•</span>
                <span className="text-gray-300">Continue monitoring heavy metal levels</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Location Analysis Component */}
      <LocationAnalysis cityData={cityData} />

      {/* User-Friendly Summary Component */}
      <UserFriendlySummary cityData={cityData} />
    </div>
  );
}

export default GraphicalAnalysis;
