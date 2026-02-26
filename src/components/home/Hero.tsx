import React from 'react';
import Button from '../common/Button';
import { FaWhatsapp } from 'react-icons/fa';
import banner from "@/assets/banner.png"
import content from '../../data/content.json';

const Hero: React.FC = () => {
  const { hero } = content;

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center py-12 lg:py-20 gap-12">
          
          {/* Text Content */}
          <div className="flex-1 space-y-6 z-10 order-2 lg:order-1">
            <h1 className="text-3xl lg:text-5xl font-bold font-serif text-gray-900 leading-tight">
              {hero.title}
            </h1>
            <p className="text-lg text-gray-700 max-w-xl">
              {hero.subtitle}
            </p>
            <div className="pt-4">
              <Button size="lg" href="https://wa.me/573202168589?text=Hola,%20quisiera%20agendar%20una%20cita%20con%20Don%20Alfonso." external className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white shadow-lg transform hover:scale-105 transition-all">
                <FaWhatsapp className="mr-2 h-5 w-5" />
                {hero.cta}
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="pt-8 flex gap-8 border-t border-gray-100">
              <div>
                <p className="text-3xl font-bold text-primary">43+</p>
                <p className="text-sm text-gray-600 font-medium">Años de Experiencia</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">3</p>
                <p className="text-sm text-gray-600 font-medium">Días de Tratamiento</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 relative order-1 lg:order-2 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-all duration-500">
              <img 
               src={banner}
                alt="Don Alfonso Alvira Terapia" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-serif text-lg font-medium">"Exijo que se cuiden y les aseguro que se mejoran"</p>
                <p className="text-sm opacity-90">- Don Alfonso Alvira</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
