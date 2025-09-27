// Sample HMPI data for Delhi NCR (Expanded to 150 locations)
export const heatmapData = [
  // --- DELHI (West and North) - PV001 to PV050 --- (Based on previous expansion)
  {
      id: "PV001",
      location: "Paschim Vihar",
      latitude: 28.6139,
      longitude: 77.2090,
      hmpi: 35.2,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 5,
      lastUpdated: "2025-01-20",
      metals: {
          Pb: 0.02, As: 0.01, Cd: 0.0008, Cr: 0.04, Ni: 0.015,
          Hg: 0.0003, Cu: 0.025, Zn: 0.08, Fe: 0.25, Mn: 0.06
      }
  },
  {
      id: "PV002",
      location: "Paschim Vihar Extension",
      latitude: 28.6200,
      longitude: 77.2150,
      hmpi: 38.7,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 3,
      lastUpdated: "2025-01-18",
      metals: {
          Pb: 0.015, As: 0.008, Cd: 0.0006, Cr: 0.035, Ni: 0.012,
          Hg: 0.00025, Cu: 0.02, Zn: 0.07, Fe: 0.22, Mn: 0.05
      }
  },
  {
      id: "PV003",
      location: "Paschim Vihar Block A",
      latitude: 28.6080,
      longitude: 77.2020,
      hmpi: 65.8,
      quality: "Polluted",
      color: "#ef4444",
      samples: 4,
      lastUpdated: "2025-01-15",
      metals: {
          Pb: 0.025, As: 0.012, Cd: 0.001, Cr: 0.045, Ni: 0.018,
          Hg: 0.0004, Cu: 0.03, Zn: 0.09, Fe: 0.28, Mn: 0.07
      }
  },
  {
      id: "PV004",
      location: "Paschim Vihar Block B",
      latitude: 28.6180,
      longitude: 77.1980,
      hmpi: 41.3,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 3,
      lastUpdated: "2025-01-17",
      metals: {
          Pb: 0.018, As: 0.009, Cd: 0.0007, Cr: 0.038, Ni: 0.014,
          Hg: 0.00028, Cu: 0.022, Zn: 0.075, Fe: 0.24, Mn: 0.055
      }
  },
  {
      id: "PV005",
      location: "Paschim Vihar Block C",
      latitude: 28.6250,
      longitude: 77.2050,
      hmpi: 35.6,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 2,
      lastUpdated: "2025-01-19",
      metals: {
          Pb: 0.012, As: 0.007, Cd: 0.0005, Cr: 0.032, Ni: 0.01,
          Hg: 0.0002, Cu: 0.018, Zn: 0.065, Fe: 0.2, Mn: 0.045
      }
  },
  {
      id: "PV006",
      location: "Paschim Vihar Block D",
      latitude: 28.6120,
      longitude: 77.2120,
      hmpi: 28.4,
      quality: "Safe",
      color: "#10b981",
      samples: 3,
      lastUpdated: "2025-01-16",
      metals: {
          Pb: 0.008, As: 0.005, Cd: 0.0003, Cr: 0.025, Ni: 0.007,
          Hg: 0.00015, Cu: 0.015, Zn: 0.055, Fe: 0.18, Mn: 0.035
      }
  },
  {
      id: "PV007",
      location: "Paschim Vihar Block E",
      latitude: 28.6300,
      longitude: 77.1950,
      hmpi: 33.2,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 2,
      lastUpdated: "2025-01-14",
      metals: {
          Pb: 0.01, As: 0.006, Cd: 0.0004, Cr: 0.03, Ni: 0.008,
          Hg: 0.00018, Cu: 0.016, Zn: 0.06, Fe: 0.19, Mn: 0.04
      }
  },
  {
      id: "PV008",
      location: "Paschim Vihar Block F",
      latitude: 28.6050,
      longitude: 77.2200,
      hmpi: 47.9,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 4,
      lastUpdated: "2025-01-13",
      metals: {
          Pb: 0.022, As: 0.011, Cd: 0.0009, Cr: 0.042, Ni: 0.016,
          Hg: 0.00035, Cu: 0.028, Zn: 0.085, Fe: 0.26, Mn: 0.065
      }
  },
  {
      id: "PV009",
      location: "Paschim Vihar Block G",
      latitude: 28.6220,
      longitude: 77.1880,
      hmpi: 31.8,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 2,
      lastUpdated: "2025-01-12",
      metals: {
          Pb: 0.009, As: 0.006, Cd: 0.0004, Cr: 0.028, Ni: 0.008,
          Hg: 0.00017, Cu: 0.017, Zn: 0.058, Fe: 0.185, Mn: 0.038
      }
  },
  {
      id: "PV010",
      location: "Paschim Vihar Block H",
      latitude: 28.6150,
      longitude: 77.2250,
      hmpi: 25.1,
      quality: "Safe",
      color: "#10b981",
      samples: 3,
      lastUpdated: "2025-01-11",
      metals: {
          Pb: 0.006, As: 0.004, Cd: 0.0002, Cr: 0.022, Ni: 0.006,
          Hg: 0.00012, Cu: 0.012, Zn: 0.05, Fe: 0.16, Mn: 0.03
      }
  },
  {
      id: "PV011",
      location: "Paschim Vihar Block I",
      latitude: 28.6280,
      longitude: 77.1820,
      hmpi: 29.7,
      quality: "Safe",
      color: "#10b981",
      samples: 2,
      lastUpdated: "2025-01-10",
      metals: {
          Pb: 0.007, As: 0.005, Cd: 0.0003, Cr: 0.024, Ni: 0.007,
          Hg: 0.00014, Cu: 0.014, Zn: 0.052, Fe: 0.17, Mn: 0.032
      }
  },
  {
      id: "PV012",
      location: "Paschim Vihar Block J",
      latitude: 28.6000,
      longitude: 77.2300,
      hmpi: 44.6,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 3,
      lastUpdated: "2025-01-09",
      metals: {
          Pb: 0.02, As: 0.01, Cd: 0.0008, Cr: 0.04, Ni: 0.015,
          Hg: 0.0003, Cu: 0.025, Zn: 0.08, Fe: 0.25, Mn: 0.06
      }
  },
  {
      id: "PV013",
      location: "Paschim Vihar Block K",
      latitude: 28.6350,
      longitude: 77.1750,
      hmpi: 36.9,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 2,
      lastUpdated: "2025-01-08",
      metals: {
          Pb: 0.013, As: 0.008, Cd: 0.0005, Cr: 0.033, Ni: 0.011,
          Hg: 0.00022, Cu: 0.019, Zn: 0.062, Fe: 0.195, Mn: 0.042
      }
  },
  {
      id: "PV014",
      location: "Paschim Vihar Block L",
      latitude: 28.5950,
      longitude: 77.2350,
      hmpi: 78.3,
      quality: "Critical",
      color: "#dc2626",
      samples: 4,
      lastUpdated: "2025-01-07",
      metals: {
          Pb: 0.024, As: 0.012, Cd: 0.001, Cr: 0.044, Ni: 0.017,
          Hg: 0.00038, Cu: 0.029, Zn: 0.088, Fe: 0.27, Mn: 0.068
      }
  },
  {
      id: "PV015",
      location: "Paschim Vihar Block M",
      latitude: 28.6400,
      longitude: 77.1680,
      hmpi: 27.3,
      quality: "Safe",
      color: "#10b981",
      samples: 2,
      lastUpdated: "2025-01-06",
      metals: {
          Pb: 0.005, As: 0.004, Cd: 0.0002, Cr: 0.021, Ni: 0.005,
          Hg: 0.00011, Cu: 0.011, Zn: 0.048, Fe: 0.155, Mn: 0.028
      }
  },
  {
      id: "PV016",
      location: "Peera Garhi",
      latitude: 28.6700,
      longitude: 77.0850,
      hmpi: 55.2,
      quality: "Polluted",
      color: "#ef4444",
      samples: 5,
      lastUpdated: "2025-01-21",
      metals: {
          Pb: 0.026, As: 0.013, Cd: 0.0011, Cr: 0.046, Ni: 0.019,
          Hg: 0.00042, Cu: 0.032, Zn: 0.095, Fe: 0.29, Mn: 0.075
      }
  },
  {
      id: "PV017",
      location: "Outer Ring Road (Near Paschim Vihar)",
      latitude: 28.6100,
      longitude: 77.2180,
      hmpi: 49.5,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 6,
      lastUpdated: "2025-01-20",
      metals: {
          Pb: 0.021, As: 0.01, Cd: 0.0009, Cr: 0.04, Ni: 0.016,
          Hg: 0.0003, Cu: 0.027, Zn: 0.082, Fe: 0.26, Mn: 0.063
      }
  },
  {
      id: "PV018",
      location: "Udyog Nagar Industrial Area",
      latitude: 28.6800,
      longitude: 77.0600,
      hmpi: 82.1,
      quality: "Critical",
      color: "#dc2626",
      samples: 5,
      lastUpdated: "2025-01-19",
      metals: {
          Pb: 0.028, As: 0.014, Cd: 0.0013, Cr: 0.05, Ni: 0.022,
          Hg: 0.0005, Cu: 0.035, Zn: 0.1, Fe: 0.3, Mn: 0.08
      }
  },
  {
      id: "PV019",
      location: "Paschim Vihar Block N",
      latitude: 28.6450,
      longitude: 77.1650,
      hmpi: 30.1,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 2,
      lastUpdated: "2025-01-18",
      metals: {
          Pb: 0.01, As: 0.006, Cd: 0.0004, Cr: 0.028, Ni: 0.008,
          Hg: 0.00018, Cu: 0.017, Zn: 0.06, Fe: 0.19, Mn: 0.04
      }
  },
  {
      id: "PV020",
      location: "Madipur",
      latitude: 28.6600,
      longitude: 77.1000,
      hmpi: 60.5,
      quality: "Polluted",
      color: "#ef4444",
      samples: 3,
      lastUpdated: "2025-01-17",
      metals: {
          Pb: 0.023, As: 0.012, Cd: 0.001, Cr: 0.043, Ni: 0.017,
          Hg: 0.00037, Cu: 0.028, Zn: 0.087, Fe: 0.27, Mn: 0.067
      }
  },
  {
      id: "PV021",
      location: "Paschim Puri",
      latitude: 28.6550,
      longitude: 77.1250,
      hmpi: 42.0,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 4,
      lastUpdated: "2025-01-16",
      metals: {
          Pb: 0.016, As: 0.008, Cd: 0.0007, Cr: 0.036, Ni: 0.013,
          Hg: 0.00026, Cu: 0.021, Zn: 0.072, Fe: 0.23, Mn: 0.053
      }
  },
  {
      id: "PV022",
      location: "Meera Bagh",
      latitude: 28.6300,
      longitude: 77.1800,
      hmpi: 39.1,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 3,
      lastUpdated: "2025-01-15",
      metals: {
          Pb: 0.014, As: 0.007, Cd: 0.0006, Cr: 0.034, Ni: 0.012,
          Hg: 0.00024, Cu: 0.02, Zn: 0.068, Fe: 0.21, Mn: 0.048
      }
  },
  {
      id: "PV023",
      location: "Paschim Vihar Block P",
      latitude: 28.6020,
      longitude: 77.2000,
      hmpi: 33.5,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 2,
      lastUpdated: "2025-01-14",
      metals: {
          Pb: 0.011, As: 0.006, Cd: 0.0004, Cr: 0.031, Ni: 0.009,
          Hg: 0.00019, Cu: 0.017, Zn: 0.062, Fe: 0.195, Mn: 0.041
      }
  },
  {
      id: "PV024",
      location: "Ranhola",
      latitude: 28.6650,
      longitude: 77.0500,
      hmpi: 22.8,
      quality: "Safe",
      color: "#10b981",
      samples: 3,
      lastUpdated: "2025-01-13",
      metals: {
          Pb: 0.004, As: 0.003, Cd: 0.00015, Cr: 0.02, Ni: 0.004,
          Hg: 0.0001, Cu: 0.01, Zn: 0.045, Fe: 0.15, Mn: 0.025
      }
  },
  {
      id: "PV025",
      location: "Keshopur Mandi",
      latitude: 28.6480,
      longitude: 77.1500,
      hmpi: 46.1,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 5,
      lastUpdated: "2025-01-12",
      metals: {
          Pb: 0.019, As: 0.009, Cd: 0.0008, Cr: 0.039, Ni: 0.014,
          Hg: 0.00029, Cu: 0.023, Zn: 0.078, Fe: 0.245, Mn: 0.058
      }
  },
  {
      id: "PV026",
      location: "Mangolpuri Industrial Area Phase I",
      latitude: 28.6900,
      longitude: 77.1050,
      hmpi: 72.3,
      quality: "Polluted",
      color: "#ef4444",
      samples: 4,
      lastUpdated: "2025-01-11",
      metals: {
          Pb: 0.027, As: 0.013, Cd: 0.0012, Cr: 0.048, Ni: 0.02,
          Hg: 0.00045, Cu: 0.033, Zn: 0.098, Fe: 0.295, Mn: 0.078
      }
  },
  {
      id: "PV027",
      location: "Paschim Vihar Block Q",
      latitude: 28.6170,
      longitude: 77.2080,
      hmpi: 37.0,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 3,
      lastUpdated: "2025-01-10",
      metals: {
          Pb: 0.014, As: 0.007, Cd: 0.0006, Cr: 0.034, Ni: 0.012,
          Hg: 0.00024, Cu: 0.02, Zn: 0.068, Fe: 0.21, Mn: 0.048
      }
  },
  {
      id: "PV028",
      location: "Nangloi Jat",
      latitude: 28.6750,
      longitude: 77.0400,
      hmpi: 51.5,
      quality: "Polluted",
      color: "#ef4444",
      samples: 4,
      lastUpdated: "2025-01-09",
      metals: {
          Pb: 0.022, As: 0.011, Cd: 0.0009, Cr: 0.042, Ni: 0.016,
          Hg: 0.00035, Cu: 0.028, Zn: 0.085, Fe: 0.26, Mn: 0.065
      }
  },
  {
      id: "PV029",
      location: "Paschim Vihar Block R",
      latitude: 28.6320,
      longitude: 77.1900,
      hmpi: 24.9,
      quality: "Safe",
      color: "#10b981",
      samples: 2,
      lastUpdated: "2025-01-08",
      metals: {
          Pb: 0.005, As: 0.004, Cd: 0.0002, Cr: 0.021, Ni: 0.005,
          Hg: 0.00011, Cu: 0.011, Zn: 0.048, Fe: 0.155, Mn: 0.028
      }
  },
  {
      id: "PV030",
      location: "Sunder Vihar",
      latitude: 28.6400,
      longitude: 77.1400,
      hmpi: 38.2,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 3,
      lastUpdated: "2025-01-07",
      metals: {
          Pb: 0.015, As: 0.008, Cd: 0.0006, Cr: 0.035, Ni: 0.012,
          Hg: 0.00025, Cu: 0.02, Zn: 0.07, Fe: 0.22, Mn: 0.05
      }
  },
  {
      id: "PV031",
      location: "Rohini Sector 1",
      latitude: 28.7000,
      longitude: 77.1000,
      hmpi: 31.0,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 5,
      lastUpdated: "2025-01-06",
      metals: {
          Pb: 0.01, As: 0.006, Cd: 0.0004, Cr: 0.03, Ni: 0.008,
          Hg: 0.00018, Cu: 0.016, Zn: 0.06, Fe: 0.19, Mn: 0.04
      }
  },
  {
      id: "PV032",
      location: "Pritampura",
      latitude: 28.6850,
      longitude: 77.1450,
      hmpi: 45.8,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 4,
      lastUpdated: "2025-01-05",
      metals: {
          Pb: 0.018, As: 0.009, Cd: 0.0007, Cr: 0.038, Ni: 0.014,
          Hg: 0.00028, Cu: 0.022, Zn: 0.075, Fe: 0.24, Mn: 0.055
      }
  },
  {
      id: "PV033",
      location: "Paschim Vihar Block S",
      latitude: 28.6080,
      longitude: 77.2280,
      hmpi: 68.9,
      quality: "Polluted",
      color: "#ef4444",
      samples: 4,
      lastUpdated: "2025-01-04",
      metals: {
          Pb: 0.026, As: 0.013, Cd: 0.0011, Cr: 0.046, Ni: 0.019,
          Hg: 0.00042, Cu: 0.032, Zn: 0.095, Fe: 0.29, Mn: 0.075
      }
  },
  {
      id: "PV034",
      location: "Nilothi Village",
      latitude: 28.6500,
      longitude: 77.0700,
      hmpi: 26.5,
      quality: "Safe",
      color: "#10b981",
      samples: 2,
      lastUpdated: "2025-01-03",
      metals: {
          Pb: 0.006, As: 0.004, Cd: 0.0002, Cr: 0.022, Ni: 0.006,
          Hg: 0.00012, Cu: 0.012, Zn: 0.05, Fe: 0.16, Mn: 0.03
      }
  },
  {
      id: "PV035",
      location: "Mundka Industrial Area",
      latitude: 28.6950,
      longitude: 77.0200,
      hmpi: 75.9,
      quality: "Critical",
      color: "#dc2626",
      samples: 5,
      lastUpdated: "2025-01-02",
      metals: {
          Pb: 0.027, As: 0.014, Cd: 0.0012, Cr: 0.048, Ni: 0.02,
          Hg: 0.00045, Cu: 0.033, Zn: 0.098, Fe: 0.295, Mn: 0.078
      }
  },
  {
      id: "PV036",
      location: "Paschim Vihar Block T",
      latitude: 28.6140,
      longitude: 77.1950,
      hmpi: 40.2,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 3,
      lastUpdated: "2025-01-01",
      metals: {
          Pb: 0.016, As: 0.008, Cd: 0.0007, Cr: 0.036, Ni: 0.013,
          Hg: 0.00026, Cu: 0.021, Zn: 0.072, Fe: 0.23, Mn: 0.053
      }
  },
  {
      id: "PV037",
      location: "Shivaji Park",
      latitude: 28.6500,
      longitude: 77.1350,
      hmpi: 35.8,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 3,
      lastUpdated: "2024-12-31",
      metals: {
          Pb: 0.012, As: 0.007, Cd: 0.0005, Cr: 0.032, Ni: 0.01,
          Hg: 0.0002, Cu: 0.018, Zn: 0.065, Fe: 0.2, Mn: 0.045
      }
  },
  {
      id: "PV038",
      location: "Ashok Vihar",
      latitude: 28.6900,
      longitude: 77.1700,
      hmpi: 50.1,
      quality: "Polluted",
      color: "#ef4444",
      samples: 5,
      lastUpdated: "2024-12-30",
      metals: {
          Pb: 0.022, As: 0.011, Cd: 0.0009, Cr: 0.042, Ni: 0.016,
          Hg: 0.00035, Cu: 0.028, Zn: 0.085, Fe: 0.26, Mn: 0.065
      }
  },
  {
      id: "PV039",
      location: "Punjabi Bagh Extension",
      latitude: 28.6650,
      longitude: 77.1500,
      hmpi: 48.2,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 4,
      lastUpdated: "2024-12-29",
      metals: {
          Pb: 0.02, As: 0.01, Cd: 0.0008, Cr: 0.04, Ni: 0.015,
          Hg: 0.0003, Cu: 0.025, Zn: 0.08, Fe: 0.25, Mn: 0.06
      }
  },
  {
      id: "PV040",
      location: "Paschim Vihar Block U",
      latitude: 28.6250,
      longitude: 77.1750,
      hmpi: 29.0,
      quality: "Safe",
      color: "#10b981",
      samples: 2,
      lastUpdated: "2024-12-28",
      metals: {
          Pb: 0.008, As: 0.005, Cd: 0.0003, Cr: 0.025, Ni: 0.007,
          Hg: 0.00015, Cu: 0.015, Zn: 0.055, Fe: 0.18, Mn: 0.035
      }
  },
  {
      id: "PV041",
      location: "Kirti Nagar",
      latitude: 28.6400,
      longitude: 77.1850,
      hmpi: 55.0,
      quality: "Polluted",
      color: "#ef4444",
      samples: 4,
      lastUpdated: "2024-12-27",
      metals: {
          Pb: 0.023, As: 0.012, Cd: 0.001, Cr: 0.043, Ni: 0.017,
          Hg: 0.00037, Cu: 0.028, Zn: 0.087, Fe: 0.27, Mn: 0.067
      }
  },
  {
      id: "PV042",
      location: "Paschim Vihar Block V",
      latitude: 28.6050,
      longitude: 77.2100,
      hmpi: 34.1,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 3,
      lastUpdated: "2024-12-26",
      metals: {
          Pb: 0.011, As: 0.006, Cd: 0.0004, Cr: 0.031, Ni: 0.009,
          Hg: 0.00019, Cu: 0.017, Zn: 0.062, Fe: 0.195, Mn: 0.041
      }
  },
  {
      id: "PV043",
      location: "Vikas Puri",
      latitude: 28.6200,
      longitude: 77.0800,
      hmpi: 40.5,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 5,
      lastUpdated: "2024-12-25",
      metals: {
          Pb: 0.016, As: 0.008, Cd: 0.0007, Cr: 0.036, Ni: 0.013,
          Hg: 0.00026, Cu: 0.021, Zn: 0.072, Fe: 0.23, Mn: 0.053
      }
  },
  {
      id: "PV044",
      location: "Paschim Vihar Block W",
      latitude: 28.6380,
      longitude: 77.1600,
      hmpi: 27.5,
      quality: "Safe",
      color: "#10b981",
      samples: 2,
      lastUpdated: "2024-12-24",
      metals: {
          Pb: 0.006, As: 0.004, Cd: 0.0002, Cr: 0.022, Ni: 0.006,
          Hg: 0.00012, Cu: 0.012, Zn: 0.05, Fe: 0.16, Mn: 0.03
      }
  },
  {
      id: "PV045",
      location: "Tilak Nagar",
      latitude: 28.6380,
      longitude: 77.1000,
      hmpi: 58.7,
      quality: "Polluted",
      color: "#ef4444",
      samples: 4,
      lastUpdated: "2024-12-23",
      metals: {
          Pb: 0.024, As: 0.012, Cd: 0.001, Cr: 0.044, Ni: 0.017,
          Hg: 0.00038, Cu: 0.029, Zn: 0.088, Fe: 0.27, Mn: 0.068
      }
  },
  {
      id: "PV046",
      location: "Paschim Vihar Block X",
      latitude: 28.6100,
      longitude: 77.2250,
      hmpi: 70.4,
      quality: "Polluted",
      color: "#ef4444",
      samples: 5,
      lastUpdated: "2024-12-22",
      metals: {
          Pb: 0.025, As: 0.012, Cd: 0.001, Cr: 0.045, Ni: 0.018,
          Hg: 0.0004, Cu: 0.03, Zn: 0.09, Fe: 0.28, Mn: 0.07
      }
  },
  {
      id: "PV047",
      location: "Rajouri Garden",
      latitude: 28.6480,
      longitude: 77.1100,
      hmpi: 44.0,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 4,
      lastUpdated: "2024-12-21",
      metals: {
          Pb: 0.017, As: 0.009, Cd: 0.0007, Cr: 0.037, Ni: 0.013,
          Hg: 0.00027, Cu: 0.022, Zn: 0.074, Fe: 0.235, Mn: 0.054
      }
  },
  {
      id: "PV048",
      location: "Paschim Vihar Block Y",
      latitude: 28.6220,
      longitude: 77.2020,
      hmpi: 32.5,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 3,
      lastUpdated: "2024-12-20",
      metals: {
          Pb: 0.01, As: 0.006, Cd: 0.0004, Cr: 0.03, Ni: 0.008,
          Hg: 0.00018, Cu: 0.016, Zn: 0.06, Fe: 0.19, Mn: 0.04
      }
  },
  {
      id: "PV049",
      location: "Janakpuri",
      latitude: 28.6200,
      longitude: 77.0600,
      hmpi: 49.8,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 5,
      lastUpdated: "2024-12-19",
      metals: {
          Pb: 0.021, As: 0.01, Cd: 0.0009, Cr: 0.04, Ni: 0.016,
          Hg: 0.0003, Cu: 0.027, Zn: 0.082, Fe: 0.26, Mn: 0.063
      }
  },
  {
      id: "PV050",
      location: "Paschim Vihar Block Z",
      latitude: 28.6180,
      longitude: 77.2300,
      hmpi: 79.5,
      quality: "Critical",
      color: "#dc2626",
      samples: 4,
      lastUpdated: "2024-12-18",
      metals: {
          Pb: 0.025, As: 0.013, Cd: 0.0011, Cr: 0.046, Ni: 0.019,
          Hg: 0.00042, Cu: 0.032, Zn: 0.095, Fe: 0.29, Mn: 0.075
      }
  },
  // --- DELHI (South and Central) - PV051 to PV080 ---
  {
      id: "PV051",
      location: "Dwarka Sector 1",
      latitude: 28.5800,
      longitude: 77.0500,
      hmpi: 31.5,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 4,
      lastUpdated: "2025-01-20",
      metals: {
          Pb: 0.011, As: 0.006, Cd: 0.0004, Cr: 0.031, Ni: 0.009,
          Hg: 0.00019, Cu: 0.017, Zn: 0.062, Fe: 0.195, Mn: 0.041
      }
  },
  {
      id: "PV052",
      location: "Vasant Kunj",
      latitude: 28.5300,
      longitude: 77.1600,
      hmpi: 22.1,
      quality: "Safe",
      color: "#10b981",
      samples: 3,
      lastUpdated: "2025-01-19",
      metals: {
          Pb: 0.004, As: 0.003, Cd: 0.00015, Cr: 0.02, Ni: 0.004,
          Hg: 0.0001, Cu: 0.01, Zn: 0.045, Fe: 0.15, Mn: 0.025
      }
  },
  {
      id: "PV053",
      location: "Okhla Industrial Area Phase I",
      latitude: 28.5300,
      longitude: 77.2800,
      hmpi: 79.9,
      quality: "Critical",
      color: "#dc2626",
      samples: 6,
      lastUpdated: "2025-01-18",
      metals: {
          Pb: 0.028, As: 0.014, Cd: 0.0013, Cr: 0.05, Ni: 0.022,
          Hg: 0.0005, Cu: 0.035, Zn: 0.1, Fe: 0.3, Mn: 0.08
      }
  },
  {
      id: "PV054",
      location: "Hauz Khas",
      latitude: 28.5500,
      longitude: 77.2000,
      hmpi: 39.4,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 3,
      lastUpdated: "2025-01-17",
      metals: {
          Pb: 0.015, As: 0.008, Cd: 0.0006, Cr: 0.035, Ni: 0.012,
          Hg: 0.00025, Cu: 0.02, Zn: 0.07, Fe: 0.22, Mn: 0.05
      }
  },
  {
      id: "PV055",
      location: "Karol Bagh",
      latitude: 28.6500,
      longitude: 77.1800,
      hmpi: 61.2,
      quality: "Polluted",
      color: "#ef4444",
      samples: 5,
      lastUpdated: "2025-01-16",
      metals: {
          Pb: 0.024, As: 0.012, Cd: 0.001, Cr: 0.044, Ni: 0.017,
          Hg: 0.00038, Cu: 0.029, Zn: 0.088, Fe: 0.27, Mn: 0.068
      }
  },
  {
      id: "PV056",
      location: "Laxmi Nagar",
      latitude: 28.6300,
      longitude: 77.2850,
      hmpi: 54.7,
      quality: "Polluted",
      color: "#ef4444",
      samples: 4,
      lastUpdated: "2025-01-15",
      metals: {
          Pb: 0.023, As: 0.012, Cd: 0.001, Cr: 0.043, Ni: 0.017,
          Hg: 0.00037, Cu: 0.028, Zn: 0.087, Fe: 0.27, Mn: 0.067
      }
  },
  {
      id: "PV057",
      location: "Connaught Place",
      latitude: 28.6300,
      longitude: 77.2160,
      hmpi: 47.1,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 5,
      lastUpdated: "2025-01-14",
      metals: {
          Pb: 0.019, As: 0.009, Cd: 0.0008, Cr: 0.039, Ni: 0.014,
          Hg: 0.00029, Cu: 0.023, Zn: 0.078, Fe: 0.245, Mn: 0.058
      }
  },
  {
      id: "PV058",
      location: "Chandni Chowk",
      latitude: 28.6570,
      longitude: 77.2280,
      hmpi: 71.0,
      quality: "Polluted",
      color: "#ef4444",
      samples: 6,
      lastUpdated: "2025-01-13",
      metals: {
          Pb: 0.027, As: 0.013, Cd: 0.0012, Cr: 0.048, Ni: 0.02,
          Hg: 0.00045, Cu: 0.033, Zn: 0.098, Fe: 0.295, Mn: 0.078
      }
  },
  {
      id: "PV059",
      location: "AIIMS Area",
      latitude: 28.5600,
      longitude: 77.2060,
      hmpi: 34.9,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 4,
      lastUpdated: "2025-01-12",
      metals: {
          Pb: 0.012, As: 0.007, Cd: 0.0005, Cr: 0.032, Ni: 0.01,
          Hg: 0.0002, Cu: 0.018, Zn: 0.065, Fe: 0.2, Mn: 0.045
      }
  },
  {
      id: "PV060",
      location: "Mayapuri Industrial Area",
      latitude: 28.6250,
      longitude: 77.1000,
      hmpi: 85.5,
      quality: "Critical",
      color: "#dc2626",
      samples: 5,
      lastUpdated: "2025-01-11",
      metals: {
          Pb: 0.03, As: 0.015, Cd: 0.0015, Cr: 0.055, Ni: 0.025,
          Hg: 0.0006, Cu: 0.04, Zn: 0.12, Fe: 0.35, Mn: 0.09
      }
  },
  {
      id: "PV061",
      location: "Safdarjung Enclave",
      latitude: 28.5650,
      longitude: 77.1950,
      hmpi: 25.5,
      quality: "Safe",
      color: "#10b981",
      samples: 3,
      lastUpdated: "2025-01-10",
      metals: {
          Pb: 0.006, As: 0.004, Cd: 0.0002, Cr: 0.022, Ni: 0.006,
          Hg: 0.00012, Cu: 0.012, Zn: 0.05, Fe: 0.16, Mn: 0.03
      }
  },
  {
      id: "PV062",
      location: "Kalkaji",
      latitude: 28.5400,
      longitude: 77.2600,
      hmpi: 42.8,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 4,
      lastUpdated: "2025-01-09",
      metals: {
          Pb: 0.017, As: 0.009, Cd: 0.0007, Cr: 0.037, Ni: 0.013,
          Hg: 0.00027, Cu: 0.022, Zn: 0.074, Fe: 0.235, Mn: 0.054
      }
  },
  {
      id: "PV063",
      location: "Shastri Park",
      latitude: 28.6700,
      longitude: 77.2500,
      hmpi: 63.5,
      quality: "Polluted",
      color: "#ef4444",
      samples: 5,
      lastUpdated: "2025-01-08",
      metals: {
          Pb: 0.025, As: 0.013, Cd: 0.0011, Cr: 0.046, Ni: 0.019,
          Hg: 0.00042, Cu: 0.032, Zn: 0.095, Fe: 0.29, Mn: 0.075
      }
  },
  {
      id: "PV064",
      location: "Narela Industrial Area",
      latitude: 28.8500,
      longitude: 77.0800,
      hmpi: 81.2,
      quality: "Critical",
      color: "#dc2626",
      samples: 4,
      lastUpdated: "2025-01-07",
      metals: {
          Pb: 0.029, As: 0.014, Cd: 0.0013, Cr: 0.052, Ni: 0.023,
          Hg: 0.00052, Cu: 0.036, Zn: 0.11, Fe: 0.32, Mn: 0.082
      }
  },
  {
      id: "PV065",
      location: "Rohini Sector 16",
      latitude: 28.7100,
      longitude: 77.1200,
      hmpi: 37.5,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 3,
      lastUpdated: "2025-01-06",
      metals: {
          Pb: 0.014, As: 0.007, Cd: 0.0006, Cr: 0.034, Ni: 0.012,
          Hg: 0.00024, Cu: 0.02, Zn: 0.068, Fe: 0.21, Mn: 0.048
      }
  },
  {
      id: "PV066",
      location: "Dilshad Garden",
      latitude: 28.6950,
      longitude: 77.3100,
      hmpi: 59.1,
      quality: "Polluted",
      color: "#ef4444",
      samples: 4,
      lastUpdated: "2025-01-05",
      metals: {
          Pb: 0.024, As: 0.012, Cd: 0.001, Cr: 0.044, Ni: 0.017,
          Hg: 0.00038, Cu: 0.029, Zn: 0.088, Fe: 0.27, Mn: 0.068
      }
  },
  {
      id: "PV067",
      location: "Model Town",
      latitude: 28.7000,
      longitude: 77.2000,
      hmpi: 33.8,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 3,
      lastUpdated: "2025-01-04",
      metals: {
          Pb: 0.011, As: 0.006, Cd: 0.0004, Cr: 0.031, Ni: 0.009,
          Hg: 0.00019, Cu: 0.017, Zn: 0.062, Fe: 0.195, Mn: 0.041
      }
  },
  {
      id: "PV068",
      location: "Shahdara",
      latitude: 28.6650,
      longitude: 77.3100,
      hmpi: 66.2,
      quality: "Polluted",
      color: "#ef4444",
      samples: 5,
      lastUpdated: "2025-01-03",
      metals: {
          Pb: 0.026, As: 0.013, Cd: 0.0011, Cr: 0.046, Ni: 0.019,
          Hg: 0.00042, Cu: 0.032, Zn: 0.095, Fe: 0.29, Mn: 0.075
      }
  },
  {
      id: "PV069",
      location: "Preet Vihar",
      latitude: 28.6400,
      longitude: 77.2900,
      hmpi: 41.0,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 4,
      lastUpdated: "2025-01-02",
      metals: {
          Pb: 0.016, As: 0.008, Cd: 0.0007, Cr: 0.036, Ni: 0.013,
          Hg: 0.00026, Cu: 0.021, Zn: 0.072, Fe: 0.23, Mn: 0.053
      }
  },
  {
      id: "PV070",
      location: "Kashmere Gate",
      latitude: 28.6670,
      longitude: 77.2280,
      hmpi: 53.4,
      quality: "Polluted",
      color: "#ef4444",
      samples: 6,
      lastUpdated: "2025-01-01",
      metals: {
          Pb: 0.022, As: 0.011, Cd: 0.0009, Cr: 0.042, Ni: 0.016,
          Hg: 0.00035, Cu: 0.028, Zn: 0.085, Fe: 0.26, Mn: 0.065
      }
  },
  {
      id: "PV071",
      location: "New Moti Nagar",
      latitude: 28.6500,
      longitude: 77.1550,
      hmpi: 39.0,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 3,
      lastUpdated: "2024-12-31",
      metals: {
          Pb: 0.014, As: 0.007, Cd: 0.0006, Cr: 0.034, Ni: 0.012,
          Hg: 0.00024, Cu: 0.02, Zn: 0.068, Fe: 0.21, Mn: 0.048
      }
  },
  {
      id: "PV072",
      location: "Naraina Industrial Area",
      latitude: 28.6250,
      longitude: 77.1250,
      hmpi: 74.8,
      quality: "Polluted",
      color: "#ef4444",
      samples: 5,
      lastUpdated: "2024-12-30",
      metals: {
          Pb: 0.028, As: 0.014, Cd: 0.0013, Cr: 0.05, Ni: 0.022,
          Hg: 0.0005, Cu: 0.035, Zn: 0.1, Fe: 0.3, Mn: 0.08
      }
  },
  {
      id: "PV073",
      location: "Chhatarpur",
      latitude: 28.5000,
      longitude: 77.1800,
      hmpi: 29.5,
      quality: "Safe",
      color: "#10b981",
      samples: 2,
      lastUpdated: "2024-12-29",
      metals: {
          Pb: 0.008, As: 0.005, Cd: 0.0003, Cr: 0.025, Ni: 0.007,
          Hg: 0.00015, Cu: 0.015, Zn: 0.055, Fe: 0.18, Mn: 0.035
      }
  },
  {
      id: "PV074",
      location: "Punjabi Bagh West",
      latitude: 28.6600,
      longitude: 77.1350,
      hmpi: 45.1,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 4,
      lastUpdated: "2024-12-28",
      metals: {
          Pb: 0.018, As: 0.009, Cd: 0.0007, Cr: 0.038, Ni: 0.014,
          Hg: 0.00028, Cu: 0.022, Zn: 0.075, Fe: 0.24, Mn: 0.055
      }
  },
  {
      id: "PV075",
      location: "Palam",
      latitude: 28.6000,
      longitude: 77.0800,
      hmpi: 36.5,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 3,
      lastUpdated: "2024-12-27",
      metals: {
          Pb: 0.013, As: 0.008, Cd: 0.0005, Cr: 0.033, Ni: 0.011,
          Hg: 0.00022, Cu: 0.019, Zn: 0.062, Fe: 0.195, Mn: 0.042
      }
  },
  {
      id: "PV076",
      location: "Kapashera Border",
      latitude: 28.5300,
      longitude: 77.0100,
      hmpi: 57.0,
      quality: "Polluted",
      color: "#ef4444",
      samples: 5,
      lastUpdated: "2024-12-26",
      metals: {
          Pb: 0.023, As: 0.012, Cd: 0.001, Cr: 0.043, Ni: 0.017,
          Hg: 0.00037, Cu: 0.028, Zn: 0.087, Fe: 0.27, Mn: 0.067
      }
  },
  {
      id: "PV077",
      location: "New Delhi Railway Station",
      latitude: 28.6430,
      longitude: 77.2200,
      hmpi: 60.1,
      quality: "Polluted",
      color: "#ef4444",
      samples: 6,
      lastUpdated: "2024-12-25",
      metals: {
          Pb: 0.024, As: 0.012, Cd: 0.001, Cr: 0.044, Ni: 0.017,
          Hg: 0.00038, Cu: 0.029, Zn: 0.088, Fe: 0.27, Mn: 0.068
      }
  },
  {
      id: "PV078",
      location: "Civil Lines",
      latitude: 28.6800,
      longitude: 77.2200,
      hmpi: 30.5,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 3,
      lastUpdated: "2024-12-24",
      metals: {
          Pb: 0.01, As: 0.006, Cd: 0.0004, Cr: 0.03, Ni: 0.008,
          Hg: 0.00018, Cu: 0.016, Zn: 0.06, Fe: 0.19, Mn: 0.04
      }
  },
  {
      id: "PV079",
      location: "Patparganj Industrial Area",
      latitude: 28.6100,
      longitude: 77.3000,
      hmpi: 76.5,
      quality: "Critical",
      color: "#dc2626",
      samples: 5,
      lastUpdated: "2024-12-23",
      metals: {
          Pb: 0.029, As: 0.014, Cd: 0.0013, Cr: 0.052, Ni: 0.023,
          Hg: 0.00052, Cu: 0.036, Zn: 0.11, Fe: 0.32, Mn: 0.082
      }
  },
  {
      id: "PV080",
      location: "Defence Colony",
      latitude: 28.5700,
      longitude: 77.2300,
      hmpi: 24.5,
      quality: "Safe",
      color: "#10b981",
      samples: 2,
      lastUpdated: "2024-12-22",
      metals: {
          Pb: 0.005, As: 0.004, Cd: 0.0002, Cr: 0.021, Ni: 0.005,
          Hg: 0.00011, Cu: 0.011, Zn: 0.048, Fe: 0.155, Mn: 0.028
      }
  },
  // --- GURUGRAM (Haryana NCR) - PV081 to PV110 ---
  {
      id: "PV081",
      location: "Sector 14, Gurugram",
      latitude: 28.4700,
      longitude: 77.0400,
      hmpi: 33.3,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 4,
      lastUpdated: "2025-01-20",
      metals: {
          Pb: 0.011, As: 0.006, Cd: 0.0004, Cr: 0.031, Ni: 0.009,
          Hg: 0.00019, Cu: 0.017, Zn: 0.062, Fe: 0.195, Mn: 0.041
      }
  },
  {
      id: "PV082",
      location: "Manesar Industrial Area",
      latitude: 28.3700,
      longitude: 76.8800,
      hmpi: 78.5,
      quality: "Critical",
      color: "#dc2626",
      samples: 6,
      lastUpdated: "2025-01-19",
      metals: {
          Pb: 0.029, As: 0.014, Cd: 0.0013, Cr: 0.052, Ni: 0.023,
          Hg: 0.00052, Cu: 0.036, Zn: 0.11, Fe: 0.32, Mn: 0.082
      }
  },
  {
      id: "PV083",
      location: "DLF Phase 3, Gurugram",
      latitude: 28.5000,
      longitude: 77.1000,
      hmpi: 26.8,
      quality: "Safe",
      color: "#10b981",
      samples: 3,
      lastUpdated: "2025-01-18",
      metals: {
          Pb: 0.007, As: 0.005, Cd: 0.0003, Cr: 0.024, Ni: 0.007,
          Hg: 0.00014, Cu: 0.014, Zn: 0.052, Fe: 0.17, Mn: 0.032
      }
  },
  {
      id: "PV084",
      location: "Udyog Vihar Phase 5, Gurugram",
      latitude: 28.5000,
      longitude: 77.0600,
      hmpi: 69.1,
      quality: "Polluted",
      color: "#ef4444",
      samples: 5,
      lastUpdated: "2025-01-17",
      metals: {
          Pb: 0.026, As: 0.013, Cd: 0.0011, Cr: 0.046, Ni: 0.019,
          Hg: 0.00042, Cu: 0.032, Zn: 0.095, Fe: 0.29, Mn: 0.075
      }
  },
  {
      id: "PV085",
      location: "Sohna Road, Gurugram",
      latitude: 28.4000,
      longitude: 77.0500,
      hmpi: 41.5,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 4,
      lastUpdated: "2025-01-16",
      metals: {
          Pb: 0.016, As: 0.008, Cd: 0.0007, Cr: 0.036, Ni: 0.013,
          Hg: 0.00026, Cu: 0.021, Zn: 0.072, Fe: 0.23, Mn: 0.053
      }
  },
  {
      id: "PV086",
      location: "Sector 56, Gurugram",
      latitude: 28.4300,
      longitude: 77.1000,
      hmpi: 35.0,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 3,
      lastUpdated: "2025-01-15",
      metals: {
          Pb: 0.012, As: 0.007, Cd: 0.0005, Cr: 0.032, Ni: 0.01,
          Hg: 0.0002, Cu: 0.018, Zn: 0.065, Fe: 0.2, Mn: 0.045
      }
  },
  {
      id: "PV087",
      location: "Pataudi Road, Gurugram",
      latitude: 28.4800,
      longitude: 76.9500,
      hmpi: 55.5,
      quality: "Polluted",
      color: "#ef4444",
      samples: 4,
      lastUpdated: "2025-01-14",
      metals: {
          Pb: 0.023, As: 0.012, Cd: 0.001, Cr: 0.043, Ni: 0.017,
          Hg: 0.00037, Cu: 0.028, Zn: 0.087, Fe: 0.27, Mn: 0.067
      }
  },
  {
      id: "PV088",
      location: "Wazirabad, Gurugram",
      latitude: 28.4500,
      longitude: 77.0800,
      hmpi: 48.0,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 5,
      lastUpdated: "2025-01-13",
      metals: {
          Pb: 0.02, As: 0.01, Cd: 0.0008, Cr: 0.04, Ni: 0.015,
          Hg: 0.0003, Cu: 0.025, Zn: 0.08, Fe: 0.25, Mn: 0.06
      }
  },
  {
      id: "PV089",
      location: "Golf Course Road, Gurugram",
      latitude: 28.4600,
      longitude: 77.1000,
      hmpi: 32.8,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 3,
      lastUpdated: "2025-01-12",
      metals: {
          Pb: 0.011, As: 0.006, Cd: 0.0004, Cr: 0.031, Ni: 0.009,
          Hg: 0.00019, Cu: 0.017, Zn: 0.062, Fe: 0.195, Mn: 0.041
      }
  },
  {
      id: "PV090",
      location: "Kherki Daula Toll Plaza",
      latitude: 28.4100,
      longitude: 77.0000,
      hmpi: 62.0,
      quality: "Polluted",
      color: "#ef4444",
      samples: 5,
      lastUpdated: "2025-01-11",
      metals: {
          Pb: 0.025, As: 0.013, Cd: 0.0011, Cr: 0.046, Ni: 0.019,
          Hg: 0.00042, Cu: 0.032, Zn: 0.095, Fe: 0.29, Mn: 0.075
      }
  },
  {
      id: "PV091",
      location: "Badshahpur, Gurugram",
      latitude: 28.3800,
      longitude: 77.0700,
      hmpi: 28.2,
      quality: "Safe",
      color: "#10b981",
      samples: 2,
      lastUpdated: "2025-01-10",
      metals: {
          Pb: 0.008, As: 0.005, Cd: 0.0003, Cr: 0.025, Ni: 0.007,
          Hg: 0.00015, Cu: 0.015, Zn: 0.055, Fe: 0.18, Mn: 0.035
      }
  },
  {
      id: "PV092",
      location: "Sector 51, Gurugram",
      latitude: 28.4350,
      longitude: 77.0850,
      hmpi: 39.5,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 4,
      lastUpdated: "2025-01-09",
      metals: {
          Pb: 0.015, As: 0.008, Cd: 0.0006, Cr: 0.035, Ni: 0.012,
          Hg: 0.00025, Cu: 0.02, Zn: 0.07, Fe: 0.22, Mn: 0.05
      }
  },
  {
      id: "PV093",
      location: "Gurugram Railway Station",
      latitude: 28.4800,
      longitude: 77.0150,
      hmpi: 51.0,
      quality: "Polluted",
      color: "#ef4444",
      samples: 5,
      lastUpdated: "2025-01-08",
      metals: {
          Pb: 0.022, As: 0.011, Cd: 0.0009, Cr: 0.042, Ni: 0.016,
          Hg: 0.00035, Cu: 0.028, Zn: 0.085, Fe: 0.26, Mn: 0.065
      }
  },
  {
      id: "PV094",
      location: "M G Road, Gurugram",
      latitude: 28.4750,
      longitude: 77.0850,
      hmpi: 46.5,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 4,
      lastUpdated: "2025-01-07",
      metals: {
          Pb: 0.019, As: 0.009, Cd: 0.0008, Cr: 0.039, Ni: 0.014,
          Hg: 0.00029, Cu: 0.023, Zn: 0.078, Fe: 0.245, Mn: 0.058
      }
  },
  {
      id: "PV095",
      location: "Cyber City, Gurugram",
      latitude: 28.5050,
      longitude: 77.0950,
      hmpi: 34.0,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 3,
      lastUpdated: "2025-01-06",
      metals: {
          Pb: 0.012, As: 0.007, Cd: 0.0005, Cr: 0.032, Ni: 0.01,
          Hg: 0.0002, Cu: 0.018, Zn: 0.065, Fe: 0.2, Mn: 0.045
      }
  },
  {
      id: "PV096",
      location: "Sector 37 D, Gurugram",
      latitude: 28.4500,
      longitude: 76.9600,
      hmpi: 24.2,
      quality: "Safe",
      color: "#10b981",
      samples: 2,
      lastUpdated: "2025-01-05",
      metals: {
          Pb: 0.005, As: 0.004, Cd: 0.0002, Cr: 0.021, Ni: 0.005,
          Hg: 0.00011, Cu: 0.011, Zn: 0.048, Fe: 0.155, Mn: 0.028
      }
  },
  {
      id: "PV097",
      location: "Dundahera, Gurugram",
      latitude: 28.5200,
      longitude: 77.0700,
      hmpi: 59.5,
      quality: "Polluted",
      color: "#ef4444",
      samples: 4,
      lastUpdated: "2025-01-04",
      metals: {
          Pb: 0.024, As: 0.012, Cd: 0.001, Cr: 0.044, Ni: 0.017,
          Hg: 0.00038, Cu: 0.029, Zn: 0.088, Fe: 0.27, Mn: 0.068
      }
  },
  {
      id: "PV098",
      location: "Gurugram Bypass Road",
      latitude: 28.4800,
      longitude: 76.9900,
      hmpi: 42.5,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 3,
      lastUpdated: "2025-01-03",
      metals: {
          Pb: 0.017, As: 0.009, Cd: 0.0007, Cr: 0.037, Ni: 0.013,
          Hg: 0.00027, Cu: 0.022, Zn: 0.074, Fe: 0.235, Mn: 0.054
      }
  },
  {
      id: "PV099",
      location: "Palam Vihar Extension, Gurugram",
      latitude: 28.5300,
      longitude: 77.0400,
      hmpi: 38.0,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 4,
      lastUpdated: "2025-01-02",
      metals: {
          Pb: 0.015, As: 0.008, Cd: 0.0006, Cr: 0.035, Ni: 0.012,
          Hg: 0.00025, Cu: 0.02, Zn: 0.07, Fe: 0.22, Mn: 0.05
      }
  },
  {
      id: "PV100",
      location: "Southern Peripheral Road, Gurugram",
      latitude: 28.4000,
      longitude: 77.1200,
      hmpi: 27.0,
      quality: "Safe",
      color: "#10b981",
      samples: 3,
      lastUpdated: "2025-01-01",
      metals: {
          Pb: 0.007, As: 0.005, Cd: 0.0003, Cr: 0.024, Ni: 0.007,
          Hg: 0.00014, Cu: 0.014, Zn: 0.052, Fe: 0.17, Mn: 0.032
      }
  },
  {
      id: "PV101",
      location: "Basai Road, Gurugram",
      latitude: 28.4850,
      longitude: 76.9800,
      hmpi: 54.5,
      quality: "Polluted",
      color: "#ef4444",
      samples: 4,
      lastUpdated: "2024-12-31",
      metals: {
          Pb: 0.023, As: 0.012, Cd: 0.001, Cr: 0.043, Ni: 0.017,
          Hg: 0.00037, Cu: 0.028, Zn: 0.087, Fe: 0.27, Mn: 0.067
      }
  },
  {
      id: "PV102",
      location: "Sector 57, Gurugram",
      latitude: 28.4200,
      longitude: 77.1050,
      hmpi: 31.9,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 2,
      lastUpdated: "2024-12-30",
      metals: {
          Pb: 0.01, As: 0.006, Cd: 0.0004, Cr: 0.03, Ni: 0.008,
          Hg: 0.00018, Cu: 0.016, Zn: 0.06, Fe: 0.19, Mn: 0.04
      }
  },
  {
      id: "PV103",
      location: "Sector 34, Gurugram",
      latitude: 28.4350,
      longitude: 77.0400,
      hmpi: 47.7,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 4,
      lastUpdated: "2024-12-29",
      metals: {
          Pb: 0.02, As: 0.01, Cd: 0.0008, Cr: 0.04, Ni: 0.015,
          Hg: 0.0003, Cu: 0.025, Zn: 0.08, Fe: 0.25, Mn: 0.06
      }
  },
  {
      id: "PV104",
      location: "Sector 10, Gurugram",
      latitude: 28.4600,
      longitude: 77.0100,
      hmpi: 37.8,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 3,
      lastUpdated: "2024-12-28",
      metals: {
          Pb: 0.014, As: 0.007, Cd: 0.0006, Cr: 0.034, Ni: 0.012,
          Hg: 0.00024, Cu: 0.02, Zn: 0.068, Fe: 0.21, Mn: 0.048
      }
  },
  {
      id: "PV105",
      location: "Kasan Village, Gurugram",
      latitude: 28.3700,
      longitude: 76.9500,
      hmpi: 65.5,
      quality: "Polluted",
      color: "#ef4444",
      samples: 5,
      lastUpdated: "2024-12-27",
      metals: {
          Pb: 0.026, As: 0.013, Cd: 0.0011, Cr: 0.046, Ni: 0.019,
          Hg: 0.00042, Cu: 0.032, Zn: 0.095, Fe: 0.29, Mn: 0.075
      }
  },
  {
      id: "PV106",
      location: "Sushant Lok 1, Gurugram",
      latitude: 28.4700,
      longitude: 77.0800,
      hmpi: 30.8,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 3,
      lastUpdated: "2024-12-26",
      metals: {
          Pb: 0.01, As: 0.006, Cd: 0.0004, Cr: 0.03, Ni: 0.008,
          Hg: 0.00018, Cu: 0.016, Zn: 0.06, Fe: 0.19, Mn: 0.04
      }
  },
  {
      id: "PV107",
      location: "Sector 83, Gurugram",
      latitude: 28.3800,
      longitude: 76.9700,
      hmpi: 25.8,
      quality: "Safe",
      color: "#10b981",
      samples: 2,
      lastUpdated: "2024-12-25",
      metals: {
          Pb: 0.006, As: 0.004, Cd: 0.0002, Cr: 0.022, Ni: 0.006,
          Hg: 0.00012, Cu: 0.012, Zn: 0.05, Fe: 0.16, Mn: 0.03
      }
  },
  {
      id: "PV108",
      location: "Bhiwadi Industrial Area",
      latitude: 28.2100,
      longitude: 76.8800,
      hmpi: 88.0,
      quality: "Critical",
      color: "#dc2626",
      samples: 6,
      lastUpdated: "2024-12-24",
      metals: {
          Pb: 0.032, As: 0.016, Cd: 0.0016, Cr: 0.06, Ni: 0.028,
          Hg: 0.00065, Cu: 0.045, Zn: 0.13, Fe: 0.38, Mn: 0.1
      }
  },
  {
      id: "PV109",
      location: "IMT Manesar",
      latitude: 28.3800,
      longitude: 76.9200,
      hmpi: 75.0,
      quality: "Critical",
      color: "#dc2626",
      samples: 5,
      lastUpdated: "2024-12-23",
      metals: {
          Pb: 0.028, As: 0.014, Cd: 0.0013, Cr: 0.05, Ni: 0.022,
          Hg: 0.0005, Cu: 0.035, Zn: 0.1, Fe: 0.3, Mn: 0.08
      }
  },
  {
      id: "PV110",
      location: "Palam Vihar, Gurugram",
      latitude: 28.5350,
      longitude: 77.0500,
      hmpi: 36.1,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 4,
      lastUpdated: "2024-12-22",
      metals: {
          Pb: 0.013, As: 0.008, Cd: 0.0005, Cr: 0.033, Ni: 0.011,
          Hg: 0.00022, Cu: 0.019, Zn: 0.062, Fe: 0.195, Mn: 0.042
      }
  },
  // --- NOIDA, GHAZIABAD, FARIDABAD (UP & Haryana NCR) - PV111 to PV150 ---
  {
      id: "PV111",
      location: "Sector 62, Noida",
      latitude: 28.6200,
      longitude: 77.3700,
      hmpi: 51.2,
      quality: "Polluted",
      color: "#ef4444",
      samples: 5,
      lastUpdated: "2025-01-20",
      metals: {
          Pb: 0.022, As: 0.011, Cd: 0.0009, Cr: 0.042, Ni: 0.016,
          Hg: 0.00035, Cu: 0.028, Zn: 0.085, Fe: 0.26, Mn: 0.065
      }
  },
  {
      id: "PV112",
      location: "Greater Noida (Knowledge Park)",
      latitude: 28.4700,
      longitude: 77.5000,
      hmpi: 39.9,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 4,
      lastUpdated: "2025-01-19",
      metals: {
          Pb: 0.015, As: 0.008, Cd: 0.0006, Cr: 0.035, Ni: 0.012,
          Hg: 0.00025, Cu: 0.02, Zn: 0.07, Fe: 0.22, Mn: 0.05
      }
  },
  {
      id: "PV113",
      location: "Sector 18, Noida (Commercial Hub)",
      latitude: 28.5700,
      longitude: 77.3200,
      hmpi: 46.9,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 6,
      lastUpdated: "2025-01-18",
      metals: {
          Pb: 0.019, As: 0.009, Cd: 0.0008, Cr: 0.039, Ni: 0.014,
          Hg: 0.00029, Cu: 0.023, Zn: 0.078, Fe: 0.245, Mn: 0.058
      }
  },
  {
      id: "PV114",
      location: "Sahibabad Industrial Area, Ghaziabad",
      latitude: 28.6700,
      longitude: 77.3400,
      hmpi: 80.5,
      quality: "Critical",
      color: "#dc2626",
      samples: 5,
      lastUpdated: "2025-01-17",
      metals: {
          Pb: 0.029, As: 0.014, Cd: 0.0013, Cr: 0.052, Ni: 0.023,
          Hg: 0.00052, Cu: 0.036, Zn: 0.11, Fe: 0.32, Mn: 0.082
      }
  },
  {
      id: "PV115",
      location: "Kondli Industrial Area (East Delhi Border)",
      latitude: 28.6100,
      longitude: 77.3150,
      hmpi: 71.5,
      quality: "Polluted",
      color: "#ef4444",
      samples: 4,
      lastUpdated: "2025-01-16",
      metals: {
          Pb: 0.027, As: 0.013, Cd: 0.0012, Cr: 0.048, Ni: 0.02,
          Hg: 0.00045, Cu: 0.033, Zn: 0.098, Fe: 0.295, Mn: 0.078
      }
  },
  {
      id: "PV116",
      location: "Sector 15, Faridabad",
      latitude: 28.4000,
      longitude: 77.3100,
      hmpi: 42.0,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 3,
      lastUpdated: "2025-01-15",
      metals: {
          Pb: 0.016, As: 0.008, Cd: 0.0007, Cr: 0.036, Ni: 0.013,
          Hg: 0.00026, Cu: 0.021, Zn: 0.072, Fe: 0.23, Mn: 0.053
      }
  },
  {
      id: "PV117",
      location: "Indirapuram, Ghaziabad",
      latitude: 28.6400,
      longitude: 77.3500,
      hmpi: 35.8,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 4,
      lastUpdated: "2025-01-14",
      metals: {
          Pb: 0.012, As: 0.007, Cd: 0.0005, Cr: 0.032, Ni: 0.01,
          Hg: 0.0002, Cu: 0.018, Zn: 0.065, Fe: 0.2, Mn: 0.045
      }
  },
  {
      id: "PV118",
      location: "Badarpur Border (Delhi-Faridabad)",
      latitude: 28.5100,
      longitude: 77.3000,
      hmpi: 64.0,
      quality: "Polluted",
      color: "#ef4444",
      samples: 5,
      lastUpdated: "2025-01-13",
      metals: {
          Pb: 0.025, As: 0.013, Cd: 0.0011, Cr: 0.046, Ni: 0.019,
          Hg: 0.00042, Cu: 0.032, Zn: 0.095, Fe: 0.29, Mn: 0.075
      }
  },
  {
      id: "PV119",
      location: "Sector 12, Noida",
      latitude: 28.5900,
      longitude: 77.3400,
      hmpi: 31.0,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 3,
      lastUpdated: "2025-01-12",
      metals: {
          Pb: 0.01, As: 0.006, Cd: 0.0004, Cr: 0.03, Ni: 0.008,
          Hg: 0.00018, Cu: 0.016, Zn: 0.06, Fe: 0.19, Mn: 0.04
      }
  },
  {
      id: "PV120",
      location: "Surajpur Industrial Area, Greater Noida",
      latitude: 28.5200,
      longitude: 77.4600,
      hmpi: 83.5,
      quality: "Critical",
      color: "#dc2626",
      samples: 6,
      lastUpdated: "2025-01-11",
      metals: {
          Pb: 0.03, As: 0.015, Cd: 0.0015, Cr: 0.055, Ni: 0.025,
          Hg: 0.0006, Cu: 0.04, Zn: 0.12, Fe: 0.35, Mn: 0.09
      }
  },
  {
      id: "PV121",
      location: "Karkardooma (East Delhi)",
      latitude: 28.6400,
      longitude: 77.3100,
      hmpi: 50.5,
      quality: "Polluted",
      color: "#ef4444",
      samples: 4,
      lastUpdated: "2025-01-10",
      metals: {
          Pb: 0.022, As: 0.011, Cd: 0.0009, Cr: 0.042, Ni: 0.016,
          Hg: 0.00035, Cu: 0.028, Zn: 0.085, Fe: 0.26, Mn: 0.065
      }
  },
  {
      id: "PV122",
      location: "Sector 2, Noida",
      latitude: 28.5850,
      longitude: 77.3100,
      hmpi: 44.5,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 3,
      lastUpdated: "2025-01-09",
      metals: {
          Pb: 0.017, As: 0.009, Cd: 0.0007, Cr: 0.037, Ni: 0.013,
          Hg: 0.00027, Cu: 0.022, Zn: 0.074, Fe: 0.235, Mn: 0.054
      }
  },
  {
      id: "PV123",
      location: "Nehru Place",
      latitude: 28.5500,
      longitude: 77.2500,
      hmpi: 56.5,
      quality: "Polluted",
      color: "#ef4444",
      samples: 5,
      lastUpdated: "2025-01-08",
      metals: {
          Pb: 0.023, As: 0.012, Cd: 0.001, Cr: 0.043, Ni: 0.017,
          Hg: 0.00037, Cu: 0.028, Zn: 0.087, Fe: 0.27, Mn: 0.067
      }
  },
  {
      id: "PV124",
      location: "Tughlakabad Industrial Area",
      latitude: 28.5200,
      longitude: 77.2700,
      hmpi: 74.0,
      quality: "Polluted",
      color: "#ef4444",
      samples: 4,
      lastUpdated: "2025-01-07",
      metals: {
          Pb: 0.027, As: 0.013, Cd: 0.0012, Cr: 0.048, Ni: 0.02,
          Hg: 0.00045, Cu: 0.033, Zn: 0.098, Fe: 0.295, Mn: 0.078
      }
  },
  {
      id: "PV125",
      location: "Vaishali, Ghaziabad",
      latitude: 28.6400,
      longitude: 77.3400,
      hmpi: 38.5,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 3,
      lastUpdated: "2025-01-06",
      metals: {
          Pb: 0.015, As: 0.008, Cd: 0.0006, Cr: 0.035, Ni: 0.012,
          Hg: 0.00025, Cu: 0.02, Zn: 0.07, Fe: 0.22, Mn: 0.05
      }
  },
  {
      id: "PV126",
      location: "Ballabgarh Industrial Area, Faridabad",
      latitude: 28.3300,
      longitude: 77.3200,
      hmpi: 77.8,
      quality: "Critical",
      color: "#dc2626",
      samples: 5,
      lastUpdated: "2025-01-05",
      metals: {
          Pb: 0.029, As: 0.014, Cd: 0.0013, Cr: 0.052, Ni: 0.023,
          Hg: 0.00052, Cu: 0.036, Zn: 0.11, Fe: 0.32, Mn: 0.082
      }
  },
  {
      id: "PV127",
      location: "Sector 100, Noida",
      latitude: 28.5300,
      longitude: 77.3700,
      hmpi: 32.2,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 2,
      lastUpdated: "2025-01-04",
      metals: {
          Pb: 0.011, As: 0.006, Cd: 0.0004, Cr: 0.031, Ni: 0.009,
          Hg: 0.00019, Cu: 0.017, Zn: 0.062, Fe: 0.195, Mn: 0.041
      }
  },
  {
      id: "PV128",
      location: "Sector 21 A, Faridabad",
      latitude: 28.4500,
      longitude: 77.3000,
      hmpi: 29.8,
      quality: "Safe",
      color: "#10b981",
      samples: 3,
      lastUpdated: "2025-01-03",
      metals: {
          Pb: 0.008, As: 0.005, Cd: 0.0003, Cr: 0.025, Ni: 0.007,
          Hg: 0.00015, Cu: 0.015, Zn: 0.055, Fe: 0.18, Mn: 0.035
      }
  },
  {
      id: "PV129",
      location: "Mohan Nagar, Ghaziabad",
      latitude: 28.6750,
      longitude: 77.3900,
      hmpi: 67.5,
      quality: "Polluted",
      color: "#ef4444",
      samples: 5,
      lastUpdated: "2025-01-02",
      metals: {
          Pb: 0.026, As: 0.013, Cd: 0.0011, Cr: 0.046, Ni: 0.019,
          Hg: 0.00042, Cu: 0.032, Zn: 0.095, Fe: 0.29, Mn: 0.075
      }
  },
  {
      id: "PV130",
      location: "Khora Colony (UP Border)",
      latitude: 28.6300,
      longitude: 77.3300,
      hmpi: 73.5,
      quality: "Polluted",
      color: "#ef4444",
      samples: 6,
      lastUpdated: "2025-01-01",
      metals: {
          Pb: 0.027, As: 0.014, Cd: 0.0012, Cr: 0.048, Ni: 0.02,
          Hg: 0.00045, Cu: 0.033, Zn: 0.098, Fe: 0.295, Mn: 0.078
      }
  },
  {
      id: "PV131",
      location: "Sanjay Colony, Faridabad",
      latitude: 28.3700,
      longitude: 77.2800,
      hmpi: 81.0,
      quality: "Critical",
      color: "#dc2626",
      samples: 4,
      lastUpdated: "2024-12-31",
      metals: {
          Pb: 0.03, As: 0.015, Cd: 0.0015, Cr: 0.055, Ni: 0.025,
          Hg: 0.0006, Cu: 0.04, Zn: 0.12, Fe: 0.35, Mn: 0.09
      }
  },
  {
      id: "PV132",
      location: "Sector 39, Noida",
      latitude: 28.5600,
      longitude: 77.3400,
      hmpi: 34.5,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 3,
      lastUpdated: "2024-12-30",
      metals: {
          Pb: 0.012, As: 0.007, Cd: 0.0005, Cr: 0.032, Ni: 0.01,
          Hg: 0.0002, Cu: 0.018, Zn: 0.065, Fe: 0.2, Mn: 0.045
      }
  },
  {
      id: "PV133",
      location: "Crossing Republik, Ghaziabad",
      latitude: 28.6500,
      longitude: 77.4200,
      hmpi: 40.0,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 4,
      lastUpdated: "2024-12-29",
      metals: {
          Pb: 0.016, As: 0.008, Cd: 0.0007, Cr: 0.036, Ni: 0.013,
          Hg: 0.00026, Cu: 0.021, Zn: 0.072, Fe: 0.23, Mn: 0.053
      }
  },
  {
      id: "PV134",
      location: "Neelam Chowk, Faridabad",
      latitude: 28.4000,
      longitude: 77.3000,
      hmpi: 58.0,
      quality: "Polluted",
      color: "#ef4444",
      samples: 5,
      lastUpdated: "2024-12-28",
      metals: {
          Pb: 0.024, As: 0.012, Cd: 0.001, Cr: 0.044, Ni: 0.017,
          Hg: 0.00038, Cu: 0.029, Zn: 0.088, Fe: 0.27, Mn: 0.068
      }
  },
  {
      id: "PV135",
      location: "Sector 135, Noida",
      latitude: 28.5000,
      longitude: 77.4100,
      hmpi: 26.0,
      quality: "Safe",
      color: "#10b981",
      samples: 2,
      lastUpdated: "2024-12-27",
      metals: {
          Pb: 0.006, As: 0.004, Cd: 0.0002, Cr: 0.022, Ni: 0.006,
          Hg: 0.00012, Cu: 0.012, Zn: 0.05, Fe: 0.16, Mn: 0.03
      }
  },
  {
      id: "PV136",
      location: "Ghaziabad Railway Station",
      latitude: 28.6600,
      longitude: 77.4300,
      hmpi: 60.8,
      quality: "Polluted",
      color: "#ef4444",
      samples: 4,
      lastUpdated: "2024-12-26",
      metals: {
          Pb: 0.024, As: 0.012, Cd: 0.001, Cr: 0.044, Ni: 0.017,
          Hg: 0.00038, Cu: 0.029, Zn: 0.088, Fe: 0.27, Mn: 0.068
      }
  },
  {
      id: "PV137",
      location: "Sectors 8 & 9, Faridabad",
      latitude: 28.4300,
      longitude: 77.3100,
      hmpi: 37.2,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 3,
      lastUpdated: "2024-12-25",
      metals: {
          Pb: 0.014, As: 0.007, Cd: 0.0006, Cr: 0.034, Ni: 0.012,
          Hg: 0.00024, Cu: 0.02, Zn: 0.068, Fe: 0.21, Mn: 0.048
      }
  },
  {
      id: "PV138",
      location: "Noida-Greater Noida Expressway",
      latitude: 28.5300,
      longitude: 77.4000,
      hmpi: 49.0,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 5,
      lastUpdated: "2024-12-24",
      metals: {
          Pb: 0.021, As: 0.01, Cd: 0.0009, Cr: 0.04, Ni: 0.016,
          Hg: 0.0003, Cu: 0.027, Zn: 0.082, Fe: 0.26, Mn: 0.063
      }
  },
  {
      id: "PV139",
      location: "Palwal Industrial Area (Extended NCR)",
      latitude: 28.1400,
      longitude: 77.3400,
      hmpi: 84.5,
      quality: "Critical",
      color: "#dc2626",
      samples: 4,
      lastUpdated: "2024-12-23",
      metals: {
          Pb: 0.031, As: 0.016, Cd: 0.0016, Cr: 0.058, Ni: 0.027,
          Hg: 0.00063, Cu: 0.044, Zn: 0.125, Fe: 0.37, Mn: 0.098
      }
  },
  {
      id: "PV140",
      location: "Dadri, Greater Noida",
      latitude: 28.5500,
      longitude: 77.5400,
      hmpi: 61.5,
      quality: "Polluted",
      color: "#ef4444",
      samples: 3,
      lastUpdated: "2024-12-22",
      metals: {
          Pb: 0.025, As: 0.013, Cd: 0.0011, Cr: 0.046, Ni: 0.019,
          Hg: 0.00042, Cu: 0.032, Zn: 0.095, Fe: 0.29, Mn: 0.075
      }
  },
  {
      id: "PV141",
      location: "Surajkund, Faridabad",
      latitude: 28.4800,
      longitude: 77.2900,
      hmpi: 30.0,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 2,
      lastUpdated: "2024-12-21",
      metals: {
          Pb: 0.009, As: 0.006, Cd: 0.0004, Cr: 0.028, Ni: 0.008,
          Hg: 0.00017, Cu: 0.017, Zn: 0.058, Fe: 0.185, Mn: 0.038
      }
  },
  {
      id: "PV142",
      location: "Loni, Ghaziabad",
      latitude: 28.7400,
      longitude: 77.3200,
      hmpi: 68.0,
      quality: "Polluted",
      color: "#ef4444",
      samples: 4,
      lastUpdated: "2024-12-20",
      metals: {
          Pb: 0.026, As: 0.013, Cd: 0.0011, Cr: 0.046, Ni: 0.019,
          Hg: 0.00042, Cu: 0.032, Zn: 0.095, Fe: 0.29, Mn: 0.075
      }
  },
  {
      id: "PV143",
      location: "Sector 137, Noida",
      latitude: 28.5000,
      longitude: 77.4200,
      hmpi: 27.9,
      quality: "Safe",
      color: "#10b981",
      samples: 3,
      lastUpdated: "2024-12-19",
      metals: {
          Pb: 0.007, As: 0.005, Cd: 0.0003, Cr: 0.024, Ni: 0.007,
          Hg: 0.00014, Cu: 0.014, Zn: 0.052, Fe: 0.17, Mn: 0.032
      }
  },
  {
      id: "PV144",
      location: "Faridabad Bypass Road",
      latitude: 28.3800,
      longitude: 77.2600,
      hmpi: 53.0,
      quality: "Polluted",
      color: "#ef4444",
      samples: 5,
      lastUpdated: "2024-12-18",
      metals: {
          Pb: 0.022, As: 0.011, Cd: 0.0009, Cr: 0.042, Ni: 0.016,
          Hg: 0.00035, Cu: 0.028, Zn: 0.085, Fe: 0.26, Mn: 0.065
      }
  },
  {
      id: "PV145",
      location: "Dasna, Ghaziabad",
      latitude: 28.6500,
      longitude: 77.4900,
      hmpi: 40.8,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 4,
      lastUpdated: "2024-12-17",
      metals: {
          Pb: 0.016, As: 0.008, Cd: 0.0007, Cr: 0.036, Ni: 0.013,
          Hg: 0.00026, Cu: 0.021, Zn: 0.072, Fe: 0.23, Mn: 0.053
      }
  },
  {
      id: "PV146",
      location: "Sector 70, Noida",
      latitude: 28.6000,
      longitude: 77.3800,
      hmpi: 45.0,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 3,
      lastUpdated: "2024-12-16",
      metals: {
          Pb: 0.018, As: 0.009, Cd: 0.0007, Cr: 0.038, Ni: 0.014,
          Hg: 0.00028, Cu: 0.022, Zn: 0.075, Fe: 0.24, Mn: 0.055
      }
  },
  {
      id: "PV147",
      location: "NIT Area, Faridabad",
      latitude: 28.3800,
      longitude: 77.3000,
      hmpi: 59.9,
      quality: "Polluted",
      color: "#ef4444",
      samples: 5,
      lastUpdated: "2024-12-15",
      metals: {
          Pb: 0.024, As: 0.012, Cd: 0.001, Cr: 0.044, Ni: 0.017,
          Hg: 0.00038, Cu: 0.029, Zn: 0.088, Fe: 0.27, Mn: 0.068
      }
  },
  {
      id: "PV148",
      location: "Vasundhara, Ghaziabad",
      latitude: 28.6600,
      longitude: 77.3700,
      hmpi: 33.0,
      quality: "Moderate",
      color: "#f59e0b",
      samples: 2,
      lastUpdated: "2024-12-14",
      metals: {
          Pb: 0.011, As: 0.006, Cd: 0.0004, Cr: 0.031, Ni: 0.009,
          Hg: 0.00019, Cu: 0.017, Zn: 0.062, Fe: 0.195, Mn: 0.041
      }
  },
  {
      id: "PV149",
      location: "Yamuna Expressway (Near GNoida)",
      latitude: 28.4800,
      longitude: 77.5200,
      hmpi: 23.5,
      quality: "Safe",
      color: "#10b981",
      samples: 3,
      lastUpdated: "2024-12-13",
      metals: {
          Pb: 0.004, As: 0.003, Cd: 0.00015, Cr: 0.02, Ni: 0.004,
          Hg: 0.0001, Cu: 0.01, Zn: 0.045, Fe: 0.15, Mn: 0.025
      }
  },
  {
      id: "PV150",
      location: "Sohna Industrial Area (Extended NCR)",
      latitude: 28.2500,
      longitude: 77.0600,
      hmpi: 76.0,
      quality: "Critical",
      color: "#dc2626",
      samples: 5,
      lastUpdated: "2024-12-12",
      metals: {
          Pb: 0.028, As: 0.014, Cd: 0.0013, Cr: 0.05, Ni: 0.022,
          Hg: 0.0005, Cu: 0.035, Zn: 0.1, Fe: 0.3, Mn: 0.08
      }
  }
];

// Color mapping for HMPI quality levels (Unchanged)
export const qualityColors = {
  "Safe": "#10b981",      // Green (HMPI < 25)
  "Moderate": "#f59e0b",  // Orange (25 <= HMPI < 50)
  "Polluted": "#ef4444",  // Red (50 <= HMPI < 75)
  "Critical": "#dc2626"   // Dark Red (HMPI >= 75)
};

// Get color based on HMPI value (Unchanged)
export const getHMPIColor = (hmpi) => {
  if (hmpi < 25) return qualityColors.Safe;
  if (hmpi < 50) return qualityColors.Moderate;
  if (hmpi < 75) return qualityColors.Polluted;
  return qualityColors.Critical;
};

// Get quality category based on HMPI value (Unchanged)
export const getQualityCategory = (hmpi) => {
  if (hmpi < 25) return "Safe";
  if (hmpi < 50) return "Moderate";
  if (hmpi < 75) return "Polluted";
  return "Critical";
};