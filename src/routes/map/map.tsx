import type { FC } from 'react';
import WeatherMap from '../../layouts/weatherMap/weatherMap';
import { useAppSelector } from '../../hooks/redux';

const Map: FC = () => {
  const location = useAppSelector((state) => state.data.location);
  return <WeatherMap showButtons={true} coords={location} />;
};

export default Map;
