import type { FC } from 'react';

type DefaultTextT = {
  isError: boolean;
};

const DefaultText: FC<DefaultTextT> = ({ isError }) => {
  return (
    <>
      <div className='flex text-center justify-center mx-auto max-w-[600px] py-14'>
        <h1 className='text-5xl font-bold'>
          {isError
            ? 'Что-то пошло не так, попробуйте перезагрузить страницу'
            : 'Введите название города, почтовый индекс, IP адресс или Широту/Долготу'}
        </h1>
      </div>
    </>
  );
};

export default DefaultText;
