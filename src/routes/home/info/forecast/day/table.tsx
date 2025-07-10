import type { FC } from 'react';
import { dayTypes, tableTitles } from '../data';
import type { DaysPeriodData } from '../../../../../hooks/useDayMaxData';

type TableType = {
  dayMaxData: DaysPeriodData;
  index: number;
  keyVal: number;
};

const Table: FC<TableType> = ({ dayMaxData, index, keyVal }) => {
  return (
    <table className='table-fixed border-collapse w-full'>
      <thead>
        <tr>
          {tableTitles.map((title) => (
            <th
              className='text-center pr-2 text-secondary-text dark:text-secondary-text-dark'
              key={title}
            >
              {title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dayMaxData[index].map((dayElem, index2) => (
          <tr key={`${keyVal}-${index2}`} className='font-bold'>
            <td className='text-center'>{dayTypes[index2]}</td>
            <td className='text-center font-bold'>
              {parseInt(dayElem.feels) > 0 ? '+' : '-'}
              {dayElem.feels}
              <span>°</span>
            </td>
            <td className='text-center'>{dayElem.wind}</td>
            <td className='text-center'>{dayElem.humidity}%</td>
            <td className='text-center'>{dayElem.pressure}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
