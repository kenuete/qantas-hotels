import { render, screen, fireEvent } from '@testing-library/react'
import Sort from './Sort.component'
import { SortTypes } from '../../../utils/sort'

describe('Sort component', () => {
  const labelText = 'Sort by'
  const initialSortBy: SortTypes = 'price-high-low'
  const setup = (sortBy = initialSortBy, setSortBy = jest.fn()) => {
    render(<Sort sortBy={sortBy} setSortBy={setSortBy} labelText={labelText} />)
    const selectElement = screen.getByRole('combobox') as HTMLSelectElement
    return { selectElement, setSortBy }
  }

  it('renders with the correct label', () => {
    setup()
    expect(screen.getByText(labelText)).toBeInTheDocument()
  })

  it('renders the select with the correct value', () => {
    const { selectElement } = setup(initialSortBy)
    expect(selectElement.value).toBe(initialSortBy)
  })

  it('calls setSortBy when option is selected', () => {
    const mockSetSortBy = jest.fn()
    const { selectElement } = setup(initialSortBy, mockSetSortBy)
    fireEvent.change(selectElement, {
      target: { value: 'price-low-high' },
    })
    expect(mockSetSortBy).toHaveBeenCalledWith('price-low-high')
  })

  it('renders all available options', () => {
    setup()
    expect(
      screen.getByRole('option', { name: 'Price high-low' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('option', { name: 'Price low-high' })
    ).toBeInTheDocument()
  })
})
