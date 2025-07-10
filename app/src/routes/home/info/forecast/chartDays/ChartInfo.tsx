import { useEffect, useState, type FC } from 'react';
import type { ForecastDay } from '../../../../../types/apiTypes';
import LineCharts from '../../../../../layouts/lineChart/lineChart';
import ChartInfoLists from './ChartInfoLists';

export type LineChartsTypeInner = {
  name: string;
  min: number;
  max: number;
};

type ChartInfoType = {
  data: ForecastDay[];
};

const ChartInfo: FC<ChartInfoType> = ({ data }) => {
  const [chartData, setChartData] = useState<LineChartsTypeInner[]>([]);

  useEffect(() => {
    const newChartData = data.map((day) => ({
      name: day.date_epoch.toString(),
      min: day.day.mintemp_c,
      max: day.day.maxtemp_c,
    }));
    setChartData(newChartData);
  }, [data]);

  return (
    <>
      <ChartInfoLists chartData={chartData} />
      <LineCharts data={chartData} />
      <ChartInfoLists chartData={chartData} />
    </>
  );
};

export default ChartInfo;
