import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
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
        <Route path="/register" element={<Register />} />
        <Route path="/login"element={<Login />} />
        <Route path="/reports"element={<Reports />} />
        <Route path="/userDashboard" element={<UserDashboard />} />
  <Route path="/researcherDashboard" element={<ResearcherDashboard />} />

      </Routes>
    </div>
  );
}

export default App;




