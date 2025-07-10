export type WeatherLayer = 'clouds_new' | 'precipitation_new' | 'pressure_new' | 'wind_new' | 'temp_new';
export const apiKey = import.meta.env.VITE_API_KEY_WEATHER_MAP;

export function getLayerName(layer: WeatherLayer): string {
  const names: Record<WeatherLayer, string> = {
    clouds_new: 'Облачность',
    precipitation_new: 'Осадки',
    pressure_new: 'Давление',
    wind_new: 'Ветер',
    temp_new: 'Температура'
  };
  return names[layer];
}

export  const weatherLayers: WeatherLayer[] = [
  'clouds_new',
  'precipitation_new',
  'pressure_new',
  'wind_new',
  'temp_new'
];
