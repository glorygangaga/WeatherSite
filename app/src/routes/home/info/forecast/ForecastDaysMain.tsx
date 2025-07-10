import { type FC } from 'react';

import { useGetForecastWeatherNewQuery } from '../../../../services/api';
import Loading from '../../../../layouts/loading/loading';
import ForecastDays from './forecastDays';

type ForecastDaysMainType = {
  city: string;
  days: number;
};

const ForecastDaysMain: FC<ForecastDaysMainType> = ({ city, days }) => {
  const { data, isLoading, isError } = useGetForecastWeatherNewQuery({ location: city, days });
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : data ? (
        <ForecastDays data={data.days} />
      ) : (
        isError && (
          <h1 className='text-4xl my-6 flex text-center justify-center font-bold'>
            К сожалению, мы не сможем показать доп. информацию для {city}
          </h1>
        )
      )}
    </>
  );
};

export default ForecastDaysMain;
