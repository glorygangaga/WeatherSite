import { useRef, useState, type FC } from 'react';
import SettingsIcon from '@mui/icons-material/Settings';

import { useClickOutside } from '../../../hooks/useClickOutside';
import Theme from './theme';
import SettingsButtons from './settingsButtons';

const Settings: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  useClickOutside(panelRef, () => setIsOpen(false), isOpen);

  return (
    <>
      <button
        className='bg-default-button rounded-[50%] min-w-[56px] h-[56px] relative transition hover:bg-default-button-hover'
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <SettingsIcon
          style={{ width: '20px', height: '20px' }}
          className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
        />
      </button>
      {isOpen && (
        <div
          ref={panelRef}
          className='absolute z-50 right-0 top-0 bg-settings-place dark:bg-settings-place-dark rounded-3xl p-3 w-[300px] mr-3'
        >
          <Theme />
          <SettingsButtons setIsOpen={setIsOpen} />
        </div>
      )}
    </>
  );
};

export default Settings;
