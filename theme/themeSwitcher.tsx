'use client';

import { useTheme } from 'next-themes';
import { useState } from 'react';
import { BsSun } from 'react-icons/bs';
import { MdDarkMode } from 'react-icons/md';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [isDropdownShown, setIsDropdownShown] = useState(false);

  return (
    <div className="relative">
      {theme === 'light' ? (
        <BsSun
          size={20}
          className={`h-6 w-6 cursor-pointer text-slate-700 `}
          onClick={() => setIsDropdownShown((prevState) => !prevState)}
        />
      ) : (
        <MdDarkMode
          size={20}
          className={`h-6 w-6 cursor-pointer text-slate-400 `}
          onClick={() => setIsDropdownShown((prevState) => !prevState)}
        />
      )}
      {isDropdownShown && (
        <div
          className="absolute -right-6 top-12 z-50 flex min-w-[140px] flex-col rounded-md border-gray-500 bg-white/70 from-slate-700 to-slate-900 text-center  backdrop-blur-lg md:-right-1/3 dark:border-slate-700/95 dark:bg-gradient-radial">
          <button
            onClick={() => {
              setIsDropdownShown(false);
              setTheme('light');
            }}
            className="flex items-center gap-2 rounded-t-md  p-2 hover:bg-white/30 transition-all dark:hover:bg-slate-700"
          >
            <BsSun size={20} className={`h-6 w-6 ${theme === 'dark' ? 'text-blue-500' : 'text-slate-700'}`} />
            <span className="text-slate-600 dark:text-slate-300">Light</span>
          </button>
          <button
            onClick={() => {
              setIsDropdownShown(false);
              setTheme('dark');
            }}
            className="flex items-center gap-2 p-2  hover:bg-white/30 dark:hover:bg-slate-700 "
          >
            <MdDarkMode size={20} className={`h-6 w-6 ${theme === 'dark' ? 'text-blue-500' : 'text-slate-700'}`} />
            <span className="text-slate-600 dark:text-slate-300">Dark</span>
          </button>
        </div>
      )}
    </div>
  );
}
