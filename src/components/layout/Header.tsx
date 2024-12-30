import React from 'react';
import { Phone, Mail, Clock, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm border-b">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={16} className="text-blue-600" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={16} className="text-blue-600" />
              <span>info@precisionlab.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock size={16} className="text-blue-600" />
              <span>Mon-Sat: 7:00 AM - 9:00 PM</span>
            </div>
          </div>
          <div className="flex space-x-4">
            <a href="/patient-portal" className="hover:text-blue-600">Patient Portal</a>
            <a href="/contact" className="hover:text-blue-600">Contact</a>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-blue-600">PrecisionLab</div>
          <div className="hidden md:flex space-x-6">
            <a href="/" className="hover:text-blue-600">Home</a>
            <a href="/services" className="hover:text-blue-600">Services</a>
            <a href="/packages" className="hover:text-blue-600">Health Packages</a>
            <a href="/about" className="hover:text-blue-600">About Us</a>
            <a href="/book" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Book Test
            </a>
          </div>
          <button className="md:hidden">
            <Menu size={24} />
          </button>
        </nav>
      </div>
    </header>
  );
}