import { memo } from 'react';

type Props = {
  product: {
    id: number;
    title: string;
    price: number;
  };

  onAddToWishlist: (id: number) => void;
};

function ProductComponent({ product, onAddToWishlist }: Props) {
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
      <button onClick={() => onAddToWishlist(product.id)}>Add to wishlist</button>
    </div>
  );
}

export const Product = memo(ProductComponent, (previousProps, nextProps) => {
  return Object.is(previousProps.product, nextProps.product);
});
