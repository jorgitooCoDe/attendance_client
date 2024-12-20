import React from 'react';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, size = 'medium' }) => {
  if (!isOpen) return null;

  let sizeClasses;
  switch (size) {
    case 'small':
      sizeClasses = 'max-w-sm';
      break;
    case 'medium':
      sizeClasses = 'max-w-md';
      break;
    case 'large':
      sizeClasses = 'max-w-3xl';
      break;
    default:
      sizeClasses = 'max-w-md';
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className={`bg-white rounded-lg w-full ${sizeClasses} p-6 relative`}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          &#10005;
        </button>

        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <div className="max-h-[60vh] md:max-h-[70vh] lg:max-h-[80vh] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;