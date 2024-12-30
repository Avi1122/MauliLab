import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/home/Hero';
import Services from './components/home/Services';
import Packages from './components/home/Packages';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Services />
        <Packages />
      </main>
    </div>
  );
}

export default App;