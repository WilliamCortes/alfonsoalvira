import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '../components/layout/Layout';
import ServiceCard from '../components/services/ServiceCard';
import { Activity, User, Disc, Move, HeartPulse, Sparkles, Bandage, Stethoscope } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Activity className="h-8 w-8" />,
      title: "Alineación de Columna Vertebral",
      description: "Tratamiento integral para dolores de espalda, lumbago, ciática y hernias discales. Utilizamos técnicas manuales especializadas de alineación vertebral para realinear y descomprimir las vértebras.",
      benefits: ["Alivio del dolor lumbar", "Mejora de la postura", "Recuperación de movilidad", "Tratamiento no invasivo"]
    },
    {
      icon: <Disc className="h-8 w-8" />,
      title: "Tronchaduras y Desajustes",
      description: "Corrección especializada de articulaciones desplazadas o bloqueadas. Técnica precisa de terapia manual para restaurar la función articular inmediata.",
      benefits: ["Corrección articular", "Alivio inmediato", "Reducción de inflamación", "Prevención de secuelas"]
    },
    {
      icon: <Move className="h-8 w-8" />,
      title: "Torceduras y Esguinces",
      description: "Atención experta para esguinces y lesiones de tobillo, muñeca o rodilla. Aceleramos el proceso de recuperación natural del cuerpo con masajes tradicionales.",
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
      description: "Técnica tradicional ancestral para 'sobar el cuajo', ayudando en problemas digestivos y malestares abdominales, común en la cultura llanera.",
      benefits: ["Bienestar digestivo", "Técnica tradicional", "Alivio abdominal", "Equilibrio corporal"]
    },
    {
      icon: <Stethoscope className="h-8 w-8" />,
      title: "Valoración General",
      description: "Examen físico completo para identificar el origen de sus dolencias y determinar el plan de tratamiento más adecuado.",
      benefits: ["Diagnóstico físico", "Plan personalizado", "Prevención", "Asesoría integral"]
    }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
      "serviceType": "Terapia Manual Especializada",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Don Alfonso Alvira"
    },
    "areaServed": {
      "@type": "City",
      "name": "Villavicencio"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Salud Tradicional",
      "itemListElement": services.map(s => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": s.title,
          "description": s.description
        }
      }))
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Servicios de Terapia Manual en Villavicencio | Alineación de Columna | Cuajo</title>
        <meta name="description" content="Servicios de terapia manual especializada en Villavicencio: alineación de columna, cuajo, esguinces y tratamientos manuales. Método de 3 sesiones con Don Alfonso Alvira, 43 años de experiencia." />
        <link rel="canonical" href="https://alfonsoalvira.vendo365.com/services" />
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      </Helmet>

      <div className="bg-cream-light py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
              Servicios de Terapia Manual en Villavicencio
            </h1>
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              Especialidades del Terapeuta Especialista Don Alfonso
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Como terapeuta especialista en columna vertebral, ofrezco un enfoque integral para recuperar su salud. Desde la <strong>alineación de columna</strong> hasta el tratamiento del "cuajo" y técnicas manuales especializadas, cada terapia es personalizada para su necesidad específica en Villavicencio.
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
