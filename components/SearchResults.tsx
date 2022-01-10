import { Product } from './Product';

type Props = {
  results: Array<{
    id: number;
    title: string;
    price: number;
  }>;
};

export function SearchResults({ results }: Props) {
  return (
    <div>
      {results.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
}
