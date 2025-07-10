import type { FC } from 'react';
import HistoryIcon from '@mui/icons-material/History';

import { useAppDispatch } from '../../../hooks/redux';
import { actions } from '../../../store/slice';
import FindMe from '../findMe';
import Favorites from '../Favorites';

type SettingsButtonsType = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SettingsButtons: FC<SettingsButtonsType> = ({ setIsOpen }) => {
  const dispatch = useAppDispatch();
  const ClearData = () => {
    dispatch(actions.ClearStore());
    CloseSettings();
  };

  const CloseSettings = () => setIsOpen((prev) => !prev);

  return (
    <div className='grid gap-2'>
      <button
        className='flex justify-between hover:bg-settings-hover-button min-w-max items-center px-2 py-3 rounded-3xl'
        onClick={ClearData}
      >
        <HistoryIcon />
        Сбросить все данные обо мне
      </button>
      <div className='block md:hidden' onClick={CloseSettings}>
        <FindMe />
      </div>
      <div className='block md:hidden' onClick={CloseSettings}>
        <Favorites />
      </div>
    </div>
  );
};

export default SettingsButtons;
