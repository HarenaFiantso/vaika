'use client';

import { useState } from 'react';
import { BsChevronContract } from 'react-icons/bs';

type CustomSelectProps = {
  options: { value: string; title: string }[];
  label: string;
  containerStyle?: string;
  parentContainerStyle?: string;
  onChange: (value: string, name: string) => void;
  name: string;
};

const CustomSelect = ({ options, onChange, label, containerStyle, parentContainerStyle, name }: CustomSelectProps) => {
  const [isShownOptions, setIsShownOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(label);
  return (
    <div className={`relative  w-full ${parentContainerStyle}`}>
      <button
        type='button'
        className={`relative flex w-full min-w-[130px] items-center justify-between px-4 py-2.5 text-sm ${containerStyle}`}
        onClick={() => setIsShownOptions(true)}
      >
        <span className='block truncate text-slate-400 text-sm capitalize'>{selectedOption}</span>
        <BsChevronContract size={16} className="ml-4 text-slate-400" />
      </button>
      {isShownOptions && (
        <ul className='absolute z-10 mt-2 flex max-h-60 w-full flex-col items-center space-y-1 overflow-y-auto rounded border bg-white shadow dark:border-slate-700 dark:bg-slate-800 '>
          {options.map(({ value, title }, i) => (
            <li
              key={i}
              className='w-full cursor-pointer px-2 py-1.5 text-sm hover:bg-blue-600 hover:text-white  dark:hover:bg-slate-700'
              onClick={() => {
                onChange(value, name);
                setSelectedOption(value);
                setIsShownOptions(false);
              }}
            >
              {title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
