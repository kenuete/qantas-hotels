import { Row } from './Result.styles'
import { Hotel } from '../../types'
import Image from '../property/Image.component'
import PropertyDetails from '../property/Details.component'
import Pricing from '../property/Pricing.component'

interface Result {
    row: Hotel
}

const Result: React.FC<Result> = ({ row }) => {
    const { property, offer } = row || {}
    const { previewImage } = property || {}
    const { displayPrice, savings, promotion } = offer || {}

    return (
        <Row>
            <Image previewImage={previewImage} promotion={promotion} />
            <PropertyDetails property={property} offer={offer} />
            <Pricing displayPrice={displayPrice} savings={savings} />
        </Row>
    )
}

export default Result