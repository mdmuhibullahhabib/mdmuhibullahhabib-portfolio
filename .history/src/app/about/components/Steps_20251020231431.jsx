// components/SoftwareBuildSteps.jsx
import React from 'react';

const steps = [
  {
    icon: '✨', // Placeholder icon, replace with actual SVG/component if needed
    title: '01. Discover & Align',
    description: 'Clarify goals, constraints, and success metrics. Map user journeys and edge cases to define a clear problem statement.',
  },
  {
    icon: '📝', // Placeholder icon
    title: '02. Design & Plan',
    description: 'Sketch wireframes and plan architecture: data models, API contracts, and state strategy for scalable, maintainable code.',
  },
  {
    icon: '🛠️', // Placeholder icon
    title: '03. Build & Test',
    description: 'Implement modular features with TypeScript where possible, add accessibility, and cover with unit/integration tests.',
  },
  {
    icon: '🚀', // Placeholder icon
    title: '04. Ship, Measure, Iterate',
    description: 'Deploy via CI/CD, monitor performance and errors, gather feedback/analytics, then iterate to improve UX and reliability.',
  },
];

const Steps = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-purple-600 font-semibold mb-2 flex items-center justify-center">
            <span className="text-xl mr-2">*</span> Steps I follow
          </p>
          <h2 className="text-5xl font-extrabold text-gray-900 leading-tight">
            How I Build Software
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            A practical, impact-focused workflow—from problem discovery to measurable, iterative improvements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-start text-left transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-gray-900 rounded-full mb-6">
                <span className="text-2xl" role="img" aria-label="icon">{step.icon}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;