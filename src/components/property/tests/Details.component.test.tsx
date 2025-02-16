import { render, screen } from '@testing-library/react'
import PropertyDetails from '../Details.component'
import { Property, Offer } from '../../../types'

jest.mock('../Header.component', () => ({
    default: jest.fn(() => <div data-testid='header-test-id'>Header</div>),
  }))
  
  jest.mock('../Address.component', () => ({
    default: jest.fn(() => <div data-testid='address-test-id'>Address</div>),
  }))
  
  jest.mock('../Offer.component', () => ({
    default: jest.fn(() => <div data-testid='offer-test-id'>Offer</div>),
  }))

const dummyProperty: Property = {
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
}

const dummyOffer: Offer = {
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
}

describe('PropertyDetails Component', () => {
    it('renders container and sub-components', () => {
        const testId = '1'
        render(
            <PropertyDetails id={testId} property={dummyProperty} offer={dummyOffer} />
        )
        const container = screen.getByTestId(`property-details-${testId}`)
        expect(container).toBeInTheDocument()

        // Ensure our mocked components are rendered
        expect(screen.getByTestId('header-test-id')).toHaveTextContent('Header')
        expect(screen.getByTestId('address-test-id')).toHaveTextContent('Address')
        expect(screen.getByTestId('offer-test-id')).toHaveTextContent('Offer')
    })
})