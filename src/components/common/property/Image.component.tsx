import { Img } from './Image.styles'
import { Image as ImageType } from '../../../types'

interface ImageProps {
    previewImage: ImageType
}

const Image: React.FC<ImageProps> = ({ previewImage }) => {
    return (
        <Img src={`${previewImage?.url}=${Math.random()}`} alt={previewImage?.caption} />
    )
}

export default Image