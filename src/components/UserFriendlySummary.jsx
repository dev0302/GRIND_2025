import React from 'react';

function UserFriendlySummary({ cityData }) {
  // Generic improvement data (example)
  const improvementData = {
    overallImprovement: 59.7, // Percentage improvement from first to last sample
    currentHmpi: 2.9,
    startingHmpi: 7.2,
    samplesCount: 5,
    timePeriod: '12 months',
    riskReduction: 'High to Low',
    keyImprovements: [
      'Lead levels reduced by 83%',
      'Arsenic concentrations down by 80%',
      'Overall HMPI improved by 60%',
      'Water quality upgraded from High Risk to Low Risk'
    ],
    recommendations: [
      'Continue current monitoring program',
      'Maintain water treatment systems',
      'Regular testing every 3 months',
      'Community awareness programs'
    ]
  };

  return (
    <div className="space-y-8">
      {/* Success Story Header */}
      <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-lg rounded-2xl p-8 border border-green-500/30">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">Success Story</h2>
          <p className="text-xl text-gray-300 mb-6">
            From High Risk to Low Risk - A remarkable water quality improvement journey
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">{improvementData.overallImprovement}%</div>
              <div className="text-gray-300">Overall Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">{improvementData.samplesCount}</div>
              <div className="text-gray-300">Monitoring Samples</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">{improvementData.timePeriod}</div>
              <div className="text-gray-300">Monitoring Period</div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Achievements */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
        <h3 className="text-2xl font-bold text-white mb-6">Key Achievements</h3>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-green-400">🎯 Major Improvements</h4>
            <ul className="space-y-3">
              {improvementData.keyImprovements.map((improvement, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">{improvement}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-400">📊 Risk Level Change</h4>
            <div className="bg-white/5 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-300">Starting Risk</span>
                <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-semibold">
                  High Risk (HMPI: {improvementData.startingHmpi})
                </span>
              </div>
              
              <div className="flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Current Risk</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                  Low Risk (HMPI: {improvementData.currentHmpi})
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What This Means for You */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
        <h3 className="text-2xl font-bold text-white mb-6">What This Means for You</h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Safe Water</h4>
            <p className="text-gray-300 text-sm">Your area's water quality has significantly improved and is now safe for consumption with basic treatment.</p>
          </div>
          
          <div className="bg-white/5 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Continuous Monitoring</h4>
            <p className="text-gray-300 text-sm">Regular testing ensures water quality remains safe and any issues are detected early.</p>
          </div>
          
          <div className="bg-white/5 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Community Impact</h4>
            <p className="text-gray-300 text-sm">This improvement benefits the entire community and sets an example for other areas.</p>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
        <h3 className="text-2xl font-bold text-white mb-6">Recommendations for Continued Success</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-green-400">✅ Continue These Practices</h4>
            <ul className="space-y-2">
              {improvementData.recommendations.map((recommendation, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">{recommendation}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-400">📈 Future Outlook</h4>
            <div className="bg-white/5 rounded-xl p-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">Expected continued improvement</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Regular monitoring every 3 months</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">Community awareness programs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <span className="text-gray-300">Sustainable water management</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/30 text-center">
        <h3 className="text-2xl font-bold text-white mb-4">Stay Informed About Your Water Quality</h3>
        <p className="text-gray-300 mb-6">
          Get regular updates about water quality in your area and learn how to protect your family's health.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1">
            Subscribe to Updates
          </button>
          <button className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserFriendlySummary;
