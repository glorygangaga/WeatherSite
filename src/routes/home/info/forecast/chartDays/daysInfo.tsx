import type { FC } from 'react';
import type { ForecastDay } from '../../../../../types/apiTypes';
import { getWeekDay } from '../data';

type DaysInfoType = {
  data: ForecastDay[];
};

const DaysInfo: FC<DaysInfoType> = ({ data }) => {
  return (
    <ul className='flex justify-between'>
      {data.map((day, index) => {
        return (
          <li key={day.date_epoch} className='mb-3 flex justify-center'>
            <div className='odd:bg-forecast-days-bg odd:dark:bg-forecast-days-bg-dark rounded-xl'>
              <div className='flex flex-col items-center'>
                <div className='flex flex-col items-center bg-arrow-button dark:bg-forecast-days-main-dark p-2 rounded-xl'>
                  <h2 className='font-bold text-2xl'>{getWeekDay(new Date(day.date))}</h2>
                  <h3 className='text-center'>
                    {index === 0 ? 'Сегодня' : day.date.split('-')[2]}
                  </h3>
                  <img src={day.day.condition.icon} className='max-w-24' alt='dayImage' />
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default DaysInfo;
