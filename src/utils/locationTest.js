// Test script to verify location detection functionality
// This can be run in the browser console to test location detection

export const testLocationDetection = () => {
  console.log('=== Testing Location Detection ===');
  
  // Test 1: Check if geolocation is supported
  if (!navigator.geolocation) {
    console.log('❌ Geolocation not supported');
    return;
  }
  console.log('✅ Geolocation supported');
  
  // Test 2: Check current permission status
  if (navigator.permissions) {
    navigator.permissions.query({name: 'geolocation'}).then((result) => {
      console.log('📍 Permission status:', result.state);
      
      if (result.state === 'granted') {
        console.log('✅ Location permission already granted');
        testGetLocation();
      } else if (result.state === 'prompt') {
        console.log('⚠️ Location permission needs to be requested');
        testGetLocation();
      } else {
        console.log('❌ Location permission denied');
      }
    });
  } else {
    console.log('⚠️ Permissions API not supported, testing directly');
    testGetLocation();
  }
};

const testGetLocation = () => {
  console.log('🔍 Testing getCurrentPosition...');
  
  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log('✅ Location obtained successfully!');
      console.log('📍 Coordinates:', {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        accuracy: position.coords.accuracy
      });
      
      // Test city detection
      testCityDetection(position.coords.latitude, position.coords.longitude);
    },
    (error) => {
      console.log('❌ Location error:', error.message);
      console.log('Error code:', error.code);
      
      switch(error.code) {
        case error.PERMISSION_DENIED:
          console.log('🚫 Permission denied by user');
          break;
        case error.POSITION_UNAVAILABLE:
          console.log('📍 Position unavailable');
          break;
        case error.TIMEOUT:
          console.log('⏰ Request timeout');
          break;
        default:
          console.log('❓ Unknown error');
          break;
      }
    },
    {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 300000
    }
  );
};

const testCityDetection = (lat, lng) => {
  console.log('🏙️ Testing city detection...');
  
  // Import HMPI data (this would need to be available in the test environment)
  const hmpiData = {
    "Mumbai": { city: "Mumbai", state: "Maharashtra", coordinates: { lat: 19.0760, lng: 72.8777 } },
    "Delhi": { city: "Delhi", state: "Delhi", coordinates: { lat: 28.7041, lng: 77.1025 } },
    "Bangalore": { city: "Bangalore", state: "Karnataka", coordinates: { lat: 12.9716, lng: 77.5946 } }
  };
  
  const nearestCity = Object.values(hmpiData).reduce((nearest, city) => {
    const distance = Math.sqrt(
      Math.pow(city.coordinates.lat - lat, 2) + 
      Math.pow(city.coordinates.lng - lng, 2)
    );
    const nearestDistance = nearest ? Math.sqrt(
      Math.pow(nearest.coordinates.lat - lat, 2) + 
      Math.pow(nearest.coordinates.lng - lng, 2)
    ) : Infinity;
    
    return distance < nearestDistance ? city : nearest;
  }, null);
  
  if (nearestCity) {
    console.log('✅ Nearest city found:', nearestCity.city, nearestCity.state);
  } else {
    console.log('❌ No nearest city found');
  }
};

// Export for use in browser console
if (typeof window !== 'undefined') {
  window.testLocationDetection = testLocationDetection;
}

export default testLocationDetection;
