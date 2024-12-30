import React from 'react';
import { Activity, Heart, Microscope, Dna, TestTube } from 'lucide-react';

const services = [
  {
    icon: Activity,
    title: 'Hematology',
    description: 'Complete blood count, coagulation profiles, and specialized blood tests',
  },
  {
    icon: Heart,
    title: 'Biochemistry',
    description: 'Comprehensive metabolic panels, cardiac markers, and hormone testing',
  },
  {
    icon: Microscope,
    title: 'Microbiology',
    description: 'Culture and sensitivity testing, infection diagnostics',
  },
  {
    icon: Dna,
    title: 'Molecular Diagnostics',
    description: 'Genetic testing, RT-PCR, and advanced molecular analysis',
  },
  {
    icon: TestTube,
    title: 'Special Chemistry',
    description: 'Specialized tests for rare conditions and detailed analysis',
  },
];

export default function Services() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of diagnostic services using state-of-the-art
            technology and expert analysis.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <service.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}