import React from 'react';
import Layout from '../components/layout/Layout';
import ServiceCard from '../components/services/ServiceCard';
import { Activity, User, Disc, Move, HeartPulse, Sparkles, Bandage, Stethoscope } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Activity className="h-8 w-8" />,
      title: "Columna Vertebral",
      description: "Tratamiento integral para dolores de espalda, lumbago, ciática y hernias discales. Utilizamos técnicas manuales para realinear y descomprimir las vértebras.",
      benefits: ["Alivio del dolor lumbar", "Mejora de la postura", "Recuperación de movilidad", "Tratamiento no invasivo"]
    },
    {
      icon: <Disc className="h-8 w-8" />,
      title: "Tronchaduras",
      description: "Corrección especializada de articulaciones desplazadas o bloqueadas. Técnica precisa para restaurar la función articular inmediata.",
      benefits: ["Corrección articular", "Alivio inmediato", "Reducción de inflamación", "Prevención de secuelas"]
    },
    {
      icon: <Move className="h-8 w-8" />,
      title: "Torceduras",
      description: "Atención experta para esguinces y lesiones de tobillo, muñeca o rodilla. Aceleramos el proceso de recuperación natural del cuerpo.",
      benefits: ["Manejo de esguinces", "Reducción de hinchazón", "Fortalecimiento ligamentario", "Recuperación funcional"]
    },
    {
      icon: <User className="h-8 w-8" />,
      title: "Desgarres Musculares",
      description: "Terapias para la recuperación de fibras musculares rotas o distendidas. Combinamos masaje terapéutico con productos naturales.",
      benefits: ["Regeneración muscular", "Alivio de espasmos", "Mejora circulatoria", "Prevención de fibrosis"]
    },
    {
      icon: <HeartPulse className="h-8 w-8" />,
      title: "Problemas de Tendones",
      description: "Tratamiento efectivo para tendinitis y tendinosis. Enfocado en reducir la inflamación y restaurar la elasticidad del tendón.",
      benefits: ["Tratamiento de tendinitis", "Manejo del dolor crónico", "Recuperación de fuerza", "Movilidad sin dolor"]
    },
    {
      icon: <Bandage className="h-8 w-8" />,
      title: "Lesiones y Lastimaduras",
      description: "Cuidado integral para golpes, contusiones y traumas físicos diversos. Evaluamos y tratamos cada caso de manera personalizada.",
      benefits: ["Evaluación de traumas", "Manejo del dolor agudo", "Recuperación de tejidos", "Seguimiento personalizado"]
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Terapia de Cuajo",
      description: "Técnica tradicional ancestral para 'sobar el cuajo', ayudando en problemas digestivos y malestares abdominales.",
      benefits: ["Bienestar digestivo", "Técnica tradicional", "Alivio abdominal", "Equilibrio corporal"]
    },
    {
      icon: <Stethoscope className="h-8 w-8" />,
      title: "Valoración General",
      description: "Examen físico completo para identificar el origen de sus dolencias y determinar el plan de tratamiento más adecuado.",
      benefits: ["Diagnóstico físico", "Plan personalizado", "Prevención", "Asesoría integral"]
    }
  ];

  return (
    <Layout>
      <div className="bg-cream-light py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">Nuestros Servicios</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada tratamiento es personalizado. Evaluamos tu condición específica y diseñamos un plan de recuperación adaptado a tus necesidades.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
