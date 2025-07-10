import { useMemo, type FC } from 'react';
import type { DailyWeather } from '../../../../../types/apiTypes';
import { getTimeDifference, GetHoursAndSeconds } from '../data';

type SecondaryType = {
  data: DailyWeather;
};

const Secondary: FC<SecondaryType> = ({ data }) => {
  const astroInfo = useMemo(
    () => [
      { label: 'Восход', value: GetHoursAndSeconds(data.sunrise) },
      { label: 'Закат', value: GetHoursAndSeconds(data.sunset) },
      { label: 'Световой день', value: getTimeDifference(data.sunrise, data.sunset) },

      { label: 'облачность', value: data.cloudcover.toFixed() + '%' },
      { label: 'УФ‑индекс', value: data.uvindex.toString() },
    ],
    [],
  );

  return (
    <div className='border-l-2 border-forecast-bg dark:border-secondary-text-dark pl-6 hidden lg:block min-w-fit'>
      <ul className='grid h-full'>
        {astroInfo.map(({ label, value }) => (
          <li key={label} className='flex justify-between gap-4'>
            <p className='text-secondary-text dark:text-secondary-text-dark'>{label}</p>
            <p className='font-bold'>{value}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Secondary;
