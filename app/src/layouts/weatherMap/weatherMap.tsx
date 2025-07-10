import { memo, useState, type FC } from 'react';
import { MapContainer, Marker, TileLayer, LayersControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import { apiKey, weatherLayers, getLayerName, type WeatherLayer } from './data';
import type { Location } from '../../types/storeTypes';
import MapUpdater from './mapUpdater';

type WeatherMapType = {
  coords: Location;
  showButtons?: boolean;
};

const WeatherMap: FC<WeatherMapType> = ({ coords, showButtons }) => {
  const [currentLayer, setCurrentLayer] = useState<WeatherLayer[]>(['clouds_new']);

  return (
    <div className='relative z-0'>
      <MapContainer
        center={{ lat: coords.lat, lng: coords.long }}
        scrollWheelZoom={showButtons ? true : false}
        zoom={9}
        style={{
          height: `${showButtons ? '85svh' : '190px'}`,
          width: '100%',
          borderTopLeftRadius: `${showButtons ? '' : '1.5rem'}`,
          borderTopRightRadius: `${showButtons ? '' : '1.5rem'}`,
          outline: 'none',
        }}
      >
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='© OpenStreetMap'
        />

        {!showButtons && (
          <>
            <TileLayer
              url={`https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${apiKey}`}
              attribution='&copy; OpenWeatherMap'
              opacity={1}
              className='brightness-200 contrast-200'
            />
            <TileLayer
              url={`https://tile.openweathermap.org/map/rain_new/{z}/{x}/{y}.png?appid=${apiKey}`}
              attribution='&copy; OpenWeatherMap'
              opacity={1}
              className='brightness-200 contrast-200'
            />
            <TileLayer
              url={`https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=${apiKey}`}
              attribution='&copy; OpenWeatherMap'
              opacity={1}
              className='brightness-200 contrast-200'
            />
          </>
        )}
        {showButtons && (
          <LayersControl position='topright'>
            {weatherLayers.map((layer) => (
              <LayersControl.Overlay
                key={layer}
                name={getLayerName(layer)}
                checked={layer === currentLayer.find((l) => l === layer)}
              >
                <TileLayer
                  url={`https://tile.openweathermap.org/map/${layer}/{z}/{x}/{y}.png?appid=${apiKey}`}
                  attribution='Weather data &copy; <a href="https://openweathermap.org">OpenWeatherMap</a>'
                  opacity={1}
                  className='brightness-200 contrast-200'
                />
              </LayersControl.Overlay>
            ))}
          </LayersControl>
        )}

        <Marker position={{ lat: coords.lat, lng: coords.long }} />
        <MapUpdater coords={coords} />
      </MapContainer>
    </div>
  );
};

export default memo(WeatherMap);
