import { CancellationPolicy } from '../../../constants'
import { Offer } from '../../../types'

interface CancellationProps {
    cancellationOption: Offer['cancellationOption']
}

const Cancellation: React.FC<CancellationProps> = ({ cancellationOption }) => {
    const { cancellationType } = cancellationOption || {}
    return (
        <p>{CancellationPolicy[cancellationType as keyof typeof CancellationPolicy]}</p>
    )
}

export default Cancellation