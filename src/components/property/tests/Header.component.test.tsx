import { render, screen } from '@testing-library/react'
import Header from '../Header.component'
import { Rating } from '../../../types'

// mocks
jest.mock('../Rating.component', () => ({
    default: () => <div data-testid='rating-test-id'>rating</div>
}))

describe('Header component', () => {
    const mockRating: Rating =  {
        ratingValue: 5,
        ratingType: 'self',
      }

    it('renders the title correctly', () => {
        render(<Header title={'some title'} rating={mockRating} />)
        expect(screen.getByText('some title')).toBeInTheDocument()
    })

    it('renders the Rating component with correct rating prop', () => {
        render(<Header title={'sampleTitle'} rating={mockRating} />)
        const ratingComponent = screen.getByTestId('rating-test-id')
        expect(ratingComponent).toBeInTheDocument()
    })
})