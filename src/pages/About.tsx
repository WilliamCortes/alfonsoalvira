import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '../components/layout/Layout';
import { Award, Users, Heart, MapPin } from 'lucide-react';
import alfonso from '../assets/alfonso.png';
import alfonsoProfile from '/alfonso_la_cabana.jpg';

const About: React.FC = () => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Alfonso Alvira Yasno",
    "jobTitle": "Terapeuta Especialista en Columna Vertebral",
    "image": `https://alfonsoalvira.vendo365.com${alfonsoProfile}`,
    "description": "Don Alfonso Alvira es terapeuta especialista en columna vertebral con 43 años de experiencia en Villavicencio, Meta. Especializado en terapias manuales, alineación vertebral, cuajo y recuperación funcional.",
    "telephone": "+573202168589",
    "workLocation": {
      "@type": "Place",
      "name": "Consultorio Don Alfonso Alvira",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Villavicencio",
        "addressRegion": "Meta"
      }
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Sobre Don Alfonso Alvira: Terapeuta Especialista en Columna | 43 años Villavicencio</title>
        <meta name="description" content="Conoce a Don Alfonso Alvira, terapeuta especialista en columna con 43 años de experiencia en Villavicencio, Meta. Experto en alineación vertebral, cuajo y recuperación funcional integral." />
        <link rel="canonical" href="https://alfonsoalvira.vendo365.com/about" />
        <script type="application/ld+json">
          {JSON.stringify(personSchema)}
        </script>
      </Helmet>

      <div className="bg-white py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Image */}
            <div className="flex-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[3/4] max-w-md mx-auto">
                <img 
                  src={alfonso} 
                  alt="Don Alfonso Alvira Yasno - Terapeuta de columna en Villavicencio" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h1 className="font-serif text-2xl font-bold">Alfonso Alvira Yasno</h1>
                  <p className="text-white/90 font-medium">Terapeuta Especialista en Columna - Meta</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 bg-green-50 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mb-2">
                <Award className="w-4 h-4" />
                <span>43 Años de Experiencia</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 leading-tight">
                Don Alfonso Alvira: Terapeuta Especialista en Columna Villavicencio
              </h1>
              
              <h2 className="text-2xl font-bold text-green-700">
                Una Vida Dedicada a Sanar con las Manos
              </h2>
              
              <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                <p>
                  Soy <strong>Don Alfonso Alvira</strong>, terapeuta especialista en columna vertebral conocido en Villavicencio y toda la región por mi trabajo con terapia manual especializada. Reconocido tradicionalmente como sobandero, durante más de 43 años he perfeccionado el arte de la alineación vertebral y la terapia manual.
                </p>
                <p>
                  Mi consultorio en el <strong>Barrio Morichal</strong> ha sido testigo de la recuperación de miles de personas que llegaron con dolores de columna, "tronchaduras", esguinces y el malestar del "cuajo".
                </p>
                <p>
                  No ofrezco soluciones mágicas, sino un trabajo honesto, basado en la anatomía palpatoria y la tradición oral. Mi objetivo es encontrar el origen del dolor y corregirlo, devolviendo la <strong>movilidad y la calidad de vida</strong> a mis pacientes.
                </p>
              </div>

              {/* Stats/Values */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
                <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                  <Award className="h-8 w-8 text-green-600 mb-2" />
                  <span className="font-bold text-gray-900">Trayectoria</span>
                  <span className="text-sm text-gray-600">Desde 1980</span>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                  <Users className="h-8 w-8 text-green-600 mb-2" />
                  <span className="font-bold text-gray-900">Pacientes</span>
                  <span className="text-sm text-gray-600">Miles Recuperados</span>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                  <MapPin className="h-8 w-8 text-green-600 mb-2" />
                  <span className="font-bold text-gray-900">Ubicación</span>
                  <span className="text-sm text-gray-600">Villavicencio</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
