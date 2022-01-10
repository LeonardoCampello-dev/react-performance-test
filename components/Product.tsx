import { memo } from 'react';

type Props = {
  product: {
    id: number;
    title: string;
    price: number;
  };
};

function ProductComponent({ product }: Props) {
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
    </div>
  );
}

export const Product = memo(ProductComponent, (previousProps, nextProps) => {
  return Object.is(previousProps.product, nextProps.product);
});
