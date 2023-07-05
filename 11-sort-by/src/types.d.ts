declare module 'sort-by' {
  //Этот вариант работает только на один уровень вложенности
  // export default function sortBy<T, K extends keyof T>(...args: K[]): (obj1: T, obj2: T) => number;

  //Этот более универсальный
  export default function sortBy<T>(...args: string[]): (obj1: T, obj2: T) => number;
}