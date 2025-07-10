export type Location = {
  lat: number;
  long: number;
};

export type IntitalStore = {
  location: Location,
  language?: string,
  favoritesCities: string[],
  city: string,
};