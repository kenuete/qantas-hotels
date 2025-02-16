import { render, screen } from '@testing-library/react'
import Address from '../Address.component'

describe('Address Component', () => {
    it('renders the combined address correctly', () => {
        const testAddress = ['123', 'Main', 'St.']
        render(<Address address={testAddress} />)
        const addressText = testAddress.join(' ')
        expect(screen.getByText(addressText)).toBeInTheDocument()
    })
})