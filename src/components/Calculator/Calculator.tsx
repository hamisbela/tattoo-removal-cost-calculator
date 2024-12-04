import React, { useState } from 'react';
import { Eraser, Ruler, Palette } from 'lucide-react';

interface TattooData {
  size: number;
  colors: string[];
  location: string;
  age: number;
}

export default function Calculator() {
  const [formData, setFormData] = useState<TattooData>({
    size: 0,
    colors: [],
    location: '',
    age: 0
  });

  const [cost, setCost] = useState<number | null>(null);

  const locations = [
    'Ankle',
    'Arm',
    'Back',
    'Chest',
    'Foot',
    'Hand',
    'Leg',
    'Neck',
    'Shoulder',
    'Wrist'
  ];

  const colors = [
    'Black',
    'Blue',
    'Red',
    'Green',
    'Yellow',
    'Purple',
    'Orange',
    'White'
  ];

  const calculateCost = () => {
    // Base cost per square inch
    const baseCost = 50;
    
    // Size multiplier
    const sizeCost = formData.size * baseCost;
    
    // Color multiplier (more colors = more sessions needed)
    const colorMultiplier = 1 + (formData.colors.length * 0.15);
    
    // Location difficulty multiplier
    const locationMultiplier = getLocationMultiplier(formData.location);
    
    // Age discount (older tattoos might be easier to remove)
    const ageDiscount = Math.max(0, 1 - (formData.age * 0.02));
    
    // Calculate total estimated cost
    const totalCost = sizeCost * colorMultiplier * locationMultiplier * ageDiscount;
    
    setCost(Math.round(totalCost));
  };

  const getLocationMultiplier = (location: string): number => {
    const multipliers: { [key: string]: number } = {
      'Ankle': 1.2,
      'Arm': 1.0,
      'Back': 1.1,
      'Chest': 1.2,
      'Foot': 1.3,
      'Hand': 1.4,
      'Leg': 1.1,
      'Neck': 1.5,
      'Shoulder': 1.0,
      'Wrist': 1.3
    };
    return multipliers[location] || 1.0;
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-center mb-6">
        <Eraser className="h-8 w-8 text-purple-600 mr-2" />
        <h2 className="text-2xl font-bold text-gray-800">Tattoo Removal Cost Calculator</h2>
      </div>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Tattoo Size (square inches)
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Ruler className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="number"
              value={formData.size}
              onChange={(e) => setFormData({...formData, size: parseFloat(e.target.value) || 0})}
              className="focus:ring-purple-500 focus:border-purple-500 block w-full pl-10 pr-12 sm:text-sm border-gray-300 rounded-md"
              placeholder="Enter size"
              min="0"
              step="0.5"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Colors Present
          </label>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {colors.map((color) => (
              <label key={color} className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={formData.colors.includes(color)}
                  onChange={(e) => {
                    const newColors = e.target.checked
                      ? [...formData.colors, color]
                      : formData.colors.filter(c => c !== color);
                    setFormData({...formData, colors: newColors});
                  }}
                  className="form-checkbox h-4 w-4 text-purple-600"
                />
                <span className="ml-2">{color}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Tattoo Location
          </label>
          <select
            value={formData.location}
            onChange={(e) => setFormData({...formData, location: e.target.value})}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md"
          >
            <option value="">Select location</option>
            {locations.map((location) => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Tattoo Age (years)
          </label>
          <input
            type="number"
            value={formData.age}
            onChange={(e) => setFormData({...formData, age: parseInt(e.target.value) || 0})}
            className="mt-1 focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm border-gray-300 rounded-md"
            min="0"
          />
        </div>

        <button
          onClick={calculateCost}
          className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-200"
        >
          Calculate Cost
        </button>

        {cost !== null && (
          <div className="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-200">
            <h3 className="text-lg font-semibold text-purple-900 mb-2">Estimated Cost</h3>
            <p className="text-2xl font-bold text-purple-600">
              ${cost.toLocaleString()}
            </p>
            <p className="text-sm text-gray-600 mt-2">
              *This is an estimate based on average prices. Actual costs may vary depending on the specific clinic and treatment plan.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}