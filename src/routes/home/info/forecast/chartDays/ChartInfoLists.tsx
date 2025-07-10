import { memo, type FC } from 'react';
import type { LineChartsTypeInner } from './ChartInfo';

type ChartInfoListsType = {
  chartData: LineChartsTypeInner[];
};

const ChartInfoLists: FC<ChartInfoListsType> = ({ chartData }) => {
  return (
    <ul className='flex justify-between px-6'>
      {chartData.map((val) => (
        <li key={val.name}>
          {val.max > 0 ? '+' : '-'}
          {val.max.toFixed()}
          <span>°</span>
        </li>
      ))}
    </ul>
  );
};

export default memo(ChartInfoLists);
