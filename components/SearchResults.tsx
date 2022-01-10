import { useMemo } from 'react';

import { Product } from './Product';

type Props = {
  results: Array<{
    id: number;
    title: string;
    price: number;
  }>;
};

export function SearchResults({ results }: Props) {
  const totalPrice = useMemo(() => {
    return results.reduce((total, product) => {
      return total + product.price;
    }, 0);
  }, [results]);

  return (
    <div>
      <h2>{totalPrice}</h2>

      {results.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
}
