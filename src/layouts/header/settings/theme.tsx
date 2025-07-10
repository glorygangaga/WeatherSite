import { useEffect, useState, type FC } from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

import { buttons } from './data';

const Theme: FC = () => {
  const [isDark, setIsDark] = useState(
    () =>
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches),
  );

  useEffect(() => {
    const root = document.documentElement;

    if (!isDark) {
      root.classList.remove('dark');
      localStorage.theme = 'light';
    } else {
      root.classList.add('dark');
      localStorage.theme = 'dark';
    }
  }, [isDark]);

  return (
    <div className='mb-4'>
      <div className='flex gap-2 items-center mb-2'>
        {isDark ? <DarkModeIcon /> : <LightModeIcon />}

        <p>Тема</p>
      </div>
      <div className='flex justify-evenly rounded-2xl border-main-color-white border-[1px] p-1'>
        {buttons.map((button) => {
          const makeDark = button === 'Темная';
          const active = isDark === makeDark;

          return (
            <button
              key={button}
              onClick={() => setIsDark(makeDark)}
              className={`hover:bg-settings-hover-button py-2 px-8 rounded-2xl transition ${
                active &&
                'bg-input-default-bg text-main-bg-white hover:opacity-80 hover:bg-main-bg-black hover:text-main-bg-black dark:hover:text-main-bg-white'
              }`}
            >
              {button}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Theme;
