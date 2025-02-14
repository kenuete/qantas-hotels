import { Row } from './Result.styles'
import { Hotel } from '../../../types'
import Image from '../property/Image.component'
import PropertyDetails from '../property/Details.component'

interface Result {
    row: Hotel
}

const Result: React.FC<Result> = ({ row }) => {
    const { property, offer } = row || {}
    const { previewImage } = property || {}

    return (
        <Row>
            <Image previewImage={previewImage} />
            <PropertyDetails property={property} offer={offer} />
        </Row>
    )
}

export default Result