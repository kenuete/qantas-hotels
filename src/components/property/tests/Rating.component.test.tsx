import { render, screen } from '@testing-library/react'
import Rating from '../Rating.component'

jest.mock('react-rating', () => ({
  __esModule: true,
  default: jest.fn((props) => (
    <div data-testid="core-rating">{props.emptySymbol}</div>
  )),
}))

jest.mock('react-icons/fa', () => ({
  __esModule: true,
  FaRegCircle: () => <div>circle rating</div>,
  FaCircle: () => <div>rating</div>,
  FaRegStar: () => <div>empty star rating</div>,
  FaStar: () => <div>star rating</div>,
}))

describe('Rating', () => {
  it('renders self rating - circles', () => {
    const mockRatingObj = {
      ratingType: 'self',
      ratingValue: 2,
    }
    render(<Rating rating={mockRatingObj} />)
    expect(screen.getByText('circle rating')).toBeInTheDocument()
  })

  it('renders self rating - circles', () => {
    const mockRatingObj = {
      ratingType: 'non-self',
      ratingValue: 2,
    }
    render(<Rating rating={mockRatingObj} />)
    expect(screen.getByText('empty star rating')).toBeInTheDocument()
  })
})
