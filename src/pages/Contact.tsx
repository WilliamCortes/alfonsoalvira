import React from 'react';
import Layout from '../components/layout/Layout';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Button from '../components/common/Button';

const Contact: React.FC = () => {
  return (
    <Layout>
      <div className="bg-cream-light py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">Contáctanos</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estamos aquí para ayudarte. Agenda tu cita o realiza tus consultas directamente con nosotros.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-serif font-bold text-primary mb-6">Información de Contacto</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0 mr-4">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 mb-1">WhatsApp y Teléfono</p>
                      <a href="https://wa.me/573202168589" className="text-lg text-accent-orange hover:underline block">
                        +57 320 2168589
                      </a>
                      <p className="text-sm text-gray-500 mt-1">Respuesta rápida por WhatsApp</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0 mr-4">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 mb-1">Ubicación</p>
                      <p className="text-gray-600">
                        Villavicencio, Barrio Morichal (Cra 20A #38A-08)
                      </p>
                      <p className="text-sm text-gray-500 mt-1">También en Tolima y Huila</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0 mr-4">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 mb-1">Horario de Atención</p>
                      <p className="text-gray-600">Lunes a Sábado</p>
                      <p className="text-gray-600">8:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="rounded-xl overflow-hidden h-64 w-full shadow-sm border border-gray-200">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.417469568902!2d-73.62624592432421!3d4.13799434627721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3e2e7684e5c5f5%3A0x2895428d8266c647!2sCra.%2020a%20%23%2020D-38%2C%20Villavicencio%2C%20Meta!5e0!3m2!1ses!2sco!4v1772080690953!5m2!1ses!2sco" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Don Alfonso Alvira"
                ></iframe>
              </div>
            </div>

            {/* Direct WhatsApp Action */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-green-100 flex flex-col items-center text-center h-full justify-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-pulse">
                <FaWhatsapp className="h-10 w-10 text-green-600" />
              </div>
              
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                ¿Listo para Agendar?
              </h3>
              
              <p className="text-gray-600 mb-8 max-w-md">
                La forma más rápida de obtener tu cita es escribiéndonos directamente por WhatsApp. Don Alfonso o su equipo te responderán a la brevedad.
              </p>
              
              <Button 
                size="lg" 
                href="https://wa.me/573202168589?text=Hola,%20quisiera%20agendar%20una%20cita%20con%20Don%20Alfonso." 
                external
                className="w-full bg-green-600 hover:bg-green-700 text-white shadow-xl py-4 text-lg"
              >
                <FaWhatsapp className="mr-2 h-6 w-6" />
                Chatear en WhatsApp
              </Button>
              
              <p className="mt-6 text-sm text-gray-500">
                Al hacer clic, se abrirá WhatsApp con un mensaje predefinido.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
