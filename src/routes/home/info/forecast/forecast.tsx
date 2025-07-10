import type { FC } from 'react';

import { useGetForecastWeatherQuery } from '../../../../services/api';
import Loading from '../../../../layouts/loading/loading';
import ForecastInfo from './forecastInfo';
import ForecastDaysMain from './ForecastDaysMain';
import ForecastForDays from './chartDays/ForecastForDays';

type ForecastType = {
  city: string;
};

const Forecast: FC<ForecastType> = ({ city }) => {
  const { data, isLoading, isError } = useGetForecastWeatherQuery({ q: city });

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : data ? (
        <>
          <ForecastInfo
            data={data.forecast.forecastday}
            hour={data.current.last_updated.split(' ')[1].split(':')[0]}
          />
          <ForecastForDays data={data.forecast.forecastday} />
          <ForecastDaysMain city={city} days={3} />
        </>
      ) : (
        isError && (
          <h1 className='text-4xl my-6 flex text-center justify-center font-bold'>
            Что-то пошло не так, попробуйте перезагрузить страницу
          </h1>
        )
      )}
    </>
  );
};

export default Forecast;
