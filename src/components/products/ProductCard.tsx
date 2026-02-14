import React from 'react';
import Button from '../common/Button';
import { ShoppingBag } from 'lucide-react';
import { Product } from '../../hooks/useProducts';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Generar imagen por defecto si no hay image_url
  const imageUrl = product.image_url || `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=natural+medicine+product+packaging+${encodeURIComponent(product.name)}+white+background+studio+lighting&image_size=square`;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col h-full group">
      <div className="aspect-square relative overflow-hidden bg-gray-50">
        <img 
          src={imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
          {product.category}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold font-serif text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">{product.description}</p>
        
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-50">
          <span className="text-2xl font-bold text-primary">
            ${product.price.toLocaleString('es-CO')}
          </span>
        </div>
        
        <div className="mt-4">
          <Button 
            href={`https://wa.me/573202168589?text=${encodeURIComponent(`Hola, me interesa comprar: ${product.name}`)}`}
            external
            className="w-full"
            variant="primary"
          >
            <ShoppingBag className="mr-2 h-4 w-4" />
            Comprar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
