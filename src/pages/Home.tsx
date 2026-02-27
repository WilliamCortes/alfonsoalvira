import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/home/Hero';
import Authority from '../components/home/Authority';
import Problem from '../components/home/Problem';
import Solution from '../components/home/Solution';
import ServicesPreview from '../components/home/ServicesPreview';
import Testimonials from '../components/home/Testimonials';
import VideoCarousel from '../components/home/VideoCarousel';
import HowItWorks from '../components/home/HowItWorks';
import Layout from '../components/layout/Layout';
import { MapPin, Award } from 'lucide-react';
import Button from '../components/common/Button';
import alfonsoProfile from '/alfonso_la_cabana.jpg';

const Home: React.FC = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://alfonsoalvira.vendo365.com",
    "name": "Don Alfonso Alvira - Terapeuta Especialista en Columna Vertebral",
    "image": `https://alfonsoalvira.vendo365.com${alfonsoProfile}`,
    "description": "Terapeuta especialista en columna vertebral con 43 años de experiencia en Villavicencio, Meta. Alineación manual, tratamiento de cuajo, tronchaduras y terapias especializadas sin medicamentos ni cirugía.",
    "telephone": "+573202168589",
    "url": "https://alfonsoalvira.vendo365.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Cra 20A #38A-08, Barrio Morichal",
      "addressLocality": "Villavicencio",
      "addressRegion": "Meta",
      "postalCode": "500001",
      "addressCountry": "CO"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 4.1379943,
      "longitude": -73.6262459
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "16:00"
      }
    ],
    "priceRange": "$$",
    "areaServed": [
      {
        "@type": "City",
        "name": "Villavicencio",
        "containedIn": {
          "@type": "State",
          "name": "Meta"
        }
      }
    ],
    "serviceType": ["Terapia Manual", "Alineación de Columna", "Tratamiento de Cuajo", "Masaje Terapéutico"],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "120"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Quién es Alfonso Alvira?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Don Alfonso Alvira es un terapeuta especialista en columna vertebral con 43 años de experiencia en Villavicencio, Meta. Reconocido tradicionalmente como sobandero, soy especialista en terapias manuales de columna, tratamiento de cuajo (técnica llanera) y alineación de articulaciones. Ubicado en el Barrio Morichal (Cra 20A #38A-08), mi método integral de 3 terapias consecutivas ha beneficiado a miles de colombianos."
        }
      },
      {
        "@type": "Question",
        "name": "¿Dónde atiende el terapeuta Don Alfonso Alvira?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mi consultorio principal está en Villavicencio, Meta, en el Barrio Morichal (Cra 20A #38A-08). También realizo consultas itinerantes en Santa Isabel (Tolima), Alto del Fisol, Ibagué y La Plata. Para agendar cita, contáctame por WhatsApp al +57 320 216 8589."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué condiciones trata el terapeuta Don Alfonso?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Especialista en: alineación de columna vertebral, dolor de espalda, lumbago, ciática, cuajo (técnica tradicional llanera), esguinces y torceduras, desgarres musculares, tendinitis, tronchaduras (articulaciones desplazadas) y lesiones post-traumáticas. Utilizo únicamente terapia manual especializada sin medicamentos invasivos ni cirugía."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuántas sesiones se necesitan para recuperarse?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mi método consiste en 3 terapias consecutivas: Día 1 (diagnóstico y alineación inicial), Día 2 (profundidad y consolidación), Día 3 (consolidación final y recomendaciones de cuidado). Muchos pacientes sienten alivio desde la primera sesión, pero el tratamiento integral requiere estas 3 sesiones y disciplina en el cuidado posterior."
        }
      }
    ]
  };

  return (
    <Layout>
      <Helmet>
        <title>Terapeuta Especialista en Columna | Don Alfonso Alvira | 43 años Villavicencio</title>
        <meta name="description" content="Especialista en columna vertebral, tronchaduras, lastimaduras y desgarres. Terapeuta manual Don Alfonso Alvira con 43 años en Villavicencio. Alineación, cuajo y terapias manuales sin cirugía. Agenda por WhatsApp." />
        <link rel="canonical" href="https://alfonsoalvira.vendo365.com/" />
        <meta name="keywords" content="terapeuta columna villavicencio, don alfonso alvira, especialista manual meta, alineación vertebral, cuajo villavicencio, terapias manuales, terapeuta tradicional, sobandero villavicencio" />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <Hero />
      
      {/* SEO Content Block: Terapeuta Especialista en Villavicencio */}
      <section className="bg-white py-8 border-b border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center gap-2 bg-green-50 text-green-800 px-6 py-3 rounded-full mb-4">
            <MapPin className="w-5 h-5" />
            <h2 className="text-sm font-bold uppercase tracking-wide">Terapeuta Especialista en Villavicencio, Meta</h2>
          </div>
          <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
            Ubicado en el <strong>Barrio Morichal</strong>, Don Alfonso Alvira es reconocido en todo el Meta por su especialidad en <strong>alineación de columna</strong>, <strong>terapia manual</strong> y técnica tradicional llanera del <strong>"cuajo"</strong>, con experiencia y resultados comprobados.
          </p>
        </div>
      </section>

      {/* GEO SEO Content Block */}
      <section className="bg-blue-50 py-12 border-b border-blue-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              ¿Buscas un Terapeuta Especialista en Villavicencio?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700">
              <div>
                <h3 className="text-xl font-bold text-green-700 mb-3">¿Quién es Don Alfonso Alvira?</h3>
                <p className="leading-relaxed">
                  Don Alfonso Alvira es un <strong>terapeuta especialista en columna con 43 años de experiencia</strong> ubicado en <strong>Villavicencio, Meta</strong>. Es especialista en <strong>alineación de columna</strong>, tratamiento de cuajo, terapia manual y recuperación de lesiones musculares para dolores de espalda, esguinces y más.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-green-700 mb-3">¿Dónde atiende en Villavicencio?</h3>
                <p className="leading-relaxed">
                  Su consultorio se encuentra en el <strong>Barrio Morichal, Cra 20A #38A-08</strong>, Villavicencio. También realiza atenciones en municipios cercanos del Meta y Tolima. Para agendar, escribe al WhatsApp: <strong>320 2168589</strong>.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-green-700 mb-3">¿Cuántas sesiones necesito?</h3>
                <p className="leading-relaxed">
                  El tratamiento de Don Alfonso es integral: <strong>3 terapias consecutivas</strong> (hoy, mañana, pasado mañana). Esto maximiza la recuperación. Muchos pacientes sienten mejoría desde la primera sesión, pero la disciplina en los 3 días es clave.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-green-700 mb-3">¿Qué trata?</h3>
                <p className="leading-relaxed">
                  Especialista en: <strong>alineación de columna</strong>, dolor de espalda, lumbago, ciática, cuajo (técnica tradicional), esguinces, torceduras, desgarres musculares, tendinitis y lesiones traumáticas. Usa terapia manual sin medicamentos invasivos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Authority />
      <Problem />
      <Solution />
      <VideoCarousel />
      <ServicesPreview />
      <Testimonials />
      <HowItWorks />
    </Layout>
  );
};

export default Home;
