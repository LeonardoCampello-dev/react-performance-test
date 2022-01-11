import { List, ListRowRenderer } from 'react-virtualized'

import { Product } from './Product'

type Props = {
  totalPrice: number

  results: Product[]

  onAddToWishlist: (id: number) => void
}

export function SearchResults({ results, totalPrice, onAddToWishlist }: Props) {
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <Product product={results[index]} onAddToWishlist={onAddToWishlist} />
      </div>
    )
  }

  const listSetup = {
    height: 600,
    rowHeight: 30,
    width: 900,
    overscanRowCount: 5,
    rowCount: results.length
  }

  return (
    <div>
      <h2>{totalPrice}</h2>

      <List {...listSetup} rowRenderer={rowRenderer} />
    </div>
  )
}
