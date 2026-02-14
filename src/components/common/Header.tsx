import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import Button from './Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Inicio', path: '/' },
    { label: 'Sobre Mí', path: '/about' },
    { label: 'Servicios', path: '/services' },
    { label: 'Productos', path: '/products' },
    { label: 'Contacto', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="font-serif text-xl font-bold text-primary md:text-2xl">
              Alfonso Alvira
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.path) ? 'text-primary font-bold' : 'text-gray-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button size="sm" href="https://wa.me/573202168589" external>
              <Phone className="mr-2 h-4 w-4" />
              Agenda tu cita
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="rounded-md p-2 text-gray-600 hover:bg-gray-100 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-gray-100 bg-white md:hidden">
          <div className="space-y-1 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block rounded-md px-3 py-2 text-base font-medium ${
                  isActive(item.path)
                    ? 'bg-primary/10 text-primary'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4">
              <Button className="w-full" href="https://wa.me/573202168589" external>
                <Phone className="mr-2 h-4 w-4" />
                Agenda tu cita
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
