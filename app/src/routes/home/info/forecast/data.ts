export const monthsGenitive = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
];

export const daysNames = [
  'Сегодня',
  'Завтра',
  'Послезавтра'
];

export const tableTitles: string[] = [
  '',
  'Ощущается',
  'Ветер, м/с',
  'Влажность',
  'Давление, мм рт. ст.'
];

export const dayTypes: string[] = [
  "Утром",
  "Днем",
  'Вечером',
  'Ночью'
];


export function getWeekDay(date: Date) {
  const days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
  return days[date.getDay()];
}

export function getTimeDifference(start: string, end: string): string {
  const [h1, m1, s1] = start.split(':').map(Number);
  const [h2, m2, s2] = end.split(':').map(Number);

  const t1 = h1 * 3600 + m1 * 60 + s1;
  const t2 = h2 * 3600 + m2 * 60 + s2;

  let diff = t2 - t1;
  if (diff < 0) diff += 86400; // если конец "меньше" начала, прибавим сутки

  const hours = Math.floor(diff / 3600);
  const minutes = Math.floor((diff % 3600) / 60);

  return hours + ':' + minutes;
}

export function GetHoursAndSeconds(date: string): string {
  const [h, m] = date.split(':');
  return h + ':' + m;
}