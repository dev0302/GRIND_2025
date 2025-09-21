// HMPI Calculation Utilities

// BIS (Bureau of Indian Standards) limits for heavy metals in mg/L
// Based on IS 10500:2012 - Drinking Water Specifications
export const STANDARD_LIMITS = {
  Pb: 0.01,  // Lead - BIS permissible limit
  As: 0.01,  // Arsenic - BIS permissible limit
  Cd: 0.003, // Cadmium - BIS permissible limit
  Cr: 0.05,  // Chromium - BIS permissible limit
  Ni: 0.02,  // Nickel - BIS permissible limit
  Hg: 0.001, // Mercury - BIS permissible limit
  Cu: 0.05,  // Copper - BIS permissible limit
  Zn: 3.0,   // Zinc - BIS permissible limit
  Fe: 0.3,   // Iron - BIS permissible limit
  Mn: 0.1    // Manganese - BIS permissible limit
};

// BIS Quality Categories based on concentration ranges
export const BIS_QUALITY_CATEGORIES = {
  Pb: {
    excellent: { min: 0, max: 0.005, description: "Excellent - Well below BIS limit (0-0.005 mg/L)" },
    good: { min: 0.005, max: 0.01, description: "Good - Within BIS permissible limit (0.005-0.01 mg/L)" },
    acceptable: { min: 0.01, max: 0.02, description: "Acceptable - Slightly above BIS limit (0.01-0.02 mg/L)" },
    poor: { min: 0.02, max: 0.05, description: "Poor - Significantly above BIS limit (0.02-0.05 mg/L)" },
    critical: { min: 0.05, max: Infinity, description: "Critical - Dangerously high levels (>0.05 mg/L)" }
  },
  As: {
    excellent: { min: 0, max: 0.005, description: "Excellent - Well below BIS limit (0-0.005 mg/L)" },
    good: { min: 0.005, max: 0.01, description: "Good - Within BIS permissible limit (0.005-0.01 mg/L)" },
    acceptable: { min: 0.01, max: 0.02, description: "Acceptable - Slightly above BIS limit (0.01-0.02 mg/L)" },
    poor: { min: 0.02, max: 0.05, description: "Poor - Significantly above BIS limit (0.02-0.05 mg/L)" },
    critical: { min: 0.05, max: Infinity, description: "Critical - Dangerously high levels (>0.05 mg/L)" }
  },
  Cd: {
    excellent: { min: 0, max: 0.0015, description: "Excellent - Well below BIS limit (0-0.0015 mg/L)" },
    good: { min: 0.0015, max: 0.003, description: "Good - Within BIS permissible limit (0.0015-0.003 mg/L)" },
    acceptable: { min: 0.003, max: 0.006, description: "Acceptable - Slightly above BIS limit (0.003-0.006 mg/L)" },
    poor: { min: 0.006, max: 0.015, description: "Poor - Significantly above BIS limit (0.006-0.015 mg/L)" },
    critical: { min: 0.015, max: Infinity, description: "Critical - Dangerously high levels (>0.015 mg/L)" }
  },
  Cr: {
    excellent: { min: 0, max: 0.025, description: "Excellent - Well below BIS limit (0-0.025 mg/L)" },
    good: { min: 0.025, max: 0.05, description: "Good - Within BIS permissible limit (0.025-0.05 mg/L)" },
    acceptable: { min: 0.05, max: 0.1, description: "Acceptable - Slightly above BIS limit (0.05-0.1 mg/L)" },
    poor: { min: 0.1, max: 0.25, description: "Poor - Significantly above BIS limit (0.1-0.25 mg/L)" },
    critical: { min: 0.25, max: Infinity, description: "Critical - Dangerously high levels (>0.25 mg/L)" }
  },
  Ni: {
    excellent: { min: 0, max: 0.01, description: "Excellent - Well below BIS limit (0-0.01 mg/L)" },
    good: { min: 0.01, max: 0.02, description: "Good - Within BIS permissible limit (0.01-0.02 mg/L)" },
    acceptable: { min: 0.02, max: 0.04, description: "Acceptable - Slightly above BIS limit (0.02-0.04 mg/L)" },
    poor: { min: 0.04, max: 0.1, description: "Poor - Significantly above BIS limit (0.04-0.1 mg/L)" },
    critical: { min: 0.1, max: Infinity, description: "Critical - Dangerously high levels (>0.1 mg/L)" }
  },
  Hg: {
    excellent: { min: 0, max: 0.0005, description: "Excellent - Well below BIS limit (0-0.0005 mg/L)" },
    good: { min: 0.0005, max: 0.001, description: "Good - Within BIS permissible limit (0.0005-0.001 mg/L)" },
    acceptable: { min: 0.001, max: 0.002, description: "Acceptable - Slightly above BIS limit (0.001-0.002 mg/L)" },
    poor: { min: 0.002, max: 0.005, description: "Poor - Significantly above BIS limit (0.002-0.005 mg/L)" },
    critical: { min: 0.005, max: Infinity, description: "Critical - Dangerously high levels (>0.005 mg/L)" }
  },
  Cu: {
    excellent: { min: 0, max: 0.025, description: "Excellent - Well below BIS limit (0-0.025 mg/L)" },
    good: { min: 0.025, max: 0.05, description: "Good - Within BIS permissible limit (0.025-0.05 mg/L)" },
    acceptable: { min: 0.05, max: 0.1, description: "Acceptable - Slightly above BIS limit (0.05-0.1 mg/L)" },
    poor: { min: 0.1, max: 0.25, description: "Poor - Significantly above BIS limit (0.1-0.25 mg/L)" },
    critical: { min: 0.25, max: Infinity, description: "Critical - Dangerously high levels (>0.25 mg/L)" }
  },
  Zn: {
    excellent: { min: 0, max: 1.5, description: "Excellent - Well below BIS limit (0-1.5 mg/L)" },
    good: { min: 1.5, max: 3.0, description: "Good - Within BIS permissible limit (1.5-3.0 mg/L)" },
    acceptable: { min: 3.0, max: 6.0, description: "Acceptable - Slightly above BIS limit (3.0-6.0 mg/L)" },
    poor: { min: 6.0, max: 15.0, description: "Poor - Significantly above BIS limit (6.0-15.0 mg/L)" },
    critical: { min: 15.0, max: Infinity, description: "Critical - Dangerously high levels (>15.0 mg/L)" }
  },
  Fe: {
    excellent: { min: 0, max: 0.15, description: "Excellent - Well below BIS limit (0-0.15 mg/L)" },
    good: { min: 0.15, max: 0.3, description: "Good - Within BIS permissible limit (0.15-0.3 mg/L)" },
    acceptable: { min: 0.3, max: 0.6, description: "Acceptable - Slightly above BIS limit (0.3-0.6 mg/L)" },
    poor: { min: 0.6, max: 1.5, description: "Poor - Significantly above BIS limit (0.6-1.5 mg/L)" },
    critical: { min: 1.5, max: Infinity, description: "Critical - Dangerously high levels (>1.5 mg/L)" }
  },
  Mn: {
    excellent: { min: 0, max: 0.05, description: "Excellent - Well below BIS limit (0-0.05 mg/L)" },
    good: { min: 0.05, max: 0.1, description: "Good - Within BIS permissible limit (0.05-0.1 mg/L)" },
    acceptable: { min: 0.1, max: 0.2, description: "Acceptable - Slightly above BIS limit (0.1-0.2 mg/L)" },
    poor: { min: 0.2, max: 0.5, description: "Poor - Significantly above BIS limit (0.2-0.5 mg/L)" },
    critical: { min: 0.5, max: Infinity, description: "Critical - Dangerously high levels (>0.5 mg/L)" }
  }
};

