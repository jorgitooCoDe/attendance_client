import React from 'react';

type ButtonProps = {
  text: string;
  onClick: () => void;
  className?: string;
};

const BaseButton: React.FC<ButtonProps & { variantClasses: string }> = ({ text, onClick, variantClasses, className = '' }) => {
  const baseClasses = "py-2 mt-4 rounded transition-colors focus:outline-none";
  const classes = `${baseClasses} ${variantClasses} ${className}`;

  return (
    <button onClick={onClick} className={classes}>
      {text}
    </button>
  );
};

export const PrimaryButton: React.FC<ButtonProps> = (props) => (
  <BaseButton {...props} variantClasses="w-full bg-mto_gray text-center mx-auto hover:bg-mto_dark_gray text-white" />
);

export const SecondaryButton: React.FC<ButtonProps> = (props) => (
  <BaseButton {...props} variantClasses="w-2/3 border bg-mto_red hover:bg-mto_dark_red text-white" />
);

export const TertiaryButton: React.FC<ButtonProps> = (props) => (
  <BaseButton {...props} variantClasses="bg-transparent text-mto_gray underline hover:text-red-500" />
);

export const SaveButton: React.FC<ButtonProps> = (props) => (
  <BaseButton {...props} variantClasses="w-1/6 bg-mto_red hover:bg-mto_gray text-white" />
);

export const LargeSquareButton: React.FC<ButtonProps> = (props) => (
  <BaseButton {...props} variantClasses="w-32 h-32 bg-mto_gray hover:bg-mto_red_light text-white flex items-center justify-center" />
);