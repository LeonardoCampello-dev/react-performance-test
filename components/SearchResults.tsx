import { useMemo } from 'react';

import { Product } from './Product';

type Props = {
  totalPrice: number;

  results: Product[];

  onAddToWishlist: (id: number) => void;
};

export function SearchResults({ results, totalPrice, onAddToWishlist }: Props) {
  return (
    <div>
      <h2>{totalPrice}</h2>

      {results.map((product) => {
        return <Product key={product.id} product={product} onAddToWishlist={onAddToWishlist} />;
      })}
    </div>
  );
}
