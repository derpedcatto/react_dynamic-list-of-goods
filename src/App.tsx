import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLoadAllGoods = async () => {
    setError(null);
    setLoading(true);

    try {
      const apiGoods = await getAll();

      setGoods(apiGoods);
    } catch (err) {
      setGoods([]);
      setError(err instanceof Error ? err.message : 'Failed to load goods');
    } finally {
      setLoading(false);
    }
  };

  const handleLoadFirst5Goods = async () => {
    setError(null);
    setLoading(true);

    try {
      const apiGoods = await get5First();

      setGoods(apiGoods);
    } catch (err) {
      setGoods([]);
      setError(err instanceof Error ? err.message : 'Failed to load goods');
    } finally {
      setLoading(false);
    }
  };

  const handleLoadRedGoods = async () => {
    setError(null);
    setLoading(true);

    try {
      const apiGoods = await getRedGoods();

      setGoods(apiGoods);
    } catch (err) {
      setGoods([]);
      setError(err instanceof Error ? err.message : 'Failed to load goods');
    } finally {
      setLoading(false);
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

      {error && <p role="alert">{error}</p>}

      {loading && <p>Loading...</p>}

      <GoodsList goods={goods} />
    </div>
  );
};
