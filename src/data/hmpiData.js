// HMPI Data for Indian Cities and Districts
export const hmpiData = {
  // Major Cities
  "Mumbai": {
    city: "Mumbai",
    state: "Maharashtra",
    district: "Mumbai",
    hmpi: 7.2,
    level: "High",
    status: "Critical",
    lastUpdated: "2024-01-15",
    coordinates: { lat: 19.0760, lng: 72.8777 },
    heavyMetals: {
      "Lead (Pb)": { concentration: 0.045, limit: 0.01, status: "Exceeded" },
      "Cadmium (Cd)": { concentration: 0.008, limit: 0.003, status: "Exceeded" },
      "Mercury (Hg)": { concentration: 0.002, limit: 0.001, status: "Exceeded" },
      "Arsenic (As)": { concentration: 0.025, limit: 0.01, status: "Exceeded" },
      "Chromium (Cr)": { concentration: 0.12, limit: 0.05, status: "Exceeded" }
    },
    recommendations: [
      "Immediate water treatment required",
      "Avoid using groundwater for drinking",
      "Install advanced filtration systems",
      "Regular monitoring recommended"
    ]
  },
  "Delhi": {
    city: "Delhi",
    state: "Delhi",
    district: "New Delhi",
    hmpi: 6.8,
    level: "High",
    status: "Critical",
    lastUpdated: "2024-01-12",
    coordinates: { lat: 28.7041, lng: 77.1025 },
    heavyMetals: {
      "Lead (Pb)": { concentration: 0.038, limit: 0.01, status: "Exceeded" },
      "Cadmium (Cd)": { concentration: 0.006, limit: 0.003, status: "Exceeded" },
      "Mercury (Hg)": { concentration: 0.0015, limit: 0.001, status: "Exceeded" },
      "Arsenic (As)": { concentration: 0.018, limit: 0.01, status: "Exceeded" },
      "Chromium (Cr)": { concentration: 0.095, limit: 0.05, status: "Exceeded" }
    },
    recommendations: [
      "Critical water quality issues detected",
      "Use only treated water for consumption",
      "Install RO systems immediately",
      "Contact local authorities for water testing"
    ]
  },
  "Bangalore": {
    city: "Bangalore",
    state: "Karnataka",
    district: "Bangalore Urban",
    hmpi: 4.2,
    level: "Moderate",
    status: "Caution",
    lastUpdated: "2024-01-10",
    coordinates: { lat: 12.9716, lng: 77.5946 },
    heavyMetals: {
      "Lead (Pb)": { concentration: 0.015, limit: 0.01, status: "Exceeded" },
      "Cadmium (Cd)": { concentration: 0.002, limit: 0.003, status: "Safe" },
      "Mercury (Hg)": { concentration: 0.0008, limit: 0.001, status: "Safe" },
      "Arsenic (As)": { concentration: 0.008, limit: 0.01, status: "Safe" },
      "Chromium (Cr)": { concentration: 0.035, limit: 0.05, status: "Safe" }
    },
    recommendations: [
      "Moderate contamination detected",
      "Regular water testing recommended",
      "Consider basic filtration systems",
      "Monitor lead levels closely"
    ]
  },
  "Chennai": {
    city: "Chennai",
    state: "Tamil Nadu",
    district: "Chennai",
    hmpi: 5.1,
    level: "Moderate-High",
    status: "Caution",
    lastUpdated: "2024-01-08",
    coordinates: { lat: 13.0827, lng: 80.2707 },
    heavyMetals: {
      "Lead (Pb)": { concentration: 0.022, limit: 0.01, status: "Exceeded" },
      "Cadmium (Cd)": { concentration: 0.004, limit: 0.003, status: "Exceeded" },
      "Mercury (Hg)": { concentration: 0.0012, limit: 0.001, status: "Exceeded" },
      "Arsenic (As)": { concentration: 0.012, limit: 0.01, status: "Exceeded" },
      "Chromium (Cr)": { concentration: 0.042, limit: 0.05, status: "Safe" }
    },
    recommendations: [
      "Elevated heavy metal levels",
      "Install water treatment systems",
      "Regular monitoring required",
      "Avoid using untreated groundwater"
    ]
  },
  "Kolkata": {
    city: "Kolkata",
    state: "West Bengal",
    district: "Kolkata",
    hmpi: 6.3,
    level: "High",
    status: "Critical",
    lastUpdated: "2024-01-14",
    coordinates: { lat: 22.5726, lng: 88.3639 },
    heavyMetals: {
      "Lead (Pb)": { concentration: 0.032, limit: 0.01, status: "Exceeded" },
      "Cadmium (Cd)": { concentration: 0.005, limit: 0.003, status: "Exceeded" },
      "Mercury (Hg)": { concentration: 0.0018, limit: 0.001, status: "Exceeded" },
      "Arsenic (As)": { concentration: 0.028, limit: 0.01, status: "Exceeded" },
      "Chromium (Cr)": { concentration: 0.078, limit: 0.05, status: "Exceeded" }
    },
    recommendations: [
      "High contamination levels detected",
      "Immediate water treatment necessary",
      "Use only certified filtered water",
      "Contact health authorities"
    ]
  },
  "Hyderabad": {
    city: "Hyderabad",
    state: "Telangana",
    district: "Hyderabad",
    hmpi: 3.8,
    level: "Moderate",
    status: "Caution",
    lastUpdated: "2024-01-11",
    coordinates: { lat: 17.3850, lng: 78.4867 },
    heavyMetals: {
      "Lead (Pb)": { concentration: 0.012, limit: 0.01, status: "Exceeded" },
      "Cadmium (Cd)": { concentration: 0.002, limit: 0.003, status: "Safe" },
      "Mercury (Hg)": { concentration: 0.0006, limit: 0.001, status: "Safe" },
      "Arsenic (As)": { concentration: 0.006, limit: 0.01, status: "Safe" },
      "Chromium (Cr)": { concentration: 0.028, limit: 0.05, status: "Safe" }
    },
    recommendations: [
      "Moderate contamination present",
      "Basic filtration recommended",
      "Regular water quality checks",
      "Monitor lead concentration"
    ]
  },
  "Pune": {
    city: "Pune",
    state: "Maharashtra",
    district: "Pune",
    hmpi: 4.5,
    level: "Moderate",
    status: "Caution",
    lastUpdated: "2024-01-09",
    coordinates: { lat: 18.5204, lng: 73.8567 },
    heavyMetals: {
      "Lead (Pb)": { concentration: 0.018, limit: 0.01, status: "Exceeded" },
      "Cadmium (Cd)": { concentration: 0.003, limit: 0.003, status: "Safe" },
      "Mercury (Hg)": { concentration: 0.0009, limit: 0.001, status: "Safe" },
      "Arsenic (As)": { concentration: 0.009, limit: 0.01, status: "Safe" },
      "Chromium (Cr)": { concentration: 0.038, limit: 0.05, status: "Safe" }
    },
    recommendations: [
      "Moderate heavy metal levels",
      "Install basic water filters",
      "Regular testing recommended",
      "Monitor lead and arsenic levels"
    ]
  },
  "Ahmedabad": {
    city: "Ahmedabad",
    state: "Gujarat",
    district: "Ahmedabad",
    hmpi: 5.8,
    level: "Moderate-High",
    status: "Caution",
    lastUpdated: "2024-01-13",
    coordinates: { lat: 23.0225, lng: 72.5714 },
    heavyMetals: {
      "Lead (Pb)": { concentration: 0.025, limit: 0.01, status: "Exceeded" },
      "Cadmium (Cd)": { concentration: 0.004, limit: 0.003, status: "Exceeded" },
      "Mercury (Hg)": { concentration: 0.0011, limit: 0.001, status: "Exceeded" },
      "Arsenic (As)": { concentration: 0.014, limit: 0.01, status: "Exceeded" },
      "Chromium (Cr)": { concentration: 0.045, limit: 0.05, status: "Safe" }
    },
    recommendations: [
      "Elevated contamination levels",
      "Water treatment systems needed",
      "Regular monitoring required",
      "Avoid untreated groundwater use"
    ]
  },
  "Jaipur": {
    city: "Jaipur",
    state: "Rajasthan",
    district: "Jaipur",
    hmpi: 4.8,
    level: "Moderate",
    status: "Caution",
    lastUpdated: "2024-01-07",
    coordinates: { lat: 26.9124, lng: 75.7873 },
    heavyMetals: {
      "Lead (Pb)": { concentration: 0.020, limit: 0.01, status: "Exceeded" },
      "Cadmium (Cd)": { concentration: 0.003, limit: 0.003, status: "Safe" },
      "Mercury (Hg)": { concentration: 0.0008, limit: 0.001, status: "Safe" },
      "Arsenic (As)": { concentration: 0.011, limit: 0.01, status: "Exceeded" },
      "Chromium (Cr)": { concentration: 0.040, limit: 0.05, status: "Safe" }
    },
    recommendations: [
      "Moderate contamination detected",
      "Install water filtration systems",
      "Regular quality monitoring",
      "Monitor lead and arsenic levels"
    ]
  },
  "Lucknow": {
    city: "Lucknow",
    state: "Uttar Pradesh",
    district: "Lucknow",
    hmpi: 5.5,
    level: "Moderate-High",
    status: "Caution",
    lastUpdated: "2024-01-06",
    coordinates: { lat: 26.8467, lng: 80.9462 },
    heavyMetals: {
      "Lead (Pb)": { concentration: 0.023, limit: 0.01, status: "Exceeded" },
      "Cadmium (Cd)": { concentration: 0.004, limit: 0.003, status: "Exceeded" },
      "Mercury (Hg)": { concentration: 0.0010, limit: 0.001, status: "Safe" },
      "Arsenic (As)": { concentration: 0.013, limit: 0.01, status: "Exceeded" },
      "Chromium (Cr)": { concentration: 0.042, limit: 0.05, status: "Safe" }
    },
    recommendations: [
      "Elevated heavy metal levels",
      "Water treatment recommended",
      "Regular monitoring needed",
      "Avoid untreated water consumption"
    ]
  }
};

