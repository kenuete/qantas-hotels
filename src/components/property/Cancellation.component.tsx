import { CancellationPolicy } from '../../constants'
import { Offer } from '../../types'
import { CancellationPolicyText } from './Property.styles'

interface CancellationProps {
    cancellationOption: Offer['cancellationOption']
}

const Cancellation: React.FC<CancellationProps> = ({ cancellationOption }) => {
    const { cancellationType } = cancellationOption || {}
    return (
        <CancellationPolicyText>{CancellationPolicy[cancellationType as keyof typeof CancellationPolicy]}</CancellationPolicyText>
    )
}

export default Cancellation