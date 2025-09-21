import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import U_Home from "./pages/U_Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Reports from "./pages/Reports";
import UserDashboard from "./pages/userdashboard";
import ResearcherDashboard from "./pages/ResearcherDashboard"; // Researcher Dashboard
import FileUpload from "./pages/FileUpload"; // File Upload Page
import PreviousFiles from "./pages/PreviousFiles"; // Previous Files Page
import ResearcherReport from "./pages/ResearcherReport"; // Researcher Report
import HeatMap from "./pages/HeatMap"; // HMPI Heat Map

function App() {
  return (
    <div className="min-h-screen bg-richblack-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<U_Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/userDashboard" element={<UserDashboard />} />
        <Route path="/researcherDashboard" element={<ResearcherDashboard />} />
        <Route path="/fileUpload" element={<FileUpload />} />
        <Route path="/previousFiles" element={<PreviousFiles />} />
        <Route path="/researcherReport" element={<ResearcherReport />} />
        <Route path="/heatmap" element={<HeatMap />} />
      </Routes>
    </div>
  );
}

export default App;




