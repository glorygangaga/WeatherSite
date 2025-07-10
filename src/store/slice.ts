import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { IntitalStore, Location } from "../types/storeTypes";

const defaultState: IntitalStore = {favoritesCities: [], city: 'Москва', location: {lat: 55.7522, long: 37.6156}};

(function() {
  const isDark = localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
  const root = document.documentElement;
  if (!isDark) {
    root.classList.remove('dark');
    localStorage.theme = 'light';
  } else {
    root.classList.add('dark');
    localStorage.theme = 'dark';
  }
})();


const GetPresentationFromLocalStorage = () => {
  const data = localStorage.getItem('data');
  if (!data) return defaultState;
  const parseData = JSON.parse(data);
  return parseData;
}

const initialState: IntitalStore = GetPresentationFromLocalStorage();

const slice = createSlice({
  name: 'values',
  initialState: initialState,
  reducers: {
    HandleFavoriteCity: (state, action:PayloadAction<string>) => {
      const cities = state.favoritesCities;
      const cityAction = action.payload;
      const index = cities.findIndex(city => city === cityAction);
      if (index === -1)
        cities.push(cityAction);
      else
        cities.splice(index, 1);

      state.favoritesCities = cities;
    },
    ChangeLanguage: (state, action:PayloadAction<string>) => {
      state.language = action.payload;
    },
    ChangeLocation: (state, action:PayloadAction<Location>) => {
      state.location = action.payload;
    },
    ChangeCity: (state, action:PayloadAction<string>) => {
      state.city = action.payload;
    },
    ClearStore: (state) => {
      state.city = defaultState.city;
      state.favoritesCities = defaultState.favoritesCities;
      state.language = undefined;
      state.location = defaultState.location;
      localStorage.setItem('data', JSON.stringify(defaultState));
    }
  },
});

export const {reducer, actions} = slice;
