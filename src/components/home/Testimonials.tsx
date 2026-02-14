import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "María García",
      treatment: "Columna vertebral",
      rating: 5,
      text: "Después de años con dolor de columna, Alfonso me devolvió la movilidad. Excelente trato y resultados inmediatos."
    },
    {
      name: "Carlos Rodríguez",
      treatment: "Desgarre muscular",
      rating: 5,
      text: "Profesionalismo y experiencia se notan desde la primera sesión. Recomendado 100%."
    },
    {
      name: "Ana Martínez",
      treatment: "Terapia de cuajo",
      rating: 5,
      text: "Los productos naturales complementaron perfectamente mi tratamiento. Calidad excepcional."
    }
  ];

  return (
    <section className="py-16 bg-primary text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-white blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">Lo que dicen nuestros pacientes</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            La satisfacción de nuestros pacientes es nuestra mejor carta de presentación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <div className="flex text-accent-orange mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <Quote className="h-8 w-8 text-white/20 mb-4" />
              <p className="text-white/90 italic mb-6">"{testimonial.text}"</p>
              <div>
                <p className="font-bold text-lg">{testimonial.name}</p>
                <p className="text-sm text-secondary-light">{testimonial.treatment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
