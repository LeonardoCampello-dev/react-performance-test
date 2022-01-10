import { memo } from 'react';

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
  return (
    <div>
      {product.title} - <strong>{product.formattedPrice}</strong>
      <button onClick={() => onAddToWishlist(product.id)}>Add to wishlist</button>
    </div>
  );
}

export const Product = memo(ProductComponent, (previousProps, nextProps) => {
  return Object.is(previousProps.product, nextProps.product);
});
