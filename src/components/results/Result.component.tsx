import { Row } from './Result.styles'
import { Hotel } from '../../types'
import Image from '../property/Image.component'
import PropertyDetails from '../property/Details.component'
import Pricing from '../property/Pricing.component'

interface Result {
    id?: string
    row: Hotel
}

const Result: React.FC<Result> = ({ id, row }) => {
    const { property, offer } = row || {}
    const { previewImage } = property || {}
    const { displayPrice, savings, promotion } = offer || {}
    const resultId = `result-row-${id}`

    return (
        <Row data-test-id={resultId}>
            <Image previewImage={previewImage} promotion={promotion} />
            <PropertyDetails property={property} offer={offer} id={id}/>
            <Pricing id={id} displayPrice={displayPrice} savings={savings} />
        </Row>
    )
}

export default Result