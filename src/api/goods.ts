import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

const COLOR_RED = 'red';

export async function getAll(): Promise<Good[]> {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(
        `Failed to load goods: ${response.status} ${response.statusText}`,
      );
    }

    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }

    throw new Error('API error');
  }
}

export const get5First = async () => {
  try {
    const goods = await getAll();

    const sortedGoods = [...goods].sort((a, b) => a.name.localeCompare(b.name));

    return sortedGoods.slice(0, 5);
  } catch (error) {
    throw error;
  }
};

export const getRedGoods = async () => {
  try {
    const goods = await getAll();

    return goods.filter(good => good.color === COLOR_RED);
  } catch (error) {
    throw error;
  }
};
