export type SendMessage = {
  q: string,
};

export type ErrorMessage = {
  code: number,
  message: string
};

export type WeatherLocation = {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
};

export type WeatherCurrentCondition = {
  text: string;
  icon: string;
  code: number;
};

export type WeatherCurrentAirQuality = {
  co: number;
  no2: number;
  o3: number;
  so2: number;
  pm2_5: number;
  pm10: number;
  'us-epa-index': number;
  'gb-defra-index': number;
};

export type WeatherCurrent = {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: WeatherCurrentCondition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
  air_quality: WeatherCurrentAirQuality;
};

export type WeatherData = {
  location: WeatherLocation;
  current: WeatherCurrent;
};

export type DayForecast = {
  maxtemp_c: number;
  maxtemp_f: number;
  mintemp_c: number;
  mintemp_f: number;
  avgtemp_c: number;
  avgtemp_f: number;
  maxwind_mph: number;
  maxwind_kph: number;
  totalprecip_mm: number;
  totalprecip_in: number;
  avgvis_km: number;
  avgvis_miles: number;
  avghumidity: number;
  daily_will_it_rain: number;
  daily_chance_of_rain: number;
  daily_will_it_snow: number;
  daily_chance_of_snow: number;
  condition: WeatherCurrentCondition;
  uv: number;
};

export type Astro = {
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  moon_phase: string;
  moon_illumination: string;
};

export type HourForecast = {
  time_epoch: number;
  time: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: WeatherCurrentCondition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  windchill_c: number;
  windchill_f: number;
  heatindex_c: number;
  heatindex_f: number;
  dewpoint_c: number;
  dewpoint_f: number;
  will_it_rain: number;
  chance_of_rain: number;
  will_it_snow: number;
  chance_of_snow: number;
  vis_km: number;
  vis_miles: number;
  gust_mph: number;
  gust_kph: number;
  uv: number;
};

export type ForecastDay = {
  date: string;
  date_epoch: number;
  day: DayForecast;
  astro: Astro;
  hour: HourForecast[];
};

export type Forecast = {
  forecastday: ForecastDay[]
};

export type WeatherForecastData = WeatherData & {
  forecast: Forecast;
};

export type WeatherSearchInfo = {
  id: number,
  name: string,
  region: string,
  country: string,
  lat: number,
  lon: number,
  url: string
};

export type WeatherSearch = WeatherSearchInfo[];

export interface WeatherStation {
  distance: number;
  latitude: number;
  longitude: number;
  useCount: number;
  id: string;
  name: string;
  quality: number;
  contribution: number;
}

export interface WeatherAlert {
  event: string;
  headline: string;
  ends: string;
  endsEpoch: number;
  onset: string;
  onsetEpoch: number;
  id: string;
  language: string;
  link: string;
  description: string;
}

export interface HourlyWeather {
  datetime: string;
  datetimeEpoch: number;
  temp: number;
  feelslike: number;
  humidity: number;
  dew: number;
  precip: number;
  precipprob: number;
  snow: number;
  snowdepth: number;
  preciptype: string[] | null;
  windgust: number;
  windspeed: number;
  winddir: number;
  pressure: number;
  visibility: number;
  cloudcover: number;
  solarradiation: number;
  solarenergy: number;
  uvindex: number;
  severerisk: number;
  conditions: string;
  icon: string;
  stations: string[] | null;
  source: string;
}

export interface DailyWeather {
  datetime: string;
  datetimeEpoch: number;
  tempmax: number;
  tempmin: number;
  temp: number;
  feelslikemax: number;
  feelslikemin: number;
  feelslike: number;
  dew: number;
  humidity: number;
  precip: number;
  precipprob: number;
  precipcover: number;
  preciptype: string[] | null;
  snow: number;
  snowdepth: number;
  windgust: number;
  windspeed: number;
  winddir: number;
  pressure: number;
  cloudcover: number;
  visibility: number;
  solarradiation: number;
  solarenergy: number;
  uvindex: number;
  severerisk: number;
  sunrise: string;
  sunriseEpoch: number;
  sunset: string;
  sunsetEpoch: number;
  moonphase: number;
  conditions: string;
  description: string;
  icon: string;
  stations: string[] | null;
  source: string;
  hours: HourlyWeather[];
}

export interface CurrentConditions extends Omit<HourlyWeather, 'stations'> {
  stations: string[];
  sunrise: string;
  sunriseEpoch: number;
  sunset: string;
  sunsetEpoch: number;
  moonphase: number;
}

export interface WeatherResponse {
  queryCost: number;
  latitude: number;
  longitude: number;
  resolvedAddress: string;
  address: string;
  timezone: string;
  tzoffset: number;
  description: string;
  days: DailyWeather[];
  alerts: WeatherAlert[];
  stations: Record<string, WeatherStation>;
  currentConditions: CurrentConditions;
}


export function GetDefaultImageUrlForecast(img: string): string {
  const defaultImageUrlForecast = "https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/";
  return defaultImageUrlForecast + img + '.svg'
}