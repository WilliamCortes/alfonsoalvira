import React from 'react';
import content from '../../data/content.json';
import { ArrowRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Button from '../common/Button';

const HowItWorks: React.FC = () => {
  const { howItWorks } = content;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-serif font-bold text-center text-gray-900 mb-12">
          {howItWorks.headline}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {howItWorks.steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mb-4">
                {index + 1}
              </div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            href="https://wa.me/573202168589?text=Hola,%20quiero%20iniciar%20mi%20proceso%20de%20recuperación." 
            external
            className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white shadow-xl animate-pulse"
          >
            <FaWhatsapp className="mr-2 h-5 w-5" />
            Iniciar mi Recuperación Ahora
          </Button>
          <p className="mt-4 text-sm text-gray-500">
            Respuesta rápida en horarios de atención
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
