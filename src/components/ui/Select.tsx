import React, { useState, ChangeEvent } from 'react';

export type Option = {
  label: string;
  value: string;
};

interface CustomSelectProps extends HTMLSelectElement {
  options: Option[];
  onSelect: (value: string) => void;
}

const Select: React.ForwardRefRenderFunction<
  HTMLSelectElement,
  CustomSelectProps
> = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
    onSelect(value);
  };

  return (
    <div className="relative">
      <select
        className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 cursor-pointer w-full"
        value={selectedOption}
        onChange={handleSelect}
      >
        <option value="" disabled hidden>
          Select an option
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <svg
        className="absolute w-6 h-6 right-1 top-1/2 -mt-3 pointer-events-none"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M19 9l-7 7-7-7"></path>
      </svg>
    </div>
  );
};

export default Select;
