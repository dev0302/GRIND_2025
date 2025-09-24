// Extended list of Indian cities for better search functionality
export const indianCities = [
  // Major Metropolitan Cities
  { city: "Mumbai", state: "Maharashtra", district: "Mumbai", aliases: ["Bombay"] },
  { city: "Delhi", state: "Delhi", district: "New Delhi", aliases: ["New Delhi", "NCR"] },
  { city: "Bangalore", state: "Karnataka", district: "Bangalore Urban", aliases: ["Bengaluru"] },
  { city: "Chennai", state: "Tamil Nadu", district: "Chennai", aliases: ["Madras"] },
  { city: "Kolkata", state: "West Bengal", district: "Kolkata", aliases: ["Calcutta"] },
  { city: "Hyderabad", state: "Telangana", district: "Hyderabad", aliases: [] },
  { city: "Pune", state: "Maharashtra", district: "Pune", aliases: [] },
  { city: "Ahmedabad", state: "Gujarat", district: "Ahmedabad", aliases: [] },
  { city: "Jaipur", state: "Rajasthan", district: "Jaipur", aliases: ["Pink City"] },
  { city: "Lucknow", state: "Uttar Pradesh", district: "Lucknow", aliases: [] },

  // Delhi Areas and Districts
  { city: "Paschim Vihar", state: "Delhi", district: "West Delhi", aliases: ["Paschim Vihar", "West Vihar"] },
  { city: "Punjabi Bagh", state: "Delhi", district: "West Delhi", aliases: ["Punjabi Bagh"] },
  { city: "Rajouri Garden", state: "Delhi", district: "West Delhi", aliases: ["Rajouri Garden"] },
  { city: "Janakpuri", state: "Delhi", district: "West Delhi", aliases: ["Janakpuri"] },
  { city: "Vikaspuri", state: "Delhi", district: "West Delhi", aliases: ["Vikaspuri"] },
  { city: "Uttam Nagar", state: "Delhi", district: "West Delhi", aliases: ["Uttam Nagar"] },
  { city: "Dwarka", state: "Delhi", district: "South West Delhi", aliases: ["Dwarka"] },
  { city: "Rohini", state: "Delhi", district: "North West Delhi", aliases: ["Rohini"] },
  { city: "Pitampura", state: "Delhi", district: "North West Delhi", aliases: ["Pitampura"] },
  { city: "Shalimar Bagh", state: "Delhi", district: "North West Delhi", aliases: ["Shalimar Bagh"] },
  { city: "Azadpur", state: "Delhi", district: "North Delhi", aliases: ["Azadpur"] },
  { city: "Model Town", state: "Delhi", district: "North Delhi", aliases: ["Model Town"] },
  { city: "Civil Lines", state: "Delhi", district: "North Delhi", aliases: ["Civil Lines"] },
  { city: "Kashmere Gate", state: "Delhi", district: "North Delhi", aliases: ["Kashmere Gate"] },
  { city: "Chandni Chowk", state: "Delhi", district: "Central Delhi", aliases: ["Chandni Chowk"] },
  { city: "Connaught Place", state: "Delhi", district: "New Delhi", aliases: ["CP", "Connaught Place"] },
  { city: "Karol Bagh", state: "Delhi", district: "Central Delhi", aliases: ["Karol Bagh"] },
  { city: "Paharganj", state: "Delhi", district: "Central Delhi", aliases: ["Paharganj"] },
  { city: "Lajpat Nagar", state: "Delhi", district: "South Delhi", aliases: ["Lajpat Nagar"] },
  { city: "Greater Kailash", state: "Delhi", district: "South Delhi", aliases: ["GK", "Greater Kailash"] },
  { city: "Saket", state: "Delhi", district: "South Delhi", aliases: ["Saket"] },
  { city: "Malviya Nagar", state: "Delhi", district: "South Delhi", aliases: ["Malviya Nagar"] },
  { city: "Hauz Khas", state: "Delhi", district: "South Delhi", aliases: ["Hauz Khas"] },
  { city: "Green Park", state: "Delhi", district: "South Delhi", aliases: ["Green Park"] },
  { city: "Vasant Kunj", state: "Delhi", district: "South West Delhi", aliases: ["Vasant Kunj"] },
  { city: "Vasant Vihar", state: "Delhi", district: "South Delhi", aliases: ["Vasant Vihar"] },
  { city: "Defence Colony", state: "Delhi", district: "South Delhi", aliases: ["Defence Colony"] },
  { city: "Jangpura", state: "Delhi", district: "South Delhi", aliases: ["Jangpura"] },
  { city: "Nizamuddin", state: "Delhi", district: "South Delhi", aliases: ["Nizamuddin"] },
  { city: "Kalkaji", state: "Delhi", district: "South Delhi", aliases: ["Kalkaji"] },
  { city: "Nehru Place", state: "Delhi", district: "South Delhi", aliases: ["Nehru Place"] },
  { city: "Okhla", state: "Delhi", district: "South Delhi", aliases: ["Okhla"] },
  { city: "Jamia Nagar", state: "Delhi", district: "South Delhi", aliases: ["Jamia Nagar"] },
  { city: "Shaheen Bagh", state: "Delhi", district: "South Delhi", aliases: ["Shaheen Bagh"] },
  { city: "Jasola", state: "Delhi", district: "South Delhi", aliases: ["Jasola"] },
  { city: "Sarita Vihar", state: "Delhi", district: "South Delhi", aliases: ["Sarita Vihar"] },
  { city: "Mayur Vihar", state: "Delhi", district: "East Delhi", aliases: ["Mayur Vihar"] },
  { city: "Preet Vihar", state: "Delhi", district: "East Delhi", aliases: ["Preet Vihar"] },
  { city: "Vivek Vihar", state: "Delhi", district: "East Delhi", aliases: ["Vivek Vihar"] },
  { city: "Shahdara", state: "Delhi", district: "North East Delhi", aliases: ["Shahdara"] },
  { city: "Seelampur", state: "Delhi", district: "North East Delhi", aliases: ["Seelampur"] },
  { city: "Gokulpuri", state: "Delhi", district: "North East Delhi", aliases: ["Gokulpuri"] },
  { city: "Karawal Nagar", state: "Delhi", district: "North East Delhi", aliases: ["Karawal Nagar"] },
  { city: "Yamuna Vihar", state: "Delhi", district: "North East Delhi", aliases: ["Yamuna Vihar"] },
  { city: "Dilshad Garden", state: "Delhi", district: "North East Delhi", aliases: ["Dilshad Garden"] },
  { city: "Ghaziabad", state: "Uttar Pradesh", district: "Ghaziabad", aliases: ["Ghaziabad"] },
  { city: "Noida", state: "Uttar Pradesh", district: "Gautam Buddha Nagar", aliases: ["Noida"] },
  { city: "Gurgaon", state: "Haryana", district: "Gurugram", aliases: ["Gurugram"] },
  { city: "Faridabad", state: "Haryana", district: "Faridabad", aliases: ["Faridabad"] },

  // Tier 2 Cities
  { city: "Surat", state: "Gujarat", district: "Surat", aliases: [] },
  { city: "Kanpur", state: "Uttar Pradesh", district: "Kanpur Nagar", aliases: [] },
  { city: "Nagpur", state: "Maharashtra", district: "Nagpur", aliases: [] },
  { city: "Indore", state: "Madhya Pradesh", district: "Indore", aliases: [] },
  { city: "Thane", state: "Maharashtra", district: "Thane", aliases: [] },
  { city: "Bhopal", state: "Madhya Pradesh", district: "Bhopal", aliases: [] },
  { city: "Visakhapatnam", state: "Andhra Pradesh", district: "Visakhapatnam", aliases: ["Vizag"] },
  { city: "Pimpri-Chinchwad", state: "Maharashtra", district: "Pune", aliases: [] },
  { city: "Patna", state: "Bihar", district: "Patna", aliases: [] },
  { city: "Vadodara", state: "Gujarat", district: "Vadodara", aliases: ["Baroda"] },

  // State Capitals
  { city: "Chandigarh", state: "Chandigarh", district: "Chandigarh", aliases: [] },
  { city: "Raipur", state: "Chhattisgarh", district: "Raipur", aliases: [] },
  { city: "Ranchi", state: "Jharkhand", district: "Ranchi", aliases: [] },
  { city: "Bhubaneswar", state: "Odisha", district: "Khordha", aliases: [] },
  { city: "Guwahati", state: "Assam", district: "Kamrup Metropolitan", aliases: [] },
  { city: "Shimla", state: "Himachal Pradesh", district: "Shimla", aliases: [] },
  { city: "Dehradun", state: "Uttarakhand", district: "Dehradun", aliases: [] },
  { city: "Gangtok", state: "Sikkim", district: "East Sikkim", aliases: [] },
  { city: "Agartala", state: "Tripura", district: "West Tripura", aliases: [] },
  { city: "Imphal", state: "Manipur", district: "Imphal West", aliases: [] },

  // Major Industrial Cities
  { city: "Coimbatore", state: "Tamil Nadu", district: "Coimbatore", aliases: [] },
  { city: "Kochi", state: "Kerala", district: "Ernakulam", aliases: ["Cochin"] },
  { city: "Tiruchirappalli", state: "Tamil Nadu", district: "Tiruchirappalli", aliases: ["Trichy"] },
  { city: "Madurai", state: "Tamil Nadu", district: "Madurai", aliases: [] },
  { city: "Salem", state: "Tamil Nadu", district: "Salem", aliases: [] },
  { city: "Tirunelveli", state: "Tamil Nadu", district: "Tirunelveli", aliases: [] },
  { city: "Erode", state: "Tamil Nadu", district: "Erode", aliases: [] },
  { city: "Vellore", state: "Tamil Nadu", district: "Vellore", aliases: [] },
  { city: "Tiruppur", state: "Tamil Nadu", district: "Tiruppur", aliases: [] },
  { city: "Thoothukudi", state: "Tamil Nadu", district: "Thoothukudi", aliases: ["Tuticorin"] },

  // North Indian Cities
  { city: "Amritsar", state: "Punjab", district: "Amritsar", aliases: [] },
  { city: "Ludhiana", state: "Punjab", district: "Ludhiana", aliases: [] },
  { city: "Jalandhar", state: "Punjab", district: "Jalandhar", aliases: [] },
  { city: "Chandigarh", state: "Punjab", district: "Chandigarh", aliases: [] },
  { city: "Panchkula", state: "Haryana", district: "Panchkula", aliases: [] },
  { city: "Faridabad", state: "Haryana", district: "Faridabad", aliases: [] },
  { city: "Gurgaon", state: "Haryana", district: "Gurugram", aliases: ["Gurugram"] },
  { city: "Sonipat", state: "Haryana", district: "Sonipat", aliases: [] },
  { city: "Panipat", state: "Haryana", district: "Panipat", aliases: [] },
  { city: "Karnal", state: "Haryana", district: "Karnal", aliases: [] },

  // West Indian Cities
  { city: "Nashik", state: "Maharashtra", district: "Nashik", aliases: [] },
  { city: "Aurangabad", state: "Maharashtra", district: "Aurangabad", aliases: [] },
  { city: "Solapur", state: "Maharashtra", district: "Solapur", aliases: [] },
  { city: "Kolhapur", state: "Maharashtra", district: "Kolhapur", aliases: [] },
  { city: "Sangli", state: "Maharashtra", district: "Sangli", aliases: [] },
  { city: "Malegaon", state: "Maharashtra", district: "Nashik", aliases: [] },
  { city: "Jalgaon", state: "Maharashtra", district: "Jalgaon", aliases: [] },
  { city: "Akola", state: "Maharashtra", district: "Akola", aliases: [] },
  { city: "Latur", state: "Maharashtra", district: "Latur", aliases: [] },
  { city: "Dhule", state: "Maharashtra", district: "Dhule", aliases: [] },

  // South Indian Cities
  { city: "Mysore", state: "Karnataka", district: "Mysuru", aliases: ["Mysuru"] },
  { city: "Hubli", state: "Karnataka", district: "Dharwad", aliases: ["Hubballi"] },
  { city: "Mangalore", state: "Karnataka", district: "Dakshina Kannada", aliases: ["Mangaluru"] },
  { city: "Belgaum", state: "Karnataka", district: "Belagavi", aliases: ["Belagavi"] },
  { city: "Gulbarga", state: "Karnataka", district: "Kalaburagi", aliases: ["Kalaburagi"] },
  { city: "Davanagere", state: "Karnataka", district: "Davanagere", aliases: [] },
  { city: "Bellary", state: "Karnataka", district: "Ballari", aliases: ["Ballari"] },
  { city: "Bijapur", state: "Karnataka", district: "Vijayapura", aliases: ["Vijayapura"] },
  { city: "Shimoga", state: "Karnataka", district: "Shivamogga", aliases: ["Shivamogga"] },
  { city: "Tumkur", state: "Karnataka", district: "Tumakuru", aliases: ["Tumakuru"] },

  // East Indian Cities
  { city: "Cuttack", state: "Odisha", district: "Cuttack", aliases: [] },
  { city: "Rourkela", state: "Odisha", district: "Sundargarh", aliases: [] },
  { city: "Berhampur", state: "Odisha", district: "Ganjam", aliases: [] },
  { city: "Sambalpur", state: "Odisha", district: "Sambalpur", aliases: [] },
  { city: "Puri", state: "Odisha", district: "Puri", aliases: [] },
  { city: "Baleshwar", state: "Odisha", district: "Balasore", aliases: ["Balasore"] },
  { city: "Baripada", state: "Odisha", district: "Mayurbhanj", aliases: [] },
  { city: "Bhadrak", state: "Odisha", district: "Bhadrak", aliases: [] },
  { city: "Balangir", state: "Odisha", district: "Balangir", aliases: [] },
  { city: "Jharsuguda", state: "Odisha", district: "Jharsuguda", aliases: [] },

  // Northeast Indian Cities
  { city: "Silchar", state: "Assam", district: "Cachar", aliases: [] },
  { city: "Dibrugarh", state: "Assam", district: "Dibrugarh", aliases: [] },
  { city: "Jorhat", state: "Assam", district: "Jorhat", aliases: [] },
  { city: "Tezpur", state: "Assam", district: "Sonitpur", aliases: [] },
  { city: "Nagaon", state: "Assam", district: "Nagaon", aliases: [] },
  { city: "Tinsukia", state: "Assam", district: "Tinsukia", aliases: [] },
  { city: "Sivasagar", state: "Assam", district: "Sivasagar", aliases: [] },
  { city: "Dhubri", state: "Assam", district: "Dhubri", aliases: [] },
  { city: "Goalpara", state: "Assam", district: "Goalpara", aliases: [] },
  { city: "Barpeta", state: "Assam", district: "Barpeta", aliases: [] },

  // Union Territories
  { city: "Puducherry", state: "Puducherry", district: "Puducherry", aliases: ["Pondicherry"] },
  { city: "Karaikal", state: "Puducherry", district: "Karaikal", aliases: [] },
  { city: "Mahe", state: "Puducherry", district: "Mahe", aliases: [] },
  { city: "Yanam", state: "Puducherry", district: "Yanam", aliases: [] },
  { city: "Daman", state: "Daman and Diu", district: "Daman", aliases: [] },
  { city: "Diu", state: "Daman and Diu", district: "Diu", aliases: [] },
  { city: "Kavaratti", state: "Lakshadweep", district: "Lakshadweep", aliases: [] },
  { city: "Port Blair", state: "Andaman and Nicobar Islands", district: "South Andaman", aliases: [] },

  // Additional Major Cities
  { city: "Rajkot", state: "Gujarat", district: "Rajkot", aliases: [] },
  { city: "Bhavnagar", state: "Gujarat", district: "Bhavnagar", aliases: [] },
  { city: "Jamnagar", state: "Gujarat", district: "Jamnagar", aliases: [] },
  { city: "Junagadh", state: "Gujarat", district: "Junagadh", aliases: [] },
  { city: "Gandhinagar", state: "Gujarat", district: "Gandhinagar", aliases: [] },
  { city: "Nadiad", state: "Gujarat", district: "Kheda", aliases: [] },
  { city: "Anand", state: "Gujarat", district: "Anand", aliases: [] },
  { city: "Bharuch", state: "Gujarat", district: "Bharuch", aliases: [] },
  { city: "Navsari", state: "Gujarat", district: "Navsari", aliases: [] },
  { city: "Valsad", state: "Gujarat", district: "Valsad", aliases: [] }
];

