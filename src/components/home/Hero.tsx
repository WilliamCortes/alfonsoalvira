import React from 'react';
import Button from '../common/Button';
import { Phone, ArrowRight } from 'lucide-react';
import banner from "@/assets/banner.png"

const Hero: React.FC = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center py-12 lg:py-24 gap-12">
          
          {/* Text Content */}
          <div className="flex-1 space-y-6 z-10">
            <h1 className="text-4xl lg:text-5xl font-bold font-serif text-primary leading-tight">
              43 años devolviendo la <span className="text-secondary">movilidad</span> y el bienestar a tu cuerpo
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">
              Tratamientos especializados de columna y cuerpo con experiencia y dedicación. 
              Combinamos técnicas tradicionales con productos naturales para tu recuperación.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" href="https://wa.me/573202168589" external className="w-full sm:w-auto">
                <Phone className="mr-2 h-5 w-5" />
                Contactar por WhatsApp
              </Button>
              <Button variant="outline" size="lg" href="/services" className="w-full sm:w-auto">
                Ver Servicios
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="pt-8 grid grid-cols-3 gap-4 border-t border-gray-100">
              <div>
                <p className="text-3xl font-bold text-primary">43+</p>
                <p className="text-sm text-gray-500">Años de experiencia</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">1000+</p>
                <p className="text-sm text-gray-500">Pacientes satisfechos</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">100%</p>
                <p className="text-sm text-gray-500">Natural</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                //src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=professional+chiropractor+spine+therapy+background+medical+clean+bright+minimalist+green+and+white&image_size=landscape_4_3" 
               src={banner}
                alt="Terapia de columna profesional" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent mix-blend-multiply"></div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -z-10 top-0 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 bottom-0 left-0 w-72 h-72 bg-accent-orange/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
