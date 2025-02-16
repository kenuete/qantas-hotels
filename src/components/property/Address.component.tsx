import { Property } from '../../types'
import { Paragraph } from '../common/styles'
interface AddressProps {
  address: Property['address']
}

const Address: React.FC<AddressProps> = ({ address }) => {
  return (
    <Paragraph light size="12">
      {address.join(' ')}
    </Paragraph>
  )
}

export default Address
