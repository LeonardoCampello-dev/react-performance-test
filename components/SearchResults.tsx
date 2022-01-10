import { useMemo } from 'react';

import { Product } from './Product';

type Props = {
  results: Array<{
    id: number;
    title: string;
    price: number;
  }>;

  onAddToWishlist: (id: number) => void;
};

export function SearchResults({ results, onAddToWishlist }: Props) {
  const totalPrice = useMemo(() => {
    return results.reduce((total, product) => {
      return total + product.price;
    }, 0);
  }, [results]);

  return (
    <div>
      <h2>{totalPrice}</h2>

      {results.map((product) => {
        return <Product key={product.id} product={product} onAddToWishlist={onAddToWishlist} />;
      })}
    </div>
  );
}
