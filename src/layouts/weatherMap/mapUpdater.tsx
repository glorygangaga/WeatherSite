import { useEffect, type FC } from 'react';
import { useMap } from 'react-leaflet';

import { type Location } from '../../types/storeTypes';

type WeatherMapType = {
  coords: Location;
};

const MapUpdater: FC<WeatherMapType> = ({ coords }) => {
  const map = useMap();

  useEffect(() => {
    map.flyTo({ lat: coords.lat, lng: coords.long }, 9);
  }, [map, coords]);

  return null;
};

export default MapUpdater;
