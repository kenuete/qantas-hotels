import { render, screen } from '@testing-library/react'
import Hotels from '../Hotels.component'
import { Hotel } from '../../../types'

jest.mock('../../results/ResultsHeader.component', () => {
    return {
        default: () => (<div data-testid="results-header">
            ResultsHeader - count: 2
            searchedPlace: Test City
        </div>)
    }
})

jest.mock('../../results/Result.component', () => {
    return {
        default: ({ id }: { id: string}) => {
            return <div data-testid={`results-${id}`}>Results component</div>
        }
    }
})

describe('Hotels component', () => {
    const mockHotel1: Hotel = {
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

      const mockHotel2: Hotel = {
        id: '7890',
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

    const dummyHotels: Hotel[] = [
        mockHotel1,
        mockHotel2,
    ]
    const searchedPlace = 'Test City'

    it('renders the results header with correct count and searchedPlace', () => {
        render(<Hotels results={dummyHotels} searchedPlace={searchedPlace} />)
        screen.debug()
        const header = screen.getByTestId('results-header')
        expect(header).toHaveTextContent(`ResultsHeader - count: ${dummyHotels.length}`)
        expect(header).toHaveTextContent(`searchedPlace: ${searchedPlace}`)
    })

    it('renders a Result component for each hotel result', () => {
        render(<Hotels results={dummyHotels} searchedPlace={searchedPlace} />)
        expect(screen.getByTestId(`results-${dummyHotels[0].id}`)).toBeInTheDocument()
        expect(screen.getByTestId(`results-${dummyHotels[1].id}`)).toBeInTheDocument()
    })
})