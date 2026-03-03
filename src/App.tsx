import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from './components/layout/Layout';

// Lazy loading de páginas para mejor rendimiento
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));
const SeoLanding = lazy(() => import('./pages/SeoLanding'));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="flex flex-col items-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      <p className="mt-4 text-gray-600 font-medium">Cargando...</p>
    </div>
  </div>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Suspense fallback={<PageLoader />}><Home /></Suspense></Layout>} />
      <Route path="/about" element={<Layout><Suspense fallback={<PageLoader />}><About /></Suspense></Layout>} />
      <Route path="/services" element={<Layout><Suspense fallback={<PageLoader />}><Services /></Suspense></Layout>} />
      <Route path="/contact" element={<Layout><Suspense fallback={<PageLoader />}><Contact /></Suspense></Layout>} />
      <Route path="/don-alfonso-alvira-terapeuta-villavicencio" element={<Layout><Suspense fallback={<PageLoader />}><SeoLanding /></Suspense></Layout>} />
    </Routes>
  );
}

export default App;
