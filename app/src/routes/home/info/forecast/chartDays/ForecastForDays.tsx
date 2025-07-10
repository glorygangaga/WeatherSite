import { type FC } from 'react';
import type { ForecastDay } from '../../../../../types/apiTypes';
import DaysInfo from './daysInfo';
import ChartInfo from './ChartInfo';

type ForecastForDaysType = {
  data: ForecastDay[];
};

const ForecastForDays: FC<ForecastForDaysType> = ({ data }) => {
  return (
    <article className='container max-w-xl mx-auto dark:bg-input-default-bg bg-input-default-bg-dark p-6 rounded-3xl grid gap-3'>
      <h1 className='text-2xl font-bold'>Прогноз на {data.length} дня</h1>
      <DaysInfo data={data} />
      <div className='grid gap-1 font-bold text-lg'>
        <ChartInfo data={data} />
      </div>
    </article>
  );
};

export default ForecastForDays;
