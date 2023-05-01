import { useState } from 'react';
import { FaTimes, FaInfoCircle } from 'react-icons/fa';
import Products from '../interfaces/Products';

interface ModalProps {
  product: Products;
  onClose: () => void;
}

export function Modal({ product, onClose }: ModalProps) {
  const [showDescription, setShowDescription] = useState(false);

  function handleMouseEnter() {
    setShowDescription(true);
  }

  function handleMouseLeave() {
    setShowDescription(false);
  }

  return (
    <>
      {product.description && (
        <>
          <div
            className="cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <FaInfoCircle size={24} />
          </div>
          {showDescription && (
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg z-50">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold">{product.title}</h2>
                <button onClick={onClose}>
                  <FaTimes size={24} />
                </button>
              </div>
              <p>{product.description}</p>
            </div>
          )}
        </>
      )}
    </>
  );
}
