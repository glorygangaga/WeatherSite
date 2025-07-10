import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import { useAppSelector } from './hooks/redux';

import Home from './routes/home/home';
import Layout from './layouts/layout';

const Forecasts = lazy(() => import('./routes/forecasts/forecasts'));
const Map = lazy(() => import('./routes/map/map'));
const ErrorElement = lazy(() => import('./routes/errorElement/errorElement'));

const App = () => {
  const data = useAppSelector((state) => state.data);

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='' element={<Home />} />
          <Route
            path='forecasts'
            element={
              <Suspense>
                <Forecasts />
              </Suspense>
            }
          />
          <Route
            path='map'
            element={
              <Suspense>
                <Map />
              </Suspense>
            }
          />
        </Route>
        <Route
          path='*'
          element={
            <Suspense>
              <ErrorElement />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
