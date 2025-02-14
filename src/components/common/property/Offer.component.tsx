import { Offer as OfferType } from '../../../types'
import Cancellation from './Cancellation.component'

interface OfferProps {
    offer: OfferType
}

const Offer: React.FC<OfferProps> = ({ offer }) => {
    const { name, cancellationOption } = offer || {}
    return (
        <>
        <p>{name}</p>
        <Cancellation cancellationOption={cancellationOption}/>
        </>
    )
}

export default Offer