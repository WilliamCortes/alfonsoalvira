import React from 'react';
import Layout from '../components/layout/Layout';
import { Award, Users, Heart } from 'lucide-react';
import alfonso from '../assets/alfonso.png'

const About: React.FC = () => {
  return (
    <Layout>
      <div className="bg-white py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Image */}
            <div className="flex-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[3/4] max-w-md mx-auto">
                <img 
                  src={alfonso} 
                  alt="Alfonso Alvira Yasno" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="font-serif text-2xl font-bold">Alfonso Alvira Yasno</p>
                  <p className="text-white/90">Terapeuta Especializado</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-primary">
                Tu terapeuta de confianza
              </h1>
              <h2 className="text-xl text-gray-600 font-medium">
                43 años dedicados al bienestar y la salud integral
              </h2>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Con más de cuatro décadas de experiencia en el tratamiento de problemas de columna y lesiones corporales, 
                  me he dedicado a devolver la salud y el bienestar a quienes sufren molestias físicas.
                </p>
                <p>
                  Mi enfoque es integral, combinando técnicas tradicionales de "cuajo" y alineación con productos naturales 
                  de alta calidad para ofrecer resultados duraderos. No solo trato el síntoma, sino que busco el origen 
                  del dolor para proporcionar una solución efectiva.
                </p>
                <p>
                  A lo largo de los años, he tenido el privilegio de ayudar a miles de pacientes a recuperar su movilidad 
                  y calidad de vida, siempre con un trato humano, cercano y honesto.
                </p>
              </div>

              {/* Stats/Values */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
                <div className="flex flex-col items-center text-center p-4 bg-cream rounded-lg">
                  <Award className="h-8 w-8 text-primary mb-2" />
                  <span className="font-bold text-lg text-primary">Experiencia</span>
                  <span className="text-sm text-gray-600">43+ Años</span>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-cream rounded-lg">
                  <Users className="h-8 w-8 text-primary mb-2" />
                  <span className="font-bold text-lg text-primary">Pacientes</span>
                  <span className="text-sm text-gray-600">Atención Personalizada</span>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-cream rounded-lg">
                  <Heart className="h-8 w-8 text-primary mb-2" />
                  <span className="font-bold text-lg text-primary">Enfoque</span>
                  <span className="text-sm text-gray-600">Humano e Integral</span>
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
