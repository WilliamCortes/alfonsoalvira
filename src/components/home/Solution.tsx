import React from 'react';
import content from '../../data/content.json';
import { CalendarDays, CheckCircle, HeartPulse, UserCheck } from 'lucide-react';

const Solution: React.FC = () => {
  const { solution } = content;

  return (
    <section className="py-20 bg-green-50 overflow-hidden relative">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full mb-6 font-semibold text-sm">
            <HeartPulse className="w-4 h-4" />
            Método Exclusivo
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
            {solution.headline}
          </h2>
          
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            {solution.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 relative">
           {/* Connecting Line (Desktop) */}
           <div className="absolute top-1/2 left-0 w-full h-1 bg-green-200 -z-10 hidden md:block transform -translate-y-1/2"></div>
           
           {/* Step 1 */}
           <div className="bg-white p-6 rounded-2xl shadow-lg border border-green-100 relative text-center transform transition hover:-translate-y-1">
             <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 border-4 border-green-50">1</div>
             <h3 className="font-bold text-lg text-gray-900 mb-2">Día 1: Evaluación</h3>
             <p className="text-sm text-gray-600">Diagnóstico manual y primera sesión profunda.</p>
           </div>
           
           {/* Step 2 */}
           <div className="bg-white p-6 rounded-2xl shadow-lg border border-green-100 relative text-center transform transition hover:-translate-y-1">
             <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 border-4 border-green-50">2</div>
             <h3 className="font-bold text-lg text-gray-900 mb-2">Día 2: Ajuste</h3>
             <p className="text-sm text-gray-600">Seguimiento y corrección de la postura.</p>
           </div>
           
           {/* Step 3 */}
           <div className="bg-white p-6 rounded-2xl shadow-lg border border-green-100 relative text-center transform transition hover:-translate-y-1">
             <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 border-4 border-green-50">3</div>
             <h3 className="font-bold text-lg text-gray-900 mb-2">Día 3: Cierre</h3>
             <p className="text-sm text-gray-600">Consolidación y recomendaciones finales.</p>
           </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <UserCheck className="w-6 h-6 text-green-600" />
            Beneficios Clave:
          </h3>
          <ul className="space-y-3">
            {solution.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
          
          <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
            <p className="text-sm text-yellow-800 font-medium italic">
              Nota Importante: {solution.note}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Solution;
