import React from 'react';
import content from '../../data/content.json';
import { AlertCircle } from 'lucide-react';

const Problem: React.FC = () => {
  const { problem } = content;

  return (
    <section className="py-16 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-100 text-red-600 mb-6 mx-auto">
          <AlertCircle className="w-6 h-6" />
        </div>
        
        <h2 className="text-3xl lg:text-4xl font-bold font-serif text-gray-900 mb-6">
          {problem.headline}
        </h2>
        
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          {problem.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-800 mb-2">Pérdida de Independencia</h3>
            <p className="text-sm text-gray-600">Depender de otros para levantarse o caminar no es vida.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-800 mb-2">Dolor Crónico</h3>
            <p className="text-sm text-gray-600">El malestar constante afecta tu ánimo y tus relaciones.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-800 mb-2">Rigidez Progresiva</h3>
            <p className="text-sm text-gray-600">Si no se trata, el cuerpo se "acostumbra" a la mala postura.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
