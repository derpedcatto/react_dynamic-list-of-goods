import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleLoadAllGoods = async () => {
    try {
      const apiGoods = await getAll();

      setGoods(apiGoods);
    } catch (error) {
      return;
    }
  };

  const handleLoadFirst5Goods = async () => {
    try {
      const apiGoods = await get5First();

      setGoods(apiGoods);
    } catch (error) {
      return;
    }
  };

  const handleLoadRedGoods = async () => {
    try {
      const apiGoods = await getRedGoods();

      setGoods(apiGoods);
    } catch (error) {
      return;
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleLoadAllGoods}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleLoadFirst5Goods}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleLoadRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
