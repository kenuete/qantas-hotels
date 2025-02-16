import { CancellationPolicy } from '../../constants'
import { Offer } from '../../types'
import { CancellationPolicyText } from './Property.styles'

interface CancellationProps {
    cancellationOption: Offer['cancellationOption']
    id?: string
}

const Cancellation: React.FC<CancellationProps> = ({ cancellationOption, id }) => {
    const { cancellationType } = cancellationOption || {}
    const cancellationId = `cancellation-policy-text-${id}`
    return (
        <CancellationPolicyText data-testid={cancellationId}>{CancellationPolicy[cancellationType as keyof typeof CancellationPolicy]}</CancellationPolicyText>
    )
}

export default Cancellation