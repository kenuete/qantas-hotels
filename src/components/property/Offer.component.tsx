import { Offer as OfferType } from '../../types'
import Cancellation from './Cancellation.component'
import { RoomTypeBtn, OfferContainer } from './Property.styles'

interface OfferProps {
  offer: OfferType
  id?: string
}

const Offer: React.FC<OfferProps> = ({ id, offer }) => {
  const { name, cancellationOption } = offer || {}
  const offerId = `offer-${id}`
  return (
    <OfferContainer data-testid={offerId}>
      <RoomTypeBtn linkStyle data-testid={`${offerId}-roomtype-btn`}>{name}</RoomTypeBtn>
      <Cancellation id={id} cancellationOption={cancellationOption} />
    </OfferContainer>
  )
}

export default Offer
