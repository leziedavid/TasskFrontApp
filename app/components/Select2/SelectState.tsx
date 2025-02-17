"use client";

import React, { useState, useEffect } from 'react';

interface SelectStateProps {
  setState: React.Dispatch<React.SetStateAction<string>>;
  placeholder2: string;
  stateValue: string;
  defaultDisabled?: boolean;
}

const SelectState: React.FC<SelectStateProps> = ({ setState, placeholder2, stateValue, defaultDisabled }) => {
  const [selectedOption, setSelectedOption] = useState<string>(stateValue); // Initialise avec stateValue
  const [isOptionSelected, setIsOptionSelected] = useState<boolean>(false);

  useEffect(() => {
    setSelectedOption(stateValue); // Met à jour selectedOption si stateValue change
  }, [stateValue]);

  const changeTextColor = () => {
    setIsOptionSelected(true);
  };

  const changeState = (value: string) => {
    setSelectedOption(value);
    setIsOptionSelected(true);
    setState(value);
  };

  return (
    <div>
      <div className="relative z-0 bg-white dark:bg-form-input">
        <select
          value={selectedOption}
          onChange={(e) => {
            changeState(e.target.value);
            changeTextColor();
          }}
          className={`relative z-20 w-full appearance-none rounded-lg border border-stroke bg-transparent py-2 px-5 outline-none transition focus:border-[#03233F] active:border-[#03233F] dark:border-form-strokedark dark:bg-form-input ${isOptionSelected ? 'text-black dark:text-white' : ''}`}
          disabled={defaultDisabled}
        >
          <option value="" disabled className="text-body dark:text-bodydark">
            {placeholder2}
          </option>
          <option value="EN_COURS" className="text-body dark:text-bodydark">
            EN COURS
          </option>
          <option value="EN_ATTENTE" className="text-body dark:text-bodydark">
            EN ATTENTE
          </option>
          <option value="TERMINER" className="text-body dark:text-bodydark">
            TERMINER
          </option>
        </select>

        <span className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.8">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                fill="#637381"
              ></path>
            </g>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default SelectState;
