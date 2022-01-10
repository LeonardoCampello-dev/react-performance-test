type Props = {
  product: {
    id: number;
    title: string;
    price: number;
  };
};

export function Product({ product }: Props) {
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
    </div>
  );
}
