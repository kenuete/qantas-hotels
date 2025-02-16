import { Img, ImageContainer, PromoBanner } from './Property.styles'
import { Image as ImageType } from '../../types'
import { Promotion as PromotionType } from '../../types'

interface ImageProps {
    previewImage: ImageType
    promotion: PromotionType
}

const Image: React.FC<ImageProps> = ({ previewImage, promotion }) => {
    const { title } = promotion || {}
    return (
        <ImageContainer>
            <PromoBanner>{title}</PromoBanner>
            <Img src={`${previewImage?.url}=${Math.random()}`} alt={previewImage?.caption} />
        </ImageContainer>
    )
}

export default Image