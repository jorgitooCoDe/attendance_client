import React from 'react';

type ToggleSwitchProps = {
  isChecked: boolean;
  onToggle: () => void;
};

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ isChecked, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 transition-colors duration-300 focus:outline-none ${isChecked ? 'bg-green-500' : 'bg-gray-300'
        }`}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ${isChecked ? 'translate-x-6' : 'translate-x-0'
          }`}
      ></div>
    </button>
  );
};

export default ToggleSwitch;