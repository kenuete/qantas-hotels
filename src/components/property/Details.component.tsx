import Header from './Header.component'
import { Property, Offer as OfferType } from "../../types"
import Address from "./Address.component"
import {PropertyDetailsContainer as Container } from './Property.styles'
import Offer from './Offer.component'


interface PropertyDetailsProps {
  property: Property
  offer: OfferType
  id?: string
}

const PropertyDetails: React.FC<PropertyDetailsProps> = ({ id, property, offer }) => {
  const { title, rating, address } = property
  const propertyDetailsId = `property-details-${id}`
  return (
    <Container data-testid={propertyDetailsId}>
      <Header id={id} title={title} rating={rating} />
      <Address address={address} />
      <Offer id={id} offer={offer} />
    </Container>
  )
}

export default PropertyDetails