// HMPI Level Classification
export const hmpiLevels = {
  "Low": { min: 0, max: 2.0, color: "green", description: "Safe for consumption" },
  "Moderate": { min: 2.1, max: 4.0, color: "yellow", description: "Caution required" },
  "Moderate-High": { min: 4.1, max: 6.0, color: "orange", description: "Treatment recommended" },
  "High": { min: 6.1, max: 8.0, color: "red", description: "Critical - immediate action needed" },
  "Very High": { min: 8.1, max: 10.0, color: "purple", description: "Extremely dangerous" }
};

// Get HMPI level based on value
export const getHmpiLevel = (hmpiValue) => {
  for (const [level, range] of Object.entries(hmpiLevels)) {
    if (hmpiValue >= range.min && hmpiValue <= range.max) {
      return level;
    }
  }
  return "Very High";
};

// Get HMPI level color
export const getHmpiColor = (hmpiValue) => {
  const level = getHmpiLevel(hmpiValue);
  return hmpiLevels[level].color;
};

// Search cities by name (case insensitive)
export const searchCities = (query) => {
  if (!query) return [];
  
  const searchTerm = query.toLowerCase();
  return Object.values(hmpiData).filter(city => 
    city.city.toLowerCase().includes(searchTerm) ||
    city.district.toLowerCase().includes(searchTerm) ||
    city.state.toLowerCase().includes(searchTerm)
  );
};

// Get city by exact name match
export const getCityByName = (cityName) => {
  return hmpiData[cityName] || null;
};

// Get nearby cities based on coordinates (simplified)
export const getNearbyCities = (lat, lng, radius = 50) => {
  // This is a simplified version - in a real app, you'd use proper geospatial calculations
  return Object.values(hmpiData).filter(city => {
    const distance = Math.sqrt(
      Math.pow(city.coordinates.lat - lat, 2) + 
      Math.pow(city.coordinates.lng - lng, 2)
    );
    return distance < (radius / 111); // Rough conversion from km to degrees
  });
};
