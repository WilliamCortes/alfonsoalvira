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
    "name": "Don Alfonso Alvira - Sobandero y Terapeuta de Columna",
    "image": `https://alfonsoalvira.vendo365.com${alfonsoProfile}`,
    "description": "Sobandero tradicional con 43 años de experiencia en Villavicencio, Meta. Especialista en alineación de columna, tratamiento de cuajo, esguinces y terapias manuales.",
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
          "text": "Don Alfonso Alvira es un sobandero tradicional con 43 años de experiencia en Villavicencio, Meta. Especialista en terapias manuales de columna vertebral, tratamiento de cuajo y alineación de articulaciones. Ubicado en el Barrio Morichal (Cra 20A #38A-08), es reconocido por su método integral de 3 terapias consecutivas que ha beneficiado a miles de pacientes en Colombia."
        }
      },
      {
        "@type": "Question",
        "name": "¿Dónde atiende Don Alfonso Alvira?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Don Alfonso Alvira atiende en Villavicencio, Meta, ubicado en el Barrio Morichal, Cra 20A #38A-08. También realiza visitas a Santa Isabel (Tolima), Alto del Fisol e Ibagué. Para agendar cita, contáctalo por WhatsApp al 3202168589."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué trata el sobandero Don Alfonso Alvira?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Don Alfonso Alvira trata: alineación de columna vertebral, dolor de espalda, lumbago, ciática, cuajo (técnica tradicional llanera), esguinces y torceduras, desgarres musculares, tendinitis, tronchaduras (articulaciones desplazadas) y lesiones traumáticas. Utiliza terapia manual tradicional sin medicamentos invasivos."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuántas sesiones se necesitan para recuperarse?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El método de Don Alfonso Alvira consiste en 3 terapias consecutivas: Día 1 (diagnóstico y alineación), Día 2 (profundidad y seguimiento), Día 3 (consolidación y cuidados). Muchos pacientes sienten alivio desde la primera sesión, pero el tratamiento integral requiere disciplina durante estos 3 días y seguimiento de recomendaciones."
        }
      }
    ]
  };

  return (
    <Layout>
      <Helmet>
        <title>Sobandero en Villavicencio | Alineación de Columna | Don Alfonso 43 años</title>
        <meta name="description" content="Recupera tu movilidad con Don Alfonso Alvira, sobandero en Villavicencio con 43 años. Especialista en alineación de columna, cuajo y terapias manuales. Barrio Morichal, Meta." />
        <link rel="canonical" href="https://alfonsoalvira.vendo365.com/" />
        <meta name="keywords" content="sobandero villavicencio, don alfonso alvira, terapia de columna villavicencio, cuajo villavicencio, sobandero meta, alineación de columna, terapias manuales" />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <Hero />
      
      {/* SEO Content Block: Sobandero en Villavicencio */}
      <section className="bg-white py-8 border-b border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center gap-2 bg-green-50 text-green-800 px-6 py-3 rounded-full mb-4">
            <MapPin className="w-5 h-5" />
            <h2 className="text-sm font-bold uppercase tracking-wide">Sobandero en Villavicencio, Meta</h2>
          </div>
          <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
            Ubicado en el <strong>Barrio Morichal</strong>, Don Alfonso Alvira es reconocido en todo el Meta por su don para sanar y su técnica tradicional de <strong>alineación de columna</strong> y tratamiento de "cuajo".
          </p>
        </div>
      </section>

      {/* GEO SEO Content Block */}
      <section className="bg-blue-50 py-12 border-b border-blue-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              ¿Buscas un Sobandero en Villavicencio?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700">
              <div>
                <h3 className="text-xl font-bold text-green-700 mb-3">¿Quién es Don Alfonso Alvira?</h3>
                <p className="leading-relaxed">
                  Don Alfonso Alvira es un <strong>sobandero tradicional con 43 años de experiencia</strong> ubicado en <strong>Villavicencio, Meta</strong>. Es especialista en <strong>alineación de columna</strong>, tratamiento de cuajo y terapias manuales para dolores de espalda, esguinces y lesiones musculares.
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
