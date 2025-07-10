import { type FC } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useLocation, useNavigate } from 'react-router';

import type { DailyWeather } from '../../../../types/apiTypes';
import { monthsGenitive, daysNames } from './data';
import Secondary from './day/secondary';
import Table from './day/table';
import { useDayMaxData } from '../../../../hooks/useDayMaxData';

type ForecastDaysType = {
  data: DailyWeather[];
};

const ForecastDays: FC<ForecastDaysType> = ({ data }) => {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const dayMaxData = useDayMaxData(data);

  return (
    <article>
      <ul className='grid gap-4 text-sm mb-4'>
        {data.map((day, index) => (
          <li
            key={day.datetimeEpoch}
            className='dark:bg-input-default-bg bg-input-default-bg-dark px-6 py-2 rounded-3xl'
          >
            <h1 className='text-red font-bold text-xl'>
              {index <= 2 ? daysNames[index] + ', ' : ''} {day.datetime.split('-')[2]}{' '}
              {monthsGenitive[parseInt(day.datetime.split('-')[1]) - 1]}
            </h1>
            <div className='flex'>
              <Table dayMaxData={dayMaxData} index={index} keyVal={day.datetimeEpoch} />
              <Secondary data={day} />
            </div>
          </li>
        ))}
      </ul>
      {location == '/' && (
        <div className='flex justify-center'>
          <button
            className='px-4 py-3 rounded-3xl bg-default-button hover:bg-default-button-hover flex gap-2'
            onClick={() => navigate('/forecasts')}
          >
            Прогноз на 2 недели
            <ArrowForwardIosIcon />
          </button>
        </div>
      )}
    </article>
  );
};

export default ForecastDays;
