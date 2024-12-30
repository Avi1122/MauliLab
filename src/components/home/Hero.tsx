import React from 'react';
import { ArrowRight, Award, Clock, Home } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Precision Diagnostics for a Healthier You
            </h1>
            <p className="text-xl mb-8">
              Your trusted partner in accurate medical testing with state-of-the-art technology
              and expert healthcare professionals.
            </p>
            <div className="flex space-x-4">
              <a
                href="/book"
                className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold flex items-center hover:bg-gray-100"
              >
                Book a Test <ArrowRight className="ml-2" />
              </a>
              <a
                href="/packages"
                className="border-2 border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600"
              >
                View Packages
              </a>
            </div>
          </div>
          <div className="hidden md:grid grid-cols-2 gap-4">
            <div className="bg-blue-700 p-6 rounded-lg">
              <Award className="w-12 h-12 mb-4" />
              <h3 className="font-semibold mb-2">NABL Certified</h3>
              <p>Highest quality standards in diagnostic testing</p>
            </div>
            <div className="bg-blue-700 p-6 rounded-lg">
              <Clock className="w-12 h-12 mb-4" />
              <h3 className="font-semibold mb-2">Quick Results</h3>
              <p>Same-day reports for most tests</p>
            </div>
            <div className="bg-blue-700 p-6 rounded-lg">
              <Home className="w-12 h-12 mb-4" />
              <h3 className="font-semibold mb-2">Home Collection</h3>
              <p>Convenient sample collection at your doorstep</p>
            </div>
            <div className="bg-blue-700 p-6 rounded-lg">
              <Award className="w-12 h-12 mb-4" />
              <h3 className="font-semibold mb-2">Expert Team</h3>
              <p>Qualified pathologists and technicians</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}