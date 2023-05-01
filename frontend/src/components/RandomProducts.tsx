export const productsArr = ['notebook', 'macbook', 'celular', 'tv', 'brastemp', 'console', 'eletro'];

export function randomStringFromArray(arr: string[]): string {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
