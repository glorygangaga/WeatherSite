import { useEffect, useMemo, useState } from 'react';
import { skipToken } from '@reduxjs/toolkit/query';
import NearMeIcon from '@mui/icons-material/NearMe';

import { useGetCityByLocationQuery } from '../../services/api';
import type { Location } from '../../types/storeTypes';
import Loading from '../loading/loading';
import { useAppDispatch } from '../../hooks/redux';
import { actions } from '../../store/slice';

const FindMe = () => {
  const dispatch = useAppDispatch();

  const [location, setLocation] = useState<Location | undefined>(undefined);

  const queryArg = useMemo<Location | typeof skipToken>(() => {
    if (location) return location;
    return skipToken;
  }, [location]);

  const { isLoading, isError, data } = useGetCityByLocationQuery(queryArg, {
    refetchOnMountOrArgChange: true,
  });

  const GetLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation({
          lat: pos.coords.latitude,
          long: pos.coords.longitude,
        });
      },
      (err) => {
        console.error('Ошибка при получении геолокации:', err);
      },
    );
  };

  useEffect(() => {
    if (!isError && !isLoading && data) {
      const city = data[0].name;
      location && dispatch(actions.ChangeLocation(location));
      dispatch(actions.ChangeCity(city));
    }
  }, [data]);

  return (
    <button
      className='px-4 py-3 transition flex items-center max-md:rounded-none max-md:bg-settings-place max-md:dark:bg-settings-place-dark rounded-4xl disabled:cursor-not-allowed bg-default-button rounded-[100%] lg:rounded-default hover:bg-default-button-hover dark:hover:bg-default-button-hover-dark w-full h-full'
      onClick={GetLocation}
    >
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <NearMeIcon />
          <span className='hidden max-md:block lg:block'>Найти меня</span>
        </>
      )}
    </button>
  );
};

export default FindMe;
