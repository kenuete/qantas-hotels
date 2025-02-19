import { render, screen } from '@testing-library/react'
import Cancellation from '../Cancellation.component'
import { CancellationPolicy } from '../../../constants'

describe('Cancellation component', () => {
    it('renders the correct cancellation policy text based on cancellationType', () => {
        const cancellationOption = { cancellationType: 'NOT_REFUNDABLE'}
        render(<Cancellation cancellationOption={cancellationOption} />)
        expect(screen.getByText(CancellationPolicy.NOT_REFUNDABLE)).toBeInTheDocument()
    })

    it('renders empty string is undefined when cancellationOption is missing a valid cancellationType', () => {
        const cancellationOption = { cancellationType: 'nonExistentPolicy' }
        render(<Cancellation cancellationOption={cancellationOption} id={'abc'}/>)
        expect(screen.getByTestId('cancellation-policy-text-abc')).toHaveTextContent('')
    })
    
    it('handles when cancellationOption is undefined', () => {
        const cancellationOption = undefined
        // @ts-expect-error - Testing behavior with an undefined prop
        render(<Cancellation cancellationOption={cancellationOption} id={'abc'}/>)
        expect(screen.getByTestId('cancellation-policy-text-abc')).toHaveTextContent('')
    })    
})