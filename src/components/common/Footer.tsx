import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Facebook } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import content from '../../data/content.json';

const Footer: React.FC = () => {
  const { locations } = content;

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="mb-4 font-serif text-2xl font-bold">Alfonso Alvira</h3>
            <p className="mb-4 text-white/90">
              Más de 43 años dedicados a devolver la movilidad y el bienestar a través de terapias especializadas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-serif text-xl font-bold">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/90 hover:text-accent-orange">Inicio</Link>
              </li>
              <li>
                <Link to="/about" className="text-white/90 hover:text-accent-orange">Sobre Mí</Link>
              </li>
              <li>
                <Link to="/services" className="text-white/90 hover:text-accent-orange">Servicios</Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/90 hover:text-accent-orange">Contacto</Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="mb-4 font-serif text-xl font-bold">Sedes</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-accent-orange mt-1 flex-shrink-0" />
                <div>
                  <span className="font-bold block text-sm text-accent-orange">Principal:</span>
                  <span className="text-sm">{locations.main}</span>
                </div>
              </li>
              {locations.others.map((loc, index) => (
                <li key={index} className="flex items-center gap-2 pl-7">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/50"></span>
                  <span className="text-sm">{loc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 font-serif text-xl font-bold">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-accent-orange" />
                <span>+57 320 2168589</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-accent-orange" />
                <span>Lunes a Sábado</span>
              </li>
              <li className="mt-4 flex gap-4">
                 <a 
                  href="https://www.facebook.com/alfonso.alvira.yasno" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="rounded-full bg-white/10 p-2 hover:bg-accent-orange hover:text-white transition-colors"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a 
                  href="https://wa.me/573202168589" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="rounded-full bg-white/10 p-2 hover:bg-accent-orange hover:text-white transition-colors"
                >
                  <FaWhatsapp className="h-6 w-6" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-8 text-center text-sm text-white/80">
          <p>🌐 Sitio web desarrollado por <a href="https://vendo365.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent-orange">vendo365.com</a>.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
