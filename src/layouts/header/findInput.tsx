import { memo, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

import { useIsFocusVisible } from '../../hooks/useFocusVisible';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { actions } from '../../store/slice';

const FindInput = () => {
  const dispatch = useAppDispatch();
  const { city, favoritesCities } = useAppSelector((state) => state.data);

  const [inputRef, isFocusVisible, reset] = useIsFocusVisible<HTMLInputElement>();
  const [value, setValue] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = /^[\p{L}\s-]+$/u.test(value);
    if (!value.trim() || !isValid) return;

    dispatch(actions.ChangeCity(value));
    inputRef.current?.blur();
    reset();
    setValue('');
  };

  return (
    <form className='relative h-full' onSubmit={(e) => handleSubmit(e)}>
      <input
        ref={inputRef}
        name='findCity'
        id='findCity'
        className='rounded-4xl dark:bg-input-default-bg bg-input-default-bg-dark rounded-default py-1 px-8 transition min-h-[56px]'
        value={isFocusVisible ? value : ''}
        onChange={(e) => isFocusVisible && setValue(e.target.value)}
      />
      <label
        htmlFor='findCity'
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-all ${
          isFocusVisible && 'opacity-0 invisible'
        }`}
      >
        <SearchIcon />
        {city ? city : 'Город'}
      </label>

      {(city || favoritesCities.length > 0) && (
        <ul
          className={`absolute top-[120%] left-0 rounded-3xl w-full transition-all dark:bg-input-default-bg bg-input-default-bg-dark p-4 grid gap-2 ${
            isFocusVisible ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          {city && (
            <li className='text-secondary-text dark:text-secondary-text-dark'>Текущее: {city}</li>
          )}
          {favoritesCities.length > 0 && (
            <>
              <p className='text-xs text-secondary-text dark:text-secondary-text-dark'>
                В избранном:{' '}
              </p>
              {favoritesCities.map((favCity) => (
                <li
                  className='hover:bg-default-button-hover rounded-2xl py-1 px-4 cursor-pointer max-h-96'
                  key={favCity}
                  onClick={() => {
                    dispatch(actions.ChangeCity(favCity));
                  }}
                >
                  {favCity}
                </li>
              ))}
            </>
          )}
        </ul>
      )}
    </form>
  );
};

export default memo(FindInput);
