

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { validateResearcherLogin, validateGeneralLogin } from "../data/sampleUsers";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accreditationId, setAccreditationId] = useState("");
  const [loginMethod, setLoginMethod] = useState("id");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate loading for better UX
    setTimeout(() => {
      let validationResult;

      // Check if it's a researcher login
      if (loginMethod === "id" || loginMethod === "certificate") {
        validationResult = validateResearcherLogin(email, accreditationId, loginMethod);
      } else {
        // General user login
        validationResult = validateGeneralLogin(email, password);
      }

      if (!validationResult.success) {
        alert(validationResult.message);
        setIsLoading(false);
      return;
    }

      // Store user data in localStorage
      const user = validationResult.user;
      localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem("role", user.role);

      // Navigate based on role
    if (user.role === "researcher") {
        navigate("/researcherDashboard");
    } else {
        navigate("/userDashboard");
    }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-16">
      <div className="flex min-h-screen">
        {/* Left Side - Branding */}
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-slate-800 via-blue-800 to-indigo-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-purple-900/20"></div>
          <div className="relative z-10 flex flex-col justify-start items-center text-white p-12 pt-20">
            <div className="text-center mb-12">
              <div className="w-24 h-24 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 backdrop-blur-lg rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-cyan-500/20">
                <img src="/logo.jpeg" alt="ToxiTrace Logo" className="h-16 w-16 rounded-full" />
              </div>
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-300 to-blue-200 bg-clip-text text-transparent">
                ToxiTrace
              </h1>
              <p className="text-xl text-slate-200 mb-8 font-light">
                Advanced Groundwater Quality Assessment
              </p>
            </div>
            
            <div className="text-center max-w-md">
              <blockquote className="text-lg italic leading-relaxed mb-6 text-slate-100 font-light">
                "Every drop of water tells a story. As researchers, we are the storytellers who decode the silent cries of our planet, transforming data into hope, and science into solutions for a healthier tomorrow."
              </blockquote>
              <div className="text-sm text-slate-300">
                <p className="font-medium text-cyan-200">- ToxiTrace Research Community</p>
                <p className="mt-2 text-slate-400">Join us in protecting our most precious resource</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <div className="lg:hidden w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/logo.jpeg" alt="ToxiTrace Logo" className="h-10 w-10 rounded-full" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">Lab Researcher Login</h2>
              <p className="text-gray-300">Sign in with your accreditation credentials</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Login Method Selection for Researchers */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Login Method (for Lab Researchers)
                </label>
                <div className="space-y-3">
                  <label className="flex items-center p-3 bg-white/5 backdrop-blur-lg border border-white/20 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                    <input
                      type="radio"
                      value="id"
                      checked={loginMethod === "id"}
                      onChange={(e) => setLoginMethod(e.target.value)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <div className="ml-3">
                      <span className="text-white font-medium">Accreditation ID</span>
                      <p className="text-sm text-gray-400">Enter your NABL/CPCB/SPCB Number</p>
                    </div>
                  </label>
                  
                  <label className="flex items-center p-3 bg-white/5 backdrop-blur-lg border border-white/20 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                    <input
                      type="radio"
                      value="certificate"
                      checked={loginMethod === "certificate"}
                      onChange={(e) => setLoginMethod(e.target.value)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <div className="ml-3">
                      <span className="text-white font-medium">Certificate Upload</span>
                      <p className="text-sm text-gray-400">Upload your accreditation certificate</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Dynamic Input based on login method */}
              {loginMethod === "id" ? (
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Accreditation ID
                  </label>
                  <input
                    type="text"
                    value={accreditationId}
                    onChange={(e) => setAccreditationId(e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your NABL/CPCB/SPCB Number"
                  />
                  <p className="text-xs text-gray-400 mt-1">Example: NABL-12345, CPCB-67890, SPCB-54321</p>
                </div>
              ) : (
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Upload Certificate
                  </label>
                  <div className="border-2 border-dashed border-white/30 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                    <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="text-gray-300 mt-2">Click to upload or drag and drop</p>
                    <p className="text-xs text-gray-400">PDF, PNG, JPG up to 10MB</p>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label className="ml-2 block text-sm text-gray-300">
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
                  Forgot password?
                </a>
              </div>

          <button
            type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-3 px-4 rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Signing in...
                  </div>
                ) : (
                  'Sign In'
                )}
          </button>
        </form>

            <div className="mt-8 text-center">
              <p className="text-gray-300">
                Don't have an account?{' '}
                <Link to="/register" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                  Sign up here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
