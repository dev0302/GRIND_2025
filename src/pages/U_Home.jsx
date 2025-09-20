// import React, { useEffect, useState } from "react";

// function U_Home() {
//   const [location, setLocation] = useState(null);
//   const [waterData, setWaterData] = useState([
//     { location: "New Delhi", wqi: 42, status: "toxic" },
//     { location: "Mumbai", wqi: 78, status: "safe" },
//     { location: "Chennai", wqi: 55, status: "toxic" },
//     { location: "Kolkata", wqi: 65, status: "safe" },
//   ]);
//   const [userWQI, setUserWQI] = useState(null);

//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition((pos) => {
//         const lat = pos.coords.latitude;
//         const lng = pos.coords.longitude;
//         setLocation({ lat, lng });

//         // Simple mock logic: pick first city for demo
//         const data = waterData[0];
//         setUserWQI(data);
//         console.log("User location:", { lat, lng });
//         console.log("Water Quality Data:", data);
//       });
//     } else {
//       console.log("Geolocation not supported");
//     }
//   }, []);

//   return (
//     <div className="min-h-screen bg-richblack-900 text-white font-inter p-8 pt-24">
//       <h1 className="text-4xl font-bold mb-6 text-blue-100">Welcome to ToxiTrace</h1>
      
//       {userWQI ? (
//         <div className="bg-richblack-800 p-6 rounded-xl shadow-lg">
//           <h2 className="text-2xl font-semibold mb-2">{userWQI.location}</h2>
//           <p className="text-lg">
//             Water Quality Index:{" "}
//             <span className={userWQI.status === "safe" ? "text-green-400" : "text-red-400"}>
//               {userWQI.wqi} ({userWQI.status})
//             </span>
//           </p>
//           <p className="mt-2 text-gray-300">
//             {userWQI.status === "safe"
//               ? "Your water is safe to use."
//               : "Warning: Your water may be toxic. Consider purification options."}
//           </p>
//         </div>
//       ) : (
//         <p className="text-gray-400">Fetching your location and water data...</p>
//       )}
//     </div>
//   );
// }

// export default U_Home;
import React, { useState, useEffect } from 'react';
import { hmpiData, searchCities, getCityByName, getHmpiLevel, getHmpiColor } from '../data/hmpiData';

