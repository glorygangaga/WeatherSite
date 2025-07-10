import { configureStore, combineReducers, createListenerMiddleware } from "@reduxjs/toolkit";

import { ApiSlice, forecastApiSlice } from "../services/api";
import { reducer as MainReducer } from "./slice";

const reducers = combineReducers({
  [ApiSlice.reducerPath]: ApiSlice.reducer,
  [forecastApiSlice.reducerPath]: forecastApiSlice.reducer,
  data: MainReducer,
});

const listenerMiddleware = createListenerMiddleware();

export const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware => 
    getDefaultMiddleware({serializableCheck: false})
    .prepend(listenerMiddleware.middleware, ApiSlice.middleware, forecastApiSlice.middleware)
    .concat(),
  devTools: false
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;