import { useState } from 'react'
import { Hotel } from '../../types'
import Result from '../common/results/Result.component'
import ResultsHeader from '../common/results/ResultsHeader.component'
import { sortResults, getSortFn, SortTypes, getSortOrder } from '../../utils/sort'

interface HotelProps {
  results: Hotel[]
}

const Hotels: React.FC<HotelProps> = ({ results }) => {
  const [sortBy, setSortBy] = useState<SortTypes>('price-low-high')
  const sortedResults = sortResults({results, order: getSortOrder(sortBy), getSortItem: getSortFn(sortBy)})
  return (
    <>
      <ResultsHeader
        count={results.length}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      {sortedResults.map((result) => (
        <Result row={result} />
      ))}
    </>
  )
}

export default Hotels
