import { render, screen } from '@testing-library/react'
import Result from '../Result.component'
import { Hotel } from '../../../types'

// Mocks
jest.mock('../../property/Image.component', () => {
  return {
    default: () => <div data-testid='image-test-id'>Image Component</div>,
  }
})
jest.mock('../../property/Details.component', () => {
  return {
    default: () => <div data-testid='details-test-id'>Details Component</div>,
  }
})
jest.mock('../../property/Pricing.component', () => {
  return {
    default: () => <div data-testid='pricing-test-id'>Pricing Component</div>,
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

  it('handles missing row prop gracefully', () => {
    // @ts-expect-error - Testing behavior with an undefined row
    render(<Result id='missing-row' row={undefined} />)

    // Check if the component still renders without throwing an error
    expect(screen.getByTestId('result-row-missing-row')).toBeInTheDocument()
  })

  it('handles missing property in row', () => {
    const testId = 'no-property'
    // @ts-expect-error - Testing behavior with an undefined properties
    const mockHotelWithoutProperty = {
      id: testId,
      property: undefined,
      offer: mockHotel.offer,
    } as Hotel

    render(<Result id={testId} row={mockHotelWithoutProperty} />)

    expect(screen.getByTestId(`result-row-${testId}`)).toBeInTheDocument()
    expect(screen.getByTestId('image-test-id')).toBeInTheDocument() 
  })

  it('handles missing offer in row', () => {
    const testId = 'no-offer'
    // @ts-expect-error - Testing behavior with an undefined values
    const mockHotelWithoutOffer = {
      id: testId,
      property: mockHotel.property,
      offer: undefined,
    } as Hotel

    render(<Result id={testId} row={mockHotelWithoutOffer} />)

    expect(screen.getByTestId(`result-row-${testId}`)).toBeInTheDocument()
    expect(screen.getByTestId('pricing-test-id')).toBeInTheDocument()
  })
})
