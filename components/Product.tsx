import dynamic from 'next/dynamic';

import { memo, useState } from 'react';

import { Props as AddProductToWishlistProps } from './AddProductToWishlist';

const AddProductToWishlist = dynamic<AddProductToWishlistProps>(
  () => {
    return import('./AddProductToWishlist').then((mod) => mod.AddProductToWishlist);
  },
  {
    loading: () => <span>Carregando...</span>
  }
);

export interface Product {
  id: number;
  title: string;
  price: number;
  formattedPrice: string;
}

type Props = {
  product: Product;

  onAddToWishlist: (id: number) => void;
};

function ProductComponent({ product, onAddToWishlist }: Props) {
  const [isAddingToWishlist, setIsAddingToWishlist] = useState(false);

  return (
    <div>
      {product.title} - <strong>{product.formattedPrice}</strong>
      <button onClick={() => setIsAddingToWishlist(true)}>Adicionar aos favoritos</button>
      {isAddingToWishlist && (
        <AddProductToWishlist
          onAddToWishlist={() => onAddToWishlist(product.id)}
          onRequestClose={() => setIsAddingToWishlist(false)}
        />
      )}
    </div>
  );
}

export const Product = memo(ProductComponent, (previousProps, nextProps) => {
  return Object.is(previousProps.product, nextProps.product);
});
