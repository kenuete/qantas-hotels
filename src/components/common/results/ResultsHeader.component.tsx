import Sort  from '../sort/Sort.component'
import { BoldText, ItalicText  } from '../styles'
import { Container } from './Result.styles'
import { SortTypes } from '../../../utils/sort'

interface ResultsHeader {
  count: number
  searchedPlace: string
  sortBy: SortTypes,
  setSortBy: (e: SortTypes) => void
}

const ResultsHeader: React.FC<ResultsHeader> = ({
  count,
  sortBy,
  setSortBy,
  searchedPlace,
}) => {
  return (
    <Container>
      <p>
        <BoldText>{count}</BoldText> <ItalicText>hotels in </ItalicText>
        <BoldText>{searchedPlace}</BoldText>.
      </p>
      <Sort sortBy={sortBy} setSortBy={setSortBy} labelText='Sort by'/>
    </Container>
  )
}

export default ResultsHeader
