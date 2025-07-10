import type { FC } from 'react';
import type { HourForecast } from '../../../../types/apiTypes';

type ForecastInfoDayType = {
  hours: HourForecast[];
  hourTime: string;
  isThatDay: boolean;
};

const ForecastInfoDay: FC<ForecastInfoDayType> = ({ hours, hourTime, isThatDay }) => {
  return (
    <>
      <ul className='flex max-w-fit gap-5'>
        {hours.map((hour) => {
          const isCheck =
            isThatDay && parseInt(hour.time.split(' ')[1].split(':')[0]) >= parseInt(hourTime);

          return (
            (isCheck || !isThatDay) && (
              <li
                key={hour.time_epoch}
                className='w-20 grid gap-1 max-w-fit text-lg justify-items-center'
              >
                <p>{hour.time.split(' ')[1]}</p>
                <img src={hour.condition.icon} alt='timesImages' className='w-14 h-14' />
                <p className={`text-xs text-blue ${hour.chance_of_rain < 30 && 'invisible'}`}>
                  {hour.chance_of_rain >= 30 ? hour.chance_of_rain + '%' : '0'}
                </p>
                <p className='font-bold'>
                  {hour.temp_c > 0 ? '+' : '-'}
                  {hour.temp_c.toFixed(0)}
                  <span>°</span>
                </p>
              </li>
            )
          );
        })}
      </ul>
    </>
  );
};

export default ForecastInfoDay;
