import StarBorderIcon from '@mui/icons-material/StarBorder';
import GradeIcon from '@mui/icons-material/Grade';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { actions } from '../../store/slice';

const Favorites = () => {
  const { favoritesCities, city } = useAppSelector((state) => state.data);
  const dispatch = useAppDispatch();

  const handleFavCity = () => {
    if (!city) return;
    dispatch(actions.HandleFavoriteCity(city));
  };

  return (
    <button
      className='px-4 py-3 rounded-4xl transition max-md:rounded-none max-md:bg-settings-place max-md:dark:bg-settings-place-dark flex items-center gap-1 rounded-[100%] lg:rounded-default bg-default-button hover:bg-default-button-hover h-full w-full'
      onClick={handleFavCity}
    >
      {city && favoritesCities.find((favCity) => favCity === city) ? (
        <GradeIcon />
      ) : (
        <StarBorderIcon />
      )}
      <span className='hidden max-md:block lg:block'>
        В избранн
        {city ? (favoritesCities.find((favCity) => favCity === city) ? 'ом' : 'ое') : 'ое'}
      </span>
    </button>
  );
};

export default Favorites;