// Unit weights for each metal
export const UNIT_WEIGHTS = {
  Pb: 100,   // Lead - High toxicity
  As: 100,   // Arsenic - High toxicity
  Cd: 100,   // Cadmium - High toxicity
  Cr: 20,    // Chromium - Medium toxicity
  Ni: 20,    // Nickel - Medium toxicity
  Hg: 100,   // Mercury - High toxicity
  Cu: 5,     // Copper - Low toxicity
  Zn: 5,     // Zinc - Low toxicity
  Fe: 5,     // Iron - Low toxicity
  Mn: 5      // Manganese - Low toxicity
};

// Calculate sub-index (Q_i) for a metal
export const calculateSubIndex = (concentration, standardLimit) => {
  if (!concentration || concentration === 0) return 0;
  return (concentration / standardLimit) * 100;
};

// Get BIS quality category for a specific metal concentration
export const getBISQualityCategory = (metal, concentration) => {
  const categories = BIS_QUALITY_CATEGORIES[metal];
  if (!categories) return null;
  
  for (const [category, range] of Object.entries(categories)) {
    if (concentration >= range.min && concentration < range.max) {
      return {
        category,
        description: range.description,
        range: `${range.min}-${range.max === Infinity ? '∞' : range.max} mg/L`
      };
    }
  }
  return null;
};

