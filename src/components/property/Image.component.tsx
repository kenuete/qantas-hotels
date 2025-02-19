import { ImageContainer, PromoBanner } from './Property.styles'
import { Image as ImageType } from '../../types'
import { Promotion as PromotionType } from '../../types'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import placeholderImg from '../../assets/placeholder-img.jpg'

interface ImageProps {
  previewImage: ImageType
  promotion: PromotionType
}

const Image: React.FC<ImageProps> = ({ previewImage, promotion }) => {
  const { title } = promotion || {}
  return (
    <ImageContainer>
      <PromoBanner>{title}</PromoBanner>
      <LazyLoadImage
        src={`${previewImage?.url}=${Math.random()}`}
        alt={previewImage?.caption}
        effect='black-and-white'
        placeholderSrc={placeholderImg}
        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => (e.currentTarget.src = placeholderImg)}
        width='150px'
        height='130px'
      />
    </ImageContainer>
  )
}

export default Image
