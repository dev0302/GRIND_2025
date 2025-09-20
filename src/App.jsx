import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import U_Home from "./pages/U_Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Reports from "./pages/Reports";
import UserDashboard from "./pages/userdashboard";
import ResearcherDashboard from "./pages/ResearcherDashboard"; // Researcher

function App() {
  return (
    <div className="min-h-screen bg-richblack-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
<<<<<<< HEAD
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/userDashboard" element={<UserDashboard />} />
  <Route path="/researcherDashboard" element={<ResearcherDashboard />} />

=======
        <Route path="/user" element={<U_Home />} />
>>>>>>> b1be11e805a9b8fe5baa44f5c2388c1e2df5016e
      </Routes>
    </div>
  );
}

export default App;




