import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">About Us</h1>
          
          <div className="prose prose-purple max-w-none">
            <p className="text-lg">Welcome to Tattoo Removal Cost Calculator, your comprehensive resource for understanding and estimating tattoo removal costs.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
            <p>We aim to provide accurate, transparent information about tattoo removal costs, helping you make informed decisions about your tattoo removal journey.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Why Choose Us?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Accurate cost estimation based on multiple factors</li>
              <li>Up-to-date information about removal technologies</li>
              <li>User-friendly calculator interface</li>
              <li>Comprehensive educational resources</li>
              <li>Expert insights about tattoo removal processes</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Our Expertise</h2>
            <p>Our team consists of tattoo removal specialists and healthcare professionals who understand the complexities of tattoo removal procedures. We stay current with the latest removal technologies and pricing trends to provide you with accurate estimates.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Educational Focus</h2>
            <p>Beyond calculations, we're committed to helping you understand all aspects of tattoo removal, including different removal methods, factors affecting success rates, and what to expect during the process.</p>
          </div>
        </div>
      </div>
    </div>
  );
}