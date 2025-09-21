import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.heat';
import { heatmapData } from '../data/heatmapData';

// Fix for default markers in react-leaflet
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// HeatMapLayer component
function HeatMapLayer({ data }) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    // Convert data to heat map format [lat, lng, intensity]
    const heatData = data.map(point => [
      point.latitude,
      point.longitude,
      point.hmpi / 100 // Normalize HMPI to 0-1 range for heat intensity
    ]);

    // Create heat map layer
    const heatLayer = L.heatLayer(heatData, {
      radius: 25,
      blur: 15,
      maxZoom: 17,
      max: 1.0,
      gradient: {
        0.0: 'blue',    // Safe (low HMPI)
        0.25: 'green',  // Good
        0.5: 'yellow',  // Moderate
        0.75: 'orange', // Polluted
        1.0: 'red'      // Critical (high HMPI)
      }
    });

    // Add heat map to map
    heatLayer.addTo(map);

    // Cleanup function
    return () => {
      map.removeLayer(heatLayer);
    };
  }, [map, data]);

  return null;
}

// Custom marker component with HMPI-based colors
function HMPIMarker({ location }) {
  const getMarkerColor = (hmpi) => {
    if (hmpi < 25) return '#10b981'; // Green - Safe
    if (hmpi < 50) return '#f59e0b'; // Orange - Moderate
    if (hmpi < 75) return '#ef4444'; // Red - Polluted
    return '#dc2626'; // Dark Red - Critical
  };

  const customIcon = L.divIcon({
    className: 'custom-marker',
    html: `
      <div style="
        background-color: ${getMarkerColor(location.hmpi)};
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 2px solid white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 10px;
        font-weight: bold;
        color: white;
        box-shadow: 0 2px 4px rgba(0,0,0,0.3);
      ">
        ${location.hmpi.toFixed(0)}
      </div>
    `,
    iconSize: [20, 20],
    iconAnchor: [10, 10]
  });

  return (
    <Marker position={[location.latitude, location.longitude]} icon={customIcon}>
      <Popup>
        <div className="p-2">
          <h3 className="font-bold text-lg mb-2">{location.location}</h3>
          <div className="space-y-1 text-sm">
            <p><strong>HMPI:</strong> <span className={`font-semibold ${
              location.quality === 'Safe' ? 'text-green-600' :
              location.quality === 'Moderate' ? 'text-orange-600' :
              location.quality === 'Polluted' ? 'text-red-600' :
              'text-red-800'
            }`}>{location.hmpi.toFixed(1)}</span></p>
            <p><strong>Quality:</strong> {location.quality}</p>
            <p><strong>Samples:</strong> {location.samples}</p>
            <p><strong>Last Updated:</strong> {location.lastUpdated}</p>
            <p><strong>Coordinates:</strong> {location.latitude.toFixed(4)}, {location.longitude.toFixed(4)}</p>
          </div>
          <div className="mt-3 pt-2 border-t">
            <h4 className="font-semibold text-sm mb-1">Key Metals:</h4>
            <div className="grid grid-cols-2 gap-1 text-xs">
              <span>Pb: {location.metals.Pb} mg/L</span>
              <span>As: {location.metals.As} mg/L</span>
              <span>Cd: {location.metals.Cd} mg/L</span>
              <span>Cr: {location.metals.Cr} mg/L</span>
            </div>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

export default function HeatMap() {
  const [showHeatMap, setShowHeatMap] = useState(true);
  const [showMarkers, setShowMarkers] = useState(true);
  const [selectedLocation, setSelectedLocation] = useState(null);

  // Calculate statistics
  const totalSamples = heatmapData.reduce((sum, loc) => sum + loc.samples, 0);
  const avgHMPI = heatmapData.reduce((sum, loc) => sum + loc.hmpi, 0) / heatmapData.length;
  const safeLocations = heatmapData.filter(loc => loc.quality === 'Safe').length;
  const moderateLocations = heatmapData.filter(loc => loc.quality === 'Moderate').length;
  const pollutedLocations = heatmapData.filter(loc => loc.quality === 'Polluted').length;
  const criticalLocations = heatmapData.filter(loc => loc.quality === 'Critical').length;

  return (
    <div className="min-h-screen bg-gray-800 text-white pt-16">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-teal-400 mb-4">
            HMPI Heat Map
          </h1>
          <p className="text-gray-300 text-lg">
            Interactive heat map visualization of Heavy Metal Pollution Index across Paschim Vihar area using OpenStreetMap
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold text-blue-200 mb-2">Total Locations</h3>
            <p className="text-3xl font-bold text-white">{heatmapData.length}</p>
          </div>
          <div className="bg-gradient-to-r from-green-900 to-green-800 p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold text-green-200 mb-2">Total Samples</h3>
            <p className="text-3xl font-bold text-white">{totalSamples}</p>
          </div>
          <div className="bg-gradient-to-r from-purple-900 to-purple-800 p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold text-purple-200 mb-2">Average HMPI</h3>
            <p className="text-3xl font-bold text-white">{avgHMPI.toFixed(1)}</p>
          </div>
          <div className="bg-gradient-to-r from-orange-900 to-orange-800 p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold text-orange-200 mb-2">Moderate Areas</h3>
            <p className="text-3xl font-bold text-white">{moderateLocations}</p>
          </div>
          <div className="bg-gradient-to-r from-red-900 to-red-800 p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold text-red-200 mb-2">Polluted Areas</h3>
            <p className="text-3xl font-bold text-white">{pollutedLocations + criticalLocations}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Map Container */}
          <div className="lg:col-span-3">
            <div className="bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-700">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold text-indigo-400">Interactive Heat Map</h2>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setShowHeatMap(!showHeatMap)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      showHeatMap 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-600 text-gray-300 hover:bg-gray-500'
                    }`}
                  >
                    {showHeatMap ? 'Hide Heat Map' : 'Show Heat Map'}
                  </button>
                  <button
                    onClick={() => setShowMarkers(!showMarkers)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      showMarkers 
                        ? 'bg-green-600 text-white' 
                        : 'bg-gray-600 text-gray-300 hover:bg-gray-500'
                    }`}
                  >
                    {showMarkers ? 'Hide Markers' : 'Show Markers'}
                  </button>
                </div>
              </div>
              
              <div className="h-96 rounded-lg overflow-hidden border border-gray-600">
                <MapContainer
                  center={[28.6139, 77.2090]} // Paschim Vihar center
                  zoom={13}
                  style={{ height: '100%', width: '100%' }}
                  className="z-0"
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  
                  {/* Heat Map Layer */}
                  {showHeatMap && <HeatMapLayer data={heatmapData} />}
                  
                  {/* Individual Markers */}
                  {showMarkers && heatmapData.map((location) => (
                    <HMPIMarker key={location.id} location={location} />
                  ))}
                </MapContainer>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Heat Map Legend */}
            <div className="bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Heat Map Legend</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-blue-500 rounded"></div>
                  <span className="text-sm">Safe (HMPI &lt; 25)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-green-500 rounded"></div>
                  <span className="text-sm">Good (25-40)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                  <span className="text-sm">Moderate (40-60)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-orange-500 rounded"></div>
                  <span className="text-sm">Polluted (60-80)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-red-500 rounded"></div>
                  <span className="text-sm">Critical (&gt;80)</span>
                </div>
              </div>
            </div>

            {/* Map Controls */}
            <div className="bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Map Controls</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Heat Map Overlay</span>
                  <button
                    onClick={() => setShowHeatMap(!showHeatMap)}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      showHeatMap ? 'bg-blue-600' : 'bg-gray-600'
                    }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                      showHeatMap ? 'translate-x-6' : 'translate-x-0.5'
                    }`}></div>
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Individual Markers</span>
                  <button
                    onClick={() => setShowMarkers(!showMarkers)}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      showMarkers ? 'bg-green-600' : 'bg-gray-600'
                    }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                      showMarkers ? 'translate-x-6' : 'translate-x-0.5'
                    }`}></div>
                  </button>
                </div>
              </div>
            </div>

            {/* Quality Distribution */}
            <div className="bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Quality Distribution</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-green-400">Safe</span>
                  <span className="text-white">{safeLocations}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-orange-400">Moderate</span>
                  <span className="text-white">{moderateLocations}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-red-400">Polluted</span>
                  <span className="text-white">{pollutedLocations}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-red-600">Critical</span>
                  <span className="text-white">{criticalLocations}</span>
                </div>
              </div>
            </div>

            {/* Map Instructions */}
            <div className="bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Instructions</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <p>• Click markers to view detailed information</p>
                <p>• Use mouse wheel to zoom in/out</p>
                <p>• Drag to pan around the map</p>
                <p>• Toggle heat map and markers on/off</p>
                <p>• Heat intensity represents HMPI values</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}