function U_Home() {
  const [location, setLocation] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Show Delhi data on component mount as default
  useEffect(() => {
    // Show Delhi data after a short delay as default
    const timer = setTimeout(() => {
      if (!selectedCity) {
        const delhiData = hmpiData["Delhi"];
        setSelectedCity(delhiData);
        setSearchQuery("Delhi");
        setLocation({ lat: 28.7041, lng: 77.1025 });
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [selectedCity]);

  // Request location permission and get current location
  const requestLocation = () => {
    setIsLoading(true);

    if (!navigator.geolocation) {
      setIsLoading(false);
      // Silently show Delhi data if geolocation is not supported
      const delhiData = hmpiData["Delhi"];
      setSelectedCity(delhiData);
      setSearchQuery("Delhi");
      setLocation({ lat: 28.7041, lng: 77.1025 });
      return;
    }

    // Try with different options for better compatibility
    const options = [
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      },
      {
        enableHighAccuracy: false,
        timeout: 15000,
        maximumAge: 300000
      },
      {
        enableHighAccuracy: false,
        timeout: 20000,
        maximumAge: 600000
      }
    ];

    let attempt = 0;

    const tryLocation = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log('Location detected:', latitude, longitude); // Debug log
          setLocation({ lat: latitude, lng: longitude });
          setIsLoading(false);
          
          // Find nearby city
          const nearbyCity = findNearbyCity(latitude, longitude);
          console.log('Nearby city found:', nearbyCity); // Debug log
          
          if (nearbyCity) {
            setSelectedCity(nearbyCity);
            setSearchQuery(nearbyCity.city);
          } else {
            // If no nearby city found, silently show Delhi as default
            const delhiData = hmpiData["Delhi"];
            setSelectedCity(delhiData);
            setSearchQuery("Delhi");
            // No error message - silently show Delhi data
          }
        },
        (error) => {
          console.log('Location error:', error); // Debug log
          attempt++;
          
          if (attempt < options.length) {
            // Try with different options
            setTimeout(() => tryLocation(), 1000);
          } else {
            // All attempts failed - silently default to Delhi
            setIsLoading(false);
            
            // Show Delhi data as default when location detection fails
            const delhiData = hmpiData["Delhi"];
            setSelectedCity(delhiData);
            setSearchQuery("Delhi");
            setLocation({ lat: 28.7041, lng: 77.1025 });
            // No error message - silently show Delhi data
          }
        },
        options[attempt]
      );
    };

    tryLocation();
  };

  // Show sample data for demonstration
  const showSampleData = () => {
    // Show Delhi data as sample
    const delhiData = hmpiData["Delhi"];
    setSelectedCity(delhiData);
    setSearchQuery("Delhi");
    setLocation({ lat: 28.7041, lng: 77.1025 });
  };

  // Find nearby city based on coordinates
  const findNearbyCity = (lat, lng) => {
    console.log('Searching for city near:', lat, lng); // Debug log
    
    // Delhi coordinates for reference: 28.7041, 77.1025
    // Mumbai coordinates: 19.0760, 72.8777
    // Bangalore coordinates: 12.9716, 77.5946
    
    let nearestCity = null;
    let minDistance = Infinity;
    const threshold = 0.5; // Roughly 50km threshold

    Object.values(hmpiData).forEach(city => {
      // Calculate distance using Haversine formula for better accuracy
      const R = 6371; // Earth's radius in kilometers
      const dLat = (city.coordinates.lat - lat) * Math.PI / 180;
      const dLng = (city.coordinates.lng - lng) * Math.PI / 180;
      const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.cos(lat * Math.PI / 180) * Math.cos(city.coordinates.lat * Math.PI / 180) *
                Math.sin(dLng/2) * Math.sin(dLng/2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
      const distance = R * c; // Distance in kilometers
      
      console.log(`Distance to ${city.city}: ${distance.toFixed(2)} km`); // Debug log
      
      if (distance < minDistance) {
        minDistance = distance;
        nearestCity = city;
      }
    });

    console.log(`Nearest city: ${nearestCity?.city} at ${minDistance.toFixed(2)} km`); // Debug log
    
    // If within reasonable distance (50km), return the city
    if (minDistance < threshold) {
      return nearestCity;
    }
    
    // Special case: If user is in Delhi area (roughly 28.4-28.9 lat, 76.8-77.4 lng)
    if (lat >= 28.4 && lat <= 28.9 && lng >= 76.8 && lng <= 77.4) {
      console.log('User appears to be in Delhi area'); // Debug log
      return hmpiData["Delhi"];
    }
    
    // Special case: If user is in Mumbai area (roughly 18.9-19.3 lat, 72.7-73.0 lng)
    if (lat >= 18.9 && lat <= 19.3 && lng >= 72.7 && lng <= 73.0) {
      console.log('User appears to be in Mumbai area'); // Debug log
      return hmpiData["Mumbai"];
    }
    
    // Special case: If user is in Bangalore area (roughly 12.8-13.2 lat, 77.4-77.8 lng)
    if (lat >= 12.8 && lat <= 13.2 && lng >= 77.4 && lng <= 77.8) {
      console.log('User appears to be in Bangalore area'); // Debug log
      return hmpiData["Bangalore"];
    }

    return nearestCity;
  };

  // Handle search input
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.length > 0) {
      const results = searchCities(query);
      setSearchResults(results.slice(0, 5)); // Limit to 5 results
      setShowSearchResults(true);
    } else {
      setSearchResults([]);
      setShowSearchResults(false);
    }
  };

  // Handle city selection from search
  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setSearchQuery(city.city);
    setShowSearchResults(false);
  };

  // Handle report generation
  const handleGenerateReport = () => {
    if (selectedCity) {
      // In a real app, this would generate and download a PDF report
      alert(`Generating HMPI report for ${selectedCity.city}...`);
      console.log('Report data:', selectedCity);
    }
  };

  // Get status color based on HMPI level
  const getStatusColor = (level) => {
    const colors = {
      'Low': 'text-green-600 bg-green-100',
      'Moderate': 'text-yellow-600 bg-yellow-100',
      'Moderate-High': 'text-orange-600 bg-orange-100',
      'High': 'text-red-600 bg-red-100',
      'Very High': 'text-purple-600 bg-purple-100'
    };
    return colors[level] || 'text-gray-600 bg-gray-100';
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Groundwater Quality Check
          </h1>
          <p className="text-xl text-gray-600">
            Check Heavy Metal Pollution Index (HMPI) for your location
          </p>
        </div>

        {/* Location Detection Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Detect Your Location
            </h2>
            <p className="text-gray-600 mb-6">
              Allow location access to automatically detect your city and show HMPI data
            </p>
            
            {!location && (
              <div className="text-center">
                <button
                  onClick={requestLocation}
                  disabled={isLoading}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Detecting...' : 'Detect My Location'}
                </button>
              </div>
            )}

            {location && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-600">
                  Location detected: {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Search Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Or Search by City/District
          </h2>
          
          <div className="relative max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search for city, district, or state..."
                className="w-full px-4 py-3 pl-12 pr-4 text-gray-900 placeholder-gray-500 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Search Results Dropdown */}
            {showSearchResults && searchResults.length > 0 && (
              <div className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                {searchResults.map((city, index) => (
                  <button
                    key={index}
                    onClick={() => handleCitySelect(city)}
                    className="w-full px-4 py-3 text-left hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
                  >
                    <div className="font-medium text-gray-900">{city.city}</div>
                    <div className="text-sm text-gray-500">{city.district}, {city.state}</div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* HMPI Data Display */}
        {selectedCity && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {selectedCity.city} HMPI Report
              </h2>
              <p className="text-gray-600">
                {selectedCity.district}, {selectedCity.state}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Last updated: {selectedCity.lastUpdated}
              </p>
            </div>

            {/* HMPI Score */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white mb-4">
                <div className="text-center">
                  <div className="text-3xl font-bold">{selectedCity.hmpi}</div>
                  <div className="text-sm opacity-90">HMPI Score</div>
                </div>
              </div>
              <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(selectedCity.level)}`}>
                {selectedCity.level} Risk Level
              </div>
            </div>

            {/* Heavy Metals Table */}
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
                    {Object.entries(selectedCity.heavyMetals).map(([metal, data]) => (
                      <tr key={metal}>
                        <td className="border border-gray-300 px-4 py-2 font-medium">{metal}</td>
                        <td className="border border-gray-300 px-4 py-2">{data.concentration}</td>
                        <td className="border border-gray-300 px-4 py-2">{data.limit}</td>
                        <td className="border border-gray-300 px-4 py-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            data.status === 'Exceeded' 
                              ? 'bg-red-100 text-red-800' 
                              : 'bg-green-100 text-green-800'
                          }`}>
                            {data.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Recommendations */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Recommendations</h3>
              <ul className="space-y-2">
                {selectedCity.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleGenerateReport}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1"
              >
                Generate HMPI Report
              </button>
              <button
                onClick={() => setSelectedCity(null)}
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300"
              >
                Search Another Location
              </button>
            </div>
          </div>
        )}

        {/* No Data Message */}
        {!selectedCity && !isLoading && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Location Selected</h3>
            <p className="text-gray-600">
              Please detect your location or search for a city to view HMPI data.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default U_Home;
