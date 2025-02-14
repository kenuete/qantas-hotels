import { Property  } from '../../../types'

interface AddressProps {
    address: Property['address']
}

const Address: React.FC<AddressProps> = ({ address }) => {
    return (
        <p>{address.join(' ')}</p>
    )
}

export default Address