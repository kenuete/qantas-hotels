import { render, screen } from '@testing-library/react'
import Pricing from '../Pricing.component'
import type { Offer } from '../../../types'

describe('Pricing component', () => {
    it('renders pricing details with savings', () => {
        const displayPrice: Offer['displayPrice'] = { currency: 'USD', amount: 100 }
        const savings: Offer['savings'] = { currency: 'USD', amount: 20 }
        render(<Pricing id='xyz' displayPrice={displayPrice} savings={savings} />)

        expect(screen.getByText('1 night total (USD)')).toBeInTheDocument()
        expect(screen.getByTestId('pricing-amount-xyz')).toHaveTextContent('$100')
        expect(screen.getByText('Save $20~')).toBeInTheDocument()
    })

    it('renders pricing details with \u00A0 space for missing savings', () => {
        const displayPrice = { currency: 'EUR', amount: 200 }
        render(<Pricing id='abc' displayPrice={displayPrice} savings={null} />)

        expect(screen.getByText('1 night total (EUR)')).toBeInTheDocument()
        expect(screen.getByTestId('pricing-savings-amount-abc').textContent).toBe(' ')
    })
})