const cities = [
  "New York",
  "London",
  "Tokyo",
  "Paris",
  "Berlin",
  "Sydney",
  "Rome",
  "Moscow",
];

export const addCity = (city: string): Promise<string> =>
  new Promise((resolve) => {
    setTimeout(() => {
      cities.push(city);
      return resolve(city);
    }, 1000);
  });

export const getCities = (): Promise<string[]> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(cities);
    }, 500);
  });
