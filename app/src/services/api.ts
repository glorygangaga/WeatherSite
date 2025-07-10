import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { WeatherData, WeatherForecastData, SendMessage, WeatherSearch, WeatherResponse } from "../types/apiTypes";
import type { Location } from "../types/storeTypes";

const baseUrl = `http://api.weatherapi.com/v1`;
const apiKey = import.meta.env.VITE_API_KEY;

export const ApiSlice = createApi({
  reducerPath: 'AuthApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    credentials: 'omit'
  }),
  endpoints: builder => ({
    getCurrentWeather: builder.query<WeatherData, SendMessage>({
      query: ({q}) => ({
        url: 'current.json',
        method: 'GET',
        params: {
          key: apiKey,
          q,
          lang: 'ru',
        }
      })
    }),
    getForecastWeather: builder.query<WeatherForecastData, SendMessage>({
      query: ({q}) => ({
        url: 'forecast.json',
        method: 'GET',
        params: {
          key: apiKey,
          q,
          lang: 'ru',
          days: 14
        }
      })
    }), 
    getCityByLocation: builder.query<WeatherSearch, Location>({
      query: ({lat, long}) => ({
        url: 'search.json',
        method: 'GET',
        params: {
          key: apiKey,
          q: lat + ' ' + long,
        }
      })
    })
  }),
});

const baseUrlForecast = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline';
const apiKeyForecast = import.meta.env.VITE_API_KEY_2;

export const forecastApiSlice = createApi({
  reducerPath: 'forecastApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrlForecast,
    credentials: 'omit'
  }),
  endpoints: builder => ({
    getForecastWeatherNew: builder.query<WeatherResponse, {location: string, days: number}>({
      query: ({location, days}) => ({
        url: `${location}/next${days - 1}days`,
        params: {
          key: apiKeyForecast,
          contentType: 'json',
          lang: 'ru',
          unitGroup: 'metric',
          include:"hours",
        }
      })
    })
  })
})

export const {useGetForecastWeatherNewQuery} = forecastApiSlice;
export const {useGetCurrentWeatherQuery, useGetForecastWeatherQuery, useGetCityByLocationQuery} = ApiSlice;