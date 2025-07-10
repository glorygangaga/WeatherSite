import FindMe from './findMe';
import FindInput from './findInput';
import Favorites from './Favorites';

const Navigation = () => {
  return (
    <nav>
      <ul className="grid gap-2 lg:gap-8 [grid-template-areas:'input'] md:[grid-template-areas:'input_findMe_favorites'] lg:[grid-template-areas:'findMe_input_favorites'] md:gap-4">
        <li className='hidden md:block [grid-area:findMe]'>
          <FindMe />
        </li>
        <li className='[grid-area:input]'>
          <FindInput />
        </li>
        <li className='hidden md:block [grid-area:favorites]'>
          <Favorites />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
