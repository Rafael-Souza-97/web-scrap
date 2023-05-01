import React from 'react';

const ProductNotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-48">
      <h1 className="text-4xl font-bold text-center mb-8">Produto não encontrado</h1>
      <p className="text-gray-500 text-center">Desculpe, não encontramos o produto que você está procurando.</p>
    </div>
  );
};

export default ProductNotFound;
