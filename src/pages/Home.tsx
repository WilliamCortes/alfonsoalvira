import React from 'react';
import Hero from '../components/home/Hero';
import Authority from '../components/home/Authority';
import Problem from '../components/home/Problem';
import Solution from '../components/home/Solution';
import ServicesPreview from '../components/home/ServicesPreview';
import Testimonials from '../components/home/Testimonials';
import VideoCarousel from '../components/home/VideoCarousel';
import HowItWorks from '../components/home/HowItWorks';
import Layout from '../components/layout/Layout';
import { Phone } from 'lucide-react';
import Button from '../components/common/Button';

const Home: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <Authority />
      <Problem />
      <Solution />
      <VideoCarousel />
      <ServicesPreview />
      <Testimonials />
      <HowItWorks />
      
      {/* Floating CTA for Mobile */}
      <div className="fixed bottom-4 right-4 z-50 md:hidden">
        <Button 
          size="lg" 
          href="https://wa.me/573202168589?text=Hola,%20quisiera%20agendar%20una%20cita." 
          external
          className="rounded-full shadow-2xl bg-green-600 hover:bg-green-700 p-4 h-16 w-16 flex items-center justify-center"
        >
          <Phone className="h-8 w-8 text-white" />
        </Button>
      </div>
    </Layout>
  );
};

export default Home;
