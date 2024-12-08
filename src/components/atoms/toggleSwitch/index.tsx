import React from 'react';

type ToggleSwitchProps = {
  isChecked: boolean;
  onToggle: () => void;
};

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ isChecked, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={`w-20 h-8 flex items-center bg-gray-300 rounded-full p-1 transition-colors duration-300 focus:outline-none ${isChecked ? 'bg-mto_red_light' : 'bg-gray-300'
        } relative`}
    >
      <span className={`text-sm absolute left-2 ${isChecked ? 'text-white' : 'text-gray-500'}`}>Sí</span>
      <div
        className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ${isChecked ? 'translate-x-12' : 'translate-x-0'
          }`}
      ></div>
      <span className={`text-sm absolute right-2 ${isChecked ? 'text-white' : 'text-gray-500'}`}>No</span>
    </button>
  );
};

export default ToggleSwitch;