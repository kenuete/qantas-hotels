import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ResultsHeader from '../ResultsHeader.component'
import { SortTypes } from '../../../utils/sort'

describe('ResultsHeader Component', () => {
    const count = 5
    const searchedPlace = 'Sydney'
    const sortBy: SortTypes = 'price-high-low'
    const setSortBy = jest.fn()

    beforeEach(() => {
        setSortBy.mockClear()
    })

    test('renders count, searched place, and sort label', () => {
        render(
            <ResultsHeader
                count={count}
                sortBy={sortBy}
                setSortBy={setSortBy}
                searchedPlace={searchedPlace}
            />
        )

        expect(screen.getByText(count.toString())).toBeInTheDocument()
        expect(screen.getByText(searchedPlace)).toBeInTheDocument()
        expect(screen.getByText(/hotels in/i)).toBeInTheDocument()

        expect(screen.getByText('Sort by')).toBeInTheDocument()
    })
})