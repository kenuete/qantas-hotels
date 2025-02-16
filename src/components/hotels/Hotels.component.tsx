import { useState } from 'react'
import { Hotel } from '../../types'
import Result from '../results/Result.component'
import ResultsHeader from '../results/ResultsHeader.component'
import { sortResults, getSortFn, SortTypes, getSortOrder } from '../../utils/sort'

interface HotelProps {
  results: Hotel[]
  searchedPlace: string
}

const Hotels: React.FC<HotelProps> = ({ results, searchedPlace }) => {
  const [sortBy, setSortBy] = useState<SortTypes>('price-low-high')
  const sortedResults = sortResults({results, order: getSortOrder(sortBy), getSortItem: getSortFn(sortBy)})
  return (
    <>
      <ResultsHeader
        count={results.length}
        sortBy={sortBy}
        setSortBy={setSortBy}
        searchedPlace={searchedPlace}
      />
      {sortedResults.map((result) => (
        <Result id={result.id} row={result} />
      ))}
    </>
  )
}

export default Hotels