// Calculate HMPI for a single sample
export const calculateHMPI = (sampleData) => {
  const metals = ['Pb', 'As', 'Cd', 'Cr', 'Ni', 'Hg', 'Cu', 'Zn', 'Fe', 'Mn'];
  let totalWeightedSubIndex = 0;
  let totalWeight = 0;
  
  const metalCalculations = {};
  
  metals.forEach(metal => {
    const concentration = parseFloat(sampleData[metal]) || 0;
    const standardLimit = STANDARD_LIMITS[metal];
    const unitWeight = UNIT_WEIGHTS[metal];
    
    const subIndex = calculateSubIndex(concentration, standardLimit);
    const weightedSubIndex = subIndex * unitWeight;
    
    const bisQuality = getBISQualityCategory(metal, concentration);
    
    metalCalculations[metal] = {
      concentration,
      standardLimit,
      subIndex: Math.round(subIndex * 100) / 100,
      unitWeight,
      weightedSubIndex: Math.round(weightedSubIndex * 100) / 100,
      bisQuality: bisQuality || { category: 'unknown', description: 'Unknown category', range: 'N/A' }
    };
    
    totalWeightedSubIndex += weightedSubIndex;
    totalWeight += unitWeight;
  });
  
  const hmpi = totalWeight / totalWeightedSubIndex ? totalWeightedSubIndex / totalWeight : 0;
  
  return {
    hmpi: Math.round(hmpi * 100) / 100,
    metalCalculations,
    totalWeightedSubIndex: Math.round(totalWeightedSubIndex * 100) / 100,
    totalWeight
  };
};

// Determine water quality category based on HMPI
export const getWaterQualityCategory = (hmpi) => {
  if (hmpi < 25) return { category: 'Low', status: 'Safe', color: 'green' };
  if (hmpi < 50) return { category: 'Medium', status: 'Moderate', color: 'yellow' };
  if (hmpi < 75) return { category: 'High', status: 'Polluted', color: 'orange' };
  return { category: 'Very High', status: 'Critical', color: 'red' };
};

// Get recommendations based on HMPI and metal concentrations
export const getRecommendations = (hmpi, metalCalculations) => {
  const recommendations = [];
  const quality = getWaterQualityCategory(hmpi);
  
  // General recommendations based on HMPI level
  if (hmpi > 75) {
    recommendations.push("Immediate action required - water is critically polluted");
    recommendations.push("Install advanced water treatment systems");
    recommendations.push("Notify local health authorities immediately");
  } else if (hmpi > 50) {
    recommendations.push("Water quality is concerning - treatment recommended");
    recommendations.push("Install water filtration systems");
    recommendations.push("Regular monitoring required");
  } else if (hmpi > 25) {
    recommendations.push("Water quality is moderate - preventive measures advised");
    recommendations.push("Consider basic water treatment");
    recommendations.push("Monitor water quality monthly");
  } else {
    recommendations.push("Water quality is good - maintain current practices");
    recommendations.push("Continue regular monitoring");
  }
  
  // Specific recommendations based on high metal concentrations
  Object.entries(metalCalculations).forEach(([metal, data]) => {
    if (data.subIndex > 100) {
      recommendations.push(`High ${metal} levels detected - specific treatment for ${metal} required`);
    }
  });
  
  return recommendations;
};

