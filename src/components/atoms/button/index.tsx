import React from 'react';

type ButtonProps = {
  text: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
};

const Button: React.FC<ButtonProps> = ({ text, onClick, variant = 'primary' }) => {
  const baseClasses = "py-2 mt-4 rounded transition-colors hover:bg-mto_red rounded-2xl text-white";
  const primaryClasses = "w-full bg-mto_gray text-center mx-auto";
  const secondaryClasses = "w-2/3 border bg-mto_red hover:bg-mto_gray";

  const classes = `${baseClasses} ${variant === 'primary' ? primaryClasses : secondaryClasses}`;

  if (variant !== 'primary' && variant !== 'secondary') {
    console.error(`Invalid variant prop: ${variant}. Expected 'primary' or 'secondary'.`);
  }

  return (
    <button onClick={onClick} className={classes}>
      {text}
    </button>
  );
};

export default Button;