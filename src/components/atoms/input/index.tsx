import React from 'react';

type InputProps = {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full p-2 mb-4 bg-gray-200 rounded-md placeholder:text-xs placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-mto_red_light"
    />
  );
};

export default Input;