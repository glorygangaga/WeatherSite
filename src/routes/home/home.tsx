import { useMemo, type FC } from 'react';
import { skipToken } from '@reduxjs/toolkit/query';
import { useNavigate } from 'react-router';

import { useGetCurrentWeatherQuery } from '../../services/api';
import { useAppSelector } from '../../hooks/redux';
import Loading from '../../layouts/loading/loading';
import DefaultText from './defaultText';
import type { SendMessage } from '../../types/apiTypes';
import Forecast from './info/forecast/forecast';
import WeatherMap from '../../layouts/weatherMap/weatherMap';
import Current from './info/current/current';

const Home: FC = () => {
  const navigate = useNavigate();
  const city = useAppSelector((state) => state.data.city);
  const queryArg: SendMessage | typeof skipToken = useMemo(
    () => (city ? { q: city } : skipToken),
    [city],
  );

  const { isLoading, isError, data } = useGetCurrentWeatherQuery(queryArg, {
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
    refetchOnFocus: true,
  });

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : data && city ? (
        <>
          <div className='container mx-auto max-w-4xl flex flex-col gap-5 px-6 relative pt-40'>
            <div className='absolute w-full h-auto top-0 left-0 px-6 z-0'>
              <WeatherMap coords={{ lat: data.location.lat, long: data.location.lon }} />
            </div>
            <button
              className='absolute right-0 top-3 mr-8 px-4 py-2 hover:text-red rounded-xl font-bold z-[1] bg-settings-place dark:bg-settings-place-dark'
              onClick={() => city && navigate('/map')}
            >
              Карта осадков
            </button>
            <section className='dark:bg-input-default-bg bg-input-default-bg-dark p-6 relative rounded-3xl'>
              <Current data={data.current} />
            </section>
            <section className='gap-10 grid'>
              <Forecast city={data.location.name} />
            </section>
          </div>
        </>
      ) : (
        <DefaultText isError={isError} />
      )}
    </>
  );
};

export default Home;
