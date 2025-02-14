import { Hotel } from '../../types'
import Result from '../common/results/Result.component'

interface HotelProps {
    results: Hotel[]
}

const Hotels: React.FC<HotelProps> = ({ results }) => {
    return (
        results.map((result) => (
            <Result row={result} />
        ))
    )
}

export default Hotels