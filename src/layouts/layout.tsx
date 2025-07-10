import type { FC } from 'react';
import { Outlet } from 'react-router';

import Header from './header/header';

const Layout: FC = () => {
  return (
    <>
      <Header />
      <main className='mb-20 pt-28'>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
