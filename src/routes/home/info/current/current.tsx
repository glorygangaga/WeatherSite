import { memo, type FC } from 'react';

import type { WeatherCurrent } from '../../../../types/apiTypes';
import WeatherStatsGrid from './WeatherStatsGrid';

type CurrentType = {
  data: WeatherCurrent;
};

const Current: FC<CurrentType> = ({ data }) => {
  return (
    <div className='flex gap-4 justify-between flex-col sm:flex-row items-center sm:items-stretch'>
      <div>
        <h1 className='text-7xl font-bold'>
          {data.temp_c > 0 ? '+' : '-'}
          {data.temp_c.toFixed()}
          <span>°</span>
        </h1>

        <div className='grid gap-2 items-center'>
          <div className='flex'>
            <img src={data.condition.icon} className='w-10 h-10' alt='image' />
            <h2 className='text-4xl'>{data.condition.text}</h2>
          </div>
          <h3>
            Ощущается как {data.feelslike_c > 0 ? '+' : '-'}
            {data.feelslike_c.toFixed()}
            <span>°</span>
          </h3>
        </div>
      </div>

      <div className='flex gap-3 justify-between flex-row'>
        <div className='text-secondary-text dark:text-secondary-text-dark flex justify-between'>
          <WeatherStatsGrid data={data} />
        </div>
      </div>
    </div>
  );
};

export default memo(Current);