// Function to search cities with fuzzy matching
export const searchIndianCities = (query) => {
  if (!query || query.length < 2) return [];
  
  const searchTerm = query.toLowerCase();
  const results = [];
  
  indianCities.forEach(city => {
    let score = 0;
    
    // Exact city name match
    if (city.city.toLowerCase().includes(searchTerm)) {
      score += 100;
    }
    
    // State name match
    if (city.state.toLowerCase().includes(searchTerm)) {
      score += 50;
    }
    
    // District name match
    if (city.district.toLowerCase().includes(searchTerm)) {
      score += 30;
    }
    
    // Alias match
    city.aliases.forEach(alias => {
      if (alias.toLowerCase().includes(searchTerm)) {
        score += 80;
      }
    });
    
    // Partial matches
    if (city.city.toLowerCase().startsWith(searchTerm)) {
      score += 20;
    }
    
    if (score > 0) {
      results.push({ ...city, score });
    }
  });
  
  // Sort by score and return top 10 results
  return results
    .sort((a, b) => b.score - a.score)
    .slice(0, 10)
    .map(({ score, ...city }) => city);
};

// Function to get city by name (case insensitive)
export const getIndianCityByName = (cityName) => {
  const searchTerm = cityName.toLowerCase();
  
  return indianCities.find(city => 
    city.city.toLowerCase() === searchTerm ||
    city.aliases.some(alias => alias.toLowerCase() === searchTerm)
  ) || null;
};
