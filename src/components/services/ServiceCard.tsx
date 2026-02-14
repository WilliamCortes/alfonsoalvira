import React from 'react';
import { Check } from 'lucide-react';
import Button from '../common/Button';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, benefits }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <div className="p-8 flex-grow">
        <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
          {icon}
        </div>
        <h3 className="text-2xl font-bold font-serif text-gray-800 mb-4">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
        
        <div className="space-y-3 mb-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start">
              <Check className="h-5 w-5 text-secondary mt-0.5 mr-3 flex-shrink-0" />
              <span className="text-gray-700 text-sm">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="p-8 pt-0 mt-auto">
        <Button 
          href={`https://wa.me/573202168589?text=${encodeURIComponent(`Hola, me interesa obtener información sobre el tratamiento de: ${title}`)}`}
          external
          className="w-full"
        >
          Consultar Tratamiento
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
