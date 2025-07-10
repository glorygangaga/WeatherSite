import { type FC } from 'react';
import ForecastDaysMain from '../home/info/forecast/ForecastDaysMain';
import { useAppSelector } from '../../hooks/redux';

const Forecasts: FC = () => {
  const city = useAppSelector((state) => state.data.city);
  return (
    <div className='container mx-auto max-w-4xl flex flex-col gap-5 px-6 relative'>
      <ForecastDaysMain city={city} days={15} />
    </div>
  );
};

export default Forecasts;
