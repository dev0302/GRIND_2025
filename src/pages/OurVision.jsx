import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function OurVision() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/user');
  };

  const handleResearcherClick = () => {
    navigate('/login');
  };

  // Show toast notification on component mount
  useEffect(() => {
    const showToast = () => {
      const toast = document.createElement('div');
      toast.className = 'fixed top-20 right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-4 rounded-lg shadow-2xl z-50 transform transition-all duration-500 translate-x-full max-w-md';
      toast.innerHTML = `
        <div class="flex items-start space-x-3">
          <div class="flex-shrink-0">
            <svg class="w-6 h-6 text-purple-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
            </svg>
          </div>
          <div class="flex-1">
            <h4 class="font-semibold text-purple-100 mb-1">Our Comprehensive Vision</h4>
            <p class="text-sm text-purple-200 leading-relaxed">
              This platform represents our vision for a complete research ecosystem - not just a calculator, 
              but a comprehensive dashboard featuring data management, historical records, automated reporting, 
              interactive visualizations, and seamless collaboration tools for environmental researchers and policymakers.
            </p>
          </div>
          <button onclick="this.parentElement.parentElement.remove()" class="flex-shrink-0 text-purple-200 hover:text-white transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      `;
      document.body.appendChild(toast);
      
      setTimeout(() => {
        toast.classList.remove('translate-x-full');
      }, 100);
      
      // Auto-remove after 10 seconds
      setTimeout(() => {
        toast.classList.add('translate-x-full');
        setTimeout(() => {
          if (document.body.contains(toast)) {
            document.body.removeChild(toast);
          }
        }, 500);
      }, 10000);
    };

    // Show toast after a short delay
    const timer = setTimeout(showToast, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='w-full min-h-screen'>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full border border-blue-400/30">
                <span className="text-blue-400 font-semibold">🌍💡 Our Vision</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Making Research
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Effortless, Accurate & Impactful
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                At the heart of our initiative lies a simple yet powerful mission: to make research effortless, accurate, and impactful.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleGetStarted}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1"
              >
                Join Our Mission
              </button>
              <button 
                onClick={handleResearcherClick}
                className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                For Researchers
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Current Vision Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Current Vision
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              We envision a future where researchers, laboratories, and institutions across India can seamlessly upload their data files (.csv) and instantly access powerful tools that:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 p-8 rounded-xl border border-blue-700/50 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Simplify Complex Calculations</h3>
              <p className="text-gray-300">
                Automated analysis that transforms raw data into meaningful insights with advanced algorithms and scientific accuracy.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 p-8 rounded-xl border border-green-700/50 hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Generate Professional Reports</h3>
              <p className="text-gray-300">
                Create detailed professional reports and research papers with a single click, saving hours of manual work.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/50 to-violet-900/50 p-8 rounded-xl border border-purple-700/50 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Unified Data Platform</h3>
              <p className="text-gray-300">
                Bring all verified lab data together in one secure and transparent platform for comprehensive analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Larger Vision
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              But this is only the beginning. Our larger vision goes far beyond making research easier. By consolidating nationwide data into a single ecosystem, we aim to unlock new possibilities for science, industry, and society:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 p-6 rounded-xl border border-blue-700/50 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">🔹</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Nationwide Data Integration</h3>
                    <p className="text-gray-300">Building a unified database of heavy metal concentration and water quality data across India.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 p-6 rounded-xl border border-green-700/50 hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">🔹</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Heatmaps & Mapping Tools</h3>
                    <p className="text-gray-300">Visualizing contamination levels on interactive maps to help citizens, governments, and industries see the bigger picture.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-900/50 to-violet-900/50 p-6 rounded-xl border border-purple-700/50 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">🔹</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">AI-Powered Predictions</h3>
                    <p className="text-gray-300">Using machine learning models to forecast rising contamination levels based on climate, geography, and seasonal variations, enabling early detection and prevention.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-orange-900/50 to-red-900/50 p-6 rounded-xl border border-orange-700/50 hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">🔹</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Business & Industrial Applications</h3>
                    <p className="text-gray-300">Providing industries with high-quality datasets to guide them before setting up operations, ensuring compliance, sustainability, and safety.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-teal-900/50 to-cyan-900/50 p-6 rounded-xl border border-teal-700/50 hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">🔹</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Next-Generation Purifiers</h3>
                    <p className="text-gray-300">Empowering startups and manufacturers to design smart water purifiers that adapt purification methods based on real-time weather, local contamination, and AI insights.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-900/50 to-blue-900/50 p-6 rounded-xl border border-indigo-700/50 hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">🔹</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Startup & Innovation Support</h3>
                    <p className="text-gray-300">Creating a launchpad for innovators to build new solutions—whether it's in environmental monitoring, predictive tools, or consumer safety products—using our platform's data.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                More Than a Platform
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  A Movement
                </span>
              </h2>
              
              <div className="max-w-4xl mx-auto space-y-6">
                <p className="text-xl text-gray-300 leading-relaxed">
                  Our vision is not just about research. It is about empowering India with data, shaping future technologies, and ensuring that safe, clean water becomes a guaranteed right, not a luxury.
                </p>
                
                <p className="text-xl text-gray-300 leading-relaxed">
                  This is more than a platform—it is the beginning of a movement, where research meets innovation, and innovation meets impact.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Research</h3>
                <p className="text-gray-300">Making scientific research accessible and efficient</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
                <p className="text-gray-300">Driving technological advancement and creative solutions</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Impact</h3>
                <p className="text-gray-300">Creating meaningful change for society and environment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join Us in Building the Future
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Be part of the movement that's transforming how we understand and protect our water resources. Together, we can make safe, clean water a reality for all.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleGetStarted}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1"
            >
              Start Your Journey
            </button>
            <button 
              onClick={handleResearcherClick}
              className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
            >
              For Researchers
            </button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">🌍</div>
              <div className="text-gray-300">Nationwide Impact</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">💡</div>
              <div className="text-gray-300">Innovation Driven</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">🚀</div>
              <div className="text-gray-300">Future Ready</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurVision;
