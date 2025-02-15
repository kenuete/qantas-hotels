import Sort, { type SortProps} from '../sort/Sort.component'

interface ResultsHeader extends SortProps {
    count: number
}

const ResultsHeader: React.FC<ResultsHeader> = ({count, sortBy, setSortBy}) => {
    return (
        <div>
            <p>{`${count} hotels in Sydney.`}</p>
            <Sort sortBy={sortBy} setSortBy={setSortBy}/>
        </div>
    )
}

export default ResultsHeader