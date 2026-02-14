import React, { useState } from 'react';
import { useContactForm } from '../../hooks/useContactForm';
import Button from '../common/Button';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
  const { submitForm, loading, success, error } = useContactForm();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    injury_type: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitForm(formData);
    if (success) {
      setFormData({ name: '', phone: '', injury_type: '', message: '' });
    }
  };

  if (success) {
    return (
      <div className="bg-green-50 p-8 rounded-xl border border-green-200 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-green-800 mb-2">¡Mensaje Enviado!</h3>
        <p className="text-green-700 mb-6">
          Gracias por contactarnos. Hemos recibido tu información y te responderemos lo antes posible.
        </p>
        <Button onClick={() => window.location.reload()} variant="outline" className="border-green-600 text-green-700 hover:bg-green-100">
          Enviar otro mensaje
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
      <h3 className="text-2xl font-serif font-bold text-primary mb-6">Envíanos un mensaje</h3>
      
      {error && (
        <div className="bg-red-50 p-4 rounded-lg border border-red-200 flex items-start mb-6">
          <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
          <p className="text-red-700 text-sm">{error}</p>
        </div>
      )}

      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo *</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow outline-none"
            placeholder="Ej: Juan Pérez"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Teléfono / WhatsApp *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow outline-none"
            placeholder="Ej: +57 300 123 4567"
          />
        </div>

        <div>
          <label htmlFor="injury_type" className="block text-sm font-medium text-gray-700 mb-1">Tipo de Consulta *</label>
          <select
            id="injury_type"
            name="injury_type"
            required
            value={formData.injury_type}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow outline-none bg-white"
          >
            <option value="">Selecciona una opción</option>
            <option value="Columna Vertebral">Columna Vertebral</option>
            <option value="Dolor Muscular">Dolor Muscular</option>
            <option value="Lesión Deportiva">Lesión Deportiva</option>
            <option value="Terapia de Cuajo">Terapia de Cuajo</option>
            <option value="Productos Naturales">Productos Naturales</option>
            <option value="Otro">Otro</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensaje (Opcional)</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow outline-none resize-none"
            placeholder="Describe brevemente tu dolor o consulta..."
          ></textarea>
        </div>

        <Button type="submit" className="w-full" size="lg" isLoading={loading}>
          <Send className="mr-2 h-5 w-5" />
          Enviar Mensaje
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
