import React from 'react';
import { Shield, Heart, Users, UserPlus } from 'lucide-react';

const packages = [
  {
    icon: Shield,
    name: 'Basic Health Checkup',
    price: '99',
    tests: ['Complete Blood Count', 'Liver Function', 'Kidney Function', 'Blood Sugar', 'Lipid Profile'],
  },
  {
    icon: Heart,
    name: 'Comprehensive Health',
    price: '199',
    tests: ['All Basic Tests', 'Thyroid Profile', 'Vitamin D', 'Vitamin B12', 'HbA1c'],
  },
  {
    icon: Users,
    name: 'Senior Citizen Package',
    price: '249',
    tests: ['All Comprehensive Tests', 'Bone Profile', 'Cardiac Risk Markers', 'PSA (Men)', 'Arthritis Profile'],
  },
  {
    icon: UserPlus,
    name: 'Women\'s Health',
    price: '179',
    tests: ['Complete Blood Count', 'Thyroid Profile', 'Vitamin D', 'Iron Studies', 'Calcium'],
  },
];

export default function Packages() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Health Packages</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our carefully designed health packages for comprehensive wellness screening.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-blue-600 p-4 text-white text-center">
                <pkg.icon className="w-12 h-12 mx-auto mb-2" />
                <h3 className="text-xl font-semibold">{pkg.name}</h3>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold">${pkg.price}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {pkg.tests.map((test, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      {test}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}