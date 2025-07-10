import { useMemo } from 'react';

interface HourSample {
  datetime  : string;  // 'HH:mm'
  temp      : number;
  windspeed : number;
  feelslike : number;
  humidity  : number;
  pressure  : number;
}

interface DayData { hours: HourSample[]; }

export type Metrics        = { wind: string; feels: string; humidity: string; pressure: string };
export type PeriodData     = Metrics[];   // 4 периода в сутках
export type DaysPeriodData = PeriodData[];

// ──────────── константы и утилиты ────────────
const PERIODS = [
  { start: 5,  end: 12, mode: 'min' },
  { start: 12, end: 18, mode: 'max' },
  { start: 18, end: 23, mode: 'max' },
  { start: 0,  end: 5,  mode: 'min' },
] as const;

const EMPTY: Metrics = { wind: '', feels: '', humidity: '', pressure: '' };

const kmhToMs   = (v: number) => (v * 1000) / 3600;
const hPaToMmHg = (v: number) => v * 0.750062;

function pickSample(samples: HourSample[], wantMin: boolean): HourSample | null {
  if (!samples.length) return null;
  return samples.reduce((acc, s) =>
    wantMin ? (s.temp < acc.temp ? s : acc) : (s.temp > acc.temp ? s : acc),
  );
}

function sampleToMetrics(s: HourSample): Metrics {
  return {
    wind     : kmhToMs(s.windspeed).toFixed(1),
    feels    : s.feelslike.toFixed(0),
    humidity : s.humidity.toFixed(),
    pressure : hPaToMmHg(s.pressure).toFixed(0),
  };
}

/**
 * Вычисляет экстремальные метрики за периоды
 * @param data  массив дней с почасовыми показателями
 * @param days  сколько первых дней учитывать (по умолчанию – все)
 */
export function useDayMaxData(
  data: DayData[],
): DaysPeriodData {
  return useMemo(() => {

    return data
      .map((day) =>
        PERIODS.map(({ start, end, mode }) => {
          const hours = day.hours.filter(({ datetime }) => {
            const h = Number(datetime.slice(0, 2));
            return start < end ? h >= start && h < end : h >= start || h < end;
          });

          const chosen = pickSample(hours, mode === 'min');
          return chosen ? sampleToMetrics(chosen) : EMPTY;
        }),
      );
  }, [data]);
}
