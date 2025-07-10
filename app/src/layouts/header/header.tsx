import { useNavigate } from 'react-router';
import Navigation from './navigation';
import Settings from './settings/settings';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className='w-full fixed z-10 bg-header-bg dark:bg-header-bg-dark backdrop-blur-md'>
      <div className='container justify-between flex gap-2 items-center mx-auto px-3 my-4 relative'>
        <h1
          className='font-bold flex items-center absolute left-3 top-[120%] sm:bg-none px-3 py-1 rounded-md sm:p-0 sm:rounded-none text-lg bg-main-bg-white dark:bg-main-bg-black sm:text-3xl sm:relative cursor-pointer'
          onClick={() => navigate('/')}
        >
          Weather
        </h1>
        <Navigation />
        <Settings />
      </div>
    </header>
  );
};

export default Header;
