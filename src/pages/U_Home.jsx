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
