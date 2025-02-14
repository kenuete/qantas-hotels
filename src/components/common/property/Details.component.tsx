import Header from "./Header.component"
import { Property, Offer as OfferType } from "../../../types"
import Address from "./Address.component"
import {PropertyDetailsContainer as Container } from './Property.styles'
import Offer from './Offer.component'


interface PropertyDetailsProps {
  property: Property
  offer: OfferType
}

const PropertyDetails: React.FC<PropertyDetailsProps> = ({ property, offer }) => {
  const { title, rating, address } = property
  return (
    <Container>
      <Header title={title} rating={rating} />
      <Address address={address} />
      <Offer offer={offer} />
    </Container>
  )
}

export default PropertyDetails
