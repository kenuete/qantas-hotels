import { Offer as OfferType } from '../../../types'

interface OfferProps {
    offer: OfferType
}

const Offer: React.FC<OfferProps> = ({ offer }) => {
    return (
        <p>{offer?.name}</p>
    )
}

export default Offer