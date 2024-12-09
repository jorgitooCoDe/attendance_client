import React from 'react';

type ButtonProps = {
  text: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'save';
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ text, onClick, variant = 'primary', className = '' }) => {
  const baseClasses = "py-2 mt-4 rounded transition-colors focus:outline-none";

  const primaryClasses = "w-full bg-mto_gray text-center mx-auto hover:bg-mto_dark_gray text-white";
  const secondaryClasses = "w-2/3 border bg-mto_red hover:bg-mto_dark_red text-white";
  const tertiaryClasses = "bg-transparent text-mto_gray underline hover:text-red-500";
  const saveClasess = "w-1/6 bg-mto_red hover:bg-mto_gray text-white";

  let variantClasses = '';

  switch (variant) {
    case 'primary':
      variantClasses = primaryClasses;
      break;
    case 'secondary':
      variantClasses = secondaryClasses;
      break;
    case 'tertiary':
      variantClasses = tertiaryClasses;
      break;
    case 'save':
      variantClasses = saveClasess;
      break;
    default:
      console.error(`Invalid variant prop: ${variant}. Expected 'primary', 'secondary', 'tertiary', or 'save'.`);
      variantClasses = primaryClasses;
  }

  const classes = `${baseClasses} ${variantClasses} ${className}`;

  return (
    <button onClick={onClick} className={classes}>
      {text}
    </button>
  );
};

export default Button;