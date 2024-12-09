import React from 'react';

type InputProps = {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  variant?: 'primary' | 'secondary';
  name?: string;
};

const Input: React.FC<InputProps> = ({ type, placeholder, value, onChange, className, variant = 'primary', name }) => {
  const baseClasses = "p-2 mb-4 rounded-md placeholder:text-xs placeholder:text-gray-400 focus:outline-none focus:ring-1";
  let variantClasses;

  switch (variant) {
    case 'primary':
      variantClasses = "w-full bg-gray-200 focus:ring-mto_red_light ";
      break;
    case 'secondary':
      variantClasses = "w-full bg-white border border-gray-300";
      break;
    default:
      console.warn(`Unknown variant: ${variant}. Defaulting to primary.`);
      variantClasses = "bg-gray-200 focus:ring-mto_red_light";
  }

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      className={`${baseClasses} ${variantClasses} ${className}`}
    />
  );
};

export default Input;