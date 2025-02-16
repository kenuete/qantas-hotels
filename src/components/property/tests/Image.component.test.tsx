import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Image from '../Image.component'
import { Image as ImageType, Promotion as PromotionType } from '../../../types'

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
})