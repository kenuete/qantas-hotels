import { render, screen } from '@testing-library/react'
import Offer from '../Offer.component'
import { Offer as OfferType } from '../../../types'

jest.mock('../Cancellation.component', () => ({
    default: () => <div>cancellation component</div>
}))

describe('Offer component', () => {
    const mockOffer: OfferType = {
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

    it('renders the OfferContainer', () => {
        render(<Offer id='123' offer={mockOffer} />)
        const container = screen.getByTestId('offer-123')
        expect(container).toBeInTheDocument()
    })

    it('renders the RoomTypeBtn', () => {
        render(<Offer id='456' offer={mockOffer} />)
        const roomTypeBtn = screen.getByTestId('offer-456-roomtype-btn')
        expect(roomTypeBtn).toHaveTextContent(mockOffer.name)
    })

    it('renders the Cancellation component with the correct props', () => {
        render(<Offer id="789" offer={mockOffer} />)
        expect(screen.getByText('cancellation component')).toBeInTheDocument()
    })
})