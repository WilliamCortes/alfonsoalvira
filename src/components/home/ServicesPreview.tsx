import React from 'react';
import { Activity, User, Disc, Move, HeartPulse, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPreview: React.FC = () => {
  const services = [
    {
      icon: <Activity className="h-8 w-8" />,
      title: "Especialista en Columna Vertebral",
      description: "Terapia manual especializada para dolor lumbar, hernias, desalineamientos y recuperación de movilidad."
    },
    {
      icon: <Disc className="h-8 w-8" />,
      title: "Tronchaduras: Corrección de Articulaciones",
      description: "Corrección de tronchadas y articulaciones desplazadas con terapia manual inmediata y efectiva."
    },
    {
      icon: <Move className="h-8 w-8" />,
      title: "Lastimaduras y Torceduras",
      description: "Recuperación especializada de lastimaduras, esguinces y lesiones traumáticas de articulaciones."
    },
    {
      icon: <User className="h-8 w-8" />,
      title: "Desgarres y Lesiones Musculares",
      description: "Terapia especializada para regeneración muscular, desgarres y alivio de tensión muscular profunda."
    },
    {
      icon: <HeartPulse className="h-8 w-8" />,
      title: "Problemas de Matriz y Bienestar",
      description: "Tratamiento especializado para problemas de matriz, alineación pélvica y bienestar integral."
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Técnica del Cuajo (Tradición Llanera)",
      description: "Técnica ancestral llanera para alineación profunda, circulación y equilibrio del cuerpo."
    }
  ];

  return (
    <section className="py-16 bg-cream-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary mb-4">Terapias Especializadas en Columna</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don Alfonso ofrece terapias especializadas en columna, tronchaduras, lastimaduras y matriz. Método integral de 43 años combinando tradición llanera con experiencia comprobada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="w-14 h-14 bg-secondary/20 rounded-lg flex items-center justify-center text-primary mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link to="/services" className="text-accent-orange font-medium hover:text-accent-orange/80 inline-flex items-center">
                Más información
                <span className="ml-1 text-lg">›</span>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/services" 
            className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300"
          >
            Ver todos los tratamientos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
