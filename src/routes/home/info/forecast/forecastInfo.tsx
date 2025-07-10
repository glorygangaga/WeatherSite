import { useEffect, useRef, useState, type FC } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import type { ForecastDay } from '../../../../types/apiTypes';
import ForecastInfoDay from './forecastInfoDay';

type ForecastInfoType = {
  data: ForecastDay[];
  hour: string;
};

const maxClicks = 4;

const ForecastInfo: FC<ForecastInfoType> = ({ data, hour }) => {
  const [value, setValue] = useState<number>(0);
  const refElement = useRef<HTMLUListElement>(null);

  const handleClick = (cnt: number) => {
    const newValue = value + cnt;
    if (newValue < 0 || newValue > maxClicks) return;
    setValue(newValue);
  };

  useEffect(() => {
    const track = refElement.current;
    if (!track) return;
    const fullWidth = track.scrollWidth;
    const visibleWidth = track.clientWidth;

    const precent = (100 / maxClicks) * value;
    const xPos = (precent * (fullWidth - visibleWidth)) / 100;

    track.style.transform = `translateX(-${xPos}px)`;
  }, [value]);

  return (
    <article className='bg-default-button dark:bg-forecast-bg pt-4 px-4 pb-3 rounded-3xl relative overflow-x-hidden'>
      <button
        className='dark:bg-arrow-button-dark bg-arrow-button rounded-[50%] z-10 min-w-[40px] min-h-[40px] absolute transition hover:scale-105 top-1/2 left-3 -translate-y-1/2 disabled:opacity-0 disabled:invisible'
        disabled={value == 0}
        onClick={() => handleClick(-1)}
      >
        <ArrowForwardIosIcon style={{ rotate: '180deg' }} />
      </button>
      <ul className={`flex gap-6 w-[100%] min-w-[100%] relative transition`} ref={refElement}>
        {data.slice(0, 2).map((day, index) => (
          <li
            key={day.date_epoch}
            className={` ${
              index === 0
                ? 'border-r-2 border-forecast-bg dark:border-secondary-text-dark pr-3'
                : ''
            }`}
          >
            <ForecastInfoDay hours={day.hour} hourTime={hour} isThatDay={index === 0} />
          </li>
        ))}
      </ul>
      <button
        className='dark:bg-arrow-button-dark bg-arrow-button rounded-[50%] min-w-[40px] min-h-[40px] absolute transition hover:scale-105 top-1/2 right-3 -translate-y-1/2 disabled:opacity-0 disabled:invisible'
        disabled={value == maxClicks}
        onClick={() => handleClick(1)}
      >
        <ArrowForwardIosIcon />
      </button>
    </article>
  );
};

export default ForecastInfo;
