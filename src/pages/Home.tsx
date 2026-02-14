import React from 'react';
import Hero from '../components/home/Hero';
import ServicesPreview from '../components/home/ServicesPreview';
import Testimonials from '../components/home/Testimonials';
import Layout from '../components/layout/Layout';

const Home: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <ServicesPreview />
      <Testimonials />
    </Layout>
  );
};

export default Home;
