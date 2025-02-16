import { Offer as OfferType } from '../../types'
import Cancellation from './Cancellation.component'
import { RoomTypeBtn, OfferContainer } from './Property.styles'

interface OfferProps {
  offer: OfferType
}

const Offer: React.FC<OfferProps> = ({ offer }) => {
  const { name, cancellationOption } = offer || {}
  return (
    <OfferContainer>
      <RoomTypeBtn linkStyle>{name}</RoomTypeBtn>
      <Cancellation cancellationOption={cancellationOption} />
    </OfferContainer>
  )
}

export default Offer