// Calculate trend information (if historical data available)
export const calculateTrend = (currentHMPI, previousHMPI) => {
  if (!previousHMPI) return { trend: 'No previous data', change: 0, direction: 'stable' };
  
  const change = currentHMPI - previousHMPI;
  const percentChange = Math.round((change / previousHMPI) * 100);
  
  let direction = 'stable';
  if (change > 0.1) direction = 'increasing';
  else if (change < -0.1) direction = 'decreasing';
  
  return {
    trend: `${change > 0 ? '+' : ''}${change.toFixed(2)} (${percentChange > 0 ? '+' : ''}${percentChange}%)`,
    change: Math.round(change * 100) / 100,
    direction,
    percentChange
  };
};

// Calculate trend for a location with multiple samples over time
export const calculateLocationTrend = (samples) => {
  if (samples.length < 2) return null;
  
  // Sort samples by date
  const sortedSamples = samples.sort((a, b) => new Date(a.DateOfCollection || a.date) - new Date(b.DateOfCollection || b.date));
  
  const hmpiValues = sortedSamples.map(s => s.hmpiResult?.hmpi || 0);
  const dates = sortedSamples.map(s => s.DateOfCollection || s.date);
  
  // Calculate overall trend
  const firstHMPI = hmpiValues[0];
  const lastHMPI = hmpiValues[hmpiValues.length - 1];
  const overallTrend = calculateTrend(lastHMPI, firstHMPI);
  
  // Calculate period-to-period changes
  const periodChanges = [];
  for (let i = 1; i < hmpiValues.length; i++) {
    const change = hmpiValues[i] - hmpiValues[i - 1];
    const percentChange = Math.round((change / hmpiValues[i - 1]) * 100);
    periodChanges.push({
      period: `${dates[i - 1]} to ${dates[i]}`,
      change: Math.round(change * 100) / 100,
      percentChange,
      direction: change > 0.1 ? 'increasing' : change < -0.1 ? 'decreasing' : 'stable'
    });
  }
  
  // Calculate average change per period
  const avgChange = periodChanges.reduce((sum, p) => sum + p.change, 0) / periodChanges.length;
  const avgPercentChange = periodChanges.reduce((sum, p) => sum + p.percentChange, 0) / periodChanges.length;
  
  return {
    overallTrend,
    periodChanges,
    avgChange: Math.round(avgChange * 100) / 100,
    avgPercentChange: Math.round(avgPercentChange * 100) / 100,
    hmpiValues,
    dates,
    sampleCount: samples.length
  };
};

// Aggregate data for location-level analysis
export const aggregateLocationData = (samples) => {
  if (samples.length === 0) return null;
  
  const avgHMPI = samples.reduce((sum, sample) => sum + (sample.hmpiResult?.hmpi || 0), 0) / samples.length;
  const maxHMPI = Math.max(...samples.map(s => s.hmpiResult?.hmpi || 0));
  const minHMPI = Math.min(...samples.map(s => s.hmpiResult?.hmpi || 0));
  
  // Find metal with highest concern
  const allMetalCalculations = samples.map(s => s.metalCalculations).filter(calc => calc); // Filter out undefined
  const metalTotals = {};
  
  Object.keys(STANDARD_LIMITS).forEach(metal => {
    metalTotals[metal] = allMetalCalculations.reduce((sum, calc) => 
      sum + (calc && calc[metal] ? calc[metal].weightedSubIndex : 0), 0);
  });
  
  const highestConcernMetal = Object.entries(metalTotals)
    .sort(([,a], [,b]) => b - a)[0];
  
  // Calculate trend analysis
  const trendAnalysis = calculateLocationTrend(samples);
  
  return {
    avgHMPI: Math.round(avgHMPI * 100) / 100,
    maxHMPI: Math.round(maxHMPI * 100) / 100,
    minHMPI: Math.round(minHMPI * 100) / 100,
    sampleCount: samples.length,
    highestConcernMetal: {
      metal: highestConcernMetal[0],
      totalWeightedSubIndex: Math.round(highestConcernMetal[1] * 100) / 100
    },
    trendAnalysis,
    samples: samples.sort((a, b) => new Date(a.DateOfCollection || a.date) - new Date(b.DateOfCollection || b.date))
  };
};
