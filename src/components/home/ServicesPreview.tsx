import React from 'react';
import { Activity, User, Disc, Move, HeartPulse, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPreview: React.FC = () => {
  const services = [
    {
      icon: <Activity className="h-8 w-8" />,
      title: "Columna Vertebral",
      description: "Tratamientos especializados para dolor lumbar, hernias y alineación."
    },
    {
      icon: <Disc className="h-8 w-8" />,
      title: "Tronchaduras",
      description: "Corrección de articulaciones y alivio inmediato del dolor."
    },
    {
      icon: <Move className="h-8 w-8" />,
      title: "Torceduras",
      description: "Recuperación de esguinces y lesiones articulares recientes."
    },
    {
      icon: <User className="h-8 w-8" />,
      title: "Desgarres Musculares",
      description: "Terapia para regeneración muscular y alivio de tensión."
    },
    {
      icon: <HeartPulse className="h-8 w-8" />,
      title: "Problemas de Tendones",
      description: "Tratamiento para tendinitis y molestias crónicas."
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Terapia de Cuajo",
      description: "Liberación miofascial tradicional para bienestar digestivo."
    }
  ];

  return (
    <section className="py-16 bg-cream-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary mb-4">Nuestros Servicios</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ofrecemos un enfoque integral para recuperar tu salud, combinando experiencia tradicional con conocimientos especializados.
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
