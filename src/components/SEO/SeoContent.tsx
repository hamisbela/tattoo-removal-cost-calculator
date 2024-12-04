import React from 'react';
import { Eraser, Clock, DollarSign, Zap } from 'lucide-react';
import FeatureCard from './FeatureCard';
import FaqSection from './FaqSection';

export default function SeoContent() {
  const features = [
    {
      icon: Eraser,
      title: "Accurate Cost Estimation",
      description: "Calculate tattoo removal costs based on size, colors, and location."
    },
    {
      icon: Clock,
      title: "Treatment Timeline",
      description: "Understand the expected duration of your tattoo removal journey."
    },
    {
      icon: DollarSign,
      title: "Price Factors",
      description: "Learn about all factors that influence tattoo removal pricing."
    },
    {
      icon: Zap,
      title: "Treatment Options",
      description: "Explore different tattoo removal methods and their costs."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Understanding Tattoo Removal Costs</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Our Tattoo Removal Cost Calculator helps you estimate the investment needed for your tattoo removal journey, considering factors like size, colors, and location.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>

      <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl p-8 text-white mb-12">
        <h3 className="text-2xl font-bold mb-4">Benefits of Professional Tattoo Removal</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-2">Safe Treatment</h4>
            <ul className="space-y-2">
              <li>• FDA-approved procedures</li>
              <li>• Experienced professionals</li>
              <li>• Modern equipment</li>
              <li>• Sterile environment</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Effective Results</h4>
            <ul className="space-y-2">
              <li>• Minimal scarring</li>
              <li>• Targeted treatment</li>
              <li>• Progress tracking</li>
              <li>• Aftercare support</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="prose prose-purple max-w-none mb-12">
        <h2>Tattoo Removal Cost Calculator: Your Guide to Treatment Expenses</h2>
        <p>
          Understanding the cost of tattoo removal is crucial for making an informed decision about your treatment. Our tattoo removal cost calculator helps you estimate the investment needed based on various factors that influence the total price.
        </p>
        
        <h3>Factors Affecting Tattoo Removal Cost</h3>
        <ul>
          <li>Tattoo size and area coverage</li>
          <li>Number and types of colors used</li>
          <li>Location on the body</li>
          <li>Age of the tattoo</li>
          <li>Skin type and tone</li>
          <li>Number of sessions required</li>
        </ul>

        <h3>Why Use Our Tattoo Removal Cost Calculator?</h3>
        <p>
          Our calculator provides accurate estimates based on current market rates and treatment requirements. It considers multiple variables to give you a realistic expectation of the total cost, helping you plan your budget accordingly.
        </p>
      </div>

      <FaqSection />
    </div>
  );
}