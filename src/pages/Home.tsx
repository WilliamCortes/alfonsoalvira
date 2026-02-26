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
import { Phone, MapPin, Award } from 'lucide-react';
import Button from '../components/common/Button';
import alfonsoProfile from '/alfonso_la_cabana.jpg';

const Home: React.FC = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Don Alfonso Alvira - Sobandero y Terapias de Columna",
    "image": `https://alfonsoalvira.vendo365.com${alfonsoProfile}`,
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
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "priceRange": "$$",
    "description": "Don Alfonso Alvira, sobandero tradicional en Villavicencio con 43 años de experiencia. Especialista en alineación de columna, tratamiento de cuajo, esguinces y dolor muscular."
  };

  return (
    <Layout>
      <Helmet>
        <title>Don Alfonso Alvira - Sobandero en Villavicencio | Terapia de Columna</title>
        <meta name="description" content="Recupere su movilidad con Don Alfonso Alvira. 43 años de experiencia como sobandero en Villavicencio, Meta. Especialista en columna, cuajo y alineación manual." />
        <link rel="canonical" href="https://alfonsoalvira.vendo365.com/" />
        <meta name="keywords" content="sobandero villavicencio, don alfonso alvira, terapia de columna villavicencio, cuajo villavicencio, sobandero meta, alineación de columna" />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
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

      <Authority />
      <Problem />
      <Solution />
      <VideoCarousel />
      <ServicesPreview />
      <Testimonials />
      <HowItWorks />
      
      {/* Floating CTA for Mobile */}
      <div className="fixed bottom-24 right-4 z-40 md:hidden">
        <Button 
          size="lg" 
          href="https://wa.me/573202168589?text=Hola,%20Don%20Alfonso,%20quisiera%20agendar%20una%20cita%20en%20Villavicencio." 
          external
          className="rounded-full shadow-2xl bg-green-600 hover:bg-green-700 p-4 h-14 w-14 flex items-center justify-center animate-bounce"
          aria-label="Agendar cita por WhatsApp"
        >
          <Phone className="h-6 w-6 text-white" />
        </Button>
      </div>
    </Layout>
  );
};

export default Home;
