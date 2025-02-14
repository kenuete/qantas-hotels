import { Row } from './Result.styles'
import { Hotel } from '../../../types'
import Image from '../property/Image.component'

interface Result {
    row: Hotel
}

const Result: React.FC<Result> = ({ row }) => {
    const { property } = row || {}
    const { previewImage } = property || {}

    return (
        <Row>
            <Image previewImage={previewImage} />
        </Row>
    )
}

export default Result