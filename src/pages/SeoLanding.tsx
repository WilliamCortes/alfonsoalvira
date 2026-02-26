import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '../components/layout/Layout';
import { Phone, MapPin, Clock, Award, CheckCircle2, User, HeartPulse, Activity } from 'lucide-react';
import Button from '../components/common/Button';
import alfonsoProfile from '/alfonso_la_cabana.jpg';

const SeoLanding: React.FC = () => {
  const whatsappUrl = "https://wa.me/573202168589?text=Hola,%20quisiera%20agendar%20una%20cita%20de%20alineación%20de%20columna%20con%20Don%20Alfonso.";

  // Schema: FAQ + LocalBusiness
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
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
        "priceRange": "$$"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "¿Dónde encontrar un sobandero en Villavicencio de confianza?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Don Alfonso Alvira atiende en el Barrio Morichal de Villavicencio (Cra 20A #38A-08). Con 43 años de experiencia, es referente en terapias manuales y alineación de columna en el Meta."
            }
          },
          {
            "@type": "Question",
            "name": "¿Qué trata Don Alfonso Alvira?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Se especializa en alineación de columna vertebral, tratamiento de esguinces, 'tronchaduras', desgarres musculares y el tradicional 'cuajo'. Utiliza métodos naturales y manuales."
            }
          },
          {
            "@type": "Question",
            "name": "¿Cómo es la terapia de columna?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "El tratamiento consiste en un ciclo de 3 terapias consecutivas (tres días seguidos) para corregir la postura, aliviar el dolor y asegurar que el cuerpo recupere su movilidad natural."
            }
          },
          {
            "@type": "Question",
            "name": "¿Atienden fines de semana?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sí, atendemos de lunes a sábado de 8:00 AM a 6:00 PM. Se recomienda agendar cita previa por WhatsApp al 320 2168589."
            }
          },
          {
            "@type": "Question",
            "name": "¿Realizan visitas a otros municipios?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sí, Don Alfonso realiza visitas periódicas a municipios como Santa Isabel (Tolima), La Plata (Huila) y zonas aledañas. Consulte disponibilidad por WhatsApp."
            }
          }
        ]
      }
    ]
  };

  return (
    <Layout>
      <Helmet>
        <title>Don Alfonso Alvira: Sobandero y Columna en Villavicencio</title>
        <meta name="description" content="Don Alfonso Alvira, sobandero en Villavicencio con 43 años de experiencia. Especialista en columna, cuajo y terapias manuales. ¡Agenda al 3202168589!" />
        <link rel="canonical" href="https://alfonsoalvira.vendo365.com/don-alfonso-alvira-sobandero-villavicencio" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alfonsoalvira.vendo365.com/don-alfonso-alvira-sobandero-villavicencio" />
        <meta property="og:title" content="Don Alfonso Alvira: Sobandero en Villavicencio y Columna" />
        <meta property="og:description" content="Recupera tu movilidad con Don Alfonso Alvira. 43 años de experiencia en terapias manuales de columna en Villavicencio, Meta." />
        <meta property="og:image" content={`https://alfonsoalvira.vendo365.com${alfonsoProfile}`} />

        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* H1: Primary Keyword Focus */}
      <section className="bg-white py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold text-sm">
                <MapPin className="w-4 h-4" />
                Sobandero en Villavicencio, Meta
              </div>
              <h1 className="text-3xl lg:text-5xl font-serif font-bold text-gray-900 leading-tight">
                Don Alfonso Alvira: Sobandero y Especialista en Columna en Villavicencio
              </h1>
              <p className="text-xl text-gray-600">
                Experiencia, tradición y manos que curan. Más de 43 años ayudando a las familias del Meta a recuperar su bienestar con terapias naturales.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" href={whatsappUrl} external className="bg-green-600 hover:bg-green-700 w-full sm:w-auto shadow-lg transform hover:scale-105 transition-all">
                  <Phone className="mr-2 h-5 w-5" />
                  Agendar Cita: 320 2168589
                </Button>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="absolute -inset-4 bg-green-100 rounded-full blur-3xl opacity-30"></div>
              <img 
                src={alfonsoProfile} 
                alt="Don Alfonso Alvira sobandero tradicional en Villavicencio realizando terapia de columna" 
                className="relative rounded-2xl shadow-2xl w-full max-w-md mx-auto object-cover aspect-[3/4] border-4 border-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* E-E-A-T: Marca Personal y Experiencia */}
      <section className="bg-cream-light py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Experiencia y Tradición: 43 Años en el Meta</h2>
            <p className="text-lg text-gray-700">
              La confianza se gana con resultados. Miles de pacientes en Villavicencio y Colombia respaldan nuestro trabajo.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 space-y-6 text-gray-700 leading-relaxed text-lg">
            <p>
              Soy <strong>Don Alfonso Alvira</strong>, y he dedicado mi vida al arte de la terapia manual. No soy un médico académico, soy un <strong>sobandero tradicional</strong> con 43 años de práctica empírica ininterrumpida.
            </p>
            <p>
              Mi conocimiento proviene de la tradición oral y de la experiencia directa tratando casos reales: desde trabajadores del campo con dolor lumbar crónico hasta niños con "cuajo". Mi consultorio en el <strong>Barrio Morichal de Villavicencio</strong> es un espacio de sanación y respeto.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
                <Award className="w-8 h-8 text-green-600" />
                <div>
                  <span className="block font-bold text-gray-900">43 Años</span>
                  <span className="text-sm text-gray-600">De experiencia continua</span>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
                <MapPin className="w-8 h-8 text-green-600" />
                <div>
                  <span className="block font-bold text-gray-900">Ubicación Local</span>
                  <span className="text-sm text-gray-600">Villavicencio, Meta</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Específica: Sobandero en Villavicencio */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                ¿Busca un Sobandero en Villavicencio de Confianza?
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                En nuestra cultura llanera, el sobandero juega un papel vital. Tratamos dolencias que a veces la medicina convencional pasa por alto o trata solo con analgésicos.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 mt-1" />
                  <span><strong>Tronchaduras y Esguinces:</strong> Ajuste inmediato para reducir la inflamación y el dolor.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 mt-1" />
                  <span><strong>Desgarres Musculares:</strong> Masaje profundo para regenerar el tejido afectado.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 mt-1" />
                  <span><strong>Terapia de Cuajo:</strong> Técnica ancestral para aliviar malestares digestivos en niños y adultos.</span>
                </li>
              </ul>
            </div>
            <div className="flex-1 bg-green-50 p-8 rounded-2xl">
              <User className="w-16 h-16 text-green-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Trato Humano y Cercano</h3>
              <p className="text-gray-700 mb-6">
                "Mi trabajo no es solo mover huesos. Es escuchar al paciente, entender su dolor y ofrecerle una solución honesta. Si puedo ayudarle, lo haré con todo mi esfuerzo."
              </p>
              <p className="font-serif italic text-lg text-green-800">- Don Alfonso Alvira</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Específica: Especialista en Columna */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Especialista en Alineación de Columna en Villavicencio
            </h2>
            <p className="text-lg text-gray-600">
              El dolor de espalda no es normal. Nuestra terapia manual para columna busca el origen del problema, no solo tapar el síntoma.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Activity className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ciática y Lumbalgia</h3>
              <p className="text-gray-600">
                Descompresión manual del nervio ciático y ajuste de vértebras lumbares para aliviar el dolor irradiado a las piernas.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <HeartPulse className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Método de 3 Terapias</h3>
              <p className="text-gray-600">
                Un proceso único de tres sesiones consecutivas. Día 1: Ajuste. Día 2: Repaso. Día 3: Cierre. Garantiza resultados duraderos.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <User className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Corrección Postural</h3>
              <p className="text-gray-600">
                Alineación completa desde el cuello hasta el coxis para mejorar la postura y prevenir futuros dolores crónicos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Optimized for Featured Snippets */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-serif font-bold text-center text-gray-900 mb-12">
            Preguntas Frecuentes
          </h2>
          
          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index} className="border-b border-gray-100 pb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-start gap-2">
                  <span className="text-primary font-serif">P:</span> {faq.name}
                </h3>
                <p className="text-gray-600 pl-6 leading-relaxed">
                  {faq.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Local SEO & CTA */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Recupere su Movilidad Hoy Mismo
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            No deje que el dolor limite su vida. Visite a Don Alfonso Alvira en Villavicencio.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8 text-white/80">
             <div className="flex items-center gap-2">
               <MapPin className="text-accent-orange" />
               <span>Barrio Morichal, Cra 20A #38A-08</span>
             </div>
             <div className="flex items-center gap-2">
               <Clock className="text-accent-orange" />
               <span>Atención Lunes a Sábado</span>
             </div>
          </div>
          
          <Button size="lg" href={whatsappUrl} external className="bg-green-500 hover:bg-green-600 text-white border-none shadow-xl animate-pulse text-lg px-8 py-4 h-auto">
            <Phone className="mr-3 h-6 w-6" />
            Llamar o Escribir: 320 2168589
          </Button>
          <p className="mt-6 text-sm text-white/60">
            * Las terapias manuales son una práctica tradicional y complementaria.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default SeoLanding;
