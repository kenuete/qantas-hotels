import { useState } from 'react'
import { Hotel } from '../../types'
import Result from '../common/results/Result.component'
import ResultsHeader from '../common/results/ResultsHeader.component'
import { sortResults, getPrice } from '../../utils/sort'

interface HotelProps {
  results: Hotel[]
}

const Hotels: React.FC<HotelProps> = ({ results }) => {
  const [sortBy, setSortBy] = useState('low-high')
  const sortedResults = sortResults(results, 'asc', getPrice)
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
