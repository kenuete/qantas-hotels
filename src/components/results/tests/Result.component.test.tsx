import { render, screen } from '@testing-library/react'
import Result from '../Result.component'
import { Hotel } from '../../../types'

// Mocks
jest.mock('../../property/Image.component', () => {
    return {
        default: () => <div data-testid="image-test-id">Image Component</div>
    }
})
jest.mock('../../property/Details.component', () => {
    return {
        default: () => <div data-testid="details-test-id">Details Component</div>
    }
})
jest.mock('../../property/Pricing.component', () => {
    return {
        default: () => <div data-testid="pricing-test-id">Pricing Component</div>
    }
})

describe('Result Component', () => {
  const mockHotel: Hotel = {
    id: '12345',
    property: {
      propertyId: 'P107802',
      title: 'Primus Hotel Sydney',
      address: ['339 Pitt St', 'Sydney'],
      previewImage: {
        url: 'https://unsplash.it/145/125/?random',
        caption: 'Image of Primus Hotel Sydney',
        imageType: 'PRIMARY',
      },
      rating: {
        ratingValue: 5,
        ratingType: 'self',
      },
    },
    offer: {
      promotion: {
        title: 'Exclusive Deal',
        type: 'MEMBER',
      },
      name: 'Deluxe King',
      displayPrice: {
        amount: 375,
        currency: 'AUD',
      },
      savings: {
        amount: 28,
        currency: 'AUD',
      },
      cancellationOption: {
        cancellationType: 'FREE_CANCELLATION',
      },
    },
  }

  it('renders correctly with provided props', () => {
    const testId = '12345'
    render(<Result id={testId} row={mockHotel} />)

    const rowElement = screen.getByTestId(`result-row-${testId}`)
    expect(rowElement).toBeInTheDocument()

    expect(screen.getByTestId('image-test-id')).toBeInTheDocument()
    expect(screen.getByTestId('details-test-id')).toBeInTheDocument()
    expect(screen.getByTestId('pricing-test-id')).toBeInTheDocument()
  })

})
