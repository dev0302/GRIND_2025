import React, { useState, useEffect, useRef } from 'react';
import { hmpiData, searchCities, getCityByName, getHmpiLevel, getHmpiColor } from '../data/hmpiData';
import { searchIndianCities, getIndianCityByName } from '../data/indianCities.js';
import GraphicalAnalysis from '../components/GraphicalAnalysis';

function U_Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Start with loading true
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [locationPermission, setLocationPermission] = useState(null);
  const [hasRequestedLocation, setHasRequestedLocation] = useState(false);
  const searchRef = useRef(null);
  const resultsRef = useRef(null);

  // Handle search input
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.length > 0) {
      // First search in HMPI data (cities with actual data)
      const hmpiResults = searchCities(query);
      
      // Then search in extended Indian cities list
      const indianResults = searchIndianCities(query);
      
      // Combine and deduplicate results
      const combinedResults = [...hmpiResults];
      indianResults.forEach(indianCity => {
        if (!hmpiResults.find(hmpiCity => hmpiCity.city === indianCity.city)) {
          // Add city from extended list with placeholder HMPI data
          combinedResults.push({
            city: indianCity.city,
            state: indianCity.state,
            district: indianCity.district,
            hmpi: 0, // Placeholder - no actual data
            level: "Unknown",
            status: "No Data",
            lastUpdated: "N/A",
            coordinates: { lat: 0, lng: 0 },
            heavyMetals: {},
            recommendations: ["Data not available for this location"],
            isPlaceholder: true
          });
        }
      });
      
      setSearchResults(combinedResults.slice(0, 10)); // Limit to 10 results
      setShowSearchResults(true);
    } else {
      setSearchResults([]);
      setShowSearchResults(false);
    }
  };

  // Handle city selection
  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setSearchQuery(`${city.city}, ${city.state}`);
    setShowSearchResults(false);
    setIsLoading(true);
    
    // Simulate loading delay for better UX
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  // Get user's current location
  const getCurrentLocation = () => {
    console.log('Starting location detection...');
    
    if (!navigator.geolocation) {
      console.log('Geolocation not supported, using fallback location');
      // Silent fallback to Delhi when geolocation is not supported
      const fallbackCity = hmpiData.Delhi;
      if (fallbackCity) {
        setSelectedCity(fallbackCity);
        setSearchQuery(`${fallbackCity.city}, ${fallbackCity.state}`);
        setUserLocation({ lat: fallbackCity.coordinates.lat, lng: fallbackCity.coordinates.lng });
        setLocationPermission('granted');
        setIsLoading(false);
        return;
      }
    }

    setIsLoading(true);
    setLocationPermission('requesting');
    
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log('Location obtained:', position);
        const { latitude, longitude } = position.coords;
        setUserLocation({ lat: latitude, lng: longitude });
        
        console.log('Coordinates:', { latitude, longitude });
        
        // Find nearest city with improved distance calculation
        let nearestCity = Object.values(hmpiData).reduce((nearest, city) => {
          const distance = Math.sqrt(
            Math.pow(city.coordinates.lat - latitude, 2) + 
            Math.pow(city.coordinates.lng - longitude, 2)
          );
          const nearestDistance = nearest ? Math.sqrt(
            Math.pow(nearest.coordinates.lat - latitude, 2) + 
            Math.pow(nearest.coordinates.lng - longitude, 2)
          ) : Infinity;
          
          return distance < nearestDistance ? city : nearest;
        }, null);

        console.log('Nearest city found:', nearestCity);

        // If no city found in HMPI data, use Delhi as fallback
        if (!nearestCity) {
          console.log('No city found in HMPI data, using Delhi as fallback');
          nearestCity = hmpiData.Delhi;
        }

        if (nearestCity) {
          setSelectedCity(nearestCity);
          setSearchQuery(`${nearestCity.city}, ${nearestCity.state}`);
          console.log('City set successfully:', nearestCity.city);
        } else {
          console.log('Still no city found, this should not happen');
        }
        
        setIsLoading(false);
        setLocationPermission('granted');
      },
      (error) => {
        console.error('Geolocation error:', error);
        
        // Silent fallback to Delhi Paschim Vihar when location detection fails
        console.log('Location detection failed, using fallback location: Delhi');
        const fallbackCity = hmpiData.Delhi;
        
        if (fallbackCity) {
          setSelectedCity(fallbackCity);
          setSearchQuery(`${fallbackCity.city}, ${fallbackCity.state}`);
          setUserLocation({ lat: fallbackCity.coordinates.lat, lng: fallbackCity.coordinates.lng });
          console.log('Fallback city set successfully:', fallbackCity.city);
        }
        
        setIsLoading(false);
        setLocationPermission('granted'); // Set as granted to hide error states
      },
      {
        enableHighAccuracy: true,
        timeout: 15000, // Increased timeout
        maximumAge: 600000 // 10 minutes
      }
    );
  };

  // Auto-request location permission on component mount
  useEffect(() => {
    if (!hasRequestedLocation) {
      setHasRequestedLocation(true);
      // Add a small delay to ensure the component is fully mounted
      setTimeout(() => {
        getCurrentLocation();
      }, 500);
    }
  }, [hasRequestedLocation]);

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target) && 
          resultsRef.current && !resultsRef.current.contains(event.target)) {
        setShowSearchResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Get HMPI level styling
  const getHmpiStyling = (hmpi) => {
    const level = getHmpiLevel(hmpi);
    const color = getHmpiColor(hmpi);
    
    const styles = {
      Low: { bg: 'from-green-500 to-emerald-500', text: 'text-green-600', bgLight: 'bg-green-100' },
      Moderate: { bg: 'from-yellow-500 to-orange-500', text: 'text-yellow-600', bgLight: 'bg-yellow-100' },
      'Moderate-High': { bg: 'from-orange-500 to-red-500', text: 'text-orange-600', bgLight: 'bg-orange-100' },
      High: { bg: 'from-red-500 to-red-600', text: 'text-red-600', bgLight: 'bg-red-100' },
      'Very High': { bg: 'from-purple-500 to-purple-600', text: 'text-purple-600', bgLight: 'bg-purple-100' }
    };
    
    return styles[level] || styles.High;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Groundwater Quality
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Checker
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            {isLoading ? 
              "Detecting your location to show local water quality data..." : 
              "Check Heavy Metal Pollution Index (HMPI) for your location. Get instant insights about water quality and safety recommendations."
            }
          </p>
        </div>

        {/* Search Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">
                {isLoading ? "Detecting Your Location..." : "Find Your Location"}
              </h2>
              <p className="text-gray-300">
                {isLoading ? 
                  "Please allow location access to automatically detect your city's water quality" :
                  "Search for any city in India or use your current location"
                }
              </p>
            </div>

            {/* Search Input */}
            <div className="relative mb-6" ref={searchRef}>
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Search for city, district, or state..."
                  className="w-full px-6 py-4 pr-12 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              {/* Search Results Dropdown */}
              {showSearchResults && searchResults.length > 0 && (
                <div ref={resultsRef} className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-lg rounded-xl border border-white/30 shadow-xl z-50 max-h-80 overflow-y-auto">
                  {searchResults.map((city, index) => (
                    <button
                      key={index}
                      onClick={() => handleCitySelect(city)}
                      className="w-full px-6 py-4 text-left hover:bg-blue-500/20 transition-colors border-b border-gray-200/20 last:border-b-0"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-gray-900">{city.city}</div>
                          <div className="text-sm text-gray-600">{city.district}, {city.state}</div>
                        </div>
                        <div className="text-right">
                          {city.isPlaceholder ? (
                            <div className="text-sm font-semibold px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                              No Data
                            </div>
                          ) : (
                            <div className={`text-sm font-semibold px-2 py-1 rounded-full ${
                              getHmpiStyling(city.hmpi).bgLight
                            } ${getHmpiStyling(city.hmpi).text}`}>
                              HMPI: {city.hmpi}
                            </div>
                          )}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Location Detection Button */}
            <div className="text-center">
              <button
                onClick={getCurrentLocation}
                disabled={isLoading}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Detecting Location...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Use My Current Location</span>
                  </div>
                )}
              </button>
              
            </div>
          </div>
        </div>

        {/* Results Section */}
        {selectedCity && !isLoading && !selectedCity.isPlaceholder && (
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              {/* City Header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">
                  {selectedCity.city} HMPI Report
                </h2>
                <p className="text-gray-300 text-lg">
                  {selectedCity.district}, {selectedCity.state}
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  Last updated: {new Date(selectedCity.lastUpdated).toLocaleDateString()}
                </p>
              </div>

              {/* HMPI Score Display */}
              <div className="text-center mb-12">
                <div className={`inline-flex items-center justify-center w-40 h-40 rounded-full bg-gradient-to-br ${getHmpiStyling(selectedCity.hmpi).bg} text-white mb-6 shadow-2xl`}>
                  <div className="text-center">
                    <div className="text-4xl font-bold">{selectedCity.hmpi}</div>
                    <div className="text-sm opacity-90">HMPI Score</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className={`inline-flex items-center px-6 py-3 rounded-full text-lg font-semibold ${getHmpiStyling(selectedCity.hmpi).bgLight} ${getHmpiStyling(selectedCity.hmpi).text}`}>
                    {selectedCity.level} Risk Level
                  </div>
                  <div className="text-gray-300 text-sm">
                    Status: <span className="font-semibold">{selectedCity.status}</span>
                  </div>
              </div>
            </div>

              {/* Heavy Metal Concentrations Table */}
            <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-6">Heavy Metal Concentrations</h3>
              <div className="overflow-x-auto">
                  <table className="w-full bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden">
                  <thead>
                      <tr className="bg-white/20">
                        <th className="px-6 py-4 text-left text-white font-semibold">Metal</th>
                        <th className="px-6 py-4 text-left text-white font-semibold">Concentration (mg/L)</th>
                        <th className="px-6 py-4 text-left text-white font-semibold">Safe Limit (mg/L)</th>
                        <th className="px-6 py-4 text-left text-white font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                      {Object.entries(selectedCity.heavyMetals).map(([metal, data], index) => (
                        <tr key={index} className="border-t border-white/10">
                          <td className="px-6 py-4 font-medium text-white">{metal}</td>
                          <td className="px-6 py-4 text-gray-300">{data.concentration}</td>
                          <td className="px-6 py-4 text-gray-300">{data.limit}</td>
                          <td className="px-6 py-4">
                            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
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
                <h3 className="text-2xl font-bold text-white mb-6">Recommendations</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedCity.recommendations.map((recommendation, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-white/10 rounded-lg">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{recommendation}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1">
                  Generate Detailed Report
                </button>
                <button 
                  onClick={() => {
                    setSelectedCity(null);
                    setSearchQuery('');
                  }}
                  className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  Search Another Location
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Graphical Analysis Section - Show for Paschim Vihar */}
        {selectedCity && selectedCity.city === 'Delhi' && selectedCity.district === 'Paschim Vihar' && !isLoading && (
          <div className="max-w-7xl mx-auto mt-8">
            <GraphicalAnalysis cityData={selectedCity} />
          </div>
        )}

        {/* Loading State */}
        {isLoading && !selectedCity && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20 text-center">
              <div className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {hasRequestedLocation ? "Detecting Your Location..." : "Analyzing Location"}
              </h3>
              <p className="text-gray-300 mb-4">
                {hasRequestedLocation ? 
                  "Please allow location access to automatically detect your city's water quality" :
                  "Please wait while we fetch the latest HMPI data..."
                }
              </p>
              {hasRequestedLocation && (
                <div className="mt-6 p-4 bg-blue-500/20 border border-blue-500/30 rounded-lg">
                  <p className="text-blue-300 text-sm mb-2">
                    <strong>Why do we need your location?</strong>
                  </p>
                  <p className="text-blue-200 text-xs">
                    We use your location to automatically find the nearest city with water quality data and show you relevant HMPI information.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* No Data Available State */}
        {selectedCity && selectedCity.isPlaceholder && !isLoading && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20 text-center">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Data Not Available for {selectedCity.city}
              </h3>
              <p className="text-gray-300 mb-6">
                We don't have HMPI data for {selectedCity.city}, {selectedCity.state} yet. 
                Our database is continuously expanding. Please try searching for a nearby major city.
              </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => {
                    setSelectedCity(null);
                    setSearchQuery('');
                  }}
                  className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Search Another Location
                </button>
                <button 
                  onClick={() => {
                    setSelectedCity(null);
                    setSearchQuery('');
                  }}
                  className="px-6 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                >
                  Clear Search
              </button>
              </div>
            </div>
          </div>
        )}

        {/* No Results State */}
        {!selectedCity && !isLoading && searchQuery && searchResults.length === 0 && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20 text-center">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No Results Found</h3>
              <p className="text-gray-300 mb-6">We couldn't find any cities matching your search. Try searching with a different term.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => setSearchQuery('')}
                  className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Clear Search
                </button>
                <button 
                  onClick={getCurrentLocation}
                  className="px-6 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                >
                  Try Location Detection
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Welcome State - When no search and no location detected */}
        {!selectedCity && !isLoading && !searchQuery && locationPermission === 'denied' && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20 text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Welcome to Groundwater Quality Checker</h3>
              <p className="text-gray-300 mb-6">
                {locationPermission === 'denied' ? 
                  "Location access was denied. You can search for any city in India manually." :
                  "Location detection failed. You can search for any city in India manually."
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={getCurrentLocation}
                  className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Try Location Detection Again
                </button>
                <button 
                  onClick={() => {
                    const searchInput = document.querySelector('input[type="text"]');
                    if (searchInput) searchInput.focus();
                  }}
                  className="px-6 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                >
                  Search for City
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default U_Home;