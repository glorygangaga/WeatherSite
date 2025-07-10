import type { FC } from 'react';
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import type { LineChartsTypeInner } from '../../routes/home/info/forecast/chartDays/ChartInfo';

type LineChartsType = {
  data: LineChartsTypeInner[];
};

const LineCharts: FC<LineChartsType> = ({ data }) => {
  return (
    <ResponsiveContainer width='100%' height={80}>
      <LineChart data={data} style={{ outline: 'none', boxShadow: 'none' }} tabIndex={-1}>
        <XAxis dataKey='name' hide padding={{ left: 30, right: 30 }} />
        <YAxis hide domain={['dataMin - 0', 'dataMax + 0']} />
        <Line
          type='monotone'
          dataKey='min'
          strokeWidth={3}
          stroke='#48535E'
          isAnimationActive={false}
          dot={{ stroke: '#48535E', fill: '#48535E' }}
          activeDot={false}
        />
        <Line
          type='monotone'
          dataKey='max'
          strokeWidth={3}
          stroke='#5584C9'
          isAnimationActive={false}
          dot={{ stroke: '#5584C9', fill: '#5584C9' }}
          activeDot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineCharts;
