import { Img, ImageContainer } from './Property.styles'
import { Image as ImageType } from '../../../types'

interface ImageProps {
    previewImage: ImageType
}

const Image: React.FC<ImageProps> = ({ previewImage }) => {
    return (
        <ImageContainer>
            <Img src={`${previewImage?.url}=${Math.random()}`} alt={previewImage?.caption} />
        </ImageContainer>
    )
}

export default Image