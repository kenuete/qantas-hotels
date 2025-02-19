import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Image from '../Image.component'
import { Image as ImageType, Promotion as PromotionType } from '../../../types'
import placeholderImg from '../../../assets/placeholder-img.jpg'

jest.mock('react-lazy-load-image-component', () => {
  return {
    __esModule: true,
    LazyLoadImage: jest.fn((props) => (
      <img
        data-testid='mocked-lazy-load-image'
        src={props.src}
        alt={props.alt}
        onError={props.onError} 
      />
    )),
  }
})

describe('Image component', () => {
  const previewImage: ImageType = {
    url: 'https://unsplash.it/145/125/?random',
    caption: 'Image of Primus Hotel Sydney',
    imageType: 'PRIMARY',
  }

  const promotion: PromotionType = {
    title: 'Exclusive Deal',
    type: 'MEMBER',
  }

  beforeAll(() => {
    jest.spyOn(Math, 'random').mockReturnValue(0.123)
  })

  it('renders the promo banner with the title', () => {
    const { getByText } = render(
      <Image previewImage={previewImage} promotion={promotion} />
    )
    expect(getByText(promotion.title)).toBeInTheDocument()
  })

  it('renders the image with correct src and alt attributes', () => {
    const { getByAltText } = render(
      <Image previewImage={previewImage} promotion={promotion} />
    )
    const image = getByAltText(previewImage?.caption)
    expect(image).toBeInTheDocument()
    expect(image.getAttribute('src')).toBe(`${previewImage?.url}=0.123`)
  })

  it('sets the placeholderSrc prop correctly (line 22)', () => {
    const screen = render(<Image previewImage={previewImage} promotion={promotion} />)
    screen.debug()
    const lazyImage = screen.getByTestId('mocked-lazy-load-image')
    fireEvent.error(lazyImage)
    expect(lazyImage).toHaveAttribute('src', placeholderImg)
  })  
})
