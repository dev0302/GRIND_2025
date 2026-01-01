// Demo component to showcase the new U_Home features
// This can be used for testing and demonstration purposes

import React from 'react';
import { searchIndianCities, getIndianCityByName } from '../data/indianCities';
import { hmpiData, searchCities } from '../data/hmpiData';

// Demo function to test search functionality
export const testSearchFunctionality = () => {
  console.log('=== Testing Search Functionality ===');
  
  // Test 1: Search for major cities
  console.log('Search for "Mumbai":', searchCities('Mumbai'));
  console.log('Search for "Delhi":', searchCities('Delhi'));
  
  // Test 2: Search for cities with aliases
  console.log('Search for "Bengaluru":', searchIndianCities('Bengaluru'));
  console.log('Search for "Calcutta":', searchIndianCities('Calcutta'));
  
  // Test 3: Search for partial matches
  console.log('Search for "Chen":', searchIndianCities('Chen'));
  console.log('Search for "Pun":', searchIndianCities('Pun'));
  
  // Test 4: Search for states
  console.log('Search for "Maharashtra":', searchIndianCities('Maharashtra'));
  console.log('Search for "Tamil":', searchIndianCities('Tamil'));
  
  // Test 5: Search for districts
  console.log('Search for "Bangalore Urban":', searchIndianCities('Bangalore Urban'));
  
  console.log('=== Search Tests Complete ===');
};

// Demo function to test city data
export const testCityData = () => {
  console.log('=== Testing City Data ===');
  
  // Test HMPI data
  console.log('Mumbai HMPI Data:', hmpiData.Mumbai);
  console.log('Delhi HMPI Data:', hmpiData.Delhi);
  
  // Test Indian cities data
  console.log('Total Indian Cities:', searchIndianCities('').length);
  console.log('Cities in Maharashtra:', searchIndianCities('Maharashtra').length);
  console.log('Cities in Tamil Nadu:', searchIndianCities('Tamil Nadu').length);
  
  console.log('=== City Data Tests Complete ===');
};

// Export demo functions for testing
export default {
  testSearchFunctionality,
  testCityData
};
