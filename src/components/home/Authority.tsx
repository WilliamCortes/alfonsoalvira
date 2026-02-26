import React from 'react';
import content from '../../data/content.json';
import { Award, CheckCircle2 } from 'lucide-react';
import alfonsoProfile from '/alfonso_la_cabana.jpg';

const Authority: React.FC = () => {
  const { authority } = content;

  return (
    <section className="py-16 bg-cream-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Award className="w-5 h-5" />
              <span className="font-semibold text-sm">Experiencia Comprobada</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-2 leading-tight">
              {authority.headline}
            </h2>
            <h3 className="text-xl text-primary font-semibold mb-6">
              {authority.subheadline}
            </h3>
            
            <div className="space-y-4 mb-8">
              {authority.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-lg text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {authority.specialties.map((specialty, index) => (
                <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="font-medium text-gray-800">{specialty}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 relative">
            {/* Don Alfonso's photo */}
             <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl bg-gray-200">
                <img 
                  src={alfonsoProfile} 
                  alt="Don Alfonso Alvira" 
                  className="object-cover object-[50%_25%] w-full h-full hover:scale-105 transition-transform duration-500" 
                />
             </div>
             
             <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg max-w-xs hidden md:block border border-gray-100">
               <p className="font-serif italic text-gray-600 text-lg">
                 "El cuerpo tiene memoria, y mis manos saben escucharla."
               </p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Authority;
