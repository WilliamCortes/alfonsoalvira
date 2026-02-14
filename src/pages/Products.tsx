import React from 'react';
import Layout from '../components/layout/Layout';
import ProductCard from '../components/products/ProductCard';
import { useProducts } from '../hooks/useProducts';
import { Loader2, Leaf } from 'lucide-react';

const Products: React.FC = () => {
  const { products, loading, error } = useProducts();

  return (
    <Layout>
      <div className="bg-white py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block p-3 rounded-full bg-secondary/20 text-primary mb-4">
              <Leaf className="h-6 w-6" />
            </span>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">Productos Naturales</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complementa tu tratamiento con nuestros productos de alta calidad, seleccionados especialmente para tu bienestar.
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="h-12 w-12 text-primary animate-spin" />
            </div>
          ) : error ? (
            <div className="text-center py-20 text-red-500">
              <p>Error al cargar los productos. Por favor intenta más tarde.</p>
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-20 text-gray-500">
              <p>No hay productos disponibles en este momento.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          <div className="mt-20 bg-cream-light rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-2xl lg:text-3xl font-serif font-bold text-primary mb-4">¿No encuentras lo que buscas?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contáctanos directamente para preguntarnos por productos específicos o para recibir una recomendación personalizada.
            </p>
            <a 
              href="https://wa.me/573202168589" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 bg-accent-orange text-white hover:bg-[#F4511E] shadow-md h-12 px-8 text-lg"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
