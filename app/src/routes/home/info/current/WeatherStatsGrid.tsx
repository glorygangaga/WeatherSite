import AirIcon from '@mui/icons-material/Air';
import CompressIcon from '@mui/icons-material/Compress';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import CloudIcon from '@mui/icons-material/Cloud';
import SunnyIcon from '@mui/icons-material/Sunny';
import OpacityIcon from '@mui/icons-material/Opacity';
import type { WeatherCurrent } from '../../../../types/apiTypes';
import { memo } from 'react';

type IconType = React.ComponentType<{
  style?: React.CSSProperties;
}>;

interface WeatherStatItem {
  Icon: IconType;
  value: string;
  key: string;
}

interface WeatherStatsGridProps {
  data: WeatherCurrent;
}

const WeatherStatsGrid: React.FC<WeatherStatsGridProps> = ({ data }) => {
  const weatherStats: WeatherStatItem[] = [
    {
      Icon: AirIcon,
      value: `${((data.wind_kph * 1000) / 3600).toFixed(1)} м/с, ${data.wind_dir}`,
      key: 'wind',
    },
    {
      Icon: CompressIcon,
      value: `${(data.pressure_mb * 0.750062).toFixed(0)} мм рт. ст.`,
      key: 'pressure',
    },
    {
      Icon: WaterDropIcon,
      value: `${data.precip_mm} мм`,
      key: 'precip',
    },
    {
      Icon: CloudIcon,
      value: `${data.cloud}%`,
      key: 'cloud',
    },
    {
      Icon: SunnyIcon,
      value: `${data.uv} УФ`,
      key: 'uv',
    },
    {
      Icon: OpacityIcon,
      value: `${data.humidity}%`,
      key: 'humidity',
    },
  ];

  return (
    <div className='grid gap-x-5 lg:grid-cols-3 grid-cols-2'>
      {weatherStats.map(({ Icon, value, key }) => (
        <h4 key={key} className='flex gap-2 items-center'>
          <div className='bg-default-button rounded-full min-w-[25px] min-h-[25px] flex items-center justify-center relative'>
            <Icon style={{ width: 17, height: 17 }} />
          </div>
          {value}
        </h4>
      ))}
    </div>
  );
};

export default memo(WeatherStatsGrid);
