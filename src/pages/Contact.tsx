import React from 'react';
import Layout from '../components/layout/Layout';
import ContactForm from '../components/contact/ContactForm';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <Layout>
      <div className="bg-cream-light py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">Contáctanos</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estamos aquí para ayudarte. Agenda tu cita o realiza tus consultas a través de nuestros canales de atención.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
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
                        Colombia
                      </p>
                      <p className="text-sm text-gray-500 mt-1">Atención presencial con cita previa</p>
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
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0 mr-4">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 mb-1">Correo Electrónico</p>
                      <p className="text-gray-600">contacto@alfonsoalvira.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-xl h-64 w-full flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <MapPin className="h-12 w-12 mx-auto mb-2 opacity-50" />
                  <p>Mapa de Ubicación</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